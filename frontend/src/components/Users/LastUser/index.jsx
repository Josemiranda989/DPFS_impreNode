import React, { useEffect, useState } from "react";
import { Card } from "./Card";
useEffect;



export const LastUser = () => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const URL_BASE = "http://localhost:3000";
    useEffect(() => {
        fetch(`${URL_BASE}/api/users/last-user`)
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
