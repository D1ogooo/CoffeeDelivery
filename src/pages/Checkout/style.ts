import styled from 'styled-components'
import { Container } from '../../style/global'

export const CheckoutContainer = styled(Container)``

export const Form = styled.form`
 width: 100%;
 margin: 0 auto;
 display: flex;
 justify-content: center;
 gap: 2rem;
`

export const Left = styled.section`
 width: 50%;
 height: auto;
 #TitleLeft {
  width: 12.625rem;
  height: 1.4375rem;
  margin-bottom: 0.94rem;
  color: ${({ theme }) => theme.cores.subtitle};
  font-family: "Baloo 2";
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 700;
  line-height: 130%;
 }
`

export const LeftContent = styled.div`
 display: flex;
 flex-direction: column;
 padding: 2.5rem;
 align-items: flex-start;
 gap: 1rem;
 align-self: stretch;
 border-radius: 0.375rem;
 background: ${({ theme }) => theme.cores.base_card};

 .Error {
  margin-left: -45px;
  color: red;
  text-align: right;
  font-family: "Baloo 2";
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 130%;
 }

 .Error2 {
  margin-left: -3.4375rem;
  color: red;
  text-align: right;
  font-family: "Baloo 2";
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 130%;
 }

 .firstDiv {
  display: flex;
  gap: 0.5rem;
  margin-bottom: 2rem;

  section {
   h3 {
    align-self: stretch;
    color: ${({ theme }) => theme.cores.subtitle};
    font-family: 'Roboto';
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: 130%;
   }
   p {
    display: flex;
    height: 1.3125rem;
    flex-direction: column;
    justify-content: center;
    align-self: stretch;
    color: ${({ theme }) => theme.cores.base_text};
    font-family: 'Roboto';
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 400;
    line-height: 130%;
   }
  }

  img {
   width: 1.375rem;
   height: 1.375rem;
  }
 }

 .firstLabel {
  display: flex;
  flex-direction: column;
  width: 12.5rem;
  padding: 0.75rem;
  align-items: center;
  gap: 0.25rem;
  border-radius: 0.25rem;
  border: .0625rem solid ${({ theme }) => theme.cores.base_button};
  background: ${({ theme }) => theme.cores.base_input};
  input {
   flex: 1 0 0;
   color: ${({ theme }) => theme.cores.base_label};
   background: none;
   border: none;
   font-family: 'Roboto';
   font-size: 0.875rem;
   font-style: normal;
   font-weight: 400;
   line-height: 130%;
  }
 }

 .secondLabel {
  width: 100%;
  height: auto;
  display: flex;
  padding: 0.75rem;
  align-items: center;
  gap: 0.25rem;
  align-self: stretch;
  border-radius: 0.25rem;
  border: .0625rem solid ${({ theme }) => theme.cores.base_button};
  background: ${({ theme }) => theme.cores.base_input};
  input {
   flex: 1 0 0;
   color: ${({ theme }) => theme.cores.base_label};
   background: none;
   border: none;
   font-family: 'Roboto';
   font-size: 0.875rem;
   font-style: normal;
   font-weight: 400;
   line-height: 130%;
  }
 }

 .thirdLabel {
  display: flex;
  width: 12.5rem;
  padding: 0.75rem;
  align-items: center;
  gap: 0.25rem;
  flex: 1 0 0;
  border-radius: 0.25rem;
  border: .0625rem solid ${({ theme }) => theme.cores.base_button};
  background: ${({ theme }) => theme.cores.base_input};
  input {
   width: 12.5rem;
   color: ${({ theme }) => theme.cores.base_label};
   font-family: 'Roboto';
   font-size: 0.875rem;
   font-style: normal;
   font-weight: 400;
   line-height: 130%; 
   border: none;
   background: none;
  }
 }

 .forLabel {
  width: 100%;
  display: flex;
  padding: 0.75rem;
  align-items: center;
  gap: 0.25rem;
  flex: 1 0 0;
  border-radius: 0.25rem;
  border: 1px solid ${({ theme }) => theme.cores.base_button};
  background: ${({ theme }) => theme.cores.base_input};

  p {
   color: ${({ theme }) => theme.cores.base_label};
   font-family: 'Roboto';
   font-size: 0.75rem;
   font-style: italic;
   font-weight: 400;
   line-height: 130%;
  }

  input {
   width: 21.75rem;
   color: ${({ theme }) => theme.cores.base_label};
   font-family: 'Roboto';
   font-size: 0.875rem;
   font-style: normal;
   font-weight: 400;
   line-height: 130%;
   border: none;
   background: none;
  }
 }

 .fiveLabel {
  display: flex;
  width: 12.5rem;
  padding: 0.75rem;
  align-items: center;
  gap: 0.25rem;
  border-radius: 0.25rem;
  border: .0625rem solid ${({ theme }) => theme.cores.base_button};
  background: ${({ theme }) => theme.cores.base_input};
  input {
   border: none;
   background: none;
  }
 }
 .sixLabel {
  display: flex;
  width: 17.5rem;
  padding: 0.75rem;
  align-items: center;
  justify-content: space-between;
  gap: 0.25rem;
  border: .0625rem solid ${({ theme }) => theme.cores.base_button};
  background: ${({ theme }) => theme.cores.base_input};
  input {
   background: none;
   border: none;
  }
 }
 .sevenLabel {
  display: flex;
  width: 3.75rem;
  padding: 0.75rem;
  align-items: center;
  gap: 0.25rem;
  border: .0625rem solid ${({ theme }) => theme.cores.base_button};
  background: ${({ theme }) => theme.cores.base_input};
  input {
   display: flex;
   width: 3.75rem;
   background: none;
   border: none;
  }
 }
`
export const Right = styled.section`
 width: 50%;
 height: auto;

 #TitleRight {
  margin-bottom: 0.40rem;
  margin-top: .5rem;
  color: ${({ theme }) => theme.cores.base_subtitle};
  font-family: "Baloo 2";
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 700;
  line-height: 130%;
 }
`

