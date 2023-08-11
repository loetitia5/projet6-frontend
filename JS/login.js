//page login 
//fonction pour récupérer les valeurs entrer par l'utilisateur 
async function controle(event) {
    event.preventDefault();
    const mail = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    let response = await fetch("http://localhost:5678/api/users/login", {
        method: "POST",
        headers: {
        "Content-Type": "application/json; charset=UTF-8" 
        },
        body: JSON.stringify({
            email: mail,
            password: password
        })
    });
    const responseData = await response.json();
    console.log(responseData);
    //Vérifier le code
    if (responseData !== 404) {
        //Enregistrement du token et redirection vers la page d'accueil
        window.localStorage.setItem("token", controle);
        window.location.href = './index.html';
    } else(responseData === 404) ;{
        alert("L'email ou et le mot de passe n'est pas valide");
    } if (responseData === "erreur") {
        alert("Une erreur est survenue lors de la connexion")
    }
}
const btn = document.getElementById("submit");
btn.addEventListener("click", controle);









