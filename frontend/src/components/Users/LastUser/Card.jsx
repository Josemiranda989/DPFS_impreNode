export const Card = ({ user }) => {
    return (
        <div>
            <p>{user.name}</p>
            <img
                src={user.urlImage}
                alt="imagen-de-perfil"
            />
            <p>{user.email}</p>
        </div>
    );
};
