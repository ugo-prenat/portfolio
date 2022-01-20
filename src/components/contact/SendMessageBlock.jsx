import React from 'react';
import { Link } from 'react-router-dom';

import css from '../../styles/contact.module.css'

export default function SendMessageBlock() {
  return <div className={css.sendMsgBlock}>
    <p className={css.title}>Me contacter</p>
    <p className={css.description}>A la recherche d’un développeur pour<br/>un projet ou une offre d’emploi ?</p>
    <Link to='/contact'>Envoyer un message</Link>
  </div>;
}
