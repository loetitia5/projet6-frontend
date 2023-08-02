//page login 
/*
function logout() {
const log = sessionStorage.removeItem("userId");
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
*/ 
async function fetchlogin() {
    const reponse = await ('http://localhost:5678/api/users/login');
    const data = await fetch( URL, init);
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
    body: JSON.stringify(userId),
};   
/*
let myRequest = new Request('http://localhost:5678/api/users/login', init); 

fetch(myRequest, init)
    .then(function(response)  {
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
    .then(function(data) {
        if (data.token) {
            const log = sessionStorage.setItem("user", data.token);
            //Stockage du token d'authentification 
            const logIn = document.querySelector("#logout");
            logIn.innerText = "logout";
            logIn.addEventListener("click", () => logout());
        } //Passage en mode connecté -> déconnexion possible
    })


    
*/
