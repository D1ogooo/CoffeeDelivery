import { useReducer, Reducer } from "react";
import { IncludeReducer } from "../../reducers/Incluir";
import { Container, CartStyle, Count } from "./style";
import AdicionarIcon from '../../images/IncrementIcon.svg';
import DecrementarIcon from '../../images/DecrementIcon.svg';
import IconLixeiraRoxa from '../../images/IconLixeiraRoxa.svg'
import { useCounter } from "../../hooks/useCounter";

type StateType = {
 count: number;
};

type ActionType = {
 type: 'Increment' | 'Decrement';
};

export const ContadorCheckout = ({ Posicao }: { Posicao: string }) => {
  // const { AddItem } = useCounter()
  const initialState: StateType = { count: 0 };
  
  const [quantities, dispatch] = useReducer(
   IncludeReducer as Reducer<StateType, ActionType>,
   initialState
  );
 
  return (
     <>
    <Container>
      <Count>
       <img src={AdicionarIcon} className="increment" alt="Incrementar" onClick={() => dispatch({ type: 'Increment' })}/>
       <p>{quantities.count}</p>
       <img src={DecrementarIcon} className="decrement" alt="Decrementar" onClick={() => dispatch({ type: 'Decrement' })}/>
      </Count>
      <CartStyle>
       <img src={IconLixeiraRoxa} alt="" />
       <p>Remover</p>
      </CartStyle>
      {/* onClick={() => RemoveItem(String(Posicao))} */}
     </Container>
     </>
  );
};