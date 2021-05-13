import React from 'react'
import './About.css'
import Button from '../components/Button'
import styleBtn from '../components/Button.module.css'
import {Link} from 'react-router-dom'

function About() {
    return (
        <div className='about__container'>
            <div className="about__container_image">
                <h2 className='heading-2'>APIE MUS</h2>
            </div>
            <div className="about__container_text">
                <h2>Apie projektą</h2>
                <p> LSIS yra aplikacija, siekianti padėti jums susirasti informaciją apie švietimo įstaigas ir programas jums ir jūsų vaikams. Pagrindiniame puslapyje rasite nuorodas į formalaus ir neformalaus mokymo įstaigų bei programų sąrašus. Abu sąrašai yra pasiekiami visiems vartotojams, bei juos galima išrūšiuoti pagal pasirinktus parametrus, kuriuos rasite virš sąrašo lentelės. </p>
                <p>Norėdami sužinoti detalesnę informaciją apie dominančią mokymo įstaigą/programą, spauskite ant įstaigos/programos pavadinimo, ir būsite nukreipti į atskirą puslapį su detalesne informacija. Verslo vartotojams taip pat siūlome gauti visus sveitainėje talpinamus duomenis apie mokymosi programas/įstaigas, kuriuos rasite mūsų pateiktoje <Link to='/dokumentacija'>dokumentacijoje</Link>. Jeigu turite klausimų, prašome kreiptis naudojantis kontaktine informacija kuri yra pateikta skirtuke pavadinimu 'Kontaktai'. 
                Komanda jums linki sėkmingų paieškų ir turiningo mokymosi! </p>
                <h3>Projektą parengė:</h3>
                <p>Karina Garifovaitė, Evelina Poniatajeva, Erika Butrimanskienė, Martynas Viltrakis, Linas Grabliauskas</p>
                <div><Button className={`${styleBtn.btn} ${styleBtn.btnDark}`} text={'Susisiekti'} path={'/kontaktai'}/></div>
            </div>
        </div>
    )
}

export default About
