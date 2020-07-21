import React from "react";
import "normalize.css";
import Nav from "./Nav";

export default function LandingPage() {
  return (
    <div className="landing container-fluid">
      <Nav />
      <div className="landing__top">
        <div className="row">
          <div className="col col-12 col-md-6">
            <div className="center left">
              <h2>
                Experience the <span className="purple">convenience</span> of
                online class and the <span className="purple">control</span> of
                the traditional setting. Sign up and{" "}
                <span className="purple">expand</span> your business with us!
              </h2>
              <div className="input">
                <input type="text" placeholder="Enter your email or number" />
                <img src="/icons/landing/MaskGroup3.svg" alt="" />
              </div>
            </div>
          </div>

          <div className="col col-12 col-md-6">
            <div className="center "></div>
          </div>
        </div>

        <div className="row">
          <div className="landing__top2">
            <h2 class="text-center">You can now take</h2>
            <div className="innerBox">
              <span>
                <img src="/icons/landing/tuitions.svg" alt="" />
                <p>Tuitions</p>
              </span>
              <span>
                <img src="/icons/landing/drawing.svg" alt="" />
                <p>Art Classs</p>
              </span>
              <span>
                <img src="/icons/landing/music.svg" alt="" />
                <p>Dance Classes</p>
              </span>
              <span>
                <img src="/icons/landing/fitness.svg" alt="" />
                <p>Fitness Classes</p>
              </span>
            </div>
          </div>
        </div>

        <div className="row"></div>
      </div>
    </div>
  );
}
