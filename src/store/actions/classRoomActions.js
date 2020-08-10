import * as actionTypes from "../../constants/actionTypes";
import { CLASSROOMS_LIST_API_URL } from "../../constants/api";

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

export const saveClassRoomListToStore = (data) => {
	return {
		type: actionTypes.SAVE_CLASSROOM_LIST_TO_STORE,
		data,
	};
};

export const setFetchClassRoomListLoading = (value) => {
	return {
		type: actionTypes.LOADING_CLASS_ROOM_LIST,
		value,
	};
};
