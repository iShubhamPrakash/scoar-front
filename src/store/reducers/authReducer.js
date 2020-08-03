import * as actionTypes from "../../constants/actionTypes";

const initialState = {
	name: "",
	username: "",
	token: null,
	contactNo: null,
	role: null,
	uid: null,
};

// {
//   "statusCode": "SUCCESS",
//   "user": {
//     "contactNo": "917903652020",
//     "role": "Teacher",
//     "uid": 6
//   },
//   "token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJ1aWQiOjYsInJvbGUiOiJUZWFjaGVyIn0.BmFpYESyv900ey10-Yfw8XYQOc0h66mJW6af3B7yqrfPa8TUXYw6IeQk6yf5Ok0JAkQSq44_F5NJiyryKFqYpA"
// }

export default (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.SIGN_IN:
			console.log("signin action-", action);
			const { token, uid, role, contactNo } = action;
			return {
				...state,
				token,
				uid,
				role,
				contactNo,
			};

		case actionTypes.SIGN_OUT:
			return initialState;

		default:
			return state;
	}
};
