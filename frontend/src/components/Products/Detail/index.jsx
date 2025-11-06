import React, { useEffect, useState } from "react";
import "./detail.css";
import { useParams } from "react-router-dom";
import { Card } from "./Card";

export const Detail = () => {
    const [product, setProduct] = useState(null);
    const [statusCode, setStatusCode] = useState(200);
    const [loading, setLoading] = useState(true);
    const URL_BASE = "http://localhost:3000";

    const { id } = useParams();

    useEffect(() => {
        fetch(`${URL_BASE}/api/products/detail/${id}`)
            .then((res) => res.json())
            .then((result) => {
                // console.log(result.meta.status);
                setStatusCode(result.meta.status);
                setProduct(result.data);
                setLoading(false);
            });
    }, []);

    return (
        <div>
            <div className="product-list">
                {!loading ? (
                    statusCode == 200 ? (
                        <Card product={product} title="Detalle del producto"/>
                        
                    ) : (
                        <p>Producto no encontrado</p>
                    )
                ) : (
                    <p>Cargando...</p>
                )}
            </div>
        </div>
    );
};
