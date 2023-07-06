//Retrieve data from the "works" API (récupérer des données de l'API "works")
/*
fetch ('http://localhost:5678/api/works')
.then((works) => works.json())
.then((data) => console.log(data));
*/
//Récupérer les données de l'API "works"
const filters = document.querySelectorAll(".filter");



const galleryElement = document.querySelector(".gallery");
const filterList = Array.from;

async function fetchWorks() {
  const reponse = await fetch ('http://localhost:5678/api/works');
  const data = await reponse.json();
  return data;
}
fetchWorks().then(works => {
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
        // Fonction d’affichage de la galerie de la page d’accueil ou du mode
        function fetchWorksDisplayGallery(targetElement) {
        // Sélectionnez l’élément de la galerie cible dans le sélecteur spécifié
          galleryElement.innerHTML = "";
          return works()
          .then(works => {
            const galleryElement = document.querySelector(targetElement);

            works.forEach(jsonWork => {
              const figure = document.createElement('figure');
              figure.classLiss.add('work');
              figure.dataset.category = jsonWork.categoryId;
              
              const img = document.createElement('img');
              img.src = jsonWork.imageUrl;
              img.alt = 'image projet';
              
              figure.appendChild(img);
              if(targetElement === 'gallery') {
                const figcaption = document.createElement('figcaption');
                figcaption.textContent =jsonWork.title;
                figure.appendChild(figcaption);
              }
              if(targetElement === 'modal-gallery') {
                const figcaption = document.createElement('figcaption');
                figcaption.textContent ='éditer';
                figure.appendChild(figcaption);

                const idWork = jsonWork.id;
              }
            
          });
        }) 
        }     
      }
    }
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
   
  const filter = document.querySelector("#filter");

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
function createButtonElement(classNames = [], textContent = "") {
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
  });
});
  
  /*
//création d'une liste de filtres en triant les catégories 
const filterList = Array.from(new set(works.map(work =>work.categoryId)));
console.log(filterList);
*/




