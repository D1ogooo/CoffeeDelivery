import styled from "styled-components";

export const Main = styled.section`
 width: 100%;
 display: flex;
 justify-content: space-between;

 .left {
  width: 50%;
  section {
   display: flex;
   width: 14.4375rem;
   align-items: center;
   gap: 0.75rem;
   
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