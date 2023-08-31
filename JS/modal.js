const myModal = document.getElementById("modal");

const btnPublier = document.getElementById("buttonPublierPhoto");

const closeModal = document.getElementById("close");

btnPublier.addEventListener('click', () => {
    myModal.ariaHidden = "false";
    console.log(closeModal);
})

closeModal.addEventListener('click', () => {
  console.log("click");
});

/*
async function fetchWorks() {
    const reponse = await fetch ('http://localhost:5678/api/works');
    const data = await reponse.json();
    return data;
  }
  fetchWorks().then(works => {
    console.log(works); 
    fetchWorksDisplayGallery(works, '#modal-gallery');
  
    });
*/
fetchWorksDisplayGallery(works, '#modal-gallery');
/*
window.onclick = function(event) {
    if(event.target == myModal) {
        myModal.style.display = "none";
    }
}*//*
const focusableElementsArray = [
    '[href]',
    'button:not([disabled])',
    'input:not([disabled])',
    'select:not([disabled])',
    'textarea:not([disabled])',
    '[tabindex]:not([tabindex="-1"])',
  ];*/
  /*
document.addEventListener('DOMContentLoaded', () => {
    console.log("okclose")
    const triggers = document.querySelectorAll('[aria-haspopup="dialog"]');
    const doc = document.querySelector('.barreLogin');

    const open = function (dialog) {
        dialog.setAttribute('aria-hidden', false);
        doc.setAttribute('aria-hidden', true);
      };
    
    const close = function(dialog) {
        dialog.setAttribute('aria-hidden', false);
        doc.setAttribute('aria-hidden', true);
    };

    triggers.forEach((trigger) => {
        const dialog = document.getElementById(trigger.getAttribute('aria-controls'));
        const dismissTriggers = dialog.querySelectorAll('[data-dismiss]');

        trigger.addEventListener('click', (event) => {
            event.preventDefault();
      
            open(dialog);
        });

        dismissTriggers.forEach((dismissTrigger) => {
            const dismissDialog = document.getElementById(dismissTrigger.dataset.dismiss);
        
            dismissTrigger.addEventListener('click', (event) => {
                event.preventDefault();
        
                close(dismissDialog);
            });
        });
        window.addEventListener('click', (event) => {
            if(event.target === dialog) {
                close(dialog);
            }
        });
    });
});
*/
/*
//Masquer la deuxieme page 
secondPageModal('none');
//classe modal_trigger est ajoutée sur le bouton X de fermeture, sur le bouton "modifier"
createCloseButton();
const elements = document.querySelectorAll("#directionModal .positionModal, overlay"); 
elements.forEach(element => {
    element.classList.add('modal-trigger')
});
//récupérer toute la classe madal-trigger
const trigger = document.querySelectorAll("modal-trigger");
//parcourir les differentes classes et en cliquant sur l'une d'entre elles
trigger.forEach(triggers =>triggers.addEventListener("click", toogleModal))

function toogleModal() {
    const modal = document.getElementById("modal");
    modal.classList.toggle("active");

    const elementModal = document.querySelector(".wrapper");
    //pour scoller de haut en bas
    elementModal.scrollIntoView({ behavior: "smooth", block: "start" });
}
fetchWorksDisplayGallery("#modal-gallery");
//clique sur le bouton, ajouter l'affichage de la deuxieme page
const buttonPhoto = document.querySelector("btn-modal");
buttonPhoto.addEventListener('click', pageSecondModal);


//fonction pour créer le bouton de fermeture de la fenêtre
function createCloseButton() {
    const closeButton = doFilter(["modal-close", "modal-trigger"]);

    const iconClose = filterProjet("fa-solid", "fa-xmark");

    document.querySelector(".wrapper").appendChild(closeButton);
    closeButton.appendChild(iconClose);
    return closeButton
}; 

//fonction pour créer le bouton précedent de la fenêtre
function createButton() {
    const buttonModal = doFilter(['modal-button']);

    const iconModal = filterProjet("fa-solid", "fa-arrow-left-long");
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
//affichage gallery
fetchWorksDisplayGallery();
//supprimer un projet
function workDelete(idWork) {
const token = window.localStorage.getItem('token');

//demande Delete à l'API
fetch(`http://localhost:5678/api/works/${idWork}`, {
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
function deleteButton(figure , idWork) {
    const buttonDelete = doFilter(['delete-button']);
    const iconDelete = filterProjet("fa-solid");
    buttonDelete.style.cursor = 'pointer';
    buttonDelete.appendChild(iconDelete);
    figure.appendChild(buttonDelete);

//button de confirmation apparaît avant la suppression
    deleteButton.addEventListener('click', () => {
        const confirmDelete = doFilter(['confirm-delete'], "Confirmer suppression");
        confirmDelete.addEventListener("click", function() {
            workDelete(idWork);
            figure.removeChild(confirmDelete);
        });
        figure.appendChild(confirmDelete);
    });
    return deleteButton
}

*/