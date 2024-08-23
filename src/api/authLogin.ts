import instance from "./axios";

export interface LoginData {
    usuario: string;
    contraseña: string;
}
export interface User{
    id: number;
    correo: string;
}

export interface LoginResponse{
    token: string;
    user: User;
}

export const loginRequest =async(data:LoginData): Promise<LoginResponse> => {
    try{
        const response = await instance.post('/login', data);
        const token = response.data.token;
        const user = response.data.user as User;
        return {token,user}
    }catch{
        return Promise.reject('Error al iniciar sesión');
    }
} 