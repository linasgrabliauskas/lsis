import React from 'react';
import './Home.css';
import Button from '../components/Button';
import styleBtn from '../components/Button.module.css';

function Home() {
  return (
    <main>
      <div className='hero'>
        <div className='hero-text'>
          <h1 className='heading-1'>
            Lietuvos švietimo ir mokslo institucijos
          </h1>
          <h3 className='heading-3'>Išsilavinimas yra turtas, kuris bus tavimi, kad ir kur tu beeitum</h3>
        </div>
        <div className='buttons-container'>
          <Button
            path='/formalus-ugdymas'
            text='Formalus ugdymas'
            className={`${styleBtn.btn} ${styleBtn.btnDark}`}
          />
          <Button
            path='neformalus-ugdymas'
            text='Neformalus ugdymas'
            className={`${styleBtn.btn} ${styleBtn.btnLight}`}
          />
        </div>
      </div>
    </main>
  );
}

export default Home;
