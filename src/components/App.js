
import "../styles/proyecto.css";
import React, { useState, useEffect } from 'react';
import {Form} from '../StyledComponents/web.js'
import InputBotones from "./InputBotones"
import Modal from "./Modal"
import FormulariPressupostos from "./FormulariPressupostos.js"


function App() {
  
  const [isChecked, setIsChecked] = useState([false, false, false]);

  const [paginas, setPaginas] = useState(0)
  const [idiomas, setIdiomas] = useState(0)


  const [total, setTotal] = useState(0);
  const [extras, setExtras] = useState(0);

  const [modalPaginas, setModalPaginas] = useState(false);
  const [modalIdiomas, setModalIdiomas] = useState(false);


  const actualizarExtras = () => {
    if(!isChecked[0]) {setExtras(0);}
    else {setExtras(paginas*idiomas*30)};
  };

  const handleCheck = (position, valor) => {
    const updateChecks = isChecked.map((item, index) => index === position ? !item : item)
    setIsChecked(updateChecks);
    if (!isChecked[position]) {
      setTotal(total+parseInt(valor))} else {setTotal(total-parseInt(valor))}
      actualizarExtras();
    if (isChecked[0]) {
      setExtras(0);
    }
  }


  const sumar = (id) => {

    if(id === 0) {
      setPaginas(paginas+1)
      actualizarExtras();

    }
    if(id === 1) {
      setIdiomas(idiomas+1)
      actualizarExtras();

    }

  }

  const restar = (id) => {

    if(id === 0) {
      setPaginas(paginas-1)
      actualizarExtras();


    }
    if(id === 1) {
      setIdiomas(idiomas-1)
      actualizarExtras();
    }
  }

  const switchModalPaginas = () => {
    setModalPaginas(!modalPaginas);
    console.log(modalPaginas);
  }

  const switchModalIdiomas = () => {
    setModalIdiomas(!modalIdiomas);
    console.log(modalIdiomas);
  }


  useEffect(() => {
    actualizarExtras();
  }, [paginas, idiomas, isChecked])


  return (
    <div className="d-flex m-4">
      <div className="col-4 m-4">
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

        <label className="d-flex align-items-center">
          Nombre de pagines&nbsp;
          <input type="button" name="contPaginas" value="+" onClick={() => sumar(0)} className="botonesform btn btn-danger"/>
          <InputBotones
            className="form-control"
            name="numPaginas" 
            tipo="paginas"
            value={paginas}
            funcion={(e) => {setPaginas(parseInt(e.target.value))}}
          >  
          </InputBotones>
          <input type="button" name="contPaginas" value="-" onClick={() => restar(0)} className="botonesform btn btn-danger"/>
          <Modal funcion={switchModalPaginas}/>
         
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
            value={idiomas}
            funcion={(e) => {setIdiomas(parseInt(e.target.value))}}
          >  
          </InputBotones>
          <input type="button" name="contIdiomas" value="-" onClick={() => restar(1)} className="botonesform btn btn-danger"/>
          <Modal funcion={switchModalIdiomas}/>
          
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
      <div className="col-7 m-4">
      <FormulariPressupostos
          web={isChecked[0]}
          seo={isChecked[1]}
          sem={isChecked[2]}
          numPagines={paginas}
          numIdiomes={idiomas}
          total={total + extras}
          />
      </div>
      {modalPaginas && <div>
            <div onClick={switchModalPaginas} className="overlay"></div>
            <Form className="modal-content">
                <h4>"Has d'indicar el nombre de págines que vols al teu web"</h4>
            </Form>
        </div>}
      {modalIdiomas && <div>
          <div onClick={switchModalIdiomas} className="overlay"></div>
          <Form className="modal-content">
              <h4>"Has d'indicar el nombre d'idiomes que vols al teu web"</h4>
          </Form>
      </div>}
      
    </div>
  );
}

export default App;
