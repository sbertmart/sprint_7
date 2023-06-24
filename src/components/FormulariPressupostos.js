import { useState, useEffect } from "react"
import Taula from "./Taula.js"
import TaulaCerca from "./TaulaCerca.js"

const FormulariPressupostos = (props) => {


    const [switched, setSwitched] = useState(false);
    const [cerca, setCerca] = useState([]);

    const [nomCerca, setNomCerca] = useState("");


    const getDataFromLS = () => {
        const data = localStorage.getItem("Pressupost");
        if(data) {
            return JSON.parse(data);
        }
        else {
            return []
        }
    }

    const [dades, setDades] = useState({
        nom: "",
        cognom: ""
    })

    var objeto = {};
    var presuTrobat = {};

    const [objetos, setObjetos] = useState(getDataFromLS());

    const handleOnChange = (e) => {
        setDades({...dades, 
        [e.target.name] : (e.target.value)})
    }

    const deletePresu = (id) => {
        const filtraPresus = objetos.filter((presu) => {return presu.id !== id})
        setObjetos(filtraPresus);
    }

    const esborraTot = () => {
        setObjetos([]);
    }

    const ordenaAlfa = () => {
        setObjetos(objetos.sort((a,b) => {
            if (a.nom < b.nom) {
                return -1
            }
            if (a.nom > b.nom) {
                return 1
            }
        }));
        setSwitched(!switched);
        console.log(objetos);    
    }

    const restaura = () => {
        setObjetos(objetos.sort((a,b) => {
            if (a.id < b.id) {
                return -1
            }
            if (a.id > b.id) {
                return 1
            }
        }));
        setSwitched(!switched);
        console.log(objetos);    
    }

    const ordenaPerData = () => {
        setObjetos(objetos.sort((a,b) => {
            if (a.data < b.data) {
                return -1
            }
            if (a.data > b.data) {
                return 1
            }
        }));
        setSwitched(!switched);
        console.log(objetos);    
    }
    
    const handleOnClick = () => {
        const fecha = new Date()
        objeto = {
            id: objetos.length + 1,
            nom: dades.nom, 
            cognom: dades.cognom, 
            web: props.web, 
            seo: props.seo, 
            sem: props.sem, 
            numPagines: props.numPagines, 
            numIdiomes: props.numIdiomes, 
            total: props.total, 
            data: (JSON.stringify(fecha)).replace(/"/g, "")
        }
        setObjetos([...objetos, objeto]);
        setDades({nom:"", cognom:""})
    }

    const handleOnChangeCerca = (e) => {
        setNomCerca(e.target.value);
    }

    const cercaPressupost = () => {
        const resultat = objetos.filter((presu) => {return (presu.nom === nomCerca)});
        setCerca(resultat);    
        console.log(cerca);
        setSwitched(!switched);

    }

    useEffect(()=>{
        try {
            window.localStorage.setItem("Pressupost", JSON.stringify(objetos));
        } catch (error) {
            console.log(error);
        }

    },[objetos, switched])

    return(
        <div>
        <div><label className="mt-4 d-block">El teu nom&nbsp;<input name="nom" type="text" value={dades.nom} onChange={handleOnChange}/></label>
            <label className="mt-4 d-block">El teu cognom&nbsp;<input name="cognom" type="text" value={dades.cognom} onChange={handleOnChange}/></label>
            <button className="mt-4 btn btn-danger" type="submit" onClick={handleOnClick}>INGRESAR PRESSUPOST</button> 
        </div>
        {objetos.length < 1 && <div className="mt-4">No hi ha pressupostos</div>}
        {objetos.length > 0 && <>
        <div>
            <div className="mt-4 mb-4 d-flex">
                <button onClick={() => ordenaAlfa()} className="btn btn-secondary mr-4">Ordena Alfabéticament</button>
                <button onClick={() => ordenaPerData()} className="btn btn-secondary mx-4">Ordena per data</button>
                <button onClick={() => restaura()} className="btn btn-secondary mx-4">Reinicialitza l'ordre</button>
            </div>
            <table className="full-width mt-4">
                <thead>
                <tr>
                    <th>Nom</th>
                    <th>Cognom</th>
                    <th>WEB</th>
                    <th>SEO</th>
                    <th>SEM</th>
                    <th>Pag.</th>
                    <th>Lang.</th>
                    <th>Total</th>
                    <th>Data</th>
                    <th>Esborra</th>
                </tr>
                </thead>
                <tbody>
                    {switched ? <Taula presus={objetos} deletePresu={deletePresu}/> : <Taula key={switched} presus={objetos} deletePresu={deletePresu}/>}     
                </tbody>
                </table>
                <button className="mt-4 btn btn-secondary" onClick={()=>esborraTot()}>ESBORRA TOTS ELS PRESSUPOSTOS</button>
                <h3 className="mt-4"> Cerca el pressupost per nom </h3>
                <div className="mt-4 mb-4 d-flex">
                <input type="text" name="nom" onChange={handleOnChangeCerca} placeholder="introdueix el nom o cognom de la persona que ha fet el pressupost" />
                <button onClick={() => cercaPressupost()} className="btn btn-primary mx-4">Cerca el pressupost</button>
                </div>
                <div className="mt-4">
                   <h5> RESULTAT DE LA CERCA </h5>
                </div>
            <table className="full-width mt-4">
                <thead>
                <tr>
                    <th>Nom</th>
                    <th>Cognom</th>
                    <th>WEB</th>
                    <th>SEO</th>
                    <th>SEM</th>
                    <th>Pag.</th>
                    <th>Lang.</th>
                    <th>Total</th>
                    <th>Data</th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                {switched ? <TaulaCerca presu={cerca} /> : <TaulaCerca presu={cerca} />}
                </tbody>
            </table>
        </div>
        </>}
        </div>
    );



}



export default FormulariPressupostos;