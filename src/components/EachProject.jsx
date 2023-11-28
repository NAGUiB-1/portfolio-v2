import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import hoverEffect from "hover-effect";
import Popup from "./Popup";

const EachProject = ({ data, number, all }) => {
  let [show, setShow] = useState(false);
  let img = useRef(null);
  useLayoutEffect(() => {
    let myAnimation = new hoverEffect({
      parent: img.current,
      intensity: 1,
      image1: data.img1,
      image2: data.img2,
      displacementImage: data.dest,
    });
  });

  return (
    <div className="relative eachProject group" onClick={() => setShow(!show)}>
      <Popup show={show} setShow={setShow} data={data} />

      <div
        className="h-[400px] w-[250px] bg-gray-900 overflow-hidden cursor-pointer rounded-2xl  relative backdrop-blur filt"
        ref={img}
        data-aos="fade-left"
        data-aos-anchor-placement="bottom-bottom"
        data-aos-delay={25 * number}
      >
        <div className="absolute bottom-[-100px] left-0 w-full h-[60px] bg-gray-900 group-hover:bottom-0 transition-all flex justify-center items-center text-xl font-['Black_Ops_One'] ">
          Tap To Open
        </div>
      </div>

      <div
        className="absolute left-[-50px] top-6 w-[40px] rotateText text-4xl text-[#3d3d3d] font-['Black_Ops_One'] "
        data-aos="zoom-in-down"
        data-aos-anchor-placement="bottom-bottom"
        data-aos-delay={25 * number}
      >
        <span>#{number}</span> / <span>{all}</span>
      </div>
    </div>
  );
};

export default EachProject;
