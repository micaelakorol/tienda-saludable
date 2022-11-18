import React from 'react'
import { useState } from 'react'
import Menu from './Menu'
import Nav from './Nav'

const NavMobile = () => {
    const [mobileNav, setMobileNav] = useState(false)
  return (
    <div>
<Menu setMobileNav={setMobileNav} mobileNav={mobileNav}/>
{
    mobileNav &&
    <Nav/>
}
        
    </div>
  )
}

export default NavMobile