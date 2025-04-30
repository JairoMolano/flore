import freshStartImages from "../data/Images/freshStart";
import brunchImages from "../data/Images/brunchAndBreakfast";
import iceDrinksImages from "../data/Images/iceDrinks";

const menuData = [
  {
    title: "Fresh Start",
    items: [
      {
        title: "Bowl de Açaí",
        description: "Smoothie bowl con frutas frescas y granola.",
        price: "$22.000",
        image: freshStartImages.BowlAcai,
        label: "",
      },
      {
        title: "Bowl de Chía y Té Matcha",
        description: "Chía hidratada en leche vegetal con matcha.",
        price: "$20.000",
        image: freshStartImages.BowlChiaMatcha,
      },
      {
        title: "Bowl Frutal",
        description: "Mix de frutas tropicales con yogur natural.",
        price: "$18.000",
        image: freshStartImages.BowlFrutal,
      },
      {
        title: "Bowl Primavera",
        description: "Frutas de temporada con granola artesanal.",
        price: "$19.000",
        image: freshStartImages.BowlPrimavera,
      },
      {
        title: "Parfait de berries",
        description: "Yogur, mermelada de frutos rojos y granola.",
        price: "$16.000",
        image: freshStartImages.ParfaitBerries,
      },
      {
        title: "Parfait de Manzanas Chai",
        description: "Manzanas al chai con yogur y frutos secos.",
        price: "$17.000",
        image: freshStartImages.ParfaitManzanasChai,
      },
    ],
  },
  {
    title: "Brunch & Breakfast",
    items: [
      {
        title: "Calentado Floré",
        description: "Arroz con frijoles, plátano y huevo.",
        price: "$25.000",
        image: brunchImages.CalentadoFlore,
        label: "",
      },
      {
        title: "Desayuno Clásico",
        description: "Huevos al gusto, pan artesanal y bebida.",
        price: "$23.000",
        image: brunchImages.DesayunoClasico,
      },
      {
        title: "Hash Brown Veggie",
        description: "Papas hash brown con vegetales asados.",
        price: "$21.000",
        image: brunchImages.HashBrownVeggie,
      },
      {
        title: "Huevos Cremosos",
        description: "Huevos revueltos con mantequilla y crema.",
        price: "$20.000",
        image: brunchImages.HuevosCremosos,
      },
      {
        title: "Huevos Mexicanos",
        description: "Huevos revueltos con jitomate y cebolla.",
        price: "$20.000",
        image: brunchImages.HuevosMexicanos,
      },
      {
        title: "Omelette Trufado",
        description: "Omelette con champiñones y aceite de trufa.",
        price: "$24.000",
        image: brunchImages.OmeletteTrufado,
      },
        {
            title: "Pancakes Floretto",
            description: "Pancakes con frutas y sirope de arce.",
            price: "$22.000",
            image: brunchImages.PancakesFloretto,
        },
        {
            title: "Sandwich de Huevo",
            description: "Pan artesanal con huevo, aguacate y espinaca.",
            price: "$18.000",
            image: brunchImages.SandwichHuevo,
        },
        {
            title: "Tostadas Francesas",
            description: "Pan brioche con frutas y sirope.",
            price: "$20.000",
            image: brunchImages.TostadasFrancesas,
        },
        {
            title: "Waffle Breakfast",
            description: "Waffle con frutas y crema batida.",
            price: "$22.000",
            image: brunchImages.WaffleBreakfast,
        },
        {
            title: "Waffle Colombiano",
            description: "Waffle con arequipe y queso costeño.",
            price: "$21.000",
            image: brunchImages.WaffleColombiano,
        },
        {
            title: "Waffles de Pandebono",
            description: "Waffles de pandebono con mermelada.",
            price: "$19.000",
            image: brunchImages.WafflesPandebono,
        },
    ],
  },
  {
    title: "Ice Drinks",
    items: [
      {
        title: "Soda de Lychee",
        description: "Refresco de lychee con un toque de menta.",
        price: "$12.000",
        image: iceDrinksImages.SodaDeLyche,
        label: "",
      },
      {
        title: "Soda de Maracuyá",
        description: "Refresco de maracuyá con un toque de hierbabuena.",
        price: "$12.000",
        image: iceDrinksImages.SodaDeMaracuya,
      },
      {
        title: "Soda de Frutos Rojos",
        description: "Refresco de frutos rojos con un toque de limón.",
        price: "$12.000",
        image: iceDrinksImages.SodaDeFrutosRojos,
      },
    ],
  },
];

export default menuData;
