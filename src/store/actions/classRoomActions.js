import * as actionTypes from "../../constants/actionTypes";
import { CLASSROOMS_LIST_API_URL, TODAYS_CLASSROOM_LIST_API_URL } from "../../constants/api";

// For demo

const demoDataForClassList= {
  "statusCode": "SUCCESS",
  "classRoom": [
    {
      "crid": 4,
      "uid": 20,
      "classroomname": "Computer Class for 10th",
      "classtype": "Academics",
      "starttime": [
        "2020-08-06 10:00:00",
        "2020-08-07 10:00:00",
        "2020-08-08 11:00:00",
        "2020-08-10 10:00:00"
      ],
      "endtime": [
        "2020-08-06 11:00:00",
        "2020-08-07 11:00:00",
        "2020-08-08 01:00:00",
        "2020-08-10 10:00:00"
      ],
      "mode": "English",
      "fees": 5000,
      "description": " ",
      "noofstudents": 4
    },
    {
      "crid": 5,
      "uid": 20,
      "classroomname": "Physics Class",
      "classtype": "Academics",
      "starttime": [
        "2020-08-10 10:00:00"
      ],
      "endtime": [
        "2020-08-10 11:00:00"
      ],
      "mode": "English",
      "fees": 6000,
      "description": "Test Physics",
      "noofstudents": 3
    },
    {
      "crid": 6,
      "uid": 20,
      "classroomname": "CS class",
      "classtype": "Academics",
      "starttime": [],
      "endtime": [],
      "mode": "Hindi",
      "fees": 5500,
      "description": " ",
      "noofstudents": 4
    },
    {
      "crid": 7,
      "uid": 20,
      "classroomname": "Music",
      "classtype": "Dancing",
      "starttime": [],
      "endtime": [],
      "mode": "Hindi",
      "fees": 3000,
      "description": "Sing Along",
      "noofstudents": 2
    },
    {
      "crid": 10,
      "uid": 20,
      "classroomname": "Demo class",
      "classtype": "Academics",
      "starttime": [
        "",
        "",
        "",
        "",
        "",
        "",
        ""
      ],
      "endtime": [
        "",
        "",
        "",
        "",
        "",
        "",
        ""
      ],
      "mode": "English",
      "fees": 8000,
      "description": "This is a demo class",
      "noofstudents": 0
    },
    {
      "crid": 11,
      "uid": 20,
      "classroomname": "Demo class",
      "classtype": "Academics",
      "starttime": [
        "23:41:48 GMT+0530 (India Standard Time)",
        "",
        "",
        "",
        "",
        "",
        ""
      ],
      "endtime": [
        "23:41:48 GMT+0530 (India Standard Time)",
        "",
        "",
        "",
        "",
        "",
        ""
      ],
      "mode": "English",
      "fees": 8000,
      "description": "This is a demo class",
      "noofstudents": 0
    },
    {
      "crid": 12,
      "uid": 20,
      "classroomname": "test",
      "classtype": "Academics",
      "starttime": [
        "",
        "",
        "",
        "",
        "",
        "",
        ""
      ],
      "endtime": [
        "",
        "",
        "",
        "",
        "",
        "",
        ""
      ],
      "mode": "English",
      "fees": 6000,
      "description": "Hello test",
      "noofstudents": 0
    },
    {
      "crid": 13,
      "uid": 20,
      "classroomname": "Demo class",
      "classtype": "Academics",
      "starttime": [
        "06:00",
        "",
        "",
        "",
        "",
        "",
        ""
      ],
      "endtime": [
        "07:00",
        "",
        "",
        "",
        "",
        "",
        ""
      ],
      "mode": "English",
      "fees": 8000,
      "description": "This is a demo class",
      "noofstudents": 0
    },
    {
      "crid": 14,
      "uid": 20,
      "classroomname": "Test 2",
      "classtype": "Dancing",
      "starttime": [
        "04:00",
        "",
        "",
        "",
        "",
        "",
        "08:00"
      ],
      "endtime": [
        "05:00",
        "",
        "",
        "",
        "",
        "",
        "09:03"
      ],
      "mode": "Hindi",
      "fees": 9666,
      "description": "kkkkkk",
      "noofstudents": 0
    },
    {
      "crid": 15,
      "uid": 20,
      "classroomname": "Final test",
      "classtype": "Academics",
      "starttime": [
        "hello",
        "",
        "",
        "",
        "",
        "",
        ""
      ],
      "endtime": [
        "hi",
        "",
        "",
        "",
        "",
        "",
        ""
      ],
      "mode": "English",
      "fees": 6000,
      "description": "This is final testing",
      "noofstudents": 0
    },
    {
      "crid": 16,
      "uid": 20,
      "classroomname": "Final testing 2",
      "classtype": "Dancing",
      "starttime": [
        "07:12",
        "07:12",
        "",
        "",
        "",
        "10:12",
        ""
      ],
      "endtime": [
        "07:12",
        "09:12",
        "",
        "",
        "",
        "13:12",
        ""
      ],
      "mode": "Regional",
      "fees": 1000,
      "description": "12000 yearly that means 1000 monthly",
      "noofstudents": 0
    },
    {
      "crid": 17,
      "uid": 20,
      "classroomname": "Testing shchedule",
      "classtype": "Academics",
      "starttime": [],
      "endtime": [],
      "mode": "English",
      "fees": 8000,
      "description": "This is a demo class",
      "noofstudents": 0
    },
    {
      "crid": 18,
      "uid": 20,
      "classroomname": "4 am Testinggggggg",
      "classtype": "Painting",
      "starttime": [],
      "endtime": [],
      "mode": "Hindi",
      "fees": 3000,
      "description": "fee should be 3000",
      "noofstudents": 0
    }
  ]
}

