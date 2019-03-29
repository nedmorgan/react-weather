import React, { Component } from 'react'
import { HeaderContainer } from '../styled_components/HeaderStyles'

export default class Header extends Component {
  render() {
    return (
      <HeaderContainer>
        <h1><a href="/">Rain or Shine?</a></h1>
      </HeaderContainer>
    )
  }
}
