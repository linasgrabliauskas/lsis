import React, { useState, useEffect } from 'react'
import './Formal.css'
import { BiLeftArrow, BiRightArrow } from 'react-icons/bi'
import SearchControll from '../components/SearchControll'
import Table from '../components/Table'
import Spinner from '../components/Spinner'

function Formal() {

  // State
  const [data, setData] = useState([])
  const [loaded, setLoaded] = useState(false)
  const [page, setPage] = useState(0)
  const [pagesSeeing, setPagesSeeing] = useState(true)

  // Endpoints
  const endPoint = `https://lsis.herokuapp.com/api/formal/page/${page}`
  const endPointFormalFilter = 'https://lsis.herokuapp.com/api/formal/filter'

  // Functions
  const handleSetData = array => setData(array)
  const nextPage = () => setPage(prevPage => prevPage + 1)
  const previousPage = () => setPage(prevPage => prevPage === 0 ? 0 : prevPage - 1)

  // Effects
  useEffect(() => {
    fetch(endPoint)
      .then((res) => res.json())
      .then((data) => {
        setData(data)
        setLoaded(true)
      })
      .catch((err) => console.log(err))
  }, [endPoint, page])

  return (
    <main>

      <div className='formal-list-wrapper'>
        <h2 className='heading-2'> FORMALUS UGDYMAS </h2>
      </div>

      <div className='table-wrapper'>
        <SearchControll url={endPointFormalFilter} handleSetData={handleSetData} setPagesSeeing={setPagesSeeing} />
        {loaded ? <Table data={data} informal={false}/> : <Spinner/>}

        {loaded && pagesSeeing && (
          <div className='pages-container'>
            <button onClick={previousPage}><BiLeftArrow /></button>
            <p>{page + 1}</p>
            <button onClick={nextPage}><BiRightArrow /></button>
          </div>
        )}
      </div>

    </main>
  )
}

export default Formal
