import { categorias } from "../../Backend/seed.js" //cambiar cuando haya servidor

import { listarCategorias } from "./Tablas/tablaDeCategorias.js";
import { listarProductos } from "./Tablas/tablaDeProductos.js";
import { listarMedidasEstadisticas } from "./Tablas/tablaEstadistica.js";

import { renderizarGraficoCircular } from "./Graficos/GraficoCircular.js";
import { renderizarGraficoDeDispersion } from "./Graficos/graficoDeDispersion.js";
import { renderizarGraficoDeCaja } from "./Graficos/graficoDeCaja.js";


const categoria = categorias[0];


function actualizarGraficos(categoria) 
{
  let productos = categoria.productos;
  const canvasDispersion = document.getElementById("grafico-de-dispersion");
  const canvasCaja = document.getElementById("grafico-de-caja");

  const preciosDeProductos = productos.map(producto => producto.precio);
  const ventasDeProductos = productos.map(producto => producto.ventas);

  const puntosDispersion = preciosDeProductos.map((precio, indice) => ({
    x: precio,
    y: ventasDeProductos[indice]
  }));

  
  renderizarGraficoDeDispersion(canvasDispersion, puntosDispersion);
  renderizarGraficoDeCaja(canvasCaja, preciosDeProductos);
}


function cargarTablaDeProductos(categoria)
{
    const cabecera = document.getElementById("cabecera-de-tabla");

    let nombre = document.createElement("th");
    nombre.textContent = "Nombre";

    let precio = document.createElement("th");
    precio.textContent = "Precio";

    let ventas = document.createElement("th");
    ventas.textContent = "Ventas";

    cabecera.appendChild(nombre);
    cabecera.appendChild(precio);
    cabecera.appendChild(ventas);

    listarProductos(categoria);
    actualizarGraficos(categoria);
    listarMedidasEstadisticas(categoria);
}

function cargarTablaDeCategorias(categorias)
{
    const cabecera = document.getElementById("cabecera-de-tabla");

    let categoria = document.createElement("th");
    categoria.textContent = "Categoria";

    let ganancias = document.createElement("th");
    ganancias.textContent = "Ganancias";

    cabecera.appendChild(categoria);
    cabecera.appendChild(ganancias);

    listarCategorias(categorias);
    renderizarGraficoCircular(categorias);
}

//Hacer que alternen con un boton mas adelante
cargarTablaDeProductos(categoria);
// cargarTablaDeCategorias(categorias);
