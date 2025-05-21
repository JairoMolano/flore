import { useCart } from "../../context/cartContext";

const MenuCard = ({ title, description, price, image, label }) => {
  const { addToCart } = useCart();

  const handleAdd = () => {
    addToCart({ title, description, price, image });
  };

  return (
    <div className="card h-68 bg-white shadow-lg flex flex-row hover-animate">
      <div className="relative h-full w-3/5 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="object-cover w-full h-full rounded-l-lg"
        />
        {label && (
          <span className="absolute top-2 left-2 bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded-md shadow">
            {label}
          </span>
        )}
      </div>
      <div className="w-2/5 p-4 flex flex-col justify-between flex-grow">
        <div>
          <h3 className="text-lg font-bold text-gray-700 leading-relaxed mb-1">{title}</h3>
          <p className="text-md text-gray-600 mb-2">{description}</p>
        </div>
        <div className="mt-auto flex items-center justify-between">
          <span className="text-gray-700 font-bold text-base">$ {price}</span>
          <button
          onClick={handleAdd}
          className="btn btn-sm bg-[#9C7696] border-[#9C7696] hover-button-animation flex items-center justify-center"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.35 2.7A1 1 0 007.5 17h9a1 1 0 00.9-1.45L17 13M7 13V6a1 1 0 011-1h3m4 0h2a1 1 0 011 1v7" />
          </svg>
        </button>
        </div>
      </div>
    </div>
  );
};

export default MenuCard;
