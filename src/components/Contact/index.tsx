import React from 'react'
import {ContactContainer, ContactFormWrap, ContactForm, NameInput, MailInput, PhoneInput, TextInput, SubmitInput, ContactBackground, BackgroundVideo} from './style'
import video from '../../assets/videos/video.mp4'

const Contact = () => {
  return (
    <ContactContainer>
        <ContactBackground>
            <BackgroundVideo 
            autoPlay loop muted src={video}
            />
        </ContactBackground>
        <ContactFormWrap>
            <ContactForm>
                <NameInput/>
                <MailInput />
                <PhoneInput />
                <TextInput />
            </ContactForm>
                <SubmitInput />
        </ContactFormWrap>
    </ContactContainer>
  )
}

export default Contact