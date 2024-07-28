
  import React from 'react'
  import MiEspacio from './MiEspacio'
  import { Link } from 'react-router-dom';
  import { useState } from 'react';

  function Ia() {

    const [showMiEspacio, setShowMiEspacio] = useState(false)

    const handleSubmit = ()=>{
      setShowMiEspacio(prevState => !prevState);
    }
    
    return (
      <div>
        <div className="sidebar bg-teal-400">
    <a href="#">XURP IA</a>
    <div className="side-nav">
      <div className="item active">
        <i className="bx bx-search-alt" />
        <Link to="#" onClick={handleSubmit}>Mi Espacio</Link>
      </div>


      <div className="item">
        <i className="bx bx-message-square-dots" />
        <a href="#">Notificaciones</a>
      </div>
      <div className="item">
        <i className="bx bx-x" />
        <a href="#">IA</a>
      </div>
      <div className="item">
        <i className="bx bx-bookmark-minus" />
        <a href="#">Trabajos Guardados</a>
      </div>
      <div className="item">
        <i className="bx bx-cog" />
        <a href="#">Configuración</a>
      </div>
    </div>
    
    <div className="side-profile">
      <div className="info">
        <img src="../IMG/david.jpg" />
        <a href="#">David Campiño</a>
        <p>Programador</p>
      </div>
      <div className="skills">
        <h5>Conocimientos</h5>
        <div className="skill-tags">
          <div className="item">
            <p>Diseño UI</p>
          </div>
          <div className="item">
            <p>React</p>
          </div>
          <div className="item">
            <p>Photoshop</p>
          </div>
          <div className="item">
            <p>HTML/CSS</p>
          </div>
        </div>
      </div>
      <button>Ver Perfil</button>
    </div>
  </div>
  {showMiEspacio && <MiEspacio />}
      
      </div>
    )
  }

  export default Ia