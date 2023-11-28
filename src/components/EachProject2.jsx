import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import hoverEffect from "hover-effect";
import Popup from "./Popup";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const EachProject2 = ({ data, number, all }) => {
  const component = useRef();
  const slider = useRef();

  let [show, setShow] = useState(false);

  return (
    <>
      <Popup data={data} show={show} setShow={setShow} />
      <div
        className="w-full max-w-[700px] relative eachproject group flex  flex-row justify-start item-container"
        onClick={() => setShow(!show)}
        ref={component}
        id="item-container"
      >
        <div className=" rotateText md:text-4xl text-3xl text-white font-['Black_Ops_One'] h-fit item-text mt-2">
          <span>#{number}</span> / <span>{all}</span>
        </div>
        <div className=" w-[300px] md:w-[600px] bg-gray-900 overflow-hidden cursor-pointer rounded-2xl  relative filt inner ">
          <div className="img-item">
            <img
              src={data.img}
              alt={data.title}
              className=" object-cover w-full h-full imgHover img-self"
            />
          </div>
          <div className="absolute bottom-[-100px] left-0 w-full h-[60px] bg-gray-900 group-hover:bottom-0 transition-slow flex justify-center items-center text-xl font-['Black_Ops_One'] ">
            Tap To Open
          </div>
        </div>
      </div>
    </>
  );
};

export default EachProject2;
/*
 data-aos="fade-right"
        data-aos-anchor-placement="bottom-bottom"
*/

/*
div

*/
