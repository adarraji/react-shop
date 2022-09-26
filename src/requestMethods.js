import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzMzIwZWU0NmQ1MTcxZDI2YzY0NTNhZCIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE2NjQyMjUwNDAsImV4cCI6MTY2NDQ4NDI0MH0.3kDpLIl4mMVXTmmYfabzFUDi0o91MnBcneQgouZEqFs";

export const publicRequest = axios.create({
    baseURL: BASE_URL,
});


export const userRequest = axios.create({
    baseURL: BASE_URL,
    headers: { token: `Bearer ${TOKEN}` }
});