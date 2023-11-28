import React, { useEffect, useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
const Popup = ({ show, setShow, data }) => {
  let pop = useRef(null);
  let close = useRef(null);
  let img = useRef(null);
  let content = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      let tl = gsap.timeline({
        yoyo: true,
        paused: false,
        reversed: false,
      });
      tl.to(pop.current, {
        duration: 0.4,
        top: "0",
        opacity: 1,
        stagger: 0.2,
        ease: "expo.inOut",
      })
        .from(content.current, {
          duration: 0.4,
          x: "1000px",
          stagger: 0.2,

          ease: "expo.inOut",
        })
        .to(img.current, {
          duration: 0.1,
          x: "0",
          stagger: 0.2,

          ease: "expo.inOut",
        });

      tl.reversed(!show);
      close.current.addEventListener("click", () => {
        tl.reversed(!tl.reversed());
        setTimeout(() => {
          setShow(false);
        }, 1500);
      });

      /*
        setHidden(!hidden);
        */
    });
    return () => ctx.revert();
  }, [show]);

  return (
    <div
      className=" h-[100vh] w-full fixed z-[200] bg-black left-0 top-[1000px]"
      ref={pop}
    >
      <button
        ref={close}
        className="absolute right-0 top-0 m-4 md:text-2xl text-xl font-mono uppercase font-extrabold z-[10000]"
      >
        Close
      </button>
      <div className="container mx-auto flex md:flex-row flex-col w-full h-full  items-center text-2xl font-bold md:gap-6 gap-1">
        <div
          className=" w-full  h-[600px] overflow-hidden rounded-2xl filt  translate-x-[-1000px]"
          ref={img}
        >
          <img src={data.img} alt="" className="w-full h-full object-cover" />
        </div>
        <div
          className=" w-full h-[600px] flex flex-col md:gap-4 gap-2 justify-center  "
          ref={content}
        >
          <h3 className="text-6xl font-['Anton'] stk font-normal">
            {data.title}
          </h3>
          <p>Author : Islam Nauib</p>
          <div className="flex gap-4">
            <span> Tools : </span>
            <div className="flex flex-col">
              {data.tech.map((e, i) => (
                <span key={i}>{e} </span>
              ))}
            </div>
          </div>
          <p>
            Link :{" "}
            <a href={data.link} className="underline">
              {data.title}
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Popup; /*

/*

 useEffect(() => {
    let ctx = gsap.context(() => {
      let tl = gsap.timeline({
        yoyo: true,
        paused: false,
        reversed: false,
      });
      tl.to(pop.current, {
        duration: 0.4,
        top: "0",
        opacity: 1,
        stagger: 0.2,
        ease: "expo.inOut",
      })
        .from(content.current, {
          duration: 0.4,
          x: "1000px",
          stagger: 0.2,

          ease: "expo.inOut",
        })
        .to(img.current, {
          duration: 0.1,
          x: "0",
          stagger: 0.2,

          ease: "expo.inOut",
        });

      tl.reversed(!show);
    });

    close.current.addEventListener("click", () => {
      tl.reversed(!tl.reversed());

      /*
        setHidden(!hidden);
        */ /*
      });
      return () => ctx.revert();
    }, [show]);

    */
