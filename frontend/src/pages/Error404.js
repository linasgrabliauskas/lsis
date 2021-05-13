import React from 'react'
import './Error404.css'
import { useHistory } from "react-router-dom"

function Error404() {
    let history = useHistory()

    return (
        <div className="error-container">
       
            <div className="text-container">
                <h1 className="error">404</h1>
                <h2 className="not-found">Puslapis nerastas</h2>
                <p className="back-button" onClick={() => history.goBack()}><span className="back-arrow">🠔</span> Grįžti į pradinį puslapį</p>
            </div>
        </div>
    )
}

export default Error404
