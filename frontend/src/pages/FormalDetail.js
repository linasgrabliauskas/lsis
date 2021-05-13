import React, {useState, useEffect} from 'react'
import { Link, useParams } from "react-router-dom";
import './FormalDetail.css'

function FormalDetail() {

    // State
    const [data, setData] = useState([])

    // Params
    let { id } = useParams();
 
    // Effects
    useEffect(() => {
        fetch(`https://lsis.herokuapp.com/api/formal/${id}`)
        .then((res) => res.json())
        .then((data) => {
        setData(data)
        })
        .catch((err) => console.log(err))
    }, [id])

    return (
        <div className="formal-details">
            <div className="formal-details__content">
                <p className="back__btn"><Link to="/formalus-ugdymas/"><span className="chevron">ᐸ</span>Grįžti atgal</Link></p>
                <p className="title">Formalaus švietimo ir mokslo institucijos <span className="chevron">ᐳ</span> {data.name}</p>     
                <h1 className="heading-3">{data.name}</h1>
             
                <ul className="details__table">
                    <li className="details__table-item">
                        <h4 className="details__table-title">Juridinio asmens kodas:</h4>
                        <p className="details__table-data">{data.code}</p>
                    </li>
                    <li className="details__table-item">
                        <h4 className="details__table-title">Adresas:</h4>
                        <p className="details__table-data">{data.address}</p>
                    </li>
                    <li className="details__table-item">
                        <h4 className="details__table-title">Telefonas:</h4>
                        <p className="details__table-data">{data.phone}</p>
                    </li>
                    <li className="details__table-item">
                        <h4 className="details__table-title">Grupė:</h4>
                        <p className="details__table-data">{data.category}</p>
                    </li>
                    <li className="details__table-item">
                        <h4 className="details__table-title">Savivaldybė:</h4>
                        <p className="details__table-data">{data.municipality}</p>
                    </li>
                    <li className="details__table-item">
                        <h4 className="details__table-title">Tipas:</h4>
                        <p className="details__table-data">{data.subcategory}</p>
                    </li>
                    <li className="details__table-item">
                        <h4 className="details__table-title">El-paštas:</h4>
                        <p className="details__table-data">{data.email}</p>
                    </li>
                    <li className="details__table-item">
                        <h4 className="details__table-title">Teisinė forma:</h4>
                        <p className="details__table-data">{data.legalForm}</p>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default FormalDetail
