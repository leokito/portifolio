import styled from "styled-components";

export const QualiContainer = styled.div`
    height: 800px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #010606;

    @media screen and (max-width: 768px) {
        height: 1100px;
    }

    @media screen and (max-width: 480px) {
        height: 1300px;
    }
`
export const QualiWrap = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 16px;
    padding: 0 50px;

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
        padding: 0 20px;
    }
`
export const QualiCard = styled.div`
    background: #dcdcdc;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    border-radius: 10px;
    max-height: 350px;
    width: 300px;
    padding: 30px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.2);
    transition: all 0.2s ease-in-out;

    &:hover {
        transform: scale(1.02);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
    }
`
export const QualiIcon = styled.img`
    height: 160px;
    width: 160px;
    margin-bottom: 10px;
`

export const QualiH1 = styled.h1`
    font-size: 2.5rem;
    color: red;
    margin-bottom: 64px;

    @media screen and (max-width: 400px) {
        font-size: 2rem;
    }
`

export const QualiH2 = styled.h2`
    font-size: 1.3rem;
    margin-bottom: 10px;
`

export const QualiList = styled.ul`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    list-style: none;
    padding: 0;
`

export const BtnWrap = styled.div`
    text-align: center;
    margin-top: 50px;
`

export const QualiItem = styled.div`
    font-size: 1rem;
    text-align: center;
`