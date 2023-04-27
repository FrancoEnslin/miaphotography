import React, { useRef, useEffect, useState } from "react";
const TESTIMONIAL_DELAY = 3000;


const Testimonials = (props) => {
  const { testimonialData } = props;
  const refFeedbackParentDiv = useRef(null);
  const refButtonsParentDiv = useRef(null);
  const timeoutRef = useRef(null);
  const [delay, setDelay] = useState(100);
  const [index, setIndex] = useState(0);

  useEffect(() => setDelay(TESTIMONIAL_DELAY), []);

  useEffect(() => {
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === props.testimonialData.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => clearTimeout(timeoutRef.current);
  }, [props.testimonialData.length, index, delay]);

  const dotsHelper = (idx) => {
    if (refButtonsParentDiv.current === null) return;

    if (index === idx) {
      const arr2 = [...refFeedbackParentDiv.current.children];

      arr2.forEach((el, i) => {
        if (document.querySelector(`.feedbackText--${i}`))
          document
            .querySelector(`.feedbackText--${i}`)
            .classList.add("not-visible");
      });

      arr2[index + 1].classList.remove("not-visible");

      return "myDot--active";
    }
  };

  const dotClickHandler = (arr, indx) => {
    setIndex(indx);
    arr.forEach((_, i) => {
      document
        .querySelector(`.feedbackText--${i}`)
        .classList.add("not-visible");
      document
        .querySelector(`.buttonDot${i}`)
        .classList.remove("myDot--active");
    });
    document
      .querySelector(`.feedbackText--${indx}`)
      .classList.remove("not-visible");
    document
      .querySelector(`.buttonDot${indx}`)
      .classList.add("myDot--active");
  };

  return (
    <div className="section-three-main-div testimonial">
      <div ref={refFeedbackParentDiv} className="section-three-sub-div-one">
        <div className="quotes-img quotes-img-right"  />
        {testimonialData.map((el, i) => {
          return (
            <div
              key={i}
              className={`feedbackText--${i} main-quotes-div not-visible`}
            >
              <div className="para" >{el.testimonial}</div>
              <div className="subText">{el.author}</div>
            </div>
          );
        })}
        <div className="quotes-img quotes-img-left" />
      </div>
      <div ref={refButtonsParentDiv}>
        {testimonialData.map((_, i, arr) => {
          return (
            <div
              name="change testimonial"
              key={i}
              className={`buttonDot${i} myDot ${
                index === i ? dotsHelper(i) : ""
              }`}
              onClick={() => dotClickHandler(arr, i)}
            />
          );
        })}
      </div>
    </div>
  );
};

export default React.memo(Testimonials);

