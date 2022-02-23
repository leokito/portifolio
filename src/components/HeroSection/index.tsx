import React, {useState} from 'react'
import video from '../../assets/videos/video.mp4'
import {HeroContainer, HeroBackground, BackgroundVideo, HeroContent, HeroH1, HeroP, HeroBtnWrap, ArrowForward, ArrowRight} from './style'
import { Button } from '../Button/ButtonElements'

const HeroSection = () => {

  const [hover, setHover] = useState(false)

  const onHover = () => {
    setHover(!hover)
  };
  
  return (
    <HeroContainer 
    id='home'
    >
        <HeroBackground>
            <BackgroundVideo 
            autoPlay loop muted src={video}
            />
        </HeroBackground>
        <HeroContent>
          <HeroH1>Lorem Ipsum Dolor sit Amet</HeroH1>
          <HeroP>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore 
            et dolore magna aliqua.
          </HeroP>
          <HeroBtnWrap>
            <Button 
            to='about'
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
              Sobre mim {hover ? <ArrowForward/> : <ArrowRight />}
            </Button>
          </HeroBtnWrap>
        </HeroContent>
    </HeroContainer>
  )
}

export default HeroSection