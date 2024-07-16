import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
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

const productsFilterSchema = z.object({
  cep: z.string().min(8, {
   message: "O CEP deve conter exatamente 8 dígitos."
  }).max(8, {
   message: "O CEP deve conter exatamente 8 dígitos."
  }),
  rua: z.string().min(1, {
   message: "Declare o nome da rua."
  }),
  numero: z.number().min(1, {
   message: "Declare o numero."
  }),
  complemento: z.string().optional(),
  bairro: z.string().min(1, { 
   message: "Declare o bairro."
  }),
  cidade: z.string().min(1, { 
   message: "Declare a cidade."
  }),
  uf: z.string().min(1, {
   message: "O UF deve conter exatamente 2 caracteres."
  }).max(2, {
   message: "O UF deve conter exatamente 2 caracteres."
  })
});

type productsFilterSchema = z.infer<typeof productsFilterSchema>

function CheckOut() {
 const [formattedCep, setFormattedCep] = useState<string>('');
 const [isCepBlocked, setIsCepBlocked] = useState<boolean>(false);
 const { register, handleSubmit, setValue } = useForm<productsFilterSchema>({
  resolver: zodResolver(productsFilterSchema)
 })

 const handleCepChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  let cep = event.target.value.replace(/\D/g, '');
  
  if (cep.length === 8) {
   cep = cep.replace(/(\d{5})(\d{3})/, '$1-$2');
  }

  if (cep.length > 8) {
   setIsCepBlocked(true)
  } else {
   setIsCepBlocked(false)
  }

  setFormattedCep(cep);

  setValue('cep', cep, { shouldValidate: true, shouldDirty: true });
};
 
 function handleFilterProducts(data: productsFilterSchema) {
  console.log(data)
 }

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
       <form onSubmit={handleSubmit(handleFilterProducts)}>
        <div> {/* primeira div */}
         <input type="text" placeholder="CEP" maxLength={9} value={formattedCep} {...register('cep')} onChange={handleCepChange} on/>
        </div>
         <div> {/* segunda div */}
          <input type="text" placeholder="Rua" {...register('rua')}/>
         </div>
        <div> {/* terceira div */}
         <section>
          <input type="text" placeholder="Número" {...register('numero')}/>
         </section>
         <section>
          <input type="text" placeholder="Complemento" {...register('complemento')}/>
         </section>
        </div>
        <div> {/* quarta div */}
         <section>
          <input type="text" placeholder="Bairro" {...register('bairro')}/>
         </section>
         <section>
          <input type="text" placeholder="Cidade" {...register('cidade')}/>
         </section>
         <section>
          <input type="text" placeholder="UF" maxLength={2} {...register('uf')}/>
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