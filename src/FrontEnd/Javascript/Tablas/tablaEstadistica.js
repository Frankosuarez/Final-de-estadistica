import { calcularMedia,
         calcularMediana,
         calcularVarianza,
         calcularDesvioEstandar,
         calcularCoeficienteVariacion,
         calcularCovarianza,
         calcularCoeficienteDeCorrelacion
 } from "../../../Backend/FuncionesEstadisticas.js"; 

export function generarTabla(datos) 
{
    const tabla = document.createElement("table");
    const tbody = document.createElement("tbody");

    datos.forEach(dato => {

        const fila = document.createElement("tr");

        const celdaNombre = document.createElement("td");
        celdaNombre.textContent = dato.nombre;

        const celdaValor = document.createElement("td");
        celdaValor.textContent = dato.valor;

        fila.appendChild(celdaNombre);
        fila.appendChild(celdaValor);

        tbody.appendChild(fila);
    });

    tabla.appendChild(tbody);

    return tabla;

}


export function generarContenedorEstadisticas(categoria)
{
    let productos = categoria.productos;

    const precios = productos.map(producto => producto.precio);
    const ventas = productos.map(producto => producto.ventas);

    let contenedor = document.getElementById("estadisticas");
    contenedor.innerHTML = "";

    const contenedorTablas = document.createElement("div");
    contenedorTablas.id = "tabla-estadistica-contenedor";


    const tablaPrecios = generarTabla([
        { nombre: "Media", valor: calcularMedia(precios) },
        { nombre: "Mediana", valor: calcularMediana(precios) },
        { nombre: "Varianza", valor: calcularVarianza(precios) },
        { nombre: "Desvío estándar", valor: calcularDesvioEstandar(precios) },
        { nombre: "Coeficiente de variación", valor: calcularCoeficienteVariacion(precios) + "%" }
    ]);

    const tablaVentas = generarTabla([
        { nombre: "Media", valor: calcularMedia(ventas) },
        { nombre: "Mediana", valor: calcularMediana(ventas) },
        { nombre: "Varianza", valor: calcularVarianza(ventas) },
        { nombre: "Desvío estándar", valor: calcularDesvioEstandar(ventas) },
        { nombre: "Coeficiente de variación", valor: calcularCoeficienteVariacion(ventas) + "%" }
    ]);

    const tablaBivariada = generarTabla([
        { nombre: "Covarianza", valor: calcularCovarianza(precios, ventas) },
        { nombre: "Coeficiente de correlación", valor: calcularCoeficienteDeCorrelacion(precios, ventas) }
    ]);

    contenedorTablas.appendChild(tablaPrecios);
    contenedorTablas.appendChild(tablaVentas);
    contenedorTablas.appendChild(tablaBivariada);

    return contenedorTablas;
}