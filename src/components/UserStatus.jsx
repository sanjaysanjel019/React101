import PropTypes from 'prop-types';


const UserStatus = ({loggedIn,isAdmin}) => {
  return (
    <div>
        {loggedIn && isAdmin ? <h1>Welcome Admin</h1> : <h1>Welcome User</h1>}

    </div>
  )
}

UserStatus.propTypes = {
    loggedIn: PropTypes.string.isRequired,
    isAdmin: PropTypes.string.isRequired
}
   

export default UserStatus