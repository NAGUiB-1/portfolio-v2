import React, { useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
import { InView } from "react-intersection-observer";
import {
  FaBootstrap,
  FaCss3Alt,
  FaFigma,
  FaHtml5,
  FaReact,
  FaSass,
} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import {
  SiAdobeillustrator,
  SiAdobephotoshop,
  SiNextdotjs,
  SiRedux,
  SiTailwindcss,
} from "react-icons/si";
import { BiLogoTypescript } from "react-icons/bi";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
const iconStyle =
  "hover:text-[#2d2d2d] transition-all cursor-pointer iconAnimate  ";
const spanStyle =
  "absolute top-[100%] left-0 w-full h-full text-md font-extrabold font-mono flex group-hover:top-0 justify-center items-center bg-black  cursor-pointer transition-all  borderB";
const About = () => {
  return (
    <div className=" pt-20 flex flex-col gap-4" id="about">
      <h3 className="md:text-6xl text-4xl uppercase text-center font-extrabold font-['Black_Ops_One']">
        What i do ?
      </h3>
      <p className="text-xl bg-[#1d1d1d] p-4 rounded font-mono">
        I'm from Egypt, and I received my degree from Minufia University's
        Faculty of Business Administration. I continued to pursue my interests
        while in college, so I began learning front-end development. to become
        what I wanted to be.{" "}
      </p>

      <div className="grid md:grid-cols-3 grid-cols-2 justify-items-center mt-6 icons gap-4">
        <div
          className="relative group overflow-hidden"
          data-aos="fade-left"
          data-aos-anchor-placement="bottom-bottom"
          data-aos-delay="25"
        >
          <FaHtml5 size={95} className={iconStyle} />
          <span className={spanStyle}>HTML</span>
        </div>
        <div
          className="relative group overflow-hidden"
          data-aos="fade-left"
          data-aos-anchor-placement="bottom-bottom"
          data-aos-delay="50"
        >
          <FaCss3Alt size={95} className={iconStyle} />

          <span className={spanStyle}>CSS</span>
        </div>
        <div
          className="relative group overflow-hidden"
          data-aos="fade-left"
          data-aos-anchor-placement="bottom-bottom"
          data-aos-delay="75"
        >
          <IoLogoJavascript size={95} className={iconStyle} />

          <span className={spanStyle}>JavaScript</span>
        </div>
        <div
          className="relative group overflow-hidden"
          data-aos="fade-left"
          data-aos-anchor-placement="bottom-bottom"
          data-aos-delay="100"
        >
          <FaReact size={95} className={iconStyle} />

          <span className={spanStyle}>React</span>
        </div>
        <div
          className="relative group overflow-hidden"
          data-aos="fade-left"
          data-aos-anchor-placement="bottom-bottom"
          data-aos-delay="125"
        >
          <SiRedux size={95} className={iconStyle} />

          <span className={spanStyle}>Redux</span>
        </div>
        <div
          className="relative group overflow-hidden"
          data-aos="fade-left"
          data-aos-anchor-placement="bottom-bottom"
          data-aos-delay="150"
        >
          <SiNextdotjs size={95} className={iconStyle} />

          <span className={spanStyle}>Next</span>
        </div>
        <div
          className="relative group overflow-hidden"
          data-aos="fade-left"
          data-aos-anchor-placement="bottom-bottom"
          data-aos-delay="175"
        >
          <SiTailwindcss size={95} className={iconStyle} />

          <span className={spanStyle}>Tailwind</span>
        </div>
        <div
          className="relative group overflow-hidden"
          data-aos="fade-left"
          data-aos-anchor-placement="bottom-bottom"
          data-aos-delay="200"
        >
          <FaBootstrap size={95} className={iconStyle} />

          <span className={spanStyle}>Bootstrap</span>
        </div>
        <div
          className="relative group overflow-hidden"
          data-aos="fade-left"
          data-aos-anchor-placement="bottom-bottom"
          data-aos-delay="225"
        >
          <FaSass size={95} className={iconStyle} />

          <span className={spanStyle}>Sass</span>
        </div>
        <div
          className="relative group overflow-hidden"
          data-aos="fade-left"
          data-aos-anchor-placement="bottom-bottom"
          data-aos-delay="250"
        >
          <FaFigma size={95} className={iconStyle} />
          <span className={spanStyle}>Figma</span>
        </div>
        <div
          className="relative group overflow-hidden"
          data-aos="fade-left"
          data-aos-anchor-placement="bottom-bottom"
          data-aos-delay="257"
        >
          <SiAdobephotoshop size={95} className={iconStyle} />

          <span className={spanStyle}>Photoshop</span>
        </div>
        <div
          className="relative group overflow-hidden "
          data-aos="fade-left"
          data-aos-anchor-placement="bottom-bottom"
          data-aos-delay="300"
        >
          <SiAdobeillustrator size={95} className={iconStyle} />
          <span className={spanStyle}>illustrator</span>
        </div>
        <div
          className="relative group overflow-hidden"
          data-aos="fade-left"
          data-aos-anchor-placement="bottom-bottom"
          data-aos-delay="325"
        >
          <BiLogoTypescript size={110} className={iconStyle} />
          <span className={spanStyle}>TypeScript</span>
        </div>
      </div>
    </div>
  );
};

export default About;
