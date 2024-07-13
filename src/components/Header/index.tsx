import { useCounter } from '../../hooks/useCounter'
import { HeaderContainer, Internal, DivCart, LogoSection } from './style'
import Logo from '../../images/Logo.svg'
import IconLcal from '../../images/IconRoxo.svg'
import YellowCart from '../../images/IconCard_yellow.svg'

export const Header = () => {
 const { items } = useCounter()

 return (
  <>
   <div style={{ width: '100%', marginBottom: '5.75rem' }}>
    <HeaderContainer>
     <Internal>
      <LogoSection to='/'>
       <img src={Logo} alt="" />
      </LogoSection>
      <section>
       <div>
        <img src={IconLcal} alt="" />
        <p>Porto Alegre, RS</p>
       </div>
       <DivCart to='/checkout'>
        <img src={YellowCart} alt="" />
        <section>
        <p>{items.length}</p>
        </section>
        </DivCart>
      </section>
     </Internal>
    </HeaderContainer>
   </div>
  </>
 )
}