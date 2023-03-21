
export const PaveOperation = ({setAffichage, affichage, setNewSaisie}) => {

    const operation = ["+", "-", "*", "/"];

    const handleNumeroClick = (numero) => {
        setAffichage(affichage + numero)
    }
    const handleEqual =() =>  {
        const resultat = eval(affichage);
        setAffichage(resultat)
        setNewSaisie(true)
    }
    const boutons = operation.map((op) => {
        return <button className="other" key={op} onClick={() => handleNumeroClick(op)}>{op}</button>
    });

    return(
        <div className="PaveOperationContainer">
            {boutons}
            <button className="other" onClick={() => handleEqual()}>=</button>

            </div>
    )

}
