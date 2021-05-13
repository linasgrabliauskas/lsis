import React from 'react'
import './Table.css';
import TableItem from './TableItem';

function Table({ data, informal, edit }) {

  return (
    <div>

      <table className='table'>
        <thead className='t-head'>
          <tr>
            <th>Įstaigos pavadinimas</th>
            <th>Adresas</th>
            {informal ? <th>Programos tiekėjas</th> : <th>Įstaigos tipas</th>}
            <th></th>
          </tr>
        </thead>

        <tbody>
          {informal 
          ? data.map((dataItem) => <TableItem informal={true} key={dataItem._id} id={dataItem._id} name={dataItem.name} address={dataItem.programAddress} subcategory={dataItem.programProvider} edit={edit}/>)
          : data.map((dataItem) => <TableItem informal={false} key={dataItem._id} id={dataItem._id} name={dataItem.name} address={dataItem.address} subcategory={dataItem.subcategory} edit={edit}/>)
          }
        </tbody>
        
      </table>
    </div>
  )
}

export default Table
