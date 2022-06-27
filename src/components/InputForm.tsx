import React from 'react'

const InputForm = (props:any) => {
  const {input, onChange} = props
  return (
    <input type='text' placeholder='Input' value={input} onChange={onChange}/>
    )
}

export default InputForm