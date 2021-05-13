import React from 'react';

function AddNewInformal(props) {
  const {
    name,
    code,
    programAccreditation,
    programProvider,
    programMunicipality,
    programAddress,
    programStart,
    onChange,
  } = props;

  return (
    <div className='formal-details'>
      <div className='formal-details__content'>
        <p className='title'>Pridėti naują neformalaus švietimo instituciją</p>
        <ul className='details__table'>
          <li className='details__table-item'>
            <h4 className='details__table-title'>Programos pavadinimas:</h4>
            <input
              className='details__table-input'
              type='text'
              name='name'
              value={name}
              onChange={onChange}
            />
          </li>
          <li className='details__table-item'>
            <h4 className='details__table-title'>Programos kodas:</h4>
            <input
              className='details__table-input'
              type='text'
              name='code'
              value={code}
              onChange={onChange}
            />
          </li>
          <li className='details__table-item'>
            <h4 className='details__table-title'>
              Programos akreditavimo terminas:
            </h4>
            <input
              className='details__table-input'
              type='text'
              name='programAccreditation'
              value={programAccreditation}
              onChange={onChange}
            />
          </li>
          <li className='details__table-item'>
            <h4 className='details__table-title'>Programos teikėjas:</h4>
            <input
              className='details__table-input'
              type='text'
              name='programProvider'
              value={programProvider}
              onChange={onChange}
            />
          </li>
          <li className='details__table-item'>
            <h4 className='details__table-title'>Renginio savivaldybė:</h4>
            <input
              className='details__table-input'
              type='text'
              name='programMunicipality'
              value={programMunicipality}
              onChange={onChange}
            />
          </li>
          <li className='details__table-item'>
            <h4 className='details__table-title'>Programos vykdymo adresas:</h4>
            <input
              className='details__table-input'
              type='text'
              name='programAddress'
              value={programAddress}
              onChange={onChange}
            />
          </li>
          <li className='details__table-item'>
            <h4 className='details__table-title'>Programos vykdymo pradžia:</h4>
            <input
              className='details__table-input'
              type='text'
              name='programStart'
              value={programStart}
              onChange={onChange}
            />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default AddNewInformal;
