import React from 'react'
import styled from 'styled-components'
import Carousel from '../Carousel'
import Button from '../Button'
import {dark} from '../../styles/Themes';
import { ThemeProvider } from 'styled-components';

const Section = styled.section`
min-height: 100vh;
width: 100%;
background-color: ${props => props.theme.text};
display: flex;
justify-content: center;
align-items: center;
position: relative;
`

const Container = styled.div`
width: 75%;
margin: 0 auto;
/* background-color */
display: flex;
justify-content: center;
align-items: center;
`
const Box = styled.div`
width: 50%;
height: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`
const Title = styled.h2`
font-size: ${props => props.theme.fontxxl};
text-transform: capitalize;
width: 80%;
color: ${props => props.theme.body };
align-self: flex-start;
margin: 0 auto;
`
const SubText = styled.p`
font-size: ${props => props.theme.fontlg};
width: 80%;
color: ${props => props.theme.body };
align-self: flex-start;
margin: 1rem auto;
font-weight:400;
`
const SubTextLight = styled.p`
font-size: ${(props) => props.theme.fontsm};
width: 80%;
color: ${(props) => `rgba(${props.theme.bodyRgba},0.6)`};
align-self: flex-start;
margin: 1rem auto;
font-weight:400;
`
const ButtonContainer = styled.div`
width: 80%;
margin: 1rem auto;
align-self: flex-start;

`
const About = () => {
  return (
    <Section>
      <Container>
      <Box> <Carousel /> </Box> 
      <Box>
        <Title>
          Welcome To Meta Treasury
        </Title>
        <SubText>
          Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum 
        </SubText>
        <SubTextLight>
        Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
        </SubTextLight>
        <ButtonContainer>
        <ThemeProvider theme={dark}>
        <Button text="Join our Telegram" link="#" />
        </ThemeProvider>
        </ButtonContainer>
         </Box> 
      </Container>
      </Section>
  )
}

export default About