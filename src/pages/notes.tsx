import React, { useState } from 'react';

const Notes = () => {
  const [notas, setNotas] = useState([
    {
      id: 1,
      texto: 'El proyecto se debe de entregar para el 1 de Noviembre, dando información sobre el Diagrama de Flujo, BD y todo lo aprendido en clase.',
      completado: false,
    },
    {
      id: 2,
      texto: 'Acomodar las ideas principales del proyecto para ir a la programación:\n- Reunirse con equipo de trabajo\n- Realizar boceto de ideas',
      completado: false,
    },
    {
      id: 3,
      texto: 'El proyecto se debe de entregar para el 1 de Noviembre, dando información sobre el Diagrama de Flujo, BD y todo lo aprendido en clase.',
      completado: false,
    },
    {
      id: 4,
      texto: 'El proyecto se debe de entregar para el 1 de Noviembre, dando información sobre el Diagrama de Flujo, BD y todo lo aprendido en clase.',
      completado: false,
    },
    ]);

  const [editingId, setEditingId] = useState(null);
  const [newText, setNewText] = useState('');

  // Función para marcar una nota como completada
  const toggleCompletar = (id) => {
    setNotas(
      notas.map((nota) =>
        nota.id === id ? { ...nota, completado: !nota.completado } : nota
      )
    );
  };

  // Función para borrar una nota
  const borrarNota = (id) => {
    setNotas(notas.filter((nota) => nota.id !== id));
  };

  // Función para habilitar la edición de una nota
  const editarNota = (id, texto) => {
    setEditingId(id);
    setNewText(texto);
  };

  // Función para guardar cambios en la nota editada
  const guardarNota = (id) => {
    setNotas(
      notas.map((nota) =>
        nota.id === id ? { ...nota, texto: newText } : nota
      )
    );
    setEditingId(null);
    setNewText('');
  };

  return (
    <div className="p-8">
      <h2 className="text-3xl font-bold text-white mb-4">Notas:</h2>
      <p className="text-gray-400 mb-6">Aquí estarán todas tus tareas pendientes</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        {notas.map((nota) => (
          <div
            key={nota.id}
            className={`bg-zinc-800 rounded-lg p-4 shadow-lg text-white flex flex-col justify-between ${
              nota.completado ? 'opacity-50' : ''
            }`}
          >
            {editingId === nota.id ? (
              <textarea
                className="bg-zinc-700 p-2 rounded-md text-white w-full mb-4 resize-none"
                value={newText}
                onChange={(e) => setNewText(e.target.value)}
              />
            ) : (
              <p className="whitespace-pre-wrap">{nota.texto}</p>
            )}

            <div className="mt-4 flex justify-between items-center">
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={nota.completado}
                  onChange={() => toggleCompletar(nota.id)}
                  className="form-checkbox h-5 w-5 text-green-500 bg-gray-700 border-gray-600"
                />
                <span className="text-gray-300">Lista</span>
              </label>

              <div className="flex space-x-2">
                {editingId === nota.id ? (
                  <button
                    onClick={() => guardarNota(nota.id)}
                    className="bg-green-500 text-white px-4 py-1 rounded-md hover:bg-green-600"
                  >
                    Guardar
                  </button>
                ) : (
                  <button
                    onClick={() => editarNota(nota.id, nota.texto)}
                    className="bg-black text-white px-4 py-1 rounded-md hover:bg-[#4ADE80]"
                  >
                    Editar
                  </button>
                )}
                <button
                  onClick={() => borrarNota(nota.id)}
                  className="bg-black text-white px-4 py-1 rounded-md hover:bg-[#4ADE80]"
                >
                  Borrar
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Notes;
