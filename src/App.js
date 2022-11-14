import React from "react";
import { Outlet } from "react-router-dom";
import Nav from "./components/Nav";
import UserProvider from "./context/Context";
import "./styles/App.css";
const App = () => {
  return (
    <div>
      <UserProvider>
        <Nav />
        <Outlet />
      </UserProvider>
    </div>
  );
};

export default App;
