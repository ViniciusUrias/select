import styled from 'styled-components';

export const Container = styled.div`
    width: 75%;
    height: 4rem;
    margin: 0 auto;
    background-color: purple;
    display: flex;
    @media(min-width:260px )and (max-width:768px){
        width: 100%;
        flex-direction: column;
        height: 20rem;
        margin: 0 0;
        
        
    }
  
 
    
`;

export const Content = styled.div`
    width: 100%;
    margin: auto;
    justify-content:space-around;
    display: flex;
    align-items: center;
 
    @media(min-width:260px )and (max-width:768px){
        width: 100%;
        flex-direction: column;
        height: 500px;
        text-align: center;
        margin: none;
        padding: none;
        
    }

`;

export const Divider = styled.div`
    line-height: 1rem;
    border-right: 2px solid black;
    width: 15%;
    :last-child{
        border: none;
       
    }
     @media(max-width:768px){
        line-height: 1.3rem;
        border: none;
    }
    
`;

export const Text = styled.a`
    color: white;
    font-size: 2rem;
`;