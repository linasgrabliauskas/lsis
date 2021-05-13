import React, { useState, useEffect, useContext } from 'react'
import './Admin.css'
import styleBtn from '../components/Button.module.css'
import Button from '../components/Button'
import Table from '../components/Table'
import Spinner from '../components/Spinner'
import SearchControll from '../components/SearchControll'
import { BiLeftArrow, BiRightArrow } from 'react-icons/bi'
import { AuthenticationContext } from '../App'

function Admin() {
  // Global state
  const authentication = useContext(AuthenticationContext)

  // Variables
  const time = new Date().getHours()

  // State
  const [data, setData] = useState([])
  const [loaded, setLoaded] = useState(false)
  const [formalLoaded, setFormalLoaded] = useState(true)
  const [page, setPage] = useState(0)
  const [endPoint, setEndPoint] = useState(`https://lsis.herokuapp.com/api/formal/page/`)
  const [pagesSeeing, setPagesSeeing] = useState(true)

  // Endpoints
  const endPointFormalFilter = 'https://lsis.herokuapp.com/api/formal/filter'
  const endPointInformalFilter = 'https://lsis.herokuapp.com/api/informal/filter'

  // Functions
  const handleSetData = (array) => setData(array)
  const nextPage = () => setPage((prevPage) => prevPage + 1)
  const previousPage = () => setPage((prevPage) => (prevPage === 0 ? 0 : prevPage - 1))
  const showFormal = () => {
    setFormalLoaded(true)
    setPage(0)
    setEndPoint(`https://lsis.herokuapp.com/api/formal/page/`)
  }
  const showInformal = () => {
    setFormalLoaded(false)
    setPage(0)
    setEndPoint(`https://lsis.herokuapp.com/api/informal/page/`)
  }
  const logout = () => {
    let token = localStorage.getItem('lsis-auth')
    fetch('https://lsis.herokuapp.com/api/user/logout', {
      method: 'GET',
      headers: {
        token: token,
      },
    })
    .then((res) => {
      if (res.status === 200) {
        authentication.setAuthenticated(false)
        localStorage.setItem('lsis-auth', '')
        localStorage.setItem('lsis-username', '')
      }
    })
    .catch((err) => console.log(err))
  }

  const greeting = (time) => {
    const username = localStorage.getItem('lsis-username')
    if (time <= 12) {
      return `Labas rytas, ${username}`
    } else if (time < 17) {
      return `Laba diena, ${username}`
    } else {
      return `Labas vakaras, ${username}`
    }
  }

  // Effects
  useEffect(() => {
    fetch(endPoint + page)
    .then((res) => res.json())
    .then((data) => {
      setData(data)
      setLoaded(true)
    })
    .catch((err) => console.log(err))
  }, [endPoint, page])

  return (
    <>
      <div className='coverNav'></div>
      {formalLoaded ? (
        <>
          <div className='admin-container'>
            <h2>{greeting(time)}</h2>
            <Button path='/admin-panel' text='Pridėti naują įstaigą' className={`${styleBtn.smallBtn} ${styleBtn.btnLight}`}/>
            <h4>Formalus ugdymas</h4>
            <div className='buttons-container'>
              <div>
                <Button onClick={showFormal} text='Formalus ugdymas' className={`${styleBtn.btn} ${styleBtn.btnDark}`}/>
              </div>
              <div>
                <Button onClick={showInformal} text='Neformalus ugdymas' className={`${styleBtn.btn} ${styleBtn.btnDark}`}/>
              </div>
            </div>
            <div>
              <Button onClick={logout} text='Atsijungti' className={`${styleBtn.smallBtn} ${styleBtn.btnDark}`}/>
            </div>
          </div>

          <div className='table-wrapper'>
            <SearchControll url={endPointFormalFilter} handleSetData={handleSetData} setPagesSeeing={setPagesSeeing}/>
            {loaded 
            ? ( <Table data={data} informal={false} edit={true} />) 
            : ( <Spinner />)}
          </div>
        </>
      ) : (
        <>
          <div className='admin-container'>
            <h2>{greeting(time)}</h2>
            <Button
              path='/admin-panel'
              text='Pridėti naują įstaigą'
              className={`${styleBtn.smallBtn} ${styleBtn.btnLight}`}
            />
            <h4>Neformalus ugdymas</h4>
            <div className='buttons-container'>
              <div>
                <Button
                  onClick={showFormal}
                  text='Formalus ugdymas'
                  className={`${styleBtn.btn} ${styleBtn.btnDark}`}
                />
              </div>
              <div>
                <Button
                  onClick={showInformal}
                  text='Neformalus ugdymas'
                  className={`${styleBtn.btn} ${styleBtn.btnDark}`}
                />
              </div>
            </div>
            <div>
              <Button onClick={logout} text='Atsijungti' className={`${styleBtn.smallBtn} ${styleBtn.btnDark}`}/>
            </div>
          </div>

          <div className='table-wrapper'>
            <SearchControll url={endPointInformalFilter} handleSetData={handleSetData} setPagesSeeing={setPagesSeeing}/>
            {loaded 
            ? (<Table data={data} informal={true} edit={true} />) 
            : ( <Spinner />)}
          </div>
        </>
      )}

      {loaded && pagesSeeing && (
        <div className='pages-container'>
          <button onClick={previousPage}><BiLeftArrow /></button>
          <p>{page + 1}</p>
          <button onClick={nextPage}><BiRightArrow /></button>
        </div>
      )}
    </>
  )
}

export default Admin
