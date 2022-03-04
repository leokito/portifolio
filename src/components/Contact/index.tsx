import React, {useState} from 'react'
import {ContactContainer, ContactFormWrap, ContactTitle, ContactForm, Input, TextInput, SubmitInput, ContactBackground, BackgroundVideo, ContactFormContainer, ModalBackground, ModalWrap, CloseModalButton, ModalTitle, ModalContentWrap, ModalImg, ModalContent, ModalDesc, ModalTech, TechCardWrap, ModalBtnWrap, ModalBtn} from './style'
import video from '../../assets/videos/video.mp4';
import { ToastContainer, toast } from 'react-toastify';
import emailjs from 'emailjs-com'
import { Toaster } from 'react-hot-toast';

const Contact = () => {

  const [showModal, setShowModal] = useState(false);

  const turnModal = () => {
      setShowModal(!showModal)
  };

  const sendMail = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      console.log('ativou')
      emailjs.sendForm('service_ebsjo5h', 'template_uqz098c', e.currentTarget, 'gNQRDX8e6Nh53fKV7')
      .then(res => {
        console.log("test");
        turnModal()
      });
  };

  return (
    <>
  <Toaster />
    <ContactContainer id='contact'>
        <ContactBackground>
            <BackgroundVideo 
            autoPlay loop muted src={video}
            />
        </ContactBackground>
        <ContactFormContainer>
        <ContactTitle>Contato</ContactTitle>
        <ContactFormWrap>
            <ContactForm method="GET" id='contactForm' onSubmit={sendMail}>
                <Input type='text' name='nome' placeholder='Nome' required/>
                <Input type='email' name='email' placeholder='Email' required/>
                <Input type='tel' name='fone' pattern='[1-9]{2} [0-9]{5}-[0-9]{4}' placeholder='Telefone'/>
                <TextInput name='mensagem' form='contactForm' rows={15} placeholder='Escreva sua mensagem.'/>
                <SubmitInput type='submit' value='Enviar' />
            </ContactForm>
        </ContactFormWrap>
        </ContactFormContainer>
        { showModal ? (
          <ModalBackground>
            <ModalWrap>
            <CloseModalButton aria-label='Close Modal'
            onClick={() => turnModal()}
            />
            <ModalTitle>Email enviado com sucesso!</ModalTitle>
            {/* <ModalContentWrap>
            <ModalContent>
                <ModalDesc>Email enviado com sucesso!</ModalDesc>
            </ModalContent>
            </ModalContentWrap> */}
                <ModalBtnWrap>
                  {/* <ModalBtn href={project.projectRepo} target="_blank">Repositório</ModalBtn> */}
                </ModalBtnWrap>
            </ModalWrap>
        </ModalBackground>
    ): null
    }
    </ContactContainer>
    </>
  )
}

export default Contact