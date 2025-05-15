import ChooseUsCard from './ChooseUsCard';
import chooseUsCardData from '../../data/chooseUsCard';

const ChooseUs = () => {
  return (
    <>
    <div className="flex flex-col items-center mt-25">
      <h1 className="text-4xl font-extrabold mb-15 text-gray-600 text-center">
        ¿Por qué elegirnos?
      </h1>
      <div className="flex flex-row flex-wrap gap-20 justify-center max-w-5xl">
        {chooseUsCardData.map((card) => (
          <ChooseUsCard
            key={card.id}
            imgSrc={card.imgSrc}
            title={card.title}
            description={card.description}
          />
        ))}
      </div>
    </div>
    </>
  );
};

export default ChooseUs;