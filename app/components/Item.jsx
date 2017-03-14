import React, { PropTypes } from 'react'

const Item = (props) => {
  return (
    <div className='list-group-item'>
      <div >{props.row.text}</div>
    </div>
  )
}

export default Item;
