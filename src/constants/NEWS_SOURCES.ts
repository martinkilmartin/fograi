import { NewsSource } from 'src/types/NewsSource';

export const CANewsSources = new Map<string, NewsSource>([
  [
    'CA_LDVR',
    {
      name: 'Le Devoir',
      url: 'https://www.ledevoir.com/',
      est: 1910,
      about:
        "Le Devoir est un journal quotidien indépendant basé au Québec. Il se consacre à fournir les actualités les plus récentes et pertinentes, couvrant une gamme diversifiée de sujets allant de la politique locale et internationale à la culture, l'éducation et bien plus encore. Le Devoir est reconnu pour son journalisme d'investigation approfondi et son engagement envers l'intégrité et la transparence.",
      emos: ['📰', '🇨🇦'],
      logo: '/img/ns/CA_LDVR.svg',
      langs: ['fr'],
      tags: [
        'LeDevoir',
        'NouvellesQuébec',
        'NouvellesCanada',
        'JournalIndépendant',
        'NouvellesLocales',
        'NouvellesNationales',
        'Culture',
        'Éducation',
        'JournalismeInvestigation',
      ],
      socials: {
        facebook: 'http://www.facebook.com/ledevoir',
        twitter: 'https://twitter.com/LeDevoir',
        instagram: 'https://www.instagram.com/ledevoir/',
        youtube: 'https://www.youtube.com/@ledevoir',
        linkedin: 'https://www.linkedin.com/company/le-devoir/',
      },
      headerBG: '#fff',
      primaryColor: '#333',
    },
  ],
  [
    'CA_QCTO',
    {
      name: 'The Quebec Chronicle Telegraph',
      url: 'https://www.qctonline.com/',
      est: 1764,
      about:
        'The Quebec Chronicle-Telegraph, distinguished as the oldest newspaper in North America, continues to be an authoritative source of news and information. Covering a broad array of topics, from politics, business, and culture to local events and lifestyle, it provides the Quebec community and beyond with valuable insights and engaging stories.',
      emos: ['📰', '🇨🇦'],
      logo: '/img/ns/CA_QCTO.png',
      langs: ['en', 'fr'],
      tags: [
        'QuebecChronicleTelegraph',
        'News',
        'QuebecNews',
        'CanadaNews',
        'Politics',
        'Business',
        'Culture',
        'LocalEvents',
      ],
      socials: {
        email: 'mailto:info@qctonline.com',
        facebook: 'https://www.facebook.com/qctonline',
        twitter: 'https://twitter.com/QCTonline',
      },
      headerBG: '#fff',
      primaryColor: '#996600',
    },
  ],
  [
    'CA_TRTS',
    {
      name: 'Toronto Star',
      url: 'https://www.thestar.com/',
      est: 1892,
      about:
        "The Toronto Star, one of Canada's leading news platforms, consistently delivers insightful and relevant news to a global audience. With coverage that spans local events, national affairs, and international stories, it remains dedicated to upholding journalistic integrity while informing and engaging its readers.",
      emos: ['📰', '🇨🇦'],
      logo: '/img/ns/CA_TRTS.svg',
      langs: ['en'],
      tags: [
        'TorontoStar',
        'News',
        'CanadaNews',
        'InternationalNews',
        'LocalEvents',
        'NationalAffairs',
      ],
      socials: {
        email: 'mailto:city@thestar.ca',
        facebook: 'https://www.facebook.com/torontostar',
        twitter: 'https://twitter.com/torontostar',
        youtube: 'https://www.youtube.com/TorontoStar',
        instagram: 'https://www.instagram.com/thetorontostar/',
        linkedin: 'https://www.linkedin.com/company/toronto-star/',
      },
      headerBG: '#fff',
      primaryColor: '#0060df',
    },
  ],
  [
    'CA_TGAM',
    {
      name: 'The Globe And Mail',
      url: 'https://www.theglobeandmail.com/',
      est: 1844,
      about:
        "The Globe And Mail, Canada's foremost news media company, continuously engages Canadians with comprehensive coverage on news, politics, business, investing, and lifestyle topics. Known for its in-depth analysis and high journalistic standards, it is an authoritative source for national and international news.",
      emos: ['📰', '🇨🇦'],
      logo: '/img/ns/CA_TGAM.svg',
      langs: ['en'],
      tags: [
        'TheGlobeAndMail',
        'News',
        'CanadaNews',
        'InternationalNews',
        'Politics',
        'Business',
        'Investing',
        'Lifestyle',
      ],
      socials: {
        email: 'mailto:newsroom@globeandmail.com',
        facebook: 'https://www.facebook.com/theglobeandmail',
        twitter: 'https://twitter.com/globeandmail',
        instagram: 'https://instagram.com/globeandmail',
        linkedin: 'https://www.linkedin.com/company/the-globe-and-mail',
        youtube: 'https://www.youtube.com/user/TheGlobeandMail',
        tiktok: 'https://www.tiktok.com/@globeandmail',
        snapchat:
          'https://story.snapchat.com/p/f9c37a38-b555-4c37-a97a-598423457108',
      },
      headerBG: '#da161f',
      primaryColor: '#333',
    },
  ],
  [
    'CA_LPRS',
    {
      name: 'La Presse',
      url: 'https://www.lapresse.ca/',
      est: 1884,
      about:
        "La Presse se dédie à la production d'information de qualité, accessible gratuitement à un large public. Comme l'un des journaux les plus influents au Canada, elle offre une variété de contenus couvrant l'actualité locale et mondiale, la politique, les arts, les sports et bien plus encore. Elle reste engagée envers l'intégrité journalistique, la rigueur éditoriale et l'innovation technologique.",
      emos: ['📰', '🇨🇦'],
      logo: '/img/ns/CA_LPRS.svg',
      langs: ['fr'],
      tags: [
        'LaPresse',
        'NouvellesCanadiennes',
        'PresseLocale',
        'NouvellesMondiales',
        'InformationGratuite',
        'IntégritéJournalistique',
      ],
      socials: {
        email: 'mailto:enquetes@lapresse.ca',
        facebook: 'https://fr-ca.facebook.com/LaPresseFB/',
        twitter: 'https://twitter.com/lp_lapresse',
        linkedin: 'https://ca.linkedin.com/company/la-presse',
        instagram: 'https://www.instagram.com/lp_lapresse/?hl=fr-ca',
      },
      headerBG: '#ED1C23',
      primaryColor: '#ED1C23',
    },
  ],
  [
    'CA_JMTL',
    {
      name: 'Le Journal de Montréal',
      url: 'https://www.journaldemontreal.com/',
      est: 1964,
      about:
        "Le Journal de Montréal est une publication de premier plan offrant des nouvelles complètes et accessibles dans divers domaines. Qu'il s'agisse de sports, de politique, de spectacles, de finance ou de judiciaire, ce journal assure une couverture approfondie pour garder son lectorat bien informé. L'accent est mis sur la présentation de l'information de manière claire et concise, ce qui le rend populaire parmi un large éventail de lecteurs.",
      emos: ['📰', '🇨🇦'],
      logo: '/img/ns/CA_JMTL.svg',
      langs: ['fr'],
      tags: [
        'LeJournalDeMontréal',
        'NouvellesCanadiennes',
        'InformationLocale',
        'Sport',
        'Politique',
        'Spectacles',
        'Finance',
        'Juridique',
      ],
      socials: {
        email: 'mailto:jdm.info@quebecormedia.com',
        facebook: 'https://www.facebook.com/jdemontreal',
        twitter: 'https://twitter.com/JdeMontreal',
        instagram: 'https://www.instagram.com/jdemontreal/',
        apple:
          'https://apps.apple.com/ca/app/journal-de-montr%C3%A9al/id6444195089',
        android:
          'https://play.google.com/store/apps/details?id=com.quebecormedia.journaldemontreal',
        linkedin: 'https://www.linkedin.com/company/jdemontreal/',
      },
      headerBG: '#E32402',
      primaryColor: '#E32402',
    },
  ],
  [
    'CA_MTGZ',
    {
      name: 'Montreal Gazette',
      url: 'https://montrealgazette.com/',
      est: 1778,
      about:
        'The Montreal Gazette is a trusted source for both national and international news. Committed to delivering accurate, insightful, and up-to-date reporting, the newspaper covers a broad range of topics from breaking news, events, to in-depth features. As one of the oldest newspapers in Canada, the Montreal Gazette continues to keep its readers informed about important happenings both locally and globally.',
      emos: ['📰', '🇨🇦'],
      logo: '/img/ns/CA_MTGZ.svg',
      langs: ['en'],
      tags: [
        'MontrealGazette',
        'CanadianNews',
        'LocalNews',
        'InternationalNews',
        'BreakingNews',
        'Events',
        'Features',
      ],
      socials: {
        facebook: 'https://www.facebook.com/montrealgazette/',
        twitter: 'https://twitter.com/mtlgazette',
        youtube: 'https://www.youtube.com/user/themontrealgazette',
        instagram: 'https://www.instagram.com/montrealgazette/',
        linkedin: 'https://www.linkedin.com/company/the-montreal-gazette/',
      },
      headerBG: '#fff',
      primaryColor: '#016ea5',
    },
  ],
  [
    'CA_VSUN',
    {
      name: 'Vancouver Sun',
      url: 'https://vancouversun.com/',
      est: 1912,
      about:
        'Vancouver Sun brings the latest national and international news right at your fingertips. Offering comprehensive coverage on a variety of topics, including politics, business, entertainment, sports, and more, it ensures that its readers are always updated with events and happenings from around the globe.',
      emos: ['📰', '🇨🇦'],
      logo: '/img/ns/CA_VSUN.svg',
      langs: ['en'],
      tags: [
        'VancouverSun',
        'CanadianNews',
        'InternationalNews',
        'NewsUpdates',
        'BreakingNews',
        'Entertainment',
        'Sports',
        'Politics',
        'Business',
      ],
      socials: {
        facebook: 'https://www.facebook.com/VancouverSun/',
        twitter: 'https://twitter.com/VancouverSun',
        youtube: 'https://www.youtube.com/user/VancouverSunOnline',
        instagram: 'https://www.instagram.com/thevancouversun/',
      },
      headerBG: '#fff',
      primaryColor: '#2f6450',
    },
  ],
  [
    'CA_TPRV',
    {
      name: 'The Province',
      url: 'https://theprovince.com/',
      est: 1898,
      about:
        'The Province is committed to bringing the latest breaking news, updates, and headlines from national and international events. Covering diverse topics such as politics, sports, entertainment, and business, it ensures that its readers are always informed and engaged.',
      emos: ['📰', '🇨🇦'],
      logo: '/img/ns/CA_TPRV.svg',
      langs: ['en'],
      tags: [
        'TheProvince',
        'CanadianNews',
        'InternationalNews',
        'NewsUpdates',
        'BreakingNews',
        'Entertainment',
        'Sports',
        'Politics',
        'Business',
      ],
      socials: {
        facebook: 'https://www.facebook.com/TheProvince',
        twitter: 'https://twitter.com/theprovince',
      },
      headerBG: '#0073AD',
      primaryColor: '#0073AD',
    },
  ],
  [
    'CA_NPST',
    {
      name: 'National Post',
      url: 'https://nationalpost.com/',
      est: 1998,
      about:
        'The National Post is a Canadian English-language newspaper that caters to a nationwide readership. Known for its fresh take on news, it covers national and international events, politics, sports, business, health, technology, and culture. The National Post has established itself as a leading voice in Canadian journalism, providing its readers with thought-provoking insights and comprehensive reportage.',
      emos: ['📰', '🇨🇦'],
      logo: '/img/ns/CA_NPST.svg',
      langs: ['en'],
      tags: [
        'NationalPost',
        'CanadianNews',
        'InternationalNews',
        'Politics',
        'Sports',
        'Business',
        'Health',
        'Technology',
        'Culture',
      ],
      socials: {
        instagram: 'https://www.instagram.com/nationalpost/',
        facebook: 'https://www.facebook.com/NationalPost/',
        youtube: 'https://www.youtube.com/user/nationalpost',
        twitter: 'https://twitter.com/nationalpost',
        linkedin: 'https://www.linkedin.com/company/national-post-inc.',
      },
      headerBG: '#ffcd05',
      primaryColor: '#333',
    },
  ],
  [
    'CA_CLHD',
    {
      name: 'Calgary Herald',
      url: 'https://calgaryherald.com/',
      est: 1883,
      about:
        'Read latest breaking news, updates, and headlines on national and international events & more.',
      emos: ['📰', '🇨🇦'],
      logo: '/img/ns/CA_CLHD.svg',
    },
  ],
  [
    'CA_OTCZ',
    {
      name: 'Ottawa Citizen',
      url: 'https://ottawacitizen.com/',
      est: 1845,
      about:
        'Read latest breaking news, updates, and headlines on national and international events & more.',
      emos: ['📰', '🇨🇦'],
      logo: '/img/ns/CA_OTCZ.svg',
    },
  ],
  [
    'CA_EDJL',
    {
      name: 'Edmonton Journal',
      url: 'https://edmontonjournal.com/',
      est: 1903,
      about:
        'Read latest breaking news, updates, and headlines on national and international events & more.',
      emos: ['📰', '🇨🇦'],
      logo: '/img/ns/CA_EDJL.svg',
    },
  ],
  [
    'CA_TSUN',
    {
      name: 'Toronto Sun',
      url: 'https://torontosun.com/',
      est: 1971,
      about:
        'Read latest breaking news, updates, and headlines on national and international events & more.',
      emos: ['📰', '🇨🇦'],
      logo: '/img/ns/CA_TSUN.svg',
    },
  ],
  [
    'CA_LSOL',
    {
      name: 'Le Soleil',
      url: 'https://www.lesoleil.com/',
      est: 1896,
      about:
        "Actualités, Chroniques, Affaires, Arts, Le Mag, Sports, Hockey junior, Opinions, Protégez-Vous, Nos recommandations, Jeunesse, Maison, Auto, Balados, ULaval Nouvelles, La Vitrine, ZONE, Je m'abonne, Événements Le Soleil.",
      emos: ['📰', '🇨🇦'],
      logo: '/img/ns/CA_LSOL.svg',
    },
  ],
  [
    'CA_SPEC',
    {
      name: 'The Hamilton Spectator',
      url: 'https://www.thespec.com/',
      est: 1846,
      about:
        'Daily breaking news, local stories, life, opinion, voices from the community, events and more.',
      emos: ['📰', '🇨🇦'],
      logo: '/img/ns/CA_SPEC.svg',
    },
  ],
  [
    'CA_TCOL',
    {
      name: 'The Times Colonist',
      url: 'https://www.timescolonist.com/',
      est: 1858,
      about:
        "Chronicled the history of Victoria and Vancouver Island from the gold rush days of the 1850s to Victoria's present status. Lively blend of local news and informed commentary.",
      emos: ['📰', '🇨🇦'],
      logo: '/img/ns/CA_TCOL.svg',
    },
  ],
  [
    'CA_LFRP',
    {
      name: 'The London Free Press',
      url: 'https://lfpress.com/',
      est: 1849,
      about:
        'Read latest breaking news, updates, and headlines on national and international events & more.',
      emos: ['📰', '🇨🇦'],
      logo: '/img/ns/CA_LFRP.svg',
    },
  ],
  [
    'CA_WNST',
    {
      name: 'Windsor Star',
      url: 'https://windsorstar.com/',
      est: 1888,
      about:
        'Read latest breaking news, updates, and headlines on national and international events & more.',
      emos: ['📰', '🇨🇦'],
      logo: '/img/ns/CA_WNST.svg',
    },
  ],
  [
    'CA_EDSN',
    {
      name: 'Edmonton Sun',
      url: 'https://edmontonsun.com/',
      est: 1978,
      about:
        'Read latest breaking news, updates, and headlines on national and international events & more.',
      emos: ['📰', '🇨🇦'],
      logo: '/img/ns/CA_EDSN.svg',
    },
  ],
  [
    'CA_TREC',
    {
      name: 'Waterloo Region Record',
      url: 'https://www.therecord.com',
      est: 1878,
      about:
        'Daily breaking news, local stories, life, opinion, voices from the community, events and more.',
      emos: ['📰', '🇨🇦'],
      logo: '/img/ns/CA_TREC.svg',
    },
  ],
  [
    'CA_SPHX',
    {
      name: 'The StarPhoenix',
      url: 'https://thestarphoenix.com/',
      est: 1902,
      about:
        'Read latest breaking news, updates, and headlines on national and international events & more.',
      emos: ['📰', '🇨🇦'],
      logo: '/img/ns/CA_SPHX.svg',
    },
  ],
  [
    'CA_CSUN',
    {
      name: 'Calgary Sun',
      url: 'https://calgarysun.com/',
      est: 1980,
      about:
        'Read latest breaking news, updates, and headlines on national and international events & more.',
      emos: ['📰', '🇨🇦'],
      logo: '/img/ns/CA_CSUN.svg',
    },
  ],
  [
    'CA_RLPT',
    {
      name: 'Regina Leader-Post',
      url: 'https://leaderpost.com/',
      est: 1883,
      about:
        'Read latest breaking news, updates, and headlines on national and international events & more.',
      emos: ['📰', '🇨🇦'],
      logo: '/img/ns/CA_RLPT.svg',
    },
  ],
  [
    'CA_LCDS',
    {
      name: 'Le Courrier du Sud',
      url: 'https://www.lecourrierdusud.ca/',
      est: 1947,
      about:
        "Le Courrier du Sud, appartenant à Gravité Media, est un journal hebdomadaire distribué gratuitement. Il offre une couverture complète de l'actualité locale et régionale dans la région de Longueuil, notamment les nouvelles de la communauté, la politique, les événements culturels, les sports et plus encore.",
      emos: ['📰', '🇨🇦'],
      logo: '/img/ns/CA_LCDS.svg',
      langs: ['fr'],
      tags: [
        'LeCourrierDuSud',
        'ActualitéLocale',
        'Longueuil',
        'JournalHebdomadaire',
        'GravitéMedia',
        'NouvellesCommunauté',
        'Politique',
        'Culture',
        'Sports',
      ],
      socials: {
        email: 'mailto:redactioncd@gravitemedia.com',
        facebook: 'https://www.facebook.com/lecourrierdusud/',
        twitter: 'http://twitter.com/LeCourrierDuSud',
      },
      headerBG: '#fff',
      primaryColor: '#d64c99',
    },
  ],
  [
    'CA_NIND',
    {
      name: 'CanIndia News',
      url: 'https://www.canindia.com/',
      est: 1999,
      about:
        'CanIndia News provides a unique perspective, representing the viewpoint of the South Asian community in Canada. It covers a broad range of topics including current events, business, sports, and entertainment, with a special focus on issues and stories relevant to the South Asian diaspora. Through its insightful coverage, CanIndia News serves as a crucial link connecting the South Asian community with wider Canadian society.',
      emos: ['📰', '🇨🇦'],
      logo: '/img/ns/CA_NIND.png',
      langs: ['en'],
      tags: [
        'CanIndiaNews',
        'SouthAsianNews',
        'CanadianNews',
        'DiasporaNews',
        'CurrentEvents',
        'BusinessNews',
        'EntertainmentNews',
      ],
      socials: {
        email: 'mailto:Info@CanIndia.com',
        facebook: 'https://facebook.com/canindianews',
        instagram: 'https://www.instagram.com/CanIndiaNews',
        twitter: 'https://twitter.com/canindianews',
      },
      headerBG: '#dd3333',
      primaryColor: '#dd3333',
    },
  ],
  [
    'CA_TCJN',
    {
      name: 'The Canadian Jewish News',
      url: 'https://thecjn.ca/',
      est: 1960,
      about:
        'Producing content that matters to the diverse community of Jews in Canada, through articles, podcasts and events.',
      emos: ['📰', '🇨🇦'],
      logo: '/img/ns/CA_TCJN.png',
    },
  ],
  [
    'CA_CORR',
    {
      name: 'Corriere Canadese',
      url: 'https://www.corriere.ca/',
      est: 1954,
      about: 'Il quotidiano italiano in Canada.',
      emos: ['📰', '🇨🇦'],
      logo: '/img/ns/CA_CORR.png',
    },
  ],
  [
    'CA_HRZN',
    {
      name: 'Horizon Weekly',
      url: 'https://horizonweekly.ca',
      est: 1979,
      about:
        "The official publication of Canada's Armenian Revolutionary Federation (ARF) Central Committee.",
      emos: ['📰', '🇨🇦'],
      logo: '/img/ns/CA_HRZN.png',
    },
  ],
  [
    'CA_KRTM',
    {
      name: 'The Korea Times Daily',
      url: 'https://www.koreatimes.net/',
      est: 1971,
      about:
        'The first and longest-running Korean language daily newspaper in Canada.',
      emos: ['📰', '🇨🇦'],
      logo: '/img/ns/CA_KRTM.png',
    },
  ],
  [
    'CA_BJST',
    {
      name: 'Bejsment',
      url: 'https://bejsment.com/',
      est: 2011,
      about:
        'Bejsment to cyfrowa platforma Wiadomości, wybitnej polskiej gazety wydawanej w Ontario, w Kanadzie. Dzięki silnej obecności w Internecie, pomaga ona diaspory polskiej w Kanadzie pozostać w kontakcie ze swoimi korzeniami i informować o swoim nowym domu. Bejsment pokrywa szeroki zakres tematów, od wiadomości i wydarzeń w polskiej społeczności, po aktualności z Polski i sprawy międzynarodowe.',
      emos: ['📰', '🇨🇦', '🇵🇱'],
      logo: '/img/ns/CA_BJST.png',
      langs: ['pl'],
      tags: [
        'Bejsment',
        'Wiadomości',
        'PolskieWiadomości',
        'WiadomościKanada',
        'WiadomościOntario',
        'WiadomościMiędzynarodowe',
        'WiadomościSpołeczności',
      ],
      socials: {
        email: 'mailto:redakcja@bejsment.com',
        facebook: 'https://pl-pl.facebook.com/Bejsment/',
        twitter: 'https://twitter.com/BejsmentToronto',
      },
      headerBG: '#fff',
      primaryColor: '#337ab7',
    },
  ],
  [
    'CA_RSEX',
    {
      name: 'The Russian Express Weekly Newspaper',
      url: 'https://russianexpress.net',
      est: 2002,
      about: 'Toronto community weekly newspaper.',
      emos: ['📰', '🇨🇦'],
      logo: '/img/ns/CA_RSEX.png',
    },
  ],
  [
    'CA_SLMT',
    {
      name: 'Salam Toronto',
      url: 'https://salamtoronto.ca/',
      est: 2000,
      about:
        'The first Persian-English bilingual weekly publication in Canada.',
      emos: ['📰', '🇨🇦'],
      logo: '/img/ns/CA_SLMT.png',
    },
  ],
  [
    'CA_BNGT',
    {
      name: 'Bengali Times',
      url: 'https://www.thebengalitimes.com/',
      est: 2008,
      about: 'The first and most popular Bengali online newspaper in Canada.',
      emos: ['📰', '🇨🇦'],
      logo: '/img/ns/CA_BNGT.png',
    },
  ],
  [
    'CA_TCST',
    {
      name: 'The Coast',
      url: 'https://www.thecoast.ca/',
      est: 1993,
      about: 'The Coast is essential media for Kjipuktuk/Halifax.',
      emos: ['📰', '🇨🇦'],
      logo: '/img/ns/CA_TCST.png',
    },
  ],
  [
    'CA_STRT',
    {
      name: 'The Georgia Straight',
      url: 'https://www.straight.com/',
      est: 1967,
      about:
        'No other city publication knows more about Vancouver than the Georgia Straight.',
      emos: ['📰', '🇨🇦'],
      logo: '/img/ns/CA_STRT.png',
    },
  ],
  [
    'CA_STRT',
    {
      name: 'The Grapevine',
      url: 'https://grapevinepublishing.ca/',
      est: 2004,
      about:
        'The Grapevine is a community-driven arts and culture publisher serving the Annapolis Valley.',
      emos: ['📰', '🇨🇦'],
      logo: '/img/ns/CA_GRPV.png',
    },
  ],
  [
    'CA_NWMG',
    {
      name: 'NOW Magazine',
      url: 'https://nowtoronto.com/',
      est: 1981,
      about:
        'Toronto street magazine for alternative news, entertainment, events, and food.',
      emos: ['📰', '🇨🇦'],
      logo: '/img/ns/CA_NWMG.svg',
    },
  ],
]);

