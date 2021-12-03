import React, { Component } from 'react'
import ExchangeRates from '..'
import ProductCard from '../components/ProductCard'


export default class WomenPage extends Component {
  render() {
    return (
      <>
        <div>Women Page</div>
        <div>
          <ProductCard />
          <ExchangeRates />
        </div>

      </>
    )
  }
}
