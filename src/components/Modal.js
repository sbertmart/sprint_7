import { useState } from "react"
import {Form} from "../StyledComponents/web"
import "../styles/proyecto.css"
import Logo from "../img/logo-info.png"

export default function Modal(props) {

    const [modal, setModal] = useState(false);

    const switchModal = () => {
        setModal(!modal)
    }

    return (
        <>
        <button 
            className="botonayuda" >
            <img className="botonayuda" onClick={props.funcion} src={Logo} width="20" height="20"/>
        </button>
        </>
    );
}