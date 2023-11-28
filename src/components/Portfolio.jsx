import React, { useLayoutEffect, useRef, useState } from "react";
import { data } from "./data";
import EachProject2 from "./EachProject2";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
const Portfolio = () => {
  let [projects, setProjects] = useState(data);
  const component = useRef();
  const slider = useRef();
  const h3 = useRef();

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      let gsapItem = gsap.utils.toArray(".item-container");
      gsapItem.forEach((gsi) => {
        const imgnum = gsi.querySelector(".item-text");
        const imgInner = gsi.querySelector(".inner");
        const imgBlock = gsi.querySelector(".img-item ");
        const img = gsi.querySelector(".img-self ");

        let tl = gsap.timeline({
          scrollTrigger: {
            trigger: gsi,
            start: "top 70%",
            toggleActions: "play none none reverse",
          },
        });
        tl.from(imgnum, 1, {
          opacity: 0,
          translateY: "80px",
          ease: "expo.out",
        });
        tl.to(
          imgInner,
          0.5,
          {
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
            ease: "expo.out",
          },
          "-=1"
        );
        tl.to(
          imgBlock,
          1,
          {
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
            ease: "expo.out",
          },
          "-=0.1"
        );
        tl.from(
          img,
          1.5,
          {
            scale: 1.5,
            filter: "blur(15px)",
            ease: "expo.out",
          },
          "-=0.1"
        );
      });
    }, component);
    return () => ctx.revert();
  });

  return (
    <div className="pt-20 mb-40" ref={component} id="portfolio">
      <h3
        className="font-['Black_Ops_One']  md:text-6xl text-4xl uppercase z-[100] w-screen mb-10"
        ref={h3}
      >
        My Works
      </h3>
      <div
        className="  md:gap-14 gap-8 grid grid-cols-1 md:grid-cols-2 md:my-5  slider"
        ref={slider}
      >
        {data.map((el, i) => (
          <EachProject2 data={el} key={i} number={i + 1} all={data.length} />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;

/*
 let ctx = gsap.context(() => {
   });
    return () => ctx.revert();
*/
