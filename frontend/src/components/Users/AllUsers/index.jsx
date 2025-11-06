import { useState, useEffect } from "react";
import { Card } from "./Card";
import './allUsers.css'

export const AllUsers = () => {
    const [users, setUsers] = useState(null);
    const [loading, setLoading] = useState(true);
    const URL_BASE = "http://localhost:3000";

    useEffect(() => {
        fetch(`${URL_BASE}/api/users`)
            .then((res) => res.json())
            .then((result) => {
                setUsers(result.data);
                setLoading(false);
            })
            .catch((e) => console.log(e));
    }, []);

    return (
        <div>
            <h1>Listado de Usuarios</h1>
            <div className="users-list">
                {!loading ? (
                    users.map((user) => {
                        // return <Card key={product.id} product={product} />;
                    return <Card key={user.id} user={user} />
                    })
                ) : (
                    <p>Cargando...</p>
                )}
            </div>
        </div>
    );
};
