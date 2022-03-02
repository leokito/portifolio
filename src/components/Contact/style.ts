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
export const ContactFormContainer = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    border-radius: 8px;
    background: #060606;
    width: 500px;
    height: 620px;
    z-index: 2;
    box-shadow: rgba(255, 255, 255, 0.1) 0px 1px 0px, rgba(255, 255, 255, 0.2) 0px 8px 24px, rgba(255, 255, 255, 0.1) 0px 16px 48px;
`
export const ContactFormWrap = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 75%;
`
export const ContactTitle = styled.h1`
    margin-bottom: 20px;
    text-align: center;
    color: #b22222;
`
export const ContactForm = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-content: space-evenly;
    align-items: space-evenly;
    width: 100%;
`
export const Input = styled.input`
    border-radius: 25px;
    background: #dcdcdc;
    margin-top: 10px;
    margin-bottom: 10px;
    height: 28px;
    padding: 5px;
`
export const TextInput = styled.textarea`
    border-radius: 10px;
    padding: 5px;
    margin-top: 10px;
    background: #dcdcdc;
`
export const SubmitInput = styled.input`
    border: none;
    border-radius: 50px;
    background: #b22222;
    padding: 14px 48px;
    font-size: 16px;
    font-weight: 600;
    color: #fff;
    transition: all 0.3s ease-in-out;
    
    &:hover {
        background: #dcdcdc;
        color: #060606;
        transition: all 0.3s ease-in-out;
    }
`