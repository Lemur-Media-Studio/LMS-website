import React from 'react';
import styled from 'styled-components';
import NeonText from '../Components/Neontext';
import ladrillos from '../assets/Images/ladrillos.jpg'

const Section = styled.section`
  min-height: 100vh;
  width: 100%;
  margin: 0 auto;
  background-image: url(${ladrillos});
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

@media (max-width: 48em){
  width: 90vw;
} 
`;

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  @media (max-width: 64em){
    justify-content: center;
}
`;

const Banner = styled.h1`
  font-size: ${(props) => props.theme.fontfs};  
  white-space: nowrap;
  text-transform: uppercase;
  line-height: 0;

@media (max-width: 70em){
    font-size: ${(props) => props.theme.fontxxl};
}
@media (max-width: 64em){
    margin: 1rem 0;
}
 
@media (max-width: 48em){
    font-size: ${(props) => props.theme.fontxl};
    margin: 0.5rem 0;

}
@media (max-width: 30em){
    font-size: ${(props) => props.theme.fontlg};
}

  span {
    display: block;
    background-color: transparent;
    padding: 1rem 2rem 0rem 2rem;    
  }
`;

const Marquee = () => {
  return (
    <Section>
      <Container id="direction">
        <Banner>
          <span
            data-scroll
            data-scroll-direction="horizontal"
            data-scroll-speed="8"
            data-scroll-target="#direction"
          >
            <NeonText type="neon-banner neon-wrapper neon-animation neon-color1" text="lemur media studio" data="lemur media studio" />
          </span>
        </Banner>
        <Banner data-scroll data-scroll-speed="-2" data-scroll-target="#direction">
          <span
            data-scroll
            data-scroll-direction="horizontal"
            data-scroll-speed="-6"
            data-scroll-target="#direction"
          >
            <NeonText type="neon-banner neon-wrapper neon-color2" text="Design your page" data="Design your page" />
          </span>
        </Banner>
        <Banner>
          <span
            data-scroll
            data-scroll-direction="horizontal"
            data-scroll-speed="6"
            data-scroll-target="#direction"
          >
            <NeonText type="neon-banner neon-wrapper neon-color3" text="Modernize your website" data="Modernize your website" />
          </span>
        </Banner>
        <Banner>
          <span
            data-scroll
            data-scroll-direction="horizontal"
            data-scroll-speed="-4"
            data-scroll-target="#direction"
          >
            <NeonText type="neon-banner neon-wrapper neon-animation neon-color2" text="Develop App" data="Develop App" />
          </span>
        </Banner>
        <Banner data-scroll data-scroll-speed="6" data-scroll-target="#direction">
          <span
            data-scroll
            data-scroll-direction="horizontal"
            data-scroll-speed="6"
            data-scroll-target="#direction"
          >
            <NeonText type="neon-banner neon-wrapper neon-color1" text="Develop a new page" data="Develop a new page" />
          </span>
        </Banner>
      </Container>
    </Section>
  );
};

export default Marquee;