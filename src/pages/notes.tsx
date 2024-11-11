
import React from 'react';
import { useNavigate } from 'react-router-dom';

function Notes () {
  const navigate = useNavigate();
  const goToSomeRoute = () => {
    navigate('/');  // Redirige a la ruta "/some-route"
  };
  return (
    <div>
      <h1>Notes</h1>
      <div
        className="note-item"
        onClick={goToSomeRoute}
        style={{ padding: '20px', margin: '10px', background: '#000000', cursor: 'pointer' }}
      >
        Go to Some Route
      </div>
    </div>
  
  );
}
export default Notes;
