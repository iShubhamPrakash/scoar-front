import React, { useState, useEffect, useRef } from "react";
import CanvasDraw from "react-canvas-draw";
import "./index.scss";
import { Link } from "react-router-dom";

export default function index() {
  const [brushColor, setBrushColor] = useState("#444");
  const [brushRadius, setBrushRadius] = useState(4);
  const [height, setHeight] = useState(window.innerHeight);
  const [width, setWidth] = useState(window.innerWidth);

  let saveableCanvas = useRef();

  useEffect(() => {
    window.addEventListener("resize", () => {
      setHeight(window.innerHeight);
      setWidth(window.innerWidth);
    });
  }, []);

  return (
    <div className="whiteboard">
      <div className="toolbar_top">
        <div className="logo">
          <Link to="/">
            <img alt="Go home" title="Go to home" src={"./logo.png"} />
          </Link>
        </div>

        <div className="time tool_container">
          <p>Product Designing &nbsp;&nbsp;| &nbsp;&nbsp; 1:20:32</p>
        </div>

        <div className="top-right">
          <div className="more_option tool_container">
            <p>
              More Options{" "}
              <i className="custom-icon">
                <img alt="" src={"/icons/dROPDOWN.svg"} />
              </i>{" "}
              | &nbsp;&nbsp; Export{" "}
              <i className="custom-icon">
                <img alt="" src={"/icons/DOWNLOADS.svg"} />
              </i>
            </p>
          </div>

          <button className="btn btn-purple tool invite-btn">
            {" "}
            <i className="fa fa-user-plus" /> Invite
          </button>
        </div>
      </div>

      <div className="toolbar_left">
        {/* <button onClick={(e) => saveableCanvas.clear()}>Clear</button>
        <button onClick={(e) => saveableCanvas.undo()}>undo</button>
        <button
          onClick={() => {
            localStorage.setItem("savedDrawing", saveableCanvas.getSaveData());
          }}
        >
          Save
        </button>
        <input type="color" onChange={(e) => setBrushColor(e.target.value)} /> */}

        <div className="board-tools tool_container">
          <span className="top-right-icon">
            <img alt="" src={"/icons/SS15.svg"} />
          </span>
          <button className="board-tool">
            <span className="custom-icon">
              <img alt="" src={"/icons/ARROW.svg"} />
            </span>
          </button>
          <button className="board-tool" onClick={(e) => saveableCanvas.undo()}>
            <span className="custom-icon">
              <img alt="" src={"/icons/UNDO.svg"} />
            </span>
          </button>
          <button className="board-tool">
            <span className="custom-icon">
              <img alt="" src={"/icons/COLOR.svg"} />
            </span>
          </button>
          <button className="board-tool">
            <span className="custom-icon">
              <img alt="" src={"/icons/PEN.svg"} />
            </span>
          </button>
          <button className="board-tool">
            <span className="custom-icon">
              <img alt="" src={"/icons/ERASER.svg"} />
            </span>
          </button>
          <button className="board-tool">
            <span className="custom-icon">
              <img alt="" src={"/icons/SHAPE.svg"} />
            </span>
          </button>
          <button className="board-tool">
            <span className="custom-icon">
              <img alt="" src={"/icons/FONT.svg"} />
            </span>
          </button>
        </div>

        <div className="tool_container scale-tool tool">
          <button className="board-tool">
            <span className="custom-icon">
              <img alt="" src={"/icons/SS.svg"} />
            </span>
          </button>
          <span className="scale-value"> 12 </span>
        </div>

        <div className="pages tool">
          <button>
            <i className="fa fa-chevron-left" />
          </button>
          <span> 1/5 </span>
          <button>
            <i className="fa fa-chevron-right" />
          </button>
        </div>
      </div>

      <div className="toolbar_right">
        <div className="board-tools tool_container">
          <button className="board-tool">
            <span className="custom-icon">
              <img alt="" src={"/icons/SS1.svg"} />
            </span>
          </button>
          <button className="board-tool" onClick={(e) => saveableCanvas.undo()}>
            <span className="custom-icon">
              <img alt="" src={"/icons/SS2.svg"} />
            </span>
          </button>
          <button className="board-tool">
            <span className="custom-icon">
              <img alt="" src={"/icons/SS3.svg"} />
            </span>
          </button>
          <button className="board-tool">
            <span className="custom-icon">
              <img alt="" src={"/icons/SS4.svg"} />
            </span>
          </button>
          <button className="board-tool">
            <span className="custom-icon">
              <img alt="" src={"/icons/SS5.svg"} />
            </span>
          </button>
          <button className="board-tool">
            <span className="custom-icon">
              <img alt="" src={"/icons/SS6.svg"} />
            </span>
          </button>
        </div>
      </div>

      <div className="canvas_container">
        <CanvasDraw
          ref={(canvasDraw) => (saveableCanvas = canvasDraw)}
          brushColor={brushColor}
          brushRadius={brushRadius}
          immediateLoading={false}
          hideInterface={false}
          saveData={null}
          imgSrc={""}
          disabled={false}
          canvasWidth={width}
          canvasHeight={height}
          hideGrid={false}
          loadTimeOffset={5}
          lazyRadius={0}
          catenaryColor={"#0a0302"}
          gridColor={"rgba(150,150,150,0.17)"}
          className="canvas"
          onChange={() => {
            console.log("onChange");

            localStorage.setItem("savedDrawing", saveableCanvas.getSaveData());
          }}
        />
      </div>
    </div>
  );
}
