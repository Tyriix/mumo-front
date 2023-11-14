import { FC } from 'react'
import LoginSection from '../../layout/login/LoginSection';
import Header from '../../layout/header/Header';
import Footer from '../../layout/footer/Footer';

const Login: FC = () => {
  
  return (
    <>
    <Header />
      <LoginSection />
      <Footer isLoginRegister={true}/>
    </>
  )
}

export default Login;