export const IENewsSources = new Map<string, NewsSource>([
  [
    'IE_AGRI',
    {
      name: 'Agriland',
      url: 'https://www.agriland.ie/',
      est: 2012,
      about:
        "Agriland is Ireland's leading digital news and services platform for the farming and agricultural sectors. Serving as a vital resource for farming professionals and enthusiasts, offering in-depth coverage on industry news, weather reports, market trends, and innovative agricultural technologies.Agriland connects the Irish farming community with practical insights, expert advice, and a platform for discourse on issues that matter.",
      emos: ['🚜', '🌱', '🐄'],
      langs: ['en'],
      tags: [
        'IrishFarming',
        'AgriNews',
        'FarmAdvice',
        'RuralAffairs',
        'AgriSector',
        'FarmTech',
        'Agriland',
        'AgriInnovation',
        'FarmLife',
        'Agribusiness',
        'Farmers',
        'SustainableFarming',
        'RuralLife',
        'AgrilandNews',
        'Agritech',
      ],
      socials: {
        email: 'mailto:info@agriland.ie',
        facebook: 'https://www.facebook.com/AgrilandIreland',
        linkedin: 'https://www.linkedin.com/company/agriland-media-ltd-',
        twitter: 'https://twitter.com/AgrilandIreland',
        youtube: 'https://www.youtube.com/user/AgrilandIreland',
        instagram: 'https://www.instagram.com/agriland.ie/',
        snapchat: 'https://www.snapchat.com/add/agriland',
      },
      headerBG: '#fff',
      primaryColor: '#3a9948',
    },
  ],
  [
    'IE_AADV',
    {
      name: 'Athlone Advertiser',
      url: 'https://www.advertiser.ie/athlone',
      est: 1970,
      about:
        'The Athlone Advertiser is a renowned free newspaper distributed throughout Athlone & Westmeath every Thursday. As a trusted local news source, it offers comprehensive coverage of local events, politics, sports, arts, and community happenings. The Athlone Advertiser is dedicated to providing timely and accurate reporting, fostering informed discussions, and contributing to the vibrant community spirit of Athlone and Westmeath.',
      emos: ['📰', '🇮🇪', '📍'],
      langs: ['en'],
      tags: [
        'AthloneNews',
        'LocalJournalism',
        'WestmeathNews',
        'IrishLocalNews',
        'CommunityNews',
        'AthloneAdvertiser',
        'AthloneEvents',
        'WestmeathEvents',
        'AthloneArts',
        'AthloneSports',
      ],
      socials: {
        email: 'mailto:info@galwayadvertiser.ie',
      },
      headerBG: '#d70909',
      primaryColor: '#d70909',
    },
  ],
  [
    'IE_BLLS',
    {
      name: 'BALLS.ie',
      url: 'https://www.balls.ie/',
      est: 2010,
      about:
        "BALLS.ie is Ireland's premier online platform for sports enthusiasts, covering a vast range of sports from Hurling to American Football, and Curling to Downhill Skiing. BALLS.ie brings you real-time updates, engaging content in video, gif, image, and tweet form, and in-depth commentary on the games you love. Stay updated with BALLS.ie, where every sport has a story to tell.",
      emos: ['💻', '⚽', '🏈', '🥌', '⛷'],
      langs: ['en'],
      tags: [
        'BALLSie',
        'IrishSports',
        'SportsNews',
        'Hurling',
        'AmericanFootball',
        'Curling',
        'DownhillSkiing',
        'SportsUpdates',
        'SportsCommentary',
      ],
      socials: {
        email: 'mailto:info@balls.ie', // Replace with actual email if different
        facebook: 'https://www.facebook.com/ballsdotie',
        twitter: 'https://twitter.com/ballsdotie',
        youtube: 'https://www.youtube.com/c/Ballsdotie',
        apple: 'https://apps.apple.com/app/id995175899',
        android:
          'https://play.google.com/store/apps/details?id=io.sq1.pplus.app.ballsie',
      },
      headerBG: '#fff',
      primaryColor: '#17b9a4',
    },
  ],
  [
    'IE_BEAT',
    {
      name: 'Beat 102 103',
      url: 'https://www.beat102103.com/',
      est: 2003,
      about:
        "Beat 102 103 is a premier multi-platform radio station dedicated to entertaining and informing young adults in the South East of Ireland. From the latest music to engaging discussions on issues affecting the region's youth, Beat 102 103 provides an energetic mix of content that resonates with its listeners. Stay tuned with Beat 102 103, your pulse on the South East's vibrant youth culture.",
      emos: ['📻', '🇮🇪', '🎵'],
      langs: ['en'],
      tags: [
        'Beat102103',
        'IrishRadio',
        'SouthEastIreland',
        'YouthCulture',
        'Entertainment',
        'News',
        'Music',
        'RadioStation',
      ],
      socials: {
        email: 'mailto: studio@beat102103.com',
        instagram: 'https://www.instagram.com/beat102103/?hl=es',
        twitter: 'https://twitter.com/beat102103',
        tiktok: 'https://www.tiktok.com/@beat102103?lang=en',
        facebook: 'https://www.facebook.com/Beat102103/',
        youtube: 'https://www.youtube.com/user/OfficialBeat102103',
        soundcloud: 'https://soundcloud.com/beat102103',
        whatsapp: 'https://wa.me/3530851029103',
      },
      headerBG: '#FF0000',
      primaryColor: '#FF0000',
    },
  ],
  [
    'IE_BLFT',
    {
      name: 'Belfast Telegraph',
      url: 'https://www.belfasttelegraph.co.uk/',
      est: 1870,
      about:
        'Since its inception in 1870, the Belfast Telegraph has been the leading source of news, sport, and business coverage in Belfast and throughout Northern Ireland. It offers a broad spectrum of content, from breaking news and in-depth opinion pieces to entertainment and lifestyle features. The Belfast Telegraph is your reliable source for comprehensive coverage of the events and issues that matter to Northern Ireland.',
      emos: ['📰', '🇮🇪', '📈', '⚽', '🎭'],
      langs: ['en'],
      tags: [
        'BelfastTelegraph',
        'IrishNews',
        'Belfast',
        'NorthernIreland',
        'SportsNews',
        'BusinessNews',
        'Entertainment',
        'Lifestyle',
        'Opinion',
      ],
      socials: {
        email:
          'mailto:customersupport@belfasttelegraph.co.uk?body=BelfastTelegraph.co.uk&subject=BelfastTelegraph.co.uk',
        facebook: 'https://www.facebook.com/belfasttelegraph',
        twitter: 'https://twitter.com/beltel/',
        instagram: 'https://www.instagram.com/belfasttelegraph/',
        linkedin: 'https://www.linkedin.com/company/belfast-telegraph/',
      },
      headerBG: '#fff',
      primaryColor: '#000',
    },
  ],
  [
    'IE_BZPL',
    {
      name: 'Biz Plus',
      url: 'https://bizplus.ie/',
      est: 1998,
      about:
        "Biz Plus is a monthly business magazine dedicated to the activities of Irish companies and companies based in Ireland. With a sharp focus on the pulse of Ireland's business sector, Biz Plus delivers insightful analysis, industry news, interviews, and reports on a monthly basis. Biz Plus is your definitive guide to understanding and navigating the ever-evolving Irish business landscape.",
      emos: ['💻', '🧑‍💼', '📈'],
      langs: ['en'],
      tags: [
        'BizPlus',
        'IrishBusiness',
        'BusinessMagazine',
        'CorporateNews',
        'Economy',
        'IndustryTrends',
        'BusinessAnalysis',
        'BusinessInsights',
        'IrishCompanies',
      ],
      socials: {
        email: 'mailto:info@businessplus-ie.go-vip.net',
        facebook: 'https://www.facebook.com/businessplusmag/',
        twitter: 'https://twitter.com/businessplusmag',
        linkedin: 'https://ie.linkedin.com/company/business-plus-magazine',
      },
      headerBG: '#fff',
      primaryColor: '#ff6900',
    },
  ],
  [
    'IE_BRKN',
    {
      name: 'breakingnews.ie',
      url: 'https://www.breakingnews.ie/',
      est: 2001,
      about:
        'Breakingnews.ie, is a leading news website delivering up-to-the-minute news and sports reports. With a focus on immediacy and accuracy, it provides email news releases throughout the day, ensuring readers are always in the know about the latest breaking stories. From domestic affairs to international events, sports to entertainment, breakingnews.ie is your trusted source for real-time news coverage.',
      emos: ['💻', '🇮🇪', '📈', '⚽'],
      langs: ['en'],
      tags: [
        'BreakingNews',
        'IrishNews',
        'RealTimeNews',
        'SportsReports',
        'CurrentAffairs',
        'InternationalNews',
        'BreakingNewsIE',
      ],
      socials: {
        email: 'mailto:desk@breakingnews.ie',
        facebook: 'https://www.facebook.com/breakingnewsire',
        twitter: 'https://twitter.com/breakingnewsie',
        instagram: 'https://www.instagram.com/breakingnews.ie/',
      },
      headerBG: '#fff',
      primaryColor: '#EDA400',
    },
  ],
  [
    'IE_BUZZ',
    {
      name: 'Buzz',
      url: 'https://www.buzz.ie/',
      est: 2016,
      about:
        "Buzz has emerged as a go-to source for the latest trending stories across the globe. With a special emphasis on movies, TV, music, games, tech, and sports, Buzz keeps its finger firmly on the pulse of popular culture. Offering comprehensive coverage and expert commentary, Buzz provides a unique lens on the world's trending topics.",
      emos: ['💻', '🇮🇪', '🎥', '🎮', '🎵'],
      langs: ['en'],
      tags: [
        'Buzz',
        'TrendingNews',
        'Movies',
        'TV',
        'Music',
        'Games',
        'Tech',
        'Sport',
        'BuzzIE',
      ],
      socials: {
        email: 'mailto:news@buzz.ie',
        facebook: 'https://www.facebook.com/buzzdotie',
        twitter: 'https://twitter.com/buzzdotie',
        instagram: 'https://www.instagram.com/buzz.ie/',
      },
      headerBG: '#fff',
      primaryColor: '#DEA65D',
    },
  ],
  [
    'IE_CLWL',
    {
      name: 'Carlow Live',
      url: 'https://www.carlowlive.ie/',
      est: 2018,
      about:
        "Carlow Live is a dedicated platform for all things Carlow. It provides round-the-clock coverage of the latest news, events, business updates, and death notices in the region. It's a must-visit resource for those interested in staying updated on matters in Carlow and its surroundings.",
      emos: ['💻', '🇮🇪'],
      langs: ['en'],
      tags: [
        'CarlowLive',
        'LocalNews',
        'CarlowEvents',
        'CarlowBusiness',
        'CarlowUpdates',
      ],
      socials: {
        email: 'mailto:news@carlowlive.ie',
        facebook: 'https://www.facebook.com/www.carlowlive.ie',
        twitter: 'https://twitter.com/Carlowlive1',
      },
      headerBG: '#fff',
      primaryColor: '#9D9C9C',
    },
  ],
  [
    'IE_CLFM',
    {
      name: 'Clare FM',
      url: 'https://www.clare.fm/',
      est: 1989,
      about:
        "Clare FM has provides the people of County Clare with a comprehensive radio service, reflecting the unique identities of their diverse communities. The station offers a rich array of content that mirrors the interests, concerns, and spirit of Clare's residents.",
      emos: ['📻', '🇮🇪'],
      langs: ['en'],
      tags: [
        'ClareFM',
        'LocalRadio',
        'CountyClare',
        'CommunityRadio',
        'ClareNews',
        'IrishRadio',
      ],
      socials: {
        email: 'mailto:info@clare.fm',
        facebook: 'https://www.facebook.com/clarefmradio',
        instagram: 'https://www.instagram.com/clarefmradio/',
        soundcloud: 'https://soundcloud.com/clarefm',
        twitter: 'https://twitter.com/ClareFM',
        youtube: 'https://www.youtube.com/user/clarefmTV',
      },
      headerBG: '#fff',
      primaryColor: '#5f7325',
      audio:
        'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1540623928&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true',
    },
  ],
  [
    'IE_CLRL',
    {
      name: 'Clare Live',
      url: 'https://www.clarelive.ie/',
      est: 2001,
      about:
        'Clare Live is an online hub for all news and events in County Clare, Ireland, serving as a reliable source of information for residents and visitors alike. From local news updates to community events and lifestyle stories, Clare Live covers a wide range of topics to keep its readers informed and engaged.',
      emos: ['💻', '🇮🇪'],
      langs: ['en'],
      tags: [
        'ClareLive',
        'LocalNews',
        'ClareEvents',
        'ClareUpdates',
        'CountyClare',
        'IrishNews',
      ],
      socials: {
        email: 'mailto:news@clarelive.ie',
        twitter: 'https://twitter.com/ClareLiveNews',
        facebook: 'https://www.facebook.com/ClareLiveNews',
      },
      headerBG: '#fff',
      primaryColor: '#9D9C9C',
    },
  ],
  [
    'IE_CLHT',
    {
      name: 'Classic Hits',
      url: 'https://www.classichits.ie/',
      est: 2009,
      about:
        "Classic Hits is Ireland's premier radio station for the best of 80's and 90's music. As the go-to platform for fans of these iconic decades, it offers a rich assortment of music that transcends generations.",
      emos: ['📻', '🎭'],
      langs: ['en'],
      tags: [
        'ClassicHits',
        'RadioStation',
        '80sMusic',
        '90sMusic',
        'ClassicMusic',
        'IrishRadio',
        'MusicRadio',
      ],
      socials: {
        email: 'mailto:hello@classichits.ie',
        facebook: 'https://www.facebook.com/ClassicHitsRadio',
        instagram: 'https://www.instagram.com/classichitsradio/',
        twitter: 'https://twitter.com/ClassicHitsRdio',
        whatsapp: 'https://wa.me/3530871880008',
      },
      headerBG: '#59058d',
      primaryColor: '#59058d',
    },
  ],
  [
    'IE_COLC',
    {
      name: 'Coleraine Chronicle',
      url: 'https://www.colerainechronicle.co.uk/',
      est: 1844,
      about:
        'The Coleraine Chronicle is a centuries old, trusted news outlet, offering extensive coverage of the Causeway Coast region. It serves areas including Ballycastle, Ballymoney, Bushmills, Coleraine, Limavady, Moyle, Portrush, and Portstewart, providing comprehensive updates on local news, events, and issues that impact the community.',
      emos: ['📰', '🇬🇧'],
      langs: ['en'],
      tags: [
        'ColeraineChronicle',
        'LocalNews',
        'CausewayCoast',
        'BallycastleNews',
        'BallymoneyNews',
        'BushmillsNews',
        'ColeraineNews',
        'LimavadyNews',
        'MoyleNews',
        'PortrushNews',
        'PortstewartNews',
      ],
      socials: {
        email: 'mailto:editor@thechronicle.uk.com',
        facebook: 'https://en-gb.facebook.com/coleraine.chronicle/',
        twitter: 'https://twitter.com/colerainechron?lang=en',
        youtube:
          'https://www.youtube.com/channel/UCJ8FeVvbQ6dcrcwnvu3o3QA/videos',
      },
      headerBG: '#fff',
      primaryColor: '#D8002D',
    },
  ],
  [
    'IE_CTRB',
    {
      name: 'Connacht Tribune',
      url: 'https://connachttribune.ie/',
      est: 1925,
      about:
        "The Connacht Tribune is a prominent source for Galway-centric news, spanning a range of topics from sports and entertainment to property and arts. It's a one-stop destination for readers seeking comprehensive coverage on matters affecting the vibrant communities of Galway and its surrounding regions.",
      emos: ['📰', '🇮🇪'],
      langs: ['en'],
      tags: [
        'ConnachtTribune',
        'GalwayNews',
        'SportNews',
        'Entertainment',
        'PropertyNews',
        'ArtsNews',
        'LocalNews',
        'IrishNews',
      ],
      socials: {
        email: 'mailto:news@ctribune.ie',
        facebook: 'https://www.facebook.com/ConnachtTribune',
        twitter: 'https://twitter.com/CTribune',
        youtube: 'https://www.youtube.com/@connachttribunegalwaycityt9972',
      },
      headerBG: '#a90c21',
      primaryColor: '#a90c21;',
    },
  ],
  [
    'IE_CRKB',
    {
      name: 'Cork Beo',
      url: 'https://www.corkbeo.ie/',
      est: 2019,
      about:
        "Cork Beo is a powerful digital voice for the Cork region. It strives to narrate impactful stories, amplify local concerns, and champion causes that matter to the Cork community. From breaking news and live updates to features and analyses, Cork Beo brings everything that's happening in Cork right to your screen.",
      emos: ['💻', '🇮🇪'],
      langs: ['en'],
      tags: [
        'CorkBeo',
        'CorkNews',
        'LocalNews',
        'IrishNews',
        'DigitalMedia',
        'CommunityNews',
        'CorkStories',
        'CorkRegion',
      ],
      socials: {
        email: 'mailto:news@corkbeo.ie',
        facebook: 'https://www.facebook.com/corkbeo',
        twitter: 'https://twitter.com/corkbeo',
        instagram: 'https://www.instagram.com/corkbeo/',
      },
      headerBG: '#d90000',
      primaryColor: '#d90000',
    },
  ],
  [
    'IE_CRKI',
    {
      name: 'Cork Independent',
      url: 'https://www.corkindependent.com/',
      est: 2005,
      about: 'Free newspaper bringing everything needed to know in Cork.',
      emos: ['💻', '🇮🇪'],
    },
  ],
  [
    'IE_RDFM',
    {
      name: "Cork's RedFM",
      url: 'https://redfm.ie',
      est: 2002,
      emos: ['📻', '🇮🇪'],
    },
  ],
  [
    'IE_DERJ',
    {
      name: 'Derry Journal',
      url: 'https://www.derryjournal.com/',
      est: 1772,
      about:
        'Giving the information needed to understand the world, hold power to account and expose injustice. Committed to giving a voice to those who struggle to be heard as well as those whose profession is crafting an argument.',
      emos: ['📰', '🇮🇪'],
    },
  ],
  [
    'IE_DRYN',
    {
      name: 'Derry Now',
      url: 'https://www.derrynow.com/',
      est: 2014,
      emos: ['💻', '🇮🇪'],
    },
  ],
  [
    'IE_DLDY',
    {
      name: 'Donegal Daily',
      url: 'https://www.donegaldaily.com/',
      est: 2011,
      about: 'News as it happens across Donegal.',
      emos: ['💻', '🇮🇪'],
    },
  ],
  [
    'IE_DNGL',
    {
      name: 'Donegal Live',
      url: 'https://www.donegallive.ie/',
      est: 2010,
      about:
        'Latest Donegal news, sport, business, death notices, entertainment, motoring & jobs.',
      emos: ['💻', '🇮🇪'],
    },
  ],
  [
    'IE_DLNW',
    {
      name: 'Donegal News / Derry People',
      url: 'https://donegalnews.com/',
      est: 1903,
      about:
        'Originally covering Derry, at the beginning of World War II, took on more of a Donegal focus.',
      emos: ['📰', '🇮🇪'],
    },
  ],
  [
    'IE_DINQ',
    {
      name: 'Dublin Inquirer',
      url: 'https://dublininquirer.com/',
      est: 2015,
      about:
        "Reader-supported newspaper serving Ireland's capital. In-depth, original reporting about the issues that shape Dublin.",
      emos: ['💻', '🇮🇪'],
    },
  ],
  [
    'IE_DLIV',
    {
      name: 'Dublin Live',
      url: 'https://www.dublinlive.ie/',
      est: 2016,
      about:
        'In-depth news and information about Dublin. Focused on the issues that matter to the people of the capital.',
      emos: ['💻', '🇮🇪'],
    },
  ],
  [
    'IE_DNEW',
    {
      name: 'Dublin News',
      url: 'https://www.dublinnews.com/',
      est: 1858,
      about:
        'Reporting the news from Dublin City & County. International news headlines, articles from the business world and a major section on European news supplement the local and national roundup.',
      emos: ['📰', '🇮🇪'],
    },
  ],
  [
    'IE_DNPP',
    {
      name: 'Dublin People',
      url: 'https://dublinpeople.com/',
      est: 2001,
      about:
        "Three weekly titles serving Dublin: Northside People East, Northside People West & Southside People. Distributed throughout Dublin's suburbs to homes, pick-up points and businesses.",
      emos: ['💻', '🇮🇪'],
    },
  ],
  [
    'IE_98FM',
    {
      name: "Dublin's 98FM",
      url: 'https://www.98fm.com/',
      est: 1989,
      about:
        'Wide variety of music from the 90s, 00s and today. Also offers the latest Dublin news and sport.',
      emos: ['📻', '🇮🇪'],
    },
  ],
  [
    'IE_DLKD',
    {
      name: 'Dundalk Democrat',
      url: 'https://www.dundalkdemocrat.ie/',
      est: 1849,
      emos: ['📰', '🇮🇪'],
    },
  ],
  [
    'IE_ESTC',
    {
      name: 'East Coast FM',
      url: 'https://www.eastcoast.fm/',
      est: 1989,
      about: "Wicklow's Radio Station.",
      emos: ['📻', '🇮🇪'],
    },
  ],
  [
    'IE_ECHL',
    {
      name: 'Echo Live',
      url: 'https://www.echolive.ie/',
      est: 1892,
      about:
        "Serving the people of Cork by faithfully, factually and fairly reporting the daily news and standing up for the citizens. Dedicated to the interests of the people of Cork City and County. Extensive coverage in stories and pictures of the good news and the bad news as it affects Cork people. Argues and advocates Cork's case on every issue.",
      emos: ['📰', '🇮🇪'],
    },
  ],
  [
    'IE_ENGI',
    {
      name: 'Engineers Ireland',
      url: 'https://www.engineersireland.ie/Engineers-Journal/News',
      est: 1835,
      about:
        'Engineers Ireland aims to support members at every career, from students and apprentices to qualified graduates and experienced engineers.',
      emos: ['📰', '🧑‍💻'],
    },
  ],
  [
    'IE_ENTR',
    {
      name: 'entertainment.ie',
      url: 'https://entertainment.ie/',
      est: 1997,
      emos: ['💻', '🎭'],
    },
  ],
  [
    'IE_EVOK',
    {
      name: 'EVOKE',
      url: 'https://evoke.ie/',
      est: 2014,
      about:
        "EVOKE is a popular digital platform tailored for Irish women. It offers a comprehensive blend of the latest news, high-street fashion, beauty trends, and captivating entertainment and celebrity gossip. With a firm finger on the pulse of what's trending, EVOKE is the go-to destination for women seeking to stay updated and inspired.",
      emos: ['💻', '👭'],
      langs: ['en'],
      tags: [
        'EVOKE',
        'IrishNews',
        'ShowbizNews',
        'FashionUpdates',
        'BeautyTrends',
        'CelebrityGossip',
        'EntertainmentNews',
        "Women'sLifestyle",
      ],
      socials: {
        email: 'mailto:info@evoke.ie',
        instagram: 'https://www.instagram.com/evokedotie/',
        facebook: 'https://www.facebook.com/EVOKE.ie/',
      },
      headerBG: '#fff',
      primaryColor: '#e2609c',
    },
  ],
  [
    'IE_EXTR',
    {
      name: 'Extra.ie',
      url: 'https://extra.ie/',
      est: 2016,
      about:
        "Giving the inside track on all of Ireland's top news stories. All the latest news from Ireland and the world. News With A Little Extra.",
      emos: ['💻', '🇮🇪'],
    },
  ],
  [
    'IE_FERH',
    {
      name: 'Fermanagh Herald',
      url: 'https://fermanaghherald.com/',
      est: 1902,
      emos: ['📰', '🇮🇪'],
    },
  ],
  [
    'IE_FLT',
    {
      name: 'Fleet Transport',
      url: 'https://fleet.ie/',
      est: 2003,
      emos: ['💻', '🚛'],
    },
  ],
  [
    'IE_F104',
    {
      name: 'FM104',
      url: 'https://www.fm104.ie/',
      est: 1989,
      emos: ['📻', '🇮🇪'],
    },
  ],
  [
    'IE_GLFE',
    {
      name: 'Gaelic Life',
      url: 'https://www.gaeliclife.com/',
      est: 2007,
      emos: ['🏐', '🇮🇪'],
    },
  ],
  [
    'IE_GBFM',
    {
      name: 'Galway Bay FM',
      url: 'https://galwaybayfm.ie/',
      est: 1989,
      emos: ['📻', '🇮🇪'],
    },
  ],
  [
    'IE_GADV',
    {
      name: 'Galway Advertiser',
      url: 'https://www.advertiser.ie/galway',
      est: 1970,
      emos: ['📰', '🇮🇪'],
    },
  ],
  [
    'IE_GBEO',
    {
      name: 'Galway Beo',
      url: 'https://www.galwaybeo.ie/',
      est: 2021,
      emos: ['💻', '🇮🇪'],
    },
  ],
  [
    'IE_GDLY',
    {
      name: 'Galway Daily',
      url: 'https://www.galwaydaily.com/',
      est: 2018,
      emos: ['💻', '🇮🇪'],
    },
  ],
  [
    'IE_GCN',
    {
      name: 'Gay Community News',
      url: 'https://gcn.ie/',
      est: 1988,
      emos: ['📰', '🏳️‍🌈'],
    },
  ],
  [
    'IE_HER',
    {
      name: 'Her',
      url: 'https://www.her.ie/',
      est: 2012,
      emos: ['💻', '👭'],
    },
  ],
  [
    'IE_HGV',
    {
      name: 'HGV Ireland',
      url: 'https://www.hgvireland.com/',
      est: 2007,
      emos: ['💻', '🚛'],
    },
  ],
  [
    'IE_HIRD',
    {
      name: 'Highland Radio',
      url: 'https://www.highlandradio.com/',
      est: 1990,
      emos: ['📻', '🇮🇪'],
    },
  ],
  [
    'IE_HOTP',
    {
      name: 'Hot Press',
      url: 'https://www.hotpress.com/',
      est: 1977,
      emos: ['📰', '🎭'],
    },
  ],
  [
    'IE_HSHM',
    {
      name: 'House And Home',
      url: 'https://www.houseandhome.ie/',
      est: 2001,
      emos: ['💻', '🏡'],
    },
  ],
  [
    'IE_IMG',
    {
      name: 'Image',
      url: 'https://www.image.ie/',
      est: 1975,
      emos: ['📰', '👚'],
    },
  ],
  [
    'IE_IOWI',
    {
      name: 'Inishowen Independent',
      url: 'http://inishowenindo.ie/',
      est: 2007,
      emos: ['💻', '🇮🇪'],
    },
  ],
  [
    'IE_IRAD',
    {
      name: 'iRadio',
      url: 'https://www.iradio.ie/',
      est: 2011,
      emos: ['📻', '🇮🇪'],
    },
  ],
  [
    'IE_BOX',
    {
      name: 'Irish Boxing',
      url: 'https://www.irish-boxing.com/',
      est: 2001,
      emos: ['💻', '🥊'],
    },
  ],
  [
    'IE_CNTR',
    {
      name: 'IrishCentral',
      url: 'https://www.irishcentral.com/',
      est: 2009,
      emos: ['💻', '🇮🇪'],
    },
  ],
  [
    'IE_CTRM',
    {
      name: 'Irish Country Magazine',
      url: 'https://irishcountrymagazine.ie/',
      est: 2012,
      emos: ['💻', '🏡'],
    },
  ],
  [
    'IE_EXAM',
    {
      name: 'Irish Examiner',
      url: 'https://www.irishexaminer.com/',
      est: 1841,
      emos: ['📰', '🇮🇪'],
    },
  ],
  [
    'IE_FARM',
    {
      name: 'Irish Farmers Journal',
      url: 'https://farmersjournal.ie/',
      est: 1948,
      emos: ['📰', '🌱'],
    },
  ],
  [
    'IE_LEGL',
    {
      name: 'Irish Legal News',
      url: 'https://www.irishlegal.com/',
      est: 2015,
      emos: ['💻', '🧑‍⚖️'],
    },
  ],
  [
    'IE_IMT',
    {
      name: 'Irish Medical Times',
      url: 'https://www.imt.ie/',
      est: 1967,
      emos: ['📰', '🧑‍⚕️'],
    },
  ],
  [
    'IE_MIRR',
    {
      name: 'Irish Mirror',
      url: 'https://www.irishmirror.ie/',
      est: 1997,
      emos: ['📰', '🇮🇪'],
    },
  ],
  [
    'IE_JOE',
    {
      name: 'Joe.ie',
      url: 'https://www.joe.ie/',
      est: 2010,
      emos: ['💻', '🇮🇪'],
    },
  ],
  [
    'IE_KCLR',
    {
      name: 'KCLR 96FM',
      url: 'https://kclr96fm.com/',
      est: 2004,
      emos: ['📻', '🇮🇪'],
    },
  ],
  [
    'IE_KFMR',
    {
      name: 'Kfm',
      url: 'https://www.kfmradio.com/',
      est: 2004,
      emos: ['📻', '🇮🇪'],
    },
  ],
  [
    'IE_KDRN',
    {
      name: 'Kildare Nationalist',
      url: 'https://kildare-nationalist.ie/',
      est: 1883,
      emos: ['📰', '🇮🇪'],
    },
  ],
  [
    'IE_KLDN',
    {
      name: 'Kildare Now',
      url: 'https://www.kildarenow.com/',
      est: 2015,
      about:
        'Kildare Now is a leading digital news platform offering the latest news and updates from Kildare and beyond. This digital outlet covers a range of topics including local, national, and international news, sports, business, lifestyle, and culture. With its pulse on the heartbeat of the Kildare community, Kildare Now serves as a comprehensive and reliable news source for its readers.',
      emos: ['💻', '🇮🇪'],
      langs: ['en'],
      tags: [
        'KildareNow',
        'LocalNews',
        'RegionalNews',
        'IrishNews',
        'CommunityNews',
        'KildareNews',
      ],
      socials: {
        email: 'mailto:news@kildarenow.com',
        facebook: 'https://www.facebook.com/KildareNow',
        twitter: 'https://twitter.com/KildareNow',
      },
      headerBG: '#fff',
      primaryColor: '#555',
    },
  ],
  [
    'IE_KILP',
    {
      name: 'Kilkenny People',
      url: 'https://www.kilkennypeople.ie/',
      est: 1893,
      emos: ['📰', '🇮🇪'],
    },
  ],
  [
    'IE_KLRT',
    {
      name: 'Killarney Today',
      url: 'https://www.killarneytoday.com/',
      est: 2014,
      emos: ['💻', '🇮🇪'],
    },
  ],
  [
    'IE_LISN',
    {
      name: 'Laois Nationalist',
      url: 'https://laois-nationalist.ie/',
      est: 1883,
      emos: ['📰', '🇮🇪'],
    },
  ],
  [
    'IE_LAW',
    {
      name: 'Law Society Gazette',
      url: 'https://www.lawsociety.ie/gazette',
      est: 1907,
      emos: ['📰', '🧑‍⚖️'],
    },
  ],
  [
    'IE_LNEX',
    {
      name: 'Leinster Express',
      url: 'https://www.leinsterexpress.ie/',
      est: 1831,
      about:
        "Leinster Express, a regional newspaper, keeps the residents of Leinster informed about local events, sports, business news and more. Its extensive coverage spans news that affects the local community directly, keeping them abreast with the latest developments in their vicinity. A reliable source of news, it's a trusted companion to the people of Leinster.",
      emos: ['📰', '🇮🇪'],
      langs: ['en'],
      tags: [
        'LeinsterExpress',
        'LocalNews',
        'RegionalNews',
        'IrishNews',
        'CommunityNews',
        'LeinsterNews',
      ],
      socials: {
        email: 'mailto:news@leinsterexpress.ie',
        twitter: 'https://twitter.com/Express_Sport',
        facebook: 'https://www.facebook.com/LeinsterExpressSport',
      },
      headerBG: '#fff',
      primaryColor: '#555',
    },
  ],
  [
    'IE_LNLD',
    {
      name: 'Leinster Leader',
      url: 'https://www.leinsterleader.ie/',
      est: 1880,
      emos: ['📰', '🇮🇪'],
    },
  ],
  [
    'IE_LTRO',
    {
      name: 'Leitrim Observer',
      url: 'https://www.leitrimobserver.ie/',
      est: 1889,
      emos: ['📰', '🇮🇪'],
    },
  ],
  [
    'IE_LIML',
    {
      name: 'Limerick Leader',
      url: 'https://www.limerickleader.ie/',
      est: 1889,
      emos: ['📰', '🇮🇪'],
    },
  ],
  [
    'IE_LIMP',
    {
      name: 'Limerick Post',
      url: 'https://www.limerickpost.ie/',
      est: 1986,
      emos: ['📰', '🇮🇪'],
    },
  ],
  [
    'IE_95FM',
    {
      name: 'Live 95',
      url: 'https://www.live95fm.ie/',
      est: 1997,
      emos: ['📻', '🇮🇪'],
    },
  ],
  [
    'IE_LMFM',
    {
      name: 'LMFM',
      url: 'https://www.lmfm.ie/',
      est: 1989,
      emos: ['📻', '🇮🇪'],
    },
  ],
  [
    'IE_LNGL',
    {
      name: 'Longford Leader',
      url: 'https://www.longfordleader.ie/',
      est: 1897,
      emos: ['📰', '🇮🇪'],
    },
  ],
  [
    'IE_MADV',
    {
      name: 'Mayo Adevertiser',
      url: 'https://www.advertiser.ie/mayo',
      est: 1970,
      emos: ['📰', '🇮🇪'],
    },
  ],
  [
    'IE_MYNW',
    {
      name: 'Mayo News',
      url: 'https://www.mayonews.ie/',
      est: 1892,
      emos: ['📰', '🇮🇪'],
    },
  ],
  [
    'IE_MTHC',
    {
      name: 'Meath Chronicle',
      url: 'https://www.meathchronicle.ie/',
      est: 2007,
      emos: ['💻', '🇮🇪'],
    },
  ],
  [
    'IE_MRST',
    {
      name: 'Merrion Street',
      url: 'https://merrionstreet.ie/',
      est: 2007,
      emos: ['💻', '🃏'],
    },
  ],
  [
    'IE_M103',
    {
      name: 'Midlands 103',
      url: 'https://www.midlands103.com/',
      est: 1990,
      emos: ['📻', '🇮🇪'],
    },
  ],
  [
    'IE_MIDW',
    {
      name: 'MidWest Radio',
      url: 'https://midwestradio.ie/',
      est: 1979,
      emos: ['📻', '🇮🇪'],
    },
  ],
  [
    'IE_MTLY',
    {
      name: 'Motley',
      url: 'https://motley.ie/',
      est: 2006,
      emos: ['💻', '🧑‍🎓'],
    },
  ],
  [
    'IE_NNGG',
    {
      name: 'Nenagh Guardian',
      url: 'https://www.nenaghguardian.ie/',
      est: 2003,
      emos: ['💻', '🇮🇪'],
    },
  ],
  [
    'IE_NNGL',
    {
      name: 'Nenagh Live',
      url: 'https://www.nenaghlive.ie/',
      est: 2021,
      emos: ['💻', '🇮🇪'],
    },
  ],
  [
    'IE_NLTR',
    {
      name: 'The News Letter',
      url: 'https://www.newsletter.co.uk/',
      est: 1737,
      about:
        "The world's oldest English-language daily newspaper still in publication. A Belfast perspective on news, sport, what's on, lifestyle and more,.",
      emos: ['💻', '🇬🇧'],
    },
  ],
  [
    'IE_NTLK',
    {
      name: 'newstalk',
      url: 'https://www.newstalk.com/',
      est: 2002,
      emos: ['📻', '🇮🇪'],
    },
  ],
  [
    'IE_NSND',
    {
      name: 'Northern Sound',
      url: 'https://www.northernsound.ie/',
      est: 1989,
      emos: ['📻', '🇮🇪'],
    },
  ],
  [
    'IE_NSTD',
    {
      name: 'Northern Standard',
      url: 'https://northernstandard.ie/',
      est: 1839,
      emos: ['📰', '🇮🇪'],
    },
  ],
  [
    'IE_NOTE',
    {
      name: 'Noteworthy',
      url: 'https://www.noteworthy.ie/',
      est: 2019,
      emos: ['💻', '🇮🇪'],
    },
  ],
  [
    'IE_TG4',
    {
      name: 'Nuacht TG4',
      url: 'https://www.tg4.ie/ga/brandai-eile/nuacht',
      est: 1996,
      emos: ['📺', '🇮🇪'],
    },
  ],
  [
    'IE_OCEN',
    {
      name: 'Ocean FM',
      url: 'https://www.oceanfm.ie/',
      est: 2004,
      emos: ['📻', '🇮🇪'],
    },
  ],
  [
    'IE_OFYE',
    {
      name: 'Offaly Express',
      url: 'https://www.offalyexpress.ie/',
      est: 1984,
      emos: ['📰', '🇮🇪'],
    },
  ],
  [
    'IE_OFFI',
    {
      name: 'Offaly Independent',
      url: 'https://www.offalyindependent.ie/',
      est: 1894,
      emos: ['📰', '🇮🇪'],
    },
  ],
  [
    'IE_OTBS',
    {
      name: 'Off The Ball Sports',
      url: 'https://www.otbsports.com/',
      est: 2002,
      emos: ['📻', '⚽'],
    },
  ],
  [
    'IE_PNDT',
    {
      name: 'Pundit Arena',
      url: 'https://punditarena.com/',
      est: 2013,
      emos: ['💻', '⚽'],
    },
  ],
  [
    'IE_NOVA',
    {
      name: 'Radio Nova',
      url: 'https://www.nova.ie/',
      est: 2010,
      emos: ['📻', '🇮🇪'],
    },
  ],
  [
    'IE_RKER',
    {
      name: 'Radio Kerry',
      url: 'https://www.radiokerry.ie/',
      est: 1990,
      emos: ['📻', '🇮🇪'],
    },
  ],
  [
    'IE_RLCT',
    {
      name: 'RollerCoaster.ie',
      url: 'https://rollercoaster.ie/',
      est: 2000,
      emos: ['💻', '🤰'],
    },
  ],
  [
    'IE_ROSH',
    {
      name: 'Roscommon Herald',
      url: 'https://roscommonherald.ie/',
      est: 2000,
      emos: ['💻', '🇮🇪'],
    },
  ],
  [
    'IE_RSVP',
    {
      name: 'RSVP Live',
      url: 'https://www.rsvplive.ie/',
      est: 2017,
      emos: ['💻', '📸'],
    },
  ],
  [
    'IE_RTE',
    {
      name: 'RTÉ',
      url: 'https://www.rte.ie/',
      est: 1926,
      emos: ['📺', '🇮🇪'],
    },
  ],
  [
    'IE_SNNS',
    {
      name: 'Shannonside FM',
      url: 'https://www.shannonside.ie/',
      est: 1989,
      emos: ['📻', '🇮🇪'],
    },
  ],
  [
    'IE_SLCN',
    {
      name: 'Siliconrepublic.com',
      url: 'https://www.siliconrepublic.com/',
      est: 2001,
      emos: ['💻', '🧮'],
    },
  ],
  [
    'IE_SLGW',
    {
      name: 'Sligo Weekender',
      url: 'http://sligoweekender.ie/',
      est: 1983,
      emos: ['📰', '🇮🇪'],
    },
  ],
  [
    'IE_SERD',
    {
      name: 'South East Radio',
      url: 'https://www.southeastradio.ie/',
      est: 1989,
      emos: ['📻', '🇮🇪'],
    },
  ],
  [
    'IE_SPIN',
    {
      name: 'SPIN 1038',
      url: 'https://www.spin1038.com/',
      est: 2002,
      emos: ['📻', '🇮🇪'],
    },
  ],
  [
    'IE_SPRT',
    {
      name: 'Spirit Radio',
      url: 'https://www.spiritradio.ie/',
      est: 2011,
      emos: ['📻', '🇮🇪'],
    },
  ],
  [
    'IE_SJOE',
    {
      name: 'Sports Joe',
      url: 'https://www.sportsjoe.ie/',
      est: 2014,
      emos: ['💻', '⚽'],
    },
  ],
  [
    'IE_SUNW',
    {
      name: 'Sunday World',
      url: 'https://www.sundayworld.com/',
      est: 1973,
      emos: ['📰', '🇮🇪'],
    },
  ],
  [
    'IE_TECC',
    {
      name: 'Tech Central',
      url: 'https://www.techcentral.ie/',
      est: 1984,
      emos: ['📰', '🧮'],
    },
  ],
  [
    'IE_ANGC',
    {
      name: 'The Anglo Celt',
      url: 'https://www.anglocelt.ie/',
      est: 1846,
      emos: ['📰', '🇮🇪'],
    },
  ],
  [
    'IE_AVNP',
    {
      name: 'The Avondhu Press',
      url: 'https://avondhupress.ie/',
      est: 2001,
      emos: ['💻', '🇮🇪'],
    },
  ],
  [
    'IE_BIZP',
    {
      name: 'The Business Post',
      url: 'https://www.businesspost.ie/',
      est: 1989,
      emos: ['📰', '🧑‍💼'],
    },
  ],
  [
    'IE_CLRC',
    {
      name: 'The Clare Champion',
      url: 'https://clarechampion.ie/',
      est: 1903,
      emos: ['📰', '🇮🇪'],
    },
  ],
  [
    'IE_CLRE',
    {
      name: 'The Clare Echo',
      url: 'https://www.clareecho.ie/',
      est: 2017,
      emos: ['📰', '🇮🇪'],
    },
  ],
  [
    'IE_CONT',
    {
      name: 'The Connaught Telegraph',
      url: 'https://www.con-telegraph.ie/',
      est: 1828,
      emos: ['📰', '🇮🇪'],
    },
  ],
  [
    'IE_INDO',
    {
      name: 'Irish Independent',
      url: 'https://www.independent.ie/',
      est: 1905,
      emos: ['📰', '🇮🇪'],
    },
  ],
  [
    'IE_ARGS',
    {
      name: 'The Argus',
      url: 'https://www.independent.ie/regionals/argus/',
      est: 1830,
      about:
        'Local Sport, Entertainment, Business & Lifestyle news for Dundalk, Greenore, Louth & Leinster.',
      emos: ['📰', '🇮🇪'],
    },
  ],
  [
    'IE_CRKM',
    {
      name: 'The Corkman',
      url: 'https://www.independent.ie/regionals/corkman/',
      est: 1841,
      about:
        'news, sports, entertainment, business, and lifestyle stories for County Cork and its surrounding areas',
      emos: ['💻', '🇮🇪'],
    },
  ],
  [
    'IE_FNGL',
    {
      name: 'Fingal Independent',
      url: 'https://www.independent.ie/regionals/dublin/fingal/',
      est: 1994,
      about:
        'Up-to-date local news, sports, entertainment, business, and lifestyle stories for the Fingal region and surrounding areas, keeping readers informed and engaged with their community.',
      emos: ['💻', '🇮🇪'],
    },
  ],
  [
    'IE_GORY',
    {
      name: 'Gorey Guardian',
      url: 'https://www.independent.ie/regionals/wexford/gorey-news/',
      est: 1993,
      about:
        'Local Wexford Sport, Entertainment, Business & Lifestyle news for Gorey.',
      emos: ['💻', '🇮🇪'],
    },
  ],
  [
    'IE_NWRS',
    {
      name: 'New Ross Standard',
      url: 'https://www.independent.ie/regionals/wexford/new-ross-news/',
      est: 1889,
      about: 'Sport, Entertainment, Business & Lifestyle news in New Ross.',
      emos: ['💻', '🇮🇪'],
    },
  ],
  [
    'IE_SSTR',
    {
      name: 'The Southern Star',
      url: 'https://www.southernstar.ie/',
      est: 1889,
      about:
        'Weekly newspaper covering the areas of South, East, Mid and West Cork.',
      emos: ['💻', '🇮🇪'],
    },
  ],
  [
    'IE_STRW',
    {
      name: 'Strabane Weekly News and Tyrone & Donegal Reporter',
      url: 'https://www.strabaneweekly.co.uk/',
      est: 2008,
      about:
        'Local news, sports, events, and other topics of interest to the communities of Strabane, Tyrone, and Donegal.',
      emos: ['💻', '🇮🇪'],
    },
  ],
  [
    'IE_TYCN',
    {
      name: 'The Tyrone Constitution',
      url: 'https://www.tyronecon.co.uk/',
      est: 1844,
      about:
        'The oldest newspaper in Tyrone with circulation around much of Tyrone and Fermanagh.',
      emos: ['💻', '🇮🇪'],
    },
  ],
  [
    'IE_ULGZ',
    {
      name: 'Ulster Gazette and Armagh Standard',
      url: 'https://www.ulstergazette.co.uk/',
      est: 1844,
      about: 'The largest circulation newspaper in Armagh city and district.',
      emos: ['💻', '🇮🇪'],
    },
  ],
  [
    'IE_WCRK',
    {
      name: 'West Cork People',
      url: 'https://westcorkpeople.ie/',
      est: 2005,
      about: 'Monthly community paper distributed all over West Cork.',
      emos: ['💻', '🇮🇪'],
    },
  ],
  [
    'IE_INIE',
    {
      name: 'Inside Ireland',
      url: 'https://insideireland.ie/',
      est: 2008,
      about:
        'Not-for-profit news outlet covering local stories affecting communities in Ireland. Contributors come from all over Ireland and are hobbyist and professional journalists, chronicling stories from all four corners of the island',
      emos: ['💻', '🇮🇪'],
    },
  ],
  [
    'IE_KLAD',
    {
      name: 'Killarney Advertiser',
      url: 'https://killarneyadvertiser.ie/',
      est: 1973,
      about:
        'Latest local, business, sport, lifestyle, jobs & entertainment news from around Killarney.',
      emos: ['💻', '🇮🇪'],
    },
  ],
  [
    'IE_LBRT',
    {
      name: 'The Liberty',
      url: 'https://www.theliberty.ie/',
      est: 2011,
      about:
        'A local news website for the Liberties by TUDublin journalism students.',
      emos: ['💻', '🇮🇪'],
    },
  ],
  [
    'IE_NEWD',
    {
      name: 'Newry Democrat',
      url: 'https://www.newrydemocrat.com/',
      est: 2010,
      about: 'Local news, features and sport.',
      emos: ['💻', '🇮🇪'],
    },
  ],
  [
    'IE_NG24',
    {
      name: 'Nasz Głos',
      url: 'https://www.ng24.ie/',
      est: 2009,
      about: 'Polska gazeta w Irlandii.',
      emos: ['💻', '🇮🇪', '🇵🇱'],
    },
  ],
  [
    'IE_GLSS',
    {
      name: 'The Gloss',
      url: 'https://thegloss.ie/',
      est: 2006,
      emos: ['💻', '👚'],
    },
  ],
  [
    'IE_IMPR',
    {
      name: 'The Impartial Reporter',
      url: 'https://www.impartialreporter.com/',
      est: 1825,
      emos: ['📰', '🇮🇪'],
    },
  ],
  [
    'IE_ECHO',
    {
      name: 'The Irish Echo',
      url: 'https://www.irishecho.com/',
      est: 1928,
      emos: ['📰', '🇮🇪'],
    },
  ],
  [
    'IE_FELD',
    {
      name: 'The Irish Field',
      url: 'https://www.theirishfield.ie/',
      est: 1870,
      emos: ['📰', '🏇'],
    },
  ],
  [
    'IE_NEWS',
    {
      name: 'The Irish News',
      url: 'https://www.irishnews.com/',
      est: 1891,
      emos: ['📰', '🇮🇪'],
    },
  ],
  [
    'IE_POST',
    {
      name: 'The Irish Post',
      url: 'https://www.irishpost.com/',
      est: 1970,
      emos: ['📰', '🇮🇪'],
    },
  ],
  [
    'IE_TIME',
    {
      name: 'The Irish Times',
      url: 'https://www.irishtimes.com/',
      est: 1859,
      emos: ['📰', '🇮🇪'],
    },
  ],
  [
    'IE_WRLD',
    {
      name: 'The Irish World',
      url: 'https://www.theirishworld.com/',
      est: 1987,
      emos: ['📰', '🇮🇪'],
    },
  ],
  [
    'IE_JRNL',
    {
      name: 'TheJournal.ie',
      url: 'https://www.thejournal.ie/',
      est: 2010,
      emos: ['💻', '🇮🇪'],
    },
  ],
  [
    'IE_KRYM',
    {
      name: 'The Kerryman',
      url: 'https://www.independent.ie/regionals/kerryman/',
      est: 1904,
      emos: ['📰', '🇮🇪'],
    },
  ],
  [
    'IE_MUNX',
    {
      name: 'The Munster Express',
      url: 'https://www.munster-express.ie/',
      est: 1860,
      emos: ['📰', '🇮🇪'],
    },
  ],
  [
    'IE_CLWN',
    {
      name: 'The Nationalist',
      url: 'https://carlow-nationalist.ie/',
      est: 1883,
      emos: ['📰', '🇮🇪'],
    },
  ],
  [
    'IE_SLGC',
    {
      name: 'The Sligo Champion',
      url: 'https://www.independent.ie/regionals/sligochampion',
      est: 1836,
      emos: ['📰', '🇮🇪'],
    },
  ],
  [
    'IE_TMHD',
    {
      name: 'The Tuam Herald',
      url: 'https://www.tuamherald.ie/',
      est: 1837,
      emos: ['📰', '🇮🇪'],
    },
  ],
  [
    'IE_WXFP',
    {
      name: 'The Wexford People',
      url: 'https://www.independent.ie/regionals/wexford/',
      est: 1853,
      emos: ['📰', '🇮🇪'],
    },
  ],
  [
    'IE_WKWP',
    {
      name: 'The Wicklow People',
      url: 'https://www.independent.ie/regionals/wicklow/',
      est: 1882,
      emos: ['📰', '🇮🇪'],
    },
  ],
  [
    'IE_42',
    {
      name: 'The 42',
      url: 'https://www.the42.ie/',
      est: 2010,
      emos: ['💻', '⚽'],
    },
  ],
  [
    'IE_TIPL',
    {
      name: 'Tipperary Live',
      url: 'https://www.tipperarylive.ie/',
      est: 2019,
      emos: ['💻', '🇮🇪'],
    },
  ],
  [
    'IE_TN2',
    {
      name: 'TN2 Magazine',
      url: 'https://www.tn2magazine.ie/',
      est: 2012,
      emos: ['💻', '🧑‍🎓'],
    },
  ],
  [
    'IE_TRTY',
    {
      name: 'Trinity News',
      url: 'https://trinitynews.ie/',
      est: 1953,
      emos: ['📰', '🧑‍🎓'],
    },
  ],
  [
    'IE_TRSC',
    {
      name: 'Tuairisc',
      url: 'https://tuairisc.ie/',
      est: 2014,
      emos: ['💻', '🇮🇪'],
    },
  ],
  [
    'IE_TYRC',
    {
      name: 'Tyrone Courier',
      url: 'https://www.tyronecourier.co.uk/',
      est: 1880,
      emos: ['📰', '🇮🇪'],
    },
  ],
  [
    'IE_UCEX',
    {
      name: 'University Express',
      url: 'https://uccexpress.ie/',
      est: 1997,
      emos: ['💻', '🧑‍🎓'],
    },
  ],
  [
    'IE_UNOB',
    {
      name: 'University Observer',
      url: 'https://universityobserver.ie/',
      est: 1994,
      emos: ['📰', '🧑‍🎓'],
    },
  ],
  [
    'IE_UNIT',
    {
      name: 'University Times',
      url: 'https://universitytimes.ie/',
      est: 2009,
      emos: ['💻', '🧑‍🎓'],
    },
  ],
  [
    'IE_VLGE',
    {
      name: 'Village Magazine',
      url: 'https://villagemagazine.ie/',
      est: 2004,
      emos: ['💻', '🇮🇪'],
    },
  ],
  [
    'IE_WTRL',
    {
      name: 'Waterford Live',
      url: 'https://www.waterfordlive.ie/',
      est: 2018,
      emos: ['💻', '🇮🇪'],
    },
  ],
  [
    'IE_WTRN',
    {
      name: 'Waterford News & Star',
      url: 'https://waterford-news.ie/',
      est: 1848,
      emos: ['📰', '🇮🇪'],
    },
  ],
  [
    'IE_WSTX',
    {
      name: 'Westmeath Examiner',
      url: 'https://www.westmeathexaminer.ie/',
      est: 1882,
      emos: ['📰', '🇮🇪'],
    },
  ],
  [
    'IE_WSTI',
    {
      name: 'Westmeath Independent',
      url: 'https://www.westmeathindependent.ie/',
      est: 1846,
      emos: ['📰', '🇮🇪'],
    },
  ],
  [
    'IE_WSTR',
    {
      name: 'Western People',
      url: 'https://westernpeople.ie/',
      est: 1883,
      emos: ['📰', '🇮🇪'],
    },
  ],
  [
    'IE_WLFM',
    {
      name: 'WLR FM',
      url: 'https://www.wlrfm.com/',
      est: 1989,
      emos: ['📻', '🇮🇪'],
    },
  ],
  [
    'IE_WW',
    {
      name: 'Womans Way',
      url: 'https://www.womansway.ie/',
      est: 1963,
      emos: ['📰', '👭'],
    },
  ],
]);

