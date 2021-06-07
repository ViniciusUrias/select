import styled from 'styled-components';

export const Container = styled.div`
    width: 75%;
    height: 3rem;
    margin: 0 auto;
    background-color: purple;
    display: flex;
 
    
`;

export const Content = styled.div`
    width: 100%;
    margin: auto;
    justify-content:space-around;
    display: flex;

`;

export const Divider = styled.div`
    line-height: 1rem;
    border-right: 2px solid black;
    width: 15%;
    :last-child{
        border: none;
       
    }
    
`;

export const Text = styled.a`
    color: white;
    font-size: 2rem;
`;