import styled from "styled-components";

export const CardWrapper = styled.div`
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

export const Container = styled.div`
  height: 300px;
  width: 580px;
  justify-content: space-between;
  background-color: black;
  display: flex;
  padding: 0.5rem;
  border-radius: 20px 5px 5px 20px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.5), 0 0px 25px rgba(0, 0, 0, 0.5);

 
`;

export const LeftContent = styled.div`
  flex: 1;
  color: white;
  padding: 1rem;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    width: 10px;
  }
  ::-webkit-scrollbar-track {
    background: black;
  }
  ::-webkit-scrollbar-thumb {
    background: purple;
    border-radius: 20px;
    width: 5px;
  }
  p {
    word-wrap: break-word;
    font-size: 1.1rem;
    text-align: center;
  }
  @media(max-width:768px){
      display: block;
  }
`;

export const RightContent = styled.div`
  width: 40%;
`;

export const Image = styled.img`
  object-fit: contain;

  width: 100%;
  height: 100%;
  :hover {
    transform: translateX(10px) translateY(-10px);
    transition-duration: 1000ms;

    cursor: pointer;
  }

 
`;

export const Button = styled.button`
    width: 50%;
    height: 30px;
    text-align: center;
    background-color: purple;
    color: white;
    border: none;
    

    :hover{
      transition-duration: 900ms;
      cursor: pointer;
      opacity: 0.7;
    }
    
`;