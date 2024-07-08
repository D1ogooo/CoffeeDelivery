import React, { useReducer } from "react";
import { IncludeReducer } from "../../reducers/Incluir";
import { Preco, Container, CartStyle } from "./style";
import AdicionarIcon from '../../images/IncrementIcon.svg';
import DecrementarIcon from '../../images/DecrementIcon.svg';
import CartIcon from '../../images/IconCard_white.svg'
import { useCounter } from "../../hooks/useCounter";

type StateType = {
 count: number;
};

type ActionType = {
 type: 'Increment' | 'Decrement';
};

export const Contador = () => {
 const { AddItem } = useCounter()
 const initialState: StateType = { count: 0 };
  
 const [quantities, dispatch] = useReducer(
  IncludeReducer as React.Reducer<StateType, ActionType>,
  initialState
 );
 

  return (
    <>
     <Container>
     <Preco>
      <h3>R$ <span>9.90</span></h3> 
     </Preco>
     <button id='increment' onClick={() => dispatch({ type: 'Increment' })}><img src={AdicionarIcon} alt="Incrementar"/></button>
      <p>{quantities.count}</p>
      <button id='decrement' onClick={() => dispatch({ type: 'Decrement' })}><img src={DecrementarIcon} alt="Decrementar"/></button>
     <CartStyle onClick={() => AddItem("1")}>
      <img src={CartIcon} alt="" />
     </CartStyle>
     </Container>
    </>
  );
};
