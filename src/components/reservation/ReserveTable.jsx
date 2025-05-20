import { useTranslation } from 'react-i18next';

const ReserveTable = () => {
  const { t } = useTranslation('common');

  return (
    <>
      <div className="flex flex-col items-center justify-center w-full max-w-5xl mx-auto text-center py-8 mt-25">
        <h1 className="tittle mb-6">{t('reserveTable.title')}</h1>
        <h3 className="description mb-8">{t('reserveTable.description')}</h3>
        <label htmlFor="reserve-modal" className="btn bg-[#9C7696] border-[#9C7696] text-white hover:bg-[#8a5c84] cursor-pointer">
          {t('reserveTable.button')}
        </label>
      </div>

      {/* MODAL PARA RESERVAS (Con DaisyUI)*/}
      <input type="checkbox" id="reserve-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg mb-4">{t('reserveTable.button')}</h3>

          <label className="block mb-2">{t('reserveTable.modal.label')}</label>
          <input
            type="tel"
            placeholder="300 123 4567"
            className="input input-bordered w-full mb-4"
          />

          <div className="modal-action">
            <label htmlFor="reserve-modal" className="btn bg-[#9C7696] text-white hover:bg-[#8a5c84]">
              {t('reserveTable.modal.confirm')}
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReserveTable;
