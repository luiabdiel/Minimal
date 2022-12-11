import axios from "axios";
import { getUserLocalStorage } from "../contexts/AuthProvider/util";

export const Api = axios.create({
    baseURL: "https://reqres.in/api",
})