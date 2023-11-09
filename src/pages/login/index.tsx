import { FC } from 'react'
import LoginSection from '../../layout/login/LoginSection';
import Header from '../../layout/header/Header';
import Footer from '../../layout/footer/Footer';

const Login: FC = () => {
//   const refOffer = useRef<HTMLDivElement>(null)
  
  return (
    <>
    <Header />
      <LoginSection />
      <Footer isLoginRegister={true}/>
    </>
  )
}

export default Login;
