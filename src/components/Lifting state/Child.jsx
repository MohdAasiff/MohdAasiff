import React, { useState } from 'react'

const Child = (props) => {
    const [name,setname]=useState('');
    function handleSubmit(e){
      e.preventDefault();
       props.getData(name)
    }
  return (
    <div className='text-center'>
        <form onSubmit={handleSubmit
        }>
            <input type='text' onChange={(e)=>{setname(e.target.value)}}/>
            <button type='submit'>submit</button>
        </form>
    </div>
  )
}

export default Child