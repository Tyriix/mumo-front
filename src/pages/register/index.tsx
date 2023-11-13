import { FC } from 'react'
import RegisterSection from '../../layout/register/RegisterSection'
import Header from '../../layout/header/Header';
import Footer from '../../layout/footer/Footer';

const Register: FC = () => {

  return (
    <>
    <Header />
    <RegisterSection/>
    <Footer isLoginRegister={true}/>
    </>
    )
  }
  
  export default Register;