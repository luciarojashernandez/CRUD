import React, { Fragment, useState } from "react";
import CrudForm from "./CrudForm";
import CrudTable from "./CrudTable";



const CrudApi = () => {
  const [db, setDb] = useState([]);
  const [dataToEdit, setDataToEdit] = useState(null); //cuando está null se va a hacer una inserción, true= actualización

  // Crear nuevo registro en la base de datos
  const createData = (data) => {
    //hay que crear un valor para data.id
    data.id = Date.now();
    // console.log(data) //trae el nuevo elemento
    setDb([...db, data]);
  };

  // Actualiza
  const updateData = (data) => {
    let newData = db.map((el) => (el.id === data.id ? data : el));
    setDb(newData);
  };

  // Elimina
  const deleteData = (id) => {
    let isDelete = window.confirm(
      `¿Estás seguro de eliminar el registro con el id '${id}'?`
    );

    if (isDelete) {
      let newData = db.filter((el) => el.id !== id);
      setDb(newData);
    } else {
      return;
    }
  };

  return (
    <Fragment>
      <h2>CRUD APP</h2>
      <article className="grid-1-2">
        <CrudForm
          createData={createData}
          updateData={updateData}
          dataToEdit={dataToEdit}
          setDataToEdit={setDataToEdit}
        />
        <CrudTable 
            data={db} 
            deleteData={deleteData} 
        />
      </article>
    </Fragment>
  );
};

export default CrudApi;
