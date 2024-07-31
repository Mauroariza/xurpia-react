import React, { useState } from 'react';
import MiEspacio from './MiEspacio';
import Notificaciones from './Notificaciones';
import Signin from './Signin';
import Signup from './Signup';

type ComponentMap = {
  [key: string]: React.ComponentType;
};

const Components: ComponentMap = {
  MiEspacio: MiEspacio,
  Notificaciones: Notificaciones,
  Signin: Signin,
  Signup: Signup
};

function Ia() {
  const [componentToShow, setComponentToShow] = useState<keyof typeof Components>('MiEspacio');

  const handleComponentChange = (componentName: keyof typeof Components) => {
    setComponentToShow(componentName);
  };

  const Component = Components[componentToShow];

  return (
    <div className="flex h-screen bg-gray-900 text-white">
      <div className="w-1/5 bg-gray-800 p-4">
        <a href="#" className="text-2xl font-bold mb-4 block">XURP IA</a>
        <div className="side-nav">
          <div className="item mb-2">
            <i className="bx bx-search-alt" />
            <a href="#" className="block py-2 px-4 hover:bg-gray-700 rounded" onClick={() => handleComponentChange('MiEspacio')}>Mi Espacio</a>
          </div>
          <div className="item mb-2">
            <i className="bx bx-message-square-dots" />
            <a href="#" className="block py-2 px-4 hover:bg-gray-700 rounded" onClick={() => handleComponentChange('Notificaciones')}>Notificaciones</a>
          </div>
          <div className="item mb-2">
            <i className="bx bx-bookmark-minus" />
            <a href="#" className="block py-2 px-4 hover:bg-gray-700 rounded" onClick={() => handleComponentChange('Signin')}>Signin</a>
          </div>
          <div className="item mb-2">
            <i className="bx bx-cog" />
            <a href="#" className="block py-2 px-4 hover:bg-gray-700 rounded" onClick={() => handleComponentChange('Signup')}>Signup</a>
          </div>
        </div>
        <div className="side-profile mt-4">
          <div className="info mb-4">
            <img src="../IMG/david.jpg" alt="David Campiño" className="w-16 h-16 rounded-full mx-auto" />
            <a href="#" className="block text-center mt-2">David Campiño</a>
            <p className="text-center text-sm">Programador</p>
          </div>
          <div className="skills">
            <h5 className="text-lg font-semibold mb-2">Conocimientos</h5>
            <div className="skill-tags">
              <div className="item mb-1">
                <p className="bg-gray-700 py-1 px-2 rounded">Diseño UI</p>
              </div>
              <div className="item mb-1">
                <p className="bg-gray-700 py-1 px-2 rounded">React</p>
              </div>
              <div className="item mb-1">
                <p className="bg-gray-700 py-1 px-2 rounded">Photoshop</p>
              </div>
              <div className="item mb-1">
                <p className="bg-gray-700 py-1 px-2 rounded">HTML/CSS</p>
              </div>
            </div>
          </div>
          <button className="mt-4 w-full bg-teal-500 py-2 rounded hover:bg-teal-600">Ver Perfil</button>
        </div>
      </div>
      <div className="w-2/3 p-4">
        <Component />
      </div>
    </div>
  );
}

export default Ia;