export const INNewsSources = new Map<string, NewsSource>([
  [
    'IN_BYSC',
    {
      name: 'Bombay Samachar',
      url: 'https://bombaysamachar.com/',
      est: 1822,
      about:
        "The Bombay Samachar, now known as Mumbai Samachar, stands as the oldest continuously published newspaper in India. Published in both English and Gujarati, it covers a wide array of topics including local, national and international news, politics, business, entertainment, sports, and more. The newspaper's rich history and commitment to accurate journalism has made it a trusted news source among diverse readership across India and beyond.\n\nબોમ્બે સમાચાર, હવે મુંબઈ સમાચાર તરીકે ઓળખાય છે, તે ભારતમાં સતત પ્રકાશિત થતી જણાવતી સૌથી જૂની અખબાર તરીકે ઉભી રહી છે. તે ઇંગ્લિશ અને ગુજરાતી બન્ને ભાષાઓમાં પ્રકાશિત થાય છે અને તે સ્થાનિક, રાષ્ટ્રીય અને આંતરરાષ્ટ્રીય સમાચાર, રાજકીય, વ્યાપાર, મનોરંજન, ખેલાડી વગેરે વિવિધ વિષયો પર કવરેજ આપે છે. અખબારની સમૃદ્ધ ઇતિહાસ અને યથાર્થ પત્રકારિતાની પ્રતિજ્ઞાને ભારત અને તેની પરાની વાચકો વચ્ચે વિશ્વસનીય સમાચાર સ્ત્રોત બની ગઈ છે.",
      emos: ['📰', '🇮🇳'],
      langs: ['en', 'gu'],
      tags: [
        'BombaySamachar',
        'MumbaiSamachar',
        'IndianNews',
        'LocalNews',
        'NationalNews',
        'InternationalNews',
        'Politics',
        'Business',
        'Entertainment',
        'Sports',
        'TrustedNewsSource',
      ],
      socials: {
        email: 'mailto:samachar.bombay@gmail.com',
        facebook: 'https://www.facebook.com/Mumbaisamachar4u/',
        instagram: 'https://www.instagram.com/mumbaisamachar/',
        twitter: 'https://twitter.com/Msamachar4u',
        whatsapp: 'https://api.whatsapp.com/send?phone=7045430579',
        youtube: 'https://www.youtube.com/@MumbaiSamachar4u',
      },
      headerBG: '#fff',
      primaryColor: '#7c0000',
    },
  ],
  [
    'IN_TPNR',
    {
      name: 'The Pioneer',
      url: 'https://www.dailypioneer.com/',
      est: 1864,
      about:
        "Brings today's news in English, breaking news from India and around the World. Sports, Business, Health, Fitness, Bollywood, Entertainment and Opinions.",
      emos: ['📰', '🇮🇳'],
      langs: ['en', 'hi'],
    },
  ],
  [
    'IN_THND',
    {
      name: 'The Hindu',
      url: 'https://www.thehindu.com/',
      est: 1878,
      about:
        'Breaking News & Latest News from India and the World. Politics, Sports, Business, Arts and Entertainment.',
      emos: ['📰', '🇮🇳'],
      langs: ['en'],
    },
  ],
  [
    'IN_HST',
    {
      name: 'Hindustan Times',
      url: 'https://www.hindustantimes.com/',
      est: 1924,
      about:
        "Hindustan Times, one of India's leading news sources, offers in-depth coverage across a wide range of topics including politics, sports, business, lifestyle, and entertainment. With its diligent reporting on local city issues as well as global developments, it provides a complete perspective of the world to its readers. The news portal strives to deliver real-time updates, ensuring its audience stays informed and engaged.",
      emos: ['📰', '🇮🇳'],
      langs: ['en'],
      tags: [
        'HindustanTimes',
        'IndianNews',
        'InternationalNews',
        'Politics',
        'Sports',
        'Business',
        'Lifestyle',
        'Entertainment',
        'LocalNews',
      ],
      socials: {
        android: 'https://play.google.com/store/apps/details?id=com.ht.news',
        apple:
          'https://apps.apple.com/in/app/hindustan-times-news-updates/id1000991178',
        facebook: 'https://www.facebook.com/hindustantimes',
        linkedin: 'https://www.linkedin.com/company/hindustantimes',
        instagram: 'https://www.instagram.com/hindustantimes/',
        twitter: 'https://twitter.com/htTweets',
      },
      headerBG: '#011e29',
      primaryColor: '#00b1cd',
    },
  ],
  [
    'IN_IXPR',
    {
      name: 'The Indian Express',
      url: 'https://indianexpress.com/',
      est: 1932,
      about:
        'The latest news from India and around the world. Breaking News, current headlines, live news, latest news on elections, business, sports, world, and entertainment.',
      emos: ['📰', '🇮🇳'],
      langs: ['en'],
    },
  ],
  [
    'IN_DHRL',
    {
      name: 'Deccan Herald',
      url: 'https://www.deccanherald.com/',
      est: 1948,
      about:
        "Deccan Herald provides comprehensive coverage of the latest news from India and around the world. Its broad content portfolio includes categories like sports, business, fitness, entertainment, opinions, and more, catering to a diverse readership with a variety of interests. As one of India's leading English dailies, it is dedicated to delivering credible and accurate news content.",
      emos: ['📰', '🇮🇳'],
      langs: ['en'],
      tags: [
        'DeccanHerald',
        'IndianNews',
        'WorldNews',
        'Sports',
        'Business',
        'Fitness',
        'Entertainment',
        'Opinions',
      ],
      socials: {
        android: 'https://play.google.com/store/apps/details?id=com.tpml.dh',
        apple: 'https://apps.apple.com/us/app/deccan-herald-news/id1511179557',
        facebook: 'https://www.facebook.com/deccanherald/',
        twitter: 'https://twitter.com/deccanherald',
        instagram: 'https://www.instagram.com/deccanherald/',
      },
      headerBG: '#fff',
      primaryColor: '#0087a8',
    },
  ],
  [
    'IN_TLGP',
    {
      name: 'The Telegraph',
      url: 'https://www.telegraphindia.com/',
      est: 1982,
      about:
        'Latest News on Politics, Business, Sports, Bollywood, Technology, and Science.',
      emos: ['📰', '🇮🇳'],
      langs: ['en'],
    },
  ],
  [
    'IN_DNA',
    {
      name: 'Daily News & Analysis',
      url: 'https://www.dnaindia.com/',
      est: 2005,
      about:
        'Covers all latest and breaking news on Politics, Business, Sports, Bollywood, technology & health from India & the world.',
      emos: ['📰', '🇮🇳'],
      langs: ['en'],
    },
  ],
  [
    'IN_DNCH',
    {
      name: 'Deccan Chronicle',
      url: 'https://www.deccanchronicle.com/',
      est: 1938,
      about:
        'Brings the latest news, views, analysis and images from India and the world.',
      emos: ['📰', '🇮🇳'],
      langs: ['en'],
    },
  ],
  [
    'IN_NVHT',
    {
      name: 'The Navhind Times',
      url: 'https://www.navhindtimes.in/',
      est: 1963,
      about:
        'Reporting, commentaries and features on political and economic affairs. Covers both North Goa and South Goa comprehensively. Information and articles addressed to various sections of society, including discerning readers (PANORAMA), cultural enthusiasts (BUZZ), businessmen and consumers (B & C) Women (ZEST), youth and children (KURIOCITY).',
      emos: ['📰', '🇮🇳'],
      langs: ['en'],
    },
  ],
  [
    'IN_AAGE',
    {
      name: 'The Asian Age',
      url: 'https://www.asianage.com/',
      est: 1994,
      about:
        'The only Indian newspaper with an international edition (London). Shows what is happening, and the reasons behind it.',
      emos: ['📰', '🇮🇳'],
      langs: ['en'],
    },
  ],
  [
    'IN_BIZS',
    {
      name: 'Business Standard',
      url: 'https://www.business-standard.com',
      est: 1975,
      about:
        'Latest stock share market news, financial news, economy news, company news, politics news, India news, breaking news, Indian economy news.',
      emos: ['📰', '🇮🇳'],
      langs: ['en'],
    },
  ],
  [
    'IN_HBIZ',
    {
      name: 'हिंदी बिजनेस स्टैंडर्ड',
      url: 'https://hindi.business-standard.com/',
      est: 1975,
      about:
        'पढ़ें आज की ताजा ख़बरें, खेल सुर्खियां, व्यापार, बाजार विश्लेषण और राजनीति के समाचार.',
      emos: ['📰', '🇮🇳'],
      langs: ['hi'],
    },
  ],
  [
    'IN_ECOT',
    {
      name: 'The Economic Times',
      url: 'https://economictimes.indiatimes.com/',
      est: 1961,
      about:
        'Latest Business news and updates on Finance, share market, IPO, economy.',
      emos: ['📰', '🇮🇳'],
      langs: ['en'],
    },
  ],
  [
    'IN_TIMS',
    {
      name: 'India Times',
      url: 'https://www.indiatimes.com/',
      est: 1998,
      about:
        'Brings news, articles, stories and videos on entertainment, latest lifestyle, culture and new technologies emerging worldwide.',
      emos: ['📰', '🇮🇳'],
      langs: ['en'],
    },
  ],
  [
    'IN_FEXP',
    {
      name: 'Financial Express',
      url: 'https://www.financialexpress.com/',
      est: 1961,
      about:
        'Financial Express is a comprehensive source for business and finance news in India. The platform offers timely share market updates, live stock market news, IPO updates, banking, and insurance sector updates, amongst others. It serves as a trusted resource for financial professionals and those interested in the Indian and global economies.',
      emos: ['📰', '🇮🇳'],
      langs: ['en'],
      tags: [
        'FinancialExpress',
        'BusinessNews',
        'FinanceNews',
        'StockMarketNews',
        'BankingNews',
        'InsuranceNews',
        'IndianNews',
      ],
      socials: {
        email: 'mailto:feedback@indianexpress.com',
        facebook: 'https://www.facebook.com/thefinancialexpress',
        twitter: 'https://twitter.com/FinancialXpress',
        linkedin:
          'https://www.linkedin.com/company/the-financial-express-india/',
        android:
          'https://play.google.com/store/apps/details?id=com.financialexpress.android',
        apple:
          'https://apps.apple.com/us/app/financial-express-for-iphone/id508738603',
      },
      headerBG: '#fff',
      primaryColor: '#dc0505',
      secondaryColor: '#003f74',
    },
  ],
  [
    'IN_NIEX',
    {
      name: 'The New Indian Express',
      url: 'https://www.newindianexpress.com/',
      est: 1932,
      about:
        'Incorporates national and international themes and sections on developmental issues, society, politics, literature, arts, cinema, travel, lifestyle, sports, business, finance, new-age living, self-development and entertainment.',
      emos: ['📰', '🇮🇳'],
      langs: ['en'],
    },
  ],
  [
    'IN_MINT',
    {
      name: 'Mint',
      url: 'https://www.livemint.com/',
      est: 2007,
      about:
        'Mint is a reputable source of business news from India and around the world. It provides the latest updates on the share market, financial news, economic trends, banking developments, and more. By offering comprehensive coverage and in-depth analysis, Mint helps its readers stay informed about the fast-paced world of business.',
      emos: ['📰', '🇮🇳'],
      langs: ['en'],
      tags: [
        'Mint',
        'BusinessNews',
        'ShareMarketNews',
        'FinancialNews',
        'EconomicNews',
        'BankingNews',
        'IndianNews',
        'WorldNews',
      ],
      socials: {
        email: 'mailto:support@livemint.com',
        android:
          'https://play.google.com/store/apps/details?id=com.htmedia.mint',
        apple:
          'https://apps.apple.com/in/app/mint-news-app-business-more/id470175900',
        facebook: 'https://www.facebook.com/mint.live/',
        twitter: 'https://twitter.com/livemint',
      },
      headerBG: '#fff',
      primaryColor: '#333',
    },
  ],
  [
    'IN_GSMC',
    {
      name: 'ગુજરાત સમાચાર',
      url: 'https://www.gujaratsamachar.com/',
      est: 1932,
      about:
        'News from Ahmedabad, Baroda, Bhavnagar, Bhuj, Gandhinagar, Kheda-Anand, North Gujarat, Rajkot & Surat. Aims to cover each and every segment of the society not with standing their cast, religion, economic status and give due emphasis to all the adverse viewpoints.',
      emos: ['📰', '🇮🇳'],
      langs: ['gu'],
    },
  ],
  [
    'IN_TRBI',
    {
      name: 'The Tribune',
      url: 'https://www.tribuneindia.com/',
      est: 1881,
      about:
        'Publishes news and views without bias or prejudice. Restraint and moderation, rather than agitational language and partisanship, are hallmarks of the paper.',
      emos: ['📰', '🇮🇳'],
      langs: ['en'],
    },
  ],
]);

