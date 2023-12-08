import React,{useState} from 'react'

const useCostum = () => {
    const [count, setcount] = useState(1)
    function Increment(){
        setcount(count+1)
    }
    function decrement(){
        setcount(count+1)
    }
  return [count,Increment,decrement]
}

export default useCostum