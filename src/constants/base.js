const production = true;

const productionAPI = "https://score-backend.herokuapp.com"
const devAPI = "http://localhost:5000"

export const API_BASE_URL= production ? productionAPI : devAPI

// Socket server endpoint

const productionSocketEndpoint= 'http://127.0.0.1:3001';
const devSocketEndpoint = 'http://127.0.0.1:3001';

export const SOCKET_SERVER_ENDPOINT = production ? productionSocketEndpoint : devSocketEndpoint;

export const LOCAL_STORAGE_AUTH_KEY = 'scoar_auth_token';
export const AUTH_COOKIE_NAME = 'scoar_auth';
