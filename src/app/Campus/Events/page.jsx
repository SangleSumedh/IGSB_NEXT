"use client";

import React, { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Lenis from "@studio-freight/lenis";

gsap.registerPlugin(ScrollTrigger);

export default function Page() {
  useEffect(() => {
    /* ================= LENIS ================= */
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
      smoothTouch: true,
      touchMultiplier: 2,
    });

    function raf(time) {
      lenis.raf(time);
      ScrollTrigger.update();
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

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

    let resizeTimeout;
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(handleMobileLayout, 100);
    };

    handleMobileLayout();
    window.addEventListener("resize", handleResize);

    /* ================= GSAP ================= */
    const imgs = gsap.utils.toArray(".img-wrapper img");
    const bgColors = ["#362F4F", "#5B23FF", "#008BFF", "#E4FF30"];

    ScrollTrigger.matchMedia({
      "(min-width: 769px)": () => {
        const mainTimeline = gsap.timeline({
          scrollTrigger: {
            trigger: ".arch",
            start: "top top",
            end: "bottom bottom",
            pin: ".arch__right",
            scrub: true,
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

          tl.to(
            ".full-width-container",
            {
              backgroundColor: bgColors[index],
              duration: 1.5,
              ease: "power2.inOut",
            },
            0
          )
            .to(
              currentImage,
              {
                clipPath: "inset(0px 0px 100%)",
                objectPosition: "0px 60%",
                duration: 1.5,
                ease: "none",
              },
              0
            )
            .to(
              nextImage,
              {
                objectPosition: "0px 40%",
                duration: 1.5,
                ease: "none",
              },
              0
            );

          mainTimeline.add(tl);
        });
      },

      "(max-width: 768px)": () => {
        gsap.set(imgs, { objectPosition: "0px 60%" });

        imgs.forEach((image, index) => {
          gsap
            .timeline({
              scrollTrigger: {
                trigger: image,
                start: "top-=70% top+=50%",
                end: "bottom+=200% bottom",
                scrub: true,
              },
            })
            .to(image, {
              objectPosition: "0px 30%",
              duration: 5,
              ease: "none",
            })
            .to(".full-width-container", {
              backgroundColor: bgColors[index],
              duration: 1.5,
              ease: "power2.inOut",
            });
        });
      },
    });

    return () => {
      window.removeEventListener("resize", handleResize);
      ScrollTrigger.killAll();
      lenis.destroy();
    };
  }, []);

  return (
    <>
      {/* ================= HEADING ================= */}
      <div className="w-full py-12 bg-gradient-to-r from-[#FF8B61] via-[#10404A] to-[#10404A] shadow-lg">
        <div className="max-w-7xl mx-auto px-6 xl:px-16 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white">
            Campus Events & Activities
          </h1>
          <div className="mx-auto mt-4 mb-4 w-16 h-[3px] rounded-full bg-white" />
          <p className="text-lg text-white/90 max-w-3xl mx-auto leading-relaxed">
            Experience the vibrant life at our campus through exciting events,
            workshops, and cultural celebrations that shape our community spirit.
          </p>
        </div>
      </div>

      {/* ================= GSAP SECTION ================= */}
      <div className="full-width-container">
        <div className="arch">
          {/* LEFT */}
          <div className="arch__left">
            {[
              "Gusto Cultural Fest",
              "B.Parliament Debate",
              "Navratri Celebrations",
              "Sunidhi Live Concert",
            ].map((title, i) => (
              <div className="arch__info" key={i}>
                <div className="content">
                  <h2 className="header">{title}</h2>
                  <p className="desc">
                    Replace this text with event-specific content.
                  </p>
                  <a className="link" href="#">
                    <span>View Gallery</span>
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* RIGHT */}
          <div className="arch__right">
            {[
              "/events/gusto.jpg",
              "/events/BParak.jpg",
              "/events/Navratri.JPG",
              "/events/Sunnidhi.jpg",
            ].map((src, i) => (
              <div className="img-wrapper" data-index={4 - i} key={i}>
                <img src={src} alt={`event-${i}`} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
