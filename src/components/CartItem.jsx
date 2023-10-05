import React, { useContext } from "react"
import { CartContext } from "../context/ShoppingCartContext"
import { Button } from '@chakra-ui/react'
const CartItem = ({ item }) => {
  const { deleteItem } = useContext(CartContext)
  return (
    <div className='cartItem'>
      <img src={item.imagen} alt={item.titulo} />
      <p>{item.titulo}</p>
      <p>$USD {item.precio}</p>
      <p>Quantity: {item.quantity}</p>
      <p>Sub total : $USD {item.quantity * item.precio}</p>
      <Button variant='solid' colorScheme='red' size='sm' onClick={() => deleteItem(item.id)}>X</Button>
    </div>
  )
}

export default CartItem 