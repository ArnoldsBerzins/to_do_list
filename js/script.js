const DARBA_LAPA = document.getElementById('darbaLapa');
let darbi = [];

window.addEventListener('load', function(e) {
    darbi = JSON.parse(localStorage.getItem("darbi") || "[]");
    console.log(darbi)
});

document.getElementById("jaunsDarbs").addEventListener("click", function(paradit) {
    document.getElementById("darbaLapa").style.display = "block";
});

document.getElementById("pievienosanasPoga").addEventListener("click", function(paslept){
    document.getElementById("pievienosanasPoga").style.display = "none"
});

document.getElementById("dzestDarbu").addEventListener("click", function(dzest) {
    div.parentNode.removeChild(div)
});

document.getElementById("pievienotDarbu").addEventListener("click", function(pievienot) {
    document.getElementById("pievienosanasPoga").style.display = "flex"
    document.getElementById("darbaLapa").style.display = "none"
});
document.getElementById("pievienotDarbu").addEventListener("click", function(e) {
    
});