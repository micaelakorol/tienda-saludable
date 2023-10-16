export function filterProductos(productos, filterValue) {
    if (!filterValue) {
      return productos;
    }
    const lowerCaseFilter = filterValue.toLowerCase();
    return productos.filter((item) => {
      if (item.nombre) {
        return item.nombre.toLowerCase().startsWith(lowerCaseFilter);
      }
      return false;
    });
  }