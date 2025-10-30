export const Card = ({product}) => {
  const SERVER_URL_IMAGES = `http://localhost:3000/images/products/`


  return (
    <div className="product-card">
      <img src={`${SERVER_URL_IMAGES}${product.image}`} alt="image-prod" />
      <h4>{product.name}</h4>
      <p>{product.price}</p>
    </div>
  )
}
