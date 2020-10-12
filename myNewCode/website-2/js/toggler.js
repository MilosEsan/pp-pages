//input toggler

var input = document.getElementById("input-collapse");
var y = document.getElementById("toggler1");
var z = document.getElementById("toggler1-close");

function toggler1(x) {;
    if (!x.style.display || x.style.display === "none") {
        x.style.display = "inline-block";
        y.style.display = "none";
        z.style.display = "flex";
        x.className = "animated fadeInLeft";
    } else {
        y.style.display = "flex";
        z.style.display = "none";
        x.classList.toggle("fadeInLeft");
        x.classList.toggle("slideOutDown");
    }

    if (x.className === "animated slideOutDown") {
        setTimeout(function() {
            x.style.display = "none";
        }, 1000)
    }

}




//sidebar toggler

let el = document.getElementById('sidebarCollapse');
let el1 = document.getElementById('sidebar')

el.addEventListener("click", function() {
    el1.classList.toggle("active");
});