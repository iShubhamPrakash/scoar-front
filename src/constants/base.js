const production = true;

const productionAPI = "https://score-backend.herokuapp.com"

const devAPI = "http://localhost:5000"

export const API_BASE_URL= production ? productionAPI : devAPI


export const LOCAL_STORAGE_AUTH_KEY = 'scoar_auth_token';