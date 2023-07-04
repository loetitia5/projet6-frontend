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
   // Fonction d’affichage des filtres 
  function displayFilters(works) {
    const filters = document.getElementById("filters")
    // Affichage des filtres
      if (displayFilters(works)) {
        const filters = document.getElementById("filters");
        // Ajouter le filtre "Tous" en premier dans la liste des filtres
        filters.innerHTML += `<li class="filter" id="0"></li>`;
      } 
      // Afficher les projets dans la galerie
      else (fetchWorksDisplayGallery(".gallery")); {
        // Fonction d’affichage de la galerie de la page d’accueil ou du mode
        function fetchWorksDisplayGallery(targetElement) {
          return fetchWorks()
            .then(works => { 
        // Sélectionnez l’élément de la galerie cible dans le sélecteur spécifié
          const galleryElement = document.querySelector(".gallery");
          galleryElement.innerHTML = "";

          works.forEach(jsonWork => {
            // Create the figure element to represent the project
            // Créer l’élément de figure pour représenter le projet
            const figure = document.createElement('figure');
            figure.classList.add('work');
            figure.dataset.categories = jsonWork.category;
          })
        })
            //création d'une liste de filtres en triant les catégories
            const filterList = Array.from(new set(works.map(jsonWork =>jsonWork.categoryId)));
            console.log(filterList);
  
            filterList.forEach(category => {
              const categoryName = works.find(work => work.category === category).category.name;
              filters.innerText = `<li class="filter" id="${categoryId}">${categoryName}</li>`;
              })
          }
        }
    }
});

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
   
  const buttons = document.querySelector("#filter");

  categories.forEach((category) => {
    const button = document.createElement("li");
    button.innerText = category.name;
    button.classList.add("li");

    button.addEventListener("click", async () => {
      const getData = await fetchWorks();
      const filterData = getData.filter(
        (data) => data.categoryId === category.id
      );
      renderGallery(filterData);
    });
    function addElement() {
      const button = document.createElement('button');
      button.classList.add('button_filter');
  }

    buttons.appendChild("ul");
  });
});
  
  /*
//création d'une liste de filtres en triant les catégories 
const filterList = Array.from(new set(works.map(work =>work.categoryId)));
console.log(filterList);
*/




