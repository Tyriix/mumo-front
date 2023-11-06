import classnames from 'classnames';
import { FC } from 'react';
import { EmailDataForm } from '../ContactForm';
import { FieldErrors } from 'react-hook-form';
import './contact-form-field.scss'

interface Props {
  register: any;
  errors: FieldErrors<EmailDataForm>;
  fieldType: string;
  label: string;
  elementHTML: 'input' | 'textarea';
}

const ContactFormField: FC<Props> = ({
  register,
  errors,
  fieldType,
  label,
  elementHTML,
}) => {
  return (
    <>
      <label
        className='contact-form_label'
        htmlFor={`contact-form_${fieldType}`}
      >
        {`${label}`}
      </label>
      {elementHTML === 'input' ? (
        <input
          id={`contact-form_${fieldType}`}
          type={fieldType}
          {...register}
          className={classnames(
            'contact-form__input',
            errors.email && 'contact-form__input-alert-active'
          )}
        />
      ) : elementHTML === 'textarea' ? (
        <textarea
          id={`contact-form_${fieldType}`}
          className={classnames(
            'contact-form__textarea',
            errors.name && 'contact-form__textarea-alert-active'
          )}
          {...register}
        />
      ) : null}
      <div className='contact-form__error-container'>
        <span className='contact-form__error'>{errors.email?.message}</span>
      </div>
    </>
  );
};

export default ContactFormField;
