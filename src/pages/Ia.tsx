import React, { useState } from 'react';
import MiEspacio from './MiEspacio';
import Notificaciones from './Notificaciones';
import Signin from './Login';
import Signup from './Signup';


type ComponentMap = {
  [key: string]: React.ComponentType;
};

const Components: ComponentMap = {
  MiEspacio: MiEspacio,
  Signin: Signin,
  Signup: Signup,
};

function Ia() {
  const [componentToShow, setComponentToShow] = useState<keyof typeof Components>('MiEspacio');
  const [showNotificacionesPopup, setShowNotificacionesPopup] = useState(false);

  const handleComponentChange = (componentName: keyof typeof Components) => {
    setComponentToShow(componentName);
    setShowNotificacionesPopup(false); // Cerrar popup de notificaciones al cambiar de pestaña
  };

  const toggleNotificacionesPopup = () => {
    setShowNotificacionesPopup(!showNotificacionesPopup); // Alternar la ventana emergente
  };

  const Component = Components[componentToShow];

  return (
    <div className="flex h-screen bg-slate-950  text-white">
      {/* Barra lateral */}
      <div className="w-1/5 bg-black p-4 flex flex-col justify-between">
        <div>
          <a href="#" className="text-2xl font-bold mb-8 block">XURP IA</a>
          <div className="side-nav mb-8">
            <div className="item mb-4">
              <a href="#" className="flex items-center py-2 px-4 hover:bg-zinc-800 rounded" onClick={() => handleComponentChange('MiEspacio')}>
                <i className="bx bx-home-alt mr-2" />
                Mi Espacio
              </a>
            </div>
            <div className="item mb-4">
              <a href="#" className="flex items-center py-2 px-4 hover:bg-zinc-800 rounded" onClick={toggleNotificacionesPopup}>
                <i className="bx bx-bell mr-2" />
                Notificaciones
              </a>
            </div>
          </div>
        </div>
        
        {/* Perfil en la parte inferior */}
        <div className="side-profile">
          <div className="info mb-8 text-center">
            <img src="src/assets/Profile/david.jpg" alt="David Campiño" className="w-16 h-16 rounded-full mx-auto mb-2" />
            <a href="#" className="block text-center mt-2">David Campiño</a>
            <p className="text-sm text-gray-400">Programador</p>
          </div>
          <button className="w-full bg-neutral-700 py-2 rounded hover:bg-zinc-700">Ver Perfil</button>
        </div>
      </div>

      {/* Panel principal */}
      <div className="flex-1 p-8">
        {/* Barra de búsqueda */}
        <div className="flex justify-between mb-6">
          <input
            type="text"
            placeholder="Buscar por trabajos o compañías"
            className="w-2/5 bg-neutral-700 text-white py-2 px-4 rounded-lg focus:outline-none"
          />
          <input
            type="text"
            placeholder="Ingresar ciudad, estado o región"
            className="w-2/5 bg-neutral-700 text-white py-2 px-4 rounded-lg focus:outline-none"
          />
          <button className="bg-neutral-700 px-6 py-2 rounded-lg hover:bg-zinc-800">Buscar</button>
        </div>

        {/* Componente dinámico */}
        <Component />
      </div>

      {/* Ventana emergente de notificaciones */}
      {showNotificacionesPopup && (
        <div className="fixed top-16 right-16 w-80 bg-zinc-800 p-4 rounded-lg shadow-lg z-50">
          <div className="flex justify-between items-center">
            <h3 className="text-xl text-white">Notificaciones</h3>
            <button
              className="text-white"
              onClick={() => setShowNotificacionesPopup(false)}
            >
              &times;
            </button>
          </div>
          <Notificaciones />
        </div>
      )}
    </div>
  );
}

export default Ia;
