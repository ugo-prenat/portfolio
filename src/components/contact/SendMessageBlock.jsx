import React from 'react';

import css from '../../styles/contact.module.css'

export default function SendMessageBlock() {
  return <div className={css.sendMsgBlock}>
    <p className={css.title}>Me contacter</p>
    <p className={css.description}>À la recherche d’un développeur pour<br/>un projet ou une offre d’emploi ?</p>
    <a href='mailto:ugo.prenat@gmail.com'>Envoyer un message</a>
  </div>;
}
