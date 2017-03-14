import React, { PropTypes } from 'react'

class ItemAdd extends React.Component {
// const ItemAdd = (props) => {

  onSubmit(e) {
    e.preventDefault();

    let newItem = this.refs.newItem.value.trim();
    if (newItem.length > 0) {
      this.refs.newItem.value = '';
      this.props.onItemAdd(newItem);
    }
    this.refs.newItem.focus();
  }

  render() {
    return (
      <div className='container__footer'>
        <form onSubmit={this.onSubmit.bind(this)}>
          <div className='form-group has-primary'>
            <input type='text' className='form-control input-lg' ref='newItem' placeholder='Add new request'/>
          </div>
          <button className='btn btn-lg btn-block btn-primary'> Add Request </button>
        </form>
      </div>
    );
  }
}

export default ItemAdd;
