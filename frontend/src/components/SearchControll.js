import React, {useState} from 'react';
import './SearchControll.css';

function SearchControll({url, handleSetData, setPagesSeeing}) {

  const [inputName, setInputName] = useState([])
  const [inputAddress, setInputAddress] = useState([])
  const [inputCode, setInputCode] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    const data = {
      filterByName : inputName,
      filterByAddress : inputAddress,
      filterByCode : inputCode
    }
    fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify(data),
    })
    .then(response => response.json())
    .then(data => handleSetData(data))
    .catch(err => console.log(err))
    setPagesSeeing(false)
  }

  return (
    <form className='search-wrapper' onSubmit={handleSubmit}>
      <div className='search-control'>
        <input className='search' type='text' placeholder='Pavadinimas' onChange={(e) => setInputName(e.target.value.trim().split(' '))}/>
        <input className='search' type='text' placeholder='Adresas miestas gatvė' onChange={(e) => setInputAddress(e.target.value.trim().split(' '))}/>
        <input className='search' type='text' placeholder='Įstaigos kodas' onChange={(e) => setInputCode(e.target.value.toString().trim())}/>
      </div>
      <button className='search-btn'> Paieška </button>
    </form>
  )
}

export default SearchControll
