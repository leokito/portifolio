import React, {useState} from 'react';
import {ProjectContainer, ProjectWrap, ProjectCard, ProjectTitle, ProjectName, ProjectDesc, BtnWrap, ArrowKeyboardTop, ArrowTop} from './style'
import { Button } from '../Button/ButtonElements';


const Projects = () => {

  const [hover, setHover] = useState(false)

  const onHover = () => {
    setHover(!hover)
  };
  
  return (
    <ProjectContainer id="projects">
        <ProjectTitle>Projetos</ProjectTitle>
        <ProjectWrap>
            <ProjectCard>
                <ProjectName>Habitflow</ProjectName>
                <ProjectDesc>Aplicação para gestão de hábitos, criação de grupos de atividades. Projeto construído em ReactJS</ProjectDesc>
            </ProjectCard>
            <ProjectCard>
                <ProjectName>Projeto 2</ProjectName>
                <ProjectDesc>Lorem Ipsum dolor sit amet consecuteur.</ProjectDesc>
            </ProjectCard>
            <ProjectCard>
            <ProjectName>Projeto 3</ProjectName>
                <ProjectDesc>Lorem Ipsum dolor sit amet consecuteur.</ProjectDesc>
            </ProjectCard>
        </ProjectWrap>
        <BtnWrap>
        <Button 
          to='home'
          big={true}
          dark={true}
          primary={true}
          bigFont={true}
          smooth={true}
          duration={500}
          spy={true}
          offset={-80}
          onMouseEnter={onHover}
          onMouseLeave={onHover}
          >
          Home {hover ? <ArrowKeyboardTop/> : <ArrowTop />}
          </Button>
        </BtnWrap>
    </ProjectContainer>
  )
}

export default Projects