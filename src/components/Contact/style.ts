import styled from "styled-components";
import { MdClose } from "react-icons/md";

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
`;
export const ContactBackground = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
`;
export const BackgroundVideo = styled.video`
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    background: #232a34;
`;
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
/* 
    @media screen and (max-width: 1366px) {
        width: 350px;
        height: 400px;
    } */
`;
export const ContactFormWrap = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 75%;
`;
export const ContactTitle = styled.h1`
    margin-bottom: 20px;
    text-align: center;
    color: #b22222;
`;
export const ContactForm = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-content: space-evenly;
    align-items: space-evenly;
    width: 100%;
`;
export const Input = styled.input`
    border-radius: 25px;
    background: #dcdcdc;
    margin-top: 10px;
    margin-bottom: 10px;
    height: 28px;
    padding: 5px;
`;
export const TextInput = styled.textarea`
    border-radius: 10px;
    padding: 5px;
    margin-top: 10px;
    background: #dcdcdc;
`;
export const SubmitInput = styled.input`
    border: none;
    border-radius: 50px;
    background: #b22222;
    padding: 14px 48px;
    margin-top:15px;
    width: 50%;
    align-self: center;
    font-size: 16px;
    font-weight: 600;
    color: #fff;
    transition: all 0.3s ease-in-out;
    
    &:hover {
        background: #dcdcdc;
        color: #060606;
        transition: all 0.3s ease-in-out;
    }
`;
export const ModalBackground = styled.div`
    width: 100%;
    height: 100%;
    background: rgba(0,0,0, 0.8);
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 5;
`;
export const ModalTitle = styled.h1`
    font-size: 1.2rem;
    text-align: center;
`;
export const ModalContentWrap = styled.div`
    height: 65%;
    margin: 35px 0 35px 0;
    width: 90%;
    display: flex;
    justify-content: center;
    position: relative;
`;
export const ModalWrap = styled.div`
    width: 300px;
    height: 200px;
    box-shadow: 0 5px 16px rgba(0,0,0, 0.2);
    background: #dedede;
    color: #060606;
    position: absolute;
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 10;
    border-radius: 10px;
    transition: all 2s;
`;
export const ModalImg = styled.img`
    width: 100%;
    height: 90%;
    border-radius: 15px;;
    background: #000;
`;
export const ModalContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    line-height: 1.8;
    color: #141414;
`;
export const ModalProjectDesc = styled.div`
    display: flex;
`;
export const ModalTech = styled.p`
    font-size: 16px;
    font-weight: bold;
`;
export const TechCardWrap = styled.div`
    display: flex;
`;
export const TechCard = styled.div`
    border-radius: 5px;
    margin: 5px;
    background: #dedede;
    padding: 8px 15px 8px 15px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    transition: 0.4s all ease-in-out;

    &:hover {
        cursor: pointer;
        transform: scale(1.1);
        transition: 0.4s all ease-in-out;
    }
`;
export const ModalDesc = styled.p`
    margin-bottom: 1rem;
    text-align: center;
`;
export const ModalBtnWrap = styled.div`
    display: flex;
    width: 20%;
    justify-content: space-around;
`;
export const ModalBtn = styled.a`
        border-radius: 50px;
        padding: 14px 32px;
        background: #141414;
        color: #fff;
        border: none;
        transition: 0.4s all ease-in-out;
        text-decoration: none;

        &:hover {
            color: #000;
            background: #dedede;
            box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
            transition: 0.4s all ease-in-out;
            cursor: pointer;
        }
`;
export const CloseModalButton = styled(MdClose)`
    cursor: pointer;
    position: absolute;
    top: 20px;
    right: 20px;
    width: 32px;
    height: 32px;
    padding: 0;
    z-index: 25;
    transition: all 0.5s ease-in-out;

    &:hover {
        transform: rotateZ(360deg);
    }
`;