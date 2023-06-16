
import './App.css';
import React, { useState } from 'react';
import {Form} from './components/web.js'
import InputBotones from "./components/InputBotones"

function App() {
  
  const [isChecked, setIsChecked] = useState([false, false, false]);

  const [datos, setDatos] = useState({
    numPaginas: 0,
    numIdiomas: 0
  })

  const [total, setTotal] = useState(0);
  const [extras, setExtras] = useState(0);

  const actualizarExtras = () => {
    setExtras(datos.numPaginas*datos.numIdiomas*30);
  }

  const handleOnChange = (event) => {
    setDatos({...datos,
    [event.target.name] : parseInt(event.target.value)})
    actualizarExtras();
  }

  const handleCheck = (position, valor) => {
    const updateChecks = isChecked.map((item, index) => index === position ? !item : item)
    setIsChecked(updateChecks);
    if (!isChecked[position]) {
      setTotal(total+parseInt(valor))} else {setTotal(total-parseInt(valor))}
    if (isChecked[0]) {
      setExtras(0);
    }
  }

  console.log(datos)
  console.log(extras)

  return (
    <div className="divprincipal">
      <h3>Que vols fer?</h3>
      <div>
        <input
          type="checkbox"
          name="web"
          onChange={() => handleCheck(0, 500)}
        />
        Una página web (500€)
      </div>
      {isChecked[0] &&
      <Form>
        <div> 

        <label className="d-flex">
          Nombre de pagines&nbsp;
          <input type="button" name="contPaginas" value="+" onClick={() => setDatos({numPaginas : datos.numPaginas + 1})} className="botonesform btn btn-danger"/>
          <InputBotones
            className="form-control"
            name="numPaginas" 
            tipo="paginas"
            value={datos.numPaginas}
            funcion={handleOnChange}
          >  
          </InputBotones>
          <input type="button" name="contPaginas" value="-" onClick={() => setDatos({numPaginas : datos.numPaginas - 1})} className="botonesform btn btn-danger"/>
        </label>
        </div>
        <div style={{marginTop:"2%"}}>
        <label className="d-flex">
          Nombre d'idiomes&nbsp;
          <input type="button" name="contPaginas" value="+" onClick={() => setDatos({numIdiomas : datos.numIdiomas + 1})} className="botonesform btn btn-danger"/>
          <InputBotones
            className="form-control"
            name="numIdiomas"  
            tipo="idiomas"
            value={datos.numIdiomas}
            funcion={handleOnChange}
           >
          </InputBotones>
          <input type="button" name="contPaginas" value="+" onClick={() => setDatos({numIdiomas : datos.numIdiomas - 1})} className="botonesform btn btn-danger"/>
        </label>
        </div>
        
      </Form>}
    
      <div>
        <input
          type="checkbox"
          name="seo"
          onChange={() => handleCheck(1, 300)}
        />
        Una consultoria SEO (300€)
      </div>
      <div>
        <input
          type="checkbox"
          name="ads"
          onChange={() =>handleCheck(2, 200)}
        />
        Una campaña de google ads (200€)
      </div>
      <div className="resultat">
        El preu es de: {total + extras} €
      </div>
    </div>
  );
}

export default App;
