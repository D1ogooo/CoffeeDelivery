import { HeaderContainer, Internal } from './style'
import Logo from '../../images/Logo.svg'
import IconLcal from '../../images/Icon_local.svg'
import YellowCart from '../../images/IconCard_yellow.svg'



export const Header = () => {
 return (
  <>
   <div style={{ width: '100%', marginBottom: '5.75rem' }}>
    <HeaderContainer>
     <Internal>
      <section>
       <img src={Logo} alt="" />
      </section>
      <section>
       <div>
        <img src={IconLcal} alt="" />
        <p>Porto Alegre, RS</p>
       </div>
       <div>
        <img src={YellowCart} alt="" />
       </div>
      </section>
     </Internal>
    </HeaderContainer>
   </div>
  </>
 )
}