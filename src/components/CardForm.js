import React, { useState, useEffect } from 'react';
import '../styles.css';
import InputMask from 'react-input-mask';

const CardForm = ({ card, addCard, editCard, setCurrentCard }) => {
  const [formData, setFormData] = useState(card);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    setFormData(card);
  }, [card]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = 'Please fill in your name.';
    if (!/^\d{19}$/.test(formData.number)) newErrors.number = 'Please enter a valid credit card number.';
    if (!/^(0[1-9]|1[0-2])\/?([0-9]{2})$/.test(formData.expiry)) newErrors.expiry = 'Please enter a valid expiry date.';
    if (!/^\d{3}$/.test(formData.cvc)) newErrors.cvc = 'Please enter a valid security code.';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length === 0) {
      if (formData.id) {
        editCard(formData);
      } else {
        formData.id = Date.now();
        addCard(formData);
      }
      setCurrentCard(null);
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="card-form">
      <div>
        <label>Name on card</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} />
        {errors.name && <span>{errors.name}</span>}
      </div>
      <div>
        <label>Card number</label>
        <InputMask type="tel" mask="9999 9999 9999 9999" name="number" value={formData.number} onChange={handleChange} />
        {errors.number && <span>{errors.number}</span>}
      </div>
      <div>
        <label>Expiry date</label>
        <InputMask type="tel" mask="99/99" name="expiry" value={formData.expiry} onChange={handleChange} />
        {errors.expiry && <span>{errors.expiry}</span>}
      </div>
      <div>
        <label>CVC (Security code)</label>
        <input type="tel" name="cvc" value={formData.cvc} onChange={handleChange} />
        {errors.cvc && <span>{errors.cvc}</span>}
      </div>
      <button type="submit">Confirm</button>
    </form>
  );
};

export default CardForm;