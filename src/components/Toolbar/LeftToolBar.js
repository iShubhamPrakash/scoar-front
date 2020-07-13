import React from "react";
export default function LeftToolBar(props) {
  const { canvasBoard, currentPage, setCurrentPage, totalPage } = props;
  return (
    <div className="toolbar_left">
      <div className="board-tools tool_container">
        <span className="top-right-icon">
          <img alt="" src={"/icons/SS15.svg"} />
        </span>
        <button className="board-tool">
          <span className="custom-icon">
            <img alt="" src={"/icons/ARROW.svg"} />
          </span>
        </button>
        <button className="board-tool" onClick={(e) => canvasBoard.undo()}>
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
        <button className="board-tool" onClick={(e) => canvasBoard.clear()}>
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
        <button
          onClick={(e) => {
            if (currentPage > 1) setCurrentPage(currentPage - 1);
          }}
        >
          <i className="fa fa-chevron-left" />
        </button>
        <span>
          {" "}
          {currentPage}/{totalPage}{" "}
        </span>
        <button
          onClick={(e) => {
            if (currentPage < totalPage) setCurrentPage(currentPage + 1);
          }}
        >
          <i className="fa fa-chevron-right" />
        </button>
      </div>
    </div>
  );
}
