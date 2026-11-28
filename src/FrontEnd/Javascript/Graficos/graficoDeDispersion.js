import { calcularRegresion } from "../../../Backend/FuncionesEstadisticas.js";

export function renderizarGraficoDeDispersion(canvas, puntos) {

    if (!canvas || puntos.length < 2) return null;

    const regresion = calcularRegresion(puntos);

    const xMin = Math.min(...puntos.map(p => p.x));
    const xMax = Math.max(...puntos.map(p => p.x));

    const recta = [
        {
            x: xMin,
            y: regresion.a + regresion.b * xMin
        },
        {
            x: xMax,
            y: regresion.a + regresion.b * xMax
        }
    ];

    const graficoExistente = Chart.getChart(canvas);

    if (graficoExistente) {

        graficoExistente.data.datasets[0].data = puntos;
        graficoExistente.data.datasets[1].data = recta;

        graficoExistente.update();

        return graficoExistente;
    }

    return new Chart(canvas, {

        type: 'scatter',

        data: {
            datasets: [
                {
                    label: 'Dispersión entre precios y ventas',
                    data: puntos,
                    backgroundColor: 'green'
                },
                {
                    label: 'Recta de regresión',
                    data: recta,
                    showLine: true,
                    pointRadius: 0,
                    borderColor: 'green',
                    borderWidth: 2
                }
            ]
        },

        options: {
            responsive: true,
            maintainAspectRatio: false,

            scales: {
                x: {
                    title: {
                        display: true,
                        text: 'Precio'
                    }
                },

                y: {
                    title: {
                        display: true,
                        text: 'Cantidad de ventas'
                    }
                }
            }
        }
    });
}



// import { calcularRegresion } from "../../../Backend/FuncionesEstadisticas.js";

// export function renderizarGraficoDeDispersion(canvas, puntos) {
//   if (!canvas) return null;

//   const graficoExistente = Chart.getChart(canvas);

//   if (graficoExistente) {
//     graficoExistente.data.datasets[0].data = puntos;
//     graficoExistente.update();
//     return graficoExistente;
//   }

//   return new Chart(canvas, {
//     type: 'scatter',
//     data: {
//       datasets: [{
//         label: 'Dispersion entre precios y ventas',
//         data: puntos,
//         backgroundColor: 'green'
//       }]
//     },
//     options: {
//       scales: {
//         x: {
//           title: {
//             display: true,
//             text: 'Precio'
//           }
//         },
//         y: {
//           title: {
//             display: true,
//             text: 'Cantidad de ventas'
//           }
//         }
//       },
//        responsive: true,
//        maintainAspectRatio: false
//     }
//   });
// }