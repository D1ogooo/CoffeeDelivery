import styled from "styled-components";

export const PaiContent = styled.div`
 display: flex;
 justify-content: center;
 gap: 6.38rem;
`

export const Left = styled.div`
 section:nth-child(1) {
  h1 {
   color: var(--Brand-Yellow-Dark, #C47F17);
   font-family: "Baloo 2";
   font-size: 2rem;
   font-style: normal;
   font-weight: 800;
   line-height: 130%;
  }

  p {
   color: var(--Base-Subtitle, #403937);   
   font-family: 'Roboto';
   font-size: 1.25rem;
   font-style: normal;
   font-weight: 400;
   line-height: 130%;
  }

  margin-bottom: 2.5rem;
 }

 section:nth-child(2) {
  display: flex;
  width: 32.875rem;
  padding: 2.5rem;
  flex-direction: column;
  align-items: flex-start;
  gap: 2rem;
  border-radius: 0.375rem 2.25rem;
  border: .0625rem solid #DBAC2C;
  div:nth-child(1) {
   display: flex;
   div {
    display: flex;
    padding: 0.5rem;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    border-radius: 62.5rem;
    background: var(--Brand-Purple, #8047F8);
   }
  }
  div:nth-child(2) {
   display: flex;
   div {
    display: flex;
    padding: 0.5rem;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    border-radius: 62.5rem;
    background: var(--Brand-Yellow, #DBAC2C);
   }

   span {
    color: var(--Base-Text, #574F4D);
    font-family: 'Roboto';
    font-size: 1rem;
    font-style: normal;
    font-weight: 700;
    line-height: 130%;
   }
  }
  div:nth-child(3) {
    display: flex;
   div {
    display: flex;
    padding: 0.5rem;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    border-radius: 62.5rem;
    background: var(--Brand-Yellow-Dark, #C47F17);
   }
  }
 }
`

export const Right = styled.div`
 
`