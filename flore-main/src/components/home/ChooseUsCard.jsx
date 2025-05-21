const Card = ({imgSrc, title, description}) => {
  return (
    <div className="card w-72 bg-purple-100 shadow-lg flex flex-col hover-animate">
        <div className="card-body items-center">
            <h2 className="card-title">{title}</h2>
            <p className="text-gray-600">{description}</p>
        </div>
        <figure className="relative w-full h-full">
            <img
                src={imgSrc}
                alt={title}
                className="w-full h-full object-cover"
            />
        </figure>
        
    </div>
  )
}

export default Card