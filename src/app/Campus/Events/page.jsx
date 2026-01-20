"use client";

import { useEffect } from "react";
import Link from "next/link";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { eventsData } from "@/static/eventsData";

gsap.registerPlugin(ScrollTrigger);

export default function EventsPage() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    /* ================= Z-INDEX ================= */
    document.querySelectorAll(".img-wrapper").forEach((el) => {
      const order = el.getAttribute("data-index");
      if (order) el.style.zIndex = order;
    });

    /* ================= MOBILE ORDER ================= */
    const handleMobileLayout = () => {
      const isMobile = window.matchMedia("(max-width: 768px)").matches;
      const leftItems = gsap.utils.toArray(".arch__left .arch__info");
      const rightItems = gsap.utils.toArray(".arch__right .img-wrapper");

      if (isMobile) {
        leftItems.forEach((item, i) => (item.style.order = i * 2));
        rightItems.forEach((item, i) => (item.style.order = i * 2 + 1));
      } else {
        leftItems.forEach((item) => (item.style.order = ""));
        rightItems.forEach((item) => (item.style.order = ""));
      }
    };

    handleMobileLayout();
    window.addEventListener("resize", handleMobileLayout);

    /* ================= GSAP ================= */
    const imgs = gsap.utils.toArray(".img-wrapper img");
    const bgColors = ["#7A2638", "#1E3A5F", "#3A1F1A", "#2F3A12", "#3aafa9"];

    ScrollTrigger.matchMedia({
      "(min-width: 769px)": () => {
        const arch = document.querySelector(".arch");
        const left = document.querySelector(".arch__left");

        const mainTimeline = gsap.timeline({
          scrollTrigger: {
            trigger: arch,
            scroller: document.documentElement,
            start: "top top",
            end: () => "+=" + (left.scrollHeight - window.innerHeight),
            pin: ".arch__right-pin",
            pinType: "transform",
            pinSpacing: true,
            scrub: 0.6,
            anticipatePin: 1,
            invalidateOnRefresh: false,
          },
        });

        gsap.set(imgs, {
          clipPath: "inset(0)",
          objectPosition: "0px 0%",
        });

        imgs.forEach((_, index) => {
          const currentImage = imgs[index];
          const nextImage = imgs[index + 1];
          if (!nextImage) return;

          const tl = gsap.timeline();

          tl.to(".full-width-container", {
            backgroundColor: bgColors[index],
            duration: 1.5,
            ease: "power2.inOut",
          })
            .to(
              currentImage,
              {
                clipPath: "inset(0px 0px 100%)",
                objectPosition: "0px 60%",
                duration: 1.5,
                ease: "power1.out",
              },
              0,
            )
            .to(
              nextImage,
              {
                objectPosition: "0px 40%",
                duration: 1.5,
                ease: "power1.out",
              },
              0,
            );

          mainTimeline.add(tl);
        });
      },
    });

    ScrollTrigger.config({
      ignoreMobileResize: true,
    });

    return () => {
      window.removeEventListener("resize", handleMobileLayout);
      ScrollTrigger.killAll();
    };
  }, []);

  return (
    <>
      {/* ================= HEADING ================= */}
 <div className="w-full h-[88vh] bg-white relative">

  {/* 🔤 Absolute overlay text */}
<div className="absolute inset-0 z-30 flex items-center justify-center pointer-events-none">
  <h2
    className="
      text-4xl md:text-6xl xl:text-8xl
      font-extrabold
      text-white
      tracking-wide
      drop-shadow-[0_6px_18px_rgba(0,0,0,0.9)]
      [text-shadow:0_2px_8px_rgba(0,0,0,0.8)]
      animate-fade-up
    "
  >
    Your Dream Campus Life
  </h2>
</div>
  {/* 🌑 Dark overlay for contrast */}
  <div className="absolute inset-0 z-20 bg-black/30" />

  {/* 🖼️ Image Grid */}
  <div
    className="
      grid h-full w-full
      grid-cols-6 grid-rows-6
      gap-2
      relative z-10
    "
  >
    {/* div1 */}
    <div className="col-span-2 row-span-2 relative overflow-hidden">
      <img
        src="/newEvents/IWA8.jpg"
        alt="Event 1"
        className="h-full w-full object-cover"
      />
    </div>

    {/* div2 */}
    <div className="col-span-2 row-span-2 col-start-3 relative overflow-hidden">
      <img
        src="/newEvents/IDA1.jpg"
        alt="Event 2"
        className="h-full w-full object-cover object-top"
      />
    </div>

    {/* div3 (tall right) */}
    <div className="col-span-2 row-span-4 col-start-5 relative overflow-hidden">
      <img
        src="/newEvents/IDA12.JPG"
        alt="Event 3"
        className="h-full w-full object-cover object-top"
      />
    </div>

    {/* div5 (tall left) */}
    <div className="col-span-2 row-span-4 row-start-3 relative overflow-hidden">
      <img
        src="/newEvents/IWA2.jpg"
        alt="Event 5"
        className="h-full w-full object-cover"
      />
    </div>

    {/* div9 (center square) */}
    <div className="col-span-2 row-span-2 col-start-3 row-start-3 relative overflow-hidden">
      <img
        src="/newEvents/Gusto4.jpg"
        alt="Campus Beat"
        className="h-full w-full object-cover"
      />
    </div>

    {/* div7 */}
    <div className="col-span-2 row-span-2 col-start-3 row-start-5 relative overflow-hidden">
      <img
        src="/newEvents/IWA12.jpg"
        alt="Event 7"
        className="h-full w-full object-cover"
      />
    </div>

    {/* div8 */}
    <div className="col-span-2 row-span-2 col-start-5 row-start-5 relative overflow-hidden">
      <img
        src="/newEvents/Splash6.jpg"
        alt="Event 8"
        className="h-full w-full object-cover object-top"
      />
    </div>
  </div>
</div>





      {/* ================= GSAP SECTION ================= */}
      <div className="full-width-container">
        <div className="arch">
          {/* LEFT */}
          <div className="arch__left">
            {eventsData.map((event) => (
              <div className="arch__info" key={event.id}>
                <div className="content">
                  <h2 className="header">{event.title}</h2>
                  <p className="desc">{event.description}</p>

                  <Link href={`/Campus/Events/gallery/${event.id}`} className="link">
                    <span>View Gallery</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* RIGHT */}
          <div className="arch__right-pin">
            <div className="arch__right">
              {[
                "/newEvents/BParak.jpg",
                "/newEvents/IWA1.jpg",
                "/newEvents/Gusto1.jpg",
                "/newEvents/Navratri1.JPG",
                "/newEvents/Splash6.jpg",
  
              ].map((src, i) => (
                <div className="img-wrapper" data-index={6 - i} key={i}>
                  <img src={src} alt={`event-${i}`} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
