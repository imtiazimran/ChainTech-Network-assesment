import './index.css'
import './App.css'
import { Outlet } from 'react-router-dom'
import Navbar from './components/shared/Navbar'

function App() {

  return (
    <div>
    <Navbar/>
     <Outlet/>
    </div>
  )
}

export default App
