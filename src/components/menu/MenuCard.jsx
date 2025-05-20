const MenuCard = ({ title, description, price, image, label }) => {
  return (
    <div className="card h-full bg-white shadow-lg flex flex-col hover-animate">
      <div className="relative h-48 w-full overflow-hidden">
        <img
          src={image}
          alt={title}
          className="object-cover w-full h-full rounded-t-lg"
        />
        {label && (
          <span className="absolute top-2 left-2 bg-pink-200 text-pink-800 text-xs px-2 py-1 rounded-md shadow">
            {label}
          </span>
        )}
      </div>
      <div className="p-4 flex flex-col justify-between flex-grow">
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-1">{title}</h3>
          <p className="text-sm text-gray-600 mb-2">{description}</p>
        </div>
        <div className="mt-auto flex items-center justify-between">
          <span className="text-purple-700 font-bold text-base">${price}</span>
          <button className="btn btn-sm btn-primary hover-button-animation">Ver más</button>
        </div>
      </div>
    </div>
  );
};

export default MenuCard;
