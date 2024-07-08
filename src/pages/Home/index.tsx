import { Main } from './style';
import { Container } from '../../style/global';
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
          <h3>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</h3>
           <section>
            <div>
              <img src={PrimeiroDetail} alt="" />
              <p>Compra simples e segura</p>
             </div>
            <div>
              <img src={SegundoDetail} alt="" />
              <p>Entrega rápida e rastreada</p>
             </div>
            <div>
              <img src={TerceiroDetail} alt="" />
              <p>Embalagem mantém o café intacto</p>
             </div>
            <div>
              <img src={QuartoDetail} alt="" />
              <p>O café chega fresquinho até você</p>
             </div>
           </section>
        </div>
        <div className='right'>
          <img src={PrincipalImage} alt="Imagem Principal" />
        </div>
      </Main>
    </Container>
  );
}

export default Home;
