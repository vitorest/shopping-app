import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import classes from './MainNavigation.module.css'

export default class MainNavigation extends Component {
  render() {
    return (
      <header className={classes.navbarContainer}>
        <nav>
          <ul className={classes.linkList}>
            <li>
              <Link to='/' className={classes.linkName} >women</Link>
            </li>
            <li>
              <Link to='/men' className={classes.linkName}>men</Link>
            </li>
            <li>
              <Link to='/kids' className={classes.linkName}>kids</Link>
            </li>
          </ul>
        </nav>
      </header>
    )
  }
}
