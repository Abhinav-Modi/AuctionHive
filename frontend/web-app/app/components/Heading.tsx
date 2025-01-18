import React from 'react'

type Props = {
    title : string
    subtitle? : string
    center? : boolean
}

const Heading = ({title,subtitle,center}:Props) => {
  return (
    <div
        className={center? 'text-center' : 'text-start'}
    >
        <h1 className="text-2xl font-semibold text-gray-800">{title}</h1>
        <p className="text-gray-500">{subtitle}</p>
    </div>
  )
}

export default Heading