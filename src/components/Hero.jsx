import React, { useEffect, useLayoutEffect, useRef } from "react";
import Logo from "../assets/logo.svg";
import HeroImage from "../assets/hero.svg";
import { MdOutlineKeyboardDoubleArrowDown } from "react-icons/md";
import { SplitText } from "@cyriacbr/react-split-text";
import { TypeAnimation } from "react-type-animation";
import gsap from "gsap";

const Hero = () => {
  const counter = useRef(null);
  const bar = useRef(null);
  const preload = useRef(null);
  const hero = useRef(null);
  let width = 1;
  let interv;
  useLayoutEffect(() => {
    let tl = gsap.timeline({ paused: true });
    tl.to(counter.current, {
      display: "none",
      duration: 0.1,
      ease: "expo.inOut",
    });
    tl.to(bar.current, {
      height: "100vh",
      duration: 0.6,
      ease: "expo.inOut",
    });
    tl.to(preload.current, {
      height: "0",
      duration: 0.6,
      ease: "expo.inOut",
    });
    tl.to(hero.current, {
      x: "0",
      duration: 0.6,
      ease: "expo.inOut",
    });

    function move() {
      interv = setInterval(frame, 40);
    }
    function frame() {
      if (width >= 100) {
        tl.play();
        clearInterval(interv);
      } else {
        width++;
        bar.current.style.width = width + "%";
        counter.current.textContent = width + "%";
      }
    }
    move();
  });
  return (
    <>
      <div
        className="loading fixed w-screen h-[100dvh] bg-black z-[1000] left-0 top-0 flex flex-col justify-center"
        ref={preload}
      >
        <div className="percent text-center text-2xl" ref={counter}>
          50%
        </div>
        <div className="bar w-screen h-1 bg-white" ref={bar}></div>
      </div>
      <div
        className="flex h-[calc(100svh-2rem)] pt-[3rem] justify-center relative flex-col translate-x-[-100vw] "
        ref={hero}
        id="home"
      >
        <div className="z-20 flex flex-col gap-4">
          <h3 className="md:text-6xl text-4xl font-['Black_Ops_One']">
            <SplitText className="split">Hello,</SplitText>
            <SplitText className="split">I'm</SplitText>
            <SplitText className="split">Islam Naguib.</SplitText>
          </h3>

          <p className="font-['Anton'] md:text-3xl text-xl opacity-60">
            <TypeAnimation
              sequence={["Front-End Developer", 1000, "React Developer", 1000]}
              wrapper="span"
              speed={1}
              deletionSpeed={50}
              repeat={Infinity}
            />
          </p>
          <div className="font-['Permanent_Marker'] md:text-2xl text-lg glass md:w-[600px] w-[330px]  p-3 rounded-3xl text-[rgba(255,255,255,.4)]">
            <TypeAnimation
              sequence={[
                4000,
                "based in Egypt, Equied with lastest front-end skills to build powerfull, scalable, unique and responsive webApps",
              ]}
            />
          </div>
          <a
            href="/cv.pdf"
            className="text-3xl font-['Anton']  uppercase"
            download
          >
            Download Cv ?
          </a>
          <div className="md:text-2xl text-xl font-extrabold flex gap-4 ">
            <a href="https://github.com/NAGUiB-1" target="_blank">
              GITHUB
            </a>
            <a
              href="https://linkedin.com/mwlite/in/eslam-naguib-146831222"
              target="_blank"
            >
              LINKEDIN
            </a>
            <a href="https://wa.me/201551304668" target="_blank">
              WHATSAPP
            </a>
          </div>
        </div>
        <div className="absolute top-[calc(50%-105.5px)] md:right-[-10%] right-[-40%] z-10 rotate-anim ">
          <img src={HeroImage} alt="" className=" md:scale-[2] scale-[1.8]" />
        </div>

        <a
          href="#about"
          className="absolute bottom-10 w-full flex justify-center"
        >
          <MdOutlineKeyboardDoubleArrowDown
            fill="white"
            size={40}
            className="animate-bounce cursor-pointer	"
          />
        </a>
      </div>
    </>
  );
};

export default Hero;
