import React from 'react'
import ReactDOM from 'react-dom/client'
import { GlobalStyle } from './style/global.ts'
import { ThemeProvider } from 'styled-components'
import { Theme } from './style/theme.ts'
import { CoffeeRoutes } from './routes/index.tsx'
import { DefaultLayout } from './layouts/DefaultLayout.tsx'
import { CounterProvider } from './hooks/useCounter.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
   <CounterProvider>
   <ThemeProvider theme={Theme}>
    <DefaultLayout/>
     <CoffeeRoutes/>
     <GlobalStyle/>
   </ThemeProvider>
   </CounterProvider>
  </React.StrictMode>,
)
