import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import Swal from 'sweetalert2';

const ReserveTable = () => {
  const { t } = useTranslation('common');

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    guests: '',
    date: '',
    time: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleConfirm = () => {
    const { name, phone, guests, date, time } = formData;

    if (!name || !phone || !guests || !date || !time) {
      Swal.fire({
        icon: 'warning',
        title: 'Campos incompletos',
        text: 'Por favor completa todos los campos del formulario.',
        confirmButtonColor: '#9C7696',
      });
      return;
    }

    Swal.fire({
      icon: 'success',
      title: '¡Reserva realizada!',
      text: `Tu mesa ha sido reservada exitosamente.`,
      confirmButtonColor: '#9C7696',
    }).then(() => {
      document.getElementById('reserve-modal').checked = false;
      setFormData({
        name: '',
        phone: '',
        guests: '',
        date: '',
        time: '',
      });
    });
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center w-full max-w-5xl mx-auto text-center py-8 mt-25">
        <h1 className="tittle mb-6">{t('reserveTable.title')}</h1>
        <h3 className="description mb-8">{t('reserveTable.description')}</h3>
        <label
          htmlFor="reserve-modal"
          className="btn bg-[#9C7696] border-[#9C7696] text-white hover:bg-[#8a5c84] cursor-pointer"
        >
          {t('reserveTable.button')}
        </label>
      </div>

      {/* MODAL PARA RESERVAS */}
      <input type="checkbox" id="reserve-modal" className="modal-toggle" />
      <div className="modal bg-gray-200 bg-opacity-90">
        <div className="modal-box bg-gray-100">
          <h3 className="font-bold text-lg mb-4">{t('reserveTable.button')}</h3>

          <label className="block mb-1">Nombre</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Tu nombre"
            className="input w-full mb-3 bg-gray-300 border border-gray-500 text-black p-2 rounded"
          />

          <label className="block mb-1">Teléfono</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="300 123 4567"
            className="input w-full mb-3 bg-gray-300 border border-gray-500 text-black p-2 rounded"
          />

          <label className="block mb-1">Número de personas</label>
          <input
            type="number"
            name="guests"
            value={formData.guests}
            onChange={handleChange}
            min="1"
            placeholder="Ej. 2"
            className="input w-full mb-3 bg-gray-300 border border-gray-500 text-black p-2 rounded"
          />

          <label className="block mb-1">Fecha</label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className="input w-full mb-3 bg-gray-300 border border-gray-500 text-black p-2 rounded"
          />

          <label className="block mb-1">Hora</label>
          <input
            type="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            className="input w-full mb-4 bg-gray-300 border border-gray-500 text-black p-2 rounded"
          />

          <div className="modal-action">
            <button
              type="button"
              className="btn bg-[#9C7696] text-white hover:bg-[#8a5c84]"
              onClick={handleConfirm}
            >
              {t('reserveTable.modal.confirm')}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReserveTable;
