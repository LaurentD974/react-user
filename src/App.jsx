import { usestate } from "react"

function App() {
const [nom,setNom]= usestate("coucou")

  return (
    <>
      <h1>Répertoire</h1>
      <ul>
        <li>Nom</li>
        <li>Prénom</li>
        <li>Téléphone</li>
      </ul>
      <button>Mettre à jour</button>
      <button>Favoris</button>
    </>
  )
}

export default App
