import axios from 'axios';

// var routes = require('routes');
// var {Item} = require('./../../server/models');


var api = {
  getAllItems: function () {
    let data = [];
    // let data = [
    //   {
    //     id: 1,
    //     text: 'text10'
    //   },
    //   {
    //     id: 2,
    //     text: 'text2'
    //   },
    //   {
    //     id: 3,
    //     text: 'text3'
    //   }
    // ]

    // get data from server

    var defaultCorsHeaders = {
      'access-control-allow-origin': '*',
      'access-control-allow-methods': 'GET, POST, OPTIONS',
      'access-control-allow-headers': 'content-type, accept',
      'access-control-max-age': 10 // Seconds.
    };

    var headers = defaultCorsHeaders;
    headers['content-Type'] = 'application/json';
    console.log('headers', headers);
// headers: {'X-Requested-With': 'XMLHttpRequest'}


    axios.get('http://localhost:3000/items', {
      headers: headers
    })
    .then(res => {
      console.log('RES', res.data.items);
      data = res.data.items;
        // const posts = res.data.data.children.map(obj => obj.data);
        // this.setState({ data });
        console.log('DATA', data);
        return data;
    });
console.log('test', test);

    // try {
    //   data = JSON.parse(strData);
    // } catch (e) {
    //   // ...
    // }
    // return Array.isArray(data) ? data : [];
    return data;
  }
}

export default api;
