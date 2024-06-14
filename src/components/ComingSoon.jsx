import { useEffect, useRef } from "react";
import { gsap } from "gsap";

function ComingSoon() {
  const leftEyeRef = useRef(null);
  const rightEyeRef = useRef(null);

  useEffect(() => {
    gsap.set(".flair", { xPercent: -50, yPercent: -50 });

    const xTo = gsap.quickTo(".flair", "x", { duration: 0.6, ease: "power3" });
    const yTo = gsap.quickTo(".flair", "y", { duration: 0.6, ease: "power3" });

    const handleMouseMove = (e) => {
      xTo(e.clientX);
      yTo(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  return (
    <div className="h-screen bg-secondary">
      <img
        src="https://lensakita-images.vercel.app/images/logo-lk-green.png"
        className="flair h-16"
      />
    </div>
  );
}

export default ComingSoon;
