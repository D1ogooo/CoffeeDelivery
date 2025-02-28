import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useCounter } from "../../hooks/useCounter"
import { Header } from "../../components/Header"
import { Container } from "../../style/global"
import { PaiContent, Left, Right } from './style'
import PrincipalImage from '../../images/Illustration.svg'
import LocalImage from '../../images/Icon_local.svg'
import RelogioImage from '../../images/relogio_icon.svg'
import SifraoImage from '../../images/Icon_sifraodedinheirobranco.svg'

function PedidoFinalizado() {
 const { dataCoffee, arrayList } = useCounter()
 const [list, setList] = useState<boolean>(true)
 const navigate = useNavigate()

 useEffect(() => {
  function Revise() {
    setList(true)
  }
  Revise()
  
  const data = arrayList.find((item: string[]) => item.id === dataCoffee.id) 

  if(!dataCoffee.bairro || !dataCoffee.numero || !dataCoffee.cidade || !dataCoffee.uf) {
   navigate('/');
  }

  arrayList.length === 0 && navigate('/');
  data ? "" : navigate('/');
  
 }, [])
    
 if(!list) {
    return <h1>Carregando...</h1>
 } 

 return (
  <>
   <Header />
   <Container>
    <PaiContent>
     <Left>
      <section>  {/* primeiro section */}
       <h1>Uhu! Pedido confirmado</h1>
       <p>Agora é só aguardar que logo o café chegará até você</p>
      </section>
      <section>{/* segundo section */}
       <div> {/* primeira div */}
        <p>Entrega em <span>{dataCoffee.bairro}, {dataCoffee.numero}</span><br></br> - {dataCoffee.cidade}, {dataCoffee.uf}</p>
        <div style={{  backgroundColor: "#8047F8" }}>
         <img src={LocalImage} alt="" />
        </div>
       </div>
       <div> {/* segunda div */}
        <p>Previsão de entrega <br></br><span>20 min - 30 min</span></p>
        <div style={{ backgroundColor: '#DBAC2C' }}>
         <img src={RelogioImage} alt="" />
        </div>
       </div>
       <div> {/* terceira div */}
        {dataCoffee.cartaoCredito && <p>Pagamento na entrega<br></br><span>Cartão de crédito</span></p>}
        {dataCoffee.cartaoDebito &&<p>Pagamento na entrega<br></br><span>Cartão de débito</span></p>}
        {dataCoffee.dinheiro && <p>Pagamento na entrega<br></br><span>Dinheiro</span></p>}
        <div style={{ backgroundColor: '#C47F17'}}>
         <img src={SifraoImage} alt="" />
        </div>
       </div>
      </section>
     </Left>
     <Right>
      <img src={PrincipalImage} alt="" />
     </Right>
    </PaiContent> 
   </Container>
  </>
 )
}

export default PedidoFinalizado