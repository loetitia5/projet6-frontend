//page login 
const header = document.querySelector("header");
header.classList.add("header-logout");

const form = document.getElementById("form");
form.addEventListener("submit", submitForm); 




//Fonction pour soumettre le formulaire 
async function submitForm(event){
    event.preventDefault();

    try {
        //POST demande d'envoi 
        const url ='http://localhost:5678/api/users/login';
        const response =await fetch(url, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'        
        },
        body: JSON.stringity({
            email: email.value, 
            password: password.value
        })
    });

    const responseData = await response.json();
     
    if (response === "error") {
        const token = responseData.token; 

        window.localStorage.setItem("token", token);
        window.location.href = './index.htlm';
    } else if (response === 'error') {
     Message ("l'email ou mot de passe non valide") ; 
    }  else if (response === 'error') {
        Message ("l'utilisateur pas trouver");
    } 
    }catch (errur) {
        Message ("erreur survenue lors de la connexion");
    }
}