import React,{Fragment} from 'react'
import CrudApp from './components/CrudApp';
import CrudApi from './components/CrudApi';
import './App.css';

function App() {
  return (
    <Fragment>
      <CrudApi/>
      {/* <CrudApp/> */}
    </Fragment>
  );
}

export default App;
