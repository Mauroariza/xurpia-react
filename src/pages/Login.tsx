
import { useForm } from 'react-hook-form';
import { LoginData, loginRequest } from '../api/authLogin';

export default function Signin() {
  const { register, handleSubmit } = useForm<LoginData>();

  const onSubmit = async (data: LoginData) => {
    try {
      const response = await loginRequest(data);
      if (response.token === '200') {
        alert('Se inició sesión correctamente');
      }
    } catch {
      alert('El usuario no se encontró registrado');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#252527]">
      <div className="flex w-full max-w-4xl bg-white rounded-lg shadow-lg overflow-hidden">
        
        {/* Parte izquierda - Imagen */}
        <div className="w-1/2 bg-cover" style={{ backgroundImage: "url('src/assets/loginIMG.png')" }}>
        </div>
        
        {/* Parte derecha - Formulario */}
        <div className="w-1/2 p-8">
          <h1 className=" text-3xl font-bold text-black mb-4">Login</h1>
          <p className="text-sm text-black mb-8">Bienvenido de nuevo, por favor inicia sesión</p>
          
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Correo Electrónico</label>
              <input
                type="email"
                {...register('correo')}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#58F6AF]"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Contraseña</label>
              <input
                type="password"
                {...register('contraseña')}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#58F6AF]"
              />
            </div>

            <a href="#" className="text-sm text-[#58F6AF] hover:underline">¿Has olvidado la contraseña?</a>

            <button
              type="submit"
              className="w-full bg-[#58F6AF] text-white py-2 rounded-lg hover:bg-[#4ae8a3] transition-colors duration-300"
            >
              Login
            </button>

            <p className="text-sm text-gray-700">
              ¿Necesitas una cuenta?{' '}
              <a href="#" className="text-[#58F6AF] hover:underline">Regístrate</a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

