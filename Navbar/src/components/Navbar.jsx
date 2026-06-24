import React from 'react'


function Navbar({cart, showCart, setShowCart}) {
  return (
    <div
      style={{
        backgroundColor: "#264653",
        height: "50px",
        padding: "15px 30px",
        display: "flex",
        width: "97%",
        justifyContent: "space-between",
        alignItems: "center",
        textDecoration: "none",
        borderRadius: "20px",
        position: "fixed",
        top: "0",
        left: "0",
      }
      
    }
    >
      <h1 style={{ color: "white", fontSize: "40px",fontFamily: 'Sans-serif', }}>N A V B A R</h1>

      <div
        style={{
          display: "flex",
          gap: "20px",
        }}
      >
        <a style={{  color: "white", padding: "10px 20px", marginRight: "10px," }} href="/">
          Home
        </a>
        <a style={{  color: "white", padding: "10px 20px", marginRight: "10px" }} href="/Navbar/src/components/MainLanding.jsx">
          Shop
        </a>
        <a style={{  color: "white", padding: "10px 20px", marginRight: "10px" }} href="/Blog">
          Blog
        </a>

         <a style={{  color: "white", padding: "10px 20px", marginRight: "10px" }} href="/about">
          About
        </a>

         <a style={{  color: "white",padding: "10px 20px", marginRight: "10px" }} href="/contact">
          Contact
        </a>
        
      </div>
      <button 
        style={{
          backgroundColor: "blue",
          color: "white",
          border: "none",
          padding: "10px 20px",
          borderRadius: "5px",
          fontSize: "16px",
        }}
        onClick={() => setShowCart(!showCart)}
      >
        Cart ({cart.length})
      </button>
    </div>
  );
}

export default Navbar;