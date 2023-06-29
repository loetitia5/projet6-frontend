//récupérer des données de l'API "works"
/*
fetch ('http://localhost:5678/api/works')
.then((works) => works.json())
.then((data) => console.log(data));
*/
const works = async() => {
    const reponse = await fetch ('http://localhost:5678/api/works');
    const data = await reponse.json();
 }
//récupérer des données de l'API "catégories"
/*
fetch ('http://localhost:5678/api/categories')
.then((categories) => categories.json())
.then((data) => console.log(data));
*/
const categories = async() => {
    const reponse = await fetch ('http://localhost:5678/api/categories');
    const data = await reponse.json();
 }

//création d'une liste de filtres en triant les catégories 
const filterList = Array.from(new set(works.map(work =>work.categoryId)));
console.log(filterList);

function addElement() {
    const button = document.createElement('button');
    button.classList.add('button_filter');
}
const gallery = document.querySelector('.gallery');
 gallery.innerHTML = " ";