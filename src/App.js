import React, { Component } from 'react';
import './App.css';
import Receipt from './Receipt1.js'

const receipts = [
  {
    person: "Karolin",
    order: {
      main: "Burrito",
      protein: "Organic Tofu",
      rice: "Purple Rice",
      sauce: "Green Crack",
      toppings: ["Baby Bok Choy", "Cucumber Kimchi"],
      drink: "Korchata",
      cost: 22
    },
    paid: false
  },
  {
    person: "Jerrica",
    order: {
      main: "Rice Bowl",
      protein: "Ginger Soy Chix",
      rice: "Sticky Rice",
      sauce: "Korilla",
      toppings: ["Yuzu Pickled Sweet Pepper", "Kale"],
      drink: "Korchata",
      cost: 19
    },
    paid: false
  },
  {
    person: "Matt",
    order: {
      main: "Salad Bowl",
      protein: "Organic Tofu",
      rice: "none",
      sauce: "K'lla",
      toppings: ["Blue Potato Salad", "Pico De Gallo", "Red Kimchi"],
      drink: "Sparkling Blood Orange Soda",
      cost: 20
    },
    paid: false
  }
];


// didPayYet = () => receipts.filter(receipt => {
//       return receipt.paid === false;
//      });




export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      receipts: receipts,
      filter: ""
      };
    this.filterName = this.filterName.bind(this);
  }

  filterName(event){
    this.setState({ filter: event.target.value.substr(0,20) });
  }



  render () {

    let filtered = this.state.receipts.filter(receipt => {
      return receipt.person.indexOf(this.state.filter) !== -1;
    });
// const didPayYet = () => receipts.filter(receipt => {
//       return receipt.paid === false;
//     });
    return (
      <div>
          <h1 className="truck-name">Korilla Receipts</h1>
          <form className="search">
            <input className="searchBar"
              type="text" 
              placeholder="Order name?"
              name="search"
              value={this.state.filter}
              onChange = {this.filterName}
            />
          </form>
          <div className="container">

          {/* didPayYet( */}
        {filtered.map((receipt, index) => ( 
          <Receipt receipt={receipt} key={index} />
        ))}
  {/* {didPayYet.map(receipt => <Receipt person={receipt.person} order={receipt.order} key={receipt.person}/>)} */}

          </div>
      </div>
    )
  }
}

