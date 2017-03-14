import React, { PropTypes } from 'react';
import Item from './Item';

const ItemList = (props) => {

  // console.log(props);
  return (
    <div>
      {
        props.data.map(item => {
          // console.log('item', item);
          return <Item key={item._id} row={item}/>;
        })
      }
    </div>
  );
};

export default ItemList;
