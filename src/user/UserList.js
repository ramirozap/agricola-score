import React from 'react'

const UserList = ({users}) => {

  return (
    <ul>
      {
        users.map((user, i) => {
          return <li key={i}>{user.name}</li>
        })
      }
    </ul>
  )
}

export default UserList
