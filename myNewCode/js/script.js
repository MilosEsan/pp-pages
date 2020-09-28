var el = document.getElementById('sidebarCollapse');
var el1 = document.getElementById('sidebar')

el.addEventListener("click", function() {
    el1.classList.toggle("active");
});