"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";

const videos = [
  {
    title:
      "Ek aisa College jo kisi Resort se Kam nahi || Indira College of Engineering & Management",
    thumbnail: "https://img.youtube.com/vi/VFNW2xjcLS4/0.jpg",
    url: "https://youtu.be/VFNW2xjcLS4?si=82O2nNba-C76P6Sj",
  },
  {
    title: "ICEM (Indira College of Engineering and Management) Award Function",
    thumbnail: "https://img.youtube.com/vi/KrkLiGVGeT0/0.jpg",
    url: "https://youtu.be/KrkLiGVGeT0?si=-OHivtfzbudfoUWz",
  },
  {
    title: "Sunidhi Chauhan at ICEM",
    thumbnail: "https://img.youtube.com/vi/UxjeDzFtpMY/0.jpg",
    url: "https://youtu.be/UxjeDzFtpMY?si=1PQkCtSjM5gDA0ez",
  },
  {
    title:
      "Life at Indira University, Pune | Explore Vibrant Campus Life | Cutting Edge Facilities",
    thumbnail: "https://img.youtube.com/vi/gEXvD4OVyXg/0.jpg",
    url: "https://youtu.be/gEXvD4OVyXg?si=68Sex6D7MOVnPik3",
  },
];

function toEmbedUrl(url) {
  if (!url) return "";
  const match = url.match(/(?:v=|\/)([0-9A-Za-z_-]{11})(?:\?|&|$)/);
  const videoId = match ? match[1] : null;
  return videoId ? `https://www.youtube.com/embed/${videoId}` : url;
}




/**
 * CollegeUnplugged
 *
 * Behavior:
 * - The left list items are clickable.
 * - Clicking an item FLIP-animates the clicked list item into the right player area.
 * - The current player animates back into the list slot of the clicked item.
 *
 * Implementation details:
 * - Each list item has a ref (itemRefs).
 * - The player container has a ref (playerRef).
 * - On click we create two temporary "clone" DOM nodes (position:fixed) and animate them using CSS transforms.
 * - After transition ends we set selectedIndex state.
 */
