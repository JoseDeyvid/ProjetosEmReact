import styled from "styled-components";


export const Container = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #dde;
    border-radius: 6px;
    margin-top: 1.5rem;
    padding: 1rem;
    gap: .5rem;

    h3 {
        font-size: 17px;
    }

    div {
        background-color: #fff;
        width: 100%;
        border-radius: 5px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding-right: .5rem;

        img {
            width: 60px;
            height: 60px;   
        }
    }
`
