import React from "react";


export default function Card(props){//
    let width="590px";
    let height="290px";

return(

    <>
    <div className="imgOfWebSeries">
        <img src={props.sourceImg} alt="DarkWebSeries" width={width} height={height}/>
    </div>
    <div className="titleOfWebSeries" >
            <h1>{props.className}</h1>
    </div>
    <div className="aboutTheWebSeries">
       
         <h1>{props.about}</h1>  
    </div>
    </>
)

}