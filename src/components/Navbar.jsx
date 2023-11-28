import React, { useLayoutEffect, useRef, useState } from "react";
import Logo from "../assets/logo.svg";
import gsap from "gsap";
import { IoCloseSharp } from "react-icons/io5";

import ScrollTrigger from "gsap/ScrollTrigger";

import { RiMenu5Fill } from "react-icons/ri";

const Navbar = () => {
  let nav = useRef(null);
  let show = useRef(null);
  let close = useRef(null);
  const [hidden, setHidden] = useState(true);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      let tl = gsap.timeline({ paused: false, reversed: false });
      const links = document.querySelectorAll(".item");
      tl.to(nav.current, {
        y: 0,
        duration: 0.5,
        ease: "expo.inOut",
      });
      tl.to(links, {
        opacity: 1,
        stagger: ".2",
      });

      tl.reversed(true);
      show.current.addEventListener("click", () => {
        tl.reversed(!tl.reversed());
      });
      close.current.addEventListener("click", () => {
        tl.reversed(!tl.reversed());
      });
    });
    return () => ctx.revert();
  }, [hidden]);
  function navClick() {
    close.current.click();
  }
  return (
    <>
      <div className="fixed top-0 left-0   w-[100vw]  glass z-[99]">
        <div className="container mx-auto flex justify-between items-center pt-2 z-[103] ">
          <div className="cursor-pointer">
            <img src={Logo} alt="logo" className="scale-90 " />
          </div>
          <div className="cursor-pointer w-fit h-fit " ref={show}>
            <RiMenu5Fill fill="white" size={35} />
          </div>
        </div>
      </div>

      {/* Start Full Navigation Minu*/}
      <div
        className="fixed top-0 left-0 w-screen h-[100dvh] bg-black z-[100] overflow-hidden font-extrabold nav"
        ref={nav}
      >
        <div
          className="mt-10 w-full flex justify-end container mx-auto absolute "
          ref={close}
        >
          <IoCloseSharp size={35} className="cursor-pointer" />
        </div>
        <div className=" container mx-auto w-full h-full">
          <div className="item-container flex flex-col gap-6 justify-center h-full">
            <a
              href="#home"
              className="item group relative trans-el"
              onClick={navClick}
            >
              <p className="text-4xl group-hover:hidden pl-8">Home</p>
              <img
                src={Logo}
                alt=""
                className="scale-0 absolute group-hover:scale-100 z-[101] trans-el left-[10%] top-0"
              />
              <div className="wrapper overflow-hidden trans-el">
                <span className="overflow-hidden w-fit whitespace-nowrap text-4xl group-hover:translate-x-[10px] group-hover:block hidden trans-el text-[#2d2d2d]">
                  Home - Home - Home - Home - Home - Home - Home - Home - Home -
                  Home - Home - Home -{" "}
                </span>
              </div>
            </a>
            <a
              href="#about"
              className="item group relative trans-el"
              onClick={navClick}
            >
              <p className="text-4xl group-hover:hidden pl-8">About</p>
              <img
                src={Logo}
                alt=""
                className="scale-0 absolute group-hover:scale-100 z-[101] trans-el left-[10%] top-0"
              />
              <div className="wrapper overflow-hidden">
                <span className="overflow-hidden w-fit whitespace-nowrap text-4xl group-hover:translate-x-[10px] group-hover:block hidden trans-el text-[#2d2d2d]">
                  About - About - About - About - About - About - About - About
                  - About - About - About - About - About -{" "}
                </span>
              </div>
            </a>
            <a
              href="#portfolio"
              className="item group relative trans-el"
              onClick={navClick}
            >
              <p className="text-4xl group-hover:hidden pl-8">Portfolio</p>
              <img
                src={Logo}
                alt=""
                className="scale-0 absolute group-hover:scale-100 z-[101] trans-el left-[10%] top-0"
              />
              <div className="wrapper overflow-hidden">
                <span className="overflow-hidden w-fit whitespace-nowrap text-4xl group-hover:translate-x-[10px] group-hover:block hidden opacity-0  trans-el text-[#2d2d2d]">
                  Portfolio - Portfolio - Portfolio - Portfolio - Portfolio -
                  Portfolio - Portfolio - Portfolio - Portfolio -{" "}
                </span>
              </div>
            </a>
            <a
              href="#contact"
              className="item group relative trans-el"
              onClick={navClick}
            >
              <p className="text-4xl group-hover:hidden pl-8">Contact</p>
              <img
                src={Logo}
                alt=""
                className="scale-0 absolute group-hover:scale-100 z-[101] trans-el left-[10%] top-0"
              />
              <div className="wrapper overflow-hidden">
                <span className="overflow-hidden w-fit whitespace-nowrap text-4xl group-hover:translate-x-[10px]  group-hover:block hidden trans-el text-[#2d2d2d]">
                  Contact - Contact - Contact - Contact - Contact - Contact -
                  Contact - Contact - Contact - Contact - Contact - Contact -{" "}
                </span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
