import styled from "styled-components";

export const Main = styled.section`
 width: 100%;
 display: flex;
 justify-content: space-between;

 .left {
  width: 50%;
  section {
   display: flex;
   flex-wrap: wrap;
   align-items: center;
   gap: 2.5rem;
  }

  h1 {
   color: ${({ theme }) => theme.cores.base_title};
   font-family: "Baloo 2", sans-serif;
   font-size: 3rem;
   font-style: normal;
   font-weight: 800;
   line-height: 130%;
   margin-bottom: 1rem;
  }

  h3 {
   color: ${({ theme }) => theme.cores.base_subtitle};
   font-family: 'Roboto';
   font-size: 1.25rem;
   font-style: normal;
   font-weight: 400;
   line-height: 130%;
   margin-bottom: 4.13rem;
  }
 }
 .right {
  img {
   width: 40.75rem;
   height: auto;
   flex-shrink: 0;
  }
 }
`

export const FirstSectionInSection = styled.div`
 display: flex;
 flex-direction: column;
 gap: 1.25rem;

 div:nth-child(1) {
 display: flex;
 align-items:center;
 flex: 1 0 0;
 gap: 0.75rem;
 color: ${({ theme }) => theme.cores.base_text};
 font-family: 'Roboto';
 font-size: 1rem;
 font-style: normal;
 font-weight: 400;
 line-height: 130%;

  img {
   display: flex;
   padding: 0.5rem;
   justify-content: center;
   align-items: center;
   gap: 0.5rem;
   border-radius: 62.5rem;
   background: ${({ theme }) => theme.cores.yellow_dark};
  }
 }

 div:nth-child(2) {
 display: flex;
 align-items:center;
 flex: 1 0 0;
 gap: 0.75rem;
 color: ${({ theme }) => theme.cores.base_text};
 font-family: 'Roboto';
 font-size: 1rem;
 font-style: normal;
 font-weight: 400;
 line-height: 130%;

  img {
   display: flex;
   padding: 0.5rem;
   justify-content: center;
   align-items: center;
   gap: 0.5rem;
   border-radius: 62.5rem;
   background: ${({ theme }) => theme.cores.yellow};
  }
 }
`

export const SecondSectionInSection = styled.div`
 display: flex;
 flex-direction: column;
 gap: 1.25rem;

 div:nth-child(1) {
 display: flex;
 align-items:center;
 flex: 1 0 0;
 gap: 0.75rem;
 color: ${({ theme }) => theme.cores.base_text};
 font-family: 'Roboto';
 font-size: 1rem;
 font-style: normal;
 font-weight: 400;
 line-height: 130%;
 
  img {
   display: flex;
   padding: 0.5rem;
   justify-content: center;
   align-items: center;
   gap: 0.5rem;
   border-radius: 62.5rem;
   background: ${({ theme }) => theme.cores.base_text};
  }
 }

 div:nth-child(2) {
 display: flex;
 align-items:center;
 flex: 1 0 0;
 gap: 0.75rem;
 color: ${({ theme }) => theme.cores.base_text};
 font-family: 'Roboto';
 font-size: 1rem;
 font-style: normal;
 font-weight: 400;
 line-height: 130%;
 
  img {
   display: flex;
   padding: 0.5rem;
   justify-content: center;
   align-items: center;
   gap: 0.5rem;
   border-radius: 62.5rem;
   background: ${({ theme }) => theme.cores.purple};
  }
 }
`

export const Coffees = styled.div`
  width: 100%;
  height: auto;

  h1 {
    color: ${({ theme }) => theme.cores.base_subtitle};
    font-family: "Baloo 2", sans-serif;
    font-size: 2rem;
    font-style: normal;
    font-weight: 800;
    line-height: 130%;
  }

  .firstSection {
    margin-bottom: 3.38rem;
  }

  #principalSection {
    
    
    div {
     img {
      width: 7.5rem;
      height: 7.5rem;
      flex-shrink: 0;
     }
    }
  }
`;

