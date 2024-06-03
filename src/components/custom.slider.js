import React, { useState, useEffect } from "react";

import right from "../assets/icons/right.png";
import left from "../assets/icons/left.png";

import "./custom.slider.css";

function CustomCarousel({ children, isButtonOutside = false, radius1=false, radius2=false }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [slideDone, setSlideDone] = useState(true);
  const [timeID, setTimeID] = useState(null);

//   useEffect(() => {
// 	if(!isButtonOutside) return
//     if (slideDone) {
//       setSlideDone(false);
//       setTimeID(
//         setTimeout(() => {
//           slideNext();
//           setSlideDone(true);
//         }, 5000)
//       );
//     }
//   }, [slideDone,isButtonOutside]);

  const slideNext = () => {
    setActiveIndex((val) => {
      if (val >= children.length - 1) {
        return 0;
      } else {
        return val + 1;
      }
    });
  };

  const slidePrev = () => {
    setActiveIndex((val) => {
      if (val <= 0) {
        return children.length - 1;
      } else {
        return val - 1;
      }
    });
  };

  const AutoPlayStop = () => {
    if (timeID > 0) {
      clearTimeout(timeID);
      setSlideDone(false);
    }
  };

  const AutoPlayStart = () => {
    if (!slideDone) {
      setSlideDone(true);
    }
  };

  return (
    <div
      className={`container__slider ${radius1 ? 'radius1' : ''} ${radius2 ? 'radius2':''}`}
	  onFocus={AutoPlayStop}
      onMouseLeave={AutoPlayStart}
	  style={{position: isButtonOutside ? 'inherit' : 'relative'}}
    >
      {children.map((item, index) => {
        return (
          <div
            className={"slider__item slider__item-active-" + (activeIndex + 1)}
            key={index}
          >
            {item}
          </div>
        );
      })}

      <div 
	  	className="container__slider__links" 
	  	style={{display:isButtonOutside ? 'none' : ''}}
	  >
        {children.map((item, index) => {
          return (
            <button
              key={index}
              className={
                activeIndex === index
                  ? "container__slider__links-small container__slider__links-small-active"
                  : "container__slider__links-small"
              }
              onClick={(e) => {
                e.preventDefault();
                setActiveIndex(index);
              }}
            ></button>
          );
        })}
      </div>

      <button
        className="slider__btn-next"
		style={{left: isButtonOutside ? '62%' : ''}}
        onClick={(e) => {
          e.preventDefault();
          slideNext();
        }}
      >
        <img src={right} alt='right'/>
      </button>
      <button
        className="slider__btn-prev"
		style={{right: isButtonOutside ? '62%' : ''}}
        onClick={(e) => {
          e.preventDefault();
          slidePrev();
        }}
      >
        <img src={left} alt='left'/>
      </button>
    </div>
  );
}

export default CustomCarousel;
