export default class Fecha
{
    constructor(mes)
    {
        this.mes = mes;
        this.categorias = [];
        this.ganancias = 0;
    }

    calcularGanancias()
    {
        if(this.categorias.length === 0) { return 0; }

        this.ganancias = this.categorias.reduce( (sumatoria, categoria ) =>
            {
                return sumatoria + categoria.ganancias;
            
            }, 0);

        return this.ganancias;
    }

    agregarCategoria(categoriaNueva)
    {
        if(Array.isArray(categoriaNueva))
        {
            this.categorias.push(...categoriaNueva);
        } else 
        {
            this.categorias.push(categoriaNueva);
        }
        
        this.calcularGanancias();
    }
}