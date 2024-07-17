import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Header } from "../../components/Header";
import { CheckoutContainer, Checkout, LeftContent, RightContent, SecondLeft, ThirdLeft, CoffeesContent, PrecoContainer } from "./style";
import { Left, Right, FirstLeft, Component } from "./style";
import IconLocalization from '../../images/Icon_enderecolocal.svg';
import Coffeimage from '../../database/database images/primeiro.svg';
import sifraoImage from '../../images/Icon_sifraodedinheiroroxo.svg';
import cartaoImage from '../../images/Icon_cartaodecredito.svg';
import casaLotericaImage from '../../images/Icon_caixaloterica.svg';
import dinheiroImage from '../../images/Icon_notadedinheiro.svg';
import { ContadorCheckout } from "../../components/ContadorCheckout";
import { useCounter } from '../../hooks/useCounter';

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
  })
});

type productsFilterSchema = z.infer<typeof productsFilterSchema>;

function CheckOut() {
  const [formattedCep, setFormattedCep] = React.useState<string>('');
  const [isCepBlocked, setIsCepBlocked] = React.useState<boolean>(false);
  const { items } = useCounter()
  const { register, handleSubmit, setValue, formState: { errors } } = useForm<productsFilterSchema>({
    resolver: zodResolver(productsFilterSchema)
  });

  const handleCepChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    let cep = event.target.value.replace(/\D/g, '');
    
    if (cep.length === 8) {
      cep = cep.replace(/(\d{5})(\d{3})/, '$1-$2');
    }

    if (cep.length > 8) {
      setIsCepBlocked(true);
    } else {
      setIsCepBlocked(false);
    }

    setFormattedCep(cep);

    setValue('cep', cep, { shouldValidate: true, shouldDirty: true });
  };
  
  return (
    <>
      <Header/>
      <CheckoutContainer>
        <Checkout>
          <Left>
            <h2 className="titleLeft">Complete seu pedido</h2>
            <LeftContent>
              <FirstLeft>
                <img src={IconLocalization} alt="Ícone de Localização"/>
                <p><span>Endereço de Entrega</span><br></br> Informe o endereço onde deseja receber seu pedido</p>
              </FirstLeft>
              <SecondLeft>
                <form>
                  <div>
                    <input type="text" placeholder="CEP" maxLength={9} value={formattedCep} {...register('cep')} onChange={handleCepChange}/>
                    {errors.cep && <p className='errors'>{errors.cep.message}</p>}
                  </div>
                  <div>
                    <input type="text" placeholder="Rua" {...register('rua')}/>
                    {errors.rua && <p className='errors'>{errors.rua.message}</p>}
                  </div>
                  <div>
                    <section>
                      <input type="text" placeholder="Número" {...register('numero')}/>
                    </section>
                    <section>
                      <input type="text" placeholder="Complemento" {...register('complemento')}/>
                    </section>
                  </div>
                  <div>
                    <section>
                      <input type="text" placeholder="Bairro" {...register('bairro')}/>
                    </section>
                    <section>
                      <input type="text" placeholder="Cidade" {...register('cidade')}/>
                    </section>
                    <section>
                      <input type="text" placeholder="UF" maxLength={2} {...register('uf')}/>
                      {errors.uf && <p className='errors'>{errors.uf.message}</p>}
                    </section>
                  </div>
                </form>
              </SecondLeft>
            </LeftContent>
            <ThirdLeft>
              <FirstLeft>
                <img src={sifraoImage} alt="Ícone de Dinheiro"/>
                <p><span>Pagamento</span><br></br> O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
              </FirstLeft>
              <Component>
                <button>
                  <img src={cartaoImage} alt="Ícone de Cartão de Crédito" />
                  <p>Cartão de crédito</p>
                </button>
                <button>
                  <img src={casaLotericaImage} alt="Ícone de Caixa Lotérica" />
                  <p>Cartão de débito</p>
                </button>
                <button>
                  <img src={dinheiroImage} alt="Ícone de Dinheiro" />
                  <p>Dinheiro</p>
                </button>
              </Component>
            </ThirdLeft>
          </Left>

          <Right>
            <h2 className="titleRight">Cafés selecionados</h2>
            <RightContent>
            <div className='ContainerCoffee'>
                {items.map((item) => (
                  <div key={item.id}>
                    <CoffeesContent>
                      <div className="first">
                        <img src={Coffeimage} className="ImageCoffee" alt="Imagem do Café"/>
                      </div>
                      <div className="second">
                        <h3>{item.Title}</h3>
                        <ContadorCheckout ItemId={String(item.id)}/>
                      </div>
                      <div className="third">
                        <p>R$ 9,90</p>
                      </div>
                    </CoffeesContent>
                    {console.log(item)}
                    <hr style={{ display: "flex", width: '100%', marginTop: '1.5rem'}}/> 
                  </div>
                ))}
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
                <button type="submit" className="confirmarPedido">Confirmar Pedido</button>
              </PrecoContainer>
            </RightContent>
          </Right>
        </Checkout>
      </CheckoutContainer>
    </>
  );
}

export default CheckOut;
