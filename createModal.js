document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.details-button');
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const modalId = button.getAttribute('data-modal-id');
            const modal = document.getElementById('modal-' + modalId);
        
            if (modal) {
                modal.classList.add('show');
            }
        });
    });

    const closeModalButtons = document.querySelectorAll('.close-modal');
    closeModalButtons.forEach(closeBtn => {
        closeBtn.addEventListener('click', function() {
            const modal = closeBtn.closest('.modal');
            if (modal) {
                modal.classList.remove('show');
            }
        });
    });
});