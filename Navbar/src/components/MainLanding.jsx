import { useState } from "react"

    const product = [
        {id:1,
        title:"Iphone16",
        category:"  Smartphone",
        ratiing:4.5,
        stock:10,
        image:"https://i5.walmartimages.com/seo/AT-T-iPhone-16-512GB-Ultramarine-Apple-Intelligence_a3b6ac92-1ca0-4ba6-9d75-bccd64606149.63e2598111937385151c5d70de1d755e.jpeg",
        description:"Latest Iphone",
        quantity:0
        },
        {id :2,
        title:"Iphone15",
        category:"Mobile",
        ratiing:4.5,
        stock:10,
        image:"https://tse2.mm.bing.net/th/id/OIP.82g1COSP8yCAf47FddRmHQHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
        description:"Latest Iphone ",
        quantity:0

        },
        {
            id :3,
            title:"Iphone14",
            category:"Mobile",
            ratiing:4.5,
            stock:7,
            image:"https://tse4.mm.bing.net/th/id/OIP.6t81fAeRSKp0AKCzWzn33AHaEK?rs=1&pid=ImgDetMain&o=7&rm=3",
            description:"Latest Iphone",
            quantity:0

        },
        {
            id :4,
            title:"Iphone13",
            category:"Mobile",
            ratiing:4.2,
            stock:5,
            image:"https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/refurb-iphone-13-blue-2023?wid=2000&hei=1897&fmt=jpeg&qlt=95&.v=1679072983869",
            description:"Latest Iphone",
            quantity:0
        },
        {
            id :5,
            title:"Iphone12",
            category:"Mobile",
            ratiing:4.4,
            stock:9,
            image:"https://th.bing.com/th/id/OIP.7xOSq9IEBaXj4rPpdYJpNAHaHa?w=169&h=180&c=7&r=0&o=7&pid=1.7&rm=3",
            description:"Latest Iphone",
            quantity:0
        },
        {
            id :6,
            title:"Iphone11",
            category:"Mobile",
            ratiing:3.9,
            stock:4,
            image:"https://th.bing.com/th/id/OIP.IoZCouFAEyN1dCvqXvy1twHaHa?w=177&h=180&c=7&r=0&o=7&pid=1.7&rm=3",
            description:"Latest Iphone",
            quantity:0
        },
        {
            id :7,
            title:"Iphone10",
            category:"Mobile",
            ratiing:4.0,
            stock:3,
            image:"https://tse3.mm.bing.net/th/id/OIP.6t81fAeRSKp0AKCzWzn33AHaEK?rs=1&pid=ImgDetMain&o=7&rm=3",
            description:"Latest Iphone",
            quantity:0
        },
        {
            id :8,
            title:"MacBook Pro",
            category:"Laptop",
            ratiing:4.8,
            stock:5,
            image:"https://th.bing.com/th/id/OIP.Zu4UlfnziQSpd2a79GVQZAHaEK?w=350&h=180&c=7&r=0&o=7&pid=1.7&rm=3",
            description:"Latest MacBook Pro",
            quantity:0
        },
        {
            id :9,
            title:"MacBook Air",
            category:"Laptop",
            ratiing:4.6,
            stock:7,
            image:"https://th.bing.com/th/id/OIP.lDFJdaBd17haSijz24pPrwHaFj?w=222&h=180&c=7&r=0&o=7&pid=1.7&rm=3",
            description:"Latest MacBook Air",
            quantity:0
        },
        {
            id :10,
            title:"iPad Pro",
            category:"Tablet",
            ratiing:4.7,
            stock:6,
            image:"https://th.bing.com/th/id/OIP.eqqSVBUsz7WZtbnpcC6CMQHaIa?w=150&h=180&c=7&r=0&o=7&pid=1.7&rm=3",
            description:"Latest iPad Pro",
            quantity:0
        },
        {
            id :11,
            title:"Earphone",
            category:"Tablet",
            ratiing:4.7,
            stock:6,
            image:"https://th.bing.com/th/id/OIP.Zu4UlfnziQSpd2a79GVQZAHaEK?w=350&h=180&c=7&r=0&o=7&pid=1.7&rm=3",
            description:"Latest iPad Pro",
            quantity:0
        },
        {
            id :12,
            title:"Samsung Earbuds",
            category:"Audio",
            ratiing:4.7,
            stock:6,
            image:"https://th.bing.com/th/id/OIP.g87d5OXDf_gen_KDpCaWiAHaJ6?w=132&h=180&c=7&r=0&o=7&pid=1.7&rm=3",
            description:"Latest iPad Pro",
            quantity:0
        },
    ]
   


 const MainLanding = () => {
    const [products, setProducts] = useState(product);
    function increaseQuantity(id) {
        const updatedProducts = products.map((product) => {
            if (product.id === id && product.quantity < product.stock) {
                return { ...product, quantity: product.quantity + 1 };
            }
            return product;
        });
        setProducts(updatedProducts);
    } 
  
//add to cart 
  const [cartvalue, setCartValue] = useState([]);

function addToCart(item) {
  const product = arr.find((product) => product.id === item.id);

  if (product) {
    updateValue(product);
  }
}

function updateValue(product) {
  const updatedProduct = {
    ...product,
    quantity: 1,
  };

  setCartValue((prevCart) => [...prevCart, updatedProduct]);
}

console.log(cartvalue);

  return (
    <div 
    style={{
        display:"flex",
        flexWrap:"wrap",
        gap:"20px",
        justifyContent:"center",
        marginTop:"20px"
    }}
    >
        {
            products.map((item)=>(
                <div 
                key={item.id}
                 style={{
                    border:"1px solid white",
                    borderRadius:"8px",
                    backgroundColor:"#f5f5f5",
                    padding:"16px",
                    width:"200px",
                    textAlign:"center"
                }}
                >
                <div >
                <img 
                src={item.image}
                alt={item.title}
                style={{
                    width:"100%",
                    height:"180px",
                    objectFit:"cover",
                    marginBottom:"8px"
                }}
                />
                <span
                style={{
                    marginBottom:"8px",
                    position:"absolute",
                    backgroundColor:"red",
                    color:"#fff",
                    padding:"5px 10px",
                    borderRadius:"20px",
                    fontSize:"12px",
                    fontweight:"600",
                }}
                >
               {item.category}</span></div>
               <h3>{item.title}</h3>
                <p style={{ color: "black" }}><strong>Rating: </strong>{item.ratiing}</p>
                <p style={{ color: "black" }}><strong>Stock: </strong>{item.stock}</p>
                <p style={{
                    marginBottom:"8px",
                    color: "black"
                }}
                ><strong>Description: </strong>{item.description}</p>
                <span 
                style ={{
                    display:"inline-block",
                    marginBottom:"8px",
                    color:"black",
                }}
                > Quantity:{item.quantity}</span>
                <button style={{
                    padding:"8px 16px",
                    backgroundColor:"cyan",
                    color:"#fff",
                    border:"none",
                    borderRadius:"20px",
                    cursor:"pointer",
                    gap:"10px",
                }}
                 onClick={() => increaseQuantity(item.id)}> +</button>
                
                <button style={{
                    padding:"8px 16px",
                    backgroundColor:"blue",
                    color:"#fff",
                    border:"none",
                    borderRadius:"20px",
                    cursor:"pointer",
                    gap:"10px",
                }}
                onClick={() => addToCart(item)}>Add to Cart</button>
                </div>
               
            ))
        }
    </div>
  )
}

export default MainLanding
