import styled from "styled-components";

export const ContactContainer = styled.div`
   background: #0c0c0c;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    height: 872px;
    position: relative;
    z-index: 1;

    @media screen and (max-width: 1366px) {
        height: 680px;
    }
`
export const ContactBackground = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
`
export const BackgroundVideo = styled.video`
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    background: #232a34;
`

export const ContactFormWrap = styled.div``

export const ContactForm = styled.form``

export const NameInput = styled.input``

export const MailInput = styled.input``

export const PhoneInput = styled.input``

export const TextInput = styled.textarea``

export const SubmitInput = styled.input``