const populateDemoData = ()=>{
	return new Promise((resolve, reject)=>{
		setTimeout(() => {
			resolve(demoDataForClassList);
		}, 1000);
	})
}


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

		// const res = await fetch(`${CLASSROOMS_LIST_API_URL}/${token}`);
		// const data = await res.json();

		const data = await populateDemoData();

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

const demoTodaysData = [
  {
    "crid": 4,
    "classname": "Computer Class for 10th",
    "starttime": "11/08/2020 08:00:00",
    "endtime": "11/08/2020 09:00:00"
  },
  {
    "crid": 5,
    "classname": "Physics Class",
    "starttime": "11/08/2020 08:00:00",
    "endtime": "11/08/2020 09:00:00"
  },
  {
    "crid": 6,
    "classname": "CS class",
    "starttime": "11/08/2020 08:00:00",
    "endtime": "11/08/2020 09:00:00"
  },
  {
    "crid": 7,
    "classname": "Music",
    "starttime": "11/08/2020 08:00:00",
    "endtime": "11/08/2020 09:00:00"
  },
  {
    "crid": 10,
    "classname": "Demo class",
    "starttime": "11/08/2020 08:00:00",
    "endtime": "11/08/2020 09:00:00"
  }
]

const populateDenoTodaysClassData=()=>{
	return new Promise((resolve)=>{
		setTimeout(() => {
			resolve(demoTodaysData)
		}, 1500);
	})
}

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
		// const res = await fetch(`${TODAYS_CLASSROOM_LIST_API_URL}${token}`);
		// const data = await res.json();

		const data = await populateDenoTodaysClassData();
		
		console.log("todays data", data)
		dispatch(saveTodaysClassRoomToStore(data));
		dispatch(setLoadingTodaysClassroom(false));
	} catch (e) {
		console.error("## Error fetching todays class",e);
		dispatch(saveTodaysClassRoomToStore([]));
		dispatch(setLoadingTodaysClassroom(false));
	}
};
