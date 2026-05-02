import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { useArtistContext } from "../../contexts/ArtistContext";


const CreateArtist = () => {
  const navigate = useNavigate();

  const { createArtist } = useArtistContext();

  const [form, setForm] = useState({
    name: "",
    country: "",
    formedYear: "",
    isActive: "true",
    image: null,
    biography: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = "El nombre es obligatorio";
    if (!form.country.trim()) newErrors.country = "El país es obligatorio";
    if (!form.formedYear) newErrors.formedYear = "El año es obligatorio";
    if (form.formedYear && (form.formedYear < 1800 || form.anio > new Date().getFullYear())) newErrors.formedYear = "Año inválido";
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const handleImageChange = (e) => {
  const file = e.target.files[0];
    setForm((prev) => ({ ...prev, image: file }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      setLoading(true);

      const formData = new FormData();
      formData.append("name", form.name);
      formData.append("country", form.country);
      formData.append("formedYear", form.formedYear);
      formData.append("biography", form.biography);
      formData.append("isActive", form.isActive); 

      if (form.image) {
        formData.append("image", form.image);
      }

      await createArtist(formData);   
      navigate("/items/artists");
    } catch (error) {
      //console.error("Error al guardar el artista:", error);
      if (error.response) {
        console.log("Data:", error.response.data);
        console.log("Status:", error.response.status);
        console.log("Headers:", error.response.headers);
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
    <div className="flex justify-center px-4 py-6">
      <div className="w-full max-w-lg bg-white border-2 border-black rounded-2xl shadow-sm overflow-hidden">

        {/* Header */}
        <div className="bg-amber-300 px-6 py-5 flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-white/30 flex items-center justify-center border-2">
            <i className="bi bi-apple-music text-red-500"></i>
          </div>
          <div>
            <h2 className="text-white font-semibold text-lg leading-tight">Añadir artista</h2>
            <p className="text-white/70 text-xs">Completá los datos del nuevo artista</p>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="px-6 py-6 flex flex-col gap-4">

          {/* Nombre + País */}
          <div className="grid grid-cols-2 gap-3">
            <div className="flex flex-col gap-1">
              <label className="text-xs font-medium text-black uppercase tracking-wide">Nombre</label>
              <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="Ej: Bon Jovi"
                className={`${inputBase} ${errors.name ? errorClass : ""}`}/>
              {errors.name && <span className="text-xs text-red-500">{errors.name}</span>}
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-xs font-medium text-black uppercase tracking-wide">País</label>
              <input type="text" name="country" value={form.country} onChange={handleChange}
              placeholder="Ej: Reino Unido" className={`${inputBase} ${errors.country ? errorClass : ""}`}
              />
              {errors.country && <span className="text-xs text-red-500">{errors.country}</span>}
            </div>
          </div>

          {/* Año - Está activo/a */}
          <div className="grid grid-cols-2 gap-3">
            <div className="flex flex-col gap-1">
              <label className="text-xs font-medium text-black uppercase tracking-wide">Año de formación</label>
              <input type="number" name="formedYear" value={form.formedYear} onChange={handleChange} placeholder="Ej: 1960" min="1900"
                max={new Date().getFullYear()} className={`${inputBase} ${errors.formedYear ? errorClass : ""}`}
              />
              {errors.formedYear && <span className="text-xs text-red-500">{errors.formedYear}</span>}
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-xs font-medium text-black uppercase tracking-wide">Está activo</label>
              <select name="isActive" value={form.isActive} className={`${inputBase}`} onChange={handleChange}>
                <option value="true">SI</option>
                <option value="false">NO</option>
              </select>
            </div>
          </div>

          {/* Imagen */}
          <div className="flex flex-col gap-1">
            <label className="text-xs font-medium text-black uppercase tracking-wide">Imagen</label>
            <label htmlFor="image" className="border-2 border-solid border-black py-2 px-4 cursor-pointer inline-block
            bg-amber-100 rounded-xl">Escoge un archivo</label>
            <input type="file" name="image" id="image" onChange={handleImageChange}/>
          </div>

          {/* Descripción/Biografía */}
          <div className="flex flex-col gap-1">
            <label className="text-xs font-medium text-black uppercase tracking-wide">Descripción</label>
            <textarea name="biography" value={form.biography} onChange={handleChange} rows={3} 
            placeholder="Breve biografía o descripción del artista..." className={`${inputBase} resize-none`}/>
          </div>

          {/* Botones */}
          <div className="flex justify-end gap-2 pt-2 border-t-2 border-amber-100">
            <button type="button" onClick={() => navigate("/items/artists") /**-1 */}
              className="border-2 border-amber-300 text-amber-600 bg-white px-4 py-2 rounded-full text-sm font-medium
                hover:bg-amber-50 transition-colors duration-200 cursor-pointer">Cancelar</button>
            <button type="submit" disabled={loading}
              className="border-2 border-white bg-amber-500 text-white px-5 py-2 rounded-full text-sm font-medium
                hover:bg-white hover:text-amber-500 hover:border-amber-500 transition-colors duration-200 cursor-pointer
                disabled:opacity-50 disabled:cursor-not-allowed">
              {loading ? "Guardando..." : "Guardar artista"}
            </button>
          </div>

        </form>
      </div>
    </div>
  );
}

export default CreateArtist