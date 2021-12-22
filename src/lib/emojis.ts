const EmojiFy = (term: string): string => {
  term = term.replaceAll(' ', '').replaceAll('-', '').replaceAll('&', '')
  return EMOJIS[term as keyof typeof EMOJIS] ?? ''
}

const EMOJIS = {
  BABYNAMES: '👶 ㊗',
  BEAUTYSTYLE: '💄 👚',
  COVID: '🦠 💉',
  COVID19: '🦠 💉',
  CORONAVIRUS: '🦠 💉',
  PIC: '🖼',
  PHOTO: '🖼',
  PICTURE: '🖼',
  PICTURES: '🖼',
  NEWS: '📰',
  NUACHT: '📰',
  FOOTBALL: '⚽',
  SOCCER: '⚽',
  BOXING: '🥊',
  ENTERTAINMENT: '🎭',
  ALERT: '⚠ ‼',
  QUIZ: '⁉',
  HEALTH: '🧑‍⚕️',
  BUSINESS: '💼',
  HOME: '🏡',
  IRELAND: '🇮🇪',
  IRISHNEWS: '🇮🇪',
  LOCALNEWS: '🇮🇪',
  NATIONALNEWS: '🇮🇪',
  WATCH: '🎞',
  VIDEO: '🎞',
  BASKETBALL: '🏀',
  BASEBALL: '⚾',
  VOLLEYBALL: '🏐',
  RUGBY: '🏉',
  TENNIS: '🎾',
  CRICKET: '🏏',
  GOLF: '⛳',
  LIFESTYLE: '🧜‍♂️',
  NORTHERNIRELAND: '🇬🇧',
  NORTHERNIRELANDPREMIUM: '🇬🇧 💷',
  CELEBRITY: '🧜',
  CRIMECOURTS: '🦹 🧑‍⚖️',
  CRIMELAW: '🦹 👮',
  CRIME: '🦹',
  WEATHER: '🌦',
  MEMORYLANE: '🧓',
  BEEF: '🐂',
  HORSERACING: '🐎',
  SHEEP: '🐑',
  GAA: '🏐',
  COMMENT: '🙊',
  COMMUNITY: '❤',
}

export default EmojiFy
