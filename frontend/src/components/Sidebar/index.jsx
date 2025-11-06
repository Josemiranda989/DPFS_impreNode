import "./sidebar.css";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import { useState } from "react";

export const SideBar = () => {
    const [viewSideBar, setViewSideBar] = useState(true);

    const handleClick = () => {
        setViewSideBar((estadoPrevio) => !estadoPrevio);
    };

    return (
        <div>
            <div className={`sidebar ${!viewSideBar ? 'hiddeSideBar' : ''}`}>
                <Link to="/">
                    <img src={logo} alt="" />
                </Link>
                <ul className="sidebar-links">
                    <li>
                        <Link to="/">Productos</Link>
                    </li>
                    <li>
                        <Link to="/users">Usuarios</Link>
                    </li>
                    <li>
                        <Link to="/last-user">Ultimo agregado</Link>
                    </li>
                    <li>
                        <Link to="/utils">Utilidades</Link>
                    </li>
                    <li>
                        <Link to="/form">Categoria ➕ </Link>
                    </li>
                </ul>
            </div>
            <button className="cerrarSideBar" onClick={handleClick}>{viewSideBar ? 'Cerrar' : 'Abrir'} SideBar❌</button>
        </div>
    );
};
