import * as actionTypes from "../../constants/actionTypes";

export const setBrushColor = (brushColor) => {
  return {
    type: actionTypes.SET_BRUSH_COLOR,
    brushColor,
  };
};

export const setBrushRadius = (brushRadius) => {
  return {
    type: actionTypes.SET_BRUSH_RADIUS,
    brushRadius,
  };
};

export const setCanvasHeight = (canvasHeight) => {
  return {
    type: actionTypes.SET_CANVAS_HEIGHT,
    canvasHeight,
  };
};

export const setCanvasWidth = (canvasWidth) => {
  return {
    type: actionTypes.SET_CANVAS_WIDTH,
    canvasWidth,
  };
};

export const setTotalPage = (totalPage) => {
  return {
    type: actionTypes.SET_TOTAL_PAGE,
    totalPage,
  };
};

export const setCurrentPage = (currentPage) => {
  return {
    type: actionTypes.SET_CURRENT_PAGE,
    currentPage,
  };
};

export const setCanvasData = (canvasData) => {
  return {
    type: actionTypes.SET_CANVAS_DATA,
    canvasData,
  };
};
