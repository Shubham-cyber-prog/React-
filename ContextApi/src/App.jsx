import React from 'react'
import UserContext from './UserContext'
import Navbar from './Navbar'

const App = () => {
  const user =' Geeta University'
  return (
    <div>
      <UserContext.Provider value={ user }>
        <Navbar />
      </UserContext.Provider>
    </div>
  )
}

export default App

  
