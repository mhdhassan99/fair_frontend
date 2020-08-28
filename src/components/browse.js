import React, { useState, useEffect } from 'react';
import '../componentStyles/browseStyles.css'
import ItemCard from './itemCard';

class Browse extends React.Component {

  state = {
    items: []
  }

  componentDidMount() {
    // debugger;
    console.log('hi')
    fetch("http://localhost:3001/api/v1/items")
      .then((response) => response.json())
      .then(data => {
        this.setState({
            items: data
        });
      });
  }
  
  render () {
    
    // console.log('items', this.state.items)
    let items = this.state.items.map(item => (<ItemCard item={item} key={item.id}/>))
    return (
      <div className="productCards">
       {items}
      </div>
    )
  }
}

export default Browse