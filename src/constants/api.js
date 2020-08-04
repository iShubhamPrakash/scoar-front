import { API_BASE_URL } from "./base";

// Auth

export const getIPURL = `${API_BASE_URL}/scoar/`;
export const checkUserExistURL =`${API_BASE_URL}/scoar/cred/checkuserexists/`;
export const sendLoginOTPURL =`${API_BASE_URL}/scoar/auth/login/sendotp/`;
export const sendSignupOTPURL =`${API_BASE_URL}/scoar/auth/signup/sendotp/`;
export const verifyOTPURL =`${API_BASE_URL}/scoar/auth/verifyotp/`;


// Teacher details
export const BASIC_DETAIL_API_URL = `${API_BASE_URL}/scoar/teacher/details/add/`;



// Classroom

export const CLASSROOMS_LIST_API_URL = `${API_BASE_URL}/scoar/teacher/listofclass/`;
