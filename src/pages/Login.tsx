
import { useForm } from 'react-hook-form';
import Button from '../components/Button';
import Input from '../components/Input';

interface FormData {
  email: string;
  password: string;
}

export default function Component() {
  const { register, handleSubmit } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log(data);
    // Aquí puedes manejar el envío del formulario
  };

  return (
    <div className="min-h-screen w-full flex">
      {/* Lado izquierdo - Imagen decorativa */}

      <div className="hidden md:block w-1/2 bg-[#e7f6f6] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-teal-200 to-teal-600 opacity-20" />
        {/* Agrega tu imagen decorativa aquí */}
      </div>

      {/* Lado derecho - Formulario de inicio de sesión */}
      <div className="w-full md:w-1/2 p-8 sm:p-12 lg:p-16 flex items-center justify-center">

        <div className="w-full max-w-md space-y-8">
         
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tight">Login</h1>
            <p className="text-gray-500 dark:text-gray-400">
              Bienvenido de nuevo, por favor inicia sesión
            </p>
          </div>

          <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
            <div className="space-y-2">
              <label
                className="text-sm font-medium leading-none"
                htmlFor="email"
              >
                Correo Electrónico
              </label>
              <Input
                id="email"
                placeholder="m@example.com"
                type="email"
                {...register('email', { required: true })}
              />
            </div>
            <div className="space-y-2">
              <label
                className="text-sm font-medium leading-none"
                htmlFor="password"
              >
                Contraseña
              </label>
              <Input
                id="password"
                placeholder="Tu contraseña"
                type="password"
                {...register('password', { required: true })}
              />
            </div>
            <div className="flex items-center justify-end">
              <a
                className="text-sm text-emerald-500 hover:text-emerald-600"
                href="#"
              >
                ¿Has olvidado la contraseña?
              </a>
            </div>

          </form>

          <div className="text-center text-sm">
            ¿Necesitas una cuenta?{' '}
            <a
              className="text-emerald-500 hover:text-emerald-600 font-medium"
              href="#"
            >
              Regístrate
            </a>
          </div>
          <Button className="w-full bg-emerald-400 hover:bg-emerald-500" type="submit">
            Login
          </Button>
        </div>
      </div>
    </div>
  );
}




