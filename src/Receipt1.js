import React, { Component } from 'react';
import './Receipt.css';

export default class Receipt extends Component {
render () {
    return (
      <div className="receipt">
        <h1>{this.props.receipt.person}</h1>
        <p><span>Main: </span>{this.props.receipt.order.main}</p>
        <p><span>Protein: </span>{this.props.receipt.order.protein}</p>
        <p><span>Rice: </span>{this.props.receipt.order.rice}</p>
        <p><span>Sauce: </span>{this.props.receipt.order.sauce}</p>
        <p><span>Drink: </span>{this.props.receipt.order.drink}</p>
        <p><span>Cost: $   </span>{this.props.receipt.order.cost}</p>
      </div>
    )
  }
}


