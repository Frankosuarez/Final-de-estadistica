export function renderizarGraficoDeDispersion(canvas, puntos) {
  if (!canvas) return null;

  const graficoExistente = Chart.getChart(canvas);

  if (graficoExistente) {
    graficoExistente.data.datasets[0].data = puntos;
    graficoExistente.update();
    return graficoExistente;
  }

  return new Chart(canvas, {
    type: 'scatter',
    data: {
      datasets: [{
        label: 'Dispersion entre precios y ventas',
        data: puntos,
        backgroundColor: 'green'
      }]
    },
    options: {
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
      },
       responsive: true,
       maintainAspectRatio: false
    }
  });
}