import { useCounter } from "../../hooks/useCounter";
import { Container, CartStyle, Count } from "./style";
import AdicionarIcon from '../../images/IncrementIcon.svg';
import DecrementarIcon from '../../images/DecrementIcon.svg';
import IconLixeiraRoxa from '../../images/IconLixeiraRoxa.svg'

interface TypeCounter {
  ItemId: string;
}

export const ContadorCheckout = ({ ItemId }: TypeCounter) => {
  const { items, RemoveItem, Increment, Decrement } = useCounter()

  return (
     <>
    <Container>
      <Count>
       <img src={AdicionarIcon} className="increment" alt="Incrementar" onClick={() => Increment(ItemId)}/>
       <p>{items.find(item => item.id === ItemId)?.quantiti || 0}</p>
       <img src={DecrementarIcon} className="decrement" alt="Decrementar" onClick={() => Decrement(ItemId)}/>
      </Count>
      <CartStyle onClick={() => RemoveItem(ItemId)}>
       <img src={IconLixeiraRoxa} alt="" />
       <p>Remover</p>
      </CartStyle>
     </Container>
     </>
  );
};