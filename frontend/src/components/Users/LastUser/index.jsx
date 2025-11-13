import React, { useEffect, useState } from "react";
import { Card } from "./Card";
useEffect;



export const LastUser = () => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const {VITE_API_HOST: apiHost, VITE_API_PORT: apiPort}= import.meta.env


    const URL_API = `${apiHost}:${apiPort}`;
    useEffect(() => {
        fetch(`${URL_API}/api/users/last-user`)
            .then((res) => res.json())
            .then((result) => {
                setUser(result.data);
                setLoading(false);
            })
            .catch((e) => console.log(e));
    }, []);
    return (
        <>
        <h1>Ultimo usuario agregado</h1>
        {!loading ? (
            <Card user={user}/>            
        ) : (
            <p>Cargando...</p>
        )}
        </>
    )
};
