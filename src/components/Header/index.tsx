import React from 'react'
import { Nav, HeaderLogo, HeaderContainer, MobileIcon, NavMenu, NavLinks, NavButton, NavBtnLink } from './style'
import {FaBars} from 'react-icons/fa'

const Header = () => {
  return (
  <>
  <Nav>
      <HeaderContainer>
        <HeaderLogo to="/">
            {"<Leo/Dev>"}
        </HeaderLogo>
        <MobileIcon>
          <FaBars />
        </MobileIcon>
        <NavMenu>
            <NavLinks to="projects">Projetos</NavLinks>
        </NavMenu>
        <NavMenu>
            <NavLinks to="qualifications">Qualificações</NavLinks>
        </NavMenu>
        <NavMenu>
            <NavLinks to="about">Sobre</NavLinks>
        </NavMenu>
        <NavButton>
            <NavBtnLink to="contact">Contato</NavBtnLink>
        </NavButton>
      </HeaderContainer>
  </Nav>
  </>
  )
}

export default Header;