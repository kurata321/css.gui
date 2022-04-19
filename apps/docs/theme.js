const theme = {
  fonts: {
    body: 'Inter, system-ui, sans-serif',
    heading: 'Inter, system-ui, sans-serif',
    monospace: 'Menlo, monospace',
  },
  fontSizes: [
    '.75rem',
    '.875rem',
    '1rem',
    '1.25rem',
    '1.5rem',
    '2rem',
    '3rem',
    '4rem',
    '8rem',
  ],
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  // theme/1K6X9YICZ9m6SI1qiyIi
  colors: {
    background: '#ffffff',
    backgroundOffset: '#e6e6e6',
    text: '#000000',
    muted: '#696969',
    primary: '#4e4fec',
    primaryHover: '#4041c2',
    primaryActive: '#323297',
    link: '#0a67da',
    linkHover: '#0855b3',
    border: '#e6e6e6',
    inputBorder: '#cccccc',
    buttonBorder: '#000',
    logo: '#000000',
    modes: {
      light: {}, // Empty so it can be selected to get the default color mode
      dark: {
        background: '#000000',
        backgroundOffset: '#151515',
        text: '#ffffff',
        muted: '#818181',
        primary: '#6465ff',
        primaryHover: '#4e4fec',
        primaryActive: '#4041c2',
        link: '#237dec',
        linkHover: '#0a67da',
        border: 'rgba(255,255,255,.195)',
        inputBorder: 'rgba(255,255,255,.39)',
        buttonBorder: '#ffffff',
        logo: '#ffffff',
      },
      dimDark: {
        background: '#151515',
        backgroundOffset: '#3f3f3f',
        text: '#b3b3b3',
        muted: '#9a9a9a',
        primary: '#ffffff',
        primaryHover: '#cccccc',
        primaryActive: '#b3b3b3',
        link: '#237dec',
        linkHover: '#0a67da',
        border: '#2a2a2a',
        inputBorder: '#545454',
        buttonBorder: '#ffffff',
        logo: '#ffffff',
      },
      dimLight: {
        background: '#e6e6e6',
        backgroundOffset: '#cccccc',
        text: '#3f3f3f',
        muted: '#545454',
        primary: '#2a2a2a',
        primaryHover: '#151515',
        primaryActive: '#000000',
        link: '#237dec',
        linkHover: '#0a67da',
        border: '#b3b3b3',
        inputBorder: '#9a9a9a',
        buttonBorder: '#000',
        logo: '#000',
      },
      cream: {
        background: '#fffbe6',
        backgroundOffset: '#fdf4bd',
        text: '#272202',
        muted: '#7d7103',
        primary: '#4e4fec',
        primaryHover: '#4041c2',
        primaryActive: '#323297',
        link: '#0a67da',
        linkHover: '#0855b3',
        border: '#fbed93',
        inputBorder: '#f8e361',
        buttonBorder: '#f0d10f',
        logo: '#272202',
      },
      purple: {
        background: '#0d0517',
        backgroundOffset: '#240f42',
        text: '#e4d0ff',
        muted: '#974cff',
        primary: '#06b57a',
        primaryHover: '#008056',
        primaryActive: '#06b57a',
        link: '#74adf3',
        linkHover: '#9dc5f7',
        border: '#240f42',
        inputBorder: '#3b186c',
        buttonBorder: '#532297',
        logo: '#e4d0ff',
      },
      lightpurple: {
        background: '#e4d0ff',
        backgroundOffset: '#d0afff',
        text: '#3b186c',
        muted: '#9a0ea5',
        primary: '#6a2bc2',
        primaryHover: '#532297',
        primaryActive: '#3b186c',
        link: '#2b1f96',
        linkHover: '#1a0f59',
        border: '#d0afff',
        inputBorder: '#8280f1',
        buttonBorder: '#4038c8',
        logo: '#342ab1',
      },
      blue: {
        background: '#010b17',
        backgroundOffset: '#031e3e',
        text: '#eef5fe',
        muted: '#237dec',
        primary: '#74adf3',
        primaryHover: '#4c95f0',
        primaryActive: '#237dec',
        link: '#237dec',
        linkHover: '#e3edf5',
        border: '#031e3e',
        inputBorder: '#07428c',
        buttonBorder: '#237dec',
        logo: '#eef5fe',
      },
      lightblue: {
        background: '#eef5fe',
        backgroundOffset: '#c5ddfa',
        text: '#053065',
        muted: '#07428c',
        primary: '#0a67da',
        primaryHover: '#237dec',
        link: '#0a67da',
        linkHover: '#07428c',
        linkActive: '#053065',
        border: '#c5ddfa',
        inputBorder: '#74adf3',
        buttonBorder: '#053065',
        logo: '#010b17',
      },
    },
    'overlay-light': [
      'hsla(0, 0%, 100%, .95)',
      'hsla(0, 0%, 100%, .91)',
      'hsla(0, 0%, 100%, .85)',
      'hsla(0, 0%, 100%, .757)',
      'hsla(0, 0%, 100%, .68)',
      'hsla(0, 0%, 100%, .59)',
      'hsla(0, 0%, 100%, .5)',
      'hsla(0, 0%, 100%, .39)',
      'hsla(0, 0%, 100%, .29)',
      'hsla(0, 0%, 100%, .192)',
      'hsla(0, 0%, 100%, .11)',
      'hsla(0, 0%, 100%, .05)',
    ],
    'overlay-dark': [
      'hsla(0, 0%, 0%, 0.95)',
      'hsla(0, 0%, 0%, 0.91)',
      'hsla(0, 0%, 0%, 0.85)',
      'hsla(0, 0%, 0%, 0.757)',
      'hsla(0, 0%, 0%, 0.68)',
      'hsla(0, 0%, 0%, 0.59)',
      'hsla(0, 0%, 0%, 0.5)',
      'hsla(0, 0%, 0%, 0.39)',
      'hsla(0, 0%, 0%, 0.29)',
      'hsla(0, 0%, 0%, 0.195)',
      'hsla(0, 0%, 0%, 0.11)',
      'hsla(0, 0%, 0%, 0.05)',
    ],
    gray: [
      '#000000',
      '#151515',
      '#2a2a2a',
      '#3f3f3f',
      '#545454',
      '#696969',
      '#818181',
      '#9a9a9a',
      '#b3b3b3',
      '#cccccc',
      '#e6e6e6',
      '#ffffff',
    ],
    'slate-gray': [
      '#08090a',
      '#181c1f',
      '#292f34',
      '#394149',
      '#4a545e',
      '#5a6773',
      '#6f7c88',
      '#89949e',
      '#a3abb3',
      '#bdc3c8',
      '#d7dbde',
      '#f1f2f3',
    ],
    blue: [
      '#010b17',
      '#031e3e',
      '#053065',
      '#07428c',
      '#0855b3',
      '#0a67da',
      '#237dec',
      '#4c95f0',
      '#74adf3',
      '#9dc5f7',
      '#c5ddfa',
      '#eef5fe',
    ],
    indigo: [
      '#080817',
      '#161642',
      '#24246c',
      '#323297',
      '#4041c2',
      '#4e4fec',
      '#6465ff',
      '#8181ff',
      '#9d9eff',
      '#babaff',
      '#d6d7ff',
      '#f3f3ff',
    ],
    purple: [
      '#0d0517',
      '#240f42',
      '#3b186c',
      '#532297',
      '#6a2bc2',
      '#8235ec',
      '#974cff',
      '#aa6dff',
      '#bd8eff',
      '#d0afff',
      '#e4d0ff',
      '#f7f1ff',
    ],
    pink: [
      '#100111',
      '#330436',
      '#55085b',
      '#780b80',
      '#9a0ea5',
      '#bd11ca',
      '#d128dd',
      '#d950e4',
      '#e279ea',
      '#eba1f0',
      '#f3c9f7',
      '#fcf1fd',
    ],
    red: [
      '#190305',
      '#3f070c',
      '#650b13',
      '#8b0f1b',
      '#b11322',
      '#d71629',
      '#e83042',
      '#ec5665',
      '#f07c87',
      '#f5a2aa',
      '#f9c9cd',
      '#fdeff0',
    ],
    orange: [
      '#1c0a01',
      '#421802',
      '#682603',
      '#8b3304',
      '#a83d05',
      '#c44805',
      '#e05206',
      '#ef7432',
      '#f39d6e',
      '#f7bb9a',
      '#fbd7c4',
      '#fff3ed',
    ],
    gold: [
      '#140d00',
      '#2e1f03',
      '#483206',
      '#624409',
      '#7b5505',
      '#956702',
      '#ba8801',
      '#d9a81a',
      '#f0c45f',
      '#ffdc9a',
      '#ffe8bd',
      '#fff4e0',
    ],
    yellow: [
      '#141101',
      '#272202',
      '#393402',
      '#4c4503',
      '#5f5604',
      '#7d7103',
      '#bba402',
      '#f0d10f',
      '#f8e361',
      '#fbed93',
      '#fdf4bd',
      '#fffbe6',
    ],
    lime: [
      '#0d0f00',
      '#1a1f00',
      '#283000',
      '#394307',
      '#4b570f',
      '#637214',
      '#92ad09',
      '#b9dd0c',
      '#c7e43d',
      '#d6eb6f',
      '#e7f5a6',
      '#f8ffd9',
    ],
    green: [
      '#000e05',
      '#00240c',
      '#003a14',
      '#00511b',
      '#006923',
      '#02822d',
      '#1fb050',
      '#3fdb74',
      '#72f59e',
      '#9afaba',
      '#c1fcd5',
      '#e8fff0',
    ],
    teal: [
      '#000e0a',
      '#002016',
      '#003323',
      '#00452f',
      '#00573b',
      '#008056',
      '#06b57a',
      '#32c291',
      '#5dcfa8',
      '#89dec1',
      '#b4eeda',
      '#e0fff4',
    ],
    cyan: [
      '#001212',
      '#002b2b',
      '#004343',
      '#005454',
      '#006464',
      '#007474',
      '#009898',
      '#00c5c5',
      '#34d7d7',
      '#71e4e4',
      '#aef0f0',
      '#ebfdfd',
    ],
  },
  lineHeights: {
    heading: 1.25,
    body: 1.5,
  },
  styles: {
    root: {
      fontFamily: 'body',
      lineHeight: 'body',
    },
    h1: {
      mt: [5, 6],
      fontSize: [3, 4, 5],
      fontFamily: 'heading',
      fontWeight: 500,
      lineHeight: 'heading',
      color: 'tomato',
    },
    h2: {
      fontSize: [2, 3, 4],
      fontFamily: 'heading',
      fontWeight: 'heading',
      lineHeight: 'heading',
    },
    h3: {
      mt: 5,
      fontSize: [2, 2, 3],
      fontFamily: 'heading',
      fontWeight: 'heading',
      lineHeight: 'heading',
    },
    h4: {
      fontSize: 2,
      fontFamily: 'heading',
      fontWeight: 'heading',
      lineHeight: 'heading',
    },
    h5: {
      fontSize: 1,
      fontFamily: 'heading',
      lineHeight: 'heading',
    },
    h6: {
      fontSize: 0,
      fontFamily: 'heading',
      fontWeight: 'heading',
      lineHeight: 'heading',
    },
    hr: {
      border: 'thin solid #ccc',
      my: [3, 4, 5],
    },
    a: {
      color: 'primary',
      textDecoration: 'none',
    },
    p: {
      maxWidth: '34em',
      lineHeight: 'body',
      fontSize: 18,
    },
    pre: {
      backgroundColor: '#fafafa',
      color: '#111',
      p: 3,
    },
    li: {
      lineHeight: 'body',
    },
    img: {
      display: 'block',
      width: '100%',
      maxWidth: '48rem',
    },
    code: {
      fontSize: 14,
      maxWidth: '100%',
      overflow: 'scroll',
      display: 'block',
    },
  },
}

export default theme
