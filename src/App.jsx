
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Card from './card';
import CardItem from './carditem';
import { useState } from "react";
import Navbar from './Navabar';

function App() {
  // const [products, setProduct] = useState([
  //   {
  //     id: 1,
  //     title: "Samsung",
  //     price: 50000
  //   },
  //   {
  //     id: 2,
  //     title: "Realme",
  //     price: 20000
  //   },
  //   {
  //     id: 3,
  //     title: "Oppo",
  //     price: 10000
  //   },
  //   {
  //     id: 4,
  //     title: "MI",
  //     price: 9000
  //   },
  //   {
  //     id: 5,
  //     title: "Nokia",
  //     price: 15000
  //   },
  //   {
  //     id: 6,
  //     title: "OnePlus",
  //     price: 50000
  //   }
  // ]);
  const products =[
    {
      id: 1,
      title: "Samsung",
      price: 50000
    },
    {
      id: 2,
      title: "Realme",
      price: 20000
    },
    {
      id: 3,
      title: "Oppo",
      price: 10000
    },
    {
      id: 4,
      title: "MI",
      price: 9000
    },
    {
      id: 5,
      title: "Nokia",
      price: 15000
    },
    {
      id: 6,
      title: "OnePlus",
      price: 50000
    }
  ];
// let handleAddToCart = () =>{
  //   alert("Hello")
  // }
//  ------------------------------------------ //
  // let handleAddToCart = (id) =>{
  //   alert(id)
  // }
  // ----------------------------------------- //
  const [cartitems, setCartItem] = useState([]);
  const [total, setTotal] = useState(0)
  
  //1
  // let handleAddToCart = (id) =>{
  //   const productIndex = products.findIndex(obj => obj.id === id)
  //   const product = products[productIndex]
  //   setCartItem([...cartitems,product])
  // };
  // -----------------------------------------//
  // Adding totalvalue Rupee's
  // let handleAddToCart = (id) =>{
  //   const productIndex = products.findIndex(obj => obj.id === id)
  //   const product = products[productIndex]
  //   setCartItem([...cartitems,product])
  //   setTotal(total + product.price)
  // };
  // ------------------------------------------ //
  let handleAddToCart = (id) =>{
    const productIndex = products.findIndex(obj => obj.id === id)
    const product = products[productIndex]
  
    setCartItem([...cartitems,product])
    setTotal(total + product.price)
  };
 
let handleRemoveCart = (id) => {
  const cartItemIndex = cartitems.findIndex(obj => obj.id === id);
  setTotal(total - cartitems[cartItemIndex].price);
  cartitems.splice(cartItemIndex, 1)
  setCartItem([...cartitems]);
 
}
  return (
    <div className="container">
      <div className='row'>
        <div className='col-lg-8'>
          <div className='row'>
            <div className='col-lg-10'>
              <Navbar></Navbar>
            </div>
          </div>
          <div className='row'>
         
          {
              products.map((product)=>{
                return <Card cartitems={cartitems} data={product} handleAddToCart={handleAddToCart}></Card>
              })
            }
       
          </div>
        </div>
        <div className='col-lg-4'>
          <div className='row'>
            <div className='col-lg-8'>
              <h3>Card's</h3>
            </div>
          </div>
          <div className='row'>
            <div className='col-lg-12'>
              <ol class="list-group list-group-numbered">
                {/* <CardItem></CardItem>
                <CardItem></CardItem>
                <CardItem></CardItem>
                <CardItem></CardItem> */}
                {/* {
                  cartitems.map((item)=>{
                   return <CardItem></CardItem>
                  })
                } */}
                {/*  ----------Adding Item's -------- */}
                {/* {
                  cartitems.map((item)=>{
                   return <CardItem data={item}></CardItem>
                  })
                } */}
                {/* ------------ Adding Remove Item's ---------- */}
                {
                  cartitems.map((item)=>{
                   return <CardItem data={item} handleRemoveCart={handleRemoveCart}></CardItem>
                  })
                }
              </ol>
            </div>
            <div className='col-lg-12'>
              <h1>Total : Rs. {total}</h1>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;