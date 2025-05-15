import misionImg from '../assets/img/us/mision.jpeg';
import visionImg from '../assets/img/us/vision.jpeg';
import valoresImg from '../assets/img/us/valores.jpeg';

const aboutUs = [
  {
    id: 1,
    title: "Misión",
    description:
      "Brindar una experiencia gastronómica única a través de brunchs creativos, frescos y personalizados, en un ambiente acogedor tanto en el local como a domicilio.",
    imgFirst: false,
    imgSrc: misionImg, 
  },
  {
    id: 2,
    title: "Visión",
    description:
      "Ser el brunch de referencia en la región, expandiendo nuestro concepto de sabor, cercanía y bienestar a más rincones del país a través de innovación, calidad y servicio.",
    imgFirst: true,
    imgSrc: visionImg, 
  },
  {
    id: 3,
    title: "Nuestros valores",
    description:
      "Pasión por la cocina - Cada plato está hecho con dedicación y amor.\n" +
      "Calidad y frescura - Usamos ingredientes locales y naturales.\n" +
      "Cercanía con el cliente - Queremos que te sientas como en casa.\n" +
      "Autenticidad - No seguimos modas, creamos experiencias únicas.\n" +
      "Innovación - Apostamos por lo nuevo sin perder nuestra esencia.",
    imgFirst: false,
    imgSrc: valoresImg, 
  },
];

export default aboutUs;