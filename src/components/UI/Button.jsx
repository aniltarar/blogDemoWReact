import React from 'react'
import PropTypes from "prop-types";
import "./Button.css"
const Button = ({className,btnColor,btnSize,children,onClick}) => {
  return (
    <button onClick={onClick} className={` btn ${className} ${btnColor===""?"btn":btnColor} ${btnSize}`} >{children}</button>
  )
}

Button.propTypes = {
    btnColor:PropTypes.oneOf(["primary","secondary","danger","success","dark","warning"]),
    btnSize:PropTypes.oneOf(["sm","md","lg"]),
    onClick:PropTypes.func,
}

export default Button