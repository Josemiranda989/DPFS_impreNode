export const Card = ({user}) => {
  const SERVER_URL_IMAGES = `http://localhost:3000/images/users/`


  return (
    <div className="user-card">
      <img src={`${SERVER_URL_IMAGES}${user.profile}`} alt="image-prod" />
      <h4>{user.name}</h4>
      <p>{user.email}</p>
    </div>
  )
}
