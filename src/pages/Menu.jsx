import React from "react";
import MenuSection from "../components/common/MenuSection";
import menuData from "../data/menuData";

const Menu = () => {
  return (
    <div>
      {menuData.map((section, index) => (
        <section key={index}>
          <MenuSection title={section.title} items={section.items} />
        </section>
      ))}
    </div>
  );
};

export default Menu;


