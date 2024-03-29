/* Du plus vieux au plus récent */

export const projects = [
  {
    title: 'Nathalie Prenat',
    description: undefined,
    githubLink: undefined,
    projectLink: 'https://nathalieprenat.fr',
    technologies: ['JavaScript'],
    launchDate: 'Mai 2020',
    showInProjects: false,
    logo: undefined
  },
  {
    title: 'Twitch chanel points claimer',
    description: undefined,
    githubLink: 'https://github.com/ugo-prenat/Auto_Click_Twitch_Extension',
    projectLink:
      'https://chrome.google.com/webstore/detail/twitch-channel-points-aut/pcpdcimepgbgcaeaapkhllpompmmefod?hl=fr&authuser=0',
    technologies: ['JavaScript', 'Chrome extension'],
    launchDate: 'Janvier 2021',
    showInProjects: false,
    logo: undefined
  },
  {
    title: "Formation par l'innovation",
    description:
      "Formation Par l'Innovation est une entreprise d'enseignement offrant des prestations aux entreprises et écoles. En recherche de plus de visibilité, notre objectif a été de développer un site vitrine pour mettre en avant leur activité.",
    githubLink: 'https://github.com/ugo-prenat/FPI_startup_project',
    projectLink: 'https://fpi.digital',
    technologies: ['JavaScript'],
    launchDate: 'Octobre 2021',
    showInProjects: true,
    logo: require(`../assets/images/projects/fpi.png`) // Si pas de logo, en générer un avec la 1er lettre du title
  },
  {
    title: 'Le Jeu Pour Tous',
    description:
      "L'association Le Jeu Pour Tous est une association qui s’engage pour la reconnaissance du jeu en tant que pratique culturelle et populaire. En plus de sa ludothèque, l'association propose de nombreuses activités en île-de-france comme la \"ludo'mobile\" ou des ludothèques éphémères.",
    githubLink: 'https://github.com/ugo-prenat/theme_LJPT',
    projectLink: 'https://lejeupourtous.org',
    technologies: ['PHP', 'WordPress'],
    launchDate: 'Mai 2021',
    showInProjects: true,
    logo: require(`../assets/images/projects/ljpt.png`)
  },
  {
    title: "Cod'Ring",
    description:
      "La qualité de vie au travail étant au centre des préoccupations de plus en plus d'entreprises, l'objectif de Cod'ring est d'améliorer celle-ci en offrant une plateforme de bien-être et de suivi de performances",
    githubLink: 'https://github.com/ugo-prenat/codring',
    projectLink: undefined,
    technologies: [
      'React',
      'Node js',
      'express',
      'mongoDB',
      'Discord API',
      'Slack API'
    ],
    launchDate: undefined,
    showInProjects: true,
    logo: require(`../assets/images/projects/codring.png`)
  },
  {
    title: 'Play With Crypto',
    description:
      "Les cours des cryptomonnaies ne cessent de fluctuer et essayer de les prédire peut se révéler dangereux pour votre porte-monnaie. L'objectif de Play With Crypto est de vous permettre de jouer avec ces cours en ne misant que de l'argent fictif.",
    githubLink: 'https://github.com/ugo-prenat/play_with_crypto',
    projectLink: 'https://www.play-with-crypto.fr',
    technologies: [
      'React',
      'Node js',
      'express',
      'mongoDB',
      'Coinbase API',
      'Netlify',
      'Heroku'
    ],
    launchDate: 'Janvier 2022',
    showInProjects: true,
    logo: require(`../assets/images/projects/playWithCrypto.png`)
  },
  {
    title: 'Weber',
    description: undefined,
    githubLink: 'https://github.com/Dobrota-D/Weber',
    projectLink: 'https://weber-dev.netlify.app',
    technologies: [
      'React',
      'Node js',
      'express',
      'mongoDB',
      'Netlify',
      'Heroku'
    ],
    launchDate: 'Février 2022',
    showInProjects: false,
    logo: undefined
  },
  {
    title: 'Genely',
    description:
      'Pour le développement de leurs applications, il arrive souvent aux développeurs d’utiliser des composants déjà créés lors de précédents projets. L’objectif de Genely est d’offrir à ces développeurs la possibilité de sauvegarder et de partager ces composants génériques et réutilisables pour le développement de leurs futures applications.',
    githubLink: 'https://github.com/ugo-prenat/genely',
    projectLink: 'https://www.genely.dev',
    technologies: [
      'React',
      'Node js',
      'express',
      'mongoDB',
      'Netlify',
      'Heroku'
    ],
    launchDate: 'Juin 2022',
    showInProjects: true,
    logo: require(`../assets/images/projects/genely.png`)
  }
];
