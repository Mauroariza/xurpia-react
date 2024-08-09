import instance from "./axios";

export interface FormData{
    correo: string;
    contraseña: string;
}


export interface IUser {
    id: string;
    email: string;
}

export interface IRegisterResponse {
    user: IUser;
    status: number;
}


export const  registerUser = async (data: FormData): Promise<IRegisterResponse> =>{
    const response = await instance.post(`/user/`, data)
    return response.data; 
}