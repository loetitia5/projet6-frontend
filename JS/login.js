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
    const token = responseData.token; 
    //Vérifier le code
    if(token) {
            //Enregistrement du token et redirection vers la page d'accueil
            window.localStorage.setItem("token", token);
            window.location.href = './index.html';
            
    } else {
        alert("L'email ou et le mot de passe n'est pas valide");
    } 
}

const btn = document.getElementById("submit");
btn.addEventListener("click", controle);







