import { FC, useRef } from 'react'
import RegisterSection from '../../layout/register/RegisterSection'

const Register: FC = () => {
  const refOffer = useRef<HTMLDivElement>(null)

  return (
    <>
    <RegisterSection/>
    </>
    )
  }
  
  export default Registerpage;