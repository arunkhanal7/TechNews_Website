import React from 'react'
import Search from './Search'
import Pagination from './Pagination'
import  Stories from './Stories'
// import { useContext } from 'react'
// import { AppContext } from './Context'
import { useGlobalContext } from './Context'

const App = () => {
  const data= useGlobalContext();
  return (
    <>
    <div>Welcome to the Technical news website {data} </div>
    <Search/>
    <Pagination/>
    <Stories/>
    </>
  )
}

export default App