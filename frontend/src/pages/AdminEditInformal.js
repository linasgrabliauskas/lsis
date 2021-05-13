import React, { useState, useEffect, useRef } from 'react';
import { Link, useParams, Redirect } from 'react-router-dom';
import { FiEdit, FiSave, FiTrash2 } from 'react-icons/fi';
import styleBtn from '../components/Button.module.css';
import Button from '../components/Button';

function AdminEditInformal() {
  // State
  const [data, setData] = useState([]);

  //Ref
  const firstInput = useRef();
  const deletePopUp = useRef();

  // Params
  let { id } = useParams();

  // Functions

  // onChange inputs
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  // Edit
  const handleEdit = () => {
    const inputs = document.querySelectorAll('input');

    inputs.forEach((input) => {
      input.readOnly = false;
      input.classList.add('active');
    });
    firstInput.current.focus();
  };

  // Save
  const handleSave = () => {
    const inputs = document.querySelectorAll('input');
    let token = localStorage.getItem('lsis-auth');

    inputs.forEach((input) => {
      input.readOnly = true;
      input.classList.remove('active');
    });

    fetch(`https://lsis.herokuapp.com/api/informal/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        token: token,
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        let newData = data;

        if (newData !== data) {
          setData(newData);
        }
      })
      .catch((err) => console.log(err));
  };

  // Delete
  const handleDelete = () => {
    let token = localStorage.getItem('lsis-auth');

    fetch(`https://lsis.herokuapp.com/api/informal/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        token: token,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setData(null);
      })
      .catch((err) => console.log(err));
  };

  // Effects
  useEffect(() => {
    fetch(`https://lsis.herokuapp.com/api/informal/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      })
      .catch((err) => console.log(err));
  }, [id]);

  return !data ? (
    <Redirect to='/admin' />
  ) : (
    <div className='formal-details'>
      <div className='formal-details__content'>
        <p className='back__btn'>
          <Link to='/admin/'>
            <span className='chevron'>ᐸ</span>Grįžti atgal
          </Link>
        </p>
        <p className='title'>
          Neformalaus švietimo programos<span className='chevron'>ᐳ</span>
          {data.name}
        </p>
        <h1 className='heading-3'>{data.name}</h1>

        <ul className='details__table'>
          <div className='details__table--controlls'>
            <button onClick={handleEdit}>
              <FiEdit />
            </button>
            <button onClick={handleSave}>
              <FiSave />
            </button>
            <button onClick={() => deletePopUp.current.classList.add('on')}>
              <FiTrash2 />
            </button>
          </div>
          <li className='details__table-item'>
            <h4 className='details__table-title'>Programos kodas:</h4>
            <input
              className='details__table-input'
              type='text'
              name={'code'}
              value={data.code}
              onChange={handleChange}
              readOnly={true}
              ref={firstInput}
            />
          </li>
          <li className='details__table-item'>
            <h4 className='details__table-title'>
              Programos akreditavimo terminas:
            </h4>
            <input
              className='details__table-input'
              type='text'
              name={'programAccreditation'}
              value={
                data.programAccreditation ? data.programAccreditation : '-'
              }
              onChange={handleChange}
              readOnly={true}
            />
          </li>
          <li className='details__table-item'>
            <h4 className='details__table-title'>Programos teikėjas:</h4>
            <input
              className='details__table-input'
              type='text'
              name={'programProvider'}
              value={data.programProvider}
              onChange={handleChange}
              readOnly={true}
            />
          </li>
          <li className='details__table-item'>
            <h4 className='details__table-title'>Renginio savivaldybė:</h4>
            <input
              className='details__table-input'
              type='text'
              name={'programMunicipality'}
              value={data.programMunicipality ? data.programMunicipality : '-'}
              onChange={handleChange}
              readOnly={true}
            />
          </li>
          <li className='details__table-item'>
            <h4 className='details__table-title'>Programos vykdymo adresas:</h4>
            <input
              className='details__table-input'
              type='text'
              name={'programAdress'}
              value={data.programAddress ? data.programAddress : '-'}
              onChange={handleChange}
              readOnly={true}
            />
          </li>
          <li className='details__table-item'>
            <h4 className='details__table-title'>Programos vykdymo pradžia:</h4>
            <input
              className='details__table-input'
              type='text'
              name={'programStart'}
              value={data.programStart ? data.programStart : '-'}
              onChange={handleChange}
              readOnly={true}
            />
          </li>
        </ul>
      </div>
      <div className='formal-details__pop-up' ref={deletePopUp}>
        <h3 className='formal-details__pop-up-text'>
          Ar tikrai norite ištrinti <span>,,{data.name}"</span> iš neformalaus
          švietimo ir mokslo institucijų sąrašo?
        </h3>
        <div className='formal-details__pop-up-controlls'>
          <Button
            onClick={handleDelete}
            text='Ištrinti'
            className={`${styleBtn.btnLight} ${styleBtn.smallBtn}`}
          />
          <Button
            onClick={() => deletePopUp.current.classList.remove('on')}
            className={`${styleBtn.btnDark} ${styleBtn.smallBtn}`}
            text='Atšaukti'
          />
        </div>
      </div>
    </div>
  );
}

export default AdminEditInformal;
