//acomodar mañana
import { calcularPorcentajeGanancia } from "../../../Backend/FuncionesEstadisticas.js";

export function listarPorcentajes(categorias) 
{
    // Tabla de categorías
    const tablaCategorias = document.createElement("table");
    tablaCategorias.id = "tabla-categorias";
    tablaCategorias.className = "tabla-categorias";

    tablaCategorias.innerHTML = `
        <thead>
            <tr>
                <th>Categoria</th>
                <th>Ganancias</th>
            </tr>
        </thead>
    `;

    let porcentajes = document.createElement("tbody");
    tablaCategorias.appendChild(porcentajes);

    categorias.forEach(categoria => 
        {
            let fila = document.createElement("tr");

            let nombre = document.createElement("td");
            nombre.textContent = categoria.nombre;

            let porcentaje = document.createElement("td");
            porcentaje.textContent = "%" + calcularPorcentajeGanancia(categorias, categoria);

            fila.appendChild(nombre);
            fila.appendChild(porcentaje);

            porcentajes.appendChild(fila);
        
    });

    tablaCategorias.appendChild(porcentajes);

    return tablaCategorias;
}
