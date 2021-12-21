import http from './httpService';
import { VidlyApi } from '../config.json';
import jwtDecode from 'jwt-decode';
const apiEndpoint = VidlyApi + '/auth';


export async function login(email,password){
    const {data: jwt} = await http.post(apiEndpoint,{email,password});
    localStorage.setItem("token",jwt)
}

export function logout(){
    localStorage.removeItem("token");
}

export function loginWithJwt(jwt){
    localStorage.setItem("token",jwt)
}

export function getCurrentUser(){
    try{
        const jwt = localStorage.getItem("token");
        return jwtDecode(jwt);
        }
        catch(ex){
          console.log("Expired Token in local Storage")
        }
}

export function getJwt(){
    return localStorage.getItem("token");
}

export default {
        login,
        logout,
        getCurrentUser,
        loginWithJwt,
        getJwt
}