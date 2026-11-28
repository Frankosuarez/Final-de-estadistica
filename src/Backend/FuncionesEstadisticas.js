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


export function calcularPorcentajeGanancia(categorias, categoria) {

    let gananciaTotal = 0;

    categorias.forEach(categoria => {
        gananciaTotal += categoria.ganancias;
    });

    let porcentaje = (categoria.ganancias / gananciaTotal) * 100;

    return Math.round( porcentaje );
}


export function calcularCuartiles(datos) {

    let ordenados = [...datos].sort((a, b) => a - b);

    let mediana = calcularMediana(ordenados);

    let mitad = Math.floor(ordenados.length / 2);

    // Dividir los datos en dos mitades
    let mitadInferior = ordenados.slice(0, mitad);
    let mitadSuperior = ordenados.slice(
        Math.ceil(ordenados.length / 2)
    );

    let Q1 = calcularMediana(mitadInferior);
    let Q2 = mediana;
    let Q3 = calcularMediana(mitadSuperior);

    let rangoIntercuartilico = Q3 - Q1;

    let limiteInferior = Q1 - (1.5 * rangoIntercuartilico);
    let limiteSuperior = Q3 + (1.5 * rangoIntercuartilico);

    let valoresAtipicos = ordenados.filter(dato =>
        dato < limiteInferior || dato > limiteSuperior
    );

    let datosSinAtipicos = ordenados.filter(dato =>
        dato >= limiteInferior && dato <= limiteSuperior
    );

    let minimo = datosSinAtipicos[0];
    let maximo = datosSinAtipicos[datosSinAtipicos.length - 1];


    return{

        minimo: minimo,
        Q1: Q1,
        mediana: Q2,
        Q3: Q3,
        maximo: maximo,
        rangoIntercuartilico: rangoIntercuartilico,
        limiteInferior: limiteInferior,
        limiteSuperior: limiteSuperior,
        valoresAtipicos: valoresAtipicos
    };
}


export function calcularRegresion(datos) {

    const n = datos.length;

    let sumaX = 0;
    let sumaY = 0;
    let sumaXY = 0;
    let sumaX2 = 0;

    datos.forEach(p => {
        sumaX += p.x;
        sumaY += p.y;
        sumaXY += p.x * p.y;
        sumaX2 += p.x * p.x;
    });

    const b = (
        n * sumaXY - sumaX * sumaY
    ) / (
        n * sumaX2 - sumaX * sumaX
    );

    const a = (sumaY - b * sumaX) / n;

    return { a, b };
}

export function estimarVentas(puntos, precio) {

    if (puntos.length < 2) return null;

    const regresion = calcularRegresion(puntos);

    return regresion.a + regresion.b * precio;
}
