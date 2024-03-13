import styled, { css } from "styled-components"

export const CardContainer = styled.li`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 10px;
    width: 100%;
    height: 87px;
    border: 1px solid var(--color-grey-1);
    border-radius: 10px;
    background: var(--color-grey-1);
    :hover{
        background: #ffffff;
        filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    }
    @media (max-width: 600px){
        height: 156px;
    }
    @media (min-width: 768px){
        justify-content: space-between;

    }
    @media (max-width: 768px){
        flex-direction: column;
    }
    ${({type}) => {
        if (type === "Entrada"){
            return css `
            border-left: 5px solid var(--color-color-secondary);
            `
        } else {
            return css`
            border-left: 5px solid var(--color-grey-2);
            `
        }
    }}
    .TypeTitle{
        display: flex;
        align-items: flex-start;
        flex-direction: column;
    }
    .ValueButton{
        display: flex;
        align-items: flex-start;
        flex-direction: column;
        gap: 10px;
    }
    
` 

export const ButtonCardDelete = styled.button`
    width: 48px;
    height: 19px;
    color: #ffffff;
    border: 1px solid var(--color-grey-2);
    background: var(--color-grey-4);
    :hover{
        background: var(--color-grey-2);
        color: var(--color-grey-4);
    }
`