import React from 'react'

const Button = (props:any) => {
    const {onClick,children} = props
  return (
    <button type='button' onClick={onClick}>{children}</button>
    )
}

export default Button