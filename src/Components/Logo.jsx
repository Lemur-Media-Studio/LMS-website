import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import LogoText from '../assets/Images/logoText.png';
import Flags from './Flags/Flags';

const Container = styled.div`
  position: absolute;
  z-index:95;
  @media (max-width: 64em) {
  img {
    display: none;
  }
}
`
const Logo = () => {
  return (
    <Container data-scroll data-scroll-speed="-2" data-scroll-direction="horizontal">
      {/* <img src={LogoText} alt="logo" /> */}
        <Flags />
    </Container>
  )
}

export default Logo