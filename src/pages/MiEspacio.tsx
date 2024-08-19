

export default function MiEspacio() {
  return (
    <div className="container mx-auto p-4 bg-zinc-900 text-white">
      <div className="nav flex items-center justify-between mb-4">
        <button id="menuToggle" className="text-2xl">
          <i className="bx bx-menu" />
        </button>
        <div className="search flex items-center bg-zinc-800 p-2 rounded">
          <i className="bx bx-search text-xl mr-2" />
          <input
            type="text"
            placeholder="Buscar por trabajos o compañias"
            className="bg-transparent outline-none text-white"
          />
        </div>
        <div className="city flex items-center bg-zinc-800 p-2 rounded ml-4">
          <i className="bx bxs-location-plus text-xl mr-2" />
          <input
            type="text"
            placeholder="Ingresa ciudad, estado, o región"
            className="bg-transparent outline-none text-white"
          />
        </div>
        <button className="ml-4 bg-zinc-800 py-2 px-4 rounded hover:bg-zinc-700">
          Buscar
        </button>
        <i className="bx bx-bell text-2xl ml-4" />
        <div className="user-info flex items-center ml-4">
          <img src="../IMG/david.jpg" alt="David Campiño" className="w-10 h-10 rounded-full" />
          <div className="ml-2">
            <a href="#" className="block">
              David Campiño <i className="bx bx-chevron-down" />
            </a>
            <p className="text-sm">josedavid4049@gmail.com</p>
          </div>
        </div>
      </div>
      <div className="main">
        <div className="content">
          <div className="header mb-4">
            <h4 className="text-2xl font-bold">Grupos</h4>
            <p className="text-gray-400">Aquí estarán tus grupos de trabajo</p>
          </div>
          <div className="job-cards grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="card bg-zinc-800 p-4 rounded-lg shadow-lg">
              <div className="card-header flex items-center justify-between mb-4">
                <div className="job-info flex items-center">
                  <img className="logoEmpresas w-12 h-12 rounded-full mr-4" src="../IMG/LOGOCHIQUITO.png" alt="Heeq" />
                  <div>
                    <h5 className="text-xl font-semibold">
                      Heeq <span className="text-gray-400 text-sm">| Última conexión hace 2h</span>
                    </h5>
                    <a href="#" className="text-teal-500 hover:underline">Entrar</a>
                    <p className="text-gray-400">Cali, Colombia</p>
                  </div>
                </div>
                <i className="bx bx-bookmark-plus text-2xl" />
              </div>
              <div className="card-tags mb-4">
                <a href="#" className="bg-zinc-700 py-1 px-2 rounded mr-2">Empresa</a>
                <a href="#" className="bg-zinc-700 py-1 px-2 rounded">Principal</a>
              </div>
              <div className="card-desc">
                <p className="text-gray-300">
                  Heeq es una empresa de tecnología que ofrece soluciones de software y hardware.
                </p>
              </div>
            </div>
            <div className="card bg-zinc-800 p-4 rounded-lg shadow-lg">
              <div className="card-header flex items-center justify-between mb-4">
                <div className="job-info flex items-center">
                  <img src="../IMG/icono.png" className="logoEmpresas w-12 h-12 rounded-full mr-4" alt="XURP IA" />
                  <div>
                    <h5 className="text-xl font-semibold">
                      XURP IA <span className="text-gray-400 text-sm">| Última conexión hace 2min</span>
                    </h5>
                    <a href="#" className="text-teal-500 hover:underline">Entrar</a>
                    <p className="text-gray-400">Cali, Colombia</p>
                  </div>
                </div>
                <i className="bx bx-bookmark-plus text-2xl" />
              </div>
              <div className="card-tags mb-4">
                <a href="#" className="bg-zinc-700 py-1 px-2 rounded mr-2">Empresa</a>
                <a href="#" className="bg-zinc-700 py-1 px-2 rounded mr-2">IA</a>
                <a href="#" className="bg-zinc-700 py-1 px-2 rounded">Chat</a>
              </div>
              <div className="card-desc">
                <p className="text-gray-300">
                  Xurp IA es un invento tecnológico el cuál implementa una Inteligencia Artificial que la puedes utilizar mientras programas en equipo.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
