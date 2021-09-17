
import React, { useState} from 'react'

const initialForm ={
    name:"",
    status:"",
    id: null,
}


const CrudForm = () => {
 const[form, setForm]=useState(initialForm)
  const handleChange = (e) => {};

  const handleSumbit = (e) => {};

  const handleReset = (e) => {};
  return (
    <div>
      <h3>Agregar</h3>
      <form onSubmit={handleSumbit}>
        <input
          type="text"
          name="name"
          placeholder="Nombre"
          onChange={handleChange}
          value={form.name}
        />
        <input
          type="text"
          name="status"
          placeholder="Estatus"
          onChange={handleChange}
          value={form.status}
        />
        <input type="submit" value="Enviar"/>
        <input type="reset" value="Limpiar" onClick={handleReset}  />
      </form>
      <table></table>
    </div>
  );
};

export default CrudForm;
