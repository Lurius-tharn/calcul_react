import logo from './logo.svg';
import './App.css';
import {useState} from "react";
import {PaveNumeric} from "./components/PaveNumeric";
import {PaveOperation} from "./components/PaveOperation";


function App() {

  const [affichage, setAffichage] = useState("0")
    const [newSaisie, setNewSaisie] = useState(false)


  return (
    <div className="App">
        <div className="Result">{affichage}</div>
        <div className="Container">
            <PaveNumeric affichage={affichage} setAffichage={setAffichage} newSaisie={newSaisie} setNewSaisie={setNewSaisie}></PaveNumeric>

                <PaveOperation  affichage={affichage} setAffichage={setAffichage} setNewSaisie={setNewSaisie}></PaveOperation>

         </div>
    </div>


  );
}

export default App;
