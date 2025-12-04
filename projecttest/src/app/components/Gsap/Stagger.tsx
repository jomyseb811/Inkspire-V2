import React, { useEffect, useRef } from "react";
import gsap from "gsap";

export default function StaggerExample() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const boxes = gsap.utils.toArray<HTMLDivElement>(
      containerRef.current.querySelectorAll(".box")
    );

    gsap.from(boxes, {
      opacity: 0,
      x:-210 ,
      y: -200,
      stagger:0.2,
      duration:2,
      ease: "bounce.in",
    });
//       stagger: {
//     each: 0.2,      // delay between each
//     from: "center", // start from center and go outward
//     // options: "start", "end", "center", "edges", function(index)
//     ease: "power1.inOut"
//   },


    return () => {
      gsap.killTweensOf(boxes);
    };
  }, []);

  return (
    <>
    <div
      ref={containerRef}
      className="flex justify-center gap-4 mt-12"
    >
      {[...Array(5)].map((_, i) => (
        <div
          key={i}
          className="box w-16 h-16 rounded-lg"
          style={{ backgroundColor: `hsl(${i * 70}, 70%, 60%)` }}
        />
      ))}

    </div>
      {/* <div className="mb-8 bg-amber-200 w-48"><p>Refresh the page First</p></div> */}
</>
  );
}
