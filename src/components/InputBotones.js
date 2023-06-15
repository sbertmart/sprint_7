import React from "react"

const InputBotones = (props) => {

    return (
    <div>
        <div className="d-flex">
            <button
            onClick={props.sumar} 
            className="boto btn btn-danger"
            >+</button>
            <input
                className="form-control"
                placeholder={`Indica el nombre de ${props.tipo}`}  
                type="number" 
                name={props.name}
                onChange={props.funcion} 
            ></input>
            <button 
            onClick={()=>props.restar}
            className="boto btn btn-danger">-</button>
        </div>
    </div>

    );

}

export default InputBotones