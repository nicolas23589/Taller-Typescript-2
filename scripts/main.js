import { dataSeries } from "./Data.js";
const seriesTbody = document.getElementById('seriesTbody');
const containerCard = document.getElementById('container-card');
seriesTbody.addEventListener('click', function (event) {
    const activeElement = event.target;
    if (activeElement.tagName == 'TH' || activeElement.tagName == 'TD') {
        const fila = activeElement.parentElement;
        const id = fila.cells[0].textContent;
        dataSeries.forEach((serie) => {
            if (id !== null && parseInt(id) === serie.id) {
                let selectedSerie = serie;
                mostrarSerie(selectedSerie);
            }
        });
    }
});
function mostrarSerie(selectedSerie) {
    let titulo = document.getElementById('card-titulo');
    let imagen = document.getElementById('card-imagen');
    let descripcion = document.getElementById('card-cuerpo');
    let link = document.getElementById('card-enlace');
    titulo.innerText = selectedSerie.name;
    imagen.setAttribute("src", selectedSerie.linkImage);
    descripcion.innerText = selectedSerie.description;
    link.setAttribute("href", selectedSerie.linkWebPage);
    link.innerText = selectedSerie.linkWebPage;
}
function mostrarSeries(series) {
    series.forEach(c => {
        let trElement = document.createElement("tr");
        trElement.innerHTML = `<td>${c.id}</td>
                           <td>${c.name}</td>
                           <td>${c.channel}</td>
                           <td>${c.seasons}</td>`;
        seriesTbody.appendChild(trElement);
    });
}
function getAverageSeasons(series) {
    let average = 0;
    series.forEach((serie) => average = average + serie.seasons);
    average = Math.round(average / series.length);
    return average;
}
function mostrarPromedio() {
    let avarage = getAverageSeasons(dataSeries);
    let avarageMostrado = document.getElementById("avarage");
    avarageMostrado.innerText = "Seasons avarage: " + avarage.toString();
}
mostrarSeries(dataSeries);
mostrarPromedio();
