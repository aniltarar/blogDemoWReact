import React from 'react'
import "./Button.css"
const Button = ({className,btnColor,btnSize,children,onClick}) => {
  return (
    <button onClick={onClick} className={` btn ${className} ${btnColor===""?"btn":btnColor} ${btnSize}`} >{children}</button>
  )
}

export default Button