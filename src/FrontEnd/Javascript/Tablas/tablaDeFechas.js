export function listarFechas(fechas, alSeleccionar) {
    
    const tabla = document.getElementById("datos-de-tabla");

    const cabecera = document.getElementById("cabecera-de-tabla");
    const cabeceraMes = document.createElement("th");
    cabeceraMes.textContent = "Mes";
    
    const cabeceraGanancias = document.createElement("th");
    cabeceraGanancias.textContent = "Ganancias del mes";

    cabecera.appendChild(cabeceraMes);
    cabecera.appendChild(cabeceraGanancias);

    fechas.forEach(fecha => {

        const fila = document.createElement("tr");

        const mes = document.createElement("td");
        mes.textContent = fecha.mes;

        const ganancias = document.createElement("td");
        ganancias.textContent = "$" + fecha.ganancias.toLocaleString("es-AR");

        fila.appendChild(mes);
        fila.appendChild(ganancias);

        fila.addEventListener("click", () => {
            alSeleccionar(fecha.categorias);
        });

        tabla.appendChild(fila);
    });
      
}
