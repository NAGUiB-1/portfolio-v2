import { useEffect, useLayoutEffect, useState, useRef } from "react";
import hoverEffect from "hover-effect";
import Image1 from "../assets/image1.png";
import Image2 from "../assets/image2.png";
import gsap from "gsap";

import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function Test() {
  const [count, setCount] = useState(0);
  const component = useRef();
  const slider = useRef();

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      let panels = gsap.utils.toArray(".panel");
      gsap.to(panels, {
        xPercent: -100 * (panels.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: slider.current,
          pin: true,
          scrub: 1,
          snap: 1 / (panels.length - 1),
          end: () => "+=" + slider.current.offsetWidth,
          markers: true,
        },
      });
    }, component);
    return () => ctx.revert();
  });
  /*
  useEffect(() => {
    let myAnimation = new hoverEffect({
      parent: document.querySelector(".my-div"),
      intensity: 0.3,
      image1: Image1,
      image2: Image2,
      displacementImage: Image2,
    });
  });
*/
  return (
    <div ref={component}>
      {/* <div className="my-div h-[200px] w-[400px]  "></div>*/}
      <div className="box-container" ref={slider}>
        <div className="panel  bg-black grid grid-cols-2 gap-4 "></div>
        <div className="panel "></div>
      </div>
      <div className="w-screen h-screen bg-red-500"></div>
    </div>
  );
}

export default Test;
/*
useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      let panels = gsap.utils.toArray(".panel");
      gsap.to(panels, {
        xPercent: -100 * (panels.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: slider.current,
          pin: true,
          scrub: 1,
          // snap: 1 / (panels.length - 1),
          end: () => "+=" + slider.current.offsetWidth,
        },
      });
    }, component);
    return () => ctx.revert();
  });*/
