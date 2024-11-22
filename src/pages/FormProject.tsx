import React, { useState } from "react";
import axios from "axios";

const FormProject = () => {
  const [formData, setFormData] = useState({
    name: "",
    skills: "",
    experience: "",
    preferences: "",
  });
  const [loading, setLoading] = useState(false);
  const [recommendation, setRecommendation] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Llamar a la API de IA con los datos del formulario
      const response = await axios.post("https://api.example.com/ai/recommend", {
        data: formData,
      });

      // Supongamos que la IA devuelve un campo `recommendation` en la respuesta
      setRecommendation(response.data.recommendation);
    } catch (error) {
      console.error("Error al conectar con la API:", error);
      setRecommendation("Hubo un problema al obtener la recomendación.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="text-white py-24 px-20">
      <h2 className="text-2xl font-bold mb-6">Formulario del Proyecto</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-6">
          <label className="block text-lg font-semibold mb-2" htmlFor="name">
            Nombre del Usuario
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-3 rounded-lg bg-[#343434] border border-white focus:outline-none focus:ring-2 focus:ring-green-500"
            placeholder="Ingresa tu nombre"
          />
        </div>

        <div className="mb-6">
          <label className="block text-lg font-semibold mb-2" htmlFor="skills">
            Habilidades
          </label>
          <textarea
            id="skills"
            name="skills"
            value={formData.skills}
            onChange={handleChange}
            className="w-full p-3 rounded-lg bg-[#343434] border border-white focus:outline-none focus:ring-2 focus:ring-green-500"
            placeholder="Describe tus habilidades"
            rows="4"
          />
        </div>

        <div className="mb-6">
          <label className="block text-lg font-semibold mb-2" htmlFor="experience">
            Experiencia
          </label>
          <textarea
            id="experience"
            name="experience"
            value={formData.experience}
            onChange={handleChange}
            className="w-full p-3 rounded-lg bg-[#343434] border border-white focus:outline-none focus:ring-2 focus:ring-green-500"
            placeholder="Describe tu experiencia laboral o académica"
            rows="4"
          />
        </div>

        <div className="mb-6">
          <label className="block text-lg font-semibold mb-2" htmlFor="preferences">
            Preferencias
          </label>
          <textarea
            id="preferences"
            name="preferences"
            value={formData.preferences}
            onChange={handleChange}
            className="w-full p-3 rounded-lg bg-[#343434] border border-white focus:outline-none focus:ring-2 focus:ring-green-500"
            placeholder="¿Qué tipo de rol te interesa o prefieres?"
            rows="4"
          />
        </div>

        <button
          type="submit"
          className="bg-green-500 hover:bg-green-400 text-white p-3 rounded-lg transition duration-300 w-full"
          disabled={loading}
        >
          {loading ? "Cargando..." : "Obtener Recomendación"}
        </button>
      </form>

      {recommendation && (
        <div className="mt-6 p-4 rounded-lg bg-gray-800 text-white">
          <h3 className="text-xl font-semibold mb-2">Recomendación:</h3>
          <p>{recommendation}</p>
        </div>
      )}
    </div>
  );
};

export default FormProject;
