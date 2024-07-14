import { Header } from "../../components/Header"
import { CheckoutContainer, Checkout, LeftContent, RightContent, SecondLeft, ThirdLeft, CoffeesContent, PrecoContainer } from "./style"
import { Left, Right, FirstLeft, Component } from "./style"
import IconLocalization from '../../images/Icon_enderecolocal.svg'
import Coffeimage from '../../database/database images/primeiro.svg'
import sifraoImage from '../../images/Icon_sifraodedinheiroroxo.svg'
import cartaoImage from '../../images/Icon_cartaodecredito.svg'
import casaLotericaImage from '../../images/Icon_caixaloterica.svg'
import dinheiroImage from '../../images/Icon_notadedinheiro.svg'
import { ContadorCheckout } from "../../components/ContadorCheckout"
import { CoffeeDatabase } from "../../database/db"

function CheckOut() {
 return (
  <>
   <Header/>
   <CheckoutContainer>
    <Checkout>
    <Left>
     <h2 className="titleLeft">Complete seu pedido</h2>
     <LeftContent>
      <FirstLeft>
       <img src={IconLocalization}/>
       <p><span>Endereço de Entrega</span><br></br> Informe o endereço onde deseja receber seu pedido</p>
      </FirstLeft>
      <SecondLeft>
       <form>
        <div> {/* primeira div */}
         <input type="text" placeholder="CEP"/>
        </div>
         <div> {/* segunda div */}
          <input type="text" placeholder="Rua"/>
         </div>
        <div> {/* terceira div */}
         <section>
          <input type="text" placeholder="Número"/>
         </section>
         <section>
          <input type="text" placeholder="Complemento"/>
         </section>
        </div>
        <div> {/* quarta div */}
         <section>
          <input type="text" placeholder="Bairro"/>
         </section>
         <section>
          <input type="text" placeholder="Cidade"/>
         </section>
         <section>
          <input type="text" placeholder="UF"/>
         </section>
        </div>
       </form>
      </SecondLeft>
     </LeftContent>
      <ThirdLeft>
      <FirstLeft>
       <img src={sifraoImage}/>
       <p><span>Pagamento</span><br></br> O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
      </FirstLeft>
       <Component>
        <button>
         <img src={cartaoImage} alt="" />
         <p>Cartão de crédito</p>
        </button>
        <button>
         <img src={casaLotericaImage} alt="" />
         <p>cartão de débito</p>
        </button>
        <button>
         <img src={dinheiroImage} alt="" />
         <p>dinheiro</p>
        </button>
       </Component>
      </ThirdLeft>
    </Left>

    <Right>
     <h2 className="titleRight">Cafés selecionados</h2>
     <RightContent>
      
     <div className='ContainerCoffee'>
      <div>
       <CoffeesContent>
       <div className="first">
        <img src={Coffeimage} className="ImageCoffee"/>
       </div>

       <div className="second">
        <h3>Expresso Tradicional</h3>
        <ContadorCheckout />
       </div>

       {/*Posicao={String(card.id)}*/}
       <div className="third">
        <p>R$ 9.90</p>
       </div>
      </CoffeesContent>
       <hr style={{ display: "flex", width: '100%', marginTop: '1.5rem'}}/> 
      </div>
      <div style={{ marginTop: '1.2rem'}}>
       <CoffeesContent>
       <div className="first">
        <img src={Coffeimage} className="ImageCoffee"/>
       </div>

       <div className="second">
        <h3>Expresso Tradicional</h3>
        <ContadorCheckout />
       </div>

       {/*Posicao={String(card.id)}*/}
       <div className="third">
        <p>R$ 9.90</p>
       </div>
      </CoffeesContent>
       <hr style={{ display: "flex", width: '100%', marginTop: '1.5rem'}}/> 
      </div>
       
      </div>

      <PrecoContainer>
       <div>
        <p>Total de itens</p>
        <p>R$ 29.70</p>
       </div>
       <div>
        <p>Entrega</p>
        <p>R$ 3.50</p>
       </div>
       <div>
        <p>Total</p>
        <p>R$ 33.20</p>
       </div>
       <button className="confirmarPedido">
        confirmar pedido
       </button>
      </PrecoContainer>
     </RightContent>
    </Right>
    </Checkout>
   </CheckoutContainer>
  </>
 )
}

export default CheckOut