import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/03_Home/Home.jsx'
import About from './components/04_About/About.jsx'
import Contact from './components/05_Contact_us/Contact.jsx'
import User from './components/06_User/User.jsx'
import GitHub, { gitHubInfoLoader } from './components/07_Github/GitHub.jsx'

// Creation of Router 

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout />,
//     children: [
//       {
//         path: "",
//         element: <Home />
//       },
//       {
//         path: "about",
//         element: <About />
//       },
//       {
//         path: "contact-us",
//         element: <Contact />
//       }
//     ]
//   }
// ])


// Second approach of router creation 

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<Home/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='contact-us' element={<Contact/>}/>
      <Route path='user/:userId' element={<User/>}/>
      <Route 
      loader={gitHubInfoLoader}
      path='GitHub'
      element={<GitHub/>}/>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
