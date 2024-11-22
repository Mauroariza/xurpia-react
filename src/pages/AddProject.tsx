import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const AddProject = () => {
  const [projectName, setProjectName] = useState("");
  const [projectDescription, setProjectDescription] = useState("");
  const [projectScale, setProjectScale] = useState("Mediano");
  const [collaborators, setCollaborators] = useState([""]);
  const [logoFile, setLogoFile] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setLogoFile(file);
    }
  };

  const handleCollaboratorChange = (index, e) => {
    const newCollaborators = [...collaborators];
    newCollaborators[index] = e.target.value;
    setCollaborators(newCollaborators);
  };

  const addCollaboratorField = () => {
    setCollaborators([...collaborators, ""]);
  };

  const removeCollaboratorField = (index) => {
    const newCollaborators = collaborators.filter((_, i) => i !== index);
    setCollaborators(newCollaborators);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica para enviar el formulario o procesar los datos
    console.log({
      projectName,
      projectDescription,
      projectScale,
      collaborators,
      logoFile,
    });
  };

  return (
    <div className="text-white py-24 px-20">
      <form onSubmit={handleSubmit}>
        <div className="mb-6">
          <label className="block text-lg font-semibold mb-2" htmlFor="projectName">
            Nombre Del Proyecto
          </label>
          <input
            type="text"
            id="projectName"
            value={projectName}
            onChange={(e) => setProjectName(e.target.value)}
            className="w-full p-3 rounded-lg bg-[#343434] border border-white focus:outline-none focus:ring-2 focus:ring-green-500"
            placeholder="Nombre del Proyecto"
          />
        </div>

        <div className="mb-6">
          <label className="block text-lg font-semibold mb-2" htmlFor="projectDescription">
            Descripción – Objetivos
          </label>
          <textarea
            id="projectDescription"
            value={projectDescription}
            onChange={(e) => setProjectDescription(e.target.value)}
            className="w-full p-3 rounded-lg bg-[#343434] border border-white focus:outline-none focus:ring-2 focus:ring-green-500"
            placeholder="Descripción del proyecto y objetivos"
            rows="4"
          />
        </div>

        <div className="mb-6">
          <label className="block text-lg font-semibold mb-2" htmlFor="projectScale">
            Escala Del Proyecto
          </label>
          <select
            id="projectScale"
            value={projectScale}
            onChange={(e) => setProjectScale(e.target.value)}
            className="w-full p-3 rounded-lg bg-[#343434] border border-white focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            <option value="Pequeño">Pequeño</option>
            <option value="Mediano">Mediano</option>
            <option value="Grande">Grande</option>
          </select>
        </div>

        <div className="mb-6">
          <label className="block text-lg font-semibold mb-2" htmlFor="collaborators">
            Integrantes (Correos electrónicos)
          </label>
          {collaborators.map((collaborator, index) => (
            <div key={index} className="flex items-center space-x-2 mb-4">
              <input
                type="email"
                value={collaborator}
                onChange={(e) => handleCollaboratorChange(index, e)}
                className="w-full p-3 rounded-lg bg-[#343434] border border-white focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Correo electrónico"
              />
              <button
                type="button"
                onClick={() => removeCollaboratorField(index)}
                className="bg-red-500 hover:bg-red-400 text-white p-2 rounded-lg transition duration-300"
              >
                Eliminar
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={addCollaboratorField}
            className="bg-green-500 hover:bg-green-400 text-white p-3 rounded-lg transition duration-300"
          >
            Agregar Colaborador
          </button>
        </div>

        <div className="mb-6">
          <label className="block text-lg font-semibold mb-2" htmlFor="logoFile">
            Agregar Logo
          </label>
          <input
            type="file"
            id="logoFile"
            onChange={handleFileChange}
            className="w-full p-3 rounded-lg bg-[#343434] border border-white focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>

        <div className="flex justify-between items-center mt-8">
          <NavLink to="/FormProject">
            <button
              type="submit"
              className="bg-green-500 hover:bg-green-400 text-white p-3 rounded-lg transition duration-300"
            >
              Nuevo Proyecto
            </button>
          </NavLink>

          <NavLink to="/Home">
            <button
              type="button"
              className="bg-gray-700 hover:bg-gray-600 text-white p-3 rounded-lg transition duration-300"
            >
              Cancelar
            </button>
          </NavLink>
        </div>
      </form>
    </div>
  );
};

export default AddProject;
