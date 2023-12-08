import React, { useState } from 'react'

const ToDoDO = () => {
    const [data,setdata]=useState('');
    const [show,setshow]=useState([]);
    console.log(data);
    console.log('show',show);
    const handledata=()=>{
        setshow([...show,data]);
        setdata('')
    }

    function handledelete(i){
        
        const filter=show.filter((ele,id)=>{
            return id!==i
        })
        setshow(filter)
    }
        
    
  return (
    <div className='container'>
       <div className='row'>
        <div className='col-12 text-center'>
         <h1>hi there iam going to craete todo</h1>
        </div>
        <div className="col-12 text-center mt-4">
            <input type='text' value={data} placeholder='enter text' onChange={(e)=>setdata(e.target.value)}/>
             <button className='btn m-4 btn-primary' onClick={handledata}>Submit data</button>
        </div>
        <div className='text-center'>
        {
            show?.map((ele,i)=>{
                return(
                   <div className='d-flex' key={i}>
                     <li className='text-center m-4'>{ele}</li>
                     <button className='btn btn-primary m-4' onClick={()=>handledelete(i)}>remove</button>
                   </div>
                    
                    
                )
            })
        }
        </div>
       </div>
    </div>
  )
}

export default ToDoDO