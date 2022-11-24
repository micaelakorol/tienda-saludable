import { createContext, useState} from "react";

export const UserContext = createContext();
    const UserProvider = ({children}) => {
        const [carrito,setCarrito] = useState([])

 const agregarProducto=(idProducto,price,title,cantidad) => {
     if(carrito.length === 0){
        setCarrito([{id:idProducto,title:title,cantidad:1,price:price,total:price*cantidad}])
}
         else{
          const nuevoCarrito = [...carrito];
            const estaEnCarrito = nuevoCarrito.filter((productoCarrito) => {
                return productoCarrito.id === idProducto
          }).length > 0
              if(estaEnCarrito){
                 nuevoCarrito.forEach((productoCarrito, id) => {
                    if(productoCarrito.id === idProducto){
                     const cantidad = nuevoCarrito[id].cantidad; 
                         nuevoCarrito[id] = {
                         id:idProducto,
                         title:title,
                         cantidad: cantidad + 1,
                         price:price,
                         total: price * cantidad + price,
                    }
                }
            })
        }else{
            nuevoCarrito.push({
                id:idProducto,
                title:title,
                cantidad:1,
                price:price,
                total:price * cantidad
            })
        }
        setCarrito(nuevoCarrito)
        }}
        //funcion acumuladora de elementos que se agregan al carrito:
        const sumar = carrito.map(item => item.cantidad).reduce((prev,curr)=> prev + curr, 0)
         const totales = carrito.map(item => item.total).reduce((prev,curr)=> prev + curr, 0)


    return(
        <UserContext.Provider value={{carrito,setCarrito,agregarProducto,sumar,totales}}>
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider