import * as actionTypes from "../../constants/actionTypes";

const initialState ={
	list: [],
	loadingList: false
}

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
				loadingList: action.value
			}
		default:
			return state;
	}
};