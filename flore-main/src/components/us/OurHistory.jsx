import { useTranslation } from 'react-i18next';

const OurHistory = () => {
  const { t } = useTranslation('common');

  return (
    <div className="text-center mt-25 mx-auto max-w-5xl">
      <h1 className="tittle mb-6">{t('ourHistory.title')}</h1>
      <h3 className="description">
        {t('ourHistory.description').split('\n').map((paragraph, index) => (
          <p key={index} className="mb-4">{paragraph}</p>
        ))}
      </h3>
    </div>
  );
};

export default OurHistory;
