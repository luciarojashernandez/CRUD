import React, { Fragment, useState, useEffect } from "react";
import { helpHttp } from "../helpers/helpHttp";
import CrudForm from "./CrudForm";
import CrudTable from "./CrudTable";
import Loader from "./Loader";
import Message from "./Message";

const CrudApi = () => {
  const [db, setDb] = useState(null);
  const [dataToEdit, setDataToEdit] = useState(null); //cuando está null se va a hacer una inserción, true= actualización
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  let api = helpHttp();
  let url = "http://localhost:5000/results";

  useEffect(() => {
    setLoading(true); //antes de hacer la petición actualiza a true
    api.get(url).then((res) => {
      //console.log(res);
      if (!res.err) {
        setDb(res); //si no hay error, actualiza con la res de la peticiòn
      } else {
        setDb(null);
        setError(res);
      }
      setLoading(false); //después de la peticiòn se regresa a false
    });
  }, []);

  // Crear nuevo registro en la base de datos
  const createData = (data) => {
    //hay que crear un valor para data.id
    data.id = Date.now();
    // console.log(data) //trae el nuevo elemento
    let options = { 
        body: data, 
        headers:{"content-type":"application/json" }
    };
    //
    api
      .post(url,options )
      .then((res) => {
        console.log(res);
        //si no hya error, actualiza db con la res que trae la variable
        if (!res.err) {
          setDb([...db, res]);
        } else {
          setError(res);
        }
      });
    setDb([...db, data]);
  };

  // Actualiza
  const updateData = (data) => {
    let endpoint = `${url}/${data.id}`; //uniòn de la url+data que viene del form
    //console.log(endpoint);
    let options = { 
        body: data, 
        headers:{"content-type":"application/json" }
    };
    //
    api
      .put(endpoint,options )
      .then((res) => {
        //console.log(res);
        //si no hya error, actualiza db con la res que trae la variable
        if (!res.err) {
            //por cada el, si el id es === a lo que recibo como dato en la posición id
            //entoonces remplaza data:manten el elemento
          let newData = db.map((el) => (el.id === data.id ? data : el));
          setDb(newData);
        } else {
          setError(res);
        }
      });
   
  };

  // Elimina
  const deleteData = (id) => {
    let isDelete = window.confirm(
      `¿Estás seguro de eliminar el registro con el id '${id}'?`
    );

    if (isDelete) {
      let endpoint = `${url}/${id}`; //uniòn de la url+data que viene del form
      let options = { 
        headers:{"content-type":"application/json" }
    };
      api.del(endpoint, options)
        //filtrar y quitar el registro con el id
        //trae un nuevo arreglo con el id diferente al que se está danado
      let newData = db.filter((el) => el.id !== id);
      setDb(newData);
    } else {
      return;
    }
  };

  return (
    <Fragment>
      <h2>CRUD API</h2>
      <article className="grid-1-2">
        <CrudForm
          createData={createData}
          updateData={updateData}
          dataToEdit={dataToEdit}
          setDataToEdit={setDataToEdit}
        />
        {/* si loading es verdadera carga loader, si no (si hay error), carga Message */}
        {loading && <Loader />}
        {error && (
          <Message
            msg={`Error ${error.status}:${error.statusText}`}
            bgColor="#dc3545"
          />
        )}

        {/* si la base de datos tiene algo, entonces renderiza  CrudTable  */}
        {db && 
            <CrudTable 
            data={db} 
            setDataToEdit={setDataToEdit} 
            deleteData={deleteData}/>
        }
      </article>
    </Fragment>
  );
};

export default CrudApi;
