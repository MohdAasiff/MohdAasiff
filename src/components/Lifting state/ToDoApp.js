import React, { useState } from 'react'

const ToDoApp = () => {
const [val,setval]=useState('');
const [data,setdata]=useState([])

const valadd=()=>{
   setdata( [...data,val])
   setval('')
}

function removedata(i){
  const deletdata=data.filter((ele,id)=>{
    return i!=id;
  })
  setdata(deletdata)
}
  return (
   <>
    <div className='text-center mt-4 border' style={{width:'50%'}}>
        <input type='text' value={val} onChange={(e)=>setval(e.target.value)}/>
        <button  onClick={valadd}>add</button>
        <div>
            {data?.map((ele,i)=>{
               return(
                <div className='d-flex'key={i} >
                  <li className='m-2'>{ele}</li>
                   <button className='m-2' onClick={()=>removedata(i)}>delete</button>
                </div>
               )
            })}
        </div>
        
    </div>
    
   </>
  )
}

export default ToDoApp