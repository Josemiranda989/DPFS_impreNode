export const Card = ({product}) => {
  return (
    <div className="product-card">
      <img src={product.urlImage} alt="image-prod" />
      <h4>{product.name}</h4>
      <p>{product.price}</p>
    </div>
  )
}
