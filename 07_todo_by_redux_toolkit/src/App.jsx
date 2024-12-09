import { useState } from 'react'
import './App.css'
import AddTodo from './03_Components/AddTodo'
import Todos from './03_Components/Todos'

function App() {

  return (
    <>
      <h1> Learn about Redux Toolkit </h1>
      <AddTodo />
      <Todos />
    </>
  )
}

export default App
