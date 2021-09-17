import React, { Fragment, useState} from 'react'
import CrudForm from './CrudForm'
import CrudTable from './CrudTable'


const initialDb= [
    {
        "id": 183,
        "name": "Johnny Depp",
        "status": "Alive",
        "species": "Human"
    },
    {
        "id": 1,
        "name": "Rick Sanchez",
        "status": "Alive",
        "species": "Human", 
    },
    {
        "id": 2,
        "name": "Morty Smith",
        "status": "Alive",
        "species": "Human", 
    }
]

const CrudApp = () => {

    const [db, setDb] = useState(initialDb);
    const [dataToEdit, setDataToEdit]=useState(null); //cuando está null se va a hacer una inserción, true= actualización


    // Crear nuevo registro en la base de datos
    const createData=(data)=>{}

    // Actualiza
    const updateData=(data)=>{}

    // Elimina
    const deleteData=(id)=>{}
    


    return (
        <Fragment>
            <h2>CRUD APP</h2>
            <CrudForm createData={createData} updateData={updateData} dataToEdit={dataToEdit} setDataToEdit={setDataToEdit}/>
            <CrudTable data={db} deleteData={deleteData}/>
           
        </Fragment> 
    )
}

export default CrudApp;

