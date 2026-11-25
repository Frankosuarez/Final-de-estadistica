import Fecha from "./Fecha.js";
import Categoria from "./Categoria.js";
import Producto from "./Producto.js";

const fecha1 = new Fecha("Septiembre");
const fecha2 = new Fecha("Octubre");
const fecha3 = new Fecha("Noviembre");
const fecha4 = new Fecha("Diciembre");

const categoria1 = new Categoria("Electrodomesticos");
const categoria2 = new Categoria("Fiambreria");
const categoria3 = new Categoria("Jugueteria");
const categoria4 = new Categoria("Muebleria");

const producto1 = new Producto("televisor", 1800, 40);
const producto2 = new Producto("computadora", 2200, 32);
const producto3 = new Producto("celular", 700, 75);
const producto4 = new Producto("microondas", 1200, 60);
const producto5 = new Producto("cafetera", 900, 68);
const producto6 = new Producto("tostadora", 500, 82);

const productos1 = [producto1, producto2, producto3, producto4, producto5, producto6];

const producto7 = new Producto("jamon", 20, 900);
const producto8 = new Producto("queso", 30, 840);
const producto9 = new Producto("salame", 25, 210);
const producto10 = new Producto("cheddar", 26, 218);
const producto11 = new Producto("roquefort", 40, 90);
const producto12 = new Producto("jamon economico", 15, 200);

const productos2 = [producto7, producto8, producto9, producto10, producto11, producto12];

const producto13 = new Producto("hot wheels", 14, 1200);
const producto14 = new Producto("autos a control remoto", 50, 100);
const producto15 = new Producto("pistola de burbujas", 8, 160);
const producto16 = new Producto("consola de tetris", 35, 80);
const producto17 = new Producto("tablero de ajedrez", 30, 90);
const producto18 = new Producto("cartas de uno", 5, 250);

const productos3 = [producto13, producto14, producto15, producto16, producto17, producto18];

const producto19 = new Producto("sillon", 200, 200);
const producto20 = new Producto("mesas", 150, 300);
const producto21 = new Producto("sillas", 30, 650);
const producto22 = new Producto("escritorios", 180, 250);
const producto23 = new Producto("estantes", 120, 350);
const producto24 = new Producto("armarios", 135, 360);

const productos4 = [producto19, producto20, producto21, producto22, producto23, producto24];

categoria1.agregarProducto(productos1);
categoria2.agregarProducto(productos2);
categoria3.agregarProducto(productos3);
categoria4.agregarProducto(productos4);


const categorias1 = [categoria1, categoria2, categoria3, categoria4];
const categorias2 = [categoria1, categoria2, categoria3];
const categorias3 = [categoria1, categoria2, categoria4];
const categorias4 = [categoria1, categoria3, categoria4];

fecha1.agregarCategoria(categorias1);
fecha2.agregarCategoria(categorias2);
fecha3.agregarCategoria(categorias3);
fecha4.agregarCategoria(categorias4);


export const fechas = [fecha1, fecha2, fecha3, fecha4];