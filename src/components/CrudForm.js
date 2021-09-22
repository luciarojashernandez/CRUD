
import React, { useState, useEffect} from 'react';

const initialForm ={
    name:"",
    status:"",
    id: null,
}


const CrudForm = ({createData, updateData, dataToEdit, setDataToEdit}) => {
  const[form, setForm]=useState(initialForm);
  
  //form recibe dataToEdit
  //el efecto evalua el cambiola prop dataToEdit
  useEffect(()=>{
    if(dataToEdit){
      setForm(dataToEdit);
    }else{
      setForm(initialForm)
    }
  },[dataToEdit])

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
      //cuando es nulo se crea la dada
      createData(form)
    }else{
      //cuando no es nulo, se actualiza
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
      {/* Si dataToEdit trae algo?Editar:Agrgar */}
      <h3>{dataToEdit?"Editar":"Agregar"}</h3>
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
