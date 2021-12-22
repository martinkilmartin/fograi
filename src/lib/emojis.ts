const EmojiFy = (term: string): string => {
  term = term
    .replaceAll(' ', '')
    .replaceAll('-', '')
    .replaceAll('&', '')
    .replaceAll('?', '')
  return EMOJIS[term as keyof typeof EMOJIS] ?? ''
}

const EMOJIS = {
  ALERT: '⚠ ‼',
  BABYNAMES: '👶 ㊗',
  BASEBALL: '⚾',
  BASKETBALL: '🏀',
  BEAUTYSTYLE: '💄 👚',
  BEEF: '🐂',
  BOXING: '🥊',
  BUSINESS: '💼',
  CELEBRITY: '🧜',
  CELEBS: '🧜',
  COMMENT: '🙊',
  COMMUNITY: '❤',
  COVID: '🦠 💉',
  COVID19: '🦠 💉',
  CORONAVIRUS: '🦠 💉',
  CRICKET: '🏏',
  CRIMECOURTS: '🦹 🧑‍⚖️',
  CRIMELAW: '🦹 👮',
  CRIME: '🦹',
  ENTERTAINMENT: '🎭',
  FOOTBALL: '⚽',
  GAA: '🏐',
  GOLF: '⛳',
  HEALTH: '🧑‍⚕️',
  HOME: '🏡',
  HORSERACING: '🐎',
  IRELAND: '🇮🇪',
  IRISHNEWS: '🇮🇪',
  LOCALNEWS: '🇮🇪',
  LIFESTYLE: '🧜‍♂️',
  MEMORYLANE: '🧓',
  NATIONALNEWS: '🇮🇪',
  NEWS: '📰',
  NORTHERNIRELAND: '🇬🇧',
  NORTHERNIRELANDPREMIUM: '🇬🇧 💷',
  NUACHT: '📰',
  PERSONALFINANCE: '💶 💸',
  PIC: '🖼',
  PHOTO: '🖼',
  PICTURE: '🖼',
  PICTURES: '🖼',
  QUIZ: '⁉',
  RUGBY: '🏉',
  SHEEP: '🐑',
  SOCCER: '⚽',
  TENNIS: '🎾',
  VIDEO: '🎞',
  VOLLEYBALL: '🏐',
  WATCH: '🎞',
  WEATHER: '🌦',
  WTF: '🤦 🤷',
}

export default EmojiFy
