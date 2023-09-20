import React, {useState, useContext } from 'react'
import { Card, Image, CardBody, CardFooter, Stack, Heading, Button, Text } from '@chakra-ui/react'
import ItemCount from './ItemCount'
import { Link } from 'react-router-dom'
import { CartContext } from '../context/ShoppingCartContext'

const ItemDetail = ({ products }) => {
  const [quantityAdded, setQuantityAdded] = useState(false)
  const {addItem} = useContext(CartContext)
  
  const onAdd = (quantity) => {
    addItem(products,quantity)
    setQuantityAdded(true)
  }
  
  return (
    <div>
        <div key={products.id}>
          <Card
            direction={{ base: 'column', sm: 'row' }}
            overflow='hidden'
            variant='outline'>
            <Image
              objectFit='cover'
              maxW={{ base: '100%', sm: '150px' }}
              src={products.imagen}
              alt={products.titulo}
            />
            <Stack>
              <CardBody>
                <Heading size='md'>{products.titulo}</Heading>
                <Text py='2'>
                  {products.descripcion}
                </Text>
              </CardBody>
              <CardFooter>
              {
                !quantityAdded
                  ? <ItemCount initial={1} stock={products.stock} onAdd={onAdd} />
                  : <Link to={"/cart"}>
                    <Button variant='solid' colorScheme='blue' size='md'>
                      Go to the Cart
                    </Button> 
                  </Link>   
              }
              </CardFooter>
            </Stack>
          </Card>
          <div className='cart-return'>
              <Link to={"/"}>
                    <Button variant='solid' colorScheme='blue' size='md'>
                      Return
                    </Button>
                </Link>
          </div>
        </div>
    </div>
  )
}

export default React.memo(ItemDetail)