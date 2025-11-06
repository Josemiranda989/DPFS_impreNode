import React from 'react'
import { Link } from 'react-router-dom'

export const NotFound = () => {
  return (
    <div>
        <img width={500} src="https://josefacchin.com/wp-content/uploads/2018/09/error-404-http-not-found.png.webp" alt="pagina no encontrada" />
        <Link to='/'>Volver al home</Link>
    </div>
  )
}
