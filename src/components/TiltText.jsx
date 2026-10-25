
import React, { forwardRef } from "react";

const TiltText = forwardRef(function TiltText(_, ref) {
  return (
    <div
      ref={ref}
      className="will-change-transform text-left font-serif sm:text-right"
      style={{ transformStyle: "preserve-3d" }}
    >
      <p className="mb-4 text-xs font-semibold tracking-[0.3em] text-white/50 sm:text-sm">
        CREATIVE DEVELOPER
      </p>

      <h2 className="text-4xl font-black uppercase leading-[1.05] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
        Full Stack
      </h2>

      <h2 className="mt-2 text-3xl font-semibold uppercase leading-tight text-white/90 sm:text-4xl md:text-5xl lg:text-6xl">
        <span className="text-emerald-200">Web</span> Developer
      </h2>

      <h2 className="mt-2 text-3xl font-medium uppercase leading-tight text-white/80 sm:text-4xl md:text-5xl lg:text-6xl">
        With{" "}
        <span className="font-bold text-emerald-200">AI/ML</span>
      </h2>

      <div className="mt-6 flex items-center gap-3 sm:justify-end">
        <span className="h-px w-12 bg-emerald-200/70" />
        <span className="text-xs tracking-[0.2em] text-white/50">
          BUILD · LEARN · INNOVATE
        </span>
      </div>
    </div>
  );
});

export default TiltText;
