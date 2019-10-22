import React, { Component } from 'react';
import Burger from '../../Components/Burger/Burger'
import BuildControls from '../../Components/Burger/BuildControls/BuildControls'

class BurgerBuilder extends Component {
state = {
  ingredients: {
    Salad: 0,
    Bacon: 0,
    cheese: 1,
    meat: 0
  }
}

  render () {
    return <>
      <Burger ingredients={this.state.ingredients} />
      <BuildControls />
    </>;
  }
}

export default BurgerBuilder;
