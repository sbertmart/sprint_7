const TaulaCerca = ({presu}) => {
    return (     
        presu.map(presu=>(  
            <tr className="taula" key={presu.id}>
                <td>{presu.nom}</td>
                <td>{presu.cognom}</td>
                <td>{presu.web ? "Si" : "No"}</td>
                <td>{presu.seo ? "Si" : "No"}</td>
                <td>{presu.sem ? "Si" : "No"}</td>
                <td>{presu.numPagines}</td>
                <td>{presu.numIdiomes}</td>
                <td>{presu.total}</td>
                <td>{presu.data}</td>
                <td></td>
            </tr>
    )));

}


export default TaulaCerca