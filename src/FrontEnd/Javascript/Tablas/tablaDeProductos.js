export function listarProductos(categoria)
{
    const contenedor = document.getElementById("datos-de-tabla");

    const cabecera = document.getElementById("cabecera-de-tabla");
    const cabeceraProducto = document.createElement("th");
    cabeceraProducto.textContent = "Producto";
    
    const cabeceraPrecio = document.createElement("th");
    cabeceraPrecio.textContent = "Precio";

    const cabeceraVentas = document.createElement("th");
    cabeceraVentas.textContent = "Ventas";

    cabecera.appendChild(cabeceraProducto);
    cabecera.appendChild(cabeceraPrecio);
    cabecera.appendChild(cabeceraVentas);

    let productos = categoria.productos;

    productos.forEach(producto => {

        const fila = document.createElement("tr");

        const NombreDeProducto = document.createElement("td");
        const PrecioDeProducto = document.createElement("td");
        const VentasDeProducto = document.createElement("td");

        NombreDeProducto.textContent = producto.nombre;
        PrecioDeProducto.textContent = "$" + producto.precio.toLocaleString("es-AR");
        VentasDeProducto.textContent = producto.ventas;        

        fila.appendChild(NombreDeProducto);
        fila.appendChild(PrecioDeProducto);
        fila.appendChild(VentasDeProducto);

        contenedor.appendChild(fila);
    })

}
