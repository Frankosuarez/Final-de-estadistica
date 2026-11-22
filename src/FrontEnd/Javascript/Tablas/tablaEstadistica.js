import { calcularMedia,
         calcularMediana,
         calcularVarianza,
         calcularDesvioEstandar,
         calcularCoeficienteVariacion,
         calcularCovarianza,
         calcularCoeficienteDeCorrelacion
 } from "../../../Backend/FuncionesEstadisticas.js"; 



export function listarMedidasEstadisticas(categoria)
{
    let productos = categoria.productos;

    const precios = productos.map(producto => producto.precio);
    const ventas = productos.map(producto => producto.ventas);

    let mediaDePrecios = calcularMedia(precios);
    let mediaDeVentas = calcularMedia(ventas);

    let medianaDePrecios = calcularMediana(precios);
    let medianaDeVentas = calcularMediana(ventas);

    let varianzaDePrecios = calcularVarianza(precios);
    let varianzaDeVentas = calcularVarianza(ventas);

    let desvioEstandarDePrecios = calcularDesvioEstandar(precios);
    let desvioEstandarDeVentas = calcularDesvioEstandar(ventas);

    let coeficienteDeVariacionDePrecios = calcularCoeficienteVariacion(precios);
    let coeficienteDeVariacionDeVentas = calcularCoeficienteVariacion(ventas);

    let covarianza = calcularCovarianza(precios, ventas);
    
    let correlacion = calcularCoeficienteDeCorrelacion(precios, ventas);

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
    coeficienteDeVariacion.textContent = coeficienteDeVariacionDePrecios + "%";

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
    CoeficienteDeVariacion.textContent = coeficienteDeVariacionDeVentas + "%";


    let Covarianza = document.getElementById("covarianza");
    Covarianza.textContent = covarianza;

    let coeficienteDeCorrelacion = document.getElementById("coeficiente-de-correlacion");
    coeficienteDeCorrelacion.textContent = correlacion;
}
