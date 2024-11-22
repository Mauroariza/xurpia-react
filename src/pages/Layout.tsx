import { Outlet } from 'react-router-dom';
import SideBar from './SideBar';
import Notificaciones from './Notificaciones';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const Layout = () => {
  const [showNotificacionesPopup, setShowNotificacionesPopup] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setShowNotificacionesPopup(false);
  }, [location]);

  const toggleNotificacionesPopup = () => {
    setShowNotificacionesPopup(!showNotificacionesPopup);
  };

  return (
    <div className="flex bg-[#252527] h-screen">
      <SideBar />
      <div className="flex-1 flex flex-col">

        <header className="p-2 flex justify-end items-center relative">
          <button
            className="fixed top-4 right-6 bg-[#000000] text-white p-4 rounded-xl hover:bg-[#4ade80]"
            onClick={toggleNotificacionesPopup}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
              className="fill-current"
            >
              <path d="M20 17h2v2H2v-2h2v-7a8 8 0 1 1 16 0v7zm-2 0v-7a6 6 0 1 0-12 0v7h12zm-9 4h6v2H9v-2z" />
            </svg>
          </button>
          {showNotificacionesPopup && (
            <div className="fixed top-12 right-4 w-80 bg-zinc-800 p-4 rounded-lg shadow-lg z-50">
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-xl text-white">Notificaciones</h3>
                <button
                  className="text-white hover:text-gray-300"
                  onClick={() => setShowNotificacionesPopup(false)}
                >
                  ×
                </button>
              </div>
              <Notificaciones />
            </div>
          )}
        </header>


        <main className="flex-1 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
};