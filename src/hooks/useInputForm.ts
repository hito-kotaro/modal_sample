import {useState} from 'react'

const useInputForm = () => {
    const [input, setInput] = useState('')
    
    const onChange = (e:any) =>{
        setInput(e.target.value)
    }

    const clear = () =>{
        setInput('')
    }

  return {input, onChange, clear}
}

export default useInputForm