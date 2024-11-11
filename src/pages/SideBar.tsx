import React, { useState } from 'react';
import Home from './Home';
import Notes from './Notes';
import Notificaciones from './Notificaciones';


import '@fontsource/albert-sans'; 
import '@fontsource/albert-sans/400.css'; 
import '@fontsource/albert-sans/500.css';
import '@fontsource/albert-sans/600.css';
import '@fontsource/albert-sans/700.css';



type ComponentMap = {
  [key: string]: React.ComponentType;
};

const Components: ComponentMap = {
  Home: Home,
  Notes: Notes,
  Notificaciones: Notificaciones,
};

function SideBar() {
  const [componentToShow, setComponentToShow] = useState<keyof typeof Components>('Home');
  const [showNotificacionesPopup, setShowNotificacionesPopup] = useState(false);

  const handleComponentChange = (componentName: keyof typeof Components) => {
    setComponentToShow(componentName);
    setShowNotificacionesPopup(false); 
  };

  const toggleNotificacionesPopup = () => {
    setShowNotificacionesPopup(!showNotificacionesPopup); 
  };

  const Component = Components[componentToShow];

  return (
    <div className="font-albert flex h-screen bg-[#252527]  text-white">
      
      <div className="w-64 bg-black p-4 flex flex-col justify-between">
        <div>
          <a href="#" className="text-4xl font-bold text-green-400 mb-8 block text-center transform translate-y-4">XURP IA</a>
          <div className="side-nav mb-10">

            <div className="INICIO mt-36">
              <a href="#" className="flex items-center py-2 px-4 rounded" >
              <svg 
                xmlns="http://www.w3.org/2000/svg"
                width="35"
                height="35"
                viewBox="-20 50 300 150"
                className="fill-white mr-4"
              >
                <g fill="#ffffff" fillRule="nonzero" stroke="none" strokeWidth="1">
                  <g transform="scale(5.33333, 5.33333)">
                    <path
                      d="M23.95117,4c-0.31984,0.01092 -0.62781,0.12384 -0.87891,0.32227l-14.21289,11.19727c-1.8039,1.42163 -2.85937,3.59398 -2.85937,5.89063v19.08984c0,1.36359 1.13641,2.5 2.5,2.5h10c1.36359,0 2.5,-1.13641 2.5,-2.5v-10c0,-0.29504 0.20496,-0.5 0.5,-0.5h5c0.29504,0 0.5,0.20496 0.5,0.5v10c0,1.36359 1.13641,2.5 2.5,2.5h10c1.36359,0 2.5,-1.13641 2.5,-2.5v-19.08984c0,-2.29665 -1.05548,-4.46899 -2.85937,-5.89062l-14.21289,-11.19727c-0.27738,-0.21912 -0.62324,-0.33326 -0.97656,-0.32227zM24,7.41016l13.28516,10.4668c1.0841,0.85437 1.71484,2.15385 1.71484,3.5332v18.58984h-9v-9.5c0,-1.91495 -1.58505,-3.5 -3.5,-3.5h-5c-1.91495,0 -3.5,1.58505 -3.5,3.5v9.5h-9v-18.58984c0,-1.37935 0.63074,-2.67883 1.71484,-3.5332z"
                    />
                  </g>
                </g>
              </svg>
                Inicio
              </a>
            </div>

            <div className="NOTAS mt-3 mb-4">
              <a href="#" className="flex items-center py-2 px-4 rounded" onClick={() => handleComponentChange('Notes')}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="35"
                height="35"
                viewBox="0 0 50 50"
                className="fill-white mr-4"
              >
                <path d="M 14 4 C 8.4886661 4 4 8.4886661 4 14 L 4 36 C 4 41.511334 8.4886661 46 14 46 L 36 46 C 41.511334 46 46 41.511334 46 36 L 46 14 C 46 8.4886661 41.511334 4 36 4 L 14 4 z M 14 6 L 36 6 C 40.430666 6 44 9.5693339 44 14 L 44 16 L 6 16 L 6 14 C 6 9.5693339 9.5693339 6 14 6 z M 6 18 L 44 18 L 44 26 L 6 26 L 6 18 z M 8 20 L 8 22 L 10 22 L 10 20 L 8 20 z M 12 20 L 12 22 L 14 22 L 14 20 L 12 20 z M 16 20 L 16 22 L 18 22 L 18 20 L 16 20 z M 20 20 L 20 22 L 22 22 L 22 20 L 20 20 z M 24 20 L 24 22 L 26 22 L 26 20 L 24 20 z M 28 20 L 28 22 L 30 22 L 30 20 L 28 20 z M 32 20 L 32 22 L 34 22 L 34 20 L 32 20 z M 36 20 L 36 22 L 38 22 L 38 20 L 36 20 z M 40 20 L 40 22 L 42 22 L 42 20 L 40 20 z M 6 28 L 44 28 L 44 35 L 6 35 L 6 28 z M 6.2011719 37 L 43.798828 37 C 43.288508 40.932523 40.075535 44 36 44 L 14 44 C 9.9244647 44 6.7114915 40.932523 6.2011719 37 z" />
              </svg>
                Notas
              </a>
            </div>

            <div className="NOTIFICATION mt-3 mb-4">
              <a href="#" className="flex items-center py-2 px-4 rounded" onClick={toggleNotificacionesPopup}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 18 24"
                width="25"
                height="25"
                className="mr-7"
              >
              <path fill="none" d="M0 0h24v24H0z"></path>
                <path
                  fill="currentColor"
                  d="M20 17h2v2H2v-2h2v-7a8 8 0 1 1 16 0v7zm-2 0v-7a6 6 0 1 0-12 0v7h12zm-9 4h6v2H9v-2z"
                ></path>
              </svg> 
                Notificaciones
              </a>
            </div>

            <div className="item mt-3 mb-4">
              <a href="#" className="flex py-2 px-4 rounded" onClick={() => handleComponentChange('Settings')}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                viewBox="0 0 40 50"
                className="fill-white mr-7"
              >
                <path d="M 22.205078 2 A 1.0001 1.0001 0 0 0 21.21875 2.8378906 L 20.246094 8.7929688 C 19.076509 9.1331971 17.961243 9.5922728 16.910156 10.164062 L 11.996094 6.6542969 A 1.0001 1.0001 0 0 0 10.708984 6.7597656 L 6.8183594 10.646484 A 1.0001 1.0001 0 0 0 6.7070312 11.927734 L 10.164062 16.873047 C 9.583454 17.930271 9.1142098 19.051824 8.765625 20.232422 L 2.8359375 21.21875 A 1.0001 1.0001 0 0 0 2.0019531 22.205078 L 2.0019531 27.705078 A 1.0001 1.0001 0 0 0 2.8261719 28.691406 L 8.7597656 29.742188 C 9.1064607 30.920739 9.5727226 32.043065 10.154297 33.101562 L 6.6542969 37.998047 A 1.0001 1.0001 0 0 0 6.7597656 39.285156 L 10.648438 43.175781 A 1.0001 1.0001 0 0 0 11.927734 43.289062 L 16.882812 39.820312 C 17.936999 40.39548 19.054994 40.857928 20.228516 41.201172 L 21.21875 47.164062 A 1.0001 1.0001 0 0 0 22.205078 48 L 27.705078 48 A 1.0001 1.0001 0 0 0 28.691406 47.173828 L 29.751953 41.1875 C 30.920633 40.838997 32.033372 40.369697 33.082031 39.791016 L 38.070312 43.291016 A 1.0001 1.0001 0 0 0 39.351562 43.179688 L 43.240234 39.287109 A 1.0001 1.0001 0 0 0 43.34375 37.996094 L 39.787109 33.058594 C 40.355783 32.014958 40.813915 30.908875 41.154297 29.748047 L 47.171875 28.693359 A 1.0001 1.0001 0 0 0 47.998047 27.707031 L 47.998047 22.207031 A 1.0001 1.0001 0 0 0 47.160156 21.220703 L 41.152344 20.238281 C 40.80968 19.078827 40.350281 17.974723 39.78125 16.931641 L 43.289062 11.933594 A 1.0001 1.0001 0 0 0 43.177734 10.652344 L 39.287109 6.7636719 A 1.0001 1.0001 0 0 0 37.996094 6.6601562 L 33.072266 10.201172 C 32.023186 9.6248101 30.909713 9.1579916 29.738281 8.8125 L 28.691406 2.828125 A 1.0001 1.0001 0 0 0 27.705078 2 L 22.205078 2 z M 23.056641 4 L 26.865234 4 L 27.861328 9.6855469 A 1.0001 1.0001 0 0 0 28.603516 10.484375 C 30.066026 10.848832 31.439607 11.426549 32.693359 12.185547 A 1.0001 1.0001 0 0 0 33.794922 12.142578 L 38.474609 8.7792969 L 41.167969 11.472656 L 37.835938 16.220703 A 1.0001 1.0001 0 0 0 37.796875 17.310547 C 38.548366 18.561471 39.118333 19.926379 39.482422 21.380859 A 1.0001 1.0001 0 0 0 40.291016 22.125 L 45.998047 23.058594 L 45.998047 26.867188 L 40.279297 27.871094 A 1.0001 1.0001 0 0 0 39.482422 28.617188 C 39.122545 30.069817 38.552234 31.434687 37.800781 32.685547 A 1.0001 1.0001 0 0 0 37.845703 33.785156 L 41.224609 38.474609 L 38.53125 41.169922 L 33.791016 37.84375 A 1.0001 1.0001 0 0 0 32.697266 37.808594 C 31.44975 38.567585 30.074755 39.148028 28.617188 39.517578 A 1.0001 1.0001 0 0 0 27.876953 40.3125 L 26.867188 46 L 23.052734 46 L 22.111328 40.337891 A 1.0001 1.0001 0 0 0 21.365234 39.53125 C 19.90185 39.170557 18.522094 38.59371 17.259766 37.835938 A 1.0001 1.0001 0 0 0 16.171875 37.875 L 11.46875 41.169922 L 8.7734375 38.470703 L 12.097656 33.824219 A 1.0001 1.0001 0 0 0 12.138672 32.724609 C 11.372652 31.458855 10.793319 30.079213 10.427734 28.609375 A 1.0001 1.0001 0 0 0 9.6328125 27.867188 L 4.0019531 26.867188 L 4.0019531 23.052734 L 9.6289062 22.117188 A 1.0001 1.0001 0 0 0 10.435547 21.373047 C 10.804273 19.898143 11.383325 18.518729 12.146484 17.255859 A 1.0001 1.0001 0 0 0 12.111328 16.164062 L 8.8261719 11.46875 L 11.523438 8.7734375 L 16.185547 12.105469 A 1.0001 1.0001 0 0 0 17.28125 12.148438 C 18.536908 11.394293 19.919867 10.822081 21.384766 10.462891 A 1.0001 1.0001 0 0 0 22.132812 9.6523438 L 23.056641 4 z M 25 17 C 20.593567 17 17 20.593567 17 25 C 17 29.406433 20.593567 33 25 33 C 29.406433 33 33 29.406433 33 25 C 33 20.593567 29.406433 17 25 17 z M 25 19 C 28.325553 19 31 21.674447 31 25 C 31 28.325553 28.325553 31 25 31 C 21.674447 31 19 28.325553 19 25 C 19 21.674447 21.674447 19 25 19 z"></path>
              </svg>
                Configuración
              </a>
            </div>

          </div>
        </div>
        
        
        <div>
          <div className="info mb-8 flex ml-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              viewBox="0 0 32 32"
              className="fill-white"
            >
              <path d="M 4 7 L 4 9 L 28 9 L 28 7 Z M 4 15 L 4 17 L 28 17 L 28 15 Z M 4 23 L 4 25 L 28 25 L 28 23 Z" />
            </svg>
            <a href="#" className="block text-center ml-4">Más</a> 
          </div>
        </div>



      </div>

     
      <div className="flex-1 p-8">
        

        
        <Component />
      </div>

      
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

export default SideBar;
