import React, { useState, useEffect, useRef } from "react";
import CanvasDraw from "react-canvas-draw";
import { Link } from "react-router-dom";
import { LeftToolBar } from "../Toolbar";
import { useSelector, useDispatch } from "react-redux";

import {
  setBrushColor,
  setBrushRadius,
  setCanvasHeight,
  setCanvasWidth,
  setTotalPage,
  setCurrentPage,
} from "../../store/actions/whiteboardActions";
import RightToolBar from "../Toolbar/RightToolBar";

function WhiteBoard(props) {
  const {
    brushColor,
    brushRadius,
    canvasHeight,
    canvasWidth,
    currentPage,
    totalPage,
  } = useSelector((state) => state.whiteBoard);

  let canvasBoard = useRef();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setCanvasHeight(window.innerHeight));
    dispatch(setCanvasWidth(window.innerWidth));

    window.addEventListener("resize", () => {
      dispatch(setCanvasHeight(window.innerHeight));
      dispatch(setCanvasWidth(window.innerWidth));
    });

    console.log("First load-", currentPage, canvasBoard);
    
    setTimeout(()=>{
      dispatch(setCurrentPage(1))
    },1000)

  }, []);

  useEffect(() => {
    console.log("Current page-", currentPage);
    loadSavedDataInCanvas(currentPage, canvasBoard);
  }, [currentPage]);

  const saveCanvasData = (currentPage, canvasRef) => {
    const data = canvasRef.getSaveData();
    if (data) {
      localStorage.setItem(`savedDrawing${currentPage}`, data);
    }
  };

  const loadSavedDataInCanvas = (currentPage, canvasRef) => {

    if(canvasRef === null) return

    const savedData = localStorage.getItem(`savedDrawing${currentPage}`);
    if (savedData) {
      canvasRef.loadSaveData(savedData, true);
    } else {
      canvasRef.clear();
    }
  };

  // Toolbar functionalities

  const canvasUNDO = () => {
    canvasBoard.undo();
    saveCanvasData(currentPage, canvasBoard);
  };

  const canvasCLEAR = () => {
    canvasBoard.clear();
    saveCanvasData(currentPage, canvasBoard);
  };

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

      <LeftToolBar
        canvasBoard={canvasBoard}
        canvasCLEAR={canvasCLEAR}
        canvasUNDO={canvasUNDO}
      />

      <RightToolBar canvasBoard={canvasBoard} canvasUNDO={canvasUNDO} />

      <div className="canvas_container">
        <CanvasDraw
          ref={(canvasDraw) => (canvasBoard = canvasDraw)}
          brushColor={brushColor}
          brushRadius={brushRadius}
          immediateLoading={false}
          hideInterface={false}
          saveData={null}
          imgSrc={""}
          disabled={false}
          canvasWidth={canvasWidth}
          canvasHeight={canvasHeight}
          hideGrid={false}
          loadTimeOffset={5}
          lazyRadius={0}
          catenaryColor={"#0a0302"}
          gridColor={"rgba(150,150,150,0.17)"}
          className="canvas"
          onChange={() => saveCanvasData(currentPage, canvasBoard)}
        />
      </div>
    </div>
  );
}

export default WhiteBoard;
