//Affichage et côte administration
const displayLogout = document.getElementsByClassName("logout");

// lorsque du clique sur Déconnexion, l'utilisateur se déconnecte
displayLogout.addEventListener("clic", () => { 
    window.localStorage.removeItem("token");
    //rediriger vers la page d'accueil hors ligne 
    window.location.href = "./index.html";
});

// Récupération du token
const token = window.localStorage.getItem("token");

// l’utilisateur ferme l’onglet ou quitte le navigateur, il se déconnecte
window.addEventListener('unload', () => {
    window.localStorage.removeItem("token");
  });

//affichage des éléments coté admin si token present
if (token){ 
    displayLogout.textContent = "logout";
    const filters = document.getElementById("filters");  
} 
