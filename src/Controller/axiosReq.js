// npm i axios
import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:3007/",
});
localStorage.PLaccessToken ? api.defaults.headers.common["Authorization"] = `bearer ${localStorage.PLaccessToken}` : alert("sdd")

export default api;