export const UKNewsSources = new Map<string, NewsSource>([
  [
    'UK_MIRR',
    {
      name: 'The Mirror',
      url: 'https://www.mirror.co.uk/',
      est: 1903,
      about:
        "The Mirror is one of UK's most popular tabloids, providing a mix of latest news, sports updates, celebrity gossip, TV highlights, political analysis, and lifestyle pieces. With its unique style of storytelling, The Mirror not only brings the big stories to its readers but also keeps them at the heart of every narrative. Known for its comprehensive coverage and investigative journalism, The Mirror continues to be a go-to source for many readers across the UK.",
      emos: ['📰', '🇬🇧'],
      langs: ['en'],
      tags: [
        'TheMirror',
        'UKNews',
        'LocalNews',
        'NationalNews',
        'InternationalNews',
        'Sports',
        'CelebrityGossip',
        'TVHighlights',
        'Politics',
        'Lifestyle',
        'InvestigativeJournalism',
      ],
      socials: {
        email: 'mailto:mirrornews@mirror.co.uk',
        facebook: 'https://www.facebook.com/DailyMirror',
        twitter: 'https://twitter.com/DailyMirror',
        tiktok: 'https://www.tiktok.com/@dailymirror',
        instagram: 'https://www.instagram.com/dailymirror',
      },
      headerBG: '#a92323',
      primaryColor: '#e90e0e',
      secondaryColor: 'lightblue',
    },
  ],
  [
    'UK_TEL',
    {
      name: 'The Telegraph',
      url: 'https://www.telegraph.co.uk/',
      est: 1855,
      about:
        'The Telegraph, a widely recognized British newspaper, offers the latest news, business updates, sport coverage, lifestyle and culture stories, as well as exclusive videos from Telegraph TV. Known for its authoritative journalism and comprehensive coverage of a variety of topics, The Telegraph has become one of the most influential voices in the UK. Its dedication to accuracy, insightful commentaries, and independent reporting has made it a go-to source for readers seeking updates and analysis on local, national, and international affairs.',
      emos: ['📰', '🇬🇧'],
      langs: ['en'],
      tags: [
        'TheTelegraph',
        'UKNews',
        'GlobalNews',
        'Business',
        'Sport',
        'Culture',
        'Lifestyle',
        'TelegraphTV',
        'BritishPress',
        'AuthoritativeJournalism',
      ],
      socials: {
        facebook: 'https://www.facebook.com/TELEGRAPH.CO.UK/',
        instagram: 'https://www.instagram.com/telegraph/',
        twitter: 'https://twitter.com/@Telegraph',
        snapchat: 'https://www.snapchat.com/discover/The_Telegraph/8148798159',
        linkedin: 'https://www.linkedin.com/company/9053/',
        youtube: 'https://www.youtube.com/channel/UCPgLNge0xqQHWM5B5EFH9Cg',
        apple:
          'https://apps.apple.com/gb/app/the-telegraph-uk-world-news/id388947468',
        android:
          'https://play.google.com/store/apps/details?id=uk.co.telegraph.kindlefire',
      },
      headerBG: '#fff',
      primaryColor: '#02c3aa',
    },
  ],
  [
    'UK_TIME',
    {
      name: 'The Times',
      url: 'https://www.thetimes.co.uk/',
      est: 1785,
      about:
        "The Times and The Sunday Times, British newspapers, deliver comprehensive coverage of local, national, and international news and opinions. They have won numerous awards and are renowned for their insightful analyses and in-depth reporting. The Times' readership spans the globe, making it a significant voice in the global news scene.",
      emos: ['📰', '🇬🇧'],
      langs: ['en'],
      tags: [
        'TheTimes',
        'TheSundayTimes',
        'UKNews',
        'InternationalNews',
        'NewsAnalysis',
        'InDepthReporting',
      ],
      socials: {
        podcast: 'https://www.thetimes.co.uk/podcasts',
        email: 'mailto:care@thetimes.co.uk',
        facebook: 'https://www.facebook.com/timesandsundaytimes/',
        twitter: 'https://twitter.com/thetimes',
        instagram: 'https://www.instagram.com/thetimes/',
        linkedin: 'https://www.linkedin.com/company/the-times',
        pinterest: 'https://www.pinterest.co.uk/thetimessunday/',
        android: 'https://play.google.com/store/apps/details?id=uk.co.thetimes',
        apple:
          'https://apps.apple.com/gb/app/the-times-uk-world-news/id436792321',
      },
      headerBG: '#fff',
      primaryColor: '#1573a2',
    },
  ],
  [
    'UK_MEN',
    {
      name: 'Manchester Evening News',
      url: 'https://www.manchestereveningnews.co.uk/',
      est: 1868,
      about:
        'Manchester Evening News is a comprehensive news outlet providing coverage on a wide range of topics including local and regional news, sports, events, and more. Focusing primarily on central and Greater Manchester, it keeps readers informed about the latest happenings in Oldham, Rochdale, Glossop, and beyond. This commitment to keeping the community updated has made it a trusted news source for residents and those interested in Manchester.',
      emos: ['📰', '🇬🇧'],
      langs: ['en'],
      tags: [
        'ManchesterEveningNews',
        'ManchesterNews',
        'UKNews',
        'LocalNews',
        'RegionalNews',
        'OldhamNews',
        'RochdaleNews',
        'GlossopNews',
        'GreaterManchesterNews',
        'BritishPress',
        'CurrentAffairs',
      ],
      socials: {
        email: 'mailto:newsdesk@men-news.co.uk',
        facebook: 'https://www.facebook.com/ManchesterEveningNews',
        twitter: 'https://twitter.com/MENNewsdesk',
        instagram: 'https://www.instagram.com/manchestereveningnews',
      },
      headerBG: '#f1bb00',
      primaryColor: '#f1bb00',
    },
  ],
  [
    'UK_INDP',
    {
      name: 'The Independent',
      url: 'https://www.independent.co.uk',
      est: 1986,
      about:
        'The Independent is a British online newspaper, previously published as a broadsheet. It provides an impartial viewpoint on various topics including politics, science, culture, travel, and more. Known for its in-depth analysis, comprehensive reporting, and insightful commentaries, The Independent covers everything from breaking news to investigative journalism, offering a broad perspective on local, national, and international events.',
      emos: ['📰', '🇬🇧'],
      langs: ['en'],
      tags: [
        'TheIndependent',
        'UKNews',
        'GlobalNews',
        'Politics',
        'Science',
        'Culture',
        'Travel',
        'BritishPress',
        'InvestigativeJournalism',
        'ImpartialNews',
      ],
      socials: {
        email: 'mailto:newsdesk@independent.co.uk ',
        facebook: 'https://www.facebook.com/TheIndependentOnline',
        twitter: 'https://twitter.com/Independent',
      },
      headerBG: '#fff',
      primaryColor: '#ec1a2e',
    },
  ],
  [
    'UK_PJ',
    {
      name: 'The Press and Journal',
      url: 'https://www.pressandjournal.co.uk/',
      est: 1748,
      about:
        'The Press and Journal has been the trusted voice of the north and north-east of Scotland for generations. With a focus on local news, it provides essential updates on politics, sports, business, lifestyle, and more. Its commitment to delivering high-quality journalism and in-depth coverage has solidified its reputation as a key information provider in its region, helping readers stay informed about their community and beyond.',
      emos: ['📰', '🏴󠁧󠁢󠁳󠁣󠁴󠁿'],
      langs: ['en'],
      tags: [
        'ThePressAndJournal',
        'ScotlandNews',
        'UKNews',
        'LocalNews',
        'Politics',
        'Sports',
        'Business',
        'Lifestyle',
      ],
      socials: {
        podcast: 'https://www.pressandjournal.co.uk/press-journal-podcasts/',
        email: 'mailto:editor@pressandjournal.co.uk',
        facebook: 'https://www.facebook.com/ThePressandJournal/',
        instagram: 'https://www.instagram.com/pressandjournal/',
        linkedin: 'https://www.linkedin.com/showcase/the-press-and-journal/',
        twitter: 'https://www.twitter.com/pressjournal',
      },
      headerBG: '#fff',
      primaryColor: '#2b464b',
    },
  ],
  [
    'UK_ECOM',
    {
      name: 'The Economist',
      url: 'https://www.economist.com/',
      est: 1843,
      about:
        'The Economist is renowned for its comprehensive global news and analysis. It provides authoritative, fair-minded, and fact-checked coverage on a wide range of topics, including world politics, economics, business, science and technology, culture, and more. By valuing clarity, brevity, and wit, The Economist remains a must-read publication for those who want to stay informed about world affairs.',
      emos: ['📰', '🇬🇧'],
      langs: ['en'],
      tags: [
        'TheEconomist',
        'GlobalNews',
        'WorldPolitics',
        'Economics',
        'Business',
        'Science',
        'Technology',
        'Culture',
        'UKNews',
      ],
      socials: {
        facebook: 'https://www.facebook.com/theeconomist',
        instagram: 'https://www.instagram.com/theeconomist',
        twitter: 'https://www.twitter.com/theeconomist',
        linkedin: 'https://www.linkedin.com/company/the-economist',
        youtube: 'https://www.youtube.com/user/economistmagazine',
        rss: 'https://www.economist.com/rss',
      },
      headerBG: '#fff',
      primaryColor: '#e62b24',
    },
  ],
  [
    'UK_KENT',
    {
      name: 'Kentish Express',
      url: 'https://www.kentonline.co.uk/',
      est: 1855,
      about:
        "Kentish Express is a trusted source of breaking news, sports, business, and local events in Kent and Medway. It offers a thorough coverage of the region's activities, making it a key resource for locals and anyone interested in Kentish affairs.",
      emos: ['📰', '🇬🇧'],
      langs: ['en'],
      tags: [
        'KentishExpress',
        'UKNews',
        'KentNews',
        'MedwayNews',
        'LocalNews',
        'BusinessNews',
        'SportsNews',
      ],
      socials: {
        email: 'mailto:',
        facebook: '',
        twitter: '',
      },
      headerBG: '#266394',
      primaryColor: '#FFDD00',
    },
  ],
  [
    'UK_OXM',
    {
      name: 'Oxford Mail',
      url: 'https://www.oxfordmail.co.uk/',
      est: 1928,
      about:
        'Oxford Mail provides the latest news, sports updates, and events coverage across Oxfordshire. With a commitment to delivering reliable and timely news, it serves as a vital resource for residents of Oxfordshire to stay informed about local affairs, sporting events, community happenings, and more.',
      emos: ['📰', '🇬🇧'],
      langs: ['en'],
      tags: [
        'OxfordMail',
        'UKNews',
        'OxfordshireNews',
        'SportsUpdates',
        'EventsCoverage',
        'LocalNews',
        'CommunityNews',
        'BritishPress',
        'OxfordEvents',
        'OxfordSports',
        'CurrentAffairs',
      ],
      socials: {
        facebook: 'https://facebook.com/oxfordmail',
        twitter: 'https://twitter.com/theoxfordmail',
      },
      headerBG: '#fff',
      primaryColor: '#9d0d13',
      secondaryColor: '#000958',
    },
  ],
]);

