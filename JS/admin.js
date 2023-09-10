//Affichage et côte administration
const displayLogout = document.getElementById("logout");
console.log(displayLogout);


// Récupération du token
const token = window.localStorage.getItem("token");

// l’utilisateur ferme l’onglet ou quitte le navigateur, il se déconnecte
window.addEventListener('unload', () => {
    window.localStorage.removeItem("token");
  });

const barreLogins = document.getElementById('barreLogin');
const buttonLogins = document.getElementById('buttonLogin');
//affichage des éléments coté admin si token present
if (token){ 
    displayLogout.firstElementChild.textContent = "logout";
    // lorsque du clique sur Déconnexion, l'utilisateur se déconnecte
    displayLogout.addEventListener("clic", () => {
        window.localStorage.removeItem("token");
        //rediriger vers la page login hors ligne 
        window.location.href = "./login.html";
    });    
    barreLogins.classList.remove("hidden");
    buttonLogins.classList.remove("hidden");
    
    const removefilterlogout = document.getElementById("filters");
    removefilterlogout.remove();
    /*  
    const changement = document.createElement("div");
    const newBtn = document.createElement("button");
    const btnText = document.createTextNode("publier les changements");
    changement.appendChild(newBtn);
    const head = document.getElementsByTagName("header");
    head[0].insertBefore(changement, head[0].children[0]);*/
} else {}



