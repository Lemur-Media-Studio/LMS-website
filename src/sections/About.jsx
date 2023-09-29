import React, { useContext } from 'react'
import styled from 'styled-components'

import img1 from '../assets/lemur-animado.gif';
import img2 from '../assets/Images/retrolemur-1.png';
import img3 from '../assets/Images/retrolemur-2.png';
import ladrillos from '../assets/Images/ladrillos.jpg'
import NeonText from '../Components/Neontext';
import { LanguageContext } from '../Context/Context';

const Section = styled.section`
  min-height: 100vh;
  width: 80vw;
  margin: 0 auto;
  color: white;
  position: relative;

  display: flex;
  @media (max-width: 48em) {
    width: 90vw;
  }

  @media (max-width: 30em) {
    width: 100vw;
  }
  /* justify-content: center;
  align-items: center; */
`;

const Left = styled.div`
  width: 50%;
  font-size: ${(props) => props.theme.fontlg};
  font-weight: 300;
  position: relative;
  z-index: 5;
  margin-top: 20%;

  @media (max-width: 64em) {
    width: 80%;

    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) !important;
    margin: 0 auto;

    padding: 2rem;
    font-weight: 600;

    backdrop-filter: blur(2px);
    background-color: ${(props) => `rgba(${props.theme.textRgba},0.4)`};
    border-radius: 20px;
  }
  @media (max-width: 48em) {
    font-size: ${(props) => props.theme.fontmd};
  }
  @media (max-width: 30em) {
    font-size: ${(props) => props.theme.fontsm};
    padding: 2rem;
    width: 70%;
  }
`;

const Right = styled.div`
  width: 50%;
  position: relative;
  background-image: url(${ladrillos});
  /* min-height: 100vh; */

  img {
    width: 100%;
    height: auto;
  }

  .small-img-1 {
    width: 40%;
    position: absolute;
    right: 80%;
    bottom: 10%;
  }
  .small-img-2 {
    width: 35%;
    position: absolute;
    left: 85%;
    top: 20%;
  }
  @media (max-width: 64em) {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    img {
      width: 80%;
      height: auto;
      object-fit: cover;
    }

    .small-img-1 {
      width: 30%;
      height: auto;
      left: -10%;
      bottom: 10%;
    }
    .small-img-2 {
      width: 30%;
      height: auto;

      position: absolute;
      left: 80%;
      bottom: 20%;
    }
  }
`;

const Title = styled.h1`
  font-size: ${(props) => props.theme.fontfs};
  /* text-transform: capitalize; */

  position: absolute;
  top: 1rem;
  left: 5%;
  z-index: 5;

  span {
    display: inline-block;
  }

  @media (max-width: 64em) {
    font-size: ${(props) => `calc(${props.theme.fontBig} - 5vw)`};
    top: 0;
    left: 0%;
    color: white;
  }
  @media (max-width: 48em) {
    font-size: ${(props) => props.theme.fontxxxl};
  }
`;

const About = () => {

  const context = useContext(LanguageContext);

  return (
    <Section id="fixed-target" className='About'>
      <Title data-scroll data-scroll-speed="-2" data-scroll-direction="horizontal">
        <NeonText type="neon-titles neon-wrapper" text={context.german ? "Über uns" : context.spanish ? "Nosotros" : "About us"} data={context.german ? "Über uns" : context.spanish ? "Nosotros" : "About us"} />
      </Title>
      <Left data-scroll data-scroll-sticky data-scroll-target="#fixed-target">
        We're fashion studio based in california.
        We create unique designs that will blow your mind. We also design unique jewellary pieces.
        Fashion is an ART that can not be grasped by everyone.
        <br />
        <br />
        We are very dedicated to making our products.
        We offer unique and creative products to a wide range of people.
        We have a variety of styles, but for most people, all of the options are in the box.
        We specialize in making things that make you happy.
        <br />
        <br />
        We strive to build on our vision. As a fashion label, we do our best to create amazing experiences for all people.
        We are always looking to make something that is easy for everyone.
      </Left>
      <Right>
        <img src={img1} alt="about us" />
        <img
          data-scroll data-scroll-speed="5"
          src={img2} className="small-img-1" alt="about us" />
        <img
          data-scroll data-scroll-speed="-2"
          src={img3} className="small-img-2" alt="about us" />
      </Right>
    </Section>
  )
}

export default About