import React from 'react'
import {useForm} from 'react-hook-form'
import { LoginData, loginRequest } from '../api/authLogin'

export default function Signin() {

const {register, handleSubmit} = useForm<LoginData>();

const onSubmit =async (data: LoginData)=>{
  try{
    const response=  await loginRequest(data)
      if (response.token=='200'){
        alert('Se inicio sesión correctamente')
      }
    }catch{
      alert('El usuario no se encontró registrado')
    }
}

  return (
    <div className="min-h-screen flex items-center justify-center bg-zinc-900 p-4">
  <div className="bg-zinc-800 p-8 rounded-lg shadow-lg w-full max-w-sm border border-zinc-700">
    <h1 className="text-2xl font-bold text-white mb-6">Login</h1>
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-300 mb-2">Usuario</label>
        <input 
          type="email" 
          {...register('usuario')} 
          className="w-full px-4 py-2 bg-zinc-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-300 mb-2">Contraseña</label>
        <input 
          type="password" 
          {...register('contraseña')} 
          className="w-full px-4 py-2 bg-zinc-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
        />
      </div>
      <button 
        type="submit" 
        className="w-full bg-zinc-700 text-white py-2 rounded-lg hover:bg-zinc-600 transition-colors duration-300"
      >
        Registrarse
      </button>
    </form>
  </div>
</div>
  )
}
