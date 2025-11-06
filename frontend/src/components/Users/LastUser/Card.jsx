const SERVER_URL_IMAGES = `http://localhost:3000/images/users/`;

export const Card = ({ user }) => {
    return (
        <div>
            <p>{user.name}</p>
            <img
                src={`${SERVER_URL_IMAGES}/${user.profile}`}
                alt="imagen-de-perfil"
            />
            <p>{user.email}</p>
        </div>
    );
};
