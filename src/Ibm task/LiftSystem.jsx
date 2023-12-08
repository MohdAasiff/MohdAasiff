import axios from 'axios';
import React from 'react'
import { useState,useEffect } from 'react';
import './LiftCSS.css'

const LiftSystem = () => {
     
    const [data, setdata] = useState([])
    const [page, setPage] = useState(1)
  console.log('data',data);
    const fetchData=async ()=>{
      try{
        const response=await axios.get('https://jsonplaceholder.typicode.com/posts')
        setdata(response.data)
      }catch(error){
          console.log('error is ',error);
      }
           
    }

    useEffect(() => {
      fetchData()
    }, [])
    
    const selectPageHandler=(selectPageHandler)=>{
      if(
        selectPageHandler>=1&&selectPageHandler<=data.length/10 &&selectPageHandler!==page
      )
                setPage(selectPageHandler)
    }
    
  
    return (
       <div>
        {data.length>0 && (
             <div className='container'>
            
             <div className="row">
              {
                  data.slice(page*10-10,page*10).map((ele)=>{
                      return(
                         <div className="col-3">
                             <div className="card mt-4">
                              <div className="card-body m-4 text-center">
                                  <h4 className='mt-4'>{ele.title.slice(0,10)}</h4>
                              </div>
                          </div>
                         </div>
                      )
                  })
              }
             </div>
           <div className="paginatoin">
           <span onClick={()=>selectPageHandler(page-1)}>◀</span>
          {
            [...Array(data.length/10)].map((_,i)=>{
              return <span className={page==i+1?'pageClick':'pageactive'} onClick={()=>selectPageHandler(i+1)}>{i+1}</span>
             })
             }
           <span  onClick={()=>selectPageHandler(page+1)}>▶</span>
           </div>
          </div>
        )}
       </div>
    )
}

export default LiftSystem