
const InputBotones = (props) => {


    

    return (
    <div 
        className="d-flex">
            <input
                className="form-control"
                placeholder={`Indica el nombre de ${props.tipo}`}  
                type="number"
                name={props.name} 
                onChange={props.funcion}
                value={props.value}
            ></input>
          
    </div>

    );

}

export default InputBotones