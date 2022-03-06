// npm i axios
import axios from "axios";

const api = axios.create({
    baseURL: "https://ys-playlist-server.herokuapp.com/",
});
localStorage.PLaccessToken ? api.defaults.headers.common["Authorization"] = `bearer ${localStorage.PLaccessToken}` : console.log("you need to login")

export default api;

//https://ys-playlist-server.herokuapp.com/
//http://localhost:3007/