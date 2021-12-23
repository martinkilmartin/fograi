const EmojiFy = (term: string): string => {
  term = term
    .replaceAll(/\s/g, '')
    .replaceAll(/-/g, '')
    .replaceAll(/&/g, '')
    .replaceAll(/\?/g, '')
  return EMOJIS[term as keyof typeof EMOJIS] ?? ''
}

const EMOJIS = {
  ALERT: '⚠ ‼',
  BABYNAMES: '👶 ㊗',
  BASEBALL: '⚾',
  BASKETBALL: '🏀 ⛹',
  BEAUTYSTYLE: '💄 👚',
  BEEF: '🦬 🐂',
  BOXING: '🥊 🥊',
  BREAKINGNEWS: '🗣 💬',
  BREXIT: '🇬🇧 🇪🇺',
  BUSINESS: '💼 🏢',
  CARBONBUDGETS: '🌫 🤑',
  CELEBRITY: '🧜 🧟',
  CELEBS: '🧜 🧟',
  CHARITY: '⏳ 💶',
  CHRISTMASINLIMERICK: '🎄 🏰',
  CHRISTMASINMAYO: '🎄 🥈',
  CHRISTMASINNENAGH: '🎄 🏰',
  CINEMA: '🎬 📽',
  COLLISION: '💥 💫',
  COMMENT: '🙈🙉🙊',
  COMMUNITY: '🫂 👯',
  CONNACHT: '⚔ 🦅',
  CONNAUGHT: '⚔ 🦅',
  CORONAVIRUS: '🦠 💉',
  CORKNEWS: '📰 🍾',
  COVID: '🦠 💉',
  COVID19: '🦠 💉',
  CRASH: '💥 🚨',
  CRICKET: '🏏',
  CRIMECOURTS: '🦹 🧑‍⚖️',
  CRIMELAW: '🦹 👮',
  CRIME: '🦹 🦸',
  CULTURE: '🧐 🧛',
  DARTS: '🎯 🍺',
  DEATHANNOUNCED: '🪦 🗿',
  DEATHNOTICE: '🪦 🗿',
  DERRYNEWS: '📰 🧱',
  DERRYGAA: '🏐 🧱',
  DINOSAUR: '🦕 🦖',
  DISPUTESOLVER: '🤬 😤',
  DRAMA: '🤯 🎭',
  DRINK: '🍻 🍷',
  DUBLINAIRPORT: '🛬 🛫',
  EMERGENCYSERVICES: '🚑 🚒',
  FESTIVECELEBRATIONS: '🎄 🎉',
  ENTERTAINMENT: '🎭 🤹',
  FILM: '🎬 📽',
  FILMS: '🎬 📽🎶',
  FOOD: '🍲 🍱',
  FOOTBALL: '⚽',
  GAA: '🏐',
  GOLF: '🏌 ⛳',
  HEALTH: '🧑‍⚕️',
  HOME: '🏠 🏡',
  HORSE: '🐎',
  HORSES: '🐎 🐎',
  HORSERACING: '🏇 🎠',
  HOUSES: '🏡 🏘',
  HOUSING: '🏡 🏘',
  IMPORTANT: '‼ ‼',
  INCIDENT: '💁 〰',
  IRELAND: '🇮🇪 ☘',
  IRELANDAM: '🇮🇪 🌅',
  IRISHNEWS: '🇮🇪 ☘',
  IRELANDPREMIUM: '🇮🇪 🍀',
  KNOCKAIRPORT: '🛬 🛐',
  LEINSTER: '🎷 ✅',
  LOCALNEWS: '🇮🇪 📢',
  LIFESTYLE: '🧜‍♂️ 🧋',
  LIVING: '🔱 🧑‍🤝‍🧑',
  MACHINERY: '🚜 🚁',
  MAYO: '📰 🥈',
  MAYOGAA: '📰 🥈',
  MAYONEWS: '📰 🥈',
  MEMORYLANE: '🧓',
  MULTIMEDIA: '📼 📀',
  MUNSTER: '👑👑👑',
  MUSIC: '🧑‍🎤 🎶',
  MOVIE: '🎬 📽',
  MOVIES: '🎬 📽',
  MOVIENEWS: '🎬 📽',
  NATIONALNEWS: '🇮🇪 ☘',
  NEWS: '📰 📢',
  NORTHERNIRELAND: '🇬🇧 🍊',
  NORTHERNIRELANDPREMIUM: '🇬🇧 🥭',
  NUACHT: '📰 🍀',
  PERSONALFINANCE: '💶 💸',
  PHOTO: '📷 🖼',
  PIC: '📷 🖼',
  PICTURE: '📷 🖼',
  PICTURES: '📸 🖼',
  PLANNING: '🪧 🏗',
  PLANNINGPERMISSION: '🪧 🏗',
  QUIZ: '⁉ ㊙',
  REVEALED: '🙈 🪆',
  ROSE: '🌹 🏵',
  ROSEOFTRALEE: '🌹 🏵',
  RUGBY: '🏉',
  SHANNONAIRPORT: '✈ 🏢',
  SHEEP: '🐑',
  SOCCER: '⚽ 🥅',
  SPORT: '🤼 🤸',
  TENNIS: '🎾',
  THEFT: '🦹‍♂️ 🏦',
  TRIBUTE: '🖖 🥂',
  ULSTER: '💅 ❌',
  VIDEO: '📹 🎞',
  VOLLEYBALL: '🏐',
  WATCH: '📹 🎞',
  WEATHER: '🌦',
  WTF: '🤷 🤦',
}

export default EmojiFy
