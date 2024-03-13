
import { createGlobalStyle } from "styled-components"
export const GlobalStyle = createGlobalStyle`
    *{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        line-height: 150%;
        list-style: none;
    }
    body{
        max-width: 100vw;
        min-height: 100vh;
        justify-content: center;
        font-family: 'Nunito', sans-serif;
    }
    :root {
        --color-color-primary: #fd377e;
        --color-color-primary-2: #e34981;
        --color-color-secondary: #03b898;
        --color-grey-4: #212529;
        --color-grey-3: #343a40;
        --color-grey-2: #e9ecef;
        --color-grey-1: #f8f9fa;
    }
    .button-text-form{
        font-family: 'Inter';
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 19px;
        color: #FFFFFF;
    }
    .text-style-title-1 {
        font-size: 38px;
        font-family: "Nunito";
        font-weight: 800;
        font-style: normal;
        line-height: 48px;
        text-decoration: none;
        text-transform: none;
    }
    .text-style-title-2 {
        font-size: 22px;
        font-family: "Nunito";
        font-weight: 700;
        font-style: normal;
        line-height: 34px;
        text-decoration: none;
        text-transform: none;
    }
    .text-style-title-3 {
        font-size: 16px;
        font-family: "Nunito";
        font-weight: 700;
        font-style: normal;
        line-height: 30px;
        text-decoration: none;
        text-transform: none;
    }
    .text-color-style-title-3 {
        font-size: 16px;
        font-family: "Nunito";
        font-weight: 700;
        font-style: normal;
        line-height: 30px;
        color: var(--color-color-primary);
        text-decoration: none;
        text-transform: none;
    }
    .text-style-title-4 {
        font-size: 12px;
        font-family: "Nunito";
        font-weight: 600;
        font-style: normal;
        line-height: 26px;
        text-decoration: none;
        text-transform: none;
    }
    .text-style-headline {
        font-size: 16px;
        font-family: "Nunito";
        font-weight: 400;
        font-style: normal;
        line-height: 26px;
        text-decoration: none;
        text-transform: none;
    }
    
    .text-style-body {
        font-size: 12px;
        font-family: "Nunito";
        font-weight: 400;
        font-style: normal;
        line-height: 22px;
        text-decoration: none;
        text-transform: none;
    }
    .text-delete-button{
        font-family: 'Nunito';
        font-style: normal;
        font-weight: 400;
        font-size: 10px;
        line-height: 14px;
    }
    .text-style-caption {
        font-size: 8px;
        font-family: "Nunito";
        font-weight: 400;
        font-style: normal;
        line-height: 18px;
        text-decoration: none;
        text-transform: none;
    }
    .text-style-caption-bold {
        font-size: 8px;
        font-family: "Nunito";
        font-weight: 700;
        font-style: normal;
        line-height: 18px;
        text-decoration: none;
        text-transform: none;
    }
    .text-help{
        font-family: 'Inter';
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        line-height: 20px;
    }
    .containerForm{
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 30px;
        width: 100%;
        height: 100%;
    }
    .containerValue{
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
    .containerDescription{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
    }

    .conatainerSelect{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
    }

    .selectText{
        font-family: 'Inter';
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        line-height: 26px;
    }
    .Valuediv{
        width: 355px;
        height: 96px;
        padding: 20px;
        border: 1px solid var(--color-grey-2);
        flex-direction: column;
    }
    main{
        display: flex;
        justify-content: center;
        flex-direction: column;
        margin-top: 20px;
        gap: 20px;
        padding-left: clamp(20px , 10vw, 100px);
        padding-right: clamp(20px , 10vw, 100px);
        @media (min-width: 769px){
            display:flex;
            flex-direction: row;
            gap: 20px;
            justify-content: space-between;
        }
        @media (max-width: 768px){
            padding-left: clamp(20px , 1.25rem, 100px);
            padding-right: clamp(20px , 1.25rem, 100px);
        }
        @media (min-width: 1440px){
            padding-left: clamp(20px , 30vw, 350px);
            padding-right: clamp(20px , 30vw, 350px);
        }
    }

    .leftContainer{
        display: flex;
        flex-direction: column;
        gap: 20px; 
        width: 355px;
        height:fit-content;
    }

    #root{
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        box-sizing: border-box;
        gap: 20px;
    }

   
`