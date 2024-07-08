import styled from 'styled-components'
import { Container } from '../../style/global'

export const HeaderContainer = styled(Container)``

export const Internal = styled.div`
 display: flex;
 justify-content: space-between;
 margin-top: 1rem;
 margin-bottom: 1rem;

 section:nth-child(1) {}

 section:nth-child(2) {
  display: flex;
  gap: .75rem;

  div:nth-child(1) {
   display: flex;
   padding: .5rem;
   justify-content: center;
   align-items: center;
   gap: .25rem;
   img {
    width: 2rem;
    height: 2rem;
   }
   border-radius: .375rem;
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
   padding: .5rem;
   justify-content: center;
   align-items: center;
   border-radius: .375rem;
   background: ${({ theme }) => theme.cores.yellow_light};
   
   section {
    width: 1.5rem;
    height: 1.5rem;
    position: absolute;
    margin-top: -3.125rem; 
    margin-left: 2.5rem;
    padding-top: .12rem;
    border-radius: 62.5rem;
    background: ${({ theme }) => theme.cores.yellow_dark};

    p {
     margin: 0 auto;
     color: ${({ theme }) => theme.cores.white};
     font-family: 'Roboto';
     font-weight: 700;
    }
   }

   img {
    width: 1.8rem;
    height: 1.8rem;
   }
  }
 }
`