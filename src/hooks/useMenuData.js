import { useEffect, useState } from "react";

const useMenuData = () => {
  const [menuData, setMenuData] = useState([]);
  const [featuredItems, setFeaturedItems] = useState([]);

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

        const featured = data.filter(item => item.label && item.label.trim() !== '');

        setMenuData(sections);
        setFeaturedItems(featured);
      } catch (err) {
        console.error("Error al cargar el menú:", err);
      }
    };

    fetchMenu();
  }, []);

  return { menuData, featuredItems };
};

export default useMenuData;