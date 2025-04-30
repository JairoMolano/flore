import React from 'react'

const Card = ({imgSrc, title, description}) => {
  return (
    <div className="card w-72 bg-white shadow-lg group transform transition duration-300 hover:scale-105 hover:shadow-xl cursor-pointer">
        <figure className="relative w-full h-full overflow-hidden">
            <img
                src={imgSrc}
                alt={title}
                className="w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-80"
            />
            <div className="absolute inset-0 bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"></div>
        </figure>
        <div className="card-body">
            <h2 className="card-title">{title}</h2>
            <p className="text-gray-600">{description}</p>
        </div>
    </div>
  )
}

export default Card