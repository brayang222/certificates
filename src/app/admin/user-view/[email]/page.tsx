import React from 'react'

const UserView = ({ params }: {params: {email:string}}) => {
  console.log(params)
  return (
    <div>UserView</div>
  )
}

export default UserView