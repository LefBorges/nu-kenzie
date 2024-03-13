import styled from "styled-components"

export const Headerstyle = styled.header`
    display: flex;
    align-items: center;
    padding: 10px;
    background: var(--color-grey-1);
    width: 100%;
    height:  88px;
    flex-direction: row;
    padding-left: clamp(20px , 10vw, 100px);
    padding-right: clamp(20px , 10vw, 100px);
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    @media (max-width: 768px) {
        padding-left: clamp(20px , 1.25rem, 100px);
        padding-right: clamp(20px , 1.25rem, 100px);
    }
    @media (min-width: 1440px){
        padding-left: clamp(20px , 30vw, 350px);
        padding-right: clamp(20px , 30vw, 350px);
    }
`
