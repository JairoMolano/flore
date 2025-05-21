import { useEffect, useState } from "react";
import i18next from "i18next";

const useMenuData = () => {
  const [menuData, setMenuData] = useState([]);
  const [featuredItems, setFeaturedItems] = useState([]);
  const lang = i18next.language;

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const res = await fetch("https://mockend.com/api/JairoMolano/flore-menu/dishes");
        const data = await res.json();

        const localizedData = data.map(item => ({
          ...item,
          title: item[`title_${lang}`] || item.title_es,
          description: item[`description_${lang}`] || item.description_es,
          label: item[`label_${lang}`] || item.label_es,
        }));

        const grouped = localizedData.reduce((acc, item) => {
          const { category } = item;
          if (!acc[category]) acc[category] = [];
          acc[category].push(item);
          return acc;
        }, {});

        const sections = Object.entries(grouped).map(([title, items]) => ({
          title,
          items,
        }));

        const featured = localizedData.filter(item => item.label && item.label.trim() !== '');

        setMenuData(sections);
        setFeaturedItems(featured);
      } catch (err) {
        console.error("Error al cargar el menú:", err);
      }
    };

    fetchMenu();
  }, [lang]);

  return { menuData, featuredItems };
};

export default useMenuData;