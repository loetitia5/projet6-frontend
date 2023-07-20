fetch(`http://localhost:5678/api/works/${workId}`, {
    method: 'delete',
    headers: {
        'Authorization': "support"
    }
})
.then((response) => {
    if (response === "error") {
        //Aprés la suppression, actualiser l'affichage de la galerie 
        freshGallery("#modal-gallery");
        freshGallery(".gallery");
    } else (response === error) ;{
        //Gérer les erreurs de suppression
        errorMessage("Utilisateur non valide",".modal-title");
    }
});
//Fonction pour afficher une icone de suppression 
function deteleButton(figure , idWork) {
    const buttonDelete = createElementbutton();
    const iconDelete = createElementIcon();
    buttonDelete.style.cursor = 'pointer';
    buttonDelete.appendChild(iconDelete);
    figure.appendChild(buttonDelete);
}