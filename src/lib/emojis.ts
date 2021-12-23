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
  BARBER: '💈',
  BARBERSHOP: '💈',
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
  COMMUNITYEMPLOYMENT: '🫂 👨‍🏫',
  CONNACHT: '⚔ 🦅',
  CONNAUGHT: '⚔ 🦅',
  CORONAVIRUS: '🦠 💉',
  CORKNEWS: '📰 🍾',
  COVID: '🦠 💉',
  COVID19: '🦠 💉',
  COVIDTESTING: '🦠 🧪',
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
  DIESEL: '🛢 ⛽',
  DINOSAUR: '🦕 🦖',
  DIRECTINJECTION: '💉 🩹',
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
  HOMELESS: '🏚 ⛺',
  HORSE: '🐎 🦄',
  HORSES: '🐎 🦓',
  HORSERACING: '🏇 🎠',
  HOUSES: '🏡 🏘',
  HOUSING: '🏡 🏘',
  HURLING: '🏑 🏒',
  HIGHLIGHTS: '😂 🧞',
  IMPORTANT: '‼ ‼',
  INCIDENT: '💁 〰',
  INFRASTRUCTURE: '🛣 🛤',
  INVESTIGATION: '👮 🕵',
  IRELAND: '🇮🇪 ☘',
  IRELANDAM: '🇮🇪 🌅',
  IRISHNEWS: '🇮🇪 ☘',
  IRELANDPREMIUM: '🇮🇪 🍀',
  FLYTIPPING: '🪰 🗑',
  JOBS: '👷‍♀️ 👨‍🏫',
  KNOCKAIRPORT: '🛬 🛐',
  LEINSTER: '🎷 ✅',
  LIFESTYLE: '🧜‍♂️ 🧋',
  LIVEMUSIC: '👩‍🎤 👨‍🎤',
  LIVING: '🔱 🧑‍🤝‍🧑',
  LOCALNEWS: '🇮🇪 📢',
  LOTTO: '💸 🧾',
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
  NIGHTCLUBS: '💃 🕺',
  NORTHERNIRELAND: '🇬🇧 🍊',
  NORTHERNIRELANDNEWS: '🇬🇧 🍊',
  NORTHERNIRELANDPREMIUM: '🇬🇧 🥭',
  NUACHT: '📰 🍀',
  OIL: '🛢 ⛽',
  OMICRON: '🦠 💉',
  PERSONALFINANCE: '💶 💸',
  PETROL: '🛢 ⛽',
  PHOTO: '📷 🖼',
  PIC: '📷 🖼',
  PICTURE: '📷 🖼',
  PICTURES: '📸 🖼',
  PLANNING: '🪧 🏗',
  PLANNINGPERMISSION: '🪧 🏗',
  PROPERTY: '🏡 🏢',
  PUB: '🍻 🍸',
  PUBS: '🍻 🍸',
  QUIZ: '⁉ ㊙',
  RECALL: '⚠ 🚫',
  REVEALED: '🙈 🪆',
  ROBBERY: '🦹 👹',
  ROSE: '🌹 🏵',
  RNLI: '🚤 🚁',
  ROSEOFTRALEE: '🌹 🏵',
  RUGBY: '🏉',
  SANTA: '🧑‍🎄 🎅',
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
