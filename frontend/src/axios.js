import axios from "axios";

axios.default.baseUrl = process.env.API_ENV || "http://localhost:8081";
