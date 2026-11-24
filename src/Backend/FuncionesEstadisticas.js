export function calcularMedia(datos) {
    let sumatoria = 0;

    for (let i = 0; i < datos.length; i++) {
        sumatoria += datos[i];
    }

    let media = sumatoria / datos.length;

    return Math.round(   media   );
}

export function calcularMediana(datos) {
    let ordenados = [...datos].sort((a, b) => a - b); //crea un array temporal ordenado de menor a mayor

    let mitad = Math.floor(ordenados.length / 2);  //.floor() hace que el resultado se redondee para abajo

    if (ordenados.length % 2 === 0) { //es por si N es par
        return Math.round(   (ordenados[mitad - 1] + ordenados[mitad]) / 2    );
    }

    return Math.round(   ordenados[mitad]   );
}

 export function calcularVarianza(datos) {

    let media = calcularMedia(datos);
    media = Math.pow(media, 2); //.pow() eleva la variable al cuadrado.

    let sumatoria = 0;

    for (let i = 0; i < datos.length; i++) {
        sumatoria += Math.pow(datos[i], 2); 
    }

    let varianza = (sumatoria / datos.length) - media; //datos.lenght equivale a N

    return Math.round(   varianza   );
}

export function calcularDesvioEstandar(datos) {
    let varianza = calcularVarianza(datos);
    let desvioEstandar = Math.sqrt(varianza);//.sqrt devuelve la raiz cuadrada de la variable

    return Math.round(   desvioEstandar  ); 
}

export function calcularCoeficienteVariacion(datos) {
    let desvio = calcularDesvioEstandar(datos);
    let media = calcularMedia(datos);

    let coeficienteDeVariacion = (desvio / media) * 100;
    
    return Math.round(   coeficienteDeVariacion );
}

export function calcularCovarianza(datosX, datosY) {

    let mediaX = calcularMedia(datosX);
    let mediaY = calcularMedia(datosY);

    let sumatoriaXY = 0;

    for (let i = 0; i < datosX.length; i++) {
        sumatoriaXY += datosX[i] * datosY[i];
    }

    let covarianza = (sumatoriaXY / datosX.length) - (mediaX * mediaY);

    return Math.round(   covarianza  );
}

export function calcularCoeficienteDeCorrelacion(datosX, datosY) {

    let covarianza = calcularCovarianza(datosX, datosY);
    let desvioX = calcularDesvioEstandar(datosX);
    let desvioY = calcularDesvioEstandar(datosY);

    let coeficienteDeCorrelacion = covarianza / (desvioX * desvioY);

    return coeficienteDeCorrelacion;
}

