import React from "react";

export default function RightToolBar(props) {
  const { canvasBoard,canvasUNDO } = props;

  return (
    <div className="toolbar_right">
      <div className="board-tools tool_container">
        <button className="board-tool">
          <span className="custom-icon">
            <img alt="" src={"/icons/SS1.svg"} />
          </span>
        </button>
        <button className="board-tool" onClick={(e) => canvasUNDO()}>
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
  );
}
