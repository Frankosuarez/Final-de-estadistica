export function RenderizarGraficoDeLineas(fechas) {

    const grafico = document.getElementById("grafico-de-lineas");

    new Chart(grafico, {
        type: "line",

        data: {
            labels: fechas.map(fecha => fecha.mes),

            datasets: [{
                label: "Ganancias mensuales",
                data: fechas.map(fecha => fecha.ganancias),

                borderColor: "#16a34a",
                backgroundColor: "rgba(22, 163, 74, 0.15)",

                borderWidth: 3,
                pointRadius: 5,
                pointHoverRadius: 8,

                fill: true,
                tension: 0.3
            }]
        },

        options: {
            responsive: true,
            maintainAspectRatio: false,

            plugins: {
                title: {
                    display: true,
                    text: "Progreso de ganancias mensuales"
                },
                legend: {
                    display: true
                }
            },

            scales: {
                x: {
                    title: {
                        display: true,
                        text: "Meses"
                    }
                },

                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: "Ganancias ($)"
                    }
                }
            }
        }
    });
}
