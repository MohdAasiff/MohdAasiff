import React, { useState } from "react";
import SignatureCanvas from 'react-signature-canvas';

function Signature(){
    const [sign,setSign] = useState()
    const [url,setUrl] = useState()

    //data get cleared 
    const handleClear= () =>{
        sign.clear()
        setUrl('')
    }
    //to render the signature and show on screen when click to the  save
    const handleGenerate= () =>{
        setUrl(sign.getTrimmedCanvas().toDataURL('get/image'))
    }

    return(
        <div>
            <div style={{border:"2px solid black",width: 500, height: 200}}>
                <SignatureCanvas 
                    canvasProps={{width: 500, height: 200, className: 'sigCanvas'}}
                    ref={data=>setSign(data)}
                />
            </div>

            <br></br>
            <div>
            <button style={{height:"30px",width:"60px" ,marginLeft:'10px'}} onClick={handleClear}>Clear</button>
            <button  style={{height:"30px",width:"60px",marginLeft:'250px'}} onClick={handleGenerate}>Save</button>
            </div>

            <br/><br/>
            
            <img src={url} />
        </div>
    )
}
export default Signature
