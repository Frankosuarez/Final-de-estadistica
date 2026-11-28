import { calcularCuartiles } from "../../../Backend/FuncionesEstadisticas.js";
import { generarTabla } from "../Tablas/tablaEstadistica.js";

export function generarTablaDeCaja(categoria)
{
    const precios = categoria.productos.map(producto => producto.precio);

    const cuartiles = calcularCuartiles(precios);

    const datosTabla = Object.entries(cuartiles).map(([nombre, valor]) => ({
    nombre,
    valor: Array.isArray(valor) ? valor.join(", ") : valor
    }));

    const tabla = generarTabla(datosTabla);

    const cabecera = document.createElement("thead");

    let filaDeCabecera = document.createElement("tr");
    
    let cabeceraMedidas = document.createElement("th");
    cabeceraMedidas.textContent = "Medida";

    let cabeceraValores = document.createElement("th");
    cabeceraValores.textContent = "valor";

    filaDeCabecera.append(cabeceraMedidas, cabeceraValores);
    cabecera.appendChild(filaDeCabecera);

    tabla.prepend(cabecera);

    return tabla;

}
