import styled from 'styled-components'
import { Container } from '../../style/global'

export const CheckoutContainer = styled(Container)``

export const Checkout = styled.div`
 width: 100%;
 gap: 2rem;
 display: flex;
 justify-content: center;
`

export const Left = styled.div`
 width: 50%;
 
 .titleLeft {
  color: var(--Base-Subtitle, #403937);
  font-family: "Baloo 2";
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 700;
  line-height: 130%;
  margin-top: -0.94rem;
  margin-bottom: 0.94rem;
 }

 h2 {
  color: ${({ theme }) => theme.cores.base_subtitle};
  font-family: "Baloo 2";
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 700;
  line-height: 130%;
  /* margin-bottom: 0.95rem; */
 }
`

export const FirstLeft = styled.div`
 /* margin-bottom: 2rem; */
 display: flex;
 align-items: start;
 gap: 0.5rem;
 
 p {
  color: ${({ theme }) => theme.cores.base_text};
  font-family: 'Roboto';
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: 130%;
  span {
   align-self: stretch;
   color: ${({ theme }) => theme.cores.base_subtitle};
   font-family: 'Roboto';
   font-size: 1rem;
   font-style: normal;
   font-weight: 400;
   line-height: 130%;
  }
 }

 img {
  width: 1.375rem;
  height: 1.375rem;
 }
`

export const Right = styled.div`
 h2 {
  color: ${({ theme }) => theme.cores.base_subtitle};
  font-family: "Baloo 2";
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 700;
  line-height: 130%;
 }

 .titleRight {
  color: var(--Base-Subtitle, #403937);
  font-family: "Baloo 2";
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 700;
  line-height: 130%;
  margin-top: -0.94rem;
  margin-bottom: 0.94rem;
 }
`

export const LeftContent = styled.div`
 width: 100%;
 height: auto;
 display: flex;
 padding: 2.5rem;
 flex-direction: column;
 align-items: flex-start;
 gap: 2rem;
 align-self: stretch;
 margin-bottom: 0.75rem;

 border-radius: 0.375rem;
 background: var(--Base-Card, #F3F2F2);
`

export const SecondLeft = styled.div`
 form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
 }
 div:nth-child(1) {
  width: 12.5rem;
  height: 2.625rem;
  display: flex;
  padding: 0.75rem;
  align-items: center;
  gap: 0.25rem;
  align-self: stretch;
  border-radius: 0.25rem;
  border: 1px solid var(--Base-Button, #E6E5E5);
  background: var(--Base-Input, #EDEDED);
  input {
    width: 100%;
    height: auto;
    color: var(--Base-Label, #8D8686);
    font-family: 'Roboto';
    border: none;
    background: none;
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 400;
    line-height: 130%;
  }
 }

 div:nth-child(2) {
  width: 100%;
  height: 2.625rem;
  display: flex;
  padding: 0.75rem;
  align-items: center;
  gap: 0.25rem;
  align-self: stretch;

  border-radius: 0.25rem;
  border: 1px solid var(--Base-Button, #E6E5E5);
  background: var(--Base-Input, #EDEDED);
  input {
    width: 100%;
    height: auto;
    color: var(--Base-Label, #8D8686);
    font-family: 'Roboto';
    border: none;
    background: none;
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 400;
    line-height: 130%;
  }
 }

 div:nth-child(3) {
  display: flex;
  gap: 0.75rem;
  section:nth-child(1) {
   display: flex;
   width: 12.5rem;
   padding: 0.75rem;
   align-items: center;
   gap: 0.25rem;
   border-radius: 0.25rem;
   border: 1px solid var(--Base-Button, #E6E5E5);
   background: var(--Base-Input, #EDEDED);
   input {
    flex: 1 0 0;
    width: 100%;
    height: auto;
    color: var(--Base-Label, #8D8686);
    font-family: 'Roboto';
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 400;
    line-height: 130%;
    background: none;
    border: none;
   }
  } 
  section:nth-child(2) {
   display: flex;
   width: 12.5rem;
   padding: 0.75rem;
   align-items: center;
   gap: 0.25rem;
   border: 1px solid var(--Base-Button, #E6E5E5);
   background: var(--Base-Input, #EDEDED);
   input {
    flex: 1 0 0;
    width: 100%;
    height: auto;
    color: var(--Base-Label, #8D8686);
    font-family: 'Roboto';
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 400;
    line-height: 130%;
    background: none;
    border: none;
   }
  } 
 }

 div:nth-child(4) {
  display: flex;
  gap: 0.75rem;

  section:nth-child(1) {
   display: flex;
   width: 12.5rem;
   padding: 0.75rem;
   align-items: center;
   gap: 0.25rem;
   border-radius: 0.25rem;
   border: .0625rem solid var(--Base-Button, #E6E5E5);
   background: var(--Base-Input, #EDEDED);
   input {
    display: flex;
    flex: 1 0 0;
    color: var(--Base-Label, #8D8686);
    font-family: Roboto;
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 400;
    line-height: 130%;
    background: none;
    border: none;
   }
  }

  section:nth-child(2) {
   display: flex;
   width: 100%;
   padding: 0.75rem;
   align-items: center;
   gap: 0.25rem;
   flex: 1 0 0;


   border-radius: 0.25rem;
   border: .0625rem solid var(--Base-Button, #E6E5E5);
   background: var(--Base-Input, #EDEDED);
   input {
    display: flex;
    flex: 1 0 0;
    color: var(--Base-Label, #8D8686);
    font-family: Roboto;
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 400;
    line-height: 130%;
    background: none;
    border: none;
   }
  }

  section:nth-child(3) {
   display: flex;
   width: 3.75rem;
   padding: 0.75rem;
   align-items: center;
   gap: 0.25rem;

   border-radius: 0.25rem;
   border: .0625rem solid var(--Base-Button, #E6E5E5);
   background: var(--Base-Input, #EDEDED);
   input {
    display: flex;
    flex: 1 0 0;
    color: var(--Base-Label, #8D8686);
    font-family: Roboto;
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 400;
    line-height: 130%;
    background: none;
    border: none;
   }
  }
 }
`

