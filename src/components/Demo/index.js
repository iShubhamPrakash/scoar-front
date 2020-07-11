import React, { useState, useRef } from "react";
import CanvasDraw from "react-canvas-draw";
import "./index.scss";

export default function Demo() {
  const [brushColor, setBrushColor] = useState("#444");
  const [brushRadius, setBrushRadius] = useState(4);

	let saveableCanvas = useRef();
	let loadableCanvas = useRef();

  return (
    <div className="demo">
      <h1>Hello world</h1>
      <div>
        Settings:
        <button onClick={(e) => saveableCanvas.clear()}>Clear</button>
        <button onClick={(e) => saveableCanvas.undo()}>undo</button>
				<button
            onClick={() => {
              localStorage.setItem(
                "savedDrawing",
                saveableCanvas.getSaveData()
              );
            }}
          >
            Save
          </button>
        <input type="color" onChange={(e) => setBrushColor(e.target.value)} />
        <button></button>
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
        canvasWidth={700}
				canvasHeight={700}
				hideGrid={false}
				loadTimeOffset= {5}
				lazyRadius= {0}
				catenaryColor= {"#0a0302"}
				gridColor= {"rgba(150,150,150,0.17)"}
				className="canvas"
				onChange={() => {

					console.log("onChange")

					localStorage.setItem(
						"savedDrawing",
						saveableCanvas.getSaveData()
					);

					loadableCanvas.loadSaveData(
						localStorage.getItem("savedDrawing"),true
					);
				}}
      />

				<CanvasDraw
					disabled
					canvasWidth={700}
					canvasHeight={700}
          ref={canvasDraw => (loadableCanvas = canvasDraw)}
					saveData={null}
					loadTimeOffset= {5}
        />
			</div>

    </div>
  );
}
