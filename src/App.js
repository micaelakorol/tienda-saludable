import React from 'react'
import { Outlet } from 'react-router-dom'
import Nav from './components/Nav'
import UserProvider from './context/Context'
import {Helmet} from "react-helmet";
import './styles/App.css'
const App = () => {

  return (
    <div>
  <Helmet>
      <link rel="icon" href={require('./img/logo.png')} />
<title>Brotes Saludable</title>
  </Helmet>
<UserProvider>
<Nav/>
<Outlet/>
</UserProvider>
    </div>
  )
}

export default App