import React, { useEffect, useState } from "react";
import "./detail.css";
import { useParams } from "react-router-dom";
import { Card } from "./Card";

export const Detail = () => {
    const [product, setProduct] = useState(null);
    const [statusCode, setStatusCode] = useState(200);
    const [loading, setLoading] = useState(true);
    const apiHost = import.meta.env.VITE_API_HOST;
    const apiPort = import.meta.env.VITE_API_PORT;

    const URL_API = `${apiHost}:${apiPort}`;

    const { id } = useParams();

    useEffect(() => {
        fetch(`${URL_API}/api/products/detail/${id}`)
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
