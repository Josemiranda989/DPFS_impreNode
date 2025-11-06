import React, { useEffect, useState } from "react";
import './utils.css'

export const Utils = () => {
    const [categories, setCategories] = useState(null);
    const [colors, setColors] = useState(null);
    const [loading, setLoading] = useState(true);

    const URL_BASE = "http://localhost:3000";

    useEffect(() => {
        fetch(`${URL_BASE}/api/products/utils`)
            .then((res) => res.json())
            .then((result) => {
                console.log(result);
                setCategories(result.categories);
                setColors(result.colors);
                setLoading(false);
            })
            .catch((e) => console.log(e));
    }, []);

    return (
        <>
            <h3 className="title">Utils</h3>
            {!loading ? (
                <>
                    <div class="utils-list">
                        <h3>Listado de Colores {colors.length}</h3>
                        <ul >
                            {colors.map((color) => (
                                <li key={color.id}>{color.name}</li>
                            ))}
                        </ul>
                    </div>
                    <div class="utils-list">
                        <h3>Listado de Categorias {categories.length}</h3>
                        <ul >
                            {categories.map((category) => (
                                <li key={category.id}>{category.name}</li>
                            ))}
                        </ul>
                    </div>
                </>
            ) : (
                <p>Cargando</p>
            )}
        </>
    );
};
