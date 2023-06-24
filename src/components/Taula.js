const Taula = ({presus, deletePresu}) => {
    return (
        presus.map(presu=>(
            <tr className="taula" key={presu.id}>
                <td>{presu.nom}</td>
                <td>{presu.cognom}</td>
                <td>{presu.web ? "Si" : "No"}</td>
                <td>{presu.seo ? "Si" : "No"}</td>
                <td>{presu.sem ? "Si" : "No"}</td>
                <td>{presu.numPagines}</td>
                <td>{presu.numIdiomes}</td>
                <td>{presu.total}</td>
                <td>{(JSON.stringify(presu.data)).replace(/"/g, "")}</td>
                <td><button onClick={() => deletePresu(presu.id)} className="btn btn-primary">ESBORRA</button></td>
            </tr>
        ))

    );
}













export default Taula