import React from 'react'

const H2 = (props) => {
  return (
    <h2 className="max-w-md text-center mx-auto text-xl md:text-3xl font-bold mb-2">
      {props.children}
    </h2>
  )
}

export default H2