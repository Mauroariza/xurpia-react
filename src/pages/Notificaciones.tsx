const Notificaciones = () => {
  return (
    <div className=" rounded-lg shadow-lg p-4 max-w-sm w-full text-sm">
      <ul className="space-y-2">
        <li className="flex items-center justify-between p-3 rounded-lg hover:bg-[#3c3f45] transition duration-200 cursor-pointer">
          <div className="flex items-center space-x-3">
            <img
              src="https://randomuser.me/api/portraits/men/1.jpg"
              alt="avatar"
              className="w-8 h-8 rounded-full"
            />
            <p className="text-white">
              <span className="font-semibold">Kuksi</span> ha aceptado tu solicitud de amistad.
            </p>
          </div>
          <span className="text-xs text-gray-400">6 min</span>
        </li>

        <li className="flex items-center justify-between p-3 rounded-lg hover:bg-[#3c3f45] transition duration-200 cursor-pointer">
          <div className="flex items-center space-x-3">
            <img
              src="https://randomuser.me/api/portraits/men/2.jpg"
              alt="avatar"
              className="w-8 h-8 rounded-full"
            />
            <p className="text-white">
              Aceptaste la solicitud de amistad de <span className="font-semibold">Zaato8D</span>.
            </p>
          </div>
          <span className="text-xs text-gray-400">24 min</span>
        </li>

        <li className="flex items-center justify-between p-3 rounded-lg hover:bg-[#3c3f45] transition duration-200 cursor-pointer">
          <div className="flex items-center space-x-3">
            <img
              src="https://randomuser.me/api/portraits/men/3.jpg"
              alt="avatar"
              className="w-8 h-8 rounded-full"
            />
            <p className="text-white">
              Tienes mensajes nuevos en <span className="font-semibold">UnpocodePeServer</span>.
            </p>
          </div>
          <span className="text-xs text-gray-400">22 d</span>
        </li>

        <li className="flex items-center justify-between p-3 rounded-lg hover:bg-[#3c3f45] transition duration-200 cursor-pointer">
          <div className="flex items-center space-x-3">
            <img
              src="https://randomuser.me/api/portraits/men/4.jpg"
              alt="avatar"
              className="w-8 h-8 rounded-full"
            />
            <p className="text-white">
              Tienes mensajes nuevos en <span className="font-semibold">World Programming</span>.
            </p>
          </div>
          <span className="text-xs text-gray-400">2 mo</span>
        </li>
      </ul>
    </div>
  );
};

export default Notificaciones;
