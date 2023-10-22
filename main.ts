import { Serie } from "./Serie.js";
import { dataSeries } from "./Data.js";
const seriesTbody: HTMLElement = document.getElementById('seriesTbody')!; 


seriesTbody.addEventListener('click', function(event) {
  const activeElement = event.target as HTMLElement;

  if (activeElement.tagName == 'TH' || activeElement.tagName == 'TD') {
      const fila = activeElement.parentElement as HTMLTableRowElement;
      const id = fila.cells[0].textContent;

      dataSeries.forEach((serie) => {
          if (id !== null && parseInt(id) === serie.id) {
              let selectedSerie: Serie = serie;
              mostrarSerie(selectedSerie);
          }
      });
  }
});

function mostrarSerie(selectedSerie: Serie) {
  let titulo: HTMLElement = document.getElementById('card-titulo')!;
  let imagen: HTMLElement = document.getElementById('card-imagen')!;
  let descripcion: HTMLElement = document.getElementById('card-cuerpo')!;
  let link: HTMLElement = document.getElementById('card-enlace')!;


  titulo.innerText= selectedSerie.name;
  imagen.setAttribute("src", selectedSerie.linkImage);
  descripcion.innerText= selectedSerie.description;
  link.setAttribute ("href", selectedSerie.linkWebPage);
  link.innerText= selectedSerie.linkWebPage;

}

function mostrarSeries(series: Serie[]): void {
    series.forEach(c => {
    let trElement = document.createElement("tr");
    trElement.innerHTML = `<td>${c.id}</td>
                           <td>${c.name}</td>
                           <td>${c.channel}</td>
                           <td>${c.seasons}</td>`;
    seriesTbody.appendChild(trElement);
  });
}


function getAverageSeasons(series: Serie[]): number {
    let average: number = 0;
    series.forEach((serie) => average = average + serie.seasons);
    average= Math.round( average/series.length);
    return average;
  }

  function mostrarPromedio(): void {
    let avarage: number = getAverageSeasons(dataSeries);
    let avarageMostrado: HTMLElement = document.getElementById("avarage")!;
    avarageMostrado.innerText = "Seasons avarage: " + avarage.toString();

}



mostrarSeries(dataSeries);
mostrarPromedio();
