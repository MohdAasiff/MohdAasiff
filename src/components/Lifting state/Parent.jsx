import React from 'react'
import Child from './Child'

const Parent = (name) => {
    function getData(name){
      console.log(name);
    }
  return (
    <div>Parent</div>,
    <Child getData={getData}/>
  )
}

export default Parent