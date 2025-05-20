import MenuSection from "../components/menu/MenuSection";
import SpawnAnimation from "../components/common/SpawnAnimation";
import useMenuData from "../hooks/useMenuData";

const Menu = () => {
  const menuData = useMenuData();

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