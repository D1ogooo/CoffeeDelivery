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
        <div>
         <img src={LocalImage} alt="" />
        </div>
       </div>
       <div> {/* segunda div */}
        <div>
         <img src={RelogioImage} alt="" />
        </div>
       </div>
       <div> {/* terceira div */}
        <div>
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