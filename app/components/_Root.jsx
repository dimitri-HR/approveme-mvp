import React, { PropTypes } from 'react';
import axios from 'axios';

import ItemList from './ItemList';
import ItemAdd from './ItemAdd';
// import api from './API';

class _Root extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      items: []
    };

    this.onItemAdd = this.onItemAdd.bind(this);
    this.onToggle = this.onToggle.bind(this);
    // this.getAllItems = this.getAllItems.bind(this);

  }

  componentDidMount() {
    var defaultCorsHeaders = {
      'access-control-allow-origin': '*',
      'access-control-allow-methods': 'GET, POST, OPTIONS',
      'access-control-allow-headers': 'content-type, accept',
      'access-control-max-age': 10 // Seconds.
    };

    var headers = defaultCorsHeaders;
    headers['content-Type'] = 'application/json';

    // http://approveme.herokuapp.com/items
    axios.get('/items', {
      headers: headers
    })
    .then(res => {
      // console.log('RES', res.data.items);
        this.setState({ items: res.data.items });
    });
  }

  postItemsToDb(text) {
    axios.post('/items', {
      text: text
    })
    .then(res => {
      console.log('POST completed', res);
      // this.setState({ data: res.data.items });
    });
  }

  onItemAdd (text) {
    this.setState({
      items: [
        ...this.state.items,
        {
          text: text
        }
      ]
    });
    this.postItemsToDb(text);
  }

  onToggle (id) {
    var updatedItems = this.state.items.map(item => {
      if (item._id === id) {
        item.approved = !item.approved;
      }
      return item;
    })
    this.setState({ items: updatedItems });
  }

  render () {
    return (
      <div className='container'>
        <div className='row'>
          <div className='col-xs-10 col-sm-9 col-md-7'>
            <h3 className='page-header'>Get Approved - FAST</h3>
            <ul className="list-group">
              {/*<ItemSearch onSearch={this.onSearch}/>*/}
              <ItemList data={this.state.items} onToggle={this.onToggle}/>
              <ItemAdd onItemAdd={this.onItemAdd}/>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default _Root;
