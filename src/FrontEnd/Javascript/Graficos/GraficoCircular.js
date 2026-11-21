export function renderizarGraficoCircular(canvas, etiquetas, precios) {
  if (!canvas) return null;

  const graficoExistente = Chart.getChart(canvas);

  if (graficoExistente) {
    graficoExistente.data.labels = etiquetas;
    graficoExistente.data.datasets[0].data = precios;
    graficoExistente.update();
    return graficoExistente;
  }

  return new Chart(canvas, {
    type: 'pie',
    data: {
      labels: etiquetas,
      datasets: [{
        data: precios
      }]
    },options: {
    responsive: true,
    maintainAspectRatio: false
}
  });
}