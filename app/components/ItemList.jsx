import React, { PropTypes } from 'react';
import Item from './Item';

const ItemList = (props) => {

  // console.log('props', props);
  return (
    <div>
      {
        props.data.map(item => {
          // console.log('item', item);
          return <Item key={item._id} item={item} onToggle={props.onToggle}/>;
        })
      }
    </div>
  );
};

export default ItemList;
