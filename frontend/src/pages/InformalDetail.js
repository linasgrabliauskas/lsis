import React, {useState, useEffect} from 'react'
import { Link, useParams } from "react-router-dom"
import './InformalDetail.css'

function InformalDetail() {
    
    // State
    const [data, setData] = useState([])

    // Params
    let { id } = useParams();

    // Effects
    useEffect(() => {
        fetch(`https://lsis.herokuapp.com/api/informal/${id}`)
        .then((res) => res.json())
        .then((data) => {
        setData(data)
        })
        .catch((err) => console.log(err))
    }, [id])

    return (
        <div className="formal-details">
            <div className="formal-details__content">
                <p className="back__btn"><Link to="/neformalus-ugdymas/"><span className="chevron">ᐸ</span>Grįžti atgal</Link></p>
                <p className="title">Neformalaus švietimo programos<span className="chevron">ᐳ</span>{data.name}</p>     
                <h1 className="heading-3">{data.name}</h1>
            
                <ul className="details__table">
                    <li className="details__table-item">
                        <h4 className="details__table-title">Programos kodas:</h4>
                        <p className="details__table-data">{data.code}</p>
                    </li>
                    <li className="details__table-item">
                        <h4 className="details__table-title">Programos akreditavimo terminas:</h4>
                        <p className="details__table-data">{data.programAccreditation ? data.programAccreditation : "-"}</p>
                    </li>
                    <li className="details__table-item">
                        <h4 className="details__table-title">Programos teikėjas:</h4>
                        <p className="details__table-data">{data.programProvider}</p>
                    </li>
                    <li className="details__table-item">
                        <h4 className="details__table-title">Renginio savivaldybė:</h4>
                        <p className="details__table-data">{data.programMunicipality ? data.programMunicipality : "-"}</p>
                    </li>
                    <li className="details__table-item">
                        <h4 className="details__table-title">Programos vykdymo adresas:</h4>
                        <p className="details__table-data">{data.programAddress}</p>
                    </li>
                    <li className="details__table-item">
                        <h4 className="details__table-title">Programos vykdymo pradžia:</h4>
                        <p className="details__table-data">{data.programStart ? data.programStart : "-"}</p>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default InformalDetail
