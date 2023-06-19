import { useState, useEffect } from "react"

const FormulariPressupostos = (props) => {

    class Pressu {
        constructor(nom, cognom, web, seo, sem, numPagines, numIdiomes, total, data) {
            this.nom = nom;
            this.cognom = cognom;
            this.web = web;
            this.seo = seo;
            this.sem = sem;
            this.numPagines = numPagines;
            this.numIdiomes = numIdiomes;
            this.total = total;
            this.data = data;
        }
    }

    const [dades, setDades] = useState({
        nom: "",
        cognom: ""
    })

    const [print, setPrint] = useState("");



    var objeto = {};

    const handleOnChange = (e) => {
        setDades({...dades, 
        [e.target.name] : (e.target.value)})
    }

    const handleOnClick = () => {
        const fecha = new Date()
        objeto = new Pressu(dades.nom, dades.cognom, props.web, props.seo, props.sem, props.numPagines, props.numIdiomes, props.total, fecha)
        setLocalStorage();
        setDades({nom:"", cognom:""})
    }

    const printLocalStorage = () => {
        for(let i=1; i<=localStorage.length; i++) {
            let item = localStorage.getItem(`Pressupost ${i}`);
            setPrint(print + item);
        }
    }

    const setLocalStorage = () => {
        
        const settedKey = `Pressupost ${localStorage.length + 1}`
        try {
            window.localStorage.setItem(settedKey, JSON.stringify(objeto));
            printLocalStorage();
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        printLocalStorage()
    }, []);

    return(
        <div>
            <label className="mt-4 d-block">El teu nom&nbsp;<input name="nom" type="text" value={dades.nom} onChange={handleOnChange}/></label>
            <label className="mt-4 d-block">El teu cognom&nbsp;<input name="cognom" type="text" value={dades.cognom} onChange={handleOnChange}/></label>
            <button className="mt-4 btn btn-danger" type="submit" onClick={handleOnClick}>INGRESAR PRESSUPOST</button> 
            <h3 className="mt-4">Llistat de pressupostos</h3>
            <p>{print}</p>
        </div>
    );



}



export default FormulariPressupostos;