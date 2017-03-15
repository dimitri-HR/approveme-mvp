import React, { PropTypes } from 'react';
import axios from 'axios';

import ItemList from './ItemList';
import ItemAdd from './ItemAdd';
// import api from './API';

class _Root extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      items: [],
      showAll: true
    };

    this.onItemAdd = this.onItemAdd.bind(this);
    this.onToggle = this.onToggle.bind(this);
    // this.getAllItems = this.getAllItems.bind(this);

  }

  componentDidUpdate() {

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

  updateItemsOnDb(id, approved) {
    console.log('updateItemsOnDb id', id);
    axios.patch('/items/' + id, {
      approved: approved
    })
    .then(res => {
      console.log('POST completed', res);
      // this.setState({ data: res.data.items });
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
    console.log('id', id);
    var approved;
    var updatedItems = this.state.items.map(item => {
      if (item._id === id) {
        item.approved = !item.approved;
        approved = item.approved;
      }
      return item;
    })
    console.log('id', id);
    this.updateItemsOnDb(id, approved)
    this.setState({ items: updatedItems });

  }

  filterItems() {
    var filteredItems = this.state.items;
    var showAll = this.state.showAll;
    // let filteredItems = items;

    // filter by showAll
    filteredItems = filteredItems.filter(item => {
      return !item.approved || showAll;
    });

    // filter by searchText
    // filteredTodos = filteredTodos.filter(todo => {
    //     let todoText = todo.text.toLowerCase();
    //     return todoText.indexOf(searchText) > -1;
    // });

    return filteredItems;
  }

  render () {
    var filteredItems = this.filterItems();
    return (
      <div className='container'>
        <div className='row'>
          <div className='col-xs-10 col-sm-9 col-md-7'>
            <h3 className='page-header'>Get Approved - FAST</h3>
            <ul className="list-group">
              {/*<ItemSearch onSearch={this.onSearch}/>*/}
              <ItemList data={filteredItems} onToggle={this.onToggle}/>
              <ItemAdd onItemAdd={this.onItemAdd}/>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default _Root;
