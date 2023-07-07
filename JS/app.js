const galleryElement = document.querySelector(".gallery");
const filterList = Array.from;
const filter = document.querySelector("#filter");
const works = document.querySelectorAll(".work");
//Récupérer les données de l'API "works"
const filters = document.querySelectorAll(".filter");

//cliqueant sur le filtre "tous", tous les projets sont affichées
filterAll.addEventListener("click", viewAllWorks);
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
  })

//récupérer des données de l'API "catégories"
/*
fetch ('http://localhost:5678/api/categories')
.then((categories) => categories.json())
.then((data) => console.log(data));
*/
async function fetchCategories() {
  const reponse = await fetch ('http://localhost:5678/api/categories');
  const data = await reponse.json();
  return data;
}
fetchCategories().then(categories => {
  console.log(categories);
});
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
      //Si l'élément cibré est la galerie, créer l'élément figcaption avec son title associé
      if(targetElement === 'gallery') {
        const figcaption = document.createElement('figcaption');
        figcaption.textContent = jsonWork.title;
        figure.appendChild(figcaption);
      }/*
      //Pour la galerie de la modale même chose mais au lieu du titre ajouter le mot éditer
      if(targetElement === 'modal-gallery') {
        const figcaption = document.createElement('figcaption');
        figcaption.textContent ='éditer';
        figure.appendChild(figcaption);

        const idWork = jsonWork.id;
      }*/
      //ajouter la figure créer a la galerie 
      galleryElement.appendChild(figure);
    });
   
}
   // Fonction d’affichage des filtres 
   function displayFilters(works) {
    const filters = document.getElementById("filters");
    // Affichage des filtres
      if (displayFilters(works)) {       
        // Ajouter le filtre "Tous" en premier dans la liste des filtres
        filters.innerHTML += `<li class="filter" id="0">Tous</li>`;
        //création d'une liste de filtres en triant les catégories
        filterList = Array.from(works.mapFn(jsonWork =>jsonWork.categoryId));
        console.log(filterList);

        //trouve le premier element
        filterList.forEach(categoryId => {
        const categoryName = works.find(work => work.categoryId === categoryId).category.name;
        filters.innerText = `<li class="filter" id="${categoryId}">${categoryName}</li>`;
  })
      } 
      // Afficher les projets dans la galerie
      else (fetchWorksDisplayGallery(".gallery")); {
             
      }
    }

  
  /*
//création d'une liste de filtres en triant les catégories 
const filterList = Array.from(new set(works.map(work =>work.categoryId)));
console.log(filterList);
*/
categories.forEach((category) => {
  const filter = document.createElement("li");
 filter.innerText = category.name;
  filter.classList.add("li");

  filter.addEventListener("click", async () => {
    const getData = await fetchWorks('http://localhost:5678/api/categories');
    const filterData = getData.filter(
      (data) => data.categoryId === category.id
    );
    renderGallery(filterData);
  });
  function addElement() {
    const filter = document.createElement('button');
    filter.classList.add('button_filter');
}
//fonction pour créer un bouton, y appliquer une ou plusieurs classes et inserer un texte

});

//fonction pour créer un bouton
function createElementbutton(classNames = [], textContent = "") {
  const button =document.createElement("div"); 
  button.setAttribute("role", "button");

  if (Array.isArray(classNames)) {
    classNames.forEach(className => {
      button.classList.add(className);
    });
  } else {
    button.classList.add(classNames);
  }
  if (textContent) {
    button.textContent = textContent;
  }
  return button;
}
//Fonction permettant d'afficher tous les travaux en cliquant sur le filtre tout
function viewAllWorks() {
  //Récupérer tous les filtres et tâches 
  const buttonFilters = document.querySelectorAll(".filter");
  const filterAll = buttonFilters[0];
  //Afficher tous les projets 
  works.forEach(work => work.getElementsByClassName.display = "block");
  deleteActiveCLass();

}