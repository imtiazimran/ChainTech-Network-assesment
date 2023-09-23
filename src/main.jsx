import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ApiContext from './components/Context/ApiContext.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ArchiveTasks from './components/ArchiveTasks.jsx'
import Home from './components/Home.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: "/",
        element: <Home/>
      },
      {
        path : "/archive",
        element : <ArchiveTasks/>
      }
    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ApiContext>
      <RouterProvider router={router} />
    </ApiContext>
  </React.StrictMode>,
)
