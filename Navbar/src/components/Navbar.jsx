import React from 'react'


function Navbar() {
  return (
    <div
      style={{
        backgroundColor: "white",
        height: "60px",
        width: "100%",
        padding: "15px 30px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        borderRadius: "15px",
      }}
    >
      <h1 style={{ color: "cyan", fontSize: "30px" }}>Navbar</h1>

      <div
        style={{
          display: "flex",
          gap: "20px",
        }}
      >
        <a style={{  color: "cyan", padding: "10px 20px", marginRight: "10px," }} href="/">
          Home
        </a>
        <a style={{  color: "cyan", padding: "10px 20px", marginRight: "10px" }} href="/Navbar/src/components/MainLanding.jsx">
          Shop
        </a>
        <a style={{  color: "cyan", padding: "10px 20px", marginRight: "10px" }} href="/Blog">
          Blog
        </a>

         <a style={{  color: "cyan", padding: "10px 20px", marginRight: "10px" }} href="/about">
          About
        </a>

         <a style={{  color: "cyan",padding: "10px 20px", marginRight: "10px" }} href="/contact">
          Contact
        </a>
        
      </div>
    </div>
  );
}

export default Navbar;