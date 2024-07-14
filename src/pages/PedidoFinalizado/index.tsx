import { Header } from "../../components/Header"
import { Container } from "../../style/global"
import { PaiContent, Left, Right } from './style'
import PrincipalImage from '../../images/Illustration.svg'
import LocalImage from '../../images/Icon_local.svg'
import RelogioImage from '../../images/relogio_icon.svg'
import SifraoImage from '../../images/Icon_sifraodedinheirobranco.svg'

function PedidoFinalizado() {
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
        <p>Entrega em <span>Rua João Daniel Martinelli, 102</span><br></br>Farrapos - Porto Alegre, RS</p>
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
        <p>Pagamento na entrega<br></br><span>Cartão de Crédito</span></p>
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