import React from 'react'
import video from '../../assets/videos/video.mp4'
import {HeroContainer, HeroBackground, BackgroundVideo, HeroContent, HeroH1, HeroP} from './style'

const HeroSection = () => {
  return (
    <HeroContainer>
        <HeroBackground>
            <BackgroundVideo 
            autoPlay loop muted src={video}
            />
        </HeroBackground>
        <HeroContent>
          <HeroH1>Hello World</HeroH1>
          <HeroP>Bem vindo ao meu portifólio</HeroP>
        </HeroContent>
    </HeroContainer>
  )
}

export default HeroSection