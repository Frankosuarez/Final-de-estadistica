export function renderizarGraficoCircular(categorias) {
  let canvas = document.getElementById("grafico-circular");
  if (!canvas) return null;
  
  const graficoExistente = Chart.getChart(canvas);
  let nombres = categorias.map(categoria => categoria.nombre);
  let ganancias = categorias.map(categoria => categoria.ganancias);

  if (graficoExistente) {
    graficoExistente.data.labels = nombres;
    graficoExistente.data.datasets[0].data = ganancias;
    graficoExistente.update();
    return graficoExistente;
  }

  return new Chart(canvas, {
    type: 'pie',
    data: {
      labels: nombres,
      datasets: [{
        data: ganancias
      }]
    },options: {
    responsive: true,
    maintainAspectRatio: false
}
  });
}