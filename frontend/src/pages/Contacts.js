import React from 'react'
import './Contacts.css'
import Button from '../components/Button'
import styleBtn from '../components/Button.module.css'


function Contacts() {
    return (
        <div className="container">
            <div className='contacts__container_img'></div>
            <div className="contacts__container">
                <h2>SUSISIEKITE</h2>
                    <form name="contact" netlify action='/'>
                        <label htmlFor="name">Vardas</label>
                        <input type="text" name="name" id="name"/>
                        <label htmlFor="email">El.paštas</label>
                        <input type="email" name="email" id="email"/>
                        <textarea cols="30" rows="10" placeholder='Jūsų žinutė..' name="message"></textarea>
                        <Button className={`${styleBtn.btn} ${styleBtn.btnDark}`} text={'Pateikti'}/>
                    </form>
            </div>
        </div>
    )
}

export default Contacts
