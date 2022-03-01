// npm i axios
import axios from "axios";

const api = axios.create({
    baseURL: "https://ys-playlist-server.herokuapp.com/",
});
localStorage.PLaccessToken ? api.defaults.headers.common["Authorization"] = `bearer ${localStorage.PLaccessToken}` : alert("sdd")

export default api;