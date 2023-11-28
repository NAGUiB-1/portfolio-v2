import React, { useLayoutEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Test2 = () => {
  let thumbNails = gsap.utils.toArray(".thumbnail");
  useLayoutEffect(() => {
    thumbNails.forEach((thumb, i) => {
      if (thumb.classList.contains("fakePin")) {
        function prevAll(element) {
          var result = [];

          while ((element = element.previousElementSibling))
            result.push(element);
          return result;
        }

        // console.log(prevAll(thumb))

        var totalWidthToMove;

        function getTotalWidthToMove() {
          totalWidthToMove = 0;

          prevAll(thumb).forEach((thumbBefore, i) => {
            let style =
              thumbBefore.currentStyle || window.getComputedStyle(thumbBefore);
            let marginRight = parseInt(style.marginRight);

            totalWidthToMove += thumbBefore.offsetWidth + marginRight;
          });

          return totalWidthToMove;
        }
        //getTotalWidthToMove();
        //console.log(totalWidthToMove)

        gsap.to(thumb, {
          x: () => {
            return -getTotalWidthToMove();
          },
          ease: "none",
          scrollTrigger: {
            trigger: ".wrapper",
            start: "top top",
            scrub: scrubValue,
            invalidateOnRefresh: true,
            end: () => "+=" + getTotalWidthToMove(),
          },
        });
      } else {
        gsap.to(thumb, {
          x: () => {
            return -container.scrollWidth;
          },
          ease: "none",
          scrollTrigger: {
            trigger: ".wrapper",
            start: "top top",
            scrub: scrubValue,
            invalidateOnRefresh: true,
            end: () => "+=" + container.scrollWidth,
          },
        });
      }

      //console.log(thumb.offsetWidth)
    });
  });
  return (
    <div class="container2">
      <div class="wrapper">
        <div class="thumbnail">1</div>
        <div class="thumbnail fakePin">2</div>
        <div class="thumbnail full fakePin">3</div>
        <div class="thumbnail fakePin">4</div>
        <div class="thumbnail fakePin">5</div>
        <div class="thumbnail fakePin">6</div>
        <div class="thumbnail full fakePin">7</div>
        <div class="thumbnail fakePin">8</div>
        <div class="thumbnail fakePin">9</div>
        <div class="thumbnail full fakePin">10</div>
        <div class="thumbnail fakePin">11</div>
      </div>
    </div>
  );
};

export default Test2;

const scrubValue = 0.5;

let container = document.querySelector(".container");

const scrollBar = gsap.to(".scrollbar", {
  x: () => {
    return window.innerWidth - (150 + 20);
  },
  ease: "none",
});

ScrollTrigger.create({
  trigger: ".container",
  start: "top top",
  end: () => container.scrollWidth - window.innerWidth,
  pin: true,
  anticipatePin: 1,
  scrub: scrubValue,
  animation: scrollBar,
  invalidateOnRefresh: true,
});