export const RightContent = styled.section`
 display: flex;
 width: 28rem;
 height: auto;
 padding: 2.5rem;
 /* justify-content: center; */
 flex-direction: column;
 align-items: flex-start;
 gap: 1.5rem;
 border-radius: 0.375rem 2.75rem;
 background: ${({ theme }) => theme.cores.base_card};
`

export const IternalCard = styled.div`
 display: flex;
 flex-direction: column;
 gap: 0.75rem;
 #ConfirmarPedido {
  width: 100%;
  height: auto;
  cursor: pointer;
  display: flex;
  padding: 0.75rem 0.5rem;
  justify-content: center;
  align-items: center;
  gap: 0.25rem;
  align-self: stretch;
  margin-top: .3rem;
  border-radius: 0.375rem;
  background: ${({ theme }) => theme.cores.yellow};
  border: none;
  color: ${({ theme }) => theme.cores.white};
  font-family: Roboto;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 700;
  line-height: 160%;
  text-transform: uppercase;
 }

 section {
  display: flex;
  justify-content: space-between;
  h2 {
   color: ${({ theme }) => theme.cores.base_text};
   text-align: right;
   font-family: Roboto;
   font-size: 0.875rem;
   font-style: normal;
   font-weight: 400;
   line-height: 130%;
  }

  h3 {
   color: ${({ theme }) => theme.cores.base_subtitle};
   text-align: right;
   font-family: 'Roboto';
   font-size: 1.25rem;
   font-style: normal;
   font-weight: 700;
   line-height: 130%;
  }

  p {
   color: ${({ theme }) => theme.cores.base_text};
   text-align: right;
   font-family: 'Roboto';
   font-size: 1rem;
   font-style: normal;
   font-weight: 400;
   line-height: 130%;
  }
 }
`

export const Internal = styled.div`
 width: 100%;
 display: flex;
 flex-direction: column;

 .ConteudoCard {
  height: 170px;
  overflow-y: auto; 
 }
`

export const Card = styled.div`
 width: 100%;
 display: flex;
 padding: 0.5rem 0.25rem;
 gap: 1.25rem;
 justify-content: flex-start;
 align-items: center;
 align-self: stretch;

 #InfoDiv {
  width: 100%;
  display: flex;
  justify-content: space-between;
 }
 
 #coffeeicon {
  width: 4rem;
  height: 4rem;
  flex-shrink: 0;
 }

 h2 {
  color: ${({ theme }) => theme.cores.base_subtitle};
  font-family: 'Roboto';
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 130%;
 }

 p {
  color: ${({ theme }) => theme.cores.base_text};
  text-align: right;
  font-family: 'Roboto';
  font-size: 1rem;
  font-style: normal;
  font-weight: 700;
  line-height: 130%;
 }
`

export const MetodoPagamento = styled.div`
 display: flex;
 padding: 2.5rem;
 flex-direction: column;
 align-items: flex-start;
 gap: 2rem;
 align-self: stretch;
 border-radius: 0.375rem;
 background: ${({ theme }) => theme.cores.base_card};
 margin-top: 0.75rem;
`

export const PagamentoContent = styled.div`
 display: flex;
 flex-direction: column;
 gap: 2rem;
 .ConteudoTitle {
  h3 {
   color: ${({ theme }) => theme.cores.base_subtitle};
   font-family: 'Roboto';
   font-size: 1rem;
   font-style: normal;
   font-weight: 400;
   line-height: 130%;
  }

  p {
   display: flex;
   height: 1.3125rem;
   flex-direction: column;
   justify-content: center;
   align-self: stretch;

   color: ${({ theme }) => theme.cores.base_text};
   font-family: 'Roboto';
   font-size: 0.875rem;
   font-style: normal;
   font-weight: 400;
   line-height: 130%;
  }
 }

 .ExternalConteudo {
  display: flex;
  gap: 0.2rem;
  img {
   width: 1.375rem;
   height: 1.375rem;
  }
 }

 .buttonsContent {
  width: 100%;
  display: flex;
  gap: 0.75rem;
  button {
   width: 12rem;
   height: auto;
   display: flex;
   padding: 1rem;
   align-items: center;
   gap: 0.75rem;
   flex: 1 0 0;
   border: none;
   cursor: pointer;
   border-radius: 0.375rem;
   background: var(--Base-Button, #E6E5E5);
   color: ${({ theme }) => theme.cores.base_text};
   font-family: 'Roboto';
   font-size: 0.75rem;
   font-style: normal;
   font-weight: 400;
   line-height: 160%;
   text-transform: uppercase;
  }

  .styleButtonSelected {
   border-radius: 0.375rem;
   border: 1px solid ${({ theme }) => theme.cores.purple};
   background: ${({ theme }) => theme.cores.purple_light};
  }
 }
`

export const Error = styled.div`
 color: red;
 text-align: right;
 font-family: "Baloo 2";
 font-size: 1rem;
 font-style: normal;
 font-weight: 400;
 line-height: 130%;
 margin-top: -10px;
`