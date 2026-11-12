/* Új játék gombra kattintva megjelenítjük a játékteret 
1. meg kell fogni a gombot és a játékteret
2. rátesszük az eseménykezelőt a gombra
3. beleírjuk a megfelelő html kódot
*/
const ujJatekGomb = document.getElementById("ujjatek")
const jatekTerElem= document.getElementsByClassName("jatekter")
ujJatekGomb.addEventListener("click", megjelenit)
function megjelenit(){
    const htmlKod = `
        <div id="gep">
                    <h2>A Gép tippje</h2>
                    <div class="kep">
                        <img src="kepek/paper.png" alt="">
                    </div>    
                </div>
                <div id="jatekos">
                    <h2>Játékos</h2>
                    <div class="gombok">
                        <button id="ko">KŐ</button>
                        <button id="papir">PAPÍR</button>
                        <button id="ollo">OLLÓ</button>
                    </div>
                    <div class="kep">
                        <img src="kepek/stone.png" alt="kopapirollo">
                    </div>
                </div>
    `
    jatekTerElem[0].innerHTML=""
    jatekTerElem[0].insertAdjacentHTML("beforeend", htmlKod)

    const jatekGombok = document.querySelectorAll(".gombok button")
    jatekGombok[0].addEventListener("click", kivalaszt)
    jatekGombok[1].addEventListener("click", kivalaszt)
    jatekGombok[2].addEventListener("click", kivalaszt)

    function kivalaszt(event){
        console.log(event.target.id)
    }
}
