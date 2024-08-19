import React from 'react'
import {useForm} from 'react-hook-form'

export default function Signin() {
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label >Correo: </label>
        <input type="correo" {...register("correo")} />
        <label >Contraseña</label>
        <input type="contraseña" {...register("contraseña")} />
      </form>
    </div>
  )
}
