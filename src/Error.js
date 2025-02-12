import React from 'react'
import { useRouteError } from 'react-router';

const Error = () => {
  const error = useRouteError();
 // console.log(error)
  return (
    <div>{error.data}</div>
  )
}

export default Error;