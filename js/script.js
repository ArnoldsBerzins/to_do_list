const DARBA_LAPA = document.getElementById('darbaLapa');
let darbi = [];

window.addEventListener('load', (e) => {
    darbi = JSON.parse(localStorage.getItem("darbi") || "[]");
    console.log(darbi)
    render()
});

document.getElementById("jaunsDarbs").addEventListener("click", () => {
    DARBA_LAPA.style.display = "block";
    document.getElementById("jaunsDarbs").style.display = "none";
});

document.getElementById("pievienotDarbu").addEventListener("click", () => {
    DARBA_LAPA.style.display = "none";
    document.getElementById("jaunsDarbs").style.display = "block";
    document.getElementById("darbuSaraksts").style.display = "flex";
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
            <li class="darbs">
                <h3>Darbs: ${darbi[i].Darbs}</h3>
                <h4>Termiņš: ${darbi[i].Termiņš}</h4>
                <button class="izdzest">Delete</button>
            </li>`;

        darbuSaraksts.innerHTML += uzd;
    }
    localStorage.setItem('darbi', JSON.stringify(darbi))
}

const list = document.querySelector("#darbuSaraksts")

list.addEventListener("click", (e) => {
    if(e.target.className == "izdzest") {
        const li = e.target.parentElement;
        li.parentNode.removeChild(li);
        darbi.splice(li, 1);
        localStorage.setItem("darbi", JSON.stringify(darbi));
    }
});
