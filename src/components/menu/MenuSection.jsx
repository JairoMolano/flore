import MenuCard from "./MenuCard";

const MenuSection = ({ title, items }) => {
    return (
      <div className="max-w-5xl mx-auto mt-25">
        <div className="w-full h-1 bg-[#9C7696] mb-6 rounded-full" />
        <h2 className="tittle mb-12">
          {title}
        </h2>
        <div className="grid grid-cols-2 gap-8 auto-rows-fr">
          {items.map((item, index) => (
            <MenuCard key={index} {...item} />
          ))}
        </div>
      </div>
    );
  };

export default MenuSection;
