
export const PaveNumeric = ({setAffichage, affichage, newSaisie, setNewSaisie}) => {

    const numeros = ["1", "2", "3", "4", "5", "6", "7", "8", "9","0"];

    const handleNumeroClick = (numero) => {
        if (!newSaisie){
            setAffichage(affichage + numero)
        } else
            setAffichage(numero)
            setNewSaisie(false)

    }

    const boutons = numeros.map((numero) => {
        return <button className="number" key={numero} onClick={() => handleNumeroClick(numero)}>{numero}</button>
    });

    return(
        <div className="PaveNumberContainer">
            {boutons}
        </div>
    )

}