export const NZNewsSources = new Map<string, NewsSource>([
  [
    'NZ_HRLD',
    {
      name: 'The New Zealand Herald',
      url: 'https://www.nzherald.co.nz/',
      est: 1863,
      about:
        'The New Zealand Herald serves as an essential news source, bringing you the latest breaking news, in-depth analysis, opinions, and multimedia content from New Zealand and across the globe. With a wide variety of topics covered including politics, business, sports, entertainment, and more, it ensures that its readers are always up-to-date with the world around them.',
      emos: ['📰', '🇳🇿'],
      langs: ['en'],
      tags: [
        'TheNewZealandHerald',
        'NZNews',
        'InternationalNews',
        'Politics',
        'BusinessNews',
        'Sports',
        'Entertainment',
        'Opinion',
      ],
      socials: {
        email:
          'mailto:newsdesk@nzherald.co.nz?subject=Online enquiry - Contact the Newsroom',
        facebook: 'https://www.facebook.com/nzherald.co.nz',
        twitter: 'https://twitter.com/nzherald',
        instagram: 'https://www.instagram.com/nzherald/',
        youtube: 'https://www.youtube.com/@nzheraldtv',
      },
      headerBG: '#fff',
      primaryColor: '#ecac0c',
    },
  ],
  [
    'NZ_ODT',
    {
      name: 'Otago Daily Times',
      url: 'https://www.odt.co.nz',
      est: 1861,
      about:
        "New Zealand's oldest daily newspaper. Strong local Otago news coverage combined with national and international news.",
      emos: ['📰', '🇳🇿'],
      langs: ['en'],
    },
  ],
  [
    'NZ_HBT',
    {
      name: 'Hawke’s Bay Today',
      url: 'https://www.nzherald.co.nz/hawkes-bay-today',
      est: 1999,
      about:
        'Latest Napier, Hasting and Hawkes Bay news including local news, business, sport, lifestyle, entertainment and more.',
      emos: ['📰', '🇳🇿'],
      langs: ['en'],
    },
  ],
  [
    'NZ_AGO',
    {
      name: 'Ashburton Guardian',
      url: 'https://www.guardianonline.co.nz/',
      est: 1879,
      about: 'News, online, all the time.',
      emos: ['📰', '🇳🇿'],
      langs: ['en'],
    },
  ],
  [
    'NZ_BOPT',
    {
      name: 'Bay of Plenty Times ',
      url: 'https://www.nzherald.co.nz/bay-of-plenty-times',
      est: 1872,
      about:
        'Latest Tauranga and Bay of Plenty news including local news, business, sport, lifestyle, entertainment and more.',
      emos: ['📰', '🇳🇿'],
      langs: ['en'],
    },
  ],
  [
    'NZ_TGH',
    {
      name: 'The Gisborne Herald',
      url: 'https://www.gisborneherald.co.nz/',
      est: 1874,
      about: 'Daily evening newspaper for Gisborne and its environs',
      emos: ['📰', '🇳🇿'],
      langs: ['en'],
    },
  ],
  [
    'NZ_TNA',
    {
      name: 'The Northern Advocate',
      url: 'https://www.nzherald.co.nz/northern-advocate',
      est: 1902,
      about:
        'Local and regional news from the Northland region, including Whangarei, far north and Kaipara.',
      emos: ['📰', '🇳🇿'],
      langs: ['en'],
    },
  ],
  [
    'NZ_OM',
    {
      name: 'Oamaru Mail',
      url: 'https://www.oamarumail.co.nz/',
      est: 1876,
      about:
        'Voice of the North Otago community for more than 130 years. A vibrant newspaper which reflects the interests of its population, from the arts and sport to local issues, tourism and farming.',
      emos: ['📰', '🇳🇿'],
      langs: ['en'],
    },
  ],
  [
    'NZ_WTA',
    {
      name: 'Wairarapa Times-Age',
      url: 'https://times-age.co.nz/',
      est: 1878,
      about: "Wairarapa's source of local news",
      emos: ['📰', '🇳🇿'],
      langs: ['en'],
    },
  ],
  [
    'NZ_WC',
    {
      name: 'Whanganui Chronicle',
      url: 'https://www.nzherald.co.nz/whanganui-chronicle/',
      est: 1856,
      about: 'Local and regional news from the Whanganui region.',
      emos: ['📰', '🇳🇿'],
      langs: ['en'],
    },
  ],
  [
    'NZ_RDP',
    {
      name: 'Rotorua Daily Post',
      url: 'https://www.nzherald.co.nz/rotorua-daily-post',
      est: 1885,
      about:
        'Local and regional news from the Rotorua region, including Rotorua, Whakatane and Taupo.',
      emos: ['📰', '🇳🇿'],
      langs: ['en'],
    },
  ],
  [
    'NZ_GMS',
    {
      name: 'Greymouth Star',
      url: 'https://www.greystar.co.nz/',
      est: 1866,
      about:
        'Daily evening (Monday-Saturday) newspaper circulating throughout the West Coast.',
      emos: ['📰', '🇳🇿'],
      langs: ['en'],
    },
  ],
]);

