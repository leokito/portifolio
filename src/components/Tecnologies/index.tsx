import React, {useState} from 'react';
import {
    TechContainer,
    TechH1, 
    TechWrap, 
    TechCard, 
    TechIcon, 
    TechH2, 
    TechList, 
    TechItem, 
    BtnWrap
} from './style';
import { ArrowForward, ArrowRight } from '../HeroSection/style';
import Icon1 from '../../assets/images/frontend.svg';
import Icon2 from '../../assets/images/backend.svg';
import { Button } from '../Button/ButtonElements';

const Tecnologies = () => {

    const [hover, setHover] = useState(false)

    const onHover = () => {
      setHover(!hover)
    };
  return (
    <TechContainer id='tecnologies'>
        <TechH1>Tecnologias</TechH1>
        <TechWrap>
            <TechCard>
                <TechIcon src={Icon1}/>
                <TechH2>Front-End</TechH2>
                <TechList>
                    <TechItem>HTML5</TechItem>
                    <TechItem>CSS3</TechItem>
                    <TechItem>Javascript</TechItem>
                    <TechItem>ReactJS</TechItem>
                    <TechItem>Typescript</TechItem>
                </TechList>
            </TechCard>
            <TechCard>
                <TechIcon src={Icon2}/>
                <TechH2>Back-End</TechH2>
                <TechList>
                <TechItem>Python</TechItem>
                <TechItem>Flask / FastAPI</TechItem>
                <TechItem>Django</TechItem>
                <TechItem>NodeJS</TechItem>
                <TechItem>ExpressJS</TechItem>
                <TechItem>PostgreSQL</TechItem>
                </TechList>
            </TechCard>
        </TechWrap>
        <BtnWrap>
            <Button 
                to='qualifications'
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
                >Qualificações {hover ? <ArrowForward/> : <ArrowRight />}
            </Button>
        </BtnWrap>
    </TechContainer>
  )
}

export default Tecnologies