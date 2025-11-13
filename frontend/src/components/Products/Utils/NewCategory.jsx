import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const NewCategory = () => {
    const [category, setCategory] = useState('')
    const apiHost = import.meta.env.VITE_API_HOST;
    const apiPort = import.meta.env.VITE_API_PORT;

    const URL_API = `${apiHost}:${apiPort}`;
    const navigate = useNavigate()

    const handleSubmit = (event) => {
        event.preventDefault();

        const formData = {
            name: category
        }

        console.log(JSON.stringify(formData));
        console.log(".-------------------------");
        
        console.log(formData);
        


        fetch(`${URL_API}/api/products/new-category`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        })
            .then((res) => res.json())
            .then(() => {
                setCategory('')
                navigate('/utils')
            })
            .catch((e) => console.log(e));
    };

    const handleChange = (event => {
        setCategory(event.target.value)
        
    })

    return (
        <form onSubmit={handleSubmit}>
            <h3>Agregar Categoría</h3>
            <label htmlFor="">Ingrese el nombre</label>
            <input type="text" name="category" value={category} onChange={handleChange}/>
            <button>Agregar</button>
        </form>
    );
};