export const OZNewsSources = new Map<string, NewsSource>([
  [
    'OZ_AFR',
    {
      name: 'Australian Financial Review',
      url: 'https://www.afr.com/',
      est: 1951,
      about:
        'Reports the latest news from business, finance, investment and politics, updated in real time. Independent, award-winning journalism. Essential reading for the business and investor community.',
      emos: ['📰', '🇦🇺'],
      langs: ['en'],
    },
  ],
  [
    'OZ_DCN',
    {
      name: 'Daily Cargo News',
      url: 'https://www.thedcn.com.au/',
      est: 1891,
      about:
        'Provides the latest news covering the Australian shipping, trade, transport and maritime logistics industries. First published in 1891 as Daily Commercial News (DCN).',
      emos: ['📰', '🇦🇺'],
      langs: ['en'],
    },
  ],
  [
    'OZ_TGL',
    {
      name: 'Green Left',
      url: 'https://www.greenleft.org.au/',
      est: 1991,
      about:
        'Expose the lies, hypocrisy and bias of the billionaire class and their media. Help the organising efforts of all those actively resisting the increasingly authoritarian rule of the corporate rich.',
      emos: ['📰', '🇦🇺'],
      langs: ['en'],
    },
  ],
]);

export const USNewsSources = new Map<string, NewsSource>([
  [
    'US_ATDY',
    {
      name: 'USA Today',
      url: 'https://usatoday.com/',
      est: 1982,
      about:
        'Provides up-to-date coverage of US and international news, weather, entertainment, finance, and more.',
      emos: ['📰', '🇺🇸'],
      langs: ['en'],
    },
  ],
  [
    'US_WSJ',
    {
      name: 'The Wall Street Journal',
      url: 'https://www.wsj.com/',
      est: 1889,
      about:
        'Chronicling the rise of industries in America and around the world',
      emos: ['📰', '🇺🇸'],
      langs: ['en'],
    },
  ],
  [
    'US_NYT',
    {
      name: 'The New York Times',
      url: 'https://www.nytimes.com/',
      est: 1851,
      about:
        'Live news, investigations, opinion, photos and video by the journalists of The New York Times from more than 150 countries around the world.',
      emos: ['📰', '🇺🇸'],
      langs: ['en'],
    },
  ],
  [
    'US_LAT',
    {
      name: 'Los Angeles Times',
      url: 'https://www.latimes.com/',
      est: 1881,
      about:
        'The L.A. Times is a leading source of breaking news, entertainment, sports, politics, and more for Southern California and the world.',
      emos: ['📰', '🇺🇸'],
      langs: ['en'],
    },
  ],
  [
    'US_NYP',
    {
      name: 'New York Post',
      url: 'https://nypost.com/',
      est: 1801,
      about:
        'Breaking news, photos, and videos about New York, sports, business, entertainment, opinion, real estate, culture, fashion, and more.',
      emos: ['📰', '🇺🇸'],
      langs: ['en'],
    },
  ],
  [
    'US_MRCY',
    {
      name: 'The Mercury News',
      url: 'https://www.mercurynews.com/',
      est: 1851,
      about:
        'Source of breaking news, local news, sports, business, entertainment, lifestyle and opinion for Silicon Valley, San Francisco Bay Area and beyond.',
      emos: ['📰', '🇺🇸'],
      langs: ['en'],
    },
  ],
  [
    'US_CHGT',
    {
      name: 'Chicago Tribune',
      url: 'https://www.chicagotribune.com/',
      est: 1847,
      about:
        'Source of news and information in the Chicago area and the largest news organization in the Midwest.',
      emos: ['📰', '🇺🇸'],
      langs: ['en'],
    },
  ],
  [
    'US_HSTC',
    {
      name: 'Houston Chronicle',
      url: 'https://www.houstonchronicle.com/',
      est: 1901,
      about: 'Latest news on Houston, Texas, the United States and the world.',
      emos: ['📰', '🇺🇸'],
      langs: ['en'],
    },
  ],
  [
    'US_PHIQ',
    {
      name: 'The Philadelphia Inquirer',
      url: 'https://www.inquirer.com/',
      est: 1829,
      about: 'Front-row seat to the Greater Philadelphia region.',
      emos: ['📰', '🇺🇸'],
      langs: ['en'],
    },
  ],
  [
    'US_NWDY',
    {
      name: 'Newsday',
      url: 'https://www.newsday.com/',
      est: 1940,
      about:
        'Breaking News, data & opinions in business, sports, entertainment, travel, lifestyle, plus much more.',
      emos: ['📰', '🇺🇸'],
      langs: ['en'],
    },
  ],
  [
    'US_DNVP',
    {
      name: 'The Denver Post',
      url: 'https://www.denverpost.com/',
      est: 1892,
      about:
        'Latest Denver news, top Colorado news and local breaking news, including sports, weather, traffic, business, politics, photos and video.',
      emos: ['📰', '🇺🇸'],
      langs: ['en'],
    },
  ],
  [
    'US_STRT',
    {
      name: 'Star Tribune',
      url: 'https://www.startribune.com/',
      est: 1867,
      about: 'News, photos and videos from the Twin Cities and beyond.',
      emos: ['📰', '🇺🇸'],
      langs: ['en'],
    },
  ],
  [
    'US_CNN',
    {
      name: 'CNN (International)',
      url: 'https://edition.cnn.com/',
      est: 1980,
      about: 'Breaking US and World News and Video.',
      emos: ['📺', '🇺🇸'],
      langs: ['en'],
    },
  ],
  [
    'US_FOX',
    {
      name: 'FOX News (World)',
      url: 'https://www.foxnews.com/world',
      est: 1996,
      about: 'Latest world news and world video.',
      emos: ['📺', '🇺🇸'],
      langs: ['en'],
    },
  ],
  [
    'US_AZCT',
    {
      name: 'The Arizona Republic',
      url: 'https://azcentral.com/',
      est: 1890,
      about:
        'Breaking news and in-depth coverage of sports, things to do, travel and opinions.',
      emos: ['📰', '🇺🇸'],
      langs: ['en'],
    },
  ],
  [
    'US_DLLS',
    {
      name: 'The Dallas Morning News',
      url: 'https://www.dallasnews.com/',
      est: 1885,
      about:
        'Breaking news, investigations, reviews and opinion on business, sports, arts, entertainment, food, real estate, crime and more.',
      emos: ['📰', '🇺🇸'],
      langs: ['en'],
    },
  ],
  [
    'US_TPD',
    {
      name: 'The Plain Dealer',
      url: 'https://www.cleveland.com/',
      est: 1842,
      about:
        'The latest Cleveland, OH local news, sports news & US breaking news. View daily Northeast Ohio weather updates, watch videos and photos, join the discussion in forums.',
      emos: ['📰', '🇺🇸'],
      langs: ['en'],
    },
  ],
  [
    'US_CHST',
    {
      name: 'Chicago Sun-Times',
      url: 'https://chicago.suntimes.com/',
      est: 1948,
      about: 'Chicago News, Sports, Politics, Entertainment, Weather and More.',
      emos: ['📰', '🇺🇸'],
      langs: ['en'],
    },
  ],
  [
    'US_DFR',
    {
      name: 'Detroit Free Press',
      url: 'https://eu.freep.com/',
      est: 1831,
      about:
        "The Detroit Free Press, also known as Freep, is Michigan's oldest newspaper currently still in publication. It offers the latest news and stories from Detroit and the rest of Michigan. It covers a wide range of topics, including local and national politics, education, sports, entertainment, and more. The Detroit Free Press is dedicated to providing relevant, high-quality journalism to its readers.",
      emos: ['📰', '🇺🇸'],
      langs: ['en'],
      tags: [
        'DetroitFreePress',
        'Freep',
        'DetroitNews',
        'MichiganNews',
        'USNews',
        'LocalNews',
        'NationalNews',
        'Politics',
        'Education',
        'Sports',
        'Entertainment',
      ],
      socials: {
        email: 'mailto:',
        facebook: '',
        twitter: '',
      },
      headerBG: '#fff',
      primaryColor: '#1665cf;',
    },
  ],
  [
    'US_ORGL',
    {
      name: 'The Oregonian',
      url: 'https://www.oregonlive.com/',
      est: 1850,
      about:
        'The Oregonian provides comprehensive and timely coverage of news from Oregon and around the world. Readers can find up-to-date information on a wide array of topics including local news, sports, entertainment, business, and lifestyle. It also provides in-depth features and analyses on important issues affecting the community.',
      emos: ['📰', '🇺🇸'],
      langs: ['en'],
      tags: [
        'TheOregonian',
        'LocalNews',
        'RegionalNews',
        'USNews',
        'CommunityNews',
        'OregonNews',
      ],
      socials: {
        facebook: 'https://www.facebook.com/theoregonian',
        instagram: 'https://www.instagram.com/theoregonian/',
        twitter: 'https://twitter.com/Oregonian',
        youtube: 'https://www.youtube.com/user/oregoniannews/videos',
        linkedin: 'https://www.linkedin.com/company/16195',
        tiktok: 'https://www.tiktok.com/@theoregonian',
      },
      headerBG: '#000',
      primaryColor: '#555',
    },
  ],
  [
    'US_SDTR',
    {
      name: 'The San Diego Union-Tribune',
      url: 'https://www.sandiegouniontribune.com/',
      est: 1868,
      about: 'News about San Diego, California.',
      emos: ['📰', '🇺🇸'],
      langs: ['en'],
    },
  ],
  [
    'US_SFC',
    {
      name: 'San Francisco Chronicle',
      url: 'https://www.sfchronicle.com/',
      est: 1865,
      about:
        'Bay Area and San Francisco breaking news, sports, tech, and food and wine coverage, plus enhanced coverage of Giants, 49ers and Warriors.',
      emos: ['📰', '🇺🇸'],
      langs: ['en'],
    },
  ],
  [
    'US_BOSG',
    {
      name: 'The Boston Globe',
      url: 'https://www.bostonglobe.com/',
      est: 1872,
      about:
        "New England's best source for news, sports, opinion and entertainment. The Globe brings you breaking news, Spotlight Team investigations, year-round coverage of the Red Sox, Patriots, Celtics and Bruins, sharp editorials, stunning photography, and engaging arts, food and lifestyle journalism.",
      emos: ['📰', '🇺🇸'],
      langs: ['en'],
    },
  ],
  [
    'US_STLT',
    {
      name: 'St. Louis Post-Dispatch',
      url: 'https://www.stltoday.com/',
      est: 1878,
      about:
        'The St. Louis Post-Dispatch offers comprehensive coverage of St. Louis City and County. From breaking news to local weather, entertainment, and events, the publication is a trusted source for all things related to St. Louis. It also provides insight on national and global news stories, placing them in the context of how they affect the St. Louis community.',
      emos: ['📰', '🇺🇸'],
      langs: ['en'],
      tags: [
        'StLouisPostDispatch',
        'LocalNews',
        'RegionalNews',
        'USNews',
        'CommunityNews',
        'StLouisNews',
      ],
      socials: {
        facebook: 'https://www.facebook.com/STLPD',
        twitter: 'https://twitter.com/stltoday',
        linkedin: 'https://www.linkedin.com/company/st.-louis-post-dispatch/',
        youtube: 'https://www.youtube.com/user/STLPostDispatch',
        pinterest: 'https://www.pinterest.ca/stltoday/',
        instagram: 'https://www.instagram.com/stltoday/',
      },
      headerBG: '#000',
      primaryColor: '#2E589B',
    },
  ],
  [
    'US_TWNC',
    {
      name: 'St. Paul Pioneer Press',
      url: 'https://www.twincities.com/',
      est: 1849,
      about:
        'St. Paul news, crime, politics, education, business, sports, entertainment and things to do.',
      emos: ['📰', '🇺🇸'],
      langs: ['en'],
    },
  ],
  [
    'US_RAFU',
    {
      name: 'The Rafu Shimpo',
      url: 'https://rafu.com/',
      est: 1903,
      about:
        'Japanese American newspaper, serving the community from Downtown Los Angeles since 1903.',
      emos: ['📰', '🇺🇸'],
      langs: ['en'],
    },
  ],
]);

export const AllNewsSources = new Map<string, NewsSource>([
  ...CANewsSources.entries(),
  ...IENewsSources.entries(),
  ...INNewsSources.entries(),
  ...UKNewsSources.entries(),
  ...NZNewsSources.entries(),
  ...OZNewsSources.entries(),
  ...USNewsSources.entries(),
]);
