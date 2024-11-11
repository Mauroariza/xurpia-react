import '@fontsource/albert-sans'; // Importa la fuente normal
import '@fontsource/albert-sans/400.css'; 
import '@fontsource/albert-sans/500.css';
import '@fontsource/albert-sans/600.css';
import '@fontsource/albert-sans/700.css';



export default function Home() {
  
  return (
    <div className="font-albert container mx-auto p-4 bg-[#252527] text-white">
      <div className="nav flex items-center justify-between mb-5">
  
        <div className="font-bold search flex w-full max-w-lg bg-[#343434] p-4 rounded-xl mr-3">
          <i className="bx bx-search text-xl mr-4" />
            <input
              type="text"
              placeholder="Buscar por trabajos o compañias"
              className="bg-transparent outline-none text-white w-full"
            />
        </div>

        <div className="font-bold city flex w-full max-w-lg items-center bg-[#343434] p-4 rounded-xl ml-5 mr-2">
          <i className="bx bxs-location-plus text-xl mr-5" />
            <input
              type="text"
              placeholder="Ingresa ciudad, estado, o región"
              className="bg-transparent outline-none text-white w-full"
            />
        </div>

        <button className="font-bold ml-10 bg-[#000000] py-4 px-6 rounded-xl hover:bg-zinc-700">
          Buscar
        </button>

        <button className="font-bold ml-auto bg-[#000000] py-4 px-6 rounded-xl hover:bg-zinc-700" >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
          >
          <path fill="none" d="M0 0h24v24H0z"></path>
            <path
              fill="currentColor"
              d="M20 17h2v2H2v-2h2v-7a8 8 0 1 1 16 0v7zm-2 0v-7a6 6 0 1 0-12 0v7h12zm-9 4h6v2H9v-2z"
            ></path>
          </svg> 
        </button>

      </div>

      <div className="main">
        <div className="content mt-20">
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