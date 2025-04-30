import React from "react";
import MenuCard from "./MenuCard";

const MenuSection = ({ title, items }) => {
    return (
      <section className="bg-white py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="w-24 h-1 bg-pink-300 mb-6 rounded-full"></div>
          <h2 className="text-3xl font-bold text-left text-gray-800 mb-10">
            {title}
          </h2>
  
          <div className="grid grid-cols-2 gap-8">
            {items.map((item, index) => (
              <MenuCard key={index} {...item} />
            ))}
          </div>
        </div>
      </section>
    );
  };

export default MenuSection;
