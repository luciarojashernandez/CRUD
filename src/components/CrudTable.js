import React from "react";
import CrudTableRow from "./CrudTableRow";

const CrudTable = ({data, setDataToEdit, deleteData}) => {
  return (
    <div>
      <h3>Tabla de datos</h3>
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Estatus</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
            {/* Si no hay datos (==0) pon una table row con una table data
            con el atributo para celdas "colSapan"
            si no, haz un map de data 
            donde por cada elemento renderiza el componente CrudTablerOW */}
          {data.length>0?(
            data.map(el =>( 
            <CrudTableRow 
            key={el.id} 
            el={el} 
            setDataToEdit={setDataToEdit} 
            deleteData={deleteData} 
            />
            ))
            ) : (
            <tr>
              <td colSpan="3">Sin datos</td>
            </tr>
            )}
        </tbody>
      </table>
    </div>
  );
};

export default CrudTable;
