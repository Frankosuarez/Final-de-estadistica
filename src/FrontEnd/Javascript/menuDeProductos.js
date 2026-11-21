import { productos } from "../../Backend/seed.js"; //cambiar por API cuando haya servidor
import { renderizarGraficoCircular } from "./Graficos/GraficoCircular.js";
import { renderizarGraficoDispersion } from "./Graficos/graficoDeDispersion.js";
import { renderizarGraficoCaja } from "./Graficos/graficoDeCaja.js";

//cambiar cuando haya servidor
import { calcularMedia,
         calcularMediana,
         calcularVarianza,
         calcularDesvioEstandar,
         calcularCoeficienteVariacion,
         calcularCovarianza,
         calcularCoeficienteDeCorrelacion
 } from "../../Backend/FuncionesEstadisticas.js"; 

//lista de productos
function listarProductos(productos)
{
    const contenedor = document.getElementById("datos-de-tabla");

    productos.forEach(producto => {

        const fila = document.createElement("tr");

        const NombreDeProducto = document.createElement("td");
        const PrecioDeProducto = document.createElement("td");
        const VentasDeProducto = document.createElement("td");

        NombreDeProducto.textContent = producto.nombre;
        PrecioDeProducto.textContent = producto.precio;
        VentasDeProducto.textContent = producto.ventas;        

        fila.appendChild(NombreDeProducto);
        fila.appendChild(PrecioDeProducto);
        fila.appendChild(VentasDeProducto);

        contenedor.appendChild(fila);
    })

    console.log(contenedor);
}

function listarMedidasEstadisticas(productos)
{
    const precios = productos.map(producto => producto.precio);
    const ventas = productos.map(producto => producto.ventas);

    let mediaDePrecios = Math.round(calcularMedia(precios));
    let mediaDeVentas = Math.round(calcularMedia(ventas));

    let medianaDePrecios = Math.round(calcularMediana(precios));
    let medianaDeVentas = Math.round(calcularMediana(ventas));

    let varianzaDePrecios = Math.round(calcularVarianza(precios));
    let varianzaDeVentas = Math.round(calcularVarianza(ventas));

    let desvioEstandarDePrecios = Math.round(calcularDesvioEstandar(precios));
    let desvioEstandarDeVentas = Math.round(calcularDesvioEstandar(ventas));

    let coeficienteDeVariacionDePrecios = Math.round(calcularCoeficienteVariacion(precios));
    let coeficienteDeVariacionDeVentas = Math.round(calcularCoeficienteVariacion(ventas));

    let covarianza = Math.round(calcularCovarianza(precios, ventas));
    
    let correlacion = Math.round(calcularCoeficienteDeCorrelacion(precios, ventas));

    //tabla de precios
    let media = document.getElementById("media-precios");
    media.textContent = mediaDePrecios;

    let mediana = document.getElementById("mediana-precios");
    mediana.textContent = medianaDePrecios;

    let varianza = document.getElementById("varianza-precios");
    varianza.textContent = varianzaDePrecios;

    let desvioEstandar = document.getElementById("desvio-estandar-precios");
    desvioEstandar.textContent = desvioEstandarDePrecios;

    let coeficienteDeVariacion = document.getElementById("coeficiente-de-variacion-precios");
    coeficienteDeVariacion.textContent = coeficienteDeVariacionDePrecios;

    //Tabla de ventas
    let Media = document.getElementById("media-ventas");
    Media.textContent = mediaDeVentas;

    let Mediana = document.getElementById("mediana-ventas");
    Mediana.textContent = medianaDeVentas;

    let Varianza = document.getElementById("varianza-ventas");
    Varianza.textContent = varianzaDeVentas;

    let DesvioEstandar = document.getElementById("desvio-estandar-ventas");
    DesvioEstandar.textContent = desvioEstandarDeVentas;

    let CoeficienteDeVariacion = document.getElementById("coeficiente-de-variacion-ventas");
    CoeficienteDeVariacion.textContent = coeficienteDeVariacionDeVentas;


    let Covarianza = document.getElementById("covarianza");
    Covarianza.textContent = covarianza;

    let coeficienteDeCorrelacion = document.getElementById("coeficiente-de-correlacion");
    coeficienteDeCorrelacion.textContent = correlacion;
}


//graficos de productos

const canvasCircular = document.getElementById("grafico-circular");
const canvasDispersion = document.getElementById("grafico-de-dispersion");
const canvasCaja = document.getElementById("grafico-de-caja");

export function actualizarGraficos(productos) {
  const nombresDeProductos = productos.map(producto => producto.nombre);
  const preciosDeProductos = productos.map(producto => producto.precio);
  const ventasDeProductos = productos.map(producto => producto.ventas);

  const puntosDispersion = preciosDeProductos.map((precio, indice) => ({
    x: precio,
    y: ventasDeProductos[indice]
  }));

  renderizarGraficoCircular(canvasCircular, nombresDeProductos, preciosDeProductos);
  renderizarGraficoDispersion(canvasDispersion, puntosDispersion);
  renderizarGraficoCaja(canvasCaja, preciosDeProductos);
}



listarProductos(productos);
actualizarGraficos(productos);
listarMedidasEstadisticas(productos);
