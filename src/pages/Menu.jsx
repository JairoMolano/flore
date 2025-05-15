import MenuSection from "../components/menu/MenuSection";
import menuData from "../data/menu";
import SpawnAnimation from "../components/common/SpawnAnimation";

const Menu = () => {
  return (
    <div>
      {menuData.map((section, index) => (
        <section key={index}>
          <SpawnAnimation>
            <MenuSection title={section.title} items={section.items} />
          </SpawnAnimation>
        </section>
      ))}
    </div>
  );
};

export default Menu;