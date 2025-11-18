// js/scripts.js

document.addEventListener('DOMContentLoaded', () => {
    // 1. Obtener todos los botones de fase TOGAF
    const phaseButtons = document.querySelectorAll('.togaf-phase');

    // 2. Obtener el contenedor principal del modal
    const modal = document.getElementById('togaf-modal');

    // 3. Obtener el botón de cierre del modal
    const closeButton = document.querySelector('.close-button');

    // 4. Asignar el evento click a cada botón de fase
    phaseButtons.forEach(button => {
        button.addEventListener('click', () => {
            const phaseId = button.getAttribute('data-phase-id');
            const phaseContent = document.getElementById(phaseId);
            const modalBody = document.getElementById('modal-body-content');

            // Limpiar contenido previo y agregar el nuevo contenido
            modalBody.innerHTML = '';
            modalBody.appendChild(phaseContent.cloneNode(true));
            
            // Mostrar el modal
            modal.style.display = 'block';

            // Asegurar que el contenido clonado se muestre (estaba hidden)
            modalBody.querySelector('.modal-content-wrapper').style.display = 'block';
        });
    });

    // 5. Cerrar el modal al hacer clic en la "x"
    closeButton.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    // 6. Cerrar el modal al hacer clic fuera de él
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});