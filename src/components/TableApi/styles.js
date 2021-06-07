import styled from 'styled-components';


export const CardContainer = styled.div`
    width: 100%;
    justify-content: space-evenly;
    height: auto;
    border: 1px solid red;
    display: flex;
    margin-top: 2rem;
    
`;
export const Card = styled.div`
    display: block;
    justify-content: space-between;
    
    text-align: center;
    width: 400px;
    height: auto;
    background-color: whitesmoke;
    box-shadow: 0 0 20px rgba(0, 0, 0, .05), 0 0px 40px rgba(0, 0, 0, .08);
    color: white;
`;

export const CardImg = styled.img`
padding: 0.4rem;
object-fit: cover;
box-shadow: 0 0 20px rgba(0, 0, 0, 0.5), 0 0px 4px rgba(0, 0, 0, 1);

width: 70%;
`;

export const CardText = styled.p`
    color: black;
    font-size: 2rem;
    margin: auto;
    
`;
