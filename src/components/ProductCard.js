import React, { Component } from 'react'
import classes from '../components/ProductCard.module.css'

export default class ProductCard extends Component {
  render() {
    return (
      <>
        <div className={classes.productCardContainer}>
          <div>img here</div>
          <div>Name and price</div>
        </div>
      </>
    )
  }
}
