import React from "react";

function Road() {
  return (
    <section className="relative w-full h-[460px] overflow-hidden">
      <svg
        viewBox="0 0 1000 260"
        className="absolute inset-0 w-full h-full"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id="skyGrad" gradientTransform="rotate(90)">
            <stop offset="0%" stopColor="#bfe7ff" />
            <stop offset="100%" stopColor="#eaf6ff" />
          </linearGradient>

          <linearGradient id="groundGrad" gradientTransform="rotate(90)">
            <stop offset="0%" stopColor="#e6e6e6" />
            <stop offset="100%" stopColor="#cfcfcf" />
          </linearGradient>
        </defs>

        {/* SKY */}
        <rect x="0" y="0" width="100%" height="120" fill="url(#skyGrad)" />

        {/* BUILDING — now touching road */}
        <g transform="translate(760 35) scale(0.12)" opacity="0.95">
          <image href="/Home/svg/building.svg" />
        </g>

        {/* ROAD */}
        <rect x="0" y="130" width="100%" height="45" fill="#707070" />
        <rect x="0" y="128" width="100%" height="2" fill="#5a5a5a" />

        {/* LANE MARKINGS */}
        <line
          x1="0"
          y1="152"
          x2="2000"
          y2="152"
          stroke="#ffffff"
          strokeWidth="3"
          strokeDasharray="26 18"
        >
          <animateTransform
            attributeName="transform"
            type="translate"
            from="0 0"
            to="-260 0"
            dur="1s"
            repeatCount="indefinite"
          />
        </line>

        {/* CAR */}
        <g transform="translate(470 75) scale(0.17)">
          <image href="/Home/svg/car.svg" />
        </g>

        {/* GROUND */}
        <rect x="0" y="175" width="100%" height="85" fill="url(#groundGrad)" />
      </svg>
    </section>
  );
}

export default Road;
