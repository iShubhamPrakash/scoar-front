import React from "react";
import "normalize.css";
import Nav from "./Nav";
import Section from "./Section";

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
            <h2 className="text-center">You can now take</h2>
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
      </div>

      {/* ------------- Group 1---------------- */}
      <div className="row landing__section">
        <div className="col col-12 col-lg-6 left">
          <h2>
            TAKE YOUR CLASS <span className="purple">ONLINE</span> IN TWO
            MINUTES
          </h2>
          <p>We help you take your classroom for free </p>
          <img
            src="/icons/landing/MaskGroup3.svg"
            alt=""
            style={{ marginLeft: "2em" }}
          />
        </div>
        <div className="col col-12 col-lg-6 right">
          <img src="/icons/landing/1_svg.svg" alt="" />
        </div>
      </div>

      <div className="row landing__section">
        <div className="col col-12 col-lg-6">
          <img src="/icons/landing/2_svg.svg" className="rotate180" alt="" />
        </div>

        <div className="col col-12 col-lg-6 right">
          <h2>
            THE BOARD IS THE TEACHE'S{" "}
            <span className="purple">BEST FRIEND</span>
          </h2>
          <p>
            We understand how pivotal it is to{" "}
            <span className="pink">write & explain</span>.<br />
            With the White Board, there is no need to create any more time
            consuming presentations
          </p>
        </div>
      </div>
      {/* -------------Group 1 end---------------- */}

      {/* ------------- Group 2---------------- */}
      <div className="row landing__section">
        <div className="col col-12 col-lg-6 left">
          <h2>
            SLOW <span className="purple">NETWORK</span>? NO PROBLEM
          </h2>
          <p>
            Our whiteboard offers <span className="pink">smooth</span>{" "}
            functioning for all
            <span className="pink"> network</span> speeds. This means no more
            classroom interruptions.
          </p>
        </div>
        <div className="col col-12 col-lg-6 right">
          <img src="/icons/landing/3_svg.svg" alt="" />
        </div>
      </div>

      <div className="row landing__section">
        <div className="col col-12 col-lg-6">
          <img src="/icons/landing/4_svg.svg" className="rotate180" alt="" />
        </div>

        <div className="col col-12 col-lg-6 right">
          <h2>
            <span className="purple">COMPLETE</span> CLASS SUPERVISION
          </h2>
          <p>
            You <span className="pink"> control </span> what happens in your
            classroom. Keep an eye on all of our students, just like in a real
            classroom.
          </p>
        </div>
      </div>
      {/* -------------Group 2 end---------------- */}

      {/* ------------- Group 3---------------- */}
      <div className="row landing__section">
        <div className="col col-12 col-lg-6 left">
          <h2>
            <span className="purple">POWERFUL</span> PAYMENT MODULE{" "}
          </h2>
          <p>
            Get the ability to set differential pricing and individualdue dated
            for each course and each student. We{" "}
            <span className="pink"> remind </span> your student to ay the fees
            before the due dates.
          </p>
        </div>
        <div className="col col-12 col-lg-6 right">
          <img src="/icons/landing/5_svg.svg" alt="" />
        </div>
      </div>

      <div className="row landing__section">
        <div className="col col-12 col-lg-6">
          <img src="/icons/landing/6_svg.svg" className="rotate180" alt="" />
        </div>

        <div className="col col-12 col-lg-6 right">
          <h2>
            SEND & TRACK ASSIGNMENTS
            <span className="purple"> ERRORTLESSLY</span>
          </h2>
          <p>
            Send individual & group assignments and handle submissions, all on
            the same page. Easily
            <span className="pink"> track </span> students who fail to submit
            befre deadline and easily
            <span className="pink"> notify </span> them upon failure.
          </p>
        </div>
      </div>
      {/* -------------Group 3 end---------------- */}

      {/* ------------- Group 4---------------- */}
      <div className="row landing__section">
        <div className="col col-12 col-lg-6 left">
          <h2>
            NO MORE <span className="purple"> STRANGERS </span> IN CLASS
          </h2>
          <p>
            Only students who have heir phone numbers{" "}
            <span className="pink"> registered </span>
            in the course can enter the class on one device at a time.{" "}
          </p>
        </div>
        <div className="col col-12 col-lg-6 right">
          <img src="/icons/landing/7_svg.svg" className="rotate180" alt="" />
        </div>
      </div>

      <div className="row landing__section">
        <div className="col col-12 col-lg-6">
          <img src="/icons/landing/8_svg.svg" className="rotate180" alt="" />
        </div>

        <div className="col col-12 col-lg-6 right">
          <h2>
            <span className="purple">BEST-IN-CLASS </span> SECURITY
          </h2>
          <p>
            Rest assured that Auth0, one of the world's leading cyber security
            firms will keep your class
            <span className="pink"> safe </span>.
          </p>
        </div>
      </div>
      {/* -------------Group 4 end---------------- */}
    </div>
  );
}
