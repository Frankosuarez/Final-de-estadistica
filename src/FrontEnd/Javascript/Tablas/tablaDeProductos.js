export function listarProductos(categoria)
{
    const contenedor = document.getElementById("datos-de-tabla");

    let productos = categoria.productos;

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
}
