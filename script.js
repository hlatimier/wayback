let currentURL = "";

/* génération des années */
const yearsDiv = document.getElementById("years");

for(let y=2000; y<=2026; y++){
    const el = document.createElement("div");
    el.className = "year";
    el.innerText = y;

    el.onclick = () => generateCalendar(y);

    yearsDiv.appendChild(el);
}

/* calendrier */
function generateCalendar(year){
    const cal = document.getElementById("calendar");
    cal.innerHTML = "";

    for(let i=1;i<=30;i++){
        const d = document.createElement("div");
        d.className = "day";
        d.innerText = i;

        d.onclick = () => {
            document.getElementById("selectedDate").innerText =
                `Archive sélectionnée : ${i}/07/${year}`;

            loadFrame(currentURL);
        };

        cal.appendChild(d);
    }
}

/* recherche URL */
function loadArchive(){
    let url = document.getElementById("urlInput").value;

    if(!url){
        alert("Entre une URL !");
        return;
    }

    if(!url.startsWith("http")){
        url = "https://" + url;
    }

    currentURL = url;

    document.getElementById("info").innerText =
        "Recherche en cours pour : " + url;

    generateCalendar(2026);

    loadFrame(url);
}

/* affichage dans iframe */
function loadFrame(url){
    if(!url) return;
    document.getElementById("frame").src = url;
}
