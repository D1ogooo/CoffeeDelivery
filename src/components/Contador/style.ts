import styled from 'styled-components'

export const Preco = styled.div`
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
   font-family: "Baloo 2";
   font-size: 1.5rem;
   font-style: normal;
   font-weight: 800;
   line-height: 130%;
  }
 }
`

export const Container = styled.div`
 display: flex;
 align-items: center;
 justify-content: center;
 border-radius: 0.375rem;
`

export const CartStyle = styled.div`
 cursor: pointer;
 display: flex;
 padding: 0.5rem;
 justify-content: center;
 align-items: center;
 gap: 0.5rem;
 border-radius: 0.375rem;
 background: ${({ theme }) => theme.cores.purple_dark};
 border-radius: 0.375rem;
`