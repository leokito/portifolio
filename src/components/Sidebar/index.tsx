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
                    <SidebarLink to="projetos" onClick={toggle}>Projetos</SidebarLink>
                    <SidebarLink to="qualificacoes" onClick={toggle}>Qualificações</SidebarLink>
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