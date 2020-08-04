import Cookies from "js-cookie";

export const saveDataAsCookie = (name, value, expirationDays = 30) => {
	try {
		Cookies.set(name, value, { expires: expirationDays });
		return true;
	} catch (e) {
		throw e
	}
};

export const getDataFromCookie = async (name) => {
	try {
		return await Cookies.get(name);
	} catch (e) {
		throw e
	}
};

export const removeCookie = async (name) => {
	try {
		await Cookies.remove(name);
		return true;
	} catch (e) {
		throw e
	}
};
