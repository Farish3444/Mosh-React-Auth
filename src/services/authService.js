import http from './httpService';
import { VidlyApi } from '../config.json';

const apiEndpoint = VidlyApi + '/auth';

export function login(email,password){
    return http.post(apiEndpoint,{email,password});
}