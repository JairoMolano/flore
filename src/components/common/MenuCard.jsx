import React from "react";

const MenuCard = ({ title, description, price, image, label }) => {
  return (
    <div className="card lg:card-side bg-white shadow-md transform transition-transform duration-300 hover:scale-105 hover:shadow-xl cursor-pointer">
      <figure className="w-full md:w-1/2 relative">
        <img
          src={image}
          alt={title}
          className="object-cover w-full h-full max-h-60"
        />
        {label && (
          <span className="absolute top-2 left-2 bg-pink-200 text-pink-800 text-xs px-2 py-1 rounded-md">
            {label}
          </span>
        )}
      </figure>
      <div className="card-body w-full md:w-1/2">
        <h3 className="card-title text-lg font-semibold text-gray-800">{title}</h3>
        <p className="text-sm text-gray-600">{description}</p>
        <span className="text-purple-700 font-bold text-base">{price}</span>
        <div className="card-actions justify-end">
          <button className="btn btn-sm btn-primary">Ver más</button>
        </div>
      </div>
    </div>
  );
};

export default MenuCard;
