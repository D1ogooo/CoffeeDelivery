import { FirstSectionInSection, Main, SecondSectionInSection, Coffees, Tipos } from './style';
import { Container } from '../../style/global';
import { Contador } from '../../components/Contador';
import { CoffeeDatabase } from '../../database/db';
import PrincipalImage from '../../images/princpalImage.svg';
import PrimeiroDetail from '../../images/IconCard_white.svg'
import SegundoDetail from '../../images/relogio_icon.svg'
import TerceiroDetail from '../../images/embalagem_icon.svg'
import QuartoDetail from '../../images/cafe_icon.svg'

function Home() {
  return (
    <Container>
      <Main>
        <div className="left">
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <h3>Com o Coffee Delivery você recebe seu café onde estiver, a <br></br>qualquer hora</h3>
           <section>
            <FirstSectionInSection>
             <div>
              <img src={PrimeiroDetail} alt="" />
              <p>Compra simples e segura</p>
             </div>
             <div>
              <img src={SegundoDetail} alt="" />
              <p>Entrega rápida e rastreada</p>
             </div>
            </FirstSectionInSection>
            <SecondSectionInSection>
              <div>
               <img src={TerceiroDetail} alt="" />
               <p>Embalagem mantém o café intacto</p>
              </div>
              <div>
               <img src={QuartoDetail} alt="" />
               <p>O café chega fresquinho até você</p>
              </div>
            </SecondSectionInSection>
          </section>
        </div>
        <div className='right'>
         <img src={PrincipalImage} alt="Imagem Principal" />
        </div>
      </Main>
      <Coffees>
        <section className='firstSection'>
         <h1>Nossos cafés</h1>
        </section>

        <section id='principalSection'>
          {CoffeeDatabase.map((card) => (
           <div key={card.id} className='card'>
            <img src={card.img} alt="" className='coffee_image'/>
             <Tipos>
              {card.tipo && <p className='primeirotipo'>{card.tipo}</p>}
              {card.segundoTipo && <p className='segundotipo'>{card.segundoTipo}</p>}
              {card.terceiroTipo && <p className='terceirotipo'>{card.terceiroTipo}</p>}
             </Tipos>
            <h2>{card.title}</h2>
            <h3>{card.explicacao}</h3>
            <Contador Posicao={String(card.id)}/>
           </div>
          ))}
        </section>
      </Coffees>
    </Container>
  );
}

export default Home;
