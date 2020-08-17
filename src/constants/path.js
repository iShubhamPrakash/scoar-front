export const AUTH_PATH = "/auth";

export const LANDING_PAGE_PATH = "/";
export const WHITEBOARD_PATH = "/whiteboard";

// Teacher
export const TEACHER_ADD_DETAILS_PATH = "/dashboard/add-details";
export const DASHBOARD_PATH = "/dashboard";
export const PAYMENT_PATH = "/dashboard/payment";
export const CLASSROOM_PATH = "/dashboard/classroom";
export const CLASSROOM_VIEW_PATH = "/dashboard/classroom/:id";
export const ASSIGNMENT_PATH = "/dashboard/assignment";
export const ASSIGNMENT_VIEW_PATH = "/dashboard/assignment/:id";

// Student
export const STUDENT_ADD_DETAILS_PATH = "/add-details/student";
export const STUDENT_DASHBOARD_PATH = "/dashboard/student";
export const STUDENT_PAYMENT_PATH = "/dashboard/payment/student";
export const STUDENT_CLASSROOM_PATH = "/dashboard/classroomstudent";
export const STUDENT_CLASSROOM_VIEW_PATH = "/dashboard/classroom/student/:id";
export const STUDENT_ASSIGNMENT_PATH = "/dashboard/assignment/student";
export const STUDENT_ASSIGNMENT_VIEW_PATH = "/dashboard/assignment/student/:id";

// Path based on the role of user
export const getDashboardPath = (role) =>
	role === "Student" ? STUDENT_DASHBOARD_PATH : DASHBOARD_PATH;

export const getDetailFormPath = (role) =>
	role === "Student" ? STUDENT_ADD_DETAILS_PATH : TEACHER_ADD_DETAILS_PATH;

export const getPaymentPath = (role) =>
	role === "Student" ? STUDENT_PAYMENT_PATH : PAYMENT_PATH;

export const getClassRoomPath = (role) =>
	role === "Student" ? STUDENT_CLASSROOM_PATH : CLASSROOM_PATH;

export const getClassRoomViewPath = (role, id) =>
	role === "Student" ? `/dashboard/classroom/student/${id}` : `/dashboard/classroom/${id}`;

export const getAssignmentPath = (role) =>
	role === "Student" ? STUDENT_ASSIGNMENT_PATH : ASSIGNMENT_PATH;

export const getAssignmentViewPath = (role) =>
	role === "Student" ? STUDENT_ASSIGNMENT_VIEW_PATH : ASSIGNMENT_VIEW_PATH;
