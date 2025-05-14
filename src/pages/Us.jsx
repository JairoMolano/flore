import React from 'react';

import usImg from '../assets/img/us/us.png';
import misionImg from '../assets/img/us/mision.jpeg';
import visionImg from '../assets/img/us/vision.jpeg';
import valoresImg from '../assets/img/us/valores.jpeg';
import SectionWithImage from '../components/us/sectionWithImage';

const sections = [
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
    description: (
      <>
        <p><strong>Pasión por la cocina</strong> - Cada plato está hecho con dedicación y amor.</p>
        <p><strong>Calidad y frescura</strong> - Usamos ingredientes locales y naturales.</p>
        <p><strong>Cercanía con el cliente</strong> - Queremos que te sientas como en casa.</p>
        <p><strong>Autenticidad</strong> - No seguimos modas, creamos experiencias únicas.</p>
        <p><strong>Innovación</strong> - Apostamos por lo nuevo sin perder nuestra esencia.</p>
      </>
    ),
    imgFirst: false,
    imgSrc: valoresImg, 
  },
];

const Us = () => {
  return (
    <div>
      <header className="flex flex-col items-center">
        <img className="w-full h-120 object-cover" src={usImg} alt="Header" />
        <div className="w-4/5 text-center mt-12  max-w-4xl">
          <h1 className="text-5xl font-bold mb-6">Nuestra historia</h1>
          <h3 className="text-lg font-medium text-gray-700 leading-relaxed">
            Floré nació de una conversación entre amigas, de esas que empiezan con un café y terminan con 
            una gran idea: crear un lugar donde el brunch no sea solo una comida, sino una experiencia.
            Inspiradas por la frescura de los ingredientes locales y el amor por la gastronomía, decidimos 
            abrir un espacio que mezclara lo mejor del desayuno y el almuerzo, con ese toque dulce y salado 
            que tanto nos gusta. <br />
            En el corazón de Neiva, abrimos las puertas de este rincón que hoy muchos llaman su lugar favorito 
            para empezar el día con sabor, alegría y calidez.
          </h3>
        </div>
      </header>

      <div className="mt-16 space-y-20 max-w-4xl text-center mx-auto">
        {sections.map((section) => (
          <SectionWithImage
            key={section.id}
            title={section.title}
            description={section.description}
            imgSrc={section.imgSrc} 
            imgFirst={section.imgFirst}
          />
        ))}
      </div>
    </div>
  );
};

export default Us;