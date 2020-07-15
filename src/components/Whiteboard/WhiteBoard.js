import React, { useEffect, useRef } from "react";
import CanvasDraw from "react-canvas-draw";
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
import TopToolBar from "../Toolbar/TopToolBar";

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

  // Canvas functionalities

  const canvasUNDO = () => {
    canvasBoard.undo();
    saveCanvasData(currentPage, canvasBoard);
  };

  const canvasCLEAR = () => {
    canvasBoard.clear();
    saveCanvasData(currentPage, canvasBoard);
  };

  const increaseCanvasSize = ()=>{
    if(canvasHeight < window.innerHeight && canvasWidth < window.innerWidth){
      dispatch(setCanvasHeight(canvasHeight + 0.1 * canvasHeight))
      dispatch(setCanvasWidth(canvasWidth + 0.1 * canvasWidth))
    }
	}
	
	const decreaseCanvasSize = ()=>{
		if(canvasHeight > 400 && canvasWidth > 400){
      dispatch(setCanvasHeight(canvasHeight - 0.1 * canvasHeight))
      dispatch(setCanvasWidth(canvasWidth - 0.1 * canvasWidth))
    }
	}

  return (
    <div className="whiteboard">
      
      <TopToolBar/>

      <LeftToolBar
        canvasBoard={canvasBoard}
        canvasCLEAR={canvasCLEAR}
        canvasUNDO={canvasUNDO}
      />

      <RightToolBar 
        increaseCanvasSize={increaseCanvasSize}
        decreaseCanvasSize={decreaseCanvasSize} 
      />

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
          hideGrid={true}
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
