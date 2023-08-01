import { createContext, useState } from "react";

export const UserContext = createContext();
const UserProvider = ({ children }) => {
  const [carrito, setCarrito] = useState([]);

  return (
    <UserContext.Provider value={{ carrito, setCarrito }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
