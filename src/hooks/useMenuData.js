import { useEffect, useState } from "react";

const useMenuData = () => {
  const [menuData, setMenuData] = useState([]);

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const res = await fetch("https://mockend.com/api/JairoMolano/flore-menu/dishes");
        const data = await res.json();

        const grouped = data.reduce((acc, item) => {
          const { category } = item;
          if (!acc[category]) acc[category] = [];
          acc[category].push(item);
          return acc;
        }, {});

        const sections = Object.entries(grouped).map(([title, items]) => ({
          title,
          items,
        }));

        setMenuData(sections);
      } catch (err) {
        console.error("Error al cargar el menú:", err);
      }
    };

    fetchMenu();
  }, []);

  return menuData;
};

export default useMenuData;
