const SERVER_URL_IMAGES = `http://localhost:3000/images/products/`;

export const Card = ({product, title}) => {
    return (
        <div className="product-card">
            
            <h1>{title} {product.name} </h1>
            <img
                src={`${SERVER_URL_IMAGES}${product.image}`}
                alt="image-prod"
            />
            <h4>{product.name}</h4>
            <p>{product.price}</p>

        </div>
    );
};
