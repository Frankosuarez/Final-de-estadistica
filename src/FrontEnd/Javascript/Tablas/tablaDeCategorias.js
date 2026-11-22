export function listarCategorias(categorias)
{
    console.log(categorias);

    const tabla = document.getElementById("datos-de-tabla");

    categorias.forEach(categoria => 
        {
            let fila = document.createElement("tr")

            let nombre = document.createElement("td");
            nombre.textContent = categoria.nombre;

            let ganancia = document.createElement("td");
            ganancia.textContent = categoria.ganancias;

            fila.appendChild(nombre);
            fila.appendChild(ganancia);
            tabla.appendChild(fila);
        });
}