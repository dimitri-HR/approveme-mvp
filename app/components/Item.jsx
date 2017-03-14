import React, { PropTypes } from 'react'

const Item = (props) => {
// console.log('Item props', props);

var itemClassName = props.item.approved ? 'item item-approved list-group-item' : 'item text-primary list-group-item';

  return (
    <div className={itemClassName} onClick={() => props.onToggle(props.item._id)}>
      <div >{props.item.text}</div>
    </div>
  )
}

export default Item;
