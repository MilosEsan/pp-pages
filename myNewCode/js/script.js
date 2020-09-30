let el = document.getElementById('sidebarCollapse');
let el1 = document.getElementById('sidebar')

el.addEventListener("click", function() {
    el1.classList.toggle("active");
});