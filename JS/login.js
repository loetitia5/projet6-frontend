//page login 
/*
function logout() {
const log = sessionStorage.removeItem("user");
location.replace("index.html");
}

const form = document.querySelector(".form");
const inputs = document.querySelectorAll("input");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const email = inputs[0].value;
    const password = inputs[1].value;

    const user = {
        email: email, 
        password: password,
    };
}); 

async function fetchlogin() {
    const reponse = await ('http://localhost:5678/api/users/login');
    const data = await fetch( init,  URL);
    return data;
}
fetchlogin().then(response => {
    console.log(response);
        if (response === "error") {
            location.replace("index.html");
            return response.json();
        } else {
            const error = document.querySelector("#error");
            if (error) {
                error.innerHTML = "l'email ou mot de passe non valide";
            } else {
                const error = document.createElement("p");
                error.setAttribute("id", "error");
                error.innerHTML = "l'email ou mot de passe non valide";
                document.querySelector(".btn-submit").before(error)
            }// Si saisie incorrecte, affichage d'un message d'erreur
        }
    })
fetchlogin().then(data => {
    if (data.token) {
        const log = sessionStorage.setItem("user", data.token);
        //Stockage du token d'authentification 
        const logIn = document.querySelector("#logout");
        logIn.innerText = "logout";
        logIn.addEventListener("click", () => logout());
    } //Passage en mode connecté -> déconnexion possible
})

const init = {
    method: "POST",
    headers: {
        "Content-Type": "application/json; charset=UTF-8" 
    },
    body: JSON.stringify(user),
};   
*/
//fonction pour récupérer les valeurs entrer par l'utilisateur 
function controle() {
    let saisie = document.getElementById("input").value;
    console.log(controle);
}
let user = {
    email: email, 
    password: password,
};

let response = await fetch("http://localhost:5678/api/users/login", {
    method: "POST",
    headers: {
    "Content-Type": "application/json; charset=UTF-8" 
    },
    body: JSON.stringify(user)
});

let result = await response.json();
alert(result.message);

const responseData = await response.json();

const token = responseData;
//Vérifier le code
    if (token === user) {
        //Enregistrement du token et redirection vers la page d'accueil
        window.localStorage.setItem("token", token);
        window.location.href = './index.html';
    } else if(token === "error") {
        errorMessage("L'email ou et le mot de passe n'est pas valide");
    } else {
        errorMessage("Une erreur est survenue lors de la connexion")
    }
