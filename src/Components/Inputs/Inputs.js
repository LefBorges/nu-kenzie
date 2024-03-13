import styled from "styled-components"

export const InputDescription = styled.input`
    width: 314px;
    height: 52.8px;
    padding: 10px;
    background: var(--color-grey-1);
    border: 1px solid var(--color-grey-1);
    border-radius: 10px;
    :hover{
        border: 2px solid var(--color-grey-4);
        background: #ffffff;
    }
`

export const InputValue = styled.input`
    width: 314px;
    height: 52.8px;
    padding: 10px;
    background: var(--color-grey-1);
    border: 1px solid var(--color-grey-1);
    border-radius: 10px;
    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button{
        -webkit-appearance: none;
        margin: 0;
    }
    :hover{
        border: 2px solid var(--color-grey-4);
        background: #ffffff;
    }
`

export const SelectOption = styled.select `
  width: 313px;
  height: 48px;
  padding: 0px 16px;
  border: 1px solid var(--color-grey-1);
  border-radius: 10px;
  background: var(--color-grey-1);
  :hover{
        border: 2px solid var(--color-grey-4);
        background: #ffffff;
    }
`
export const OptionsSelect = styled.option`
    width: 100%;
    height: fit-content;
    background: var(--color-grey-1);
`

export const ButtonInvite = styled.button`
    width: 313px;
    height: 48px;
    border: 1px solid var(--color-color-primary);
    border-radius: 10px;
    padding: 0px 16px;
    background: var(--color-color-primary);
    :hover{
       background: var(--color-color-primary-2);
    }
`
