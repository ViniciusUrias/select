import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 3rem;
    background-color: #9DC0BC;
    display: flex;
 
    
`;

export const Content = styled.div`
    width: 75%;
    margin: auto;
    justify-content:space-evenly;
    display: flex;

`;

export const Divider = styled.div`
    line-height: 1rem;
    border-right: 1px solid black;
    width: 15%;
    :last-child{
        border: none;
    }
    
`;

export const Text = styled.a`
    color: white;
    font-size: 2rem;
`;