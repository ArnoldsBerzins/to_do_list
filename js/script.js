const DARBA_LAPA = document.getElementById('darbaLapa');
let darbi = [];

window.addEventListener('load', function(e) {
    darbi = JSON.parse(localStorage.getItem("darbi") || "[]");
    console.log(darbi)
    render();
});

document.getElementById("pievienotDarbu").addEventListener("click", function(e) {

})

document.getElementById("dzestDarbu").addEventListener("click", function(e) {
    div.parentNode.removeChild(div)
})