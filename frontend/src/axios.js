import axios from "axios";

axios.defaults.baseURL = process.env.API_ENV || "http://localhost:8081";
