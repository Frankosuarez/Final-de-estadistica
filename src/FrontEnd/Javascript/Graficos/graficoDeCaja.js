export function renderizarGraficoDeCaja(canvas, precios) {
  if (!canvas) return null;

  const graficoExistente = Chart.getChart(canvas);
  const datosBoxplot = [precios];

  if (graficoExistente) {
    graficoExistente.data.datasets[0].data = datosBoxplot;
    graficoExistente.update();
    return graficoExistente;
  }

  return new Chart(canvas, {
    type: 'boxplot',
    data: {
      labels: ['Distribucion de precios'],
      datasets: [{
        label: 'Precios',
        data: datosBoxplot
      }]
    },
    options: {
    responsive: true,
    maintainAspectRatio: false
}
  });
}