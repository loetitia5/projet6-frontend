//Masquer la deuxieme page 
secondPageModal('none');
//fonction pour créer le bouton de fermeture de la fenêtre
function createCloseButton() {
    const closeButton = createButtonElement(["modal-close", "modal-trigger"]);

    const iconClose = createIconElement("fa-solid", "fa-xmark");

    document.querySelector(".wrapper").appendChild(closeButton);
    closeButton.appendChild(iconClose);
    return closeButton
}; 

//fonction pour créer le bouton précedent de la fenêtre
function createButton() {
    const buttonModal = createButtonElement(['modal-button']);

    const iconModal = createIconElement("fa-solid", "fa-arrow-left-long");
    buttonModal.appendChild(iconModal);

    document.getElementById("two-page").appendChild(buttonModal);

    buttonModal.addEventListener('click', pageFristModal)
    return buttonModal;
}
//function permettant d'afficher ou non la premiére page
function firstPageModal(displayValue) {
    const onePage = document.getElementById('frist-page');
    setDisplayStyle(onePage, displayValue);
};
//function permettant d'afficher ou non la deuxieme page
function secondPageModal(displayValue) {
    const twoPage = document.getElementById('two-page');
    setDisplayStyle(twoPage, displayValue);
    if(displayValue !== "none") {
        createButton();
    }
};
//afficher la premieme page
function pageSecondModal() {
    firstPageModal('none');
    secondPageModal('flex');
};
//afficher la deuxieme page
function pageFristModal() {
    firstPageModal('flex');
    secondPageModal('none');
};


//supprimer un projet
function workDelete(workId) {
const token = window.localStorage.getItem('token');

//demande Delete à l'API
fetch(`http://localhost:5678/api/works/${workId}`, {
    method: 'DELETE',
    headers: {
        'Authorization' : `Bearer ${token}`,
    },
})
    .then((responses) => {
        if (responses === "error") {
            //Aprés la suppression, actualiser l'affichage de la galerie 
            freshGallery("#modal-gallery");
            freshGallery(".gallery");
        } else if(responses === error) {
            //Gérer les erreurs de suppression
            errorMessage("Utilisateur non valide",".modal-title");
        } else {
            errorMessage("Une erreur est survenue lors de la connexion", ".modal-title");
        }
    });
}

//Fonction pour afficher une icone de suppression 
function deteleButton(figure , workId) {
    const buttonDelete = createElementbutton(['delete-button']);
    const iconDelete = createElementIcon("fa-solid");
    buttonDelete.style.cursor = 'pointer';
    buttonDelete.appendChild(iconDelete);
    figure.appendChild(buttonDelete);
}