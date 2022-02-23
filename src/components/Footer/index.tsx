import React from 'react'
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'
import {
    FooterContainer, 
    FooterWrap,
    FooterLinksContainer,
    FooterLinksWrap,
    FooterLinksItems,
    FooterLinksTitle,
    FooterLink,
    SocialMedia,
    SocialMediaWrap,
    SocialLogo,
    SocialIcons,
    SocialLink,
    AppRights
} from './style'

const Footer = () => {
  return (
    <FooterContainer>
        <FooterWrap>
            {/* <FooterLinksContainer>
                <FooterLinksWrap>
                    <FooterLinksItems>
                        <FooterLinksTitle>Minhas Redes</FooterLinksTitle>
                        <FooterLink to="">Linkedin</FooterLink>
                        <FooterLink to="">Github</FooterLink>
                        <FooterLink to="">Instagram</FooterLink>
                    </FooterLinksItems>
                </FooterLinksWrap>
            </FooterLinksContainer> */}
            <SocialMedia>
                <SocialMediaWrap>
                    <SocialIcons>
                        <SocialLink href="https://www.linkedin.com/in/leonardo-m-pereira" target="_blank" aria-label="Linkedin"><FaLinkedin></FaLinkedin></SocialLink>
                        <SocialLink href="https://wwww.github.com/leokito" target="_blank" aria-label="Github"><FaGithub></FaGithub></SocialLink>
                        <SocialLink href="" target="_blank" aria-label="Instgram"><FaInstagram/></SocialLink>
                    </SocialIcons>
                </SocialMediaWrap>
            </SocialMedia>
                    <SocialLogo 
                        to='home'
                        smooth={true}
                        duration={500}
                        spy={true}
                        offset={-80}
                    >{"<Leo/Dev>"}</SocialLogo>
                    <AppRights>Construido por Leonardo Pereira - 2022 - Todos os direitos reservados</AppRights>
        </FooterWrap>
    </FooterContainer>
  )
}

export default Footer