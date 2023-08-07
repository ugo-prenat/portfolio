import React from 'react';

import css from '../../styles/about.module.css';
import me from '../../assets/images/me.jpeg';

export default function About() {
  return (
    <div className={`component ${css.component}`} id="about">
      <div className={css.container}>
        <div className={css.imgContainer}>
          <span className={css.colorFilter}></span>
          <img src={me} alt="pp" />
        </div>

        <div className={css.content}>
          <p className={css.title}>
            Je m'appelle <span>Ugo Prenat</span>
          </p>
          <p className={css.paragraph}>
            Passionné par le développement web depuis le lycée, je suis
            fraîchement diplômé de la{' '}
            <a
              href="https://codingfactory.fr/"
              target="_blank"
              rel="noreferrer"
            >
              Coding Factory by ESIEE-IT
            </a>
            . Ma formation m'a permis d'acquérir des compétences techniques tout
            en développant ma compréhension des enjeux du monde de l'entreprise,
            grâce à deux années d'alternance réalisées au Ministère des Armées
            et chez Canal+.
          </p>
          <p className={css.paragraph}>
            Toujours intéressé par l’apprentissage de nouvelles technologies, je
            m’intéresse depuis plus d'un an à la{' '}
            <a
              href="https://www.mongodb.com/mern-stack"
              target="_blank"
              rel="noreferrer"
            >
              stack MERN
            </a>{' '}
            qui me permet de créer des applications web fullstack sur mon temps
            libre.
          </p>
        </div>
      </div>
    </div>
  );
}
