import { Card, CardBody, CardFooter,Text, Heading, Image, Button, Stack, Divider, ButtonGroup } from '@chakra-ui/react';
import { Link } from 'react-router-dom'

const Item = ({titulo, descripcion, precio, imagen, id }) => {
  return (
      <>
          <Card maxW='sm'>
              <CardBody key={id}>
                  <Image className='img-Card'
                      src={imagen}
                      alt='image product'
                      borderRadius='lg'
                  />
                  <Stack mt='6' spacing='3'>
                      <Heading size='md'>{titulo}</Heading>
                      <Text>{descripcion}</Text>
                      <Text color='blue.600' fontSize='2xl'>
                      $USD {precio}
                      </Text>
                  </Stack>
              </CardBody>
              <Divider />
              <CardFooter>
                  <ButtonGroup spacing='2'>
                      <Link to={`/item/${id}`}>
                          <Button variant='solid' colorScheme='blue'>
                              Detail
                          </Button>
                      </Link>
                  </ButtonGroup>
              </CardFooter>
          </Card>
      </>
  )
}

export default Item