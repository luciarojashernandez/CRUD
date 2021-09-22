// import React, { Fragment, useState} from 'react'
// import CrudForm from './CrudForm'
// import CrudTable from './CrudTable'


// const initialDb= [
    
// ]

// const CrudApp = () => {

//     const [db, setDb] = useState(initialDb);
//     const [dataToEdit, setDataToEdit]=useState(null); //cuando está null se va a hacer una inserción, true= actualización


//     // Crear nuevo registro en la base de datos
//     const createData=(data)=>{
//         //hay que crear un valor para data.id
//         data.id = Date.now
//         // console.log(data) //trae el nuevo elemento
//         setDb([...db, data])
//     }

//     // Actualiza
//     const updateData=(data)=>{}

//     // Elimina
//     const deleteData=(id)=>{}
    


//     return (
//         <Fragment>
//             <h2>CRUD APP</h2>
//             <CrudForm createData={createData} updateData={updateData} dataToEdit={dataToEdit} setDataToEdit={setDataToEdit}/>
//             <CrudTable data={db} deleteData={deleteData}/>
           
//         </Fragment> 
//     )
// }

// export default CrudApp;

