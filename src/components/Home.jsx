import React from 'react'

import CartItems from "./cartItems";
import Menu from "./Menu"
import Container from "./Container";

function Home({showCart, setShowCart, setItemCounter}) {
  return (
    <div className=''>
        <Container />
        {/* {showCart && <CartItems setShowCart={setShowCart} setItemCounter={setItemCounter} />}  */}
        <Menu setItemCounter={setItemCounter}/> 
        
    </div>
  )
}

export default Home