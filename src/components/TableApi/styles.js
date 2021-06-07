import styled from 'styled-components';


export const CardContainer = styled.div`
    width: 100%;
    justify-content: space-between;
    height: 200px;
    display: flex;
    margin-top: 5rem;
    
    
`;
export const Card = styled.div`
    justify-content: space-between;
    text-align: center;
    width: 500px;
    height: 250px;
    color: white;
    
   
`;

export const CardImg = styled.img`
padding: 0.2rem;
object-fit: cover;
box-shadow: 0 0 20px rgba(0, 0, 0, 0.5), 0 0px 25px rgba(0, 0, 0, 1);
margin: 0.2rem;
width: 90%;
height: 90%;
border-radius: 10px;
:hover{
      transition-duration: 900ms;
      background-color: purple;
      cursor: pointer;
      opacity: 0.8;
    }
`;

export const CardText = styled.p`
    color: black;
    font-size: 2rem;
    margin: auto;
   
    
`;


