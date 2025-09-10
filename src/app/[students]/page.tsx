import React from 'react'

interface Props {
  params: {student:string}
}

const StudentsPage = ({params}: Props) => {
  return (
    <div>
      <h1>Certificados de {params.student}</h1>
    </div>
  )
}

export default StudentsPage