import React from "react";

export function GridBackgroundDemo() {
  return (
    <div className="h-full w-full dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] absolute [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]">
      {/* Radial gradient for the container to give a faded look */}
      <div className="pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white "></div>
    </div>
  );
}
