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

    const [db, setDb] = useState(initialDb)
    


    return (
        <Fragment>
            <h2>CRUD APP</h2>
            <CrudForm/>
            <CrudTable data={db}/>
           
        </Fragment>
    )
}

export default CrudApp;

