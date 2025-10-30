import React, { useEffect, useState } from "react";
import { Card } from "./Card";
import "./catalog.css";

export const Catalog = () => {
    const [products, setProducts] = useState(null);
    const [loading, setLoading] = useState(true);
    const URL_BASE = "http://localhost:3000";
    useEffect(() => {
        fetch(`${URL_BASE}/api/products`)
            .then((res) => res.json())
            .then((result) => {
                // console.log(result);
                setProducts(result.data);
                setLoading(false);
            });
    }, []);

    return (
        <div>
            <h1>Listado de Productos</h1>
            <div className="product-list">
                {!loading ? (
                    products.map((product) => {
                        return <Card key={product.id} product={product} />;
                    })
                ) : (
                    <p>Cargando...</p>
                )}
            </div>
        </div>
    );
};
