import React from "react";

const CrudTableRow = ({el, setDataToEdit, deleteData}) => {

  let {name, status, id}=el
  return (
    <div>
      <tr>
        <td>{el.name}</td>
        <td>{el.status}</td>
        <td>
          <button onClick={()=>setDataToEdit(el)}>Editar</button>
          <button onClick={()=>deleteData(id)}>Eliminar</button>
        </td>
      </tr>
    </div>
  );
};

export default CrudTableRow;
