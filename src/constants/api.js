import { API_BASE_URL } from "./base";

const getFullAPIURL = (path) => `${API_BASE_URL}${path}`

// Auth

export const getIPURL = getFullAPIURL("/scoar/");
export const checkUserExistURL = getFullAPIURL("/scoar/cred/checkuserexists/");
export const sendLoginOTPURL = getFullAPIURL("/scoar/auth/login/sendotp/");
export const sendSignupOTPURL = getFullAPIURL("/scoar/auth/signup/sendotp/");
export const verifyOTPURL = getFullAPIURL("/scoar/auth/verifyotp/");


// Baic details
export const BASIC_DETAIL_API_URL = getFullAPIURL("/scoar/teacher/details/add/");
export const STUDENT_BASIC_DETAIL_API_URL = getFullAPIURL("/scoar/student/add/")


// Classroom

export const CLASSROOMS_LIST_API_URL = getFullAPIURL("/scoar/teacher/listofclass/");
export const ADD_STUDENT_TO_CLASS_API_URL = getFullAPIURL("/scoar/teacher/classroom/addstudent/");
export const STUDENT_LIST_API_URL = getFullAPIURL("/scoar/teacher/classroom/view/");
export const CREATE_CLASS_API_URL = getFullAPIURL("/scoar/teacher/classroom/add/");
export const TODAYS_CLASSROOM_LIST_API_URL =getFullAPIURL("/scoar/teacher/dashboard/todayclassroom/")
export const CANCEL_CLASS_API_URL = getFullAPIURL("/scoar/teacher/classroom/cancel/")

// Payment

export const VIEW_TOTAL_PAYMENTS_API_URL= getFullAPIURL("/scoar/teacher/payment/")
export const VIEW_PAYMENT_LIST_API_URL= getFullAPIURL('/scoar/teacher/dashboard/payment/')