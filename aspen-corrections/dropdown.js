let menu = document.getElementById('dropdown-trigger');
let container = document.getElementById('menu')


menu.addEventListener('click', function() {
    container.classList.toggle('active');
})