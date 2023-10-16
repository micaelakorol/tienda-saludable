import React from 'react'
import { glass } from '../../../assets/variables'
import Icons from '../../../reusable/Icons'

const InputBusqueda = ({searchParams,handleChange}) => {
  return (
    <form action="" method="post">
    <input
      type="text"
      placeholder="¿Qué estás buscando?"
      value={searchParams.get("filter") || ""}
      onChange={handleChange}
    />
    <Icons src={glass} alt='glass-search' className='glass'/>
  </form>
  )
}

export default InputBusqueda