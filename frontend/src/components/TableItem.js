import React from 'react'
import { Link } from 'react-router-dom'

function TableItem(props) {
  const { id, name, address, subcategory, informal, edit } = props

  const admin = edit && ( informal 
    ? <button className='table-info-btn'><Link to={'/admin/neformalus-ugdymas/' + id}>Redaguoti</Link></button> 
    : <button className='table-info-btn'><Link to={'/admin/formalus-ugdymas/' + id}>Redaguoti</Link></button>
  )
  const user = informal 
  ? <button className='table-info-btn'><Link to={'/neformalus-ugdymas/' + id}>Plačiau</Link></button> 
  : <button className='table-info-btn'><Link to={'/formalus-ugdymas/' + id}>Plačiau</Link></button>

  return (
    <tr>
      <td>{name}</td>
      <td>{address}</td>
      <td>{subcategory}</td>
      <td>{admin ? admin : user}</td>
    </tr>
  )
}

export default TableItem
