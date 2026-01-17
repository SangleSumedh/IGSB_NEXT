import React from "react";

function NewComponentJsx() {
  return (
    <div className="w-full h-auto">
      <video
        src="/chanu/ChanuNew/1.webm"
        autoPlay
        muted
        loop
        playsInline
        className="w-full h-auto object-cover"
      >
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

export default NewComponentJsx;
