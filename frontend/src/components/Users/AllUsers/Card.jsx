export const Card = ({user}) => {
  return (
    <div className="user-card">
      <img src={user.urlImage} alt="image-prod" />
      <h4>{user.name}</h4>
      <p>{user.email}</p>
    </div>
  )
}
