import { useContext } from 'react'
import UserContext from './UserContext' 

const Profile = () => {
  const { user } = useContext(UserContext)
  return (
    <div>
      <p>Welcome, {user}!</p>

    </div>
  )
}

export default Profile
