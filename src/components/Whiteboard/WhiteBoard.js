import React, { useState, useEffect, useRef } from "react";
import CanvasDraw from "react-canvas-draw";
import { Link } from "react-router-dom";
import {LeftToolBar} from "../Toolbar";


const totalPage = 5;
export default function index() {
  const [brushColor, setBrushColor] = useState("#444");
  const [brushRadius, setBrushRadius] = useState(4);
  const [height, setHeight] = useState(window.innerHeight);
	const [width, setWidth] = useState(window.innerWidth);
	
	const [currentPage, setCurrentPage] = useState(1);

  let canvasBoard = useRef();

  useEffect(() => {
    window.addEventListener("resize", () => {
      setHeight(window.innerHeight);
      setWidth(window.innerWidth);
		});
	}, []);
	
	useEffect(()=>{
		console.log("First load-", currentPage, canvasBoard)
		loadSavedDataInCanvas(currentPage,canvasBoard)
	},[])

	useEffect(()=>{
		console.log("Current page-", currentPage)
		loadSavedDataInCanvas(currentPage,canvasBoard)
	},[currentPage])


	const loadSavedDataInCanvas=(currentPage,canvasRef)=>{
		const savedData = localStorage.getItem(`savedDrawing${currentPage}`)
		if (savedData){
			canvasRef.loadSaveData(savedData,true)
		}else{
			canvasRef.clear()
		};
		
	}

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
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalPage={totalPage}
      />

      <div className="toolbar_right">
        <div className="board-tools tool_container">
          <button className="board-tool">
            <span className="custom-icon">
              <img alt="" src={"/icons/SS1.svg"} />
            </span>
          </button>
          <button className="board-tool" onClick={(e) => canvasBoard.undo()}>
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
          ref={(canvasDraw) => (canvasBoard = canvasDraw)}
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
            localStorage.setItem(`savedDrawing${currentPage}`, canvasBoard.getSaveData());
          }}
        />
      </div>
    </div>
  );
}
