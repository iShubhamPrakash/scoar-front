import * as actionTypes from "../../constants/actionTypes";
import { CLASSROOMS_LIST_API_URL, TODAYS_CLASSROOM_LIST_API_URL } from "../../constants/api";

// Total classroom list
export const setFetchClassRoomListLoading = (value) => {
	return {
		type: actionTypes.LOADING_CLASS_ROOM_LIST,
		value,
	};
};

export const saveClassRoomListToStore = (data) => {
	return {
		type: actionTypes.SAVE_CLASSROOM_LIST_TO_STORE,
		data,
	};
};

export const fetchClassRoomList = (token) => async (dispatch) => {
	try {
		dispatch(setFetchClassRoomListLoading(true));

		const res = await fetch(`${CLASSROOMS_LIST_API_URL}/${token}`);
		const data = await res.json();

    console.log("classlist data", data);
    
		if (data.statusCode.includes("SUCCESS")) {
			dispatch(saveClassRoomListToStore(data.classRoom));
			dispatch(setFetchClassRoomListLoading(false));
		} else {
			dispatch(saveClassRoomListToStore([]));
			dispatch(setFetchClassRoomListLoading(false));
		}
	} catch (e) {
		console.error(e);
		dispatch(saveClassRoomListToStore([]));
		dispatch(setFetchClassRoomListLoading(false));
	}
};




// Todays classroom list
export const setLoadingTodaysClassroom = (value) => {
	return {
		type: actionTypes.LOADING_TODAYS_CLASSROOM,
		value,
	};
};

export const saveTodaysClassRoomToStore = (data) => {
	return {
		type: actionTypes.SAVE_TODAYS_CLASSROOM_TO_STORE,
		data,
	};
};

export const fetchTodaysClassRoomList = (token) => async (dispatch) => {
	try {
		dispatch(setLoadingTodaysClassroom(true));
		const res = await fetch(`${TODAYS_CLASSROOM_LIST_API_URL}${token}`);
		const data = await res.json();
		console.log("todays data", data)
		dispatch(saveTodaysClassRoomToStore(data));
		dispatch(setLoadingTodaysClassroom(false));
	} catch (e) {
		console.error("## Error fetching todays class",e);
		dispatch(saveTodaysClassRoomToStore([]));
		dispatch(setLoadingTodaysClassroom(false));
	}
};
