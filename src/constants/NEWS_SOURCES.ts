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
      about:
        "The Irish Farmers Journal, Ireland's premier farming news source, provides comprehensive coverage of agricultural news, market updates, technology trends, and rural life. The journal, dedicated to Irish farmers, offers insightful commentary, expert analysis, and practical farming advice, aiming to inform, engage, and support the agricultural community.",
      description: [
        'The Irish Farmers Journal, established in 1948, has been an unwavering voice for the farming community in Ireland for over seven decades. Created with an aim to provide a platform for the sharing of valuable knowledge and information, it covers a wide array of topics relevant to agriculture and rural life.',
        'The publication prides itself on its in-depth coverage of farming news, agri-business developments, and technical farming advice. It also covers topics like rural living and property management, providing a holistic view of rural life in Ireland. In addition, its market updates and analytical pieces offer valuable insights for farmers and agri-business professionals alike.',
        'Recognising the importance of innovation in agriculture, the Irish Farmers Journal also keeps its readers updated on the latest trends and developments in farming technology, helping them stay ahead in a rapidly evolving industry.',
        'In response to the digital age, the journal has developed an online presence, making its valuable resources accessible to a global audience. This move into the digital space has allowed it to expand its readership beyond Ireland, reaching farming communities and those interested in agriculture worldwide.',
        'Through the years, the Irish Farmers Journal has remained committed to its mission of serving the Irish farming community. It continues to strive for excellence in journalism, providing high-quality, relevant, and timely content. Its rich history and dedication to its readers make it a vital resource within the agricultural industry.',
      ],
      emos: ['📰', '🌱'],
      langs: ['en'],
      tags: [
        'IrishFarmersJournal',
        'FarmingNews',
        'AgriBusiness',
        'RuralLiving',
        'PropertyManagement',
        'AgricultureNews',
        'MarketUpdates',
      ],
      socials: {
        podcast:
          'https://www.farmersjournal.ie/catch-up-on-the-latest-irish-farmers-journal-podcasts-650230',
        video: 'https://www.farmersjournal.ie/video.php',
        facebook: 'https://www.facebook.com/IrishFarmersJournal',
        twitter: 'https://twitter.com/farmersjournal',
        instagram: 'https://www.instagram.com/farmersjournal/',
        youtube: 'https://www.youtube.com/@IrishFarmersJournal',
        linkedin: 'https://www.linkedin.com/company/farmers-journal/',
        email: 'mailto:info@farmersjournal.ie',
      },
      headerBG: '#da2128',
      primaryColor: '#ad9963',
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
      about:
        'Kilkenny People is a long-standing Irish newspaper with a rich history and deep-rooted connection to the local community. Kilkenny People provides comprehensive coverage of news, events, and stories that matter to the people of Kilkenny. From local news and politics to sports, culture, and lifestyle, Kilkenny People aims to keep its readers informed and engaged with the latest happenings in the region. With a commitment to quality journalism and a strong focus on community-centric reporting, Kilkenny People remains a trusted source of news and information for the people of Kilkenny.',
      emos: ['📰', '🇮🇪'],
      langs: ['en'],
      tags: [
        'KilkennyPeople',
        'IrishNews',
        'LocalNews',
        'Community',
        'Politics',
        'Sports',
        'Culture',
        'Lifestyle',
      ],
      socials: {
        email: 'news@kilkennypeople.ie',
        twitter: 'https://twitter.com/KKPeopleNews',
        facebook: 'https://www.facebook.com/kilkennypeople',
      },
      headerBG: '#fff',
      primaryColor: '#ffbf00',
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
      about:
        'Live 95 is a popular Irish radio station that offers a vibrant mix of music, news, sports, and talk shows. With a diverse range of programming, Live 95 caters to the interests of its audience, providing entertainment, information, and engaging discussions. Tune in to stay up-to-date with the latest news, enjoy your favorite tunes, and join in the lively conversations on Live 95.',
      emos: ['📻', '🇮🇪'],
      langs: ['en'],
      tags: ['Live95', 'Radio', 'Music', 'News', 'Sports', 'TalkShows'],
      socials: {
        email: 'info@live95.ie',
        facebook: 'https://www.facebook.com/Live95Wireless/',
        twitter: 'https://twitter.com/Live95Limerick',
        instagram: 'https://www.instagram.com/live95limerick/',
        apple: 'https://apps.apple.com/ie/app/limericks-live-95fm/id463283739',
        android:
          'https://play.google.com/store/apps/details?id=com.thisisaim.live95fm',
        linkedin: 'https://www.linkedin.com/company/live95',
      },
      headerBG: '#cb1d2e',
      primaryColor: '#cb1d2e',
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
      about:
        'Merrion Street is an online platform that serves as a central hub for the latest news, updates, and announcements from the Irish government. It provides valuable insights into government policies, initiatives, and activities, covering a wide range of topics such as politics, economy, healthcare, education, and more. Merrion Street aims to foster transparency and open communication by delivering reliable and timely information directly from the government sources. Stay informed about the latest developments and decisions shaping Ireland through the comprehensive coverage offered by Merrion Street.',
      emos: ['💻', '🃏'],
      langs: ['en'],
      tags: [
        'MerrionStreet',
        'IrishGovernment',
        'News',
        'Politics',
        'Policies',
        'Updates',
      ],
      socials: {
        twitter: 'https://twitter.com/merrionstreet/',
        facebook: 'https://www.facebook.com/merrionstreet',
        flickr: 'https://www.flickr.com/photos/merrionstreet-ie/',
        youtube: 'http://www.youtube.com/merrionstreet',
        instagram: 'https://www.instagram.com/merrionstreet/',
      },
      headerBG: '#112888',
      primaryColor: '#112888',
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
      url: 'https://www.tg4.ie/ga/brandai-eile/nuacht/',
      est: 1996,
      about:
        'Seirbhís nuachta Gaeilge atá ar fáil ó TG4, an stáisiún teilifíse Gaeilge náisiúnta. Soláthraíonn Nuacht TG4 nuacht iomlánra Gaeilge do dhaoine atá ag lorg eolas faoi thionscail, cúrsaí reatha agus nuashonruithe cultúrtha. Clúdach iomlánra Gaeilge le fáil i Nuacht TG4, curtha ar fáil ag foireann Nuacht TG4 atá tarraingthe de scéalaíocht agus de shaibhreas taighde.',
      emos: ['📺', '🇮🇪'],
      langs: ['ga'],
      tags: [
        'NuachtTG4',
        'Nuacht',
        'TG4',
        'Gaeilge',
        'Galetacht',
        'Cultúr',
        'Tionscail',
        'NuachtRialtais',
      ],
      socials: {
        podcast: 'https://www.tg4.ie/ga/brandai-eile/podchraoltai-tg4/',
        email: 'mailto:eolas@tg4.ie',
        facebook: 'https://www.facebook.com/NuachtTG4/',
        twitter: 'https://twitter.com/NuachtTG4',
        instagram: 'https://www.instagram.com/nuacht.tg4/',
      },
      headerBG: '#414141',
      primaryColor: '#EB0071',
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
      about:
        'The Business Post is an esteemed Irish newspaper dedicated to providing insightful and comprehensive coverage of business, finance, economics, politics, and current affairs. With a rich history, The Business Post has solidified its reputation as a trusted source of news and analysis in Ireland. Driven by a team of seasoned journalists and industry experts, The Business Post delivers in-depth reporting, breaking news, and exclusive interviews that offer valuable insights into the world of business. It showcases the successes, challenges, and trends that shape the Irish economy, making it an essential resource for professionals, executives, and individuals interested in the intricacies of the business world.',
      description: [
        'Founded in 1989, The Business Post has established itself as a trusted source of news and analysis in Ireland. With a team of experienced journalists and industry experts, it delivers in-depth reporting, breaking news, and exclusive interviews, offering valuable insights into the world of business.',
        'The newspaper covers a wide range of topics, including finance, economics, entrepreneurship, innovation, and more. It strives to provide readers with a deep understanding of the Irish business landscape, showcasing the successes, challenges, and trends shaping the economy.',
        'In addition to its print edition, The Business Post has embraced digital platforms, offering online articles, multimedia content, and interactive features to cater to a diverse audience. It leverages technology to deliver up-to-date news, analysis, and opinion pieces to its readership across Ireland and beyond.',
        'With its commitment to high-quality journalism and comprehensive coverage, The Business Post continues to be a go-to source for professionals, executives, investors, and anyone interested in staying informed about the world of business.',
      ],
      emos: ['📰', '🧑‍💼'],
      langs: ['en'],
      tags: [
        'TheBusinessPost',
        'IrishNews',
        'BusinessNews',
        'Finance',
        'Economics',
        'Politics',
        'CurrentAffairs',
      ],
      socials: {
        email: 'info@businesspost.ie',
        linkedin: 'https://www.linkedin.com/company/businessposthq',
        facebook: 'https://www.facebook.com/businessposthq/',
        twitter: 'https://twitter.com/businessposthq',
        instagram: 'https://www.instagram.com/businessposthq',
        android:
          'https://play.google.com/store/apps/details?id=ie.businesspost.android',
        apple:
          'https://itunes.apple.com/app/the-sunday-business-post/id467117236',
      },
      headerBG: '#00a754',
      primaryColor: '#00a754',
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
      about:
        'TheJournal.ie is an Irish online news publication that covers a wide range of topics, including national and international news, current affairs, politics, business, technology, sports, entertainment, and more. With its user-friendly interface and accessible content, TheJournal.ie aims to keep its readers well-informed and engaged.',
      description: [
        'Since its inception, TheJournal.ie has established itself as a trusted source of news in Ireland, providing up-to-date and reliable information on important issues that matter to the Irish audience.',
        'With a team of experienced journalists and contributors, TheJournal.ie delivers comprehensive coverage of breaking news, in-depth features, analysis, and opinion pieces, catering to diverse interests and perspectives.',
        'The online platform of TheJournal.ie offers a seamless browsing experience, allowing readers to explore a vast array of articles, multimedia content, interactive features, and community-driven discussions.',
        'As a digital news outlet, TheJournal.ie embraces the fast-paced nature of the online landscape, providing real-time updates and engaging with its audience through various social media platforms.',
        'TheJournal.ie has earned recognition for its quality journalism, winning several prestigious awards and accolades for its reporting and investigative work.',
        'With its commitment to delivering news that matters, TheJournal.ie continues to play a significant role in shaping the media landscape in Ireland, keeping its readers informed and empowered.',
      ],
      emos: ['💻', '🇮🇪'],
      langs: ['en'],
      tags: [
        'TheJournal',
        'IrishNews',
        'OnlineNews',
        'CurrentAffairs',
        'Politics',
        'Business',
        'Technology',
        'Sports',
        'Entertainment',
      ],
      socials: {
        podcast: 'https://www.thejournal.ie/the-explainer/news/',
        email: 'hello@thejournal.ie',
        facebook: 'https://www.facebook.com/thejournal.ie',
        twitter: 'https://twitter.com/thejournal_ie',
        instagram: 'https://www.instagram.com/thejournal_ie',
        youtube: 'https://www.youtube.com/@TheJournalVideo',
        linkedin: 'https://www.linkedin.com/company/thejournal-ie',
        tiktok: 'https://www.tiktok.com/@thejournal_ie',
      },
      headerBG: '#081b4f',
      primaryColor: '#081b4f',
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
      about:
        'Nuachtán cuimsitheach as Gaeilge a chuireann nuacht is altanna faisnéise comhaimseartha ar fáil ar réimsí éagsúla. Tá Tuairisc tiomanta do chraoltóireacht ar ardchaighdeán agus cuireann sé an nuacht is déanaí ar fáil maidir le nuacht náisiúnta agus idirnáisiúnta, polaitíocht, cultúr, spórt, agus go leor eile. Mar fhoireann nuachta dheartha, tá sé mar aidhm ag Tuairisc an léitheoir a choimeád ar an eolas agus bheith rannpháirteach leis an ábhar éagsúil agus spreagúil a chuirfidh an nuachtán ar fáil. Fan ar an eolas le Tuairisc, an láithreán gréasáin do nuacht is anailísí is déanaí in Éirinn agus thar lear.',
      emos: ['💻', '🇮🇪'],
      langs: ['ga'],
      tags: [
        'Tuairisc',
        'Nuacht',
        'Gaeilge',
        'Polaitíocht',
        'Cultúr',
        'Spórt',
        'Nuacht Idirnáisiúnta',
        'Féiniúlacht',
        'Nuacht Éireannach',
        'Cultúr Éireannach',
        'Meáin',
        'Cúrsaí Reatha',
      ],
      socials: {
        email: 'eolas@tuairisc.ie',
        facebook: 'https://www.facebook.com/tuairisc.ie',
        twitter: 'https://twitter.com/tuairiscnuacht',
      },
      headerBG: '#516671',
      primaryColor: '#516671;',
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
        email: 'mailto:enquiries@thekmgroup.co.uk',
        facebook: 'https://www.facebook.com/KentOnline/',
        twitter: 'https://twitter.com/Kent_Online',
        instagram: 'https://www.instagram.com/kent_online/',
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
        'USA Today is a nationally recognized newspaper that covers a broad spectrum of news and events. With comprehensive and current reporting on US and international news, weather, entertainment, finance, and more, it serves millions of readers across the United States and the globe. Its commitment to journalistic excellence, objectivity, and accessibility makes it a reliable source for daily news. USA Today continues to innovate in its digital offerings, providing interactive and multimedia content that engages a wide audience.',
      emos: ['📰', '🇺🇸'],
      langs: ['en'],
      tags: [
        'USAToday',
        'USNews',
        'InternationalNews',
        'Weather',
        'Entertainment',
        'Finance',
        'Sports',
        'Tech',
        'Travel',
        'Opinion',
      ],
      socials: {
        podcast: 'https://www.usatoday.com/pages/interactives/podcasts/',
        apple:
          'https://apps.apple.com/us/app/usa-today-us-breaking-news/id504631398',
        android:
          'https://play.google.com/store/apps/details?id=com.usatoday.android.news',
        facebook: 'https://www.facebook.com/usatoday',
        twitter: 'https://www.twitter.com/usatoday',
        instagram: 'https://www.instagram.com/usatoday',
        linkedin: 'http://www.linkedin.com/company/usa-today',
        pinterest: 'https://www.pinterest.com/usatoday/',
        youtube: 'https://www.youtube.com/USATODAY',
        reddit: 'https://www.reddit.com/user/usatoday',
        flipboard: 'https://flipboard.com/@USAToday',
        rss: 'https://feeds.feedblitz.com/usatoday-NewsTopStories',
      },
      headerBG: '#fff',
      primaryColor: '#009BFF',
    },
  ],
  [
    'US_WSJ',
    {
      name: 'The Wall Street Journal',
      url: 'https://www.wsj.com/',
      est: 1889,
      about:
        'The Wall Street Journal (WSJ) is an international daily newspaper that specializes in business and economic news. Known for its comprehensive coverage, it chronicles the rise and impact of industries in America and around the world, delivering insightful analysis and informed perspectives. Beyond business news, the WSJ also offers sections on politics, technology, lifestyle, and more, appealing to a wide range of readers.',
      emos: ['📰', '🇺🇸'],
      langs: ['en'],
      tags: [
        'TheWallStreetJournal',
        'WSJ',
        'BusinessNews',
        'EconomicNews',
        'InternationalNews',
        'USNews',
        'Politics',
        'Technology',
        'Lifestyle',
      ],
      socials: {
        podcast: 'https://www.wsj.com/podcasts',
        video: 'https://www.wsj.com/video',
        email: 'mailto:support@wsj.com',
        facebook: 'https://www.facebook.com/wsj',
        twitter: 'https://twitter.com/WSJ',
        instagram: 'https://www.instagram.com/wsj/',
        youtube: 'https://www.youtube.com/user/WSJDigitalNetwork',
        snapchat:
          'https://www.snapchat.com/discover/Wall-Street-Journal/4806310285',
        android: 'https://play.google.com/store/apps/details?id=wsj.reader_sp',
        apple:
          'https://apps.apple.com/us/app/the-wall-street-journal/id364387007?mt=8',
        rss: 'https://www.wsj.com/news/rss-news-and-feeds',
      },
      headerBG: '#fff',
      primaryColor: '#0274B6',
    },
  ],
  [
    'US_NYT',
    {
      name: 'The New York Times',
      url: 'https://www.nytimes.com/',
      est: 1851,
      about:
        'The New York Times, often abbreviated as NYT, is an internationally recognized news organization headquartered in New York City. It is one of the largest and most influential news organizations in the United States. NYT is known for its rigorous reporting and high journalistic standards, covering a wide range of topics including politics, business, culture, technology, and more. It provides live news, investigations, opinions, photos, and videos from more than 150 countries around the world. The New York Times continues its rich tradition of news coverage while innovating in the digital journalism landscape.',
      emos: ['📰', '🇺🇸'],
      langs: ['en'],
      tags: [
        'TheNewYorkTimes',
        'USNews',
        'WorldNews',
        'Politics',
        'Business',
        'Culture',
        'Technology',
        'Opinions',
        'InvestigativeJournalism',
      ],
      socials: {
        podcast: 'https://www.nytimes.com/spotlight/podcasts',
        email: 'mailto:help@nytimes.com',
        facebook: 'https://www.facebook.com/nytimes',
        twitter: 'https://twitter.com/nytimes',
        instagram: 'https://www.instagram.com/nytimes/',
        linkedin: 'https://www.linkedin.com/company/nytimes.com',
        apple: 'https://apps.apple.com/us/app/the-new-york-times/id284862083',
        android:
          'https://play.google.com/store/apps/details?id=com.nytimes.android',
      },
      headerBG: '#fff',
      primaryColor: '#326891',
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
        "The New York Post is one of America's oldest newspapers. Offering breaking news, in-depth reporting, photos, and videos from New York and beyond, the Post covers a range of topics including sports, business, entertainment, opinion, real estate, culture, fashion, and more. Its signature New York-centric perspective provides readers with unique insights and engaging coverage.",
      description: [],
      emos: ['📰', '🇺🇸'],
      langs: ['en'],
      tags: [
        'NewYorkPost',
        'BreakingNews',
        'NewYorkNews',
        'Sports',
        'Business',
        'Entertainment',
        'Opinion',
        'RealEstate',
        'Culture',
        'Fashion',
      ],
      socials: {
        email: 'mailto:websitehelp@nypost.com',
        facebook: 'https://www.facebook.com/nypost',
        twitter: 'https://twitter.com/nypost',
        instagram: 'https://instagram.com/nypost',
        linkedin: 'https://www.linkedin.com/company/new-york-post',
        youtube: 'https://www.youtube.com/nypost',
        apple:
          'https://itunes.apple.com/us/app/new-york-post-iphone-edition/id410094240?mt=8',
        android:
          'https://play.google.com/store/apps/details?id=br.com.golmobile.nypost&hl=en',
        video: 'https://nypost.com/video/',
      },
      headerBG: '#C60800',
      primaryColor: '#C60800',
    },
  ],
  [
    'US_MRCY',
    {
      name: 'The Mercury News',
      url: 'https://www.mercurynews.com/',
      est: 1851,
      about:
        "The Mercury News is a leading source of breaking news, local news, sports, business, entertainment, lifestyle, and opinion for Silicon Valley, the San Francisco Bay Area, and beyond. Its diligent coverage spans a multitude of topics, ensuring readers have access to well-rounded, up-to-date news. Specializing in Silicon Valley news, The Mercury News provides insightful reporting on the region's tech industry.",
      description: [
        'The Mercury News, originally known as the San Jose Mercury, is steeped in a rich history that traces its roots back to 1851, making it one of the oldest newspapers on the West Coast of the United States. At its inception, it served the booming city of San Jose during the Gold Rush era, providing news to the rapidly growing population of fortune seekers and pioneers.',
        "In the late 19th century, the San Jose Mercury and the San Jose News were competitors, with each vying to be the region's primary source of news. Their rivalry was an engaging chapter in the history of American journalism. Eventually, in 1942, the two newspapers merged to form the San Jose Mercury News. This consolidation brought together the strengths of both newspapers, creating a publication with comprehensive local, regional, and national coverage.",
        'The Mercury News has weathered the turbulent shifts in the newspaper industry, including the advent of radio, television, and digital media. In the face of these challenges, it has continually evolved to maintain its relevance. Its transition into the digital age has been particularly notable. As the primary newspaper of Silicon Valley, it was one of the first newspapers to offer a full online version, launching the Mercury Center on America Online in 1993.',
        'Over the years, The Mercury News has not just reported history; it has been part of it. The newspaper has won several awards for its investigative journalism, including the Pulitzer Prize for its coverage of the Loma Prieta earthquake in 1989 and its reporting on the local technology industry.',
        'The Mercury News continues to serve as a crucial source of news for the Silicon Valley region, adeptly covering a wide range of topics, from politics and business to sports and entertainment. Its history serves as a testament to its commitment to reliable reporting and its ability to adapt in a constantly changing media landscape. As of my last knowledge cutoff in September 2021, The Mercury News continues to thrive, embodying the spirit of innovation that defines Silicon Valley.',
      ],
      emos: ['📰', '🇺🇸'],
      langs: ['en'],
      tags: [
        'TheMercuryNews',
        'BreakingNews',
        'LocalNews',
        'Sports',
        'Business',
        'Entertainment',
        'Lifestyle',
        'SiliconValleyNews',
        'SanFranciscoBayAreaNews',
        'Opinion',
      ],
      socials: {
        facebook: 'https://facebook.com/mercurynews',
        twitter: 'https://twitter.com/mercnews',
        instagram: 'https://instagram.com/mercnews',
        rss: 'https://www.mercurynews.com/feed/',
      },
      headerBG: '#fff',
      primaryColor: '#007AB8',
    },
  ],
  [
    'US_CHGT',
    {
      name: 'Chicago Tribune',
      url: 'https://www.chicagotribune.com/',
      est: 1847,
      about:
        'As the leading source of news and information in the Chicago area, the Chicago Tribune delivers an exhaustive array of local, regional, national, and international news. The Tribune, with its robust investigative reporting and incisive commentary, keeps the Chicago community informed and engaged, thereby retaining its title as the largest news organization in the Midwest. From breaking news to sports, business, entertainment, and lifestyle topics, the Tribune offers comprehensive and in-depth coverage that caters to the diverse interests of its readership.',
      description: [],
      emos: ['📰', '🇺🇸'],
      langs: ['en'],
      tags: [
        'ChicagoTribune',
        'News',
        'ChicagoNews',
        'MidwestNews',
        'BreakingNews',
        'InvestigativeReporting',
      ],
      socials: {
        podcast:
          'https://www.chicagotribune.com/about/ct-chicago-tribune-podcasts-20190715-m546ni43pvchzn5jwtmwxejjk4-story.html',
        facebook: 'https://www.facebook.com/chicagotribune',
        twitter: 'https://twitter.com/chicagotribune',
        instagram: 'https://www.instagram.com/chicagotribune/',
        rss: 'https://www.chicagotribune.com/arcio/rss/category/news/',
        linedin: 'https://www.linkedin.com/company/chicago-tribune-media/',
      },
      headerBG: '#fff',
      primaryColor: '#004E87',
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
      about:
        'The Philadelphia Inquirer is a reliable news source offering in-depth coverage of the Greater Philadelphia region. From local news, politics, sports, and arts, to community events and cultural insights, it provides readers with a front-row seat to the happenings in and around Philadelphia. Recognized for its commitment to journalistic integrity, the Inquirer is dedicated to empowering the community through informative, accurate reporting.',
      emos: ['📰', '🇺🇸'],
      langs: ['en'],
      tags: [
        'ThePhiladelphiaInquirer',
        'PhiladelphiaNews',
        'LocalNews',
        'Politics',
        'Sports',
        'Arts',
        'CommunityEvents',
        'CulturalInsights',
      ],
      socials: {
        email: 'mailto:customerservice@inquirer.com',
        apple:
          'https://apps.apple.com/app/apple-store/id577251728?pt=549215&ct=globalfooter&mt=8',
        android: 'https://play.google.com/store/apps/details?id=com.ap.philly',
        twitter: 'https://twitter.com/phillyinquirer',
        facebook: 'https://www.facebook.com/philadelphiainquirer',
        instagram: 'https://www.instagram.com/phillyinquirer',
      },
      headerBG: '#fff',
      primaryColor: '#FFCC55',
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
        "As Colorado's primary source for news, The Denver Post offers in-depth coverage on a variety of topics including, but not limited to, Denver-specific news, Colorado news, breaking news, sports, weather, traffic, business, and politics. The Denver Post also provides its readers with rich multimedia content, featuring photos and videos that enhance the storytelling experience.",
      emos: ['📰', '🇺🇸'],
      langs: ['en'],
      tags: [
        'TheDenverPost',
        'DenverNews',
        'ColoradoNews',
        'USNews',
        'LocalNews',
        'SportsNews',
        'WeatherNews',
        'TrafficUpdates',
        'BusinessNews',
        'PoliticsNews',
        'Photos',
        'Video',
      ],
      socials: {
        podcast: 'https://www.denverpost.com/tag/podcast/',
        facebook: 'https://facebook.com/denverpost',
        twitter: 'https://twitter.com/denverpost',
        instagram: 'https://instagram.com/denverpost',
        rss: 'https://www.denverpost.com/feed/',
        linkedin: 'https://www.linkedin.com/company/the-denver-post',
      },
      headerBG: '#fff',
      primaryColor: '#7d161e',
    },
  ],
  [
    'US_STRT',
    {
      name: 'Star Tribune',
      url: 'https://www.startribune.com/',
      est: 1867,
      about:
        'Star Tribune is the largest newspaper in Minnesota, serving the Twin Cities of Minneapolis-St. Paul and beyond. Offering news, photos, and videos on a wide range of topics, Star Tribune remains committed to its tradition of high-quality journalism while embracing the opportunities of digital media. From politics to sports, from business to arts, Star Tribune provides the latest in local, national, and international news, with dedicated sections for different topics and interests.',
      emos: ['📰', '🇺🇸'],
      langs: ['en'],
      tags: [
        'StarTribune',
        'MinnesotaNews',
        'USNews',
        'Politics',
        'Business',
        'Sports',
        'Arts',
        'DigitalMedia',
      ],
      socials: {
        video: 'https://video.startribune.com/',
        email: 'mailto:readersrep@startribune.com',
        facebook: 'https://www.facebook.com/startribune/',
        twitter: 'https://twitter.com/StarTribune/',
        pinterest: 'http://pinterest.com/startribune/',
        instagram: 'http://www.instagram.com/startribune/',
        apple: 'https://apps.apple.com/us/app/star-tribune/id476107280',
        android:
          'https://play.google.com/store/apps/details?id=com.startribune.android.newsclient',
      },
      headerBG: '#fff',
      primaryColor: '#64BC46',
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
      about:
        'FOX News World, part of the larger FOX News Network, provides comprehensive coverage of major international events, delivering breaking news, in-depth reports, and expert analysis. As a significant platform in the American conservative cable news landscape, it offers a unique perspective on global political, socio-economic, and cultural happenings, aiming to inform and stimulate informed discussions among its viewers.',
      description: [
        'FOX News, an American multinational conservative cable news television channel, was launched by media mogul Rupert Murdoch, who hired former Republican Party media consultant and CNBC executive Roger Ailes as its founding CEO. The network was launched in 1996 and it has since grown to become a dominant and influential voice in the American media landscape.',
        'The network is divided into a number of segments, with FOX News World being a crucial part that focuses on international news coverage. Its objective is to keep viewers informed about critical and newsworthy global events, providing a U.S. perspective on international affairs.',
        'Over the years, FOX News has carved out a unique niche in the media landscape, often being the subject of intense discussion and debate due to its political leanings. Its conservative slant has garnered a large and dedicated viewership, particularly among conservative viewers in the United States.',
        'Amid the digital revolution, FOX News has effectively adapted by providing online news in addition to its traditional broadcasting. This move to digital allowed the network to reach a wider audience and offer a more extensive array of content, including breaking news, analysis, opinion pieces, and videos.',
        'With its emphasis on conservative commentary and dedicated coverage of international events, FOX News World remains a go-to source for many wanting a different perspective on global news.',
      ],
      emos: ['📺', '🇺🇸'],
      langs: ['en'],
      tags: [
        'FOXNewsWorld',
        'BreakingNews',
        'GlobalNews',
        'Politics',
        'Business',
        'Entertainment',
        'ConservativeNews',
        'USNews',
      ],
      socials: {
        facebook: 'https://www.facebook.com/FoxNews',
        twitter: 'https://twitter.com/foxnews',
        instagram: 'https://www.instagram.com/foxnews',
        youtube: 'https://www.youtube.com/FoxNewsChannel',
        flipboard: 'https://flipboard.com/@FoxNews',
        linkedin: 'https://www.linkedin.com/company/fox-news-channel/',
        slack: 'https://foxnews.slack.com/apps/A013AUF6VMG-fox-news',
        rss: 'https://www.foxnews.com/story/foxnews-com-rss-feeds',
        newsletter: 'https://www.foxnews.com/newsletters',
        spotify: 'https://open.spotify.com/show/7A4YfyFtNOZhqMV7F3kYVu',
      },
      headerBG: '#0c3b61',
      primaryColor: '#003366',
    },
  ],
  [
    'US_AZCT',
    {
      name: 'The Arizona Republic',
      url: 'https://azcentral.com/',
      est: 1890,
      about:
        'The Arizona Republic is a leading news source in Arizona, providing breaking news and in-depth coverage on a wide range of topics. From local and national sports updates to information about events, travel, and opinions, The Arizona Republic keeps readers informed and engaged. With a commitment to delivering quality journalism, it has become a trusted source of news and information for the Arizona community.',
      emos: ['📰', '🇺🇸'],
      langs: ['en'],
      tags: [
        'ArizonaRepublic',
        'AZCentral',
        'ArizonaNews',
        'USNews',
        'BreakingNews',
        'Sports',
        'Travel',
        'Opinions',
        'LocalNews',
        'NationalNews',
      ],
      socials: {
        facebook: 'https://www.facebook.com/azcentral/',
        twitter: 'https://twitter.com/azcentral',
        instagram: 'https://www.instagram.com/azcentral/',
      },
      headerBG: '#fff',
      primaryColor: '#009BFF',
    },
  ],
  [
    'US_DLLS',
    {
      name: 'The Dallas Morning News',
      url: 'https://www.dallasnews.com/',
      est: 1885,
      about:
        'The Dallas Morning News is a trusted source for news in Dallas, Texas. It provides comprehensive coverage of the latest events, investigative reports, reviews, and opinion pieces across various topics. These include business, sports, arts, entertainment, food, real estate, and crime. The Dallas Morning News is committed to delivering relevant and up-to-date news to the local community and beyond.',
      emos: ['📰', '🇺🇸'],
      langs: ['en'],
      tags: [
        'DallasMorningNews',
        'DallasNews',
        'TexasNews',
        'USNews',
        'LocalNews',
        'BusinessNews',
        'SportsNews',
        'ArtsNews',
        'EntertainmentNews',
        'FoodNews',
        'RealEstateNews',
        'CrimeNews',
      ],
      socials: {
        radio: 'https://omny.fm/shows/the-dallas-morning-news',
        'apple-podcast':
          'https://podcasts.apple.com/us/podcast/the-dallas-morning-news/id1379040585',
        'google-podcast':
          'https://podcasts.google.com/feed/aHR0cDovL2RtbmZsYXNoLmxpYnN5bi5jb20vcnNz',
        spotify: 'https://open.spotify.com/show/1s8F8hSUDMM8j3EmQpCpP3',
        facebook: 'https://www.facebook.com/dallasmorningnews',
        twitter: 'https://twitter.com/dallasnews',
        instagram: 'https://www.instagram.com/dallasnews',
        youtube: 'https://www.youtube.com/user/tdmnvid',
        rss: 'https://omny.fm/shows/the-dallas-morning-news/playlists/podcast.rss',
      },
      headerBG: '#fff',
      primaryColor: '#197BC1',
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
      about:
        'The Chicago Sun-Times covers various topics of interest including local news, sports, politics, entertainment, and weather. This platform provides an essential source of news and information to keep you updated on the happenings within Chicago and beyond. Its thorough news coverage, insightful opinions, and engaging content make it a go-to resource for many Chicagoans.',
      emos: ['📰', '🇺🇸'],
      langs: ['en'],
      tags: [
        'ChicagoSunTimes',
        'ChicagoNews',
        'LocalNews',
        'Sports',
        'Politics',
        'Entertainment',
        'Weather',
      ],
      socials: {
        email: 'mailto:customerservice@suntimes.com',
        twitter: 'https://twitter.com/Suntimes',
        facebook: 'https://www.facebook.com/thechicagosuntimes',
        youtube: 'https://www.youtube.com/channel/UCvU3ALK4osa_RV4znIToB2Q',
        instagram: 'https://www.instagram.com/chicagosuntimes/',
      },
      headerBG: '#fff',
      primaryColor: '#A91D23',
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
      about:
        "The San Diego Union-Tribune serves as a comprehensive resource for news related to San Diego, California. Covering a wide array of topics including local news, politics, sports, business, entertainment, and more, it provides timely updates and in-depth coverage on issues that matter most to San Diego's community. The Union-Tribune remains dedicated to serving its readers with truthful, unbiased news.",
      emos: ['📰', '🇺🇸'],
      langs: ['en'],
      tags: [
        'SanDiegoUnionTribune',
        'SanDiegoNews',
        'LocalNews',
        'CaliforniaNews',
        'Politics',
        'Sports',
        'Business',
        'Entertainment',
      ],
      socials: {
        email: 'mailto:local@sduniontribune.com',
        twitter: 'https://twitter.com/sdut',
        instagram: 'https://www.instagram.com/sandiegouniontribune/',
        youtube: 'https://www.youtube.com/channel/UCKCbC7uTe7dRtKPou10JKtQ',
        facebook: 'https://www.facebook.com/SanDiegoUnionTribune/',
        linkedin:
          'https://www.linkedin.com/company/the-san-diego-union-tribune',
        rss: 'https://www.sandiegouniontribune.com/news/about-union-tribune/sd-rss-feeds-story.html',
      },
      headerBG: '#fff',
      primaryColor: '#69D3FA',
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
        "The Boston Globe is New England's premier source for news, sports, opinion, and entertainment. With a rich history and a commitment to excellence in journalism, The Globe delivers breaking news, in-depth investigations by the Spotlight Team, year-round coverage of the Red Sox, Patriots, Celtics, and Bruins, insightful editorials, captivating photography, and engaging arts, food, and lifestyle journalism. It is a trusted source of information and a pillar of the Boston community.",
      emos: ['📰', '🇺🇸'],
      langs: ['en'],
      tags: [
        'BostonGlobe',
        'NewEnglandNews',
        'USNews',
        'Sports',
        'Opinion',
        'Entertainment',
        'SpotlightTeam',
        'RedSox',
        'Patriots',
        'Celtics',
        'Bruins',
        'Editorials',
        'Photography',
        'Arts',
        'Food',
        'Lifestyle',
      ],
      socials: {
        podcast: 'https://www.bostonglobe.com/podcasts/',
        twitter: 'https://twitter.com/BostonGlobe',
        facebook: 'https://www.facebook.com/globe',
        instagram: 'https://www.instagram.com/bostonglobe/',
      },
      headerBG: '#fff',
      primaryColor: '#9e1511',
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
        'The St. Paul Pioneer Press provides comprehensive coverage of local news in St. Paul and beyond. Offering a depth of content spanning crime, politics, education, business, sports, entertainment, and lifestyle, it serves as a one-stop source for residents of St. Paul and neighboring areas. Its focus on community-based reporting makes it an indispensable source of news for the Twin Cities region.',
      description: [],
      emos: ['📰', '🇺🇸'],
      langs: ['en'],
      tags: [
        'StPaulPioneerPress',
        'BreakingNews',
        'LocalNews',
        'Crime',
        'Politics',
        'Education',
        'Business',
        'Sports',
        'Entertainment',
        'Lifestyle',
      ],
      socials: {
        email: 'mailto:news@pioneerpress.com',
        facebook: 'https://facebook.com/pioneerpress',
        twitter: 'https://twitter.com/pioneerpress',
        instagram: 'https://instagram.com/pioneerpress',
        rss: 'https://www.twincities.com/feed/',
        linkedin: 'https://www.linkedin.com/company/st.-paul-pioneer-press',
      },
      headerBG: '#fff',
      primaryColor: '#007ACC',
    },
  ],
  [
    'US_RAFU',
    {
      name: 'The Rafu Shimpo',
      url: 'https://rafu.com/',
      est: 1903,
      about:
        'As the preeminent Japanese American newspaper, The Rafu Shimpo has been at the heart of the Downtown Los Angeles community since its inception in 1903. Providing a unique perspective on local, national, and international events, the publication is a trusted source of news, culture, and information for the Japanese American community and beyond. From current affairs to arts and entertainment, sports to lifestyle, The Rafu Shimpo maintains a proud tradition of high-quality journalism while also being a platform for Japanese American voices.',
      description: [],
      emos: ['📰', '🇺🇸'],
      langs: ['en'],
      tags: [
        'TheRafuShimpo',
        'News',
        'JapaneseAmericanNews',
        'LosAngelesNews',
        'Culture',
        'CommunityNews',
      ],
      socials: {
        email: 'mailto:online@rafu.com',
        facebook: 'https://www.facebook.com/rafu.shimpo',
        twitter: 'https://twitter.com/RafuShimpo',
        youtube: 'https://www.youtube.com/channel/UCKAgV-x8umvXbiEFI2yUfpQ',
        instagram: 'https://www.instagram.com/rafushimpo',
        rss: 'https://rafu.com/feed/',
      },
      headerBG: '#fff',
      primaryColor: '#000',
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
