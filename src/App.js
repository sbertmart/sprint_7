
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

  var contador = (datos.numPaginas*datos.numIdiomas*30);

  const [total, setTotal] = useState(0);


  const handleOnChange = (event) => {
    contador = 0;
    setDatos({...datos,
    [event.target.name] : parseInt(event.target.value)})
  
  }

  const handleCheck = (position, valor) => {
    const updateChecks = isChecked.map((item, index) => index === position ? !item : item)
    setIsChecked(updateChecks);
    if (!isChecked[position]) {
      setTotal(total+parseInt(valor))} else {setTotal(total-parseInt(valor))}
    if (!isChecked[0]) {
      contador = 0;
    }
  }

  console.log(contador);

  const anadirONo = () => {
    if(isNaN(contador)) {return 0}
    if(isChecked[0] === true) {return contador}
    if(isChecked[0] === false) {return 0}
  }

  const [contadorPag, setContadorPag] = useState(0);

  const anadir = (event) => {
    setDatos({...datos,
    [event.target.name] : parseInt(event.target.value++)})
  }
  const sustraer = (event) => {
    setDatos({...datos,
    [event.target.name] : parseInt(event.target.value--)})
  }

 
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
          <InputBotones
            className="form-control"
            name="numPaginas" 
            tipo="paginas"
            value={datos.numPaginas} 
            sumar={anadir} 
            restar={sustraer}
            funcion={handleOnChange}>
          </InputBotones>
        </label>
        </div>
        <div style={{marginTop:"2%"}}>
        <label className="d-flex">
          Nombre d'idiomes&nbsp;
          <InputBotones
            className="form-control"
            name="numIdiomas"  
            tipo="idiomas"
            value={datos.numIdiomas} 
            sumar={anadir} 
            restar={sustraer}
            funcion={handleOnChange}>
          </InputBotones>
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
        El preu es de: {total + anadirONo()} €
      </div>
    </div>
  );
}

export default App;
