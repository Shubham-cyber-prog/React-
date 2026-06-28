import { useState } from "react";
import Navbar from "./components/Navbar";
import Cart from "./components/Cart";
import MainLanding from "./components/MainLanding";
import FormValidation from "./components/FormValidation";
import { Routes, Route } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";



const App = () => {
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  

  const filteredCart = cart.filter((item) => {
    const query = searchTerm.toLowerCase();
    return (
      item.title?.toLowerCase().includes(query) ||
      item.category?.toLowerCase().includes(query) ||
      item.description?.toLowerCase().includes(query)
    );

    
  });



  return (
    <div
      style={{
        width: "100%",
        minHeight: "100vh",
        backgroundColor: "black",
      }}
    >
      <Navbar
        cart={cart}
        showCart={showCart}
        setShowCart={setShowCart}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />
      <Routes>
        <Route
          path="/"
          element={
            <>
              {showCart && (
                <div>
                  <h1>Shopping Cart</h1>
                  {cart.length === 0 ? (
                    <h3>Cart Empty</h3>
                  ) : filteredCart.length === 0 ? (
                    <h3>No matching cart items</h3>
                  ) : (
                    <h1>
                      {filteredCart.map((item) => (
                        <p
                          key={item.id}
                          style={{
                            color: "white",
                            fontSize: "20px",
                          }}
                        >
                          {item.title} - Quantity: {item.quantity}{" "}
                          {item.image && (
                            <img
                              src={item.image}
                              alt={item.title}
                              style={{ width: "10vh", height: "10vh" }}
                            />
                          )}
                        </p>
                      ))}
                    </h1>
                  )}
                </div>
              )}

              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  width: "100%",
                  justifyContent: "center",
                }}
              >
                
                <Cart
                  productimage="https://m.media-amazon.com/images/I/61WM6IDaBPL._SX522_.jpg"
                  productDescription="iQOO Z10R 5G (Aquamarine, 8GB RAM, 128GB Storage) | 32MP 4K Selfie Camera | Quad-Curved AMOLED Display | Dimensity 7400 Processor with 750K+ AnTuTu"
                  productparagraph="5k + bought in past month"
                  productprice={22999}
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
                  productprice={110300}
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

                <Cart
                  productimage="https://m.media-amazon.com/images/I/81s4wKEliIL._SL1315_.jpg"
                  productDescription="Dyazo 13.3 inch Laptop Bag Sleeve Sleeve Bag Cover for 13 inch Apple Mac Book Air Pro Retina 13 13.3 inch MacBook 13.3 inch and all other laptops & Notebooks with front packet and handle (Grey)"
                  productparagraph="10k + bought in past month"
                  productbutton="#1 Best Seller"
                  productprice={299}
                  productDiscount={-33}
                  producttext="prime"
                  productbuttontext="Limited Time Deal"
                  productDelivery="Free Delivery"
                  producttitle="Wednesday,June 24"
                />

                <Cart
                  productimage="https://m.media-amazon.com/images/I/61ULimPWODL._SX522_.jpg"
                  productDescription="Apple iPhone 17e 256 GB: 15.40 cm (6.1″) Super Retina XDR Display, A19 Chip, All-Day Battery Life, 48MP Fusion Camera, 256GB Starting Storage; Black"
                  productparagraph="500 + bought in past month"
                  productbutton="#1 Best Seller"
                  productprice={64900}
                  productDiscount={0}
                  producttext="prime"
                  productbuttontext="Limited Time Deal"
                  productDelivery="Free Delivery"
                  producttitle="Tuesday,June 23"
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

                <MainLanding cart={cart} setCart={setCart} searchTerm={searchTerm} />
              </div>
            </>
          }
        />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<MainLanding />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />,<App/>} />
        <Route path="*" element={<Home />} />
      </Routes>
    </div>
  );
};

export default App;