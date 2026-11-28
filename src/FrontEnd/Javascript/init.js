import { fechas } from "../../Backend/seed.js"

import { listarFechas } from "./Tablas/tablaDeFechas.js";
import { listarCategorias } from "./Tablas/tablaDeCategorias.js";
import { listarProductos } from "./Tablas/tablaDeProductos.js";
import { generarContenedorEstadisticas } from "./Tablas/tablaEstadistica.js";

import { renderizarGraficoCircular } from "./Graficos/GraficoCircular.js";
import { renderizarGraficoDeDispersion } from "./Graficos/graficoDeDispersion.js";
import { renderizarGraficoDeCaja } from "./Graficos/graficoDeCaja.js";
import { RenderizarGraficoDeLineas } from "./Graficos/graficoDeLineas.js";

import { listarPorcentajes } from "./TablaDeGraficos/TablaGraficoCircular.js";
import { generarTablaDeCaja } from "./TablaDeGraficos/TablaDeGraficoCaja.js";
import { inicializarFormularioEstimacion } from "./TablaDeGraficos/FormularioDeRecta.js";


let anterior = [];

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
  inicializarFormularioEstimacion(puntosDispersion);
  
  renderizarGraficoDeCaja(canvasCaja, preciosDeProductos);
}

function cargarTablaDeProductos(categoria)
{
  const titulo = document.getElementById("titulo");
  titulo.textContent = "Productos";

  const tabla = document.getElementById("tabla");
    tabla.innerHTML = `<thead>
                           <tr id="cabecera-de-tabla"></tr>
                       </thead>
                       <tbody id="datos-de-tabla"></tbody>`
    
    listarProductos(categoria);

    const btn = document.createElement("button");
    btn.textContent = "volver";
    btn.addEventListener("click", () => { cargarTablaDeCategorias(anterior); }) //ver dps

    tabla.appendChild(btn);


    //cargar graficos

    const contenedorDeGraficos = document.getElementById("graficos-contenedor");
    contenedorDeGraficos.innerHTML = "";

    //grafico de dispersion
    const contenedorDispersion = document.createElement("div");
    contenedorDispersion.id = "grafico-dispersion-contenedor";
    contenedorDispersion.className = "grafico-dispersion-contenedor";

    const canvasDispersion = document.createElement("canvas");
    canvasDispersion.id = "grafico-de-dispersion";

    contenedorDispersion.appendChild(canvasDispersion);

    
    //grafico de caja y su tabla de datos
    const contenedorCaja = document.createElement("div");
    contenedorCaja.id = "grafico-de-caja-contenedor";
    contenedorCaja.className = "grafico-de-caja-contenedor";

    const canvasCaja = document.createElement("canvas");
    canvasCaja.id = "grafico-de-caja";

    const tablaDeCaja = generarTablaDeCaja(categoria);
    console.log("tabla:",tablaDeCaja)

    contenedorCaja.appendChild(tablaDeCaja);
    contenedorCaja.appendChild(canvasCaja);

    contenedorDeGraficos.appendChild(contenedorDispersion);
    contenedorDeGraficos.appendChild(contenedorCaja);
    

    actualizarGraficos(categoria);

    //cargar tablas con las estadisticas
    const contenedorDeEstadisticas = document.getElementById("estadisticas");
    const estadisticas = generarContenedorEstadisticas(categoria);
    contenedorDeEstadisticas.appendChild(estadisticas);
}



function cargarTablaDeCategorias(categorias) {

    const titulo = document.getElementById("titulo");
    titulo.textContent = "Categorias";

    const tabla = document.getElementById("tabla");
      tabla.innerHTML = `<thead>
                           <tr id="cabecera-de-tabla"></tr>
                       </thead>
                       <tbody id="datos-de-tabla"></tbody>`

    anterior = listarCategorias(categorias, cargarTablaDeProductos);

    const btn = document.createElement("button");
    btn.textContent = "volver";
    btn.addEventListener("click", () => { cargarTablaDeFechas(fechas); })

    tabla.appendChild(btn);

    //grafico circular
    const contenedorDeGraficos = document.getElementById("graficos-contenedor");
    contenedorDeGraficos.innerHTML = "";

    let contenedorEstadisticas = document.getElementById("estadisticas");
    contenedorEstadisticas.innerHTML = "";

    const contenedorGraficoCircular = document.createElement("div");
    contenedorGraficoCircular.id = "grafico-circular-contenedor";
    contenedorGraficoCircular.className = "grafico-circular-contenedor";

    const graficoCircular = document.createElement("canvas");
    graficoCircular.id = "grafico-circular";
    graficoCircular.className = "grafico-circular";

    // Tabla de categorías
    const tablaCategorias = listarPorcentajes(categorias);

    contenedorGraficoCircular.appendChild(tablaCategorias);
    contenedorGraficoCircular.appendChild(graficoCircular);
    contenedorDeGraficos.appendChild(contenedorGraficoCircular);

    renderizarGraficoCircular(categorias);

}

function cargarTablaDeFechas(fechas) 
{
    const titulo = document.getElementById("titulo");
    titulo.textContent = "Fechas";

    const tabla = document.getElementById("tabla");
      tabla.innerHTML = `<thead>
                           <tr id="cabecera-de-tabla"></tr>
                       </thead>
                       <tbody id="datos-de-tabla"></tbody>`

    listarFechas(fechas, cargarTablaDeCategorias);

    //grafico de lineas
    const contenedorDeGraficos = document.getElementById("graficos-contenedor");
    contenedorDeGraficos.innerHTML = "";

    let contenedorEstadisticas = document.getElementById("estadisticas");
    contenedorEstadisticas.innerHTML = "";

    const contenedorGraficoDeLineas = document.createElement("div");
    contenedorGraficoDeLineas.id = "grafico-de-lineas-contenedor";
    contenedorGraficoDeLineas.className = "grafico-de-lineas-contenedor";

    const graficoDeLineas = document.createElement("canvas");
    graficoDeLineas.id = "grafico-de-lineas";
    graficoDeLineas.className = "grafico-de-lineas";

    contenedorGraficoDeLineas.appendChild(graficoDeLineas);
    contenedorDeGraficos.appendChild(contenedorGraficoDeLineas);

    RenderizarGraficoDeLineas(fechas, graficoDeLineas);

}

cargarTablaDeFechas(fechas);




