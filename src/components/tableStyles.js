import styled from "styled-components";

export const Styles = styled.div`
padding: 1rem;
background-color: white;


table {
  border-spacing: 0;
  border: 1px solid black;
text-align: center;
width: 100%;
color: gray;

  tr {
    :last-child {
      td {
        border-bottom: 0;
      }
    }
  }

  th {
    margin: 0;
    padding: 0.5rem;
    border-bottom: 1px solid black;
    
    background-color: black;
    color: white;

    :last-child {
      border-right: none;
    }
  }
  }
  td {
    margin: 0;
    padding: 0.5rem;
    border-bottom: 1px solid black;
    border-right: 1px solid black;
    

    
  }

  
`;
