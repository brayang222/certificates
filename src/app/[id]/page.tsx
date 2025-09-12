import UserDetail from '@/components/dashboard/UserDetail'
import React from 'react'

export default function StudentsPage ({ params }: {params: {id:string}}){
    console.log("page" + params.id)

  return (
    <UserDetail id={params.id}/>
  )
}



