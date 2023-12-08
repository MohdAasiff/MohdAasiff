import React, { useCallback } from 'react'
import { useState } from 'react'
import Geteefect from './Geteefect'

const Effect = () => {
    const [count, setcount] = useState(0)

const Learning=useCallback(()=>{
    //get trigred
},[])
  return (
      <div className='container'>
          <div className='row'>
            <div className='col'>
                <Geteefect Learning={Learning} />
                <div>{count}</div>
                <button onClick={()=>setcount(count+1)} className='m-4'>add</button>
                <button onClick={()=>setcount(count-1)}>dec</button>
            </div>
          </div>
      </div>
  )
}

export default Effect