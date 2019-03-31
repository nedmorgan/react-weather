import React, { Component } from 'react'
import { HeaderContainer } from '../styled_components/HeaderStyles'

export default class Header extends Component {
  render() {
    return (
      <HeaderContainer>
        <h1><a className="header" href="/">myWe@ther</a></h1>
      </HeaderContainer>
    )
  }
}
