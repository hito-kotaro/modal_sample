import React from 'react'

const useButtonAction = () => {
  const display = (input:string, close:()=>void, clear:()=>void) =>{
      console.log(input)
      clear()
      close()
  }
  return {display}
}

export default useButtonAction