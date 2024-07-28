import React from 'react'

export default function MiEspacio() {
  return (
    <div>
      <div className="container">
  <div className="nav">
    <button id="menuToggle">
      <i className="bx bx-menu" />
    </button>
    <div className="search">
      <i className="bx bx-search" />
      <input type="text" placeholder="Buscar por trabajos o compañias" />
    </div>
    <div className="city">
      <i className="bx bxs-location-plus" />
      <input type="text" placeholder="Ingresa ciudad, estado, o región" />
    </div>
    <button>Buscar</button>
    <i className="bx bx-bell" />
    <div className="user-info">
      <img src="../IMG/david.jpg" />
      <div>
        <a href="#">
          David Campiño <i className="bx bx-chevron-down" />
        </a>
        <p>josedavid4049@gmail.com</p>
      </div>
    </div>
  </div>
  <div className="main">
    <div className="content">
      <div className="header">
        <h4>Grupos</h4>
        <p>Aquí estarán tus grupos de trabajo</p>
      </div>
      <div className="job-cards">
        <div className="card">
          <div className="card-header">
            <div className="job-info">
              <img className="logoEmpresas" src="../IMG/LOGOCHIQUITO.png" />
              <div>
                <h5>
                  Heeq <span>| Última conexion hace 2h</span>
                </h5>
                <a href="#">Entrar</a>
                <p>Cali, Colombia</p>
              </div>
            </div>
            <i className="bx bx-bookmark-plus" />
          </div>
          <div className="card-tags">
            <a href="#">Empresa</a>
            <a href="#">Principal</a>
          </div>
          <div className="card-desc">
            <p>
              Heeq es una empresa de tecnología que ofrece soluciones de
              software y hardware
            </p>
          </div>
        </div>
        <div className="card">
          <div className="card-header">
            <div className="job-info">
              <img src="../IMG/icono.png" className="logoEmpresas" />
              <div>
                <h5>
                  XURP IA <span>| Última conexión hace 2min</span>
                </h5>
                <a href="#">Entrar</a>
                <p>Cali, Colombia</p>
              </div>
            </div>
            <i className="bx bx-bookmark-plus" />
          </div>
          <div className="card-tags">
            <a href="#">Empresa</a>
            <a href="#">IA</a>
            <a href="#">Chat</a>
          </div>
          <div className="card-desc">
            <p>
              Xurp IA es un invento tecnológico el cuál implementa una
              Inteligencia Artificial que la puedes utilizar mientras programas
              en equipo.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

    </div>
  )
}
