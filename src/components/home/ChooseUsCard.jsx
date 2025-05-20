const Card = ({imgSrc, title, description}) => {
  return (
    <div className="card w-72 bg-white shadow-lg hover-animate">
        <figure className="relative w-full h-full">
            <img
                src={imgSrc}
                alt={title}
                className="w-full h-full object-cover"
            />
        </figure>
        <div className="card-body">
            <h2 className="card-title">{title}</h2>
            <p className="text-gray-600">{description}</p>
        </div>
    </div>
  )
}

export default Card