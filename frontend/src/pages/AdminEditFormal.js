import React, { useState, useEffect, useRef } from 'react';
import { Link, useParams, Redirect } from 'react-router-dom';
import { FiEdit, FiSave, FiTrash2 } from 'react-icons/fi';
import './AdminEditFormal.css';
import styleBtn from '../components/Button.module.css';
import Button from '../components/Button';

function AdminEditFormal() {
  // State
  const [data, setData] = useState([]);

  //Ref
  const firstInput = useRef();
  const deletePopUp = useRef();

  // Params
  let { id } = useParams();

  // Functions

  //Change
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  //Edit
  const handleEdit = () => {
    const inputs = document.querySelectorAll('input');
    inputs.forEach((input) => {
      input.readOnly = false;
      input.classList.add('active');
    });
    firstInput.current.focus();
  };

  //Save
  const handleSave = () => {
    const inputs = document.querySelectorAll('input');
    let token = localStorage.getItem('lsis-auth');

    inputs.forEach((input) => {
      input.readOnly = true;
      input.classList.remove('active');
    });

    fetch(`https://lsis.herokuapp.com/api/formal/${id}`, {
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
        console.log(newData);
        if (newData !== data) {
          setData(newData);
        }
      })
      .catch((err) => console.log(err));
  };

  // Delete
  const handleDelete = () => {
    let token = localStorage.getItem('lsis-auth');

    fetch(`https://lsis.herokuapp.com/api/formal/${id}`, {
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
  // GET
  useEffect(() => {
    fetch(`https://lsis.herokuapp.com/api/formal/${id}`)
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
          <Link to='/admin'>
            <span className='chevron'>ᐸ</span>Grįžti atgal
          </Link>
        </p>
        <p className='title'>
          Formalaus švietimo ir mokslo institucijos{' '}
          <span className='chevron'>ᐳ</span> {data.name}
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
            <h4 className='details__table-title'>Juridinio asmens kodas:</h4>
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
            <h4 className='details__table-title'>Adresas:</h4>
            <input
              className='details__table-input'
              type='text'
              name={'address'}
              value={data.address}
              onChange={handleChange}
              readOnly={true}
            />
          </li>
          <li className='details__table-item'>
            <h4 className='details__table-title'>Telefonas:</h4>
            <input
              className='details__table-input'
              type='text'
              name={'phone'}
              value={data.phone}
              onChange={handleChange}
              readOnly={true}
            />
          </li>
          <li className='details__table-item'>
            <h4 className='details__table-title'>Grupė:</h4>
            <input
              className='details__table-input'
              type='text'
              name={'category'}
              value={data.category}
              onChange={handleChange}
              readOnly={true}
            />
          </li>
          <li className='details__table-item'>
            <h4 className='details__table-title'>Savivaldybė:</h4>
            <input
              className='details__table-input'
              type='text'
              name={'municipality'}
              value={data.municipality}
              onChange={handleChange}
              readOnly={true}
            />
          </li>
          <li className='details__table-item'>
            <h4 className='details__table-title'>Tipas:</h4>
            <input
              className='details__table-input'
              type='text'
              name={'subcategory'}
              value={data.subcategory}
              onChange={handleChange}
              readOnly={true}
            />
          </li>
          <li className='details__table-item'>
            <h4 className='details__table-title'>El-paštas:</h4>
            <input
              className='details__table-input'
              type='text'
              name={'email'}
              value={data.email}
              onChange={handleChange}
              readOnly={true}
            />
          </li>
          <li className='details__table-item'>
            <h4 className='details__table-title'>Teisinė forma:</h4>

            <input
              className='details__table-input'
              type='text'
              name={'legalForm'}
              value={data.legalForm}
              onChange={handleChange}
              readOnly={true}
            />
          </li>
        </ul>
      </div>
      <div className='formal-details__pop-up' ref={deletePopUp}>
        <h3 className='formal-details__pop-up-text'>
          Ar tikrai norite ištrinti <span>,,{data.name}"</span> iš formalaus
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

export default AdminEditFormal;
