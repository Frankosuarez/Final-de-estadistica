export default class Categoria 
{
    constructor(nombre)
    {
        this.nombre = nombre;
        this.productos = [];
        this.ganancias = 0;
    }

    calcularGanancias()
    {
        if(this.productos.length === 0) { return 0; }

        this.ganancias = this.productos.reduce( (sumatoria, producto ) =>
            {
                return sumatoria + (producto.precio * producto.ventas);
            
            }, 0);

        return this.ganancias;
    }

    agregarProducto(productoNuevo)
    {
        if(Array.isArray(productoNuevo))
        {
            this.productos.push(...productoNuevo); //los ... hacen que se inserte los elementos del array y no el array incluido
        } else 
        {
            this.productos.push(productoNuevo);
        }
        
        this.calcularGanancias();
    }
}