import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { useGenreContext } from "../../contexts/GenreContext";

const CreateGenre = () => {
    const navigate = useNavigate();

    const { createGenre } = useGenreContext();

    const [name, setName] = useState("");
    const [nameError, setNameError] = useState("");
    const [loading, setLoading] = useState(false);

    const validate = () => {
        const newErrors = {};
        if (!name.trim()) newErrors.name = "El nombre es obligatorio";
        else if (name.trim().length < 3) newErrors.name = "El nombre debe tener al menos 3 caracteres";
        else if (name.trim().length > 25) newErrors.name = "El nombre debe ser menor a 25 caracteres";
        
        return newErrors;
    };

    const handleChange = (e) => {
        const { value } = e.target;
        setName(value);
        //resetea el error
        if (nameError !== "") setNameError("");
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const validationErrors = validate();
        if (validationErrors.name) {
            setNameError(validationErrors.name);
            return;
        }

        try {
            setLoading(true);

            await createGenre({name});   
            navigate("/items/genres");
        } catch (error) {
        if (error.response) {
            console.log("Data:", error.response.data);
        } else if (error.request) {
            console.log("No llegó respuesta:", error.request);
        } else {
            console.log("Error:", error.message);
        }
        } finally {
            setLoading(false);
        }
    };

  const inputBase = `w-full border-2 border bg-amber-100 text-gray-800 rounded-xl px-3 py-2 text-sm
    placeholder-gray-400 focus:outline-none focus:border-amber-500 focus:bg-white transition-colors duration-200`;

  const errorClass = `border-red-400 bg-red-50 focus:border-red-500`;

  return (
    <div>
        <form onSubmit={handleSubmit} className="px-6 py-6 flex flex-col gap-4">
            <div className="flex flex-col gap-1">
              <label className="text-xs font-medium text-black uppercase tracking-wide">Nombre</label>
              <input type="text" name="name" value={name} onChange={handleChange} placeholder="Ej: Jazz"
                className={`${inputBase} ${nameError !== "" ? errorClass : ""}`}/>
              {nameError !== "" && <span className="text-xs text-red-500">{nameError}</span>}
            </div>

            {/* Botones */}
          <div className="flex justify-end gap-2 pt-2 border-t-2 border-amber-100">
            <button type="button" onClick={() => navigate("/items/genres") /**-1 */}
              className="border-2 border-amber-300 text-amber-600 bg-white px-4 py-2 rounded-full text-sm font-medium
                hover:bg-amber-50 transition-colors duration-200 cursor-pointer">Cancelar</button>
            <button type="submit" disabled={loading}
              className="border-2 border-white bg-amber-500 text-white px-5 py-2 rounded-full text-sm font-medium
                hover:bg-white hover:text-amber-500 hover:border-amber-500 transition-colors duration-200 cursor-pointer
                disabled:opacity-50 disabled:cursor-not-allowed">
              {loading ? "Guardando..." : "Guardar genero"}
            </button>
          </div>
        </form>
    </div>
  )
}

export default CreateGenre