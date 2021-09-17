
import React, { useState} from 'react'

const initialForm ={
    name:"",
    status:"",
    id: null,
}


const CrudForm = ({createData, updateData, dataToEdit, setDataToEdit}) => {
 const[form, setForm]=useState(initialForm)

  const handleChange = (e) => {
    setForm({
      ...form,
    [e.target.name]:e.target.value,
    });
  };

  const handleSumbit = (e) => {
    e.preventDefault(); //para que no se autoprocese el formulario

    if(!form.name || !form.status){
      alert("Datos incompletos"); //puede usarse required
    return;
    }
    if(form.id === null){
      createData(form)
    }else{
      updateData(form)
    }
    handleReset();
  };

  const handleReset = (e)=>{
    setForm(initialForm);
    setDataToEdit(null);
  }

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
