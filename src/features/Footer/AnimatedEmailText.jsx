import { useEffect, useRef, useState } from "react";
import { useInView } from "../hook/useInView";

export default function AnimatedEmailText() {
  const [ref, isVisible] = useInView({
    threshold: 0.3,
  });

  const text = "mariamolayiwola89@gmail.com";

  return (
    <div ref={ref} className="text-2xl font-medium flex flex-wrap">
      {text.split("").map((char, i) => (
        <a
          href="mailto:mariamolayiwola89@gmail.com"
          key={i}
          className={` pointer text-xl text-stone-400 laptop:text-5xl tablet:text-4xl
            inline-block transition-all duration-500
            ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}
          `}
          style={{
            transitionDelay: `${i * 50}ms`,
          }}
        >
          {char === " " ? "\u00A0" : char}
        </a>
      ))}
    </div>
  );
}
