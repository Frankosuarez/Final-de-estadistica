import { calcularPorcentajeGanancia } from "../../../Backend/FuncionesEstadisticas.js";

export function listarCategorias(categorias, alSeleccionar) {

    const tabla = document.getElementById("datos-de-tabla");

    const cabecera = document.getElementById("cabecera-de-tabla");

    const cabeceraCategoria = document.createElement("th");
    cabeceraCategoria.textContent = "Categoria de productos";
    
    const cabeceraGanancias = document.createElement("th");
    cabeceraGanancias.textContent = "Ganancias de categoria";

    const cabeceraPorcentaje = document.createElement("th");
    cabeceraPorcentaje.textContent = "Porcentaje de ganancia total"

    cabecera.appendChild(cabeceraCategoria);
    cabecera.appendChild(cabeceraGanancias);
    cabecera.appendChild(cabeceraPorcentaje);

    categorias.forEach(categoria => {

        const fila = document.createElement("tr");

        const nombre = document.createElement("td");
        nombre.textContent = categoria.nombre;

        const ganancias = document.createElement("td");
        ganancias.textContent = "$" + categoria.ganancias.toLocaleString("es-AR");;

        const porcentaje = document.createElement("td");
        porcentaje.textContent = "%" + calcularPorcentajeGanancia(categorias, categoria);

        fila.appendChild(nombre);
        fila.appendChild(ganancias);
        fila.appendChild(porcentaje);

        fila.addEventListener("click", () => {
            alSeleccionar(categoria);
        });

        tabla.appendChild(fila);
    });

    return categorias;
}
