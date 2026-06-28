import { useState } from 'react'
import { NavLink } from 'react-router-dom';



function Navbar({cart, showCart, setShowCart, searchTerm, setSearchTerm}) {
  const [query, setQuery] = useState(searchTerm);



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
        borderRadius: "5px",
        // position: "fixed",
        top: "0",
        left: "0",
      }
      
    }
    >
      <h1 style={{ color: "white", fontSize: "40px",fontFamily: 'Sans-serif',textDecoration: "underline" }}>N A V B A R</h1>


      <input type="text" placeholder="Search..." value={query} onChange={(e) => setQuery(e.target.value)} style={{
        padding: "5px",
        borderRadius: "5px",
        border: "10px solid white",
        width: "300px",
        backgroundColor: "white",
        color: "black",

      }} />
  
  
      <button style = {{
        backgroundColor: "blue",
        color: "white",
        border: "none",
        padding: "10px 20px",
        borderRadius: "20px",
        fontSize: "16px",
          cursor: "pointer",
      }}
        onClick={() => setSearchTerm(query.trim())} 
    >Search</button>

    <button style = {{
        backgroundColor: "blue",
        color: "white",
        border: "none",
        padding: "10px 20px",
        borderRadius: "20px",
        fontSize: "16px",
          cursor: "pointer",
      }}
      onClick ={() => {
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";
      }}
    >Dark</button>



      <div
        style={{
          display: "flex",
          gap: "20px",
        }}
      >
        <NavLink  to="/home" style={{ color: "white", textDecoration: "underline", fontSize: "20px" }}>Home</NavLink>
        <NavLink to="/about" style={{ color: "white", textDecoration: "underline", fontSize: "20px" }}>About</NavLink>
        <NavLink to="/contact" style={{ color: "white", textDecoration: "underline", fontSize: "20px" }}>Contact</NavLink>
        <NavLink to="/cart" style={{ color: "white", textDecoration: "underline", fontSize: "20px" }}>Cart</NavLink>
      
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