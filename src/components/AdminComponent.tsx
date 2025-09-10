import React from 'react'
import UserDashboard from './dashboard/UserDashboard'
interface Props {
  params: {student:string}
}
export const AdminComponent = ({params}: Props) => {
    console.log(params)
  return <UserDashboard />
}
