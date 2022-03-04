import {useState} from 'react';
import {
  ProjectContainer, ProjectWrap, ProjectCard, ProjectTitle, ProjectName, ProjectDesc, 
  BtnWrap,
  ModalBackground, ModalWrap, ModalContent, CloseModalButton, 
  ModalImg, ModalDesc, ModalBtn, ModalBtnWrap, ModalTech, ModalTitle, 
  TechCard, TechCardWrap, ModalContentWrap
} from './style'
import { Button, ArrowDown, ArrowKeyboardDown } from '../Button/ButtonElements';
import { project1, projectbase, project2, project3 } from './ProjectInfo';

const Projects = () => {

  const [hover, setHover] = useState(false)
  const [project, setProject] = useState(projectbase)

  const onHover = () => {
    setHover(!hover)
  };

  const [showModal, setShowModal] = useState(false);

  const turnModal = () => {
      setShowModal(!showModal)
  };
  
  return (
    <ProjectContainer id="projects">
        <ProjectTitle>Projetos</ProjectTitle>
        <ProjectWrap>
            <ProjectCard img={project1.projectImg} onClick={()=> {
              setShowModal(true)
              setProject(project1)}}>
                <ProjectName >{project1.name}</ProjectName>
                <ProjectDesc>{project1.desc}</ProjectDesc>
            </ProjectCard>
            {/* <ProjectCard img={project2.projectImg} onClick={()=> {
              setShowModal(true)
              setProject(project2)
            }}>
                <ProjectName >Projeto 2</ProjectName>
                <ProjectDesc>Lorem Ipsum dolor sit amet consecuteur.</ProjectDesc>
            </ProjectCard>
            <ProjectCard img={project3.projectImg} onClick={()=> {
              setShowModal(true)
              setProject(project3)
            }}>
            <ProjectName>Projeto 3</ProjectName>
                <ProjectDesc>Lorem Ipsum dolor sit amet consecuteur.</ProjectDesc>
            </ProjectCard> */}
        </ProjectWrap>
        <BtnWrap>
        <Button 
          to='contact'
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
          Contato {hover ? <ArrowDown/> : <ArrowKeyboardDown/>}
          </Button>
        </BtnWrap>
        { showModal ? (
          <ModalBackground>
            <ModalWrap>
            <CloseModalButton aria-label='Close Modal'
            onClick={() => turnModal()}
            />
            <ModalTitle>{project.name}</ModalTitle>
            <ModalContentWrap>
            <ModalImg /> 
            <ModalContent>
                <ModalDesc>{project.desc}</ModalDesc>
                <ModalTech>Tecnologias Utilizadas:</ModalTech>
                <TechCardWrap>
                  {
                    project.techs.map(tech => {
                      return(
                      <TechCard>{tech}</TechCard>
                    )
                  })}
                </TechCardWrap>
            </ModalContent>
            </ModalContentWrap>
                <ModalBtnWrap>
                  <ModalBtn href={project.projectRepo} target="_blank">Repositório</ModalBtn>
                  <ModalBtn href={project.projectDeploy}target="_blank">Visitar</ModalBtn>
                </ModalBtnWrap>
            </ModalWrap>
        </ModalBackground>
    ): null
    }
    </ProjectContainer>
  )
}

export default Projects