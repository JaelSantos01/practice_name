import "bootstrap/dist/css/bootstrap.min.css";  
import { useState } from "react";
import ApiController from "./models/api.controller";

function App(){
  const [names, setNames]= useState({
    name: "",
    lastname:""
  });

  const [nameAll, setNameAll]= useState("");

  const hanleChange = (e) =>{
    const {name, value} = e.target;

    setNames( prev =>{
      return{
        ...prev,
        [name]: value
      }
    });
  }

  const handleSubmit = async () =>{
    const response = await ApiController.namesAll(names);
    setNameAll(response.data);
  }

  return(
    <>
      <nav className="navbar bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Ana Jael Santos Carbajal 10°C</a>
        </div>
      </nav>
      <div className="container">
          
            <div className="mb-3">
              <input type="text" placeholder="name" name="name" id="name" value={names.name} onChange={hanleChange}/> 
            </div>
            <div className="mb-3">
              <input type="text" placeholder="lastname" id="lastname" name="lastname"  value={names.lastname} onChange={hanleChange}/>
            </div>
            <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Hacer nombre completo</button>
            <br />
            <h3>Hola! :  {nameAll}</h3>
          
      </div>
    </>
  )
}

export default App;