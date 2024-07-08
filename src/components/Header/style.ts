import styled from 'styled-components'
import { Container } from '../../style/global'

export const HeaderContainer = styled(Container)`
 
`

export const Internal = styled.div`
 display: flex;
 justify-content: space-between;
 margin-top: 1rem;
 margin-bottom: 1rem;

 section:nth-child(1) {}

 section:nth-child(2) {
  display: flex;
  gap: 0.75rem;

  div:nth-child(1) {
   display: flex;
   padding: 0.5rem;
   justify-content: center;
   align-items: center;
   gap: 0.25rem;
   img {
    width: 2rem;
    height: 2rem;
   }
   border-radius: 0.375rem;
   background: ${({ theme }) => theme.cores.purple_light};
   p {
    color: ${({ theme }) => theme.cores.puple_dark};
    font-family: 'Roboto', sans-serif;
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: 130%;
   }
  }
  
  div:nth-child(2) {
   cursor: pointer;
   display: flex;
   padding: 0.5rem;
   justify-content: center;
   align-items: center;
   border-radius: 0.375rem;
   background: ${({ theme }) => theme.cores.yellow_light};

   img {
    width: 1.8rem;
    height: 1.8rem;
   }
  }
 }
`