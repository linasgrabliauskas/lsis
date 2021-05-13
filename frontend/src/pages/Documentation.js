import React from 'react'
import './Documentation.css' 

import Api1 from "../assets/images/Api1.png" 
import Api2 from "../assets/images/Api2.png" 

function Documentation() {
    return (
        <div className="doc-container">
            
            <div className="image">
                <h2 className='heading-2'>DOKUMENTACIJA</h2>
            </div>

            <div className="title-container">
                <h2 className="title">Kam skirtas LSIS API?</h2>
                <hr />
                <p>Ko gero, beveik kiekvienas žino, kaip svarbu verslui žengti koja kojon su nuolat tobulėjančiomis technologijomis, leidžiančiomis būti keliais žingsniais priekyje konkurentų. Mūsų atvirojo programavimo sąsaja API leidžia automatizuotai gauti duomenis (Lietuvos formaliojo švietimo įstaigos, Lietuvos neformaliojo švietimo įstaigos ir programos) iš lsis.lt Mes renkame ir apdorojame duomenis iš įvairių šaltinių. Duomenys yra pateikiami JSON formatu.</p>
            </div>

            <div className="section-container">
                <h2 className="title">Užklausos URL formavimas</h2>
                <hr />
                <p>Pvz: Gauti visų formaliojo švietimo įstaigų informaciją</p>
                <h4 className="endpoint">GET  /api/formal</h4>
                <p>Gauti visų formaliojo švietimo įstaigų informaciją (30 duomenų kiekviename puslapyje)</p>
                <h4 className="endpoint">GET  /api/formal/1</h4>
                <p>Gauti konkrečios formaliojo švietimo įstaigos informaciją pagal id</p>
                <h4 className="endpoint">GET /api/formal/607fdcb984012b2bf43843b5</h4>
                <p>Gauti formaliojo švietimo įstaigų informaciją pagal filtrus : kodą ("filterByCode"), adresą ("filterByAddress") , pavadinimą ("filterByName"). Filtre galima įverti tiek vieną arba daugiau užklausos žodžių. Filtro duomenų užklausos pavyzdys:</p>
                <p>
                    &#123;<br/>
	                &quot;filterByName&quot; : [ &quot;mokykla&quot; ],<br/>
	                &quot;filterByAddress&quot; : [ &quot;vilnius&quot; , &quot;vytauto&quot;]<br/>
    	            &#125;
                </p>
                <h4 className="endpoint">POST /api/formal/filter</h4>
                <p>Gauti visų neformaliojo švietimo įstaigų informaciją</p>
                <h4 className="endpoint">GET /api/informal</h4>
                <p>Gauti visų neformaliojo švietimo įstaigų informaciją (30 duomenų kiekviename puslapyje)</p>
                <h4 className="endpoint">GET /api/informal/1</h4>
                <p>Gauti konkrečios neformaliojo švietimo įstaigos informaciją pagal id</p>
                <h4 className="endpoint">GET /api/informal/607fe5e084012b2bf43853ee</h4>
                <p>Gauti neformaliojo švietimo įstaigų informaciją pagal filtrus : kodą ("filterByCode"), adresą ("filterByAddress") , pavadinimą ("filterByName"). Filtre galima įvesti tiek vieną arba daugiau užklausos žodžių.</p>
                <p>
                    &#123;<br/>
	                &quot;filterByName&quot; : [ &quot;mokykla&quot; ],<br/>
	                &quot;filterByAddress&quot; : [ &quot;vilnius&quot; , &quot;vytauto&quot;]<br/>
    	            &#125;
                </p>
                <h4 className="endpoint">POST /api/informal/filter</h4>
                <p>Atsakymų pvz:</p>
                <div className="ex-container">
                    <h4 className="ex-text">1. Formaliosios įstaigos:</h4>
                    <img src={Api1} alt="example" className="api-img1"></img>
                </div>
                <div className="ex-container">
                    <h4 className="ex-text">2. Neformaliosios įstaigos:</h4>
                    <img src={Api2} alt="example" className="api-img2"></img>
                </div>
                <h2 className="title">Error žinutės</h2>
                <hr />
                <p>API HTTP kodai klaidų atveju:</p>
                <p className="und-title">Kliento klaidos:</p>
                <p> 
                    400 – Bloga užklausa, netinkami parametrai<br/>
                    401 – Tapatybės nustatymas nepavyko arba yra nepakankamas<br/>
                    404 – Išteklius neegzistuoja<br/>
                </p>
                <p className="und-title">Serverio klaidos:</p>
                <p>500 – visos serverio vidinės klaidos</p>
            </div>
        </div>
    )
}

export default Documentation
  