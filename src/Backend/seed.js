import Producto from "./Producto.js";

//datos de prueba
const producto1 = new Producto("televisor", 1200, 12, "electrodomesticos");
const producto2 = new Producto("computadora", 2000, 10, "electrodomesticos");
const producto3 = new Producto("celular", 600, 16, "electrodomesticos");
const producto4 = new Producto("microondas", 900, 16, "electrodomesticos");
const producto5 = new Producto("cafetera", 500, 18, "electrodomesticos");
const producto6 = new Producto("tostadora", 400, 20, "electrodomesticos");

export const productos = [producto1, producto2, producto3, producto4, producto5, producto6];