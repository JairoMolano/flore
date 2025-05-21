import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import Swal from 'sweetalert2';
import deliveryLogoImg from '../../assets/img/delivery/delivery_logo.png';

const OrderNow = () => {
  const { t } = useTranslation('common');

  const [formData, setFormData] = useState({
    name: '',
    address: '',
    phone: '',
    details: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (!formData.name || !formData.address || !formData.phone) {
      Swal.fire('Error', 'Por favor, completa todos los campos requeridos.', 'error');
      return;
    }

    Swal.fire('¡Pedido Realizado!', 'Tu pedido ha sido registrado con éxito.', 'success');

    setFormData({ name: '', address: '', phone: '', details: '' });

    document.getElementById('order-modal').checked = false;
  };

  return (
    <div>
      <div className="mt-25 max-w-5xl mx-auto flex flex-row items-center">
        <div className="w-1/2">
          <img className="w-full h-auto object-cover" src={deliveryLogoImg} alt="Delivery" />
        </div>
        <div className="w-1/2 text-left pl-8">
          <h1 className="tittle mb-6">{t('orderNow.title')}</h1>
          <h3 className="description">{t('orderNow.description')}</h3>
        </div>
      </div>

      <div className="flex justify-center my-8">
        <label htmlFor="order-modal" className="px-6 py-3 bg-[#9C7696] text-white font-bold rounded hover-button-animation cursor-pointer">
          {t('orderNow.button')}
        </label>
      </div>

      <input type="checkbox" id="order-modal" className="modal-toggle" />
      <div className="modal bg-gray-200 bg-opacity-90">
        <div className="modal-box bg-gray-100">
          <h3 className="font-bold text-lg mb-4">{t('orderNow.modal.title')}</h3>

          <label className="block mb-1">{t('orderNow.modal.name')}</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange}
            className="input w-full mb-3 bg-gray-300 border border-gray-500 text-black p-2 rounded" />

          <label className="block mb-1">{t('orderNow.modal.address')}</label>
          <input type="text" name="address" value={formData.address} onChange={handleChange}
            className="input w-full mb-3 bg-gray-300 border border-gray-500 text-black p-2 rounded" />

          <label className="block mb-1">{t('orderNow.modal.phone')}</label>
          <input type="tel" name="phone" value={formData.phone} onChange={handleChange}
            className="input w-full mb-3 bg-gray-300 border border-gray-500 text-black p-2 rounded" />

          <label className="block mb-1">{t('orderNow.modal.details')}</label>
          <textarea name="details" value={formData.details} onChange={handleChange}
            className="textarea w-full mb-4 bg-gray-300 border border-gray-500 text-black p-2 rounded" />

          <div className="modal-action">
            <button onClick={handleSubmit} className="btn bg-[#9C7696] text-white hover:bg-[#8a5c84]">
              {t('orderNow.modal.confirm')}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderNow;