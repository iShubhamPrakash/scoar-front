import React, {useState} from "react";
import {openFullscreen,closeFullscreen} from '../../utils/browserFullScreen';

export default function RightToolBar(props) {
	const [isFullScreen, setIsFullScreen]= useState(document.fullscreenElement)
	const { increaseCanvasSize,decreaseCanvasSize } = props;

	const handleFullScreen =()=>{
		if(isFullScreen){
			closeFullscreen();
			setIsFullScreen(false)
		}else{
			openFullscreen();
			setIsFullScreen(true)
		}
	}

  return (
    <div className="toolbar_right">
      <div className="board-tools tool_container">
        <button className="board-tool" onClick={(e) => increaseCanvasSize()}>
          <span className="custom-icon">
            <img alt="" src={"/icons/SS1.svg"} />
          </span>
        </button>
        <button className="board-tool" onClick={(e) => decreaseCanvasSize()}>
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
        <button className="board-tool" title={ isFullScreen ? "Exit full screen" : "Enter full screen"} onClick={e=>handleFullScreen()}>
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
  );
}
