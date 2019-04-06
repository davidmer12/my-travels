import React from "react";


{/* Création d'un tableau d'objets "travels" */}
const travels = [
  
  
  {
    destination:"Paris",
    country:"France",
    distance:"0 Kms",
    image:"https://static.latribune.fr/full_width/902049/centre-ville.jpg"
  },

  {
    destination:"Dublin",
    country:"Irlande",
    distance:"1072 Kms",
    image:"https://voyagerenirlande.files.wordpress.com/2012/10/dublin-liffey-00123.jpeg"
  },

  {
    destination: "Tokyo",
    country: "Japon",
    distance: "9 706 kms",
    image: "https://ctl.s6img.com/society6/img/RhIw1zx7vU2EBu_aqaPVGk_ipt0/w_700/prints/~artwork/s6-0042/a/19130016_16692039/~~/tokyo-sky-tree-is2-prints.jpg?wait=0&attempt=0"
  },

  {
    destination: "Rome",
    country: "Italie",
    distance: "1422 kms",
    image: "https://img.aws.la-croix.com/2018/02/01/1200910511/adobestock-67849317_0_729_487.jpg"
  },

  {
    destination: "Barcelone",
    country: "Espagne",
    distance: "1036 kms",
    image: "http://naturalwalks.com/wp-content/uploads/2015/09/indrets-barcelona-montjuic.jpg"
  }
  
  
];



{/* Création du composant "Travels" auquel on assigne une fonction
 dont le but sera d'afficher tout le contenu du tableau d'objets
"travels" */}
const Travels = () => (
  <div>
    {/* Création d'une fonction dans laquelle on applique
    la méthode ".map" au tableau d'objets "travels". Cette 
    méthode permettra de créer un nouveau tableau qui affichera
    chaque élément contenu dans le tableau d'objets "travels",
    en remplacement d'une boucle "for" */}
    {travels.map(travel => (
      <div>
        <p>
        {/* Affichage de l'élément "destination" */}
        {travel.destination} <br/>

        {/* Affichage de l'élément "country" */}
        {travel.country}<br/>

        {/* Affichage de l'élément "distance" */}
        {travel.distance}<br/><br/>

        {/* Affichage de l'image */}
        <img src={travel.image} />
        
        </p>
        <br/>
      </div>
    ))}
  </div>
);

{/* Exportation du composant "Travels" */}
export default Travels;