export default function CollegeUnplugged() {
  const [selectedIndex, setSelectedIndex] = useState(0); // which video is in the big player
  const itemRefs = useRef([]); // itemRefs.current[index] = DOM node of list item
  const playerRef = useRef(null); // large player container

  // utility: create clone element from a DOM node and style it for animation
  const createClone = (sourceRect, contentNode) => {
    const clone = document.createElement("div");
    clone.style.position = "fixed";
    clone.style.left = `${sourceRect.left}px`;
    clone.style.top = `${sourceRect.top}px`;
    clone.style.width = `${sourceRect.width}px`;
    clone.style.height = `${sourceRect.height}px`;
    clone.style.zIndex = 9999;
    clone.style.pointerEvents = "none";
    clone.style.borderRadius = getComputedStyle(contentNode).borderRadius || "8px";
    clone.style.overflow = "hidden";
    clone.style.boxShadow = "0 10px 30px rgba(0,0,0,0.15)";
    clone.style.transition = "transform 520ms cubic-bezier(.2,.9,.3,1), left 520ms cubic-bezier(.2,.9,.3,1), top 520ms cubic-bezier(.2,.9,.3,1), width 520ms, height 520ms, opacity 320ms";
    return clone;
  };

  // main function: animate swap from clickedIndex -> selectedIndex
  const handleSelect = (clickedIndex) => {
    if (clickedIndex === selectedIndex) return; // nothing to do

    const fromNode = itemRefs.current[clickedIndex];
    const toNode = playerRef.current;

    if (!fromNode || !toNode) {
      setSelectedIndex(clickedIndex);
      return;
    }

    // bounding rects
    const fromRect = fromNode.getBoundingClientRect();
    const toRect = toNode.getBoundingClientRect();

    // Create clone of clicked item that will animate to the player position
    const cloneFrom = createClone(fromRect, fromNode);
    // populate cloneFrom with thumbnail + title (simple)
    cloneFrom.innerHTML = `
      <div style="display:flex;align-items:center;height:100%">
        <img src="${videos[clickedIndex].thumbnail}" style="width:40%;height:100%;object-fit:cover;display:block" />
        <div style="padding:10px;flex:1;display:flex;align-items:center">
          <div style="font-size:14px;color:#0f172a">${escapeHtmlShort(videos[clickedIndex].title)}</div>
        </div>
      </div>
    `;
    document.body.appendChild(cloneFrom);

    // Create clone of current player that will animate to the clicked list item's position
    const cloneTo = createClone(toRect, toNode);
    // populate cloneTo with player thumbnail of selectedIndex
    cloneTo.innerHTML = `
      <div style="width:100%;height:100%;background:#000;display:flex;align-items:center;justify-content:center">
        <img src="${videos[selectedIndex].thumbnail}" style="width:60%;height:60%;object-fit:cover;border-radius:6px" />
      </div>
    `;
    document.body.appendChild(cloneTo);

    // Hide original elements visually during animation
    fromNode.style.visibility = "hidden";
    toNode.style.visibility = "hidden";

    // force style flush
    /* eslint-disable no-unused-expressions */
    cloneFrom.getBoundingClientRect();
    cloneTo.getBoundingClientRect();

    // animate clones to new positions (use left/top/width/height)
    cloneFrom.style.left = `${toRect.left}px`;
    cloneFrom.style.top = `${toRect.top}px`;
    cloneFrom.style.width = `${toRect.width}px`;
    cloneFrom.style.height = `${toRect.height}px`;
    cloneFrom.style.transform = `none`;

    cloneTo.style.left = `${fromRect.left}px`;
    cloneTo.style.top = `${fromRect.top}px`;
    cloneTo.style.width = `${fromRect.width}px`;
    cloneTo.style.height = `${fromRect.height}px`;
    cloneTo.style.transform = `none`;

    // subtle fade / scale on clones
    cloneFrom.style.opacity = "1";
    cloneTo.style.opacity = "1";

    // after transition ends: cleanup clones and reveal final UI
    let finished = 0;
    const onFinish = () => {
      finished += 1;
      if (finished < 2) return;

      // cleanup clones
      cloneFrom.remove();
      cloneTo.remove();

      // restore visibility
      fromNode.style.visibility = "";
      toNode.style.visibility = "";

      // set new selected index (this will update the right player)
      setSelectedIndex(clickedIndex);
    };

    // Listen for transitionend (safeguard with timeout)
    const clearHandlers = () => {
      cloneFrom.removeEventListener("transitionend", onFinish);
      cloneTo.removeEventListener("transitionend", onFinish);
      // fallback cleanup
      setTimeout(() => {
        if (document.body.contains(cloneFrom)) cloneFrom.remove();
        if (document.body.contains(cloneTo)) cloneTo.remove();
        fromNode.style.visibility = "";
        toNode.style.visibility = "";
        setSelectedIndex(clickedIndex);
      }, 700);
    };

    cloneFrom.addEventListener("transitionend", onFinish);
    cloneTo.addEventListener("transitionend", onFinish);

    // safety timeout in case transitionend doesn't fire
    setTimeout(() => {
      clearHandlers();
    }, 900);
  };

  return (
    <div className="bg-white py-8 sm:py-12">
      <div className="max-w-7xl mx-auto ">
        <h2 className="text-2xl font-semibold mb-6">Indira College Unplugged</h2>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left list */}
          <div className="lg:col-span-5 space-y-4">
            {videos.map((v, i) => (
              <div
                key={i}
                ref={(el) => (itemRefs.current[i] = el)}
                onClick={() => handleSelect(i)}
                className={`flex items-center gap-4 p-3 rounded-lg border cursor-pointer transition-shadow duration-300 ${
                  selectedIndex === i ? "bg-white shadow-md border-blue-100" : "bg-gray-50 border-gray-100"
                }`}
                style={{ minHeight: 72 }}
              >
                <div className="relative w-28 h-16 rounded-md overflow-hidden flex-shrink-0">
                  <Image src={v.thumbnail} alt={v.title} fill className="object-cover" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-sm font-medium text-gray-800 line-clamp-2">{v.title}</div>
                </div>

                {/* indicator when this is currently selected (in player) */}
                {selectedIndex === i && (
                  <div className="ml-2 text-xs text-blue-600 font-medium">Playing</div>
                )}
              </div>
            ))}
          </div>

          {/* Right player area (target) */}
          <div className="lg:col-span-7">
            <div
              ref={playerRef}
              className="w-full bg-black rounded-xl overflow-hidden shadow-xl"
              style={{ minHeight: 240 }}
            >
              {/* iframe player */}
              <iframe
                key={videos[selectedIndex].url}
                width="100%"
                height="100%"
                className="min-h-[240px] lg:min-h-[360px]"
                src={toEmbedUrl(videos[selectedIndex].url)}
                title={videos[selectedIndex].title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>

            {/* title + description below player */}
            <div className="mt-4 p-3">
              <h3 className="text-lg font-semibold text-gray-800">{videos[selectedIndex].title}</h3>
              <p className="text-sm text-gray-600 mt-2">
                Watch the full video to explore campus life, events and facilities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* small helper: escape HTML for short strings used in clone innerHTML */
function escapeHtmlShort(str) {
  return String(str).replace(/[&<>"']/g, (s) => {
    const map = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" };
    return map[s];
  });
}
