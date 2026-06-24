import React from "react";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import Cart from "./components/Cart";
import Products from "./components/MainLanding";
import MainLanding from "./components/MainLanding";

const App = () => {
  return (
    <div 
    style ={{
      width:"100%",
      height:"100%",
      backgroundColor:"black",
    }}
    >
      <Navbar />

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          width : "100%",
          justifyContent: "center",
        }}
      >
        {/* Room Cards */}
        {/* <Card
          productimage="https://th.bing.com/th/id/OIP.j97t16dta-EcTSzDXS_c9gHaEJ?w=296&h=180&c=7&r=0&o=7&pid=1.7&rm=3"
          productname="Room 1"
          productprice={19.99}
        />

        <Card
          productimage="https://th.bing.com/th/id/OIP.JkM3qiDaWUBH4kdvUk0j1QHaFc?w=225&h=180&c=7&r=0&o=7&pid=1.7&rm=3"
          productname="Room 2"
          productprice={29.99}
        />

        <Cart
          productimage="https://m.media-amazon.com/images/I/61WM6IDaBPL._SX522_.jpg"
        <Card
          productimage="https://th.bing.com/th/id/OIP.iDWeV75PBxklN6u-97Pb6AHaEZ?w=264&h=180&c=7&r=0&o=7&pid=1.7&rm=3"
          productname="Room 3"
          productprice={39.99}
        /> */}

        {/* Product Carts */}
       
        <Cart
          productimage="https://m.media-amazon.com/images/I/61WM6IDaBPL._SX522_.jpg"
          productDescription="iQOO Z10R 5G (Aquamarine, 8GB RAM, 128GB Storage) | 32MP 4K Selfie Camera | Quad-Curved AMOLED Display | Dimensity 7400 Processor with 750K+ AnTuTu"
          productparagraph="5k + bought in past month"
          productprice={22,999}
          productDiscount={-2}
          producttext="prime"
          productDelivery="Free Delivery"
          producttitle="Wednesday,June 24"
        />

         <Cart
          productimage="https://m.media-amazon.com/images/I/81biKixsaDL._SY606_.jpg"
          productDescription=" SWAGR 12 Pairs Sports Cotton Ankle Length Socks for Men, Pack of 12., Assorted"
          productbutton="#1 Best Seller"
          productparagraph="10k + bought in past month"
          productprice={172}
          productDiscount={-87}
          productbuttontext="Limited Time Deal"
          producttext="prime"
          productDelivery="Free Delivery"
          producttitle="Wednesday,June 24"

        />


        <Cart
          productimage="https://m.media-amazon.com/images/I/41ldKaauZVL._SY300_SX300_QL70_FMwebp_.jpg"
          productDescription="Apple 2026 MacBook Air 13″ Laptop with M5 chip: AI and Apple Intelligence, 34.46 cm (13.6″) Liquid Retina Display, 16GB Unified Memory, 512GB SSD Storage, 12MP Center Stage Camera, Touch ID; Silver"
          productparagraph="10k + bought in past month"
          productprice={1,10,300}
          productDiscount={-8}
          producttext="prime"
          productDelivery="Free Delivery"
          producttitle="Wednesday,June 24"

        />

        <Cart
          productimage="https://images-eu.ssl-images-amazon.com/images/I/71+oHMoJ8cL._AC_UL165_SR165,165_.jpg"
          productDescription="Deewar Mein Ek Khidki Rehti Thi (Hindi Novel) paperback >Vinod Kumar Shukla"
          productparagraph="10k + bought in past month"
          productprice={190}
          productDiscount={-36}
          producttext="prime"
          productDelivery="Free Delivery"
          producttitle="Tuesday,June 23"
        />

        <Cart
          productimage="https://m.media-amazon.com/images/I/41X3c3a1jHL._SY300_SX300_QL70_FMwebp_.jpg"
          productDescription="EooCoo Premium Keyboard Cover Compatible for 2026 2025-2021 M5-M2 MacBook Air 13/15,M5-M1 Pro/Max MacBook Pro 14/16, 2026 MacBook Neo 13,Laptop Accessories Ultra Thin Protector Skin - TPU Clear"
          productparagraph="10k + bought in past month"
          productbutton="#1 Best Seller" 
          productprice={299}
          productDiscount={-34}
          producttext="prime"
          productDelivery="Free Delivery"
          producttitle="Wednesday,June 24"
        />

        <Cart
          productimage="https://m.media-amazon.com/images/I/3196Gwc4aeL.jpg"
          productDescription="EooCoo Case Compatible for New Apple MacBook Air 13 inch M5 2026-2022 M4 M3 M2, A3449 A3240 A3113 A2681 with Touch ID, Mac Air 13.6 inch Laptop Protective Plastic Hard Shell Cover Smooth-Crystal Clear"
          productparagraph="10k + bought in past month"
          productbutton="#1 Best Seller"
          productprice={799}
          productDiscount={-33}
          producttext="prime"
          productbuttontext="Limited Time Deal"
          productDelivery="Free Delivery"
          producttitle="Wednesday,June 24"
        />
        <MainLanding />      
      </div>
    </div>
  );
};

export default App;