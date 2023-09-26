const myModal = document.getElementById("modal");

const btnPublier = document.getElementById("buttonPublierPhoto");

const closeModal = document.getElementById("close");

btnPublier.addEventListener('click', () => {
   /* myModal.ariaHidden = "true";*/
    console.log(closeModal);
})

closeModal.addEventListener('click', () => {
  console.log("click");
});



  fetchWorks().then(works => {
    console.log(works); 
    fetchWorksDisplayGallery(works, '#dialog-gallery');
 /*   workDelete();*/

   
    });

function fetchWorksDisplayGallery(works, targetElement) {
    // Sélectionnez l’élément de la galerie 
    const galleryElement = document.querySelector(targetElement);

    works.forEach(jsonWork => {
    //Créer l'élement de figure pour représenter le projet
    const figure = document.createElement('figure');
    figure.classList.add('work');
    figure.dataset.category = jsonWork.categoryId;
        
    //Créer l'élément img pour afficher l'image du projet
    const img = document.createElement('img');
    img.src = jsonWork.imageUrl;
    img.alt = jsonWork.title;
        
    figure.appendChild(img);
    //Si l'élément ciblé est la galerie, créer l'élément figcaption avec son title associé
    if(targetElement === '.gallery') {
        
        const figcaption = document.createElement('figcaption');
        figcaption.textContent = jsonWork.title;
        figure.appendChild(figcaption);
            
    }
    //Pour la galerie de la modale même chose mais au lieu du titre ajouter le mot éditer
    if(targetElement === '#dialog-gallery') {
    /*    const figcaption = document.createElement('figcaption');
        figure.appendChild(figcaption);*/
        renderLinkDeleteIcon(figure);


    }
    //ajouter la figure créer a la galerie 
    galleryElement.appendChild(figure);
    });
    
}

/*
window.onclick = function(event) {
    if(event.target == myModal) {
        myModal.style.display = "none";
    }
}*/
const focusableElementsArray = [
    '[href]',
    'button:not([disabled])',
    'div:not([disabled])',
    'select:not([disabled])',
    '[tabindex]:not([tabindex="-1"])',
  ];
 
