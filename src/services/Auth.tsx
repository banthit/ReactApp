import axiosInstance from "../configs/axios";
import { useEffect } from "react";

type loginInfoAccount = {
    email: string,
    password: string
}

const login = async(info :loginInfoAccount) => {
    try {
        await axiosInstance.post('/login', info);
    } catch (error) {
        console.log(error);
    }
}

export {login}