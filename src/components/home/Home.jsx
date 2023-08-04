import React, { useRef } from 'react';
import Typical from 'react-typical';
import { HashLink as Link } from 'react-router-hash-link';

import css from '../../styles/home.module.css';

import Numbers from './Numbers';

export default function Home() {
  const ref = useRef(null);

  return (
    <div className={`component ${css.component}`} ref={ref}>
      <h1 className={css.title}>
        <p>Développeur</p>
        <Typical
          steps={['web', 1000, 'mobile', 1000, 'agile', 1000]}
          loop={Infinity}
          wrapper="span"
        />
      </h1>

      <p className={css.description}>
        Passionné par le développement web et fraîchement diplômé,
        <br />
        je suis à la recherche d'opportunités professionnelles.
      </p>

      <div className={css.btns}>
        <Link to="/#projets" className={`${css.btn} ${css.primaryBtn}`}>
          Jeter un coup d'oeil
        </Link>
        <Link to="/#contact" className={`${css.btn} ${css.secondaryBtn}`}>
          Me contacter
        </Link>
      </div>

      <Numbers data={ref} />
    </div>
  );
}
