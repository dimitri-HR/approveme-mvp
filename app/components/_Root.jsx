import React, { PropTypes } from 'react';
import axios from 'axios';

import ItemList from './ItemList';
import ItemAdd from './ItemAdd';
// import api from './API';

class _Root extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      data: []
    };

    this.onItemAdd = this.onItemAdd.bind(this);
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

    axios.get('http://localhost:3000/items', {
      headers: headers
    })
    .then(res => {
      // console.log('RES', res.data.items);
        this.setState({ data: res.data.items });
    });
  }

  postItemstoDb(text) {
    // text = JSON.stringify(text);
    axios.post('http://localhost:3000/items', {
      text: text
    })
    .then(res => {
      console.log('POST completed', res);
      // this.setState({ data: res.data.items });
    });
  }

  onItemAdd (text) {
    this.setState({
      data: [
        ...this.state.data,
        {
          text: text
        }
      ]
    });
    this.postItemstoDb(text);
  }
  render () {
    return (
      <div className='container'>
        <div className='row'>
          <div className='col-xs-10 col-sm-9 col-md-7'>
            <h3 className='page-header'>Get Approved - FAST</h3>
            <ul className="list-group">
              <ItemList data={this.state.data}/>
              {/*<ItemSearch onSearch={this.onSearch}/>*/}
              {/*<ItemList items={filteredItems} onToggle={this.onToggle}/>*/}
              <ItemAdd onItemAdd={this.onItemAdd}/>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default _Root;
