'use strict'

function showClosePopUp(){
    const nodePopUp = document.querySelector('.mainPopUp');
    if (nodePopUp) {
        nodePopUp.classList.toggle('active');
    } else {
        console.error('❌ .mainPopUp no encontrado');
    }
}

const nodeButtonsPopUp = document.querySelectorAll('.showClosePopUp');

nodeButtonsPopUp.forEach(boton => {
    boton.addEventListener('click', function() {
        showClosePopUp();
    });
});