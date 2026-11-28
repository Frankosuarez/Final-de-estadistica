import { calcularCuartiles } from "../../../Backend/FuncionesEstadisticas.js";

export function renderizarGraficoDeCaja(canvas, precios) 
{ 
    const cuartiles = calcularCuartiles(precios);


    const graficoExistente = Chart.getChart(canvas);

    const datosBoxplot = [precios];

    // Convertir los valores atípicos en puntos
    const datosAtipicos = cuartiles.valoresAtipicos.map(valor => ({
        x: 0,
        y: valor
    }));

    if (graficoExistente) {
        graficoExistente.data.datasets[0].data = datosBoxplot;
        graficoExistente.data.datasets[1].data = datosAtipicos;

        graficoExistente.update();
        return graficoExistente;
    }

    return new Chart(canvas, {
        type: 'boxplot',

        data: {
            labels: ['Distribución de precios'],

            datasets: [
                {
                    label: 'Precios',
                    data: datosBoxplot,

                    backgroundColor: 'rgba(54, 162, 235, 0.3)',
                    borderColor: 'rgb(54, 162, 235)',
                    borderWidth: 2,

                    outlierRadius: 0
                },
                {
                    type: 'scatter',
                    label: 'Valores atípicos',
                    data: datosAtipicos,

                    backgroundColor: 'rgb(54, 162, 235)',
                    borderColor: 'rgb(54, 162, 235)',
                    pointRadius: 5,
                    pointHoverRadius: 7
                }
            ]
        },

        options: {
            responsive: true,
            maintainAspectRatio: false,

            scales: {
                x: {
                    min: -0.5,
                    max: 0.5
                }
            }
        }
    });
}
    //const graficoExistente = Chart.getChart(canvas);
  
//   const datosBoxplot = [precios];

//   if (graficoExistente) {
//       graficoExistente.data.datasets[0].data = datosBoxplot;
//       graficoExistente.update();
//       return graficoExistente;
//   }

//   return new Chart(canvas, {
//       type: 'boxplot',

//       data: {
//           labels: ['Distribución de precios'],
//           datasets: [{
//               label: 'Precios',
//               data: datosBoxplot,

//               backgroundColor: 'rgba(54, 162, 235, 0.3)',
//               borderColor: 'rgb(54, 162, 235)',
//               borderWidth: 2,

//               outlierColor: 'red',
//               outlierRadius: 5,
//               outlierBorderColor: 'red',
//               outlierBorderWidth: 2
//           }]
//       },

//       options: {
//           responsive: true,
//           maintainAspectRatio: false
//       }
//   });
// }
