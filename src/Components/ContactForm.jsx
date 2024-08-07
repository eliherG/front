import React, { useState } from "react";
import { sendEmail } from "../api";

function ContactForm() {
  const [formData, setFormData] = useState({
    nombre_completo: "",
    correo: "",
    telefono: "",
    monto: "",
    tipo_credito: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await sendEmail(formData);
      console.log(result.message);
    } catch (error) {
      console.error("Error sending email:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="nombre_completo"
        value={formData.nombre_completo}
        onChange={handleChange}
        placeholder="Nombre Completo"
      />
      <input
        type="email"
        name="correo"
        value={formData.correo}
        onChange={handleChange}
        placeholder="Correo"
      />
      <input
        type="text"
        name="telefono"
        value={formData.telefono}
        onChange={handleChange}
        placeholder="Teléfono"
      />
      <input
        type="number"
        name="monto"
        value={formData.monto}
        onChange={handleChange}
        placeholder="Monto"
      />
      <input
        type="text"
        name="tipo_credito"
        value={formData.tipo_credito}
        onChange={handleChange}
        placeholder="Tipo de Crédito"
      />
      <button type="submit">Enviar</button>
    </form>
  );
}

export default ContactForm;
