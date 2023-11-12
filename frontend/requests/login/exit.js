document.querySelectorAll('[data-exit]').forEach(buttonExit => {
    buttonExit.addEventListener('click', () => {
        fetch('../../backend/login/exit.php').then(() => {
            window.location.href = 'index.php';
        });
    });
})