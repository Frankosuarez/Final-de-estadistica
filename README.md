# Aplicación de Auditoría Estadística para Mayoristas

##  Descripción del proyecto

Aplicación orientada a la gestión, auditoría y análisis estadístico de las ventas de un establecimiento mayorista. Su objetivo es proporcionar herramientas que permitan analizar el rendimiento comercial de los productos y sus respectivas categorías, facilitando la interpretación de los ingresos y la toma de decisiones.

El sistema permitirá registrar productos, asignarles una categoría y almacenar información correspondiente a su precio y cantidad de unidades vendidas durante un período determinado.

A partir de estos datos, la aplicación realizará distintos análisis estadísticos y representaciones gráficas para estudiar el comportamiento de las ventas.

Entre sus principales funcionalidades se encuentran:

- **Análisis de productos:** visualización de la relación entre los precios y las cantidades vendidas mediante gráficos de dispersión.
- **Estimación de ventas:** utilización de una recta de regresión lineal para estimar la cantidad de ventas de un producto a partir de un precio determinado.
- **Distribución de ventas:** representación de la distribución de las cantidades vendidas mediante diagramas de caja y bigotes (Boxplot).
- **Análisis estadístico:** cálculo de medidas de tendencia central, dispersión y correlación para evaluar el comportamiento de los productos de cada categoría.
- **Comparación de categorías:** análisis de la participación de cada categoría en los ingresos totales del establecimiento.
- **Evolución de ingresos:** comparación de los ingresos mensuales para identificar incrementos o disminuciones respecto de períodos anteriores.

## ⚙️ Características principales

- Registro, modificación y eliminación de categorías de productos.
- Registro y administración de productos, con asignación a sus respectivas categorías.
- Almacenamiento de precios y cantidades vendidas por período.
- Ordenamiento de productos de menor a mayor según sus ingresos generados.
- Visualización de estadísticas agrupadas por categoría.
- Consulta de los ingresos correspondientes al mes actual y a períodos anteriores.
- Comparación de los ingresos generados por las distintas categorías.
- Análisis de la evolución de los ingresos mediante comparaciones mensuales.

## 📐 Análisis matemático y estadístico

La aplicación usara valores estadísticos para analizar las variables registradas y obtener información relevante sobre el comportamiento comercial de los productos.

### Análisis de productos y categorías

Se calcularán las siguientes medidas estadísticas:

| Medida estadística | Uso |
|---|---|
| Media | Promedio de las ventas y los precios de cada categoria. |
| Mediana | Valor central de ventas y precios de los productos. |
| Desvío estándar | Dispersión respecto de la media de precios/ventas. |
| Coeficiente de variación | porcentaje de dispersion respecto de la media de precio/ventas. |
| Covarianza | Mide la variación entre el precio y las ventas de los productos de una categoria. |
| Coeficiente de correlación | Indica la intensidad y dirección de la relación lineal entre el precio y las ventas de los productos. |

### Variables de análisis
- **Poblacion:** productos del mayorista.

- **Variable X:** precio de venta de cada producto.
- **Variable Y:** cantidad de unidades vendidas durante el período analizado.

También se analizarán los ingresos generados por cada categoria, calculados mediante:

**Ingresos = Precio × Cantidad de unidades vendidas**

## 📈 Representaciones gráficas

La aplicación contará con diferentes representaciones visuales para facilitar la interpretación de los resultados estadísticos.

### 1. Gráfico circular

Permitirá visualizar la proporción de los ingresos generados por cada categoría respecto del ingreso total del establecimiento.

También permitirá analizar la participación de las categorías en distintos períodos.

### 2. Gráfico de dispersión y recta de regresión

Representará la relación entre el precio de los productos (X) y la cantidad de unidades vendidas (Y).

Se incorporará una recta de regresión lineal para identificar tendencias y realizar estimaciones de ventas a partir de un precio determinado.

### 3. Diagrama de caja y bigotes (Boxplot)

Representará la distribución de las cantidades vendidas por los productos pertenecientes a una categoría.

Permitirá identificar:

- Mediana de ventas.
- Rango intercuartílico.
- Valores mínimos y máximos.
- Posibles valores atípicos (outliers).

### 4. Gráfico de líneas

Permitirá comparar los ingresos obtenidos durante distintos meses, identificando variaciones positivas o negativas respecto de períodos anteriores.

##  Autor

**Franco Suarez**

## 📄 Licencia

Este proyecto se distribuye bajo la **Licencia Pública General de GNU, versión 3.0 (GNU GPL v3)**.

Para más información, consultar el archivo `LICENSE` del repositorio.
