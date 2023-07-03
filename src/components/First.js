import React, { useState } from "react";
import "./First.css";

function First(props) {
  const [bg, setBg] = useState("false");

  const [topActive, setTopActive] = useState("false");
  const [middleActive, setMiddleActive] = useState("false");
  const [bottomActive, setBottomActive] = useState("false");
  const [morning, setMorning] = useState("false");
  const [evening, setEvening] = useState("false");
  const [windowOne, setWindowOne] = useState("false");

  const changeBackground = () => {
    setBg(!bg);
    setTopActive(!topActive);
    setMiddleActive(!middleActive);
    setBottomActive(!bottomActive);
    setMorning(!morning);
    setEvening(!evening);
    setWindowOne(!windowOne);
  };

  return (
    <div
      className={`first-${bg ? "active" : "inactive"}`}
      onClick={changeBackground}
    >
      <div className={`morning-sun-${morning ? "active" : "inactive"}`}></div>
      <div className={`evening-sun-${evening ? "inactive" : "active"}`}></div>
      <div className="one">
        <div className={`one-top-${topActive ? "active" : "inactive"}`}></div>
        <div
          className={`one-middle-${middleActive ? "active" : "inactive"}`}
        ></div>
        <div className={`one-bottom-${bottomActive ? "active" : "inactive"}`}>
          <div className="one-window">
            <div
              className={`window-one-${windowOne ? "active" : "inactive"}`}
            ></div>
            <div
              className={`window-one-${windowOne ? "active" : "inactive"}`}
            ></div>
            <div
              className={`window-one-${windowOne ? "active" : "inactive"}`}
            ></div>
            <div
              className={`window-one-${windowOne ? "active" : "inactive"}`}
            ></div>
            <div
              className={`window-one-${windowOne ? "active" : "inactive"}`}
            ></div>
            <div
              className={`window-one-${windowOne ? "active" : "inactive"}`}
            ></div>
            <div
              className={`window-one-${windowOne ? "active" : "inactive"}`}
            ></div>
            <div
              className={`window-one-${windowOne ? "active" : "inactive"}`}
            ></div>
            <div
              className={`window-one-${windowOne ? "active" : "inactive"}`}
            ></div>
            <div
              className={`window-one-${windowOne ? "active" : "inactive"}`}
            ></div>
            <div
              className={`window-one-${windowOne ? "active" : "inactive"}`}
            ></div>
            <div
              className={`window-one-${windowOne ? "active" : "inactive"}`}
            ></div>
          </div>
        </div>
      </div>
      <div className="two">
        <div className={`two-top-${topActive ? "active" : "inactive"}`}></div>
        <div
          className={`two-middle-${middleActive ? "active" : "inactive"}`}
        ></div>
        <div className={`two-bottom-${bottomActive ? "active" : "inactive"}`}>
          <div className="two-window">
            <div
              className={`window-two-${windowOne ? "active" : "inactive"}`}
            ></div>
            <div
              className={`window-two-${windowOne ? "active" : "inactive"}`}
            ></div>
            <div
              className={`window-two-${windowOne ? "active" : "inactive"}`}
            ></div>
            <div
              className={`window-two-${windowOne ? "active" : "inactive"}`}
            ></div>
            <div
              className={`window-two-${windowOne ? "active" : "inactive"}`}
            ></div>
            <div
              className={`window-two-${windowOne ? "active" : "inactive"}`}
            ></div>
            <div
              className={`window-two-${windowOne ? "active" : "inactive"}`}
            ></div>
            <div
              className={`window-two-${windowOne ? "active" : "inactive"}`}
            ></div>
            <div
              className={`window-two-${windowOne ? "active" : "inactive"}`}
            ></div>
            <div
              className={`window-two-${windowOne ? "active" : "inactive"}`}
            ></div>
            <div
              className={`window-two-${windowOne ? "active" : "inactive"}`}
            ></div>
            <div
              className={`window-two-${windowOne ? "active" : "inactive"}`}
            ></div>
          </div>
        </div>
      </div>
      <div className="three">
        <div className={`three-top-${topActive ? "active" : "inactive"}`}></div>
        <div
          className={`three-middle-${middleActive ? "active" : "inactive"}`}
        ></div>
        <div className={`three-bottom-${bottomActive ? "active" : "inactive"}`}>
          <div className="three-window">
            <div
              className={`window-three-${windowOne ? "active" : "inactive"}`}
            ></div>
            <div
              className={`window-three-${windowOne ? "active" : "inactive"}`}
            ></div>
            <div
              className={`window-three-${windowOne ? "active" : "inactive"}`}
            ></div>
            <div
              className={`window-three-${windowOne ? "active" : "inactive"}`}
            ></div>
            <div
              className={`window-three-${windowOne ? "active" : "inactive"}`}
            ></div>
            <div
              className={`window-three-${windowOne ? "active" : "inactive"}`}
            ></div>
            <div
              className={`window-three-${windowOne ? "active" : "inactive"}`}
            ></div>
            <div
              className={`window-three-${windowOne ? "active" : "inactive"}`}
            ></div>
            <div
              className={`window-three-${windowOne ? "active" : "inactive"}`}
            ></div>
            <div
              className={`window-three-${windowOne ? "active" : "inactive"}`}
            ></div>
            <div
              className={`window-three-${windowOne ? "active" : "inactive"}`}
            ></div>
            <div
              className={`window-three-${windowOne ? "active" : "inactive"}`}
            ></div>
            <div
              className={`window-three-${windowOne ? "active" : "inactive"}`}
            ></div>
            <div
              className={`window-three-${windowOne ? "active" : "inactive"}`}
            ></div>
            <div
              className={`window-three-${windowOne ? "active" : "inactive"}`}
            ></div>
            <div
              className={`window-three-${windowOne ? "active" : "inactive"}`}
            ></div>
            <div
              className={`window-three-${windowOne ? "active" : "inactive"}`}
            ></div>
            <div
              className={`window-three-${windowOne ? "active" : "inactive"}`}
            ></div>
            <div
              className={`window-three-${windowOne ? "active" : "inactive"}`}
            ></div>
            <div
              className={`window-three-${windowOne ? "active" : "inactive"}`}
            ></div>
            <div
              className={`window-three-${windowOne ? "active" : "inactive"}`}
            ></div>
            <div
              className={`window-three-${windowOne ? "active" : "inactive"}`}
            ></div>
            <div
              className={`window-three-${windowOne ? "active" : "inactive"}`}
            ></div>
            <div
              className={`window-three-${windowOne ? "active" : "inactive"}`}
            ></div>
          </div>
        </div>
      </div>
      <div className="four">
        <div className={`four-top-${topActive ? "active" : "inactive"}`}></div>
        <div
          className={`four-middle-${middleActive ? "active" : "inactive"}`}
        ></div>
        <div className={`four-bottom-${bottomActive ? "active" : "inactive"}`}>
          <div className="four-window">
            <div
              className={`window-four-${windowOne ? "active" : "inactive"}`}
            ></div>
            <div
              className={`window-four-${windowOne ? "active" : "inactive"}`}
            ></div>
            <div
              className={`window-four-${windowOne ? "active" : "inactive"}`}
            ></div>
            <div
              className={`window-four-${windowOne ? "active" : "inactive"}`}
            ></div>
            <div
              className={`window-four-${windowOne ? "active" : "inactive"}`}
            ></div>
            <div
              className={`window-four-${windowOne ? "active" : "inactive"}`}
            ></div>
            <div
              className={`window-four-${windowOne ? "active" : "inactive"}`}
            ></div>
            <div
              className={`window-four-${windowOne ? "active" : "inactive"}`}
            ></div>
            <div
              className={`window-four-${windowOne ? "active" : "inactive"}`}
            ></div>
            <div
              className={`window-four-${windowOne ? "active" : "inactive"}`}
            ></div>
            <div
              className={`window-four-${windowOne ? "active" : "inactive"}`}
            ></div>
            <div
              className={`window-four-${windowOne ? "active" : "inactive"}`}
            ></div>
          </div>
        </div>
      </div>
      <div className="five">
        <div className={`five-top-${topActive ? "active" : "inactive"}`}></div>
        <div
          className={`five-middle-${middleActive ? "active" : "inactive"}`}
        ></div>
        <div className={`five-bottom-${bottomActive ? "active" : "inactive"}`}>
          <div className="five-window">
            <div
              className={`window-five-${windowOne ? "active" : "inactive"}`}
            ></div>
            <div
              className={`window-five-${windowOne ? "active" : "inactive"}`}
            ></div>
            <div
              className={`window-five-${windowOne ? "active" : "inactive"}`}
            ></div>
            <div
              className={`window-five-${windowOne ? "active" : "inactive"}`}
            ></div>
            <div
              className={`window-five-${windowOne ? "active" : "inactive"}`}
            ></div>
            <div
              className={`window-five-${windowOne ? "active" : "inactive"}`}
            ></div>
            <div
              className={`window-five-${windowOne ? "active" : "inactive"}`}
            ></div>
            <div
              className={`window-five-${windowOne ? "active" : "inactive"}`}
            ></div>
            <div
              className={`window-five-${windowOne ? "active" : "inactive"}`}
            ></div>
            <div
              className={`window-five-${windowOne ? "active" : "inactive"}`}
            ></div>
            <div
              className={`window-five-${windowOne ? "active" : "inactive"}`}
            ></div>
            <div
              className={`window-five-${windowOne ? "active" : "inactive"}`}
            ></div>
          </div>
        </div>
      </div>
      <div className="six">
        <div className={`six-top-${topActive ? "active" : "inactive"}`}></div>
        <div
          className={`six-middle-${middleActive ? "active" : "inactive"}`}
        ></div>
        <div className={`six-bottom-${bottomActive ? "active" : "inactive"}`}>
          <div className="six-window">
            <div
              className={`window-six-${windowOne ? "active" : "inactive"}`}
            ></div>
            <div
              className={`window-six-${windowOne ? "active" : "inactive"}`}
            ></div>
            <div
              className={`window-six-${windowOne ? "active" : "inactive"}`}
            ></div>
            <div
              className={`window-six-${windowOne ? "active" : "inactive"}`}
            ></div>
            <div
              className={`window-six-${windowOne ? "active" : "inactive"}`}
            ></div>
            <div
              className={`window-six-${windowOne ? "active" : "inactive"}`}
            ></div>
            <div
              className={`window-six-${windowOne ? "active" : "inactive"}`}
            ></div>
            <div
              className={`window-six-${windowOne ? "active" : "inactive"}`}
            ></div>
            <div
              className={`window-six-${windowOne ? "active" : "inactive"}`}
            ></div>
            <div
              className={`window-six-${windowOne ? "active" : "inactive"}`}
            ></div>
            <div
              className={`window-six-${windowOne ? "active" : "inactive"}`}
            ></div>
            <div
              className={`window-six-${windowOne ? "active" : "inactive"}`}
            ></div>
          </div>
        </div>
      </div>
      <div className="seven">
        <div className={`seven-top-${topActive ? "active" : "inactive"}`}></div>
        <div
          className={`seven-middle-${middleActive ? "active" : "inactive"}`}
        ></div>
        <div className={`seven-bottom-${bottomActive ? "active" : "inactive"}`}>
          <div className="seven-window">
            <div
              className={`window-seven-${windowOne ? "active" : "inactive"}`}
            ></div>
            <div
              className={`window-seven-${windowOne ? "active" : "inactive"}`}
            ></div>
            <div
              className={`window-seven-${windowOne ? "active" : "inactive"}`}
            ></div>
            <div
              className={`window-seven-${windowOne ? "active" : "inactive"}`}
            ></div>
            <div
              className={`window-seven-${windowOne ? "active" : "inactive"}`}
            ></div>
            <div
              className={`window-seven-${windowOne ? "active" : "inactive"}`}
            ></div>
            <div
              className={`window-seven-${windowOne ? "active" : "inactive"}`}
            ></div>
            <div
              className={`window-seven-${windowOne ? "active" : "inactive"}`}
            ></div>
            <div
              className={`window-seven-${windowOne ? "active" : "inactive"}`}
            ></div>
            <div
              className={`window-seven-${windowOne ? "active" : "inactive"}`}
            ></div>
            <div
              className={`window-seven-${windowOne ? "active" : "inactive"}`}
            ></div>
            <div
              className={`window-seven-${windowOne ? "active" : "inactive"}`}
            ></div>
          </div>
        </div>
      </div>
      <div className="eight">
        <div className={`eight-top-${topActive ? "active" : "inactive"}`}></div>
        <div
          className={`eight-middle-${middleActive ? "active" : "inactive"}`}
        ></div>
        <div className={`eight-bottom-${bottomActive ? "active" : "inactive"}`}>
          <div className="eight-window">
            <div
              className={`window-eight-${windowOne ? "active" : "inactive"}`}
            ></div>
            <div
              className={`window-eight-${windowOne ? "active" : "inactive"}`}
            ></div>
            <div
              className={`window-eight-${windowOne ? "active" : "inactive"}`}
            ></div>
            <div
              className={`window-eight-${windowOne ? "active" : "inactive"}`}
            ></div>
            <div
              className={`window-eight-${windowOne ? "active" : "inactive"}`}
            ></div>
            <div
              className={`window-eight-${windowOne ? "active" : "inactive"}`}
            ></div>
            <div
              className={`window-eight-${windowOne ? "active" : "inactive"}`}
            ></div>
            <div
              className={`window-eight-${windowOne ? "active" : "inactive"}`}
            ></div>
            <div
              className={`window-eight-${windowOne ? "active" : "inactive"}`}
            ></div>
            <div
              className={`window-eight-${windowOne ? "active" : "inactive"}`}
            ></div>
            <div
              className={`window-eight-${windowOne ? "active" : "inactive"}`}
            ></div>
            <div
              className={`window-eight-${windowOne ? "active" : "inactive"}`}
            ></div>
          </div>
        </div>
      </div>
      <div className="nine">
        <div className={`nine-top-${topActive ? "active" : "inactive"}`}></div>
        <div
          className={`nine-middle-${middleActive ? "active" : "inactive"}`}
        ></div>
        <div className={`nine-bottom-${bottomActive ? "active" : "inactive"}`}>
          <div className="nine-window">
            <div
              className={`window-nine-${windowOne ? "active" : "inactive"}`}
            ></div>
            <div
              className={`window-nine-${windowOne ? "active" : "inactive"}`}
            ></div>
            <div
              className={`window-nine-${windowOne ? "active" : "inactive"}`}
            ></div>
            <div
              className={`window-nine-${windowOne ? "active" : "inactive"}`}
            ></div>
            <div
              className={`window-nine-${windowOne ? "active" : "inactive"}`}
            ></div>
            <div
              className={`window-nine-${windowOne ? "active" : "inactive"}`}
            ></div>
            <div
              className={`window-nine-${windowOne ? "active" : "inactive"}`}
            ></div>
            <div
              className={`window-nine-${windowOne ? "active" : "inactive"}`}
            ></div>
            <div
              className={`window-nine-${windowOne ? "active" : "inactive"}`}
            ></div>
            <div
              className={`window-nine-${windowOne ? "active" : "inactive"}`}
            ></div>
            <div
              className={`window-nine-${windowOne ? "active" : "inactive"}`}
            ></div>
            <div
              className={`window-nine-${windowOne ? "active" : "inactive"}`}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default First;
