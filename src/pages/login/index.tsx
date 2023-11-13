import { FC } from 'react'
import LoginSection from '../../layout/login/LoginSection';
import Header from '../../layout/header/Header';
import Footer from '../../layout/footer/Footer';
import Wrapper from '../../components/wrappers/Wrapper';

const Login: FC = () => {
  
  return (
    <>
    <Wrapper>
    <Header />
      <LoginSection />
      <Footer isLoginRegister={true}/>
    </Wrapper>
    </>
  )
}

export default Login;
