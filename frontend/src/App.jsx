import { Routes, Route, Navigate } from 'react-router-dom'
import './App.css'
import { Catalog } from './components/Products/Catalog'
import { Detail } from './components/Products/Detail'
import { Utils } from './components/Products/Utils'
import { SideBar } from './components/Sidebar'
import { AllUsers } from './components/Users/AllUsers'
import { LastUser } from './components/Users/LastUser'
import { NotFound } from './components/NotFound'
import { NewCategory } from './components/Products/Utils/NewCategory'

function App() {


  return (
    <div className='container'>
      {/* SideBar */}
      <SideBar />
      {/* Main */}
      <div className='dashboard'>
        <Routes>
         <Route path="/" element={<Catalog />}/>
         <Route path="/users" element={<AllUsers />}/>
         <Route path="/last-user" element={<LastUser />}/>
         <Route path="/utils" element={<Utils />}/>
         <Route path="/form" element={<NewCategory />}/>
         <Route path="/product/:id" element={<Detail />}/>
         {/* Redireccionar */}
         <Route path="*" element={<Navigate to="/" replace />} />
         {/* Mostrar un mensaje de error */}
         {/* <Route path="*" element={<NotFound />} /> */}
         
        </Routes>
      </div>      
    </div>
  )
}

export default App
