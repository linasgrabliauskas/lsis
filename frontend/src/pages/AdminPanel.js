import React, { useState } from 'react';
import Button from '../components/Button';
import styleBtn from '../components/Button.module.css';
import './AdminPanel.css';
import AddNewFormal from '../components/AddNewFormal';
import AddNewInformal from '../components/AddNewInformal';

function AdminPanel() {
  //State
  const [formalForm, setFormalForm] = useState(true);
  const [formalData, setformalData] = useState({
    code: '',
    name: '',
    address: '',
    phone: '',
    category: '',
    municipality: '',
    subcategory: '',
    email: '',
    legalForm: '',
  });
  const [informalData, setInformalData] = useState({
    code: '',
    name: '',
    programAccreditation: '',
    programProvider: '',
    programMunicipality: '',
    programAddress: '',
    programStart: '',
  });

  // Functions

  // Inputs:

  // -- Formal change
  const handleFormalChange = (e) => {
    setformalData({ ...formalData, [e.target.name]: e.target.value });
  };
  // -- Informal change
  const handleInformalChange = (e) => {
    setInformalData({ ...informalData, [e.target.name]: e.target.value });
  };

  // Show Tables

  // -- show Formal
  const addNewFormal = () => {
    setFormalForm(true);
  };

  // -- show Informal
  const addNewInformal = () => {
    setFormalForm(false);
  };

  // Add to List

  // -- add Formal
  const addToFormalList = () => {
    let token = localStorage.getItem('lsis-auth');

    fetch('https://lsis.herokuapp.com/api/formal/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        token: token,
      },
      body: JSON.stringify(formalData),
    })
      .then((res) => res.json())
      .then((data) => {
        setformalData({
          code: '',
          name: '',
          address: '',
          phone: '',
          category: '',
          municipality: '',
          subcategory: '',
          email: '',
          legalForm: '',
        });
      })
      .catch((err) => console.log(err));

    console.log(formalData);
  };

  // -- add Informal
  const addToInformalList = () => {
    let token = localStorage.getItem('lsis-auth');

    fetch('https://lsis.herokuapp.com/api/informal/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        token: token,
      },
      body: JSON.stringify(informalData),
    })
      .then((res) => res.json())
      .then((data) => {
        setInformalData({
          code: '',
          name: '',
          programAccreditation: '',
          programProvider: '',
          programMunicipality: '',
          programAddress: '',
          programStart: '',
        });
      })
      .catch((err) => console.log(err));
    console.log(informalData);
  };

  return (
    <>
      <div className='coverNav'></div>

      <div className='admin-panel'>
        <div className='admin-panel__buttons'>
          <Button
            onClick={addNewFormal}
            text='Nauja formalaus ugdymo įstaiga'
            className={`${styleBtn.btn} ${styleBtn.btnDark}`}
          />
          <Button
            onClick={addNewInformal}
            text='Nauja neformalaus ugdymo įstaiga'
            className={`${styleBtn.btn} ${styleBtn.btnLight}`}
          />
        </div>
        <Button
          path='/admin'
          text='Grįžti atgal'
          className={`${styleBtn.smallBtn} ${styleBtn.btnLight}`}
        />
        {formalForm ? (
          <>
            <AddNewFormal
              name={formalData.name}
              code={formalData.code}
              address={formalData.address}
              phone={formalData.phone}
              category={formalData.category}
              municipality={formalData.municipality}
              subcategory={formalData.subcategory}
              email={formalData.email}
              legalForm={formalData.legalForm}
              onChange={handleFormalChange}
            />

            <Button
              onClick={addToFormalList}
              text='Pridėti į sąrašą'
              className={`${styleBtn.smallBtn} ${styleBtn.btnDark}`}
            />
          </>
        ) : (
          <>
            <AddNewInformal
              name={informalData.name}
              code={informalData.code}
              programAccreditation={informalData.programAccreditation}
              programProvider={informalData.programProvider}
              programMunicipality={informalData.programMunicipality}
              programAddress={informalData.programAddress}
              programStart={informalData.programStart}
              onChange={handleInformalChange}
            />
            <Button
              onClick={addToInformalList}
              text='Pridėti į sąrašą'
              className={`${styleBtn.smallBtn} ${styleBtn.btnDark}`}
            />
          </>
        )}
      </div>
    </>
  );
}

export default AdminPanel;
