import * as actionTypes from "../../constants/actionTypes";

const initialState = {
  brushColor: "#444",
  brushRadius: 4,
  canvasHeight: 700,
  canvasWidth: 700,
  totalPage: 5,
  currentPage: 0,
  canvasData: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_BRUSH_COLOR:
      return { ...state, brushColor: action.brushColor };

    case actionTypes.SET_BRUSH_RADIUS:
			return { ...state, brushRadius: action.brushRadius };
			
    case actionTypes.SET_CANVAS_HEIGHT:
			return { ...state, canvasHeight: action.canvasHeight };
			
    case actionTypes.SET_CANVAS_WIDTH:
			return { ...state, canvasWidth: action.canvasWidth };
			
    case actionTypes.SET_TOTAL_PAGE:
			return { ...state, totalPage: action.totalPage };
			
    case actionTypes.SET_CURRENT_PAGE:
			return { ...state, currentPage: action.currentPage };

			case actionTypes.SET_CANVAS_DATA:
				return { ...state, canvasData: action.canvasData };

    default:
      return state;
  }
};
