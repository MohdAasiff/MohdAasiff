import React, { useEffect, useState } from 'react'
import axios from 'axios';
import '../Pagination/Pagination.css'
const Pagination = () => {
  const [getdata, setData] = useState([]);
  console.log(getdata);
  const [page, setpage] = useState(1)


useEffect(() => {
  axios.get("https://dummyjson.com/products").then((data) => {
   
    setData(data);
  });
}, []);
 

// const handlepage=(perpage)=>{
//   setpage(perpage)
// }
  return (
    <>
      <div>
        {/* {getdata?.length > 0 && (

          <div className='container'>
            <div className='row'>
              { 
                getdata?.splice(page*3-3,page*3).map((ele, index) => {
                  return (
                    <div className='col-4' key={index}>
                      <div className="card m-2" >
                        <img className="card-img-top" src="..." alt="Card image cap"/>
                          <div className="card-body text-center">
                            <h5 className="card-title">{ele.title}</h5>
                            <p className="card-text">{ele.brand}</p>
                           <button className='btn btn-primary'>add to the card</button>
                          </div>
                      </div>
                    </div>
                  )
                })
              }
            </div>

          </div>
        )} */}
        {/* <div className='pagination'>
          <span onClick={()=>handlepage(page-1)}>◀</span>
          {
            getdata.map((_, i) => {
              return <span className='pagination_num border' key={i} onClick={()=>handlepage(i+1)}>{i + 1}</span>
            })
          }
          <span onClick={()=>handlepage(page+1)}>▶</span>
        </div> */}

      </div>
    </>
  )
}

export default Pagination