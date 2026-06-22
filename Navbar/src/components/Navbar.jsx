import React from 'react'


function Navbar() {
  return (
    <div
      style={{
        backgroundColor: "black",
        height: "60px",
        width: "100%",
        padding: "15px 30px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
      }}
    >
      <h1 style={{ color: "green"}}>N</h1>

      <div
        style={{
          display: "flex",
          gap: "20px",
        }}
      >
        <a style={{  color: "white", padding: "10px 20px", marginRight: "10px," }} href="/">
          Home
        </a>
        <a style={{  color: "white", padding: "10px 20px", marginRight: "10px" }} href="/about">
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
    </div>
  );
}

export default Navbar;