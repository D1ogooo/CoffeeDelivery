import styled from 'styled-components'

export const Preco = styled.div`
margin-top: 1.8rem;
  h3 {
    color: ${({ theme }) => theme.cores.base_text};
    text-align: right;
    font-family: 'Roboto';
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 400;
    line-height: 130%;
    span {
     color: ${({ theme }) => theme.cores.base_text};
     font-family: 'Baloo 2';
     font-style: normal;
     font-size: 1.5rem;
     font-weight: 800;
     line-height: 130%;
    }
  }
`;

export const CartStyle = styled.button`
 cursor: pointer;
 display: flex;
 height: 2.3rem;
 padding: 0rem 0.5rem;
 justify-content: center;
 align-items: center;
 gap: 0.25rem;
 border-radius: 0.375rem;
 border: none;
 background: var(--Base-Button, #E6E5E5);
 
 p {
  color: var(--Base-Text, #574F4D);
  font-family: 'Roboto';
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 400;
  line-height: 160%;
  text-transform: uppercase;
 }

 img {
  width: 1rem;
  height: 1rem;
 }
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 0.5rem;
  gap: 0.5rem;
`;

export const Count = styled.div`
  display: flex;
  
  height: 2.375rem;
  justify-content: center;
  align-items: center;
  gap: 0.25rem;
  border-radius: 0.375rem;
  background: ${({ theme }) => theme.cores.base_button};
  
  p {
   color: ${({ theme }) => theme.cores.base_title};
   text-align: center;
   font-family: 'Roboto';
   font-size: 1rem;
   font-style: normal;
   font-weight: 400;
   line-height: 130%
  }
  .increment, .decrement {
   cursor: pointer;
   margin: 0 0.5rem;
  }
`;

export const HR = styled.hr`
 display: flex;
 width: 100%;
 height: .0625rem;
 background: ${({ theme }) => theme.cores.base_button};
 border: none;
`