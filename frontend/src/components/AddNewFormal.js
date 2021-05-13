import React from 'react';

function AddNewFormal(props) {
  const {
    name,
    code,
    address,
    phone,
    category,
    municipality,
    subcategory,
    email,
    legalForm,
    onChange,
  } = props;

  return (
    <div className='formal-details'>
      <div className='formal-details__content'>
        <p className='title'>Pridėti naują formalaus švietimo instituciją</p>
        <ul className='details__table'>
          <li className='details__table-item'>
            <h4 className='details__table-title'>Įstaigos pavadinimas:</h4>
            <input
              className='details__table-input'
              type='text'
              name='name'
              value={name}
              onChange={onChange}
            />
          </li>
          <li className='details__table-item'>
            <h4 className='details__table-title'>Juridinio asmens kodas:</h4>
            <input
              className='details__table-input'
              type='text'
              name='code'
              value={code}
              onChange={onChange}
            />
          </li>
          <li className='details__table-item'>
            <h4 className='details__table-title'>Adresas:</h4>
            <input
              className='details__table-input'
              type='text'
              name='address'
              value={address}
              onChange={onChange}
            />
          </li>
          <li className='details__table-item'>
            <h4 className='details__table-title'>Telefonas:</h4>
            <input
              className='details__table-input'
              type='text'
              name='phone'
              value={phone}
              onChange={onChange}
            />
          </li>
          <li className='details__table-item'>
            <h4 className='details__table-title'>Grupė:</h4>
            <input
              className='details__table-input'
              type='text'
              name='category'
              value={category}
              onChange={onChange}
            />
          </li>
          <li className='details__table-item'>
            <h4 className='details__table-title'>Savivaldybė:</h4>
            <input
              className='details__table-input'
              type='text'
              name='municipality'
              value={municipality}
              onChange={onChange}
            />
          </li>
          <li className='details__table-item'>
            <h4 className='details__table-title'>Tipas:</h4>
            <input
              className='details__table-input'
              type='text'
              name='subcategory'
              value={subcategory}
              onChange={onChange}
            />
          </li>
          <li className='details__table-item'>
            <h4 className='details__table-title'>El-paštas:</h4>
            <input
              className='details__table-input'
              type='text'
              name='email'
              value={email}
              onChange={onChange}
            />
          </li>
          <li className='details__table-item'>
            <h4 className='details__table-title'>Teisinė forma:</h4>
            <input
              className='details__table-input'
              type='text'
              name='legalForm'
              value={legalForm}
              onChange={onChange}
            />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default AddNewFormal;