export const RightContent = styled.div`
 display: flex;
 width: 28rem;
 height: 31.125rem;
 padding: 2.5rem;
 flex-direction: column;
 align-items: flex-start;
 gap: 1.5rem;
 border-radius: 0.375rem 2.75rem;
 background: var(--Base-Card, #F3F2F2);
`

export const ThirdLeft = styled.div`
 width: 100%;
 height: auto;
 display: flex;
 padding: 2.5rem;
 flex-direction: column;
 align-items: flex-start;
 gap: 2rem;
 align-self: stretch;

 border-radius: 0.25rem;
 border: .0625rem solid var(--Base-Button, #E6E5E5);
 background: var(--Base-Input, #EDEDED);
`

export const CoffeesContent = styled.div`
 display: flex;
 justify-content: space-between;
 gap: 1.25rem;

 .ImageCoffee {
  width: 4rem;
  height: 4rem;
  flex-shrink: 0;
 }
 .second {
  h3 {
   color: var(--Base-Subtitle, #403937);
   font-family: 'Roboto';
   font-size: 1rem;
   font-style: normal;
   font-weight: 400;
   line-height: 130%;
  }
 }

 .third {
  color: var(--Base-Text, #574F4D);
  text-align: right;
  font-family: 'Roboto';
  font-size: 1rem;
  font-style: normal;
  font-weight: 700;
  line-height: 130%;
 }
`

export const Component = styled.div`
 margin-bottom: 2.5rem;
 display: flex;
 gap: 0.75rem;
 
 button {
  cursor: pointer;
  display: flex;
  padding: 1rem;
  align-items: center;
  gap: 0.75rem;
  flex: 1 0 0;
  border-radius: 0.375rem;
  background: var(--Base-Button, #E6E5E5);
  border: none;
  width: 11.16rem;
  height: auto;
  color: var(--Base-Text, #574F4D);
  font-family: 'Roboto';
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 400;
  line-height: 160%;
  text-transform: uppercase;
 }

 button:active {
  border-radius: 0.375rem;
  border: 1px solid var(--Brand-Purple, #8047F8);
  background: var(--Brand-Purple-Light, #EBE5F9);
 }
`