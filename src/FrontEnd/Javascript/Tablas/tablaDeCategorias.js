export function listarCategorias(categorias, alSeleccionar) {

    const tabla = document.getElementById("datos-de-tabla");

    categorias.forEach(categoria => {

        const fila = document.createElement("tr");

        const nombre = document.createElement("td");
        nombre.textContent = categoria.nombre;

        const ganancias = document.createElement("td");
        ganancias.textContent = categoria.ganancias;

        fila.appendChild(nombre);
        fila.appendChild(ganancias);

        fila.addEventListener("click", () => {
            alSeleccionar(categoria);
        });

        tabla.appendChild(fila);
    });
}
