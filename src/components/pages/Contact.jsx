import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'

import css from '../../styles/contactPage.module.css'

export default function Contact() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [focus, setFocus] = useState('mail');
  
  useEffect(() => {
    document.title = 'Ugo Prenat - Contact'
  }, [])
  
  const onSubmit = async data => {
    console.log(data);
  }
  
  return (
    <div className={`component ${css.component}`}>
      <div className={css.formContainer}>
        <form onSubmit={handleSubmit(onSubmit)} className={css.form}>
          <p>Me contacter</p>
          
          <div className={`${css.inputGroup} ${errors.mail?.css.errorInputGroup} ${focus === 'mail' && 'active'}`} style={errors.mail && { borderColor: 'var(--error-color)' }}>
            <label style={errors.mail && {color: 'var(--error-color)'}}>Votre mail</label>
            <input {...register(
                "mail",
                { 
                    required: 'Mail obligatoire',
                    pattern: {
                        value: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/ ,
                        message: 'Mail invalide'
                    }
                }
            )}
            autoFocus
            onFocus={() => setFocus('mail')}
            onBlur={() => setFocus()}
            />
            { errors.email &&
                <div className={css.errorMsg}>
                    <svg viewBox="0 0 256 256"><path d="M128 20a108 108 0 1 0 108 108A108.1 108.1 0 0 0 128 20zm0 192a84 84 0 1 1 84-84a84.1 84.1 0 0 1-84 84zm-12-80V80a12 12 0 0 1 24 0v52a12 12 0 0 1-24 0zm28 40a16 16 0 1 1-16-16a16 16 0 0 1 16 16z" fill="currentColor"></path></svg>
                    <p>{ errors.email.message }</p>
                </div>
            }
          </div>
        
          <div className={`${css.inputGroup} ${errors.message?.css.errorInputGroup} ${focus === 'message' && 'active'}`} style={errors.message && { borderColor: 'var(--error-color)' }}>
            <label style={errors.message && {color: 'var(--error-color)'}}>Message</label>
            <textarea
                {...register('message',
                { required: 'Message obligatoire' })}
                type="text"
                name="message"
                onFocus={() => setFocus('message')}
                onBlur={() => setFocus()}
            />
            {errors.message &&
                <div className={css.errorMsg}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 286.1 286.1"><path d="M143 0C64 0 0 64 0 143c0 79 64 143 143 143 79 0 143-64 143-143C286.1 64 222 0 143 0zM143 259.2c-64.2 0-116.2-52-116.2-116.2S78.8 26.8 143 26.8s116.2 52 116.2 116.2S207.2 259.2 143 259.2zM143 62.7c-10.2 0-18 5.3-18 14v79.2c0 8.6 7.8 14 18 14 10 0 18-5.6 18-14V76.7C161 68.3 153 62.7 143 62.7zM143 187.7c-9.8 0-17.9 8-17.9 17.9 0 9.8 8 17.8 17.9 17.8s17.8-8 17.8-17.8C160.9 195.7 152.9 187.7 143 187.7z"/></svg>
                    <p>{errors.message && errors.message.message}</p>
                </div>
            }
          </div>
          
          <button>Envoyer</button>
        </form>
      </div>
    </div>
  )
}
