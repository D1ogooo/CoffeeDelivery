import { useReducer, Reducer } from "react";
import { IncludeReducer } from "../../reducers/Incluir";
import { Preco, Container, CartStyle, Count } from "./style";
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

export const Contador = ({ Posicao }: { Posicao: string }) => {
  const { AddItem } = useCounter()
  const initialState: StateType = { count: 0 };
  
  const [quantities, dispatch] = useReducer(
   IncludeReducer as Reducer<StateType, ActionType>,
   initialState
  );
 
  return (
    <Container>
      <Preco>
       <h3>R$ <span>9.90</span></h3> 
      </Preco>
      <Count>
       <img src={AdicionarIcon} className="increment" alt="Incrementar" onClick={() => dispatch({ type: 'Increment' })}/>
       <p>{quantities.count}</p>
       <img src={DecrementarIcon} className="decrement" alt="Decrementar" onClick={() => dispatch({ type: 'Decrement' })}/>
      </Count>
      <CartStyle onClick={() => AddItem(String(Posicao))}>
       <img src={CartIcon} alt="" />
      </CartStyle>
     </Container>
  );
};