import React from "react";

function Card(props) {
  return (
    <div >
        <div style={{
            width: "300px",
            height: "400px",
            border: "1px solid black",
            backgroundColor: "lightgray",
            borderRadius: "10px",
            gap: "10px",
            margin: "20px",
            marginTop: "20px",
        }}>
            <img src={props.productimage} alt="Product" style={{ width: "100%", height: "200px", borderRadius: "10px 10px 0 0" }} />
            <h2 style={{ padding: "10px" }}>{props.productname}</h2>
            <p style={{ padding: "10px" }}>Price: ${props.productprice}</p>
        </div>
    </div>
  
     
  );
}

export default Card;