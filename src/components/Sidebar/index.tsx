import React from 'react'
import { SidebarContainer, Icon, CloseIcon, SideBtnWrp, SidebarLink, SidebarWrap, SidebarMenu, SidebarBtn } from './style'

const Sidebar = ({isOpen, toggle}: any) => {
  return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon >
                <CloseIcon/>
            </Icon>
            <SidebarWrap>
                <SidebarMenu>
                    <SidebarLink to="projects" onClick={toggle}>Projetos</SidebarLink>
                    <SidebarLink to="qualifications" onClick={toggle}>Qualificações</SidebarLink>
                    <SidebarLink to="technologies" onClick={toggle}>Tecnologias</SidebarLink>
                    <SidebarLink to="about" onClick={toggle}>Sobre</SidebarLink>
                </SidebarMenu>
                <SideBtnWrp>
                    <SidebarBtn to="/contact">Contato</SidebarBtn>
                </SideBtnWrp>
            </SidebarWrap>
        </SidebarContainer>
  )
}

export default Sidebar