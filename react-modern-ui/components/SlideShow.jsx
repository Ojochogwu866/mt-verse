"use client";
import { useState, useRef, useEffect } from "react";
import gsap from "gsap";

const SlideShow = ({ images }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeInterval, setActiveInterval] = useState(null);
  const imageRef = useRef(null);

  const handleMouseEnter = () => {
    const intervalId = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000);
    setActiveInterval(intervalId);
  };

  const handleMouseLeave = () => {
    clearInterval(activeInterval);
  };

  useEffect(() => {
    if (imageRef.current) {
      gsap.to(imageRef.current, {
        duration: 1.5,
        x: -50,
        opacity: 0,
        ease: "power3.out",
        onComplete: () => {
          gsap.set(imageRef.current, { x: 50, opacity: 0 });
          gsap.to(imageRef.current, {
            duration: 1.5,
            x: 0,
            opacity: 1.0,
            ease: "power3.out",
          });
        },
      });
    }
  }, [activeIndex]);

  return (
    <div className="">
      <img
        className="w-[400px] sm:h-[500px] h-[350px] object-cover rounded-[40px] z-10 relative"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        src={images[activeIndex].src}
        alt={images[activeIndex].alt}
        ref={imageRef}
      />
    </div>
  );
};

export default SlideShow;
{
  /* <div className="">
<img
  className="md:w-[400px] sm:h-[500px] h-[350px] object-cover rounded-[40px] z-10 relative"
  onMouseEnter={handleMouseEnter}
  onMouseLeave={handleMouseLeave}
  src={images[activeIndex].src}
  alt={images[activeIndex].alt}
  ref={imageRef}
/>
</div> */
}
