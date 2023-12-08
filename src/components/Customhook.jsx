import React from 'react'

import useCostum from './useCostum'
const Customhook = () => {
   const [count,Increment,decrement]=useCostum()
   
  return (
   <div className="container">
    <div className="row">
        <div className="col">
            <button onClick={Increment}>Increment</button>
            <button onClick={decrement}>Dcerement</button>
        </div>
        <h1>{count}</h1>
    </div>
   </div>
  )
}

export default Customhook