import React from "react";

export function GridBackgroundDemo() {
  return (
    <div className="h-full w-full bg-grid-purplePink/[0.3] absolute [mask-image:radial-gradient(ellipse_at_center,transparent_30%,black)]">
      <div className="pointer-events-none inset-0 flex items-center justify-center bg-darkBlue"></div>
    </div>
  );
}
