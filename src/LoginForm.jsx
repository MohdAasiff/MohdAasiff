import React, { useState } from 'react'

const LoginForm = () => {
    const [data, setdata]=useState('')
    const [newData,setNewdata]=useState([])
    console.log('data is comimg',newData)

    const handleData=()=>{
        setNewdata([...newData,data])
        setdata('')
    }
  return (
    <div className='container'>
        <div className='row'>
            <div className='col-6'>
                <div className='form mt-4 text-center'>
                    <label>name</label>
                    <input type='text'  onChange={(e)=>setdata(e.target.value)} placeholder='enter text'/>
                   
                    <label>age</label>
                    <input type='number'  onChange={(e)=>setdata(e.target.value)} placeholder='enter text'/>
                    <div className=' m-4'>
                        <button className='btn btn-primary' onClick={handleData}>Submit data</button>
                    </div>
                </div>
            </div>
        </div>
        {newData.map((ele)=>{
            return(
                <h1>{ele}</h1>
            )    
            
        })}
    </div>
  )
}

export default LoginForm