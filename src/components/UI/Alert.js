import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const alertConfig = {
	position: "top-right",
	autoClose: 3000,
	hideProgressBar: false,
	closeOnClick: true,
	pauseOnHover: true,
	draggable: true,
	progress: undefined,
};

export const success = (msg) => toast.success(msg, alertConfig);

export const info = (msg) => toast.info(msg, alertConfig);

export const warn = (msg) => toast.warn(msg, alertConfig);

export const error = (msg) => toast.error(msg, alertConfig);

export const defaultAlert = (msg) => toast(msg, alertConfig);

export default defaultAlert;