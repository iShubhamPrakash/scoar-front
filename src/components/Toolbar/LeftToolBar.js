import React from "react";
import Popover from "@material-ui/core/Popover";
import { useSelector, useDispatch } from "react-redux";
import Slider from "@material-ui/core/Slider";
import Switch from "@material-ui/core/Switch";
import { CompactPicker } from "react-color";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

import {
  setBrushColor,
  setTotalPage,
  setCurrentPage,
} from "../../store/actions/whiteboardActions";
import SVGIcon from "../UI/SVGIcon";

export default function LeftToolBar(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [imgURL, setImgURL] = React.useState(
    "https://files.gamebanana.com/img/ico/sprays/4ea2f4dad8d6f.png"
  );
  const [prevColor, setPrevColor] = React.useState("#000");

  const {
    canvasCLEAR,
    canvasUNDO,
    canvasREDO,
    undoDisabled,
    redoDisabled,
    addText,
    brushRadius,
    setBrushRadius,
    Tools,
    selectTool,
    removeSelected,
    copyPasteDisabled,
    copy,
    paste,
    fillWithColor,
    toggleFillWithColor,
    lineColor,
    setLineColor,
    fillColor,
    setFillColor,
    addImage,
  } = props;

  const {
    brushColor,
    canvasHeight,
    canvasWidth,
    currentPage,
    totalPage,
  } = useSelector((state) => state.whiteBoard);

  const dispatch = useDispatch();

  const handlePopoverBtnClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverBtnClose = () => {
    setAnchorEl(null);
  };

  const isOpen = (id) => {
    return anchorEl ? anchorEl.id === id : false;
  };

  const changeColor = (color) => {
    setLineColor(color);
    handlePopoverBtnClose();
  };

  const handleBrusSizeChange = (event, newValue) => {
    setBrushRadius(newValue);
  };

  return (
    <div className="toolbar_left">
      <div className="board-tools tool_container">
        {/* <span className="top-right-icon">
          <img alt="" src={"/icons/SS15.svg"} />
        </span> */}
        <button
          className="board-tool"
          onClick={(e) => selectTool(Tools.Select)}
        >
          <span className="custom-icon">
            <img alt="" src={"/icons/ARROW.svg"} />
          </span>
        </button>
        <button
          className="board-tool"
          title="UNDO"
          onClick={(e) => canvasUNDO()}
          disabled={undoDisabled}
        >
          <span className="custom-icon">
            <img alt="" src={"/icons/UNDO.svg"} />
          </span>
        </button>
        <button
          className="board-tool"
          title="REDO"
          onClick={(e) => canvasREDO()}
          disabled={redoDisabled}
        >
          <span className="custom-icon">
            <img alt="" src={"/icons/REDO.svg"} />
          </span>
        </button>
        <button
          className="board-tool"
          id={"color-popover-btn"}
          aria-describedby={"color-popover"}
          variant="contained"
          onClick={handlePopoverBtnClick}
        >
          <span className="custom-icon">
            <img alt="" src={"/icons/COLOR.svg"} />
          </span>
        </button>
        <Popover
          id={"color-popover"}
          className="tool-popover"
          open={isOpen("color-popover-btn")}
          anchorEl={anchorEl}
          onClose={handlePopoverBtnClose}
          anchorOrigin={{
            vertical: "center",
            horizontal: "right",
          }}
          transformOrigin={{
            vertical: "center",
            horizontal: "left",
          }}
        >
          <div className="tool-popover-container">
            {/* <div className="color-container">
              <span id="black" onClick={(e) => changeColor("#000")}></span>
              <span id="red" onClick={(e) => changeColor("#fc0303")}></span>
              <span id="blue" onClick={(e) => changeColor("#0059ff")}></span>
              <span id="green" onClick={(e) => changeColor("#06bf00")}></span>
              <span id="yellow" onClick={(e) => changeColor("#fcba03")}></span>
            </div>
            <input
              type="color"
              value={brushColor}
              onChange={(e) => dispatch(setBrushColor(e.target.value))}
            />
            <span className="color-picker-icon">
              <img alt="" src={"/icons/SS27.svg"} />
            </span>
            <br/> */}
            <label htmlFor="lineColor">Line</label>
            <br />
            <CompactPicker
              id="lineColor"
              color={lineColor}
              onChange={(color) => changeColor(color.hex)}
            />
            <br />
            <br />
            <FormControlLabel
              control={
                <Switch
                  name="fillColor"
                  size="small"
                  checked={fillWithColor}
                  onChange={(e) => toggleFillWithColor(e.target.checked)}
                />
              }
              label="Fill"
            />

            <br />
            <CompactPicker
              color={fillColor}
              onChange={(color) => setFillColor(color.hex)}
            />
          </div>
        </Popover>

        <button
          className="board-tool"
          id={"pen-popover-btn"}
          title={"Select Pen"}
          aria-describedby={"pen-popover"}
          variant="contained"
          onClick={handlePopoverBtnClick}
        >
          <span className="custom-icon">
            <img alt="" src={"/icons/PEN.svg"} />
          </span>
        </button>
        <Popover
          id={"pen-popover"}
          className="tool-popover"
          open={isOpen("pen-popover-btn")}
          anchorEl={anchorEl}
          onClose={handlePopoverBtnClose}
          anchorOrigin={{
            vertical: "center",
            horizontal: "right",
          }}
          transformOrigin={{
            vertical: "center",
            horizontal: "left",
          }}
        >
          <div className="tool-popover-container">
            <div className="tool-item-container pen-container">
              <button
                title="Marker"
                onClick={(e) => {
                  selectTool(Tools.Pencil);
                  setBrushRadius(4);
                  changeColor("#444");
                }}
              >
                <SVGIcon filepath="/icons/PEN.svg" />
              </button>

              <button
                title="Pen"
                onClick={(e) => {
                  selectTool(Tools.Pencil);
                  setBrushRadius(1);
                  changeColor("#000");
                }}
              >
                <SVGIcon filepath="/icons/SS16.svg" />
              </button>

              <button
                title="Highlighter"
                onClick={(e) => {
                  selectTool(Tools.Pencil);
                  setBrushRadius(12);
                  changeColor("#ccff0058");
                }}
              >
                <SVGIcon filepath="/icons/SS17.svg" />
              </button>

              {/* <button>
                <SVGIcon filepath="/icons/SS19.svg" />
              </button> */}
            </div>

            {/* <div className="fixed-line-toggle-container">
              <p>Fixed line width </p>

              <Switch
                // checked={state.checkedB}
                // onChange={handleChange}
                size="small"
                color="primary"
                name="fixedLine"
                inputProps={{ "aria-label": "primary checkbox" }}
              />
            </div> */}
            <div className="brush-size-slider-container">
              <p>Pen Size</p>
              <Slider
                value={brushRadius}
                min={1}
                max={25}
                valueLabelDisplay="auto"
                onChange={handleBrusSizeChange}
                aria-labelledby="continuous-slider"
              />
            </div>
          </div>
        </Popover>

        <button
          className="board-tool"
          title="Clear All"
          onClick={(e) => canvasCLEAR()}
        >
          <span className="custom-icon">
            <img alt="" src={"/icons/SS24.svg"} />
          </span>
        </button>

        <button
          className="board-tool"
          title="Remove Selected"
          onClick={(e) => removeSelected()}
        >
          <span className="custom-icon">
            <img alt="" src={"/icons/SS23.svg"} />
          </span>
        </button>

        {/* <button
          className="board-tool"
          id={"eraser-popover-btn"}
          title="ERASER"
          aria-describedby={"eraser-popover"}
          variant="contained"
          onClick={handlePopoverBtnClick}
        >
          <span className="custom-icon">
            <img alt="" src={"/icons/ERASER.svg"} />
          </span>
        </button>
        <Popover
          id={"eraser-popover"}
          className="tool-popover"
          open={isOpen("eraser-popover-btn")}
          anchorEl={anchorEl}
          onClose={handlePopoverBtnClose}
          anchorOrigin={{
            vertical: "center",
            horizontal: "right",
          }}
          transformOrigin={{
            vertical: "center",
            horizontal: "left",
          }}
        >
          <div className="tool-popover-container">
            <div className="tool-item-container eraser-container">
              <button
                title="White Eraser"
                onClick={(e) => {
                  setBrushRadius(8);
                  changeColor("#fff");
                }}
              >
                <SVGIcon filepath="/icons/SS21.svg" />
              </button>

              <button
                title="Dark Eraser"
                onClick={(e) => {
                  setBrushRadius(8);
                  changeColor("#000");
                }}
              >
                <SVGIcon filepath="/icons/SS22.svg" />
              </button>

              <button>
                <SVGIcon filepath="/icons/SS23.svg" />
              </button>

              <button onClick={(e) => canvasCLEAR()}>
                <SVGIcon filepath="/icons/SS24.svg" />
              </button>
            </div>

            <div className="fixed-line-toggle-container">
              <p>Fixed line width </p>

              <Switch
                name="fixedLine"
                size="small"
                // checked={fillWithColor}
                // onChange={(e) => toggleFillWithColor(e.target.checked)}
              />
            </div>
            <div className="brush-size-slider-container">
              <p>Eraser Size</p>
              <Slider
                value={brushRadius}
                min={1}
                max={25}
                valueLabelDisplay="auto"
                onChange={handleBrusSizeChange}
                aria-labelledby="continuous-slider"
              />
            </div>
          </div>
        </Popover> */}

        <button
          className="board-tool"
          id={"shape-popover-btn"}
          title="SHAPE"
          aria-describedby={"shape-popover"}
          variant="contained"
          onClick={handlePopoverBtnClick}
        >
          <span className="custom-icon">
            <img alt="" src={"/icons/SHAPE.svg"} />
          </span>
        </button>
        <Popover
          id={"shape-popover"}
          className="tool-popover"
          open={isOpen("shape-popover-btn")}
          anchorEl={anchorEl}
          onClose={handlePopoverBtnClose}
          anchorOrigin={{
            vertical: "center",
            horizontal: "right",
          }}
          transformOrigin={{
            vertical: "center",
            horizontal: "left",
          }}
        >
          <div className="tool-popover-container">
            <div className="tool-item-container eraser-container">
              <button
                title="Rectangle"
                onClick={(e) => selectTool(Tools.Rectangle)}
              >
                <SVGIcon filepath="/icons/SHAPE.svg" />
              </button>

              <button title="Circle" onClick={(e) => selectTool(Tools.Circle)}>
                <SVGIcon filepath="/icons/circle.svg" id="circle-svg-img"/>
              </button>

              <button onClick={(e) => selectTool(Tools.Line)}>
                <SVGIcon filepath="/icons/SS20.svg" />
              </button>
            {/* 
              <button>
                <SVGIcon filepath="/icons/SS18.svg" />
              </button> */}
            </div>

            <div className="fixed-line-toggle-container">
              <p>Filled shape </p>

              <Switch
                name="filledShape"
                size="small"
                checked={fillWithColor}
                onChange={(e) => toggleFillWithColor(e.target.checked)}
              />
            </div>
            <div className="brush-size-slider-container">
              <p>Stroke Size</p>
              <Slider
                value={brushRadius}
                min={1}
                max={25}
                valueLabelDisplay="auto"
                onChange={handleBrusSizeChange}
                aria-labelledby="continuous-slider"
              />
            </div>
            {/* <div>
              <TextField
                label="Image URL"
                helperText="Copy/Paste an image URL"
                onChange={(e) => setImgURL(e.target.value)}
                value={imgURL}
              />
              <br />
              <Button
                variant="outlined"
                size="small"
                onClick={(e) => addImage(imgURL)}
              >
                Load Image from URL
              </Button>
            </div> */}
          </div>
        </Popover>

        <button
          className="board-tool"
          onClick={(e) => {
            selectTool(Tools.Select);
            addText();
          }}
        >
          <span className="custom-icon">
            <img alt="" src={"/icons/FONT.svg"} />
          </span>
        </button>
      </div>
{/* 
      <div className="tool_container scale-tool tool">
        <button className="board-tool">
          <span className="custom-icon">
            <img alt="" src={"/icons/SS.svg"} />
          </span>
        </button>
        <span className="scale-value"> 12 </span>
      </div> */}

      <div className="pages tool">
        <button
          onClick={(e) => {
            if (currentPage > 1) dispatch(setCurrentPage(currentPage - 1));
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
            if (currentPage < totalPage)
              dispatch(setCurrentPage(currentPage + 1));
          }}
        >
          <i className="fa fa-chevron-right" />
        </button>
      </div>
    </div>
  );
}
