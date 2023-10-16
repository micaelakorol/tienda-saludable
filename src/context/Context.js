import { createContext, useState } from "react";
import { useSearchParams } from "react-router-dom";

export const UserContext = createContext();
const UserProvider = ({ children }) => {
  const [carrito, setCarrito] = useState([]);
  let [searchParams, setSearchParams] = useSearchParams();
  const [filter, setFilter] = useState(searchParams.get("filter") || "");

  return (
    <UserContext.Provider
      value={{
        carrito,
        setCarrito,
        searchParams,
        setSearchParams,
        filter,
        setFilter,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
