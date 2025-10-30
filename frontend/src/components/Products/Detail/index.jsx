import React, { useEffect, useState } from "react";
import "./detail.css";

export const Detail = () => {
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const URL_BASE = "http://localhost:3000";
    const SERVER_URL_IMAGES = `http://localhost:3000/images/products/`;

    useEffect(() => {
        fetch(`${URL_BASE}/api/products/detail/8`)
            .then((res) => res.json())
            .then((result) => {
                console.log(result);
                setProduct(result.data);
                setLoading(false);
            });
    }, []);

    return (
        <div>
            
            <div className="product-list">
                {!loading ? (
                    <div className="product-card">
                        <h1>Detalle de producto {product.name} </h1>
                        <img
                            src={`${SERVER_URL_IMAGES}${product.image}`}
                            alt="image-prod"
                        />
                        <h4>{product.name}</h4>
                        <p>{product.price}</p>
                    </div>
                ) : (
                    <p>Cargando...</p>
                )}
            </div>
        </div>
    );
};