document.addEventListener('DOMContentLoaded', () => {
    const triggers = document.querySelectorAll('[aria-haspopup="dialog"]');
    const doc = document.querySelector('.barreLogin');

    const open = function (dialog) {
        dialog.setAttribute('aria-hidden', false);
        doc.setAttribute('aria-hidden', true);
      };
    
    const close = function(dialog) {
        dialog.setAttribute('aria-hidden', true);
        doc.setAttribute('aria-hidden', true);
    }; 
 
    triggers.forEach((trigger) => {
        const dialog = document.getElementById(trigger.getAttribute('aria-controls'));
        const dismissTriggers = dialog.querySelectorAll('[data-dismiss]');
        console.log(dismissTriggers);

        trigger.addEventListener('click', (event) => {
            console.log(trigger);
            console.log(dialog);
            event.preventDefault();
            if(trigger.getAttribute("aria-controls") == "dialog-ajout") {
                const dismissGallery = document.getElementById("dialog");
                close(dismissGallery);
            }
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
    
    if(('#fleche-svg') === ('#frist-page')) {
        console.log(text);
        const flecheModal = document.getElementById('fleche-svg');
        flecheModal.addEventListener("click", function() {
            open('two-page');
        })
    }


});

function renderLinkDeleteIcon(node) {
    const iconSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    const iconPath = document.createElementNS(
      'http://www.w3.org/2000/svg',
      'path'
    );
  
    iconSvg.setAttribute('fill', 'none');
    iconSvg.setAttribute('viewBox', '0 0 9 11');
    iconSvg.setAttribute('height', '11');
    iconSvg.setAttribute('width', '9');
    iconSvg.classList.add('delete-icon');
  
    iconPath.setAttribute(
      'd',
      'M2.71607 0.35558C2.82455 0.136607 3.04754 0 3.29063 0H5.70938C5.95246 0 6.17545 0.136607 6.28393 0.35558L6.42857 0.642857H8.35714C8.71272 0.642857 9 0.930134 9 1.28571C9 1.64129 8.71272 1.92857 8.35714 1.92857H0.642857C0.287277 1.92857 0 1.64129 0 1.28571C0 0.930134 0.287277 0.642857 0.642857 0.642857H2.57143L2.71607 0.35558ZM0.642857 2.57143H8.35714V9C8.35714 9.70915 7.78058 10.2857 7.07143 10.2857H1.92857C1.21942 10.2857 0.642857 9.70915 0.642857 9V2.57143ZM2.57143 3.85714C2.39464 3.85714 2.25 4.00179 2.25 4.17857V8.67857C2.25 8.85536 2.39464 9 2.57143 9C2.74821 9 2.89286 8.85536 2.89286 8.67857V4.17857C2.89286 4.00179 2.74821 3.85714 2.57143 3.85714ZM4.5 3.85714C4.32321 3.85714 4.17857 4.00179 4.17857 4.17857V8.67857C4.17857 8.85536 4.32321 9 4.5 9C4.67679 9 4.82143 8.85536 4.82143 8.67857V4.17857C4.82143 4.00179 4.67679 3.85714 4.5 3.85714ZM6.42857 3.85714C6.25179 3.85714 6.10714 4.00179 6.10714 4.17857V8.67857C6.10714 8.85536 6.25179 9 6.42857 9C6.60536 9 6.75 8.85536 6.75 8.67857V4.17857C6.75 4.00179 6.60536 3.85714 6.42857 3.85714Z'
    );
    iconPath.setAttribute('fill', 'white');
  
    iconSvg.appendChild(iconPath);
  
    return node.appendChild(iconSvg);
  }
  
//clique sur le bouton, ajouter l'affichage de la deuxieme page
const buttonPhotos = document.getElementById("btn-modal");
const onePage = document.getElementById('frist-page');
// const twoPage = document.getElementById('two-page');


function photo() {
const rajoutPhoto = document.getElementById('ajout-photo');
const divphoto = document.getElementById('rajout');
console.log(rajoutPhoto);
rajoutPhoto.addEventListener("click", function(event) {
   /* const ajoutPhoto = document.createElement("div");
    ajoutPhoto.classList.add('divphoto');
    rajoutPhoto.appendChild(ajoutPhoto);
    const imgmodal = document.createElement('img');
    imgmodal.src = jsonWork.imageUrl;
    imgmodal.alt = jsonWork.title;
    ajoutPhoto.appendChild(imgmodal);*/
    event.preventDefault();
    let input = document.createElement('input');
    input.type = 'file';
    input.onchange = _ => {
      // you can use this method to get file and perform respective operations
              let file =   input.files[0];
              console.log(file);
              if (!file.type.startsWith("image/")) {
                return;
              }
          
              const img = document.createElement("img");
              img.classList.add("divphoto");
              img.file = file;
                while (divphoto.firstChild) {
                    divphoto.removeChild(divphoto.firstChild);
}
              divphoto.appendChild(img); 

              const reader = new FileReader();
              reader.onload = (e) => {
                img.src = e.target.result;
              };
              reader.readAsDataURL(file);
          };
    input.click();
    })
}
photo();

async function envoi(event) {
  event.preventDefault();
  console.log(envoi);
  const divRajout = document.getElementById("rajout");
  const infoElement  = document.getElementById("info-element");
  let response = await fetch("http://localhost:5678/api/works", {
      method: "POST",
      headers: {
      "Content-Type": "application/json; charset=UTF-8" 
      },
      body: JSON.stringify({
          svg: imageUrl,
          input: titre,
          select: categories
      })
  })
}
// Get references to form elements
const myForm = document.getElementById("modal-form");
const submitButton = document.getElementById("valider-ajout");

// Add event listeners to form fields
myForm.addEventListener("button", updateButtonColor);

// Function to update button color
function updateButtonColor() {
  const allFieldsCompleted = Array.from(myForm.elements).every((field) => {
    return field.tagName === "BUTTON" && field.required && field.value.trim() !== "";
  });

  if (allFieldsCompleted) {
    submitButton.style.backgroundColor = "#1D6154"; // Change to desired color
  } else {
    submitButton.style.backgroundColor = "#A7A7A7"; // Reset to initial color
  }
}


 
/*}
/*
titleInput.addEventListener('input', checkFormFields);
categorySelect.addEventListener('change', checkFormFields);
photoInput.addEventListener('change', checkFormFields);
  */

/*
//supprimer un projet
async function workDelete(idWork) {
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
}*/
/*
const form = document.getElementById('modal-form');
// Création de la photo de localisation
const addPhoto = document.createElement( 'modal-add-photo');

const svg = document.querySelector("svg");
addPhoto.appendChild(svg);

const containerImg = document.createElement('img', { id:'container-image'});
containerImg.style.display = 'none';

const photoInput = document.createInputElement('file', {
  accept: 'image/jpeg, image/png','max-size': '4194304',style: 'display: none'  
});
const addButton = createButtonElement( 'btn-ajout');
addButton.textContent = '+ Ajouter photo';

const infoParagraph = createElement('p');
infoParagraph.textContent = 'jpg, png : 4 mo max';


 //il déclenche la sélection du fichier
addButton.addEventListener('click', function() {
    photoInput(); 
  });
  containerImg.addEventListener('click', function() {
    photoInput(); 
  });
   
  photoInput.addEventListener('change', function(event) {
    const selectedFile = event.target.files[0];
   
    if (selectedFile) {
      const reader = new FileReader();
  
      reader.addEventListener('load', function() {
        const imageUrl = reader.result;
        
        containerImg.style.display = 'block';
        containerImg.src = imageUrl;
        addButton.style.visibility = 'hidden';
  
        const fileName = selectedFile.name;
  
        const formattedFileName = formatFileName(fileName);
  
        titleInput.value = formattedFileName;
      });
  
      reader.readAsDataURL(selectedFile);
    } else {
  
      containerImg.style.display = 'none';
      containerImg.src = '';
      addButton.style.visibility = 'visible';
 
      titleInput.value = '';
    }
  });*/