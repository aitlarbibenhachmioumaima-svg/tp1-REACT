// App.js
import HelloWorld from './HelloWorld';
import Greeting from './Greeting';
import Profil from './Profil';
import Voiture from './Voiture';
import ListeCourses from "./ListeCourses";
function App() {
  const utilisateur = { nom: 'Ait Larbi ben Hachmi ', photo: '/user.png' };
  const liste1 = ["Riz", "Poulet", "Tomates"];
  const liste2 = ["Ordinateur", "Casque", "Chargeur"];
  return (
    <div>
      <HelloWorld />
      <Greeting prenom="Oumaima" />
      <Profil utilisateur={utilisateur} taille={200} />
      
    <h2>Liste des voitures</h2>

      
      <Voiture marque="Peugeot" modele="208" couleur="Noire" />
      <Voiture marque="Audi" modele="A4" couleur="Grise"/>
      <Voiture marque="Kia" modele="Sportage" couleur="Noir" />
      
       <h2>Liste 1</h2>
      <ListeCourses elements={liste1} />

      <h2>Liste 2</h2>
      <ListeCourses elements={liste2} />
    </div>

  );
}

export default App;