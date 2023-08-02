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
  doFilter();
  filterProjet(doFilter);

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
      if(targetElement === '#modal-gallery') {
        const figcaption = document.createElement('figcaption');
        figcaption.textContent ='éditer';
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
   
} /*
  //supprimer la classe "filter_active" de tous les filtres
function deleteClass() {
  const buttonFilters = document.querySelectorAll(".filter");
  buttonFilters.forEach(buttonFilter => buttonFilter.classList.remove("filter_active"));
}
  //Fonction permettant d'afficher tous les travaux en cliquant sur le filtre tout
function viewAllWorks() {
  const sort = works.filter(id => id.length > works);
  console.log(sort);
  //Afficher tous les projets 
  works.forEach(work => work.style.display = "block");
  deleteClass();
  //Ajouter la classe "filter_active" au filtre "All"
  filterAll.classList.add("filter_active");

  //cliqueant sur le filtre "tous", tous les projets sont affichées
  filterAll.addEventListener("click", viewAllWorks);
  // Parcourir tous les filters, à l'exception du fitre "tous"
  buttonFilters.forEach(buttonFilter => {
    if (buttonFilter !== filterAll) {
      buttonFilter.addEventListener("click", (event) => { filterWorks(event)})
    }
  });
 
}*/
//récupérer des données de l'API "catégories"
/*
fetch ('http://localhost:5678/api/categories')
.then((categories) => categories.json())
.then((data) => console.log(data));
*//*
async function fetchCategories() {
  const reponse = await fetch ('http://localhost:5678/api/categories');
  const data = await reponse.json();
  return data;
}
fetchCategories().then(categories => {
  console.log(categories);
  categories.forEach((category) => { 
    filterWorks('event');
    filterList(Array.from);
    createElementbutton('classNames','textContent');
    deleteClass();
    viewAllWorks();
    setDisplayStyle('element', 'displayValue'); 
   
    const filter = document.createElement("li");
    filter.innerText = category.name;
    filter.classList.add("li");
  
    filter.addEventListener("click", async () => {
      const filterData = categories.filter(
        (data) => data.categoryId === category.id);
    /*  renderGallery(filterData);*//*
    });*//*
    function addElement() {
      const filter = document.createElement('button');
      filter.classList.add('button_filter');
    }
  //fonction pour filter et afficher par catégories les projets
    function filterWorks(event) {
      deleteClass(); 
      this.Array = event;
     
      filterAll = document.getElementsByName(filterWorks); 

    //Récupérer tous les travaux  
      const works = document.querySelectorAll(".work");
      works.forEach(work => {
        work.style.display = work.dataset.category === buttonFilterId ? "block" : "none";
      })
    } 
  });
  
});*/

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
function doFilter() {
  const filterTous = document.querySelector("#projet-0");
  filterTous.addEventListener("click", filterProjet, false);
  const filterObjet = document.querySelector("#projet-1");
  filterObjet.addEventListener("click", filterProjet, false);
  const filterAppartement = document.querySelector("#projet-2");
  filterAppartement.addEventListener("click", filterProjet, false);
  const filterHotel = document.querySelector("#projet-3");
  filterHotel.addEventListener("click", filterProjet, false);
} 
function filterProjet(gallery, doFilter) {  
  const image = document.querySelectorAll("#filter");
  const galleryElement = document.querySelector('.gallery');
  for(doFilter = 1; doFilter < 12; doFilter++ ) {
    console.log("test");
  let tag = math.floor();
 
  for(const gallery of image){
  gallery.classList.replace("doFilter", "works");
    if(tag in gallery.dataset){
      gallery.classList.replace("doFilter", "works");
      }
    } 
  }
}

  console.log(filterProjet, doFilter);


/*
//modifier la valeur d'affichage 
function setDisplayStyle(element, displayValue) {
  element.style.display = displayValue;
}*/

//fonction pour créer un bouton 
/*
function createElementbutton(classNames = [], textContent = "") {
  const button = document.createElement("div"); 
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

// créer une icone
function createIcon(...classNames) {
  const icon = document.createElement("i");
  classNames.forEach(className => {
    icon.classList.add(className);
  });
  return icon;
} 


//fonction permettant de rafraichir la galerie
function freshGallery(selector) {
  const gallery = document.querySelector(selector);
  if(gallery) {
    gallery.innerHTML = '';
    fetchWorksDisplayGallery(selector);
  }
}

//Fonction permettant de créer et d'afficher un message d'erreur 
function errorMessage(message, selector) {
  const containerError = document.querySelector(selector);
  const errorElement = containerError.querySelector('.error-message');
  if(errorElement) {
    errorElement.remove();
  }
  const errorDuMessage = document.createElement('p');

  errorDuMessage.classList.add('error-message');
  errorDuMessage.innerHTML = message;

  containerError.appendChild(errorDuMessage);
} */