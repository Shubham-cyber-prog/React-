import React from 'react'

import Card from './Card'

const User = (props) => {
  return (
    <div>
      <h2>{props.name}</h2>
      <p>{props.email}</p>
    </div>
  )
}

export default User
