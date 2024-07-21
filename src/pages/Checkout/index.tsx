import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Header } from "../../components/Header";
import { CheckoutContainer, Checkout, LeftContent, RightContent, SecondLeft, ThirdLeft, CoffeesContent, PrecoContainer, Button } from "./style";
import { Left, Right, FirstLeft, Component, Inexistente, Error } from "./style";
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
  const [formattedCep, setFormattedCep] = useState<string>('');
  const [isInvalid, setisInvalid] = useState<boolean>(true);
  const navigate = useNavigate();
  const { items } = useCounter();
  const { register, setValue, formState: { errors } } = useForm<productsFilterSchema>({
    resolver: zodResolver(productsFilterSchema)
  });

  const handleCepChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    let cep = event.target.value.replace(/\D/g, '');
    
    if (cep.length === 8) {
      cep = cep.replace(/(\d{5})(\d{3})/, '$1-$2');
    }
    setFormattedCep(cep);
    setValue('cep', cep, { shouldValidate: true, shouldDirty: true });
  };

  function Rua(event: React.ChangeEvent<HTMLInputElement>) {
    const rua = event.target.value;
    setValue('rua', rua, { shouldValidate: true, shouldDirty: true });

  }

  function Numero(event: React.ChangeEvent<HTMLInputElement>) {
    const rawValue = event.target.value;
    const cleanedValue = rawValue.replace(/\D/g, '');
  
    if (cleanedValue === '') {
      setValue('numero', 0, { shouldValidate: true, shouldDirty: true });
    } else {
      const numero = parseInt(cleanedValue, 10);
      setValue('numero', numero, { shouldValidate: true, shouldDirty: true });
    }
  }

  function Complemento(event: React.ChangeEvent<HTMLInputElement>) {
    const complemento = event.target.value;
    setValue('complemento', complemento, { shouldValidate: true, shouldDirty: true });
  }

  function Bairro(event: React.ChangeEvent<HTMLInputElement>) {
    const bairro = event.target.value;
    setValue('bairro', bairro, { shouldValidate: true, shouldDirty: true });
  }

  function Cidade(event: React.ChangeEvent<HTMLInputElement>) {
    const cidade = event.target.value;
    setValue('cidade', cidade, { shouldValidate: true, shouldDirty: true });
  }

  function UF(event: React.ChangeEvent<HTMLInputElement>) {
    const uf = event.target.value;
    setValue('uf', uf, { shouldValidate: true, shouldDirty: true });
  }


  function verifyCart() {
    if (items.length > 0) {
      return navigate('/pedidoFinalizado');
    } else {
      setisInvalid(true)
    }
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
                <img src={IconLocalization} alt="Ícone de Localização"/>
                <p><span>Endereço de Entrega</span><br></br> Informe o endereço onde deseja receber seu pedido</p>
              </FirstLeft>
              <SecondLeft>
                <form>
                  <div>
                    <input type="text" placeholder="CEP" maxLength={9} value={formattedCep} {...register('cep')} onChange={handleCepChange}/>
                    <Error>
                      {errors.cep && <p className='errors'>{errors.cep.message}</p>}
                    </Error>
                  </div>
                  <div>
                    <input type="text" placeholder="Rua" {...register('rua')} onChange={Rua}/>
                    {errors.rua && <p className='errors'>{errors.rua.message}</p>}
                  </div>
                  <div>
                    <section>
                      <input type="text" placeholder="Número" {...register('numero')} onChange={Numero}/>
                      {errors.numero && <p className='errors'>{errors.numero.message}</p>}
                    </section>
                    <section>
                      <input type="text" placeholder="Complemento" {...register('complemento')} onChange={Complemento}/>
                      {errors.complemento && <p className='errors'>{errors.complemento.message}</p>}
                    </section>
                  </div>
                  <div>
                    <section>
                      <input type="text" placeholder="Bairro" {...register('bairro')} onChange={Bairro}/>
                      {errors.bairro && <p className='errors'>{errors.bairro.message}</p>}
                    </section>
                    <section>
                      <input type="text" placeholder="Cidade" {...register('cidade')} onChange={Cidade}/>
                      {errors.cidade && <p className='errors'>{errors.cidade.message}</p>}
                    </section>
                    <section>
                      <input type="text" placeholder="UF" maxLength={2} {...register('uf')} onChange={UF}/>
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
                {items?.map((item) => (
                  <div key={item.id}>
                    <CoffeesContent>
                      <div className="first">
                        <img src={Coffeimage} className="ImageCoffee" alt="Imagem do Café"/>
                      </div>
                      <div className="second">
                        <h3>{item.Title}</h3>
                        <ContadorCheckout ItemId={item.id} />
                      </div>
                      <div className="third">
                        <p>R$ 9,90</p>
                      </div>
                    </CoffeesContent>
                    <hr style={{ display: "flex", width: '100%', marginTop: '1.5rem'}}/> 
                  </div>
                ))}
                {items.length === 0 && 
                  <Inexistente>
                    <p>Sem cafés selecionados...</p>
                  </Inexistente>
                }
              </div>
              <PrecoContainer>
                <div>
                  <p>Total de itens</p>
                  <p>R$ {items.reduce((total, item) => total + (item.quantiti * 9.9), 0).toFixed(2)}</p>
                </div>
                <div>
                  <p>Entrega</p>
                  <p>R$ 3.50</p>
                </div>
                <div>
                  <p>Total</p>
                  <p>R$ {(items.reduce((total, item) => total + (item.quantiti * 9.9), 0) + 3.5).toFixed(2)}</p>
                </div>
                <Button className="confirmarPedido" onClick={verifyCart}> 
                  Confirmar Pedido
                </Button>
              </PrecoContainer>
            </RightContent>
          </Right>
        </Checkout>
      </CheckoutContainer>
    </>
  );
}

export default CheckOut;
