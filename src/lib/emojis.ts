const EmojiFy = (term: string): string => {
  term = term
    .replaceAll(/\s/g, '')
    .replaceAll(/-/g, '')
    .replaceAll(/&/g, '')
    .replaceAll(/\?/g, '')
    .replaceAll(/’/g, '')
    .replaceAll(/'/g, '')
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
  CAP: '🕊 📜',
  CARBONBUDGET: '🌫 🤑',
  CARBONBUDGETS: '🌫 🤑',
  CELEBRITY: '🧜 🧟',
  CELEBS: '🧜 🧟',
  CHARITY: '⏳ 💶',
  CHRISTMAS: '🎄 🎅',
  CHRISTMASINLIMERICK: '🎄 🏰',
  CHRISTMASINMAYO: '🎄 🥈',
  CHRISTMASINNENAGH: '🎄 🏰',
  CHRISTMASSHOPPERS: '🎄 🎁',
  CHRISTMASSHOPPING: '🎄 🎁',
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
  DONUT: '🍩',
  DONUTS: '🍩 🍩',
  DRAMA: '🤯 🎭',
  DRINK: '🍻 🍷',
  DRUGS: '💉 💊',
  DUBLINAIRPORT: '🛬 🛫',
  EMERGENCYSERVICES: '🚑 🚒',
  FESTIVECELEBRATIONS: '🎄 🎉',
  ENTERTAINMENT: '🎭 🤹',
  FILM: '🎬 📽',
  FILMS: '🎬 📽🎶',
  FOOD: '🍲 🍱',
  FOOTBALL: '⚽ 🤸',
  GAA: '🏐 🤾',
  GOLF: '🏌 ⛳',
  HEALTH: '🧑‍⚕️ ⚕',
  HOME: '🏠 🏡',
  HORSE: '🐎 🦄',
  HORSES: '🐎 🦓',
  HORSERACING: '🏇 🎠',
  HOUSES: '🏡 🏘',
  HOUSING: '🏡 🏘',
  HURLING: '🏑 🏒',
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
  MARTAILARTS: '🤼 🥷',
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
  NEWYEARSEVE: '🎉 🕛',
  NORTHERNIRELAND: '🇬🇧 🍊',
  NORTHERNIRELANDNEWS: '🇬🇧 🍊',
  NORTHERNIRELANDPREMIUM: '🇬🇧 🥭',
  NUACHT: '📰 🍀',
  OMICRON: '🦠 💉',
  PERSONALFINANCE: '💶 💸',
  PHOTO: '📷 🖼',
  PIC: '📷 🖼',
  PICTURE: '📷 🖼',
  PICTURES: '📸 🖼',
  PLANNING: '🪧 🏗',
  PLANNINGPERMISSION: '🪧 🏗',
  PUB: '🍻 🍸',
  PUBS: '🍻 🍸',
  QUIZ: '⁉ ㊙',
  REVEALED: '🙈 🪆',
  ROBBERY: '🦹 👹',
  ROSE: '🌹 🏵',
  ROSEOFTRALEE: '🌹 🏵',
  RUGBY: '🏉',
  SHANNONAIRPORT: '✈ 🏢',
  SHEEP: '🐑',
  SOCCER: '⚽ 🥅',
  SPORT: '🤼 🤸',
  STUDENT: '🧑‍🎓 🧑‍🏫',
  STUDENTS: '🧑‍🎓👨‍🎓👩‍🎓',
  SUSTAINABILITY: '♻ 🐝',
  TENNIS: '🎾',
  THEFT: '🦹‍♂️ 🏦',
  TORCHED: '🔥 🧯',
  TRIBUTE: '🖖 🥂',
  ULSTER: '💅 ❌',
  VIDEO: '📹 🎞',
  VOLLEYBALL: '🏐',
  WATCH: '📹 🎞',
  WEATHER: '🌦',
  WTF: '🤷 🤦',
}

export default EmojiFy
