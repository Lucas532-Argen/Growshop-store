import Item from './Item'

const ItemList = ({ products }) => {
  return (
    <div className='itemList'>
      {products.map((prod) => (
        <Item
          key={prod.id}
          id={prod.id}
          titulo={prod.titulo}
          descripcion={prod.descripcion}
          precio={prod.precio}
          imagen={prod.imagen}
        />
      ))}
    </div>
  )
}

export default ItemList