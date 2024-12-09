
import './App.css'
import UserContextProvider from './01_Context/UserContextProvider'
import Login from './02_Component/Login'
import Profile from './02_Component/Profile'

function App() {
  return (
    <UserContextProvider>

      <h1> 
        Welcome to Context API's, Sujeet 
      </h1>

      <Login/>

      <Profile/>
      
    </UserContextProvider>
  )
}

export default App
