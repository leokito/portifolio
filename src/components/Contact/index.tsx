import React from 'react'
import {ContactContainer, ContactFormWrap, ContactTitle, ContactForm, Input, TextInput, SubmitInput, ContactBackground, BackgroundVideo, ContactFormContainer} from './style'
import video from '../../assets/videos/video.mp4'

const Contact = () => {
  return (
    <ContactContainer id='contact'>
        <ContactBackground>
            <BackgroundVideo 
            autoPlay loop muted src={video}
            />
        </ContactBackground>
        <ContactFormContainer>
        <ContactTitle>Contato</ContactTitle>
        <ContactFormWrap>
            <ContactForm id='contactForm'>
                <Input type='text' placeholder='Nome' required/>
                <Input type='email' placeholder='Email' required/>
                <Input type='tel' pattern='[1-9]{2} [0-9]{5}-[0-9]{4}' placeholder='Telefone'/>
                <TextInput form='contactForm' rows={15} placeholder='Escreva sua mensagem.'/>
            </ContactForm>
        </ContactFormWrap>
                <SubmitInput type='submit' value='Enviar' />
        </ContactFormContainer>
    </ContactContainer>
  )
}

export default Contact