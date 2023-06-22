import React from 'react'
import LupaInput from '../../components/svg/LupaInput'

const InputBusqueda = ({searchParams,handleChange}) => {
  return (
    <form action="" method="post">
    <input
      type="text"
      placeholder="¿Qué estás buscando?"
      value={searchParams.get("filter") || ""}
      onChange={handleChange}
    />
    <LupaInput />
  </form>
  )
}

export default InputBusqueda