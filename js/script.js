const DARBA_LAPA = document.getElementById('darbaLapa');
let darbi = [];

window.addEventListener('load', function(e) {
    darbi = JSON.parse(localStorage.getItem("darbi") || "[]");
    console.log(darbi)
    render()
});

document.getElementById("jaunsDarbs").addEventListener("click", function(paradit) {
    DARBA_LAPA.style.display = "block";
});

document.getElementById("pievienosanasPoga").addEventListener("click", function(paslept){
    document.getElementById("pievienosanasPoga").style.display = "none";
});

document.getElementById('pievienotDarbu').addEventListener('click', function(e) {
    document.getElementById("pievienosanasPoga").style.display = "flex";
    document.getElementById("darbuSaraksts").style.display = "flex";
    DARBA_LAPA.style.display = "none";
    let uzd = {Darbs: Darbs.value, Termiņš: Termiņš.value};

    Darbs.value = "";
    Termiņš.value = "";

    darbi.push(uzd);

    render();
});

function render() {
    let darbuSaraksts = document.getElementById('darbuSaraksts');
    darbuSaraksts.innerHTML = "";

    for(let i = 0; i < darbi.length; i++) {
        let uzd = `
            <div class="darbs">
                <h3>Darbs: ${darbi[i].Darbs}</h3>
                <h4>Termiņš: ${darbi[i].Termiņš}</h4>
                <button>Delete</button>
            </div>`;

        darbuSaraksts.innerHTML += uzd;
    }
    localStorage.setItem('Darbi', JSON.stringify(darbi))
}
document.getElementById("")