import React, { FC } from 'react'
import { Form } from 'react-router-dom';
import './contact-form.scss'
interface Props {
    onSubmit: (data: FormData) => void;
}

export interface FormData {
    name: string,
    email: string,
    message: string
}

const ContactForm: FC<Props> = ({ onSubmit }) =>{
    
    const [formData, setFormData] = React.useState<FormData>({name: '', email: '', message: ''})

    function handleInputChange(event: React.ChangeEvent<HTMLInputElement>){
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value})
    }

    function handleSubmit(event: React.FormEvent<HTMLFormElement>){
        event.preventDefault();
        onSubmit(formData);
    }

    return(    
        <Form className='form' onSubmit={handleSubmit} method='post'>
            <div className='form__container'>
            <input type='text' name="name" placeholder='Imię' value={formData.name} onChange={handleInputChange} />
            <input type='text' name='email' placeholder='Email' value={formData.email} onChange={handleInputChange}/>
            <input type='text' name='message' className='input__message' value={formData.message} onChange={handleInputChange}/>
            <div className='checkbox__row'>
            <input type='checkbox' name='dataProcessing' className='input__checkbox' /> <label className='checkbox__label'>Wyrażam zgodę na przetwarzanie moich danych osobowych w celu udzielenia odpowiedzi na składaną wiadomość.</label>
            </div>
            </div>
            <button type='submit' className='form__button'>Wyślij</button>
        </Form>
    )
}

export default ContactForm;