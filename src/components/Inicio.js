import "../styles/proyecto.css"
const Inicio = () => {
    
    return(
    <div className="mt-4 justify-content-center text-center">
        <h1>Benvingut al creador de pressupostos</h1>
        <ul className="d-flex justify-content-center">
            <li>
                <a className="menu m-4" href="/">Home</a>
            </li>
            <li>
                <a className="menu m-4" href="/pressupost">Crear pressupostos</a>
            </li>
        </ul>
    </div>
    );
}

export default Inicio;