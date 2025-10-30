import './App.css'
import { Catalog } from './components/Products/Catalog'
import { Detail } from './components/Products/Detail'
import { SideBar } from './components/Sidebar'

function App() {


  return (
    <div className='container'>
      {/* SideBar */}
      <SideBar />
      {/* Main */}
      <div>
       <Catalog />
       {/* <Detail /> */}
       {/* <p>Usuarios</p> 
       <p>Ultimo Agregado</p> 
       <p>Categorias</p>  */}
      </div>      
    </div>
  )
}

export default App
