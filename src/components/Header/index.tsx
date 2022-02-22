import React from 'react'
import { Nav, HeaderLogo, HeaderContainer, MobileIcon, NavMenu, NavLinks, NavButton, NavBtnLink } from './style'
import {FaBars} from 'react-icons/fa'

const Header = ({toggle}: any) => {
  return (
  <>
  <Nav>
      <HeaderContainer>
        <HeaderLogo to='home'
            smooth={true}
            duration={500}
            spy={true}
            offset={-80}
        >
            {"<Leo/Dev>"}
        </HeaderLogo>
        <MobileIcon onClick={toggle}>
          <FaBars />
        </MobileIcon>
        <NavMenu>
            <NavLinks to="about"
                smooth={true}
                duration={500}
                spy={true}
                offset={-80}
            >Sobre</NavLinks>
        </NavMenu>
        <NavMenu>
            <NavLinks to="tecnologies"
                smooth={true}
                duration={500}
                spy={true}
                offset={-80}
            >Tecnologias</NavLinks>
        </NavMenu>
        <NavMenu>
            <NavLinks to="qualifications"
                smooth={true}
                duration={500}
                spy={true}
                offset={-80}
            >Qualificações</NavLinks>
        </NavMenu>
        <NavMenu>
            <NavLinks to="projects"
                smooth={true}
                duration={500}
                spy={true}
                offset={-80}
            >Projetos</NavLinks>
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