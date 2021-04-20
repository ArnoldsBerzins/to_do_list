const DARBA_LAPA = document.getElementById('darbaLapa');
let darbi = [];

window.addEventListener('load', function(e) {
    darbi = JSON.parse(localStorage.getItem("darbi") || "[]");
    console.log(darbi)
    render()
});

document.getElementById("jaunsDarbs").addEventListener("click", function(paradit) {
    document.getElementById("darbaLapa").style.display = "block";
    console.log("asdadw");
});

document.getElementById("pievienosanasPoga").addEventListener("click", function(paslept){
    document.getElementById("pievienosanasPoga").style.display = "none"
});

document.getElementById("pievienotDarbu").addEventListener("click", function(pievienot) {
    document.getElementById("pievienosanasPoga").style.display = "flex"
    document.getElementById("darbaLapa").style.display = "none"
});

document.getElementById('pievienotDarbu').addEventListener('click', function(e) {
    let uzd = {Darbs: Darbs.value, Termiņš: Termiņš.value};

    Darbs.value = "";
    Termiņš.value = "";

    darbi.push(uzd);

    render();
});

function render() {
    let darbuSaraksts = document.getElementById('darbuSaraksts');
    darbuSaraksts.innerHTML = "";

    for(let i = 1; i < darbi.length; i++) {
        let uzd = `
        <div class="darbs">
            <h3>Darbs: ${darbi[i].Darbs}</h3>
            <h4>Termiņš: ${darbi[i].Termiņš}</h4>
        </div>`;

        darbuSaraksts.innerHTML += uzd;
    }
    localStorage.setItem('Darbi', JSON.stringify(darbi))
}