import React from "react";

function Cart(props) {
  return (
    <div
      style={{
        width: "250px",
        backgroundColor: "white",
      }}
    >
      <img
        src={props.productimage}  
        alt={props.productname}
        style={{
          width: "100%",
          height: "180px",
          objectFit: "contain",
        }}
      />

      <h4
        style={{
          color:"#2162A1",
          fontSize: "12px",
          fontWeight: "500",
          marginTop: "10px",
          marginBottom: "8px",
          lineHeight: "20px",
        }}
      >
        {props.productDescription}
      </h4>

      <button 
      style={{
        backgroundColor: "orange",
        color: "white",
        border: "none",
        borderRadius: "4px",
        padding: "5px 10px",
        fontSize: "13px",
        marginBottom: "8px",
      }}
      >
        {props.productbutton}
      </button>

      <p
        style={{
          color: "black",
          fontSize: "11px",
          margin: "5px 0",
        }}
      >
        {props.productparagraph}
      </p>

      <h3
        style={{
          margin: "5px 0",
          fontSize: "22px",
          color: "black",
        }}
      >
       ₹{props.productprice}
      </h3>

      <p
        style={{
          color: "red",
          fontSize: "12px",
          marginBottom: "10px",
        }}
      >
      {props.productDiscount}
      </p>

       <button 
      style={{
        backgroundColor: "red",
        color: "white",
        border: "none",
        borderRadius: "4px",
        padding: "5px 10px",
        fontSize: "12px",
        marginBottom: "8px",
      }}
      >
        {props.productbuttontext}
      </button>

    <span 
      style={{
        color: "#007185",
        fontSize: "12px",
        fontWeight: "500",
        marginBottom: "10px",
      }}
      >
        {props.producttext}
      </span>
      
      <span 
      style={{
        color: "black",
        fontSize: "15px",
        marginBottom: "10px",
      }}
      >
        {props.productDelivery}
      </span>

      <p
        style={{
          color: "black",
          fontSize: "12px",
          marginBottom: "10px",
        }}
      >
        {props.producttitle}
      </p>
    </div>
  );
}

export default Cart;