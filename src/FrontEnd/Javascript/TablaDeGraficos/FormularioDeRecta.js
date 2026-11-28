import { estimarVentas } from "../../../Backend/FuncionesEstadisticas.js";

export function inicializarFormularioEstimacion(puntos) {
 
    const contenedor = document.getElementById("grafico-dispersion-contenedor");
    const formulario = document.createElement("div");
    formulario.id = "formulario-regresion";
    formulario.classList = "formulario-regresion";

    let titulo = document.createElement("h2");
    titulo.textContent = "Estimar ventas";
    titulo.classList = "titulo";
    formulario.appendChild(titulo);

    let subtitulo = document.createElement("p");
    subtitulo.textContent = "Ingrese un precio";
    subtitulo.classList = "subtitulo";
    formulario.appendChild(subtitulo);

    let inputPrecio = document.createElement("input");
    inputPrecio.id = "precio-estimar";
    inputPrecio.type = "number";
    

    let btn = document.createElement("button");
    btn.textContent = "Estimar ventas";

    let resultado = document.createElement("div");
    let p = document.createElement("p");
    p.textContent = "ingrese un precio para estimar sus ventas"
    resultado.appendChild(p);

    btn.addEventListener("click", () => {

        const precio = Number(inputPrecio.value);

        if (!inputPrecio.value || !Number.isFinite(precio) || precio <= 0) {
            resultado.textContent = "Ingresá un precio válido.";
            return;
        }

        const estimacion = estimarVentas(puntos, precio);

        if (estimacion === null || !Number.isFinite(estimacion)) {
            resultado.textContent = "No se pudo calcular la estimación.";
            return;
        }

        resultado.innerHTML = `
            <strong>Ventas estimadas:</strong>
            <h2>${estimacion.toFixed(2)} unidades</h2>
            <p>Precio ingresado: $${precio.toLocaleString("es-AR")}</p>
        `;
        
    });
    
    formulario.appendChild(inputPrecio);
    formulario.appendChild(btn);
    formulario.appendChild(resultado);
    contenedor.appendChild(formulario);
}