"use client";

import { useEffect } from "react";
import Link from "next/link";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

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
    const bgColors = ["#ed731d", "#3aafa9", "#0F2A5F", "#AC3C25", "#3aafa9"];

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
              0
            )
            .to(
              nextImage,
              {
                objectPosition: "0px 40%",
                duration: 1.5,
                ease: "power1.out",
              },
              0
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
      <div className="w-full py-12 bg-gradient-to-r from-[#FF8B61] via-[#10404A] to-[#10404A] shadow-lg">
        <div className="max-w-7xl mx-auto px-6 xl:px-16 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-extrabold text-white">
              Campus Events & Activities
            </h1>
            <p className="mt-3 text-white/90 max-w-xl">
              Celebrating culture, creativity, leadership, and student life
              through memorable campus events.
            </p>
          </div>

          <div className="hidden md:block">
            <video
              src="/chanu/chanudancev1.mp4"
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              width="220"
              height="220"
              className="rounded-xl object-cover shadow-lg"
            />
          </div>
        </div>
      </div>

      {/* ================= GSAP SECTION ================= */}
      <div className="full-width-container">
        <div className="arch">
          {/* LEFT */}
          <div className="arch__left">
            {[
              {
                title: "Gusto",
                desc: "A vibrant cultural festival showcasing dance, music, art, and student creativity.",
                link: "/gallery/gusto",
              },
              {
                title: "Indira Diversity Awards",
                desc: "Recognizing excellence, inclusion, and leadership across diverse communities.",
                link: "/gallery/indira-diversity-awards",
              },
              {
                title: "Navratri Celebrations",
                desc: "Traditional festivities filled with Garba, Dandiya, and cultural togetherness.",
                link: "/gallery/navratri",
              },
              {
                title: "Indira Women Achievers Awards",
                desc: "Celebrating inspiring women and their achievements across domains.",
                link: "/gallery/indira-women-achievers",
              },
              {
                title: "Splash",
                desc: "An energetic campus celebration filled with music, joy, and student spirit.",
                link: "/gallery/splash",
              },
              {
                title: "Chanakya Sports Complex",
                desc: "Promoting teamwork, fitness, and competitive spirit through sports.",
                link: "/gallery/chanakya-sports",
              },
            ].map((event, i) => (
              <div className="arch__info" key={i}>
                <div className="content">
                  <h2 className="header">{event.title}</h2>
                  <p className="desc">{event.desc}</p>

                  <Link href={event.link} className="link">
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
                "/events/gusto.jpg",
                "/events/BParak.jpg",
                "/events/Navratri.JPG",
                "/events/Sunnidhi.jpg",
                "/events/Navratri.JPG",
                "/events/Sunnidhi.jpg",
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
