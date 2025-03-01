import http from "./config";
const auth = {
  sign_in: data => http.post("/auth/login", data),
  sign_up: data => http.post("/auth/register", data),
  forgot_password: data => http.post("/auth/forgot-password", data),
};

export default auth;
