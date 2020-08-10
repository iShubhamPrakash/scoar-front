import * as actionTypes from "../../constants/actionTypes";

const initialState = {
	list: [],
	todays: [],
	loadingTodays: true,
	loadingList: true,
};

export default (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.SAVE_CLASSROOM_LIST_TO_STORE:
			return {
				...state,
				list: action.data,
			};

		case actionTypes.LOADING_CLASS_ROOM_LIST:
			return {
				...state,
				loadingList: action.value,
			};

		case actionTypes.SAVE_TODAYS_CLASSROOM_TO_STORE:
			return {
				...state,
				todays: action.data,
			};

		case actionTypes.LOADING_TODAYS_CLASSROOM:
			return {
				...state,
				loadingTodays: action.value,
			};
			
		default:
			return state;
	}
};
