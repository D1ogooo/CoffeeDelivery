import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
 
 ::-webkit-scrollbar {
  width: 6.5px;
  transition: 0.3s all;
}

::-webkit-scrollbar-track {
  background-color: #2c2c31;
  border-radius: 20px;
}

::-webkit-scrollbar-thumb {
  background-color: #A8A8A8;
  border-radius: 10px;
}
 
 html {
  scroll-behavior: smooth;
 }
 * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  outline: 0;
 }
`

export const Container = styled.div`
 margin: 0 auto;
 width: 80%;
`