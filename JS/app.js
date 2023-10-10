const galleryElement = document.querySelector('.gallery'); 
const filterList = Array.from;
const buttonFilters = document.querySelectorAll(".filter");
const filter = document.querySelector("#filter");
const works = document.querySelectorAll(".work");
const buttonFilterId = Array.from("event");

//Récupérer tous les filtres et tâches 
const filterAll = buttonFilters[0];

//Récupérer les données de l'API "works"
const filters = document.querySelectorAll(".filter");


//Retrieve data from the "works" API (récupérer des données de l'API "works")
/*
fetch ('http://localhost:5678/api/works')
.then((works) => works.json())
.then((data) => console.log(data));
*/
async function fetchWorks() {
  const reponse = await fetch ('http://localhost:5678/api/works');
  const data = await reponse.json();
  return data;
}
fetchWorks().then(works => {
  console.log(works); 
  fetchWorksDisplayGallery(works, '.gallery');
  displayFilters(works);
  doFilter(works);

})

  // Fonction d’affichage de la galerie de la page d’accueil ou du mode
function fetchWorksDisplayGallery(works, targetElement) {
  // Sélectionnez l’élément de la galerie 
    const galleryElement = document.querySelector(targetElement);

    works.forEach(jsonWork => {
      //Créer l'élement de figure pour représenter le projet
      const figure = document.createElement('figure');
      figure.classList.add('work');
      figure.dataset.category = jsonWork.categoryId;
        
      //Créer l'élément img pour afficher l'image du projet
      const img = document.createElement('img');
      img.src = jsonWork.imageUrl;
      img.alt = jsonWork.title;
        
      figure.appendChild(img);
      //Si l'élément ciblé est la galerie, créer l'élément figcaption avec son title associé
      if(targetElement === '.gallery') {
        
        const figcaption = document.createElement('figcaption');
        figcaption.textContent = jsonWork.title;
        figure.appendChild(figcaption);
        
      }
      //Pour la galerie de la modale même chose mais au lieu du titre ajouter le mot éditer
      if(targetElement === '#dialog-gallery') {
        const figcaption = document.createElement('figcaption');
        figure.appendChild(figcaption);

        // récuperer l'identifiant
        const idWork = jsonWork.id;
        //fonction d'appel pour afficher le button supprimer
        buttonDelete(figure, idWork);
        buttonHover(figure);
      }
      //ajouter la figure créer a la galerie 
      galleryElement.appendChild(figure);
    });
   
} 
//fonction pour supprimer les noeuds
function cleanup() {
  const galleryElement = document.querySelector(".gallery");
  let child = galleryElement.lastElementChild; 
  while(child) {
    galleryElement.removeChild(child);
    child = galleryElement.lastElementChild;
  }
}


// Fonction d’affichage des filtres 
function displayFilters(works) {
  const filters = document.getElementById("filters");
  
  const liste = document.createElement("li");
  liste.classList.add("filter");
  liste.innerText = "Tous";
  liste.setAttribute("id", "projet-0");
  // Ajouter le filtre "Tous" en premier dans la liste des filtres
  filters.appendChild(liste);
  //création d'une liste de catérories en triant les catégories
  const categoryList = Array.from(new Set(works.map(jsonWork => jsonWork.categoryId)));
  console.log(categoryList);

  //trouve le premier element dans le tableau
  categoryList.forEach(categoryId => {
    const categoryName = works.find(work => work.categoryId === categoryId).category.name;
    const listCategory = document.createElement("li");
    listCategory.classList.add("filter");
    listCategory.innerText = categoryName;
    listCategory.setAttribute("id", "projet-"+ categoryId);
    filters.appendChild(listCategory);
  })
} 
// fonction pour récupérer les boutons 
function doFilter(works) {
  const filterTous = document.querySelector("#projet-0");
  console.log(filterTous);
  filterTous.addEventListener("click", function(){
    filterProjet(works, 0);
  }, false);

  const filterObjet = document.querySelector("#projet-1");
  filterObjet.addEventListener("click", function(){
    filterProjet(works, 1);
  }, false);

  const filterAppartement = document.querySelector("#projet-2");
  filterAppartement.addEventListener("click", function(){
    filterProjet(works, 2);
  }, false);

  const filterHotel = document.querySelector("#projet-3");
  filterHotel.addEventListener("click", function(){
    filterProjet(works, 3);
  }, false);

} 
//fonction d'afficher par catégories les projets
function filterProjet(works,filter) {
  if(filter == 0) {
    cleanup();
    fetchWorksDisplayGallery(works, ".gallery");
  } else {
    let tableauFilter = works.filter(function(projet){
      return projet.categoryId == filter;
    });
    cleanup();
    fetchWorksDisplayGallery(tableauFilter, ".gallery");
  }
}

