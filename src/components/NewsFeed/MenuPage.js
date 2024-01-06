import React from 'react'

function MenuPage(props) {
    const{Icon,name,classNameProps}=props
  return (
    <div className={`center ${classNameProps}`}>
        <Icon/>
        <p>{name}</p>
    </div>
  )
}

export default MenuPage