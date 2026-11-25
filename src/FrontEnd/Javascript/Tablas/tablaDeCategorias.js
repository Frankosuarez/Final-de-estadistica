export function listarCategorias(categorias, alSeleccionar) {

    const tabla = document.getElementById("datos-de-tabla");

    const cabecera = document.getElementById("cabecera-de-tabla");
    const cabeceraCategoria = document.createElement("th");
    cabeceraCategoria.textContent = "Categoria de productos";
    
    const cabeceraGanancias = document.createElement("th");
    cabeceraGanancias.textContent = "Ganancias de categoria";

    cabecera.appendChild(cabeceraCategoria);
    cabecera.appendChild(cabeceraGanancias);

    categorias.forEach(categoria => {

        const fila = document.createElement("tr");

        const nombre = document.createElement("td");
        nombre.textContent = categoria.nombre;

        const ganancias = document.createElement("td");
        ganancias.textContent = "$" + categoria.ganancias.toLocaleString("es-AR");;

        fila.appendChild(nombre);
        fila.appendChild(ganancias);

        fila.addEventListener("click", () => {
            alSeleccionar(categoria);
        });

        tabla.appendChild(fila);
    });

    return categorias;
}
