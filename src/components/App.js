
import "../styles/proyecto.css";
import React, { useState } from 'react';
import {Form} from '../StyledComponents/web.js'
import InputBotones from "./InputBotones"

function App() {
  
  const [isChecked, setIsChecked] = useState([false, false, false]);

  const [paginas, setPaginas] = useState({
    numPaginas: 0,
  })
  const [idiomas, setIdiomas] = useState({
    numIdiomas: 0,
  })


  const [total, setTotal] = useState(0);
  const [extras, setExtras] = useState(0);


  const handleOnChange = (id) => {
    if (id === 0) {
        setPaginas({numPaginas : paginas.numPaginas})
        setExtras(paginas.numPaginas*idiomas.numIdiomas*30);
      }
    if (id === 1) {
        setIdiomas({numIdiomas : idiomas.numIdiomas})
        setExtras(paginas.numPaginas*idiomas.numIdiomas*30);
      }
    }

  const handleCheck = (position, valor) => {
    const updateChecks = isChecked.map((item, index) => index === position ? !item : item)
    setIsChecked(updateChecks);
    if (!isChecked[position]) {
      setTotal(total+parseInt(valor))} else {setTotal(total-parseInt(valor))}
      setExtras(paginas.numPaginas*idiomas.numIdiomas*30);
    if (isChecked[0]) {
      setExtras(0);
    }
  }

  console.log(paginas.numPaginas)
  console.log(idiomas.numIdiomas)
  console.log(extras)


  const sumar = (id) => {

    if(id === 0) {
      setPaginas({numPaginas : paginas.numPaginas+1})
      handleOnChange(0);
    }
    if(id === 1) {
      setIdiomas({numIdiomas : idiomas.numIdiomas+1})
      handleOnChange(1);
    }

  }

  const restar = (id) => {

    if(id === 0) {
      setPaginas({numPaginas : paginas.numPaginas-1})
      handleOnChange(0);
    }
    if(id === 1) {
      setIdiomas({numIdiomas : idiomas.numIdiomas-1})
      handleOnChange(1);
    }

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
          <input type="button" name="contPaginas" value="+" onClick={() => sumar(0)} className="botonesform btn btn-danger"/>
          <InputBotones
            className="form-control"
            name="numPaginas" 
            tipo="paginas"
            value={paginas.numPaginas}
            funcion={()=>handleOnChange(0)}
          >  
          </InputBotones>
          <input type="button" name="contPaginas" value="-" onClick={() => restar(0)} className="botonesform btn btn-danger"/>
        </label>
        </div>
        <div style={{marginTop:"2%"}}>
        <label className="d-flex">
          Nombre d'idiomes'&nbsp;
          <input type="button" name="contIdiomas" value="+" onClick={() => sumar(1)} className="botonesform btn btn-danger"/>
          <InputBotones
            className="form-control"
            name="numIdiomas" 
            tipo="Idiomas"
            value={idiomas.numIdiomas}
            funcion={()=>handleOnChange(1)}
          >  
          </InputBotones>
          <input type="button" name="contIdiomas" value="-" onClick={() => restar(1)} className="botonesform btn btn-danger"/>
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
        El preu es de: {total + parseInt(extras)} €
      </div>
    </div>
  );
}

export default App;
