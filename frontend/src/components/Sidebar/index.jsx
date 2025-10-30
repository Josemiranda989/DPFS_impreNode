import "./sidebar.css";
import logo from "../../assets/logo.png";

export const SideBar = () => {
    return (
        <div className="sidebar">
            <a href="/">
                <img src={logo} alt="" />
            </a>
            <ul className="sidebar-links">
                <li>
                    <a href="">Productos</a>
                </li>
                <li>
                    <a href="">Usuarios</a>
                </li>
                <li>
                    <a href="">Ultimo agregado</a>
                </li>
                <li>
                    <a href="">Categorias</a>
                </li>
                <li>
                    <a href="">Contacto</a>
                </li>
            </ul>
        </div>
    );
};
