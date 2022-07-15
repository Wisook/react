import React from 'react'
import styled from 'styled-components'
import Banner from './Banner'
import Logo from './Logo'
import Facebook from '../Icons/Facebook'

const Section = styled.section`
min-height: 80vh;
width: 100vw;
background-color: ${props => props.theme.body};
position: relative;
color: ${props => props.theme.text};

display: flex;
flex-direction: column;
`
const Container = styled.div`
width: 75%;
margin: 2rem auto;
display: flex;
justify-content: space-between;
align-items: center;

border-bottom: 1px solid ${(props) => props.theme.text};
`
const Left = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`
const IconList = styled.div`
display:flex;
align-items: center;
margin: 0 auto;

&>*{
padding-right: 0.5rem;
transform: all 0.2s ease;
padding-top: 1rem;

&:hover{
  transform: scale(1.2);
  }
}
`
const MenuItems = styled.ul`
list-style:none;
width: 50%;
display: grid;
grid-template-columns: repeat(2, 1fr);
grid-template-rows: repeat(3, 1fr);
grid-gap: 1rem;
`

const Item = styled.li`
cursor: pointer;
width: fit-content;

&::after{
  content: ' ';
  display: block;
  width: 0%;
  height: 2px;
  background: ${props => props.theme.text};
  transition: width 0.3s ease;

}
&:hover: :after{
  width: 100%;
}
`
const Bottom = styled.div`
width: 75%;
margin: 0 auto;
display: flex;
justify-content: space-between;
align-items: center;

a{
  text-decoration:underline;
}
`

const Footer = () => {
  return (
    <Section>
      <Banner />
      <Container>
      <Left>
        <Logo />
        <IconList>
          <a href="http://facebook.com" target='_blank'
          rel="noopener noreferrer"
          >
            <Facebook />
            </a>
            <a href="http://facebook.com" target='_blank'
          rel="noopener noreferrer"
          >
            <Facebook />
            </a>
            <a href="http://facebook.com" target='_blank'
          rel="noopener noreferrer"
          >
            <Facebook />
            </a>
        </IconList>
      </Left>
      <MenuItems>
      <Item>Home</Item>
      <Item>About</Item>
      <Item>Roadmap</Item>

      <Item>Showcase</Item>
      <Item>Team</Item>
      <Item>Faq</Item>
      </MenuItems>
      </Container>
      <Bottom>
        <span>
        &copy; {new Date().getFullYear()} Meta Treasaury. All rights reserved.
        </span>

      </Bottom>
    </Section>
  )
}

export default Footer