import { useState } from "react";
import { Header } from "../../components/Header";
import { Form, CheckoutContainer, Left, Right, LeftContent, MetodoPagamento, PagamentoContent, RightContent, Card, Internal, IternalCard, Error } from './style'
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import LocalIcon from '../../images/Icon_enderecolocal.svg'
import MoneiIcon from '../../images/Icon_sifraodedinheiroroxo.svg'
import notadeDinheiroIcon from '../../images/Icon_notadedinheiro.svg'
import casaLotericaIcon from '../../images/Icon_caixaloterica.svg'
import creditoIcon from '../../images/Icon_cartaodecredito.svg'
import { ContadorCheckout } from "../../components/ContadorCheckout";
import { useCounter } from "../../hooks/useCounter";
import IconCoffee from '../../database/database images/oitavo.svg'

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
    message: "Declare o número."
  }),
  complemento: z.string().optional(),
  bairro: z.string().min(1, { 
    message: "Declare o bairro."
  }),
  cidade: z.string().min(1, { 
    message: "Declare a cidade."
  }),
  uf: z.string().min(2, {
    message: "O UF deve conter exatamente 2 caracteres."
  }).max(2, {
    message: "O UF deve conter exatamente 2 caracteres."
  }),
  cartaoCredito: z.boolean().optional(),
  cartaoDebito: z.boolean().optional(),
  dinheiro: z.boolean().optional(),
});

type productsFilterSchema = z.infer<typeof productsFilterSchema>;

function CheckOut() {
  const [isOn, setIsOn] = useState<boolean>(false)
  const [secondisOn, setsecondisOn] = useState<boolean>(false)
  const [thirdIsOn, setThirdIsOn] = useState<boolean>(false)
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState<string | null>(null);
  const { items, handleForm } = useCounter()
  const { register, handleSubmit, formState: { errors } } = useForm<productsFilterSchema>({
   resolver: zodResolver(productsFilterSchema)
  });

  const handlePaymentMethodSelection = (method: string) => {
    setSelectedPaymentMethod(method);
    if (method === "cartaoCredito") {
      setIsOn(true);
      setsecondisOn(false);
      setThirdIsOn(false);
    } else if (method === "cartaoDebito") {
      setIsOn(false);
      setsecondisOn(true);
      setThirdIsOn(false);
    } else if (method === "dinheiro") {
      setIsOn(false);
      setsecondisOn(false);
      setThirdIsOn(true);
    }
  };

  const onSubmit = (data: any) => {
    if (!selectedPaymentMethod) {
      alert("Por favor, selecione um método de pagamento.");
      return;
    }
    handleForm(data);
  };

  return (
   <>
    <Header/>
    <CheckoutContainer>
     <Form onSubmit={handleSubmit(onSubmit)}>
      <Left>
       <h2 id="TitleLeft">Complete seu pedido</h2>
       <LeftContent>
        <div className="firstDiv">
         <img src={LocalIcon} alt="" />
         <section>
          <h3>Endereço de Entrega</h3>
          <p>Informe o endereço onde deseja receber seu pedido</p>
         </section>
        </div>
        <label className="firstLabel">
         <input type="text" placeholder="CEP" {...register('cep')}/>
        </label>
         {errors.cep && 
         <Error>
          <p>{errors.cep.message}</p>
         </Error>}
        <label className="secondLabel">
         <input type="text" placeholder="Rua" {...register('rua')}/>
        </label>
        {errors.rua && 
         <Error>
          <p>{errors.rua.message}</p>
         </Error>}
        <div style={{ display: 'flex', gap: '0.75rem' }}>
         <div style={{ display: 'flex', flexDirection: 'column'}}>
         <label className="thirdLabel">
          <input type="text" placeholder="Número" {...register('numero')}/>
         </label>
          <p className='Error'>{errors.numero && errors.numero.message}</p>
         </div>
         <label className="forLabel">
          <input type="text" placeholder="Complemento" {...register('complemento')}/>
          <p>Opcional</p>
         </label>
        </div>
        <div style={{ display: 'flex', gap: '0.75rem' }}>
         <div>
         <label className="fiveLabel">
          <input type="text" placeholder="Bairro" {...register('bairro')}/>
          <p className='Error2'>{errors.bairro && errors.bairro.message}</p>
         </label>
         </div>
         <label className="sixLabel">
          <input type="text" placeholder="Cidade" {...register('cidade')}/>
          <p className='Error'>{errors.cidade && errors.cidade.message}</p>
         </label>
        <div style={{ display: 'flex', marginLeft: '.125rem'}}>
        <label className="sevenLabel">
         <input type="text" placeholder="UF" maxLength={2} {...register('uf')}/>
         </label>
        </div>
         <p className='Error'>{errors.uf && errors.uf.message}</p>
        </div>
       </LeftContent>
       <MetodoPagamento>
        <PagamentoContent>
         <div className="ExternalConteudo">
          <img src={MoneiIcon}/>
          <div className="ConteudoTitle">
           <h3>Pagamento</h3>
           <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
          </div>
         </div>
         <section className="buttonsContent">
          <button 
            type="button" 
            onClick={() => handlePaymentMethodSelection("cartaoCredito")} 
            className={isOn ? 'styleButtonSelected' : ''}
          >
            <img src={creditoIcon} alt="" />
            Cartão de crédito
          </button>
          <button 
            type="button" 
            onClick={() => handlePaymentMethodSelection("cartaoDebito")} 
            className={secondisOn ? 'styleButtonSelected' : ''}
          >
            <img src={casaLotericaIcon} alt="" />
            cartão de débito
          </button>
          <button 
            type="button" 
            onClick={() => handlePaymentMethodSelection("dinheiro")} 
            className={thirdIsOn ? 'styleButtonSelected' : ''}
          >
            <img src={notadeDinheiroIcon} alt="" />
            dinheiro
          </button>
         </section>
        </PagamentoContent>
       </MetodoPagamento>
      </Left>
      <Right>
       <h3 id='TitleRight'>Cafés selecionados</h3>
       <RightContent>
        <Internal>
        <div className="ConteudoCard">
        {items.map((card) => (
         <Card style={{ marginBottom: '.5rem'}}>
          <img src={card.Image} alt="" id="coffeeicon"/>
          <div style={{ width: '100%'}}>
          <div id="InfoDiv">
           <h2>{card.Title}</h2>
           <p>R$ 9,90</p>
          </div>
           <ContadorCheckout ItemId={card.id}/>
          </div>
         </Card>
        ))}
        </div>
        <hr style={{ marginTop: '1rem', 
         marginBottom: '1rem', strokeWidth: '.0625rem', border: 'none',
         stroke: '#E6E5E5', backgroundColor: '#E6E5E5', width: '100%', height: '.0625rem'}}
         />
         <IternalCard>
          <section>
           <h2>Total de itens</h2>
           <p>R$ 29,70</p>
          </section>
          <section>
           <h2>Entrega</h2>
           <p>R$ 3,50</p>
          </section>
          <section>
           <h3>Total</h3>
           <h3>R$ 33,20</h3>
          </section>
          <input type='submit' id='ConfirmarPedido' value="confirmar pedido"/>
         </IternalCard>
        </Internal>
       </RightContent>
      </Right>
     </Form>
    </CheckoutContainer>
   </>
  );
}

export default CheckOut;
