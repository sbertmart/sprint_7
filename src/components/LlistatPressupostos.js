import { useState } from "react"
const LlistatPressupostos = () => {

    var arrayPresus = [];

    const [clicked, setClicked] = useState(false);
    const [arrayPress, setArrayPress] = useState([{
        id:"",
        dades:""
    }]);
    
    class getPresu {
        constructor(id, dades) {
            this.id = id;
            this.dades = dades;
        }
    }

    const handleOnClick = () => {
    setArrayPress([]);
    for(let i=1; i<=localStorage.length; i++) {
    setArrayPress([...arrayPress , {id:i, dades:JSON.stringify(localStorage.getItem(`Pressupost ${i}`))}]); 
    }
    setClicked(!clicked);
    console.log(arrayPress);
    }

    console.log(arrayPress.length);



    return (
        <div className="col-12 full-width">
            <h3>Llistat Pressupostos</h3>
            <button className="mt-4 btn btn-danger" onClick={handleOnClick}>Veure pressupostos</button>
            <table className="full-width">
                <thead>
                <tr>
                    <td>ID</td>
                    <td>dades</td>
                </tr>
                </thead>
                <tbody>
                {clicked && arrayPresus.map((presu) => {return (
                <tr>
                    <td>{presu.id}</td>
                    <td>{presu.dades}</td>
                </tr>
                )})
                }
                
                </tbody>
            </table>
    
        </div>
    );
}

export default LlistatPressupostos;