import { NewsSource } from '../types/NewsSource';

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
      logoWidth: 415,
      logoHeight: 36,
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
      logoWidth: 225,
      logoHeight: 45,
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
      name: 'The Russian Express',
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
    'CA_GRPV',
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
      headerBG: '#011543',
      primaryColor: '#011543',
    },
  ],
  [
    'CA_SALA',
    {
      name: 'Salam Toronto',
      url: 'https://salamtoronto.ca/',
      est: 2000,
      about:
        'The first Farsi-English bilingual weekly publications based in the Greater Toronto Area.',
      emos: ['📰', '🇨🇦'],
      logo: '/img/ns/CA_NWMG.svg',
      headerBG: '#011543',
      primaryColor: '#011543',
    },
  ],
  [
    'CA_ACNV',
    {
      name: 'Acadie Nouvelle',
      url: 'https://www.acadienouvelle.com/',
      est: 1984,
      about:
        "L'actualité provinciale, régionale, sportive, économique et culturelle du Nouveau-Brunswick.",
      emos: ['📰', '🇨🇦'],
      logo: '/img/ns/CA_NWMG.svg',
      headerBG: '#003366',
      primaryColor: '#011543',
    },
  ],
  [
    'CA_BRUN',
    {
      name: 'The Brunswickan',
      url: 'https://thebruns.ca/',
      est: 1867,
      about:
        'The official student newspaper of the Fredericton campus of the University of New Brunswick.',
      emos: ['📰', '🇨🇦'],
      logo: '/img/ns/CA_NWMG.svg',
      headerBG: '#003366',
      primaryColor: '#011543',
    },
  ],
  [
    'CA_LEMA',
    {
      name: 'Le Moniteur Acadien',
      url: 'https://moniteuracadien.com/',
      est: 1867,
      about:
        'Un journal francophone originaire de Shediac, Nouveau-Brunswick offrant des nouvelles pertinentes aux peuples acadiens.',
      emos: ['📰', '🇨🇦'],
      headerBG: '#003366',
      primaryColor: '#011543',
    },
  ],
  [
    'CA_LEFR',
    {
      name: 'Le Franco',
      url: 'https://lefranco.ab.ca/',
      est: 1928,
      about:
        "Le seul média francophone consacré à l'actualité albertaine au Canada.",
      emos: ['📰', '🇨🇦'],
      headerBG: '#003366',
      primaryColor: '#011543',
    },
  ],
  [
    'CA_BRTY',
    {
      name: 'Barrie Today',
      url: 'https://www.barrietoday.com/',
      est: 2016,
      about:
        'Barrie news, events, information and more.  Local news from local journalists, photos, event coverage, weekly flyers, entertainment.',
      emos: ['📰', '🇨🇦'],
      headerBG: '#003366',
      primaryColor: '#011543',
    },
  ],
  [
    'CA_BAYT',
    {
      name: 'Bay Today',
      url: 'https://www.baytoday.ca/',
      est: 2003,
      about:
        'North Bay, nipissing, news, editorials, events, calendar, maps, businesses, directory, weather, sports, classified ads, accommodations, apartments, real estate, coupons, northern Ontario, Canada, Algoma, entertainment.',
      emos: ['📰', '🇨🇦'],
      headerBG: '#003366',
      primaryColor: '#011543',
    },
  ],
  [
    'CA_BRAD',
    {
      name: 'Bradford Today',
      url: 'https://www.bradfordtoday.ca/',
      est: 2019,
      about:
        'Regularly updated local news from local journalists along with photos, video, sports, events, classifieds, weekly flyers, entertainment.',
      emos: ['📰', '🇨🇦'],
      headerBG: '#003366',
      primaryColor: '#011543',
    },
  ],
  [
    'CA_BRLT',
    {
      name: 'Burlington Today',
      url: 'https://www.burlingtontoday.com/',
      est: 2022,
      about:
        "Burlington's newest source for local news, sports, business community information, obituaries and more.",
      emos: ['📰', '🇨🇦'],
      headerBG: '#003366',
      primaryColor: '#011543',
    },
  ],
  [
    'CA_CMBT',
    {
      name: 'Cambridge Today',
      url: 'https://www.cambridgetoday.ca/',
      est: 2021,
      about:
        'News, events, weather, obituaries and more - all focused on Cambridge.',
      emos: ['📰', '🇨🇦'],
      headerBG: '#003366',
      primaryColor: '#011543',
    },
  ],
  [
    'CA_COLT',
    {
      name: 'Collingwood Today',
      url: 'https://www.collingwoodtoday.ca/',
      est: 2021,
      about:
        "Collingwood's online source for local news, obituaries, events and more.",
      emos: ['📰', '🇨🇦'],
      headerBG: '#003366',
      primaryColor: '#011543',
    },
  ],
  [
    'CA_ELKT',
    {
      name: 'Elliot Lake Today',
      url: 'https://www.elliotlaketoday.com/',
      est: 2017,
      about:
        "Elliot Lake News, Weather, Obituaries and more.  Elliot Lake's online source for community information, updated regularly.",
      emos: ['📰', '🇨🇦'],
      headerBG: '#003366',
      primaryColor: '#011543',
    },
  ],
  [
    'CA_ELFT',
    {
      name: 'Elora & Fergus Today',
      url: 'https://www.elorafergustoday.com/',
      est: 2021,
      about:
        'EloraFergusToday is your go-to source for local news in  the Elora and Fergus communities, offering the latest updates on the events, issues, people and businesses that matter most.',
      emos: ['📰', '🇨🇦'],
      headerBG: '#003366',
      primaryColor: '#011543',
    },
  ],
  [
    'CA_GUET',
    {
      name: 'Guelph Today',
      url: 'https://www.guelphtoday.com/',
      est: 2016,
      about:
        'Guelph news, events, information and more.  Local news from local journalists, photos, event coverage, weekly flyers and entertainment.',
      emos: ['📰', '🇨🇦'],
      headerBG: '#003366',
      primaryColor: '#011543',
    },
  ],
  [
    'CA_HHLT',
    {
      name: 'Halton Hills Today',
      url: 'https://www.haltonhillstoday.ca/',
      est: 2022,
      about:
        'HaltonHillsToday is your go-to source for local news in Halton Hills, offering the latest updates on the events, issues, people and businesses that matter most in our community.',
      emos: ['📰', '🇨🇦'],
      headerBG: '#003366',
      primaryColor: '#011543',
    },
  ],
  [
    'CA_INFT',
    {
      name: 'Innisfil Today',
      url: 'https://www.innisfiltoday.ca',
      est: 2020,
      about:
        'News, events, weather, obituaries and more - all focused on Innisfil.',
      emos: ['📰', '🇨🇦'],
      headerBG: '#003366',
      primaryColor: '#011543',
    },
  ],
  [
    'CA_MDLT',
    {
      name: 'Midland Today',
      url: 'https://www.midlandtoday.ca/',
      est: 2020,
      about:
        "Midland's source for local news and community information.  Includes original reporting, sports, entertainment, obituaries, weather, and more.",
      emos: ['📰', '🇨🇦'],
      headerBG: '#003366',
      primaryColor: '#011543',
    },
  ],
  [
    'CA_NRKT',
    {
      name: 'Newmarket Today',
      url: 'https://www.newmarkettoday.ca/',
      est: 2018,
      about:
        "Newmarket's online news source, including local news from local journalists, photos, video, sports, events, classifieds, weekly flyers, and entertainment.",
      emos: ['📰', '🇨🇦'],
      headerBG: '#003366',
      primaryColor: '#011543',
    },
  ],
  [
    'CA_NOTL',
    {
      name: 'Niagara-on-the-Lake Local',
      url: 'https://www.notllocal.com/',
      est: 2019,
      about:
        'Niagara-on-the-Lake news, events, information and more.  Local news from local journalists, photos, event coverage, weekly flyers and entertainment.',
      emos: ['📰', '🇨🇦'],
      headerBG: '#003366',
      primaryColor: '#011543',
    },
  ],
  [
    'CA_NROB',
    {
      name: 'Northern Ontario Business',
      url: 'https://www.northernontariobusiness.com/',
      est: 1980,
      about:
        'Northern Ontario Business publication provides Northern Ontario with relevant, current, and insightful editorial content and business news and information.',
      emos: ['📰', '🇨🇦'],
      headerBG: '#003366',
      primaryColor: '#011543',
    },
  ],
  [
    'CA_ORIL',
    {
      name: 'Orillia Matters',
      url: 'https://www.orilliamatters.com/',
      est: 2018,
      about:
        "Orillia's online news source.  Local news from local journalists, photos, video, sports, events, classifieds, weekly flyers and entertainment.",
      emos: ['📰', '🇨🇦'],
      headerBG: '#003366',
      primaryColor: '#011543',
    },
  ],
  [
    'CA_PLHT',
    {
      name: 'Pelham Today',
      url: 'https://www.pelhamtoday.ca/',
      est: 1997,
      about:
        "Pelham's source for local news, sports, business community information, obituaries and more.",
      emos: ['📰', '🇨🇦'],
      headerBG: '#003366',
      primaryColor: '#011543',
    },
  ],
  [
    'CA_SOTY',
    {
      name: 'Soo Today',
      url: 'https://www.sootoday.com/',
      est: 2002,
      about:
        "Sault Ste. Marie's largest news source. Local news from local journalists, photos, video, sports, events, classifieds, weekly flyers and entertainment.",
      emos: ['📰', '🇨🇦'],
      headerBG: '#003366',
      primaryColor: '#011543',
    },
  ],
  [
    'CA_STRF',
    {
      name: 'Stratford Today',
      url: 'https://www.stratfordtoday.ca/',
      est: 2022,
      about:
        'The news that matters most to the Stratford community, as it happens.',
      emos: ['📰', '🇨🇦'],
      headerBG: '#003366',
      primaryColor: '#011543',
    },
  ],
  [
    'CA_SUDY',
    {
      name: 'Sudbury.com',
      url: 'https://www.sudbury.com/',
      est: 1998,
      about:
        "Sudbury's number one source for local news. Stay current with news, sports, entertainment, classifieds, events and more.",
      emos: ['📰', '🇨🇦'],
      headerBG: '#003366',
      primaryColor: '#011543',
    },
  ],
  [
    'CA_THOR',
    {
      name: 'Thorold Today',
      url: 'https://www.thoroldtoday.ca/',
      est: 2021,
      about:
        "Thorold's local news source.  Local news from local journalists, photos, video, sports, weekly flyers, entertainment and more.",
      emos: ['📰', '🇨🇦'],
      headerBG: '#003366',
      primaryColor: '#011543',
    },
  ],
  [
    'CA_TIMM',
    {
      name: 'Timmins Today',
      url: 'https://www.timminstoday.com/',
      est: 2009,
      about:
        'Timmins news, events, information and more.  Local news from local journalists, photos, event coverage, weekly flyers, entertainment.',
      emos: ['📰', '🇨🇦'],
      headerBG: '#003366',
      primaryColor: '#011543',
    },
  ],
  [
    'CA_LONG',
    {
      name: 'Longmont Leader',
      url: 'https://www.longmontleader.com/',
      est: 2020,
      about:
        "Longmont's local news source. Local news from local journalists, photos, video, sports, entertainment and more.",
      emos: ['📰', '🇨🇦'],
      headerBG: '#003366',
      primaryColor: '#011543',
    },
  ],
  [
    'CA_SOOL',
    {
      name: 'Soo Leader',
      url: 'https://www.sooleader.com/',
      est: 2022,
      about:
        'Soo Leader is your go-to source for local news in Sault Ste Marie, Michigan, offering the latest updates on the events, issues, people and businesses that matter most in our community.',
      emos: ['📰', '🇨🇦'],
      headerBG: '#003366',
      primaryColor: '#011543',
    },
  ],
  [
    'CA_OBSV',
    {
      name: 'The Sarnia Observer',
      url: 'https://www.theobserver.ca/',
      est: 1853,
      about:
        'A newspaper that covers the latest news, sports, entertainment and lifestyle stories from Sarnia-Lambton, Ontario.',
      emos: ['📰', '🇨🇦'],
      headerBG: '#003366',
      primaryColor: '#011543',
    },
  ],
  [
    'CA_KNCD',
    {
      name: 'Kincardine News',
      url: 'https://www.kincardinenews.com/',
      est: 1857,
      about:
        'All the latest breaking Kincardine news, stories and updates affecting Kincardine today.',
      emos: ['📰', '🇨🇦'],
      headerBG: '#003366',
      primaryColor: '#011543',
    },
  ],
  [
    'CA_CBC',
    {
      name: 'CBC',
      url: 'https://www.cbc.ca/',
      est: 1936,
      about:
        "Canada's home for breaking and in-depth coverage of local, national and international news.",
      emos: ['📰', '🇨🇦'],
      headerBG: '#003366',
      primaryColor: '#011543',
    },
  ],
  [
    'CA_GLBL',
    {
      name: 'Global News',
      url: 'https://globalnews.ca/',
      est: 1994,
      about:
        'Global News provides breaking news & current latest Canadian news headlines; national weather forecasts & predictions, local news videos, money and financial news; sports stats and scores.',
      emos: ['📰', '🇨🇦'],
      langs: ['en'],
    },
  ],
]);
export const CANewsSourcesLength = CANewsSources.size;

export const IENewsSources = new Map<string, NewsSource>([
  [
    'IE_AGRI',
    {
      name: 'Agriland',
      url: 'https://www.agriland.ie/',
      est: 2012,
      about:
        "Agriland is Ireland's leading digital news and services platform for the farming and agricultural sectors. Serving as a vital resource for farming professionals and enthusiasts, offering in-depth coverage on industry news, weather reports, market trends, and innovative agricultural technologies.Agriland connects the Irish farming community with practical insights, expert advice, and a platform for discourse on issues that matter.",
      emos: ['🚜', '🇮🇪 ', '🌱', '🐄'],
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
      logoWidth: 300,
      logoHeight: 40,
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
      logoWidth: 100,
      logoHeight: 100,
      emos: ['💻', '🇮🇪', '⚽', '🏈', '🥌', '⛷'],
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
        email: 'mailto:info@balls.ie',
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
      emos: ['💻', '🇮🇪', '🧑‍💼', '📈'],
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
      logoWidth: 280,
      logoHeight: 96,
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
      emos: ['📻', '🇮🇪', '🎭'],
      langs: ['en'],
      logoWidth: 177,
      logoHeight: 100,
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
      logoWidth: 212,
      logoHeight: 100,
      headerBG: '#fff',
      primaryColor: '#D20019',
    },
  ],
  [
    'IE_RDFM',
    {
      name: "Cork's RedFM",
      url: 'https://redfm.ie',
      est: 2002,
      emos: ['📻', '🇮🇪'],
      logoWidth: 144,
      logoHeight: 100,
      headerBG: '#d71921',
      primaryColor: '#d71921',
    },
  ],
  [
    'IE_DERJ',
    {
      name: 'Derry Journal',
      url: 'https://www.derryjournal.com/',
      est: 1772,
      about:
        'For centuries the Derry Journal has stood as a beacon of reliable information, delivering the knowledge needed to comprehend the world, hold those in power accountable, and shed light on injustices. With an unwavering commitment to journalism, this esteemed publication ensures that both the unheard voices and skilled advocates have a platform to express their perspectives. Through its comprehensive reporting and expertly crafted arguments, the Derry Journal remains dedicated to bringing the truth to light and providing invaluable insights on a wide range of topics. For centuries, it has been a trusted source for the people of Derry and beyond, playing a crucial role in shaping public discourse and enriching the lives of its readers. Rooted in history and driven by a passion for truth, the Derry Journal continues to be a pillar of journalistic excellence, fostering a deeper understanding of the world and empowering its audience with knowledge.',
      description: [
        'With a legacy dating back to 1772, the Derry Journal holds a significant place in the media landscape, providing the people of Derry and beyond with reliable and insightful news coverage.',
        'Throughout its long and storied existence, the newspaper has been dedicated to giving a voice to the voiceless and upholding the principles of journalistic integrity.',
        "As one of Ireland's trusted news sources, the Derry Journal covers a wide range of topics, from local news and events to national and international affairs, keeping its readers informed and engaged.",
        'With a firm commitment to crafting well-informed arguments and fostering meaningful discussions, the publication plays a vital role in shaping public opinion and promoting a deeper understanding of complex issues.',
        "The Derry Journal's dedication to its readers and its role in society makes it an essential part of Derry's media landscape, continuing to serve as a reliable and respected source of news and information.",
      ],
      emos: ['📰', '🇮🇪'],
      langs: ['en'],
      tags: ['DerryJournal', 'News', 'Journalism', 'Ireland', 'LocalNews'],
      headerBG: '#fff',
      socials: {
        email: 'mailto:editorial@derryjournal.com',
        facebook: 'https://www.facebook.com/derryjournal',
        twitter: 'https://www.twitter.com/derryjournal',
      },
      primaryColor: '#00528f',
      secondaryColor: '#ecb810',
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
      about:
        'Donegal Daily is a reliable online news platform that provides up-to-date and comprehensive coverage of news as it happens across Donegal. As a dedicated source of information, it keeps the local community informed about the latest developments, events, and stories that matter most to the people of Donegal.',
      description: [
        'Since its establishment in 2011, Donegal Daily has been committed to delivering timely and accurate news to its readers. Its team of passionate journalists and contributors work diligently to report on a diverse range of topics, including local news, sports, business, entertainment, and more.',
        'The platform prides itself on its focus on the Donegal region, ensuring that residents have access to relevant and engaging stories that reflect their interests and concerns. By keeping its finger on the pulse of the community, Donegal Daily has become an integral part of local media in the region.',
        "With a user-friendly website and intuitive navigation, Donegal Daily makes it easy for readers to stay informed on their desktops, laptops, or mobile devices. The platform's commitment to providing news as it happens has earned it a loyal and growing readership in Donegal and beyond.",
        'Donegal Daily continues to embrace technological advancements, enabling it to adapt to the ever-changing media landscape. By leveraging digital tools and social media, it ensures that its stories reach a wider audience, fostering a stronger sense of community and connection across the region.',
      ],
      emos: ['💻', '🇮🇪'],
      logoWidth: 191,
      logoHeight: 100,
      langs: ['en'],
      tags: [
        'DonegalDaily',
        'DonegalNews',
        'LocalNews',
        'IrishMedia',
        'Community',
        'DigitalNews',
      ],
      socials: {
        email: 'mailto:info@donegaldaily.com',
        facebook: 'https://www.facebook.com/donegaldaily',
        twitter: 'https://twitter.com/donegaldaily',
        instagram: 'https://www.instagram.com/donegaldaily/',
      },
      headerBG: '#fff',
      primaryColor: '#0e4d91',
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
      name: 'Donegal News & Derry People',
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
      logoWidth: 596,
      logoHeight: 100,
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
      logoWidth: 302,
      logoHeight: 100,
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
      logoWidth: 185,
      logoHeight: 138,
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
      logoWidth: 300,
      logoHeight: 58,
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
      emos: ['📰', '🇮🇪', '🧑‍💻'],
      logoWidth: 136,
      logoHeight: 49,
      headerBG: '#002542',
      primaryColor: '#004040',
    },
  ],
  [
    'IE_ENTR',
    {
      name: 'entertainment.ie',
      url: 'https://entertainment.ie/',
      est: 1997,
      emos: ['💻', '🇮🇪', '🎭'],
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
      emos: ['💻', '🇮🇪', '👭'],
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
      logoWidth: 244,
      logoHeight: 58,
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
      emos: ['💻', '🇮🇪', '🚛'],
      logoWidth: 300,
      logoHeight: 104,
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
      logoWidth: 272,
      logoHeight: 90,
      headerBG: '#073045',
      primaryColor: '#FFC70F',
    },
  ],
  [
    'IE_GADV',
    {
      name: 'Galway Advertiser',
      url: 'https://www.advertiser.ie/galway',
      est: 1970,
      emos: ['📰', '🇮🇪'],
      logoWidth: 300,
      logoHeight: 40,
      headerBG: '#d70909',
      primaryColor: '#d70909',
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
      emos: ['📰', '🇮🇪', '🏳️‍🌈'],
    },
  ],
  [
    'IE_HER',
    {
      name: 'Her',
      url: 'https://www.her.ie/',
      est: 2012,
      emos: ['💻', '🇮🇪', '👭'],
      logoWidth: 136,
      logoHeight: 70,
      headerBG: '#560537',
      primaryColor: '#560537',
    },
  ],
  [
    'IE_HGV',
    {
      name: 'HGV Ireland',
      url: 'https://www.hgvireland.com/',
      est: 2007,
      emos: ['💻', '🇮🇪', '🚛'],
    },
  ],
  [
    'IE_HIRD',
    {
      name: 'Highland Radio',
      url: 'https://www.highlandradio.com/',
      est: 1990,
      emos: ['📻', '🇮🇪'],
      headerBG: '#A6228C',
    },
  ],
  [
    'IE_HOTP',
    {
      name: 'Hot Press',
      url: 'https://www.hotpress.com/',
      est: 1977,
      emos: ['📰', '🇮🇪 ', '🎭'],
      logoWidth: 124,
      logoHeight: 66,
    },
  ],
  [
    'IE_HSHM',
    {
      name: 'House And Home',
      url: 'https://www.houseandhome.ie/',
      est: 2001,
      emos: ['💻', '🇮🇪', '🏡'],
    },
  ],
  [
    'IE_IMG',
    {
      name: 'Image',
      url: 'https://www.image.ie/',
      est: 1975,
      emos: ['📰', '🇮🇪', '👚'],
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
      logoWidth: 87,
      logoHeight: 100,
    },
  ],
  [
    'IE_BOX',
    {
      name: 'Irish Boxing',
      url: 'https://www.irish-boxing.com/',
      est: 2001,
      emos: ['💻', '🇮🇪', '🥊'],
    },
  ],
  [
    'IE_CNTR',
    {
      name: 'IrishCentral',
      url: 'https://www.irishcentral.com/',
      est: 2009,
      emos: ['💻', '🇮🇪'],
      logoWidth: 450,
      logoHeight: 90,
    },
  ],
  [
    'IE_CTRM',
    {
      name: 'Irish Country Magazine',
      url: 'https://irishcountrymagazine.ie/',
      est: 2012,
      emos: ['💻', '🇮🇪', '🏡'],
    },
  ],
  [
    'IE_EXAM',
    {
      name: 'Irish Examiner',
      url: 'https://www.irishexaminer.com/',
      est: 1841,
      about:
        'The Irish Examiner, a reputable Irish newspaper established in 1841, delivers comprehensive coverage of national and international news, business, sports, entertainment, and more. As a leading source of information, it is dedicated to providing insightful journalism, engaging stories, and in-depth analysis to its readers.',
      description: [
        'The Irish Examiner has a rich history dating back to 1841, and over the years, it has played a crucial role in keeping the Irish public well-informed about important events and developments both within Ireland and around the world.',
        'As a trusted news source, the Irish Examiner covers a wide range of topics, including politics, economy, culture, and lifestyle. Its team of experienced journalists and contributors ensures that readers receive accurate, unbiased, and high-quality reporting.',
        'In addition to its print edition, the Irish Examiner has embraced the digital era and established a strong online presence, making its content accessible to a broader audience. Its website offers a user-friendly platform for readers to access the latest news, features, and opinion pieces.',
        'The newspaper remains committed to its mission of delivering credible and compelling news stories that resonate with its readership. Its dedication to journalistic integrity and relevance has earned it a respected position in the media landscape of Ireland.',
      ],
      emos: ['📰', '🇮🇪'],
      logoWidth: 438,
      logoHeight: 53,
      langs: ['en'],
      tags: [
        'IrishExaminer',
        'IrishNews',
        'NationalNews',
        'InternationalNews',
        'Business',
        'Sports',
        'Entertainment',
        'Journalism',
      ],
      socials: {
        podcast: 'https://www.irishexaminer.com/podcast-home/',
        facebook: 'https://www.facebook.com/IrishExaminer',
        twitter: 'https://twitter.com/irishexaminer',
        instagram: 'https://www.instagram.com/irish_examiner/',
        youtube: 'https://www.youtube.com/@IrishExaminerVideo',
      },
      headerBG: '#fff',
      primaryColor: '#F15821',
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
      emos: ['📰', '🇮🇪', '🌱'],
      logoWidth: 236,
      logoHeight: 92,
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
        email: 'mailto:info@farmersjournal.ie',
        facebook: 'https://www.facebook.com/IrishFarmersJournal',
        twitter: 'https://twitter.com/farmersjournal',
        instagram: 'https://www.instagram.com/farmersjournal/',
        youtube: 'https://www.youtube.com/@IrishFarmersJournal',
        linkedin: 'https://www.linkedin.com/company/farmers-journal/',
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
      emos: ['💻', '🇮🇪', '🧑‍⚖️'],
    },
  ],
  [
    'IE_IMT',
    {
      name: 'Irish Medical Times',
      url: 'https://www.imt.ie/',
      est: 1967,
      emos: ['📰', '🇮🇪', '🧑‍⚕️'],
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
      logoWidth: 144,
      logoHeight: 45,
      headerBG: '#005495',
      primaryColor: '#00a2e1',
    },
  ],
  [
    'IE_KFMR',
    {
      name: 'Kfm',
      url: 'https://www.kfmradio.com/',
      est: 2004,
      emos: ['📻', '🇮🇪'],
      logoWidth: 73,
      logoHeight: 80,
      headerBG: '#faeb22',
      primaryColor: '#faeb22;',
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
      logoWidth: 260,
      logoHeight: 55,
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
        email: 'mailto:news@kilkennypeople.ie',
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
      logoWidth: 257,
      logoHeight: 100,
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
      emos: ['📰', '🇮🇪', '🧑‍⚖️'],
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
      logoWidth: 311,
      logoHeight: 100,
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
      logoWidth: 640,
      logoHeight: 82,
    },
  ],
  [
    'IE_LIML',
    {
      name: 'Limerick Leader',
      url: 'https://www.limerickleader.ie/',
      est: 1889,
      about:
        'Limerick Leader is a long-standing Irish newspaper that has been serving the Limerick community since 1889. With a rich history and deep roots in the local area, the newspaper provides comprehensive coverage of news, events, sports, politics, business, and more. Limerick Leader aims to keep the community informed about the latest happenings, offering in-depth reporting and insightful analysis. It is a trusted source of information, fostering a sense of community and providing a platform for discussions and debates.',
      emos: ['📰', '🇮🇪'],
      langs: ['en'],
      tags: [
        'LimerickLeader',
        'IrishNews',
        'LocalNews',
        'Community',
        'Events',
        'Sports',
        'Politics',
        'Business',
      ],
      socials: {
        email: 'mailto:news@limerickleader.ie',
        twitter: 'https://twitter.com/limerick_leader',
        facebook: 'https://www.facebook.com/LimerickLeader',
      },
      headerBG: '#fff',
      primaryColor: '#004A8D',
    },
  ],
  [
    'IE_LIMP',
    {
      name: 'Limerick Post',
      url: 'https://www.limerickpost.ie/',
      est: 1986,
      about:
        'Limerick Post is a reputable Irish newspaper that has been providing news, information, and insights to the local community since 1986. With a focus on Limerick and its surrounding areas, the newspaper delivers comprehensive coverage of local news, events, sports, business, entertainment, and more. Limerick Post serves as a reliable source of information, keeping the community informed about important happenings and offering a platform for discussions and debates. It plays a crucial role in connecting the people of Limerick and fostering a sense of community.',
      emos: ['📰', '🇮🇪'],
      langs: ['en'],
      logoWidth: 201,
      logoHeight: 100,
      tags: [
        'LimerickPost',
        'IrishNews',
        'LocalNews',
        'Community',
        'Events',
        'Sports',
        'Business',
        'Entertainment',
      ],
      socials: {
        email: 'mailto:news@limerickpost.ie',
        facebook: 'https://www.facebook.com/LimerickPostNews',
        instagram: 'https://www.instagram.com/limerickpost/',
        linkedin: 'http://www.linkedin.com/company/limerick-post-newspaper',
        twitter: 'https://www.twitter.com/limerickpost',
        youtube: 'https://youtube.com/user/limerickpostvideo',
      },
      headerBG: '#005eb8',
      primaryColor: '#005eb8',
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
        email: 'mailto:info@live95.ie',
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
      about:
        'LMFM is a popular Irish radio station that has been broadcasting since 1989. With a focus on providing quality programming to the local community, LMFM covers a wide range of topics, including news, sports, entertainment, and more. The station keeps listeners informed and entertained with a mix of music, talk shows, interviews, and live events. LMFM is dedicated to serving the needs and interests of its audience, fostering a sense of community and providing a platform for local voices.',
      emos: ['📻', '🇮🇪'],
      langs: ['en'],
      logoWidth: 180,
      logoHeight: 145,
      tags: [
        'LMFM',
        'IrishRadio',
        'LocalRadio',
        'News',
        'Sports',
        'Entertainment',
      ],
      socials: {
        email: 'mailto:info@lmfm.ie',
        live: 'https://www.lmfm.ie/player/',
        facebook: 'https://www.facebook.com/lmfmradiowireless/',
        twitter: 'https://twitter.com/lmfmradio',
        instagram: 'https://www.instagram.com/lmfm_radio958',
        apple: 'https://apps.apple.com/ie/app/lmfm-radio/id469837802',
        android:
          'https://play.google.com/store/apps/details?id=com.thisisaim.lmfm&hl=en_GB',
        whatsapp: 'https://wa.me/3530861800658',
      },
      headerBG: '#fff',
      primaryColor: '#4049d0',
    },
  ],
  [
    'IE_LNGL',
    {
      name: 'Longford Leader',
      url: 'https://www.longfordleader.ie/',
      est: 1897,
      emos: ['📰', '🇮🇪'],
      logoWidth: 169,
      logoHeight: 100,
      socials: {
        email: 'mailto:news@longfordleader.ie',
        twitter: 'https://twitter.com/Longford_Leader',
        facebook: 'https://www.facebook.com/LongfordLeader',
      },
    },
  ],
  [
    'IE_MADV',
    {
      name: 'Mayo Adevertiser',
      url: 'https://www.advertiser.ie/mayo',
      est: 1970,
      emos: ['📰', '🇮🇪'],
      logoWidth: 300,
      logoHeight: 40,
      headerBG: '#d70909',
      primaryColor: '#d70909',
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
      emos: ['💻', '🇮🇪', '🃏'],
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
      logoWidth: 180,
      logoHeight: 130,
      headerBG: '#0E7C40',
      primaryColor: '#0b7a3e',
    },
  ],
  [
    'IE_MIDW',
    {
      name: 'MidWest Radio',
      url: 'https://midwestradio.ie/',
      est: 1979,
      emos: ['📻', '🇮🇪'],
      logoWidth: 234,
      logoHeight: 96,
      headerBG: '#000034',
      primaryColor: '#F5B418',
    },
  ],
  [
    'IE_MTLY',
    {
      name: 'Motley',
      url: 'https://motley.ie/',
      est: 2006,
      emos: ['💻', '🇮🇪', '🧑‍🎓'],
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
        "The News Letter holds the prestigious title of being the world's oldest English-language daily newspaper still in publication. Based in Belfast, it offers a distinctive perspective on local and international news, sports, lifestyle, and more. With a legacy spanning centuries, this historic publication has played a vital role in keeping the public well-informed about significant events, issues, and developments both regionally and globally. As a trusted and respected source, The News Letter continues to uphold its commitment to journalistic integrity, providing its readers with comprehensive and reliable coverage across a wide range of topics. From politics to culture, business to sports, The News Letter remains a beacon of excellence in the world of journalism, leaving an indelible mark on media history.",
      description: [
        'With a rich history dating back to 1737, The News Letter holds a significant place in the media landscape, serving as a reliable source of information for readers in Belfast and beyond.',
        'Throughout its long and distinguished existence, the newspaper has played a crucial role in keeping the public informed about important events, issues, and developments, both locally and globally.',
        'As a historic publication, The News Letter has witnessed and reported on numerous significant moments in history, making it a valuable record of the past and a testament to the enduring power of journalism.',
        "The newspaper's coverage extends to a wide range of topics, including politics, culture, business, and sports, providing readers with a comprehensive and well-rounded view of the world.",
        'With a focus on journalistic integrity and accuracy, The News Letter continues to be a trusted source of news and analysis for its readers, preserving its legacy as one of the most respected and influential newspapers in the English-speaking world.',
      ],
      emos: ['💻', '🇬🇧'],
      langs: ['en'],
      tags: [
        'TheNewsLetter',
        'Belfast',
        'Newspaper',
        'Journalism',
        'MediaHistory',
      ],
      headerBG: '#fff',
      socials: {
        email: 'mailto:letters@newsletter.co.uk',
        facebook: 'https://www.facebook.com/belfastnewsletter',
        twitter: 'https://twitter.com/News_Letter',
      },
      primaryColor: '#003399',
      secondaryColor: '#ffcc00',
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
      logoWidth: 273,
      logoHeight: 100,
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
      emos: ['📻', '🇮🇪', '⚽'],
    },
  ],
  [
    'IE_PNDT',
    {
      name: 'Pundit Arena',
      url: 'https://punditarena.com/',
      est: 2013,
      emos: ['💻', '🇮🇪', '⚽'],
    },
  ],
  [
    'IE_NOVA',
    {
      name: 'Radio Nova',
      url: 'https://www.nova.ie/',
      est: 2010,
      emos: ['📻', '🇮🇪'],
      logoWidth: 272,
      logoHeight: 90,
      headerBG: '#0a2846',
      primaryColor: '#AF1817',
    },
  ],
  [
    'IE_RKER',
    {
      name: 'Radio Kerry',
      url: 'https://www.radiokerry.ie/',
      est: 1990,
      emos: ['📻', '🇮🇪'],
      logoWidth: 140,
      logoHeight: 127,
      headerBG: '#113F77',
      primaryColor: '#E1C04B',
    },
  ],
  [
    'IE_RLCT',
    {
      name: 'RollerCoaster.ie',
      url: 'https://rollercoaster.ie/',
      est: 2000,
      about:
        "RollerCoaster.ie is Ireland's premier online platform for parenting and pregnancy-related information and support. It is a go-to resource for parents, parents-to-be, and families, offering a wealth of articles, advice, and community forums to navigate the rollercoaster journey of parenthood.",
      description: [
        'Founded in 2000, RollerCoaster.ie has been dedicated to providing valuable and up-to-date information on parenting, pregnancy, and family life in Ireland. With a team of experienced writers and contributors, it covers a wide range of topics, from pregnancy and childbirth to parenting tips, child development, and family activities.',
        "The platform's vibrant online community fosters a supportive environment for parents to connect, share experiences, and seek advice from one another. RollerCoaster.ie recognizes the challenges and joys of parenting and seeks to create a nurturing space for families to learn and grow together.",
        'In addition to its informative articles, RollerCoaster.ie also features expert insights from healthcare professionals, educators, and parenting specialists. This ensures that parents have access to reliable and evidence-based information to make informed decisions for their families.',
        'Over the years, RollerCoaster.ie has evolved into a comprehensive resource for Irish parents, offering not only practical advice but also emotional support during the various stages of parenthood. Its commitment to providing a platform that celebrates the unique journey of each family sets it apart as a trusted and beloved parenting website in Ireland.',
      ],
      emos: ['💻', '🇮🇪', '🤰'],
      langs: ['en'],
      logoWidth: 206,
      logoHeight: 45,
      tags: [
        'RollerCoaster',
        'Parenting',
        'Pregnancy',
        'FamilyLife',
        'Community',
      ],
      socials: {
        facebook: 'https://www.facebook.com/RollerCoaster.ie/',
        instagram: 'https://www.instagram.com/rollercoaster.ie/',
      },
      headerBG: '#fff',
      primaryColor: '#354562',
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
      emos: ['💻', '🇮🇪', '📸'],
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
      emos: ['💻', '🇮🇪', '🧮'],
      logoWidth: 552,
      logoHeight: 50,
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
      logoWidth: 161,
      logoHeight: 110,
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
      emos: ['💻', '🇮🇪', '⚽'],
    },
  ],
  [
    'IE_SUNW',
    {
      name: 'Sunday World',
      url: 'https://www.sundayworld.com/',
      est: 1973,
      emos: ['📰', '🇮🇪'],
      logoWidth: 224,
      logoHeight: 110,
      headerBG: '#000',
      primaryColor: '##FF0D0D',
    },
  ],
  [
    'IE_TECC',
    {
      name: 'Tech Central',
      url: 'https://www.techcentral.ie/',
      est: 1984,
      emos: ['📰', '🇮🇪', '🧮'],
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
      logoWidth: 300,
      logoHeight: 100,
      headerBG: '#08192d',
      primaryColor: '#d50b17',
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
      emos: ['📰', '🇮🇪', '🧑‍💼'],
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
        email: 'mailto:info@businesspost.ie',
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
      logoWidth: 198,
      logoHeight: 42,
      headerBG: '#fff',
      primaryColor: '#2392d0',
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
      logoWidth: 403,
      logoHeight: 100,
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
      logoWidth: 220,
      logoHeight: 42,
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
      logoWidth: 307,
      logoHeight: 100,
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
      name: 'Strabane Weekly News',
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
      logoWidth: 258,
      logoHeight: 77,
      headerBG: '#141618',
      primaryColor: '#15141A',
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
      logoWidth: 450,
      logoHeight: 97,
      headerBG: '#ed1c24',
      primaryColor: '#262879',
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
    'IE_NEWR',
    {
      name: 'Newry.ie',
      url: 'https://www.newry.ie',
      est: 2012,
      about: 'Local news, features and sport.',
      emos: ['💻', '🇮🇪'],
      logoWidth: 300,
      logoHeight: 54,
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
      emos: ['💻', '🇮🇪', '👚'],
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
      emos: ['📰', '🇮🇪', '🏇'],
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
      logoWidth: 360,
      logoHeight: 65,
      headerBG: '#004d15',
      primaryColor: '#004d15',
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
        email: 'mailto:hello@thejournal.ie',
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
      logoWidth: 525,
      logoHeight: 125,
    },
  ],
  [
    'IE_MUNX',
    {
      name: 'The Munster Express',
      url: 'https://www.munster-express.ie/',
      est: 1860,
      emos: ['📰', '🇮🇪'],
      logoWidth: 438,
      logoHeight: 63,
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
      logoWidth: 629,
      logoHeight: 100,
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
      logoWidth: 307,
      logoHeight: 100,
    },
  ],
  [
    'IE_WKWP',
    {
      name: 'The Wicklow People',
      url: 'https://www.independent.ie/regionals/wicklow/',
      est: 1882,
      emos: ['📰', '🇮🇪'],
      logoWidth: 476,
      logoHeight: 36,
    },
  ],
  [
    'IE_42',
    {
      name: 'The 42',
      url: 'https://www.the42.ie/',
      est: 2010,
      about:
        'The 42 is a leading Irish sports news and analysis website, dedicated to providing comprehensive coverage of a wide range of sports, with a particular focus on football. As a trusted source of sports journalism in Ireland, The 42 delivers breaking news, in-depth features, expert analysis, and engaging opinion pieces that keep sports enthusiasts and football fans informed and entertained. With its team of experienced journalists and passionate contributors, The 42 offers a unique perspective on national and international sports events, including major tournaments, leagues, and competitions.',
      emos: ['💻', '🇮🇪', '⚽'],
      langs: ['en'],
      tags: [
        'The42',
        'SportsNews',
        'Football',
        'SportsAnalysis',
        'SportsOpinion',
      ],
      socials: {
        email: 'mailto:sport@the42.ie',
        facebook: 'https://www.facebook.com/the42.ie',
        twitter: 'https://twitter.com/the42_ie',
        instagram: 'https://www.instagram.com/the42.ie',
      },
      headerBG: '#1d3b3c',
      primaryColor: '#23612d;',
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
      emos: ['💻', '🇮🇪', '🧑‍🎓'],
    },
  ],
  [
    'IE_TRTY',
    {
      name: 'Trinity News',
      url: 'https://trinitynews.ie/',
      est: 1953,
      emos: ['📰', '🇮🇪', '🧑‍🎓'],
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
        email: 'mailto:eolas@tuairisc.ie',
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
      emos: ['💻', '🇮🇪', '🧑‍🎓'],
    },
  ],
  [
    'IE_UNOB',
    {
      name: 'University Observer',
      url: 'https://universityobserver.ie/',
      est: 1994,
      logoWidth: 99,
      logoHeight: 96,
      about:
        'University Observer is the premier student newspaper of a renowned university. With a dedicated commitment to journalistic integrity, it provides in-depth coverage of campus events, student affairs, and other related topics. Rooted in fostering informed discussions among the student body, the Observer stands as an essential platform for young voices and perspectives.',
      description: [
        'The University Observer, established in 1994, has played an instrumental role in chronicling student life and university happenings. Serving as a trusted source of news, it offers a unique lens on academic achievements, sporting events, cultural programs, and more.',
        'Structured with segments dedicated to news, opinion, arts & culture, and sports, it ensures comprehensive coverage of all facets of student life. The Observer strives to give a voice to the student community, providing an avenue for thoughtful discussions, debates, and stories.',
        'The publication has seen many students rise to become accomplished writers, journalists, and editors. Through its rich history, it has been a training ground for budding journalists and has been at the forefront of highlighting pivotal moments in student history.',
        'With the rise of digital platforms, the University Observer seamlessly integrated its offerings online. This expansion allowed for a broader reach, interactive multimedia stories, and timely updates, catering to the dynamic needs of its readership.',
        "Remaining true to its mission, the Observer continues to be a platform that reflects, engages, and informs the university's student population.",
      ],
      emos: ['📰', '🇮🇪', '🧑‍🎓'],
      langs: ['en'],
      tags: [
        'UniversityObserver',
        'CampusNews',
        'StudentLife',
        'AcademicNews',
        'Culture',
        'Sports',
        'Opinions',
        'UniversityEvents',
      ],
      socials: {
        email: 'mailto:info@universityobserver.ie',
        facebook: 'https://facebook.com/UniversityObserver/',
        instagram: 'https://instagram.com/universityobserver/',
        twitter: 'https://twitter.com/UCDObserver/',
        linkedin: 'https://linkedin.com/company/universityobserver/',
        issuu: 'https://issuu.com/universityobserver/',
        mixcloud: 'https://mixcloud.com/universityobserver/',
      },
      headerBG: '#fff',
      primaryColor: '#000',
    },
  ],
  [
    'IE_UNIT',
    {
      name: 'University Times',
      url: 'https://universitytimes.ie/',
      est: 2009,
      about:
        'The University Times is the independent student newspaper of Trinity College Dublin. It serves as a platform for student journalists to report on campus news, events, and issues that matter to the university community. With a focus on quality journalism and student perspectives, the University Times strives to keep students informed, engaged, and connected.',
      description: [
        'Founded in 2009, the University Times has been a vital part of the Trinity College Dublin community, providing students with news, features, and opinions that reflect their interests and concerns. Run entirely by students, the newspaper offers a unique opportunity for aspiring journalists and writers to gain experience and contribute to the campus discourse.',
        'As an independent publication, the University Times maintains editorial independence and transparency, ensuring that student voices are heard and represented accurately. It covers a diverse range of topics, including campus events, student politics, culture, and academic matters.',
        'The University Times also serves as a platform for student engagement and expression, encouraging students to submit articles, opinion pieces, and letters to the editor. This fosters a sense of community and inclusivity, allowing different perspectives to be shared and discussed.',
        'With its commitment to upholding journalistic standards and serving the needs of the Trinity College Dublin community, the University Times continues to be an essential source of information and a platform for student expression on campus.',
      ],
      emos: ['💻', '🇮🇪', '🧑‍🎓'],
      langs: ['en'],
      tags: [
        'UniversityTimes',
        'TrinityCollegeDublin',
        'StudentNewspaper',
        'CampusNews',
        'StudentJournalism',
      ],
      logoWidth: 39,
      logoHeight: 28,
      headerBG: '#fff',
      primaryColor: '#23414A',
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
      logoWidth: 600,
      logoHeight: 91,
    },
  ],
  [
    'IE_WSTX',
    {
      name: 'Westmeath Examiner',
      url: 'https://www.westmeathexaminer.ie/',
      est: 1882,
      emos: ['📰', '🇮🇪'],
      logoWidth: 762,
      logoHeight: 94,
      headerBG: '#fff',
      primaryColor: '#004588',
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
      about:
        "WLR FM, established in 1989, is one of Ireland's most respected radio stations. Broadcasting from the heart of Ireland, it offers a blend of local news, sports, and entertainment. As a beacon for regional stories and Irish culture, WLR FM prides itself on its rich history and commitment to authentic Irish programming.",
      description: [
        'WLR FM is a primary source of entertainment, news, and information for its Irish listeners. With a dedication to quality broadcasting, it reflects the diverse interests of its audience.',
        'Covering a vast array of segments, from local events to national happenings, WLR FM ensures its listeners stay informed and entertained. Its programs delve into Irish history, culture, and contemporary issues, offering a platform for spirited discussions and musical celebrations.',
        'WLR FM has earned its reputation by nurturing local talent, hosting iconic Irish personalities, and by being a voice for its community. Throughout its journey, the station has championed local causes and played an integral role in promoting regional events.',
        'Adapting to the digital age, WLR FM extended its reach online. The digital platform enabled the radio station to connect with the Irish diaspora worldwide, ensuring that the pulse of Ireland could be felt anywhere.',
        'With its unique blend of news, music, and culture, WLR FM stands as a testament to the rich tapestry of Irish life and remains a favorite among its listeners.',
      ],
      logoWidth: 140,
      logoHeight: 95,
      emos: ['📻', '🇮🇪'],
      langs: ['en'],
      tags: [
        'WLRFM',
        'IrishRadio',
        'LocalNews',
        'IrishCulture',
        'Sports',
        'Entertainment',
        'Music',
        'CommunityRadio',
      ],
      socials: {
        live: 'https://www.wlrfm.com',
        podcast: 'https://www.wlrfm.com/podcasts/',
        iheart: 'https://www.spreaker.com/show/wlr-fm',
        email: 'mailto:reception@wlrfm.com',
        facebook: 'https://www.facebook.com/wlrfm',
        twitter: 'https://twitter.com/wlrfm',
        youtube: 'https://www.youtube.com/user/wlrfmwaterford/featured',
        instagram: 'https://www.instagram.com/wlrfm/',
      },
      headerBG: '#004D9A',
      primaryColor: '#C6101F',
    },
  ],
  [
    'IE_WW',
    {
      name: 'Womans Way',
      url: 'https://www.womansway.ie/',
      est: 1963,
      emos: ['📰', '🇮🇪', '👭'],
    },
  ],
  [
    'IE_RTE',
    {
      name: 'RTÉ',
      url: 'https://www.rte.ie/',
      est: 1966,
      about:
        "RTÉ is Ireland's national public service media organization. It provides a wide range of news, entertainment, and educational content through television, radio, and online platforms. With a commitment to serving the Irish public, RTÉ plays a vital role in informing, entertaining, and connecting the people of Ireland.",
      emos: ['📺', '🇮🇪', '📻'],
      langs: ['en'],
      tags: [
        'RTÉ',
        'IrishNews',
        'PublicBroadcasting',
        'Entertainment',
        'Sports',
        'Culture',
        'Education',
      ],
      socials: {
        video: 'https://www.rte.ie/player/',
        email: 'info@rte.ie',
        twitter: 'https://twitter.com/rte',
        facebook: 'https://www.facebook.com/ExploreRTE/',
        instagram: 'https://www.instagram.com/explorerte/',
        linkedin: 'https://linkedin.com/company/rte/',
        youtube: 'https://www.youtube.com/user/rte',
      },
      headerBG: '#fff',
      primaryColor: '#00a7b3',
    },
  ],
  [
    'IE_DTCH',
    {
      name: 'The Ditch',
      url: 'https://www.ontheditch.com/',
      est: 2021,
      about:
        'The Ditch is an Irish online platform that brings you a unique perspective on various topics, from current events and culture to technology and more. As an emerging media outlet, The Ditch aims to engage and entertain its audience through insightful content and creative storytelling. With a fresh and innovative approach, The Ditch invites you to explore a diverse range of subjects and join the conversation on the issues that matter.',
      emos: ['🌐', '🇮🇪'],
      langs: ['en'],
      logoWidth: 514,
      logoHeight: 100,
      tags: ['wereontheditch'],
      socials: {
        email: 'ontheditch@protonmail.com',
        facebook: 'https://www.facebook.com/the-ditch-107969441391099',
        twitter: 'https://twitter.com/wereontheditch',
        rss: 'https://feedly.com/i/subscription/feed/https://www.ontheditch.com/rss/',
      },
      headerBG: '#fff',
      primaryColor: '#0CD500',
    },
  ],
  [
    'IE_EBEO',
    {
      name: 'Éire Bheo',
      url: 'https://www.eirebheo.ie/',
      est: 2022,
      about:
        "Is láithreán gréasáin Éireannach é Éire Bheo atá tiomanta d'nuachta agus eolais a sheachadadh i nGaeilge na hÉireann. Mar lucht taca bródúil don chultúr agus don teanga, tá sé mar aidhm ag Éire Bheo an oidhreacht shaibhir na hÉireann a chur chun cinn agus a chaomhnú trína chuid ábhar. Ag díriú ar imeachtaí reatha, cultúr, agus pobal, tá Éire Bheo ag streachailt chun a bheith mar fhoinse d'fhoghlaimeoirí agus d'fhoghlaimeoirí Gaeilge, ag soláthar léargas uathúil agus fíorúil ar ábhar éagsúil.",
      emos: ['🌐', '🇮🇪'],
      langs: ['ga'],
      logoWidth: 100,
      logoHeight: 100,
      tags: [
        'EireBheo',
        'Gaeilge',
        'Cultúr',
        'Nuachtlitir',
        'Foghlaimeoirí',
        'Pobal na hÉireann',
      ],
      socials: {
        email: 'news@eirebheo.ie',
        facebook: 'https://www.facebook.com/EireBheo/',
        instagram: 'https://www.instagram.com/EireBheo/',
        twitter: 'https://twitter.com/EireBheo',
        rss: 'https://www.eirebheo.ie/sezioni/2851/rss',
      },
      headerBG: '#fff',
      primaryColor: '#333',
    },
  ],
  [
    'IE_WERT',
    {
      name: 'WeAreTyrone',
      url: 'https://wearetyrone.com/',
      est: 1896,
      about:
        'A multi-media hub for news, sport, entertainment and lifestyle content for the Tyrone community.',
      emos: ['🌐', '🇮🇪'],
      langs: ['en'],
    },
  ],
  [
    'IE_SLUG',
    {
      name: "Slugger O'Toole",
      url: 'https://sluggerotoole.com/',
      est: 2002,
      about:
        'A leading source of news and analysis on Northern Ireland politics, culture and society.',
      emos: ['🌐', '🇮🇪'],
      langs: ['en'],
    },
  ],
  [
    'IE_TECH',
    {
      name: 'Irish Tech News',
      url: 'https://irishtechnews.ie/',
      est: 2014,
      about:
        'Keeping you informed of all the latest news from the world of Technology. With the main focus on Irish based news, covering a wide range of topics from social media and smartphones to start-ups and SMEs.',
      emos: ['🌐', '🇮🇪'],
      langs: ['en'],
    },
  ],
  [
    'IE_PHOB',
    {
      name: 'An Phoblacht',
      url: 'https://www.anphoblacht.com/',
      est: 1970,
      about:
        'Has a long and historic association with the Irish Republican Movement.',
      emos: ['🌐', '🇮🇪'],
      langs: ['en'],
    },
  ],
  [
    'IE_REBL',
    {
      name: 'Rebel News',
      url: 'http://www.rebelnews.ie/',
      est: 2018,
      about:
        'Rebel is a new socialist website dedicated to challenging establishment politics here in Ireland and beyond, and to creating a platform for alternative left-wing viewpoints to be aired.',
      emos: ['🌐', '🇮🇪'],
      langs: ['en'],
    },
  ],
  [
    'IE_BAF',
    {
      name: 'Business & Finance',
      url: 'https://businessandfinance.com/',
      est: 1964,
      about: 'Providing business news & information to business leaders.',
      emos: ['🌐', '🇮🇪'],
      langs: ['en'],
    },
  ],
  [
    'IE_FILM',
    {
      name: 'Film Ireland',
      url: 'https://filmireland.net/',
      est: 1987,
      about: 'A cultural cinema magazine.',
      emos: ['🌐', '🇮🇪'],
      langs: ['en'],
    },
  ],
  [
    'IE_HGNS',
    {
      name: 'Hogan Stand',
      url: 'https://www.hoganstand.com/',
      est: 1991,
      about:
        'A news website and the online face of the monthly Gaelic games magazine Hogan Stand.',
      emos: ['🌐', '🇮🇪'],
      langs: ['en'],
    },
  ],
  [
    'IE_BB',
    {
      name: 'Better Business',
      url: 'https://betterbusiness.ie/',
      est: 2004,
      about:
        "Better Business is Ireland's newest business quarterly and is the official publication of the Small Firms Association (SFA).",
      emos: ['🌐', '🇮🇪'],
      langs: ['en'],
    },
  ],
  [
    'IE_ABIZ',
    {
      name: 'Autobiz',
      url: 'https://www.autobiz.ie/',
      est: 1978,
      about:
        "Autobiz is Ireland's only monthly motor trade magazine. We cover the entire motor trade including bodyshop, garage, aftermarket and dealer news. Keep informed with what's going on in the motor trade in Ireland with autobiz.ie.",
      emos: ['🌐', '🇮🇪'],
      langs: ['en'],
    },
  ],
  [
    'IE_BODY',
    {
      name: 'Irish Bodyshop Journal',
      url: 'http://www.bodyshop.ie/',
      est: 2006,
      about:
        "Ireland's Publication for the refinishing & associated Industries.",
      emos: ['🌐', '🇮🇪'],
      langs: ['en'],
    },
  ],
  [
    'IE_SHLF',
    {
      name: 'ShelfLife',
      url: 'https://www.shelflife.ie/',
      est: 1998,
      about:
        "ShelfLife is Ireland's retail authority and the leading trade publication in its category. ShelfLife ranks #1 with buyers and retailers and has the highest circulation of any trade title in the country. With a footprint across several platforms, we provide our audience with critical insights and access to leading brands and solution providers.",
      emos: ['🌐', '🇮🇪'],
      langs: ['en'],
    },
  ],
  [
    'IE_PLAN',
    {
      name: 'Plan Magazine',
      url: 'https://planonline.ie/',
      est: 1969,
      about:
        'Architecture and design publication based in Dublin, Ireland. It caters mainly for Irish and international architects and designers. Plan also documents alternative architectural culture such as interdisciplinary interplays between architecture and philosophy, art and new social movements.',
      emos: ['🌐', '🇮🇪'],
      langs: ['en'],
    },
  ],
  [
    'IE_NOS',
    {
      name: 'Nós',
      url: 'https://nos.ie/',
      est: 2008,
      about:
        'Is iris chultúir é NÓS a chlúdaíonn suimeanna coitianta an tsaoil chomhaimseartha. Tá sé de sprioc ag NÓS beocht fhuinniúil a chur i sochaí na hÉireann trí léargas muiníneach Gaelach a thabhairt ar an saol thart orainn. Is mian linn chomh maith pobal na teanga a spreagadh chun spraoi, chun smaoinimh agus chun gnímh.',
      emos: ['🌐', '🇮🇪'],
      langs: ['ga'],
    },
  ],
  [
    'IE_CKUT',
    {
      name: 'Checkout',
      url: 'https://www.checkout.ie/',
      est: 1968,
      about:
        'Checkout is your home for the latest news and analysis on Irish grocery retail, FMCG, supply-chain, packaging, NPD, tech and more.',
      emos: ['🌐', '🇮🇪'],
      langs: ['en'],
    },
  ],
  [
    'IE_ELSM',
    {
      name: 'eolas magazine',
      url: 'https://www.eolasmagazine.ie',
      est: 2010,
      about:
        "eolas Magazine is Ireland's leading policy, politics and business magazine which reaches over 10,000 senior decision-makers and influencers in government, business and the voluntary sector.",
      emos: ['🌐', '🇮🇪'],
      langs: ['en'],
    },
  ],
  [
    'IE_BULD',
    {
      name: 'Irish Building Magazine',
      url: 'https://www.eolasmagazine.ie',
      est: 2007,
      about:
        "Ireland's construction & building sector news portal. The most visited news & information site for the Irish construction & building market.",
      emos: ['🌐', '🇮🇪'],
      langs: ['en'],
    },
  ],
  [
    'IE_BIM',
    {
      name: 'BIM Ireland',
      url: 'https://bimireland.ie/',
      est: 2015,
      about:
        "Addressing the information needs of Ireland's leading AECO firms. Will act as the voice for BIM Users, Stakeholders, Educators and Trainers.",
      emos: ['🌐', '🇮🇪'],
      langs: ['en'],
    },
  ],
  [
    'IE_WILD',
    {
      name: 'Go Wild Magazine',
      url: 'https://gowildmagazine.com/',
      est: 2018,
      about:
        'Go Wild Magazines showcase Irish brands nationally and internationally across 8 individual titles. Feature your brand on Go Wild Today for greater success.',
      emos: ['🌐', '🇮🇪'],
      langs: ['en'],
    },
  ],
  [
    'IE_VET',
    {
      name: 'Irish Veterinary Journal',
      url: 'https://irishvetjournal.biomedcentral.com/',
      est: 1946,
      about:
        'Publishing veterinary research that has relevance to clinical practice. Has an international reputation for publishing high quality clinical veterinary science.',
      emos: ['🌐', '🇮🇪'],
      langs: ['en'],
    },
  ],
  [
    'IE_WSKY',
    {
      name: 'Irish Whiskey Magazine',
      url: 'https://www.irishwhiskeymagazine.com/',
      est: 2016,
      about:
        'Immerse yourself in the exciting world of Irish whiskey with Irish Whiskey Magazine, the definitive independent publication.',
      emos: ['🌐', '🇮🇪'],
      langs: ['en'],
    },
  ],
  [
    'IE_BIZW',
    {
      name: 'Business World',
      url: 'https://www.businessworld.ie/',
      est: 2001,
      about:
        "Business World are Ireland's leading financial and business news website. Our content creation process is tailored to your needs.",
      emos: ['🌐', '🇮🇪'],
      langs: ['en'],
    },
  ],
  [
    'IE_KNMN',
    {
      name: 'Kenmare News',
      url: 'http://kenmarenews.biz/wp/',
      est: 2013,
      about: "If it's happing in Kenmare, it's in the Kenmarenews.",
      emos: ['🌐', '🇮🇪'],
      langs: ['en'],
    },
  ],
  [
    'IE_VRGN',
    {
      name: 'Virgin Media News',
      url: 'https://www.virginmediatelevision.ie/',
      est: 2018,
      about:
        'The latest national and international news stories from the Virgin Media News team, followed by sport and weather.',
      emos: ['🌐', '🇮🇪'],
      langs: ['en'],
    },
  ],
  [
    'IE_TODF',
    {
      name: 'Today FM',
      url: 'https://www.todayfm.com/',
      est: 1997,
      about: 'The latest News news from TodayFM.',
      emos: ['🌐', '🇮🇪'],
      langs: ['en'],
    },
  ],
  [
    'IE_STND',
    {
      name: 'The Stand with Eamon Dunphy',
      url: 'https://thestandwitheamondunphy.com/',
      est: 2018,
      about:
        'The Stand is a current affairs podcast presented by Eamon Dunphy. Eamon is one of Ireland’s most respected journalists and broadcasters.',
      emos: ['🎙️', '🇮🇪'],
      langs: ['en'],
    },
  ],
  [
    'IE_DVMW',
    {
      name: 'David McWilliams',
      url: 'https://www.davidmcwilliams.ie/',
      est: 2010,
      about:
        'David McWilliams is an economist, author, journalist, documentary-maker and broadcaster. He is Adjunct Professor of Global Economics at the School of Business Trinity College Dublin.',
      emos: ['🌐', '🇮🇪'],
      langs: ['en'],
    },
  ],
  [
    'IE_DSTR',
    {
      name: 'Irish Daily Star',
      url: 'https://thestar.ie/',
      est: 1987,
      about:
        'The Irish Daily Star is a tabloid newspaper published in Ireland by Reach plc, a subsidiary of Independent News & Media.',
      emos: ['📰', '🇮🇪'],
      langs: ['en'],
    },
  ],
  [
    'IE_JNGN',
    {
      name: 'Jane Gogan',
      url: 'https://ie.linkedin.com/in/jane-gogan-94a53317a',
      est: 2019,
      about: 'Jane Gogan is a journalist and writer based in Dublin, Ireland.',
      emos: ['🌐', '🇮🇪'],
    },
  ],
]);
export const IENewsSourcesLength = IENewsSources.size;

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
    'IN_TOI',
    {
      name: 'The Times of India',
      url: 'https://timesofindia.indiatimes.com/',
      est: 1838,
      about:
        'Times of India brings the Latest News & Breaking News Headlines from India & around the World. Read Today’s News on Sports, Business, Health & Fitness, Bollywood & Entertainment.',
      emos: ['📰', '🇮🇳'],
      langs: ['en'],
    },
  ],
  [
    'IN_IXPR',
    {
      name: 'The Indian Express',
      url: 'https://indianexpress.com/',
      est: 1932,
      about:
        'The Indian Express brings you the latest news from India and around the world. With a focus on breaking news, current headlines, live news updates, and in-depth coverage, it provides comprehensive news coverage on a wide range of topics including elections, business, sports, world news, and entertainment.',
      emos: ['📰', '🇮🇳'],
      langs: ['en'],
      tags: [
        'TheIndianExpress',
        'IndianNews',
        'WorldNews',
        'BreakingNews',
        'Elections',
        'Business',
        'Sports',
        'Entertainment',
      ],
      socials: {
        email: 'mailto:feedback@indianexpress.com',
        facebook: 'https://www.facebook.com/indianexpress',
        twitter: 'https://twitter.com/IndianExpress',
        youtube: 'https://www.youtube.com/@indianexpress',
        instagram: 'https://www.instagram.com/indianexpress/',
        linkedin: 'https://www.linkedin.com/company/indian-express/',
      },
      headerBG: '#fff',
      primaryColor: '#D70000',
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
      name: 'The Telegraph Online',
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
        'The Asian Age is a prominent Indian newspaper that offers comprehensive coverage of national and international news. With its unique international edition based in London, The Asian Age provides valuable insights into global events and the underlying factors shaping them. The newspaper goes beyond just reporting the news; it delves into the reasons and context behind significant developments, offering readers a deeper understanding of current affairs.',
      emos: ['📰', '🇮🇳'],
      langs: ['en'],
      tags: [
        'TheAsianAge',
        'IndianNewspaper',
        'InternationalNews',
        'India',
        'World',
      ],
      socials: {
        facebook: 'https://www.facebook.com/Asian-Age-514897795345965/',
        twitter: 'https://twitter.com/theasianagenews',
      },
      headerBG: '#fff',
      primaryColor: '#CF0000',
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
        'पढ़ें आज की ताजा ख़बरें, खेल सुर्खियां, व्यापार, बाजार विश्लेषण और राजनीति के समाचार।',
      description: [
        'हिंदी बिजनेस स्टैंडर्ड, 1975 में स्थापित, व्यापार और बाजार विश्लेषण पर ध्यान केंद्रित करने वाले प्रमुख हिंदी समाचार पत्रों में से एक है। यह नियमित रूप से राजनीति, खेल, मनोरंजन, और अन्य महत्वपूर्ण विषयों पर ताजा और गहन समाचार प्रदान करता है।',
        'यह समाचार पत्र व्यावसायिक और बाजार समाचार को दर्शाने का एक अद्वितीय दृष्टिकोण प्रदान करता है, जिसे उनके पाठकों द्वारा बहुत सराहा गया है।',
        'इंटरनेट के युग में, हिंदी बिजनेस स्टैंडर्ड ने अपनी डिजिटल उपस्थिति को विस्तारित किया और एक बड़ी ऑनलाइन पाठकगण से जुड़ने में सफलता पाई।',
        'हिंदी बिजनेस स्टैंडर्ड के साथ, पाठक व्यापार, बाजार विश्लेषण, और राजनीति की दुनिया में नवीनतम होने वाले परिवर्तनों को समझ सकते हैं।',
      ],
      emos: ['📰', '🇮🇳'],
      langs: ['hi'],
      tags: [
        'हिंदीबिजनेसस्टैंडर्ड',
        'व्यापारसमाचार',
        'बाजारविश्लेषण',
        'राजनीति',
        'खेल',
        'मनोरंजन',
        'भारतीयसमाचार',
      ],
      socials: {
        facebook: 'https://www.facebook.com/businessstandardhindi',
        twitter: 'https://twitter.com/bshindinews',
        youtube: 'https://www.youtube.com/@bshindinews',
        rss: 'https://hindi.business-standard.com/rss-feeds',
      },
      headerBG: '#fff',
      primaryColor: '#E32121',
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
        'ગુજરાત સમાચાર આહમદાબાદ, બરોડા, ભાવનગર, ભુજ, ગાંધીનગર, ખેડા-આણંદ, ઉત્તર ગુજરાત, રાજકોટ અને સુરતમાંથી આવતા સમાચાર પૂરી પહોંચવાનો લક્ષ્ય રાખે છે. આપેલ સમાચાર યોજનાઓને બિનસમ્મતિ માંથી ધ્યાન આપી સમાજના પ્રત્યેની તમામ વર્ગોને સમાવેશ કરી દ્વેષ તાપમાનની આપરાધિક દૃષ્ટિએ વિશેષ જોર આપવામાં આવી છે.',
      emos: ['📰', '🇮🇳'],
      langs: ['gu'],
      tags: [
        'ગુજરાતસમાચાર',
        'ગુજરાતનામાંસમાચાર',
        'સ્થાનિકસમાચાર',
        'સમાજ',
        'અપડેટેડસમાચાર',
      ],
      socials: {
        email: 'mailto:gs.adrec@gmail.com',
        facebook: 'https://www.facebook.com/gujarat.samachar.news',
        instagram: 'https://www.instagram.com/gujaratsamacharofficial/',
        youtube: 'https://www.youtube.com/@gujarat_samachar',
        twitter: 'https://twitter.com/gujratsamachar',
        linkedin: 'https://www.linkedin.com/company/gujaratsamachar/',
        telegram: 'https://t.me/gujaratsamacharofficial',
      },
      headerBG: '#fff',
      primaryColor: '#e31e25',
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
  [
    'IN_WION',
    {
      name: 'WION',
      url: 'https://www.wionews.com/',
      est: 2016,
      about:
        'WION (World Is One News) brings latest & breaking news from South Asia, India, Pakistan, Bangladesh, Nepal, Sri Lanka and rest of the World in politics, business, economy, sports, lifestyle, science & technology with opinions & analysis.',
      emos: ['📰', '🇮🇳'],
      langs: ['en'],
    },
  ],
  [
    'IN_NDTV',
    {
      name: 'NDTV',
      url: 'https://www.ndtv.com/',
      est: 1988,
      about:
        "NDTV.com provides latest news from India and around the world. Get breaking news alerts from India and follow today's live news updates in field of politics, business, technology, Bollywood, cricket and more.",
      emos: ['📰', '🇮🇳'],
      langs: ['en'],
    },
  ],
  [
    'IN_AAJ',
    {
      name: 'Aaj Tak',
      url: 'https://www.aajtak.in/',
      est: 2000,
      about:
        "Aaj Tak is India's best Hindi News Channel. Aaj Tak news channel covers the latest news in politics, entertainment, Bollywood, business and sports.",
      emos: ['📰', '🇮🇳'],
      langs: ['hi'],
    },
  ],
  [
    'IN_ZN24',
    {
      name: 'Zee News',
      url: 'https://zeenews.india.com/',
      est: 1999,
      about:
        'Zee News brings latest news from India and World on breaking news, today news headlines, politics, business, technology, bollywood, entertainment, sports and others.',
      emos: ['📰', '🇮🇳'],
      langs: ['en'],
    },
  ],
  [
    'IN_RPUB',
    {
      name: 'Republic World',
      url: 'https://www.republicworld.com/',
      est: 2017,
      about:
        'Republic World brings to you the latest news on politics, business, sports, entertainment, and more from India and around the world.',
      emos: ['📰', '🇮🇳'],
      langs: ['en'],
    },
  ],
  [
    'IN_ABPN',
    {
      name: 'ABP News',
      url: 'https://www.abplive.com/',
      est: 2003,
      about:
        'ABP News is a popular Hindi news channel that provides the latest news updates on politics, business, sports, entertainment, and more. With its comprehensive coverage and in-depth analysis, ABP News keeps its viewers informed about the latest developments in India and around the world.',
      emos: ['📰', '🇮🇳'],
      langs: ['hi'],
    },
  ],
  [
    'IN_TV',
    {
      name: 'India TV',
      url: 'https://www.indiatvnews.com/',
      est: 2004,
      about:
        'India TV is a leading Hindi news channel that offers the latest news updates on politics, business, sports, entertainment, and more. With its engaging content and comprehensive coverage, India TV keeps its viewers informed about the latest happenings in India and around the world.',
      emos: ['📰', '🇮🇳'],
      langs: ['hi'],
    },
  ],
  [
    'IN_LLTP',
    {
      name: 'The Lallantop',
      url: 'https://www.thelallantop.com/',
      est: 2016,
      about:
        'The Lallantop is a popular Hindi news and opinion website that covers a wide range of topics including politics, entertainment, sports, lifestyle, and more. With its engaging content and unique storytelling style, The Lallantop has become a go-to source for many Hindi-speaking readers looking for the latest news and updates.',
      emos: ['📰', '🇮🇳'],
      langs: ['hi'],
    },
  ],
  [
    'IN_N18',
    {
      name: 'News18',
      url: 'https://hindi.news18.com/',
      est: 2005,
      about:
        'News18 India is a leading Hindi news channel that provides the latest news updates on politics, business, sports, entertainment, and more. With its comprehensive coverage and in-depth analysis, News18 India keeps its viewers informed about the latest developments in India and around the world.',
      emos: ['📰', '🇮🇳'],
      langs: ['hi'],
    },
  ],
  [
    'IN_RB',
    {
      name: 'Republic Bharat',
      url: 'https://www.republicbharat.com/',
      est: 2019,
      about:
        'Republic Bharat brings to you the latest news on politics, business, sports, entertainment, and more from India and around the world.',
      emos: ['📰', '🇮🇳'],
      langs: ['hi'],
    },
  ],
  [
    'IN_NTAK',
    {
      name: 'News Tak',
      url: 'https://www.newstak.in/',
      est: 2017,
      about:
        'News Tak is a popular Hindi news channel that provides the latest news updates on politics, business, sports, entertainment, and more. With its comprehensive coverage and in-depth analysis, News Tak keeps its viewers informed about the latest developments in India and around the world.',
      emos: ['📰', '🇮🇳'],
      langs: ['hi'],
    },
  ],
  [
    'IN_PLMN',
    {
      name: 'Polimer News',
      url: 'https://www.polimernews.com/',
      est: 2009,
      about:
        'Polimer News is a popular Tamil news channel that provides the latest news updates on politics, business, sports, entertainment, and more. With its comprehensive coverage and in-depth analysis, Polimer News keeps its viewers informed about the latest developments in Tamil Nadu and around the world.',
      emos: ['📰', '🇮🇳'],
      langs: ['ta'],
    },
  ],
]);
export const INNewsSourcesLength = INNewsSources.size;

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
  [
    'UK_GRDN',
    {
      name: 'The Guardian',
      url: 'https://www.theguardian.com/',
      est: 1821,
      about:
        'The Guardian is an esteemed and influential English-language newspaper with a global reach, providing comprehensive coverage of news, politics, culture, and more. With a commitment to truth and integrity, it has been a trusted source of information for readers around the world. Through insightful reporting and thought-provoking analysis, The Guardian strives to keep its audience well-informed and engaged, fostering a deeper understanding of the complexities of our modern society. As a beacon of journalism, it remains dedicated to upholding democratic values, amplifying diverse voices, and championing free press and independent media.',
      emos: ['📰', '🇬🇧'],
      langs: ['en'],
      logoWidth: 300,
      logoHeight: 100,
      tags: ['TheGuardian', 'Newspaper', 'News', 'Media', 'Journalism'],
      socials: {
        facebook: 'https://www.facebook.com/theguardian',
        twitter: 'https://twitter.com/guardian',
      },
      headerBG: '#052962',
      primaryColor: '#052962',
      secondaryColor: '#FFFFFF',
    },
  ],
  [
    'UK_CATH',
    {
      name: 'The Catholic Herald',
      url: 'https://catholicherald.co.uk/',
      est: 1888,
      about:
        "The Catholic Herald stands as one of the UK's most revered and long-standing Catholic newspapers. Focused on upholding the teachings and traditions of the Catholic Church, the Herald provides readers with comprehensive news, thoughtful analysis, and inspirational stories from the Catholic world.",
      description: [
        'The Catholic Herald has been an enduring voice for Catholics in the UK for well over a century. With a commitment to journalistic excellence, it delves deep into the heart of matters of faith, offering insights into the Vatican, the global church, and societal issues through a Catholic lens.',
        'Its rich history is not just in covering church-centric news, but in promoting interfaith dialogue, fostering understanding, and being at the forefront of debates and discussions pertinent to modern-day Catholics.',
        "Today, The Catholic Herald not only provides content through its print editions but also harnesses the power of digital, offering updated news and resources on its website and across social media platforms. This evolution reflects the Herald's dedication to staying relevant while preserving its foundational values.",
        "From the Pope's latest addresses to features on saints, from art and literature reviews to thought-provoking editorials, The Catholic Herald continues to be an indispensable resource for the faithful and inquisitive alike.",
      ],
      emos: ['📰', '🇬🇧'],
      langs: ['en'],
      logoWidth: 345,
      logoHeight: 100,
      tags: [
        'TheCatholic Herald',
        'Catholic News',
        'UK Catholic',
        'Vatican News',
        'Religion',
        'Faith and Society',
        'Christian Journalism',
        'Interfaith',
        'Catholic Tradition',
        'Church Teachings',
      ],
      socials: {
        facebook: 'https://www.facebook.com/CatholicHeraldMagazine/',
        twitter: 'https://twitter.com/CatholicHerald',
        youtube: 'https://www.youtube.com/user/TheCatholicHerald',
        instagram: 'https://www.instagram.com/catholicheraldmag/',
      },
      headerBG: '#fff',
      primaryColor: '#9D3732',
    },
  ],
  [
    'UK_DYST',
    {
      name: 'Daily Star',
      url: 'https://www.dailystar.co.uk/',
      est: 1978,
      about:
        "The Daily Star ia a household name in the UK's tabloid landscape. Renowned for its lively content, vibrant imagery, and gripping headlines, it offers readers a mix of current news, entertainment stories, and sports updates.",
      description: [
        'Over the decades, the Daily Star has curated a unique blend of content, catering to an audience seeking light-hearted yet informative news. From the world of celebrities to the twists and turns in sports arenas, from unusual happenings to engaging human-interest tales, the Daily Star covers it all.',
        'Beyond just print, the Daily Star has actively embraced the digital revolution, reaching readers across various social platforms, including Facebook, Twitter, TikTok, and Instagram. Its digital presence ensures that its audience stays updated, entertained, and informed on the go.',
        "Sporting its signature red logo, the Daily Star, though a younger entrant compared to other British tabloids, has cemented its place through its refreshing take on daily news. Its perspective on events, presented with a dash of humor and wit, ensures that the day's happenings are both informative and entertaining.",
        "Today, whether it's a groundbreaking news piece, a celebrity scoop, or the latest football match results, readers of the Daily Star can expect their daily dose served with flair and zest.",
      ],
      emos: ['📰', '🇬🇧'],
      langs: ['en'],
      logoWidth: 187,
      logoHeight: 100,
      tags: [
        'DailyStar',
        'UK Tabloid',
        'Entertainment News',
        'Sports Updates',
        'Celebrity Gossip',
        'Human Interest',
        'UK News',
        'Viral Stories',
        'Digital News',
        'Lifestyle',
      ],
      socials: {
        facebook: 'https://www.facebook.com/thedailystar',
        twitter: 'https://twitter.com/dailystar',
        tiktok: 'https://www.tiktok.com/@thedailystar',
        instagram: 'https://www.instagram.com/dailystar',
      },
      headerBG: '#fff',
      primaryColor: '#EA042C',
    },
  ],
  [
    'UK_EXPR',
    {
      name: 'Daily Express',
      url: 'https://www.express.co.uk/',
      est: 1900,
      about:
        'With over a century of history, the Daily Express stands as a titan in the realm of British journalism. Founded in 1900, it has grown into a daily staple for countless readers across the UK, offering a diverse blend of national and international news, in-depth analyses, and captivating features.',
      description: [
        'From its inception, the Daily Express has been dedicated to providing insightful coverage on a vast array of topics, from politics and global affairs to health, lifestyle, and entertainment. Its distinctive approach and commitment to journalistic integrity have solidified its reputation as a trusted news source.',
        'With a wide-reaching digital footprint, the Daily Express is more than just a print newspaper. Its strong online presence across various platforms, including Facebook, Twitter, Instagram, Snapchat, and YouTube, ensures that readers can engage with its content anytime, anywhere.',
        "Daily Express' unmistakable logo has become synonymous with quality reporting, featuring a mixture of hard-hitting news, opinion pieces, and lighter lifestyle segments. The dedication to staying relevant to its audience, combined with a history of excellence, makes it a go-to for those seeking an informed perspective.",
        'Today, as it navigates the modern media landscape, the Daily Express remains committed to its core values, ensuring that every piece it publishes, whether in print or online, upholds the standards of quality that its readers have come to expect.',
      ],
      emos: ['📰', '🇬🇧'],
      langs: ['en'],
      logoWidth: 359,
      logoHeight: 76,
      tags: ['DailyExpress'],
      socials: {
        facebook: 'https://www.facebook.com/DailyExpress',
        twitter: 'https://twitter.com/daily_express',
        instagram: 'https://www.instagram.com/dailyexpress',
        snapchat:
          'https://story.snapchat.com/p/8d40c61d-5ce5-4aa1-ae7f-5dc02d1e86a2/2619291367686145',
        youtube: 'https://www.youtube.com/user/theexpressonline',
        rss: 'https://www.express.co.uk/feeds',
      },
      headerBG: '#fff',
      primaryColor: '#2D775A',
    },
  ],
  [
    'UK_EVSD',
    {
      name: 'Evening Standard',
      url: 'https://www.standard.co.uk/',
      est: 1827,
      about:
        "The Evening Standard is an iconic voice in London's media scene, delivering a daily digest of news, events, and culture from the capital and beyond. Its commitment to trustworthy journalism and local coverage has made it an indispensable read for Londoners and those interested in the heartbeat of the city.",
      description: [
        "The Evening Standard has, for nearly two centuries, been a reliable mirror to the evolving narratives of London. From significant political shifts and societal changes to the vibrant arts and culture scene, the Standard offers a unique perspective, shaped by the city's rich tapestry of history and diversity.",
        "Its commitment to London is evident not just in its news stories but also in its dedication to highlighting local issues, championing community causes, and celebrating the city's successes. From the West End's theatre productions to financial happenings in the City, the Standard captures London in all its multifaceted glory.",
        "In the digital age, the Evening Standard has seamlessly transitioned online, ensuring its content is accessible to a broader, global audience. Through social platforms like Facebook and Twitter, readers can engage with the news on the go, staying informed and connected to London's pulse.",
        'Today, the Evening Standard stands not just as a news source but as a cultural institution, capturing the essence of London life, its challenges, its triumphs, and its ever-changing narrative.',
      ],
      emos: ['📰', '🇬🇧'],
      langs: ['en'],
      logoWidth: 327,
      logoHeight: 39,
      tags: [
        'EveningStandard',
        'London News',
        'UK Media',
        'Culture and Arts',
        'Local Coverage',
        'Politics',
        'Community',
        'Finance and Business',
        'Theatre and Events',
        'London Life',
      ],
      socials: {
        email: 'mailto:letters@standard.co.uk',
        facebook: 'https://www.facebook.com/eveningstandard',
        twitter: 'https://twitter.com/standardnews',
      },
      headerBG: '#fff',
      primaryColor: '#CA2C34',
    },
  ],
  [
    'UK_FT',
    {
      name: 'The Financial Times',
      url: 'https://www.ft.com/',
      est: 1888,
      about:
        'The Financial Times (FT) is a beacon of international business journalism, celebrated for its comprehensive coverage of global financial markets, economies, and international affairs. With its iconic salmon-pink paper, FT has long been a trusted source for decision-makers and professionals around the world.',
      description: [
        "The Financial Times is more than just a newspaper; it's a global institution that has documented, analyzed, and influenced the ebb and flow of the world's financial systems for over a century. With rigorous journalistic standards, FT provides insightful commentary on market movements, corporate strategies, and political events affecting the global economic landscape.",
        'Its international network of correspondents ensures on-the-ground reporting from key financial centers, offering readers a panoramic view of the intricate workings of the global economy. From emerging markets to established financial hubs, FT offers a balanced and in-depth perspective.',
        'In the digital age, The Financial Times has been at the forefront of adapting to the changing media landscape, offering its content across multiple platforms and engaging readers through interactive digital experiences. Its presence on platforms like Facebook and Twitter has allowed it to reach a younger, digitally-savvy audience without compromising on its core journalistic values.',
        "Today, whether it's the latest merger and acquisition news, an analysis of a central bank's policy, or an in-depth feature on sustainable finance, readers turn to FT for its unparalleled expertise and a global perspective.",
      ],
      emos: ['📰', '🇬🇧'],
      langs: ['en'],
      logoWidth: 1054,
      logoHeight: 86,
      tags: [
        'FinancialTimes',
        'Global Business',
        'Finance',
        'Economy',
        'International Affairs',
        'Market Analysis',
        'Corporate News',
        'Economic Commentary',
        'Financial Markets',
        'International Journalism',
      ],
      socials: {
        email: 'mailto:help@ft.com',
        facebook: 'https://www.facebook.com/financialtimes/',
        twitter: 'https://twitter.com/FinancialTimes',
        instagram: 'https://instagram.com/financialtimes',
        youtube: 'https://youtube.com/@FinancialTimes',
      },
      headerBG: '#FFF1E5',
      primaryColor: '#990f3d',
    },
  ],
  [
    'UK_MRNG',
    {
      name: 'Morning Star',
      url: 'https://morningstaronline.co.uk/',
      est: 1888,
      about:
        'The only English-language socialist daily newspaper in the world, published six days a week.',
      description: [''],
      emos: ['📰', '🇬🇧'],
      langs: ['en'],
      logoWidth: 1054,
      logoHeight: 86,
      tags: [''],
      socials: {
        email: 'mailto:enquiries@peoples-press.com',
      },
      headerBG: '#ca422c',
      primaryColor: '#fff',
    },
  ],
  [
    'UK_BBC',
    {
      name: 'BBC News',
      url: 'https://www.bbc.com/news',
      est: 1922,
      about:
        'Up-to-the-minute news, breaking news, video, audio and feature stories. BBC News provides trusted World and UK news as well as local and regional perspectives. Also entertainment, business, science, technology and health news.',
      description: [''],
      emos: ['📰', '🇬🇧'],
      langs: ['en'],
      logoWidth: 1054,
      logoHeight: 86,
      tags: [''],
      socials: undefined,
      headerBG: '#ca422c',
      primaryColor: '#fff',
    },
  ],
  [
    'UK_SKYN',
    {
      name: 'Sky News',
      url: 'https://news.sky.com/',
      est: 1989,
      about:
        'Breaking news, headlines and top stories from business, politics, entertainment and more in the UK and worldwide.',
      description: [''],
      emos: ['📰', '🇬🇧'],
      langs: ['en'],
      logoWidth: 1054,
      logoHeight: 86,
      tags: [''],
      socials: undefined,
      headerBG: '#ca422c',
      primaryColor: '#fff',
    },
  ],
  [
    'UK_C4N',
    {
      name: 'Channel 4 News',
      url: 'https://www.channel4.com/news/',
      est: 1982,
      about:
        "Latest news from the UK and around the world, including politics, health, war, crime and more. Find out what's happening in New Hampshire, Ukraine, Northern Ireland and other topics of interest.",
      description: [''],
      emos: ['📺', '🇬🇧'],
      langs: ['en'],
      logoWidth: 1054,
      logoHeight: 86,
      tags: [''],
      socials: undefined,
      headerBG: '#3d125a',
      primaryColor: '#fff',
    },
  ],
  [
    'UK_C4',
    {
      name: 'Channel 4 News',
      url: 'https://www.channel4.com/news/',
      est: 1982,
      about:
        "Latest news from the UK and around the world, including politics, health, war, crime and more. Find out what's happening in New Hampshire, Ukraine, Northern Ireland and other topics of interest.",
      description: [''],
      emos: ['📺', '🇬🇧'],
      langs: ['en'],
      logoWidth: 1054,
      logoHeight: 86,
      tags: [''],
      socials: undefined,
      headerBG: '#3d125a',
      primaryColor: '#fff',
    },
  ],
  [
    'UK_ITV',
    {
      name: 'ITV News',
      url: 'https://www.itv.com/news',
      est: 1955,
      about:
        "Get the latest stories from ITV News, the UK's largest commercial news organisation, including breaking news on a regional and national level.",
      description: [''],
      emos: ['📺', '🇬🇧'],
      langs: ['en'],
      logoWidth: 1054,
      logoHeight: 86,
      tags: [''],
      socials: undefined,
      headerBG: '#3d125a',
      primaryColor: '#fff',
    },
  ],
  [
    'UK_UNHR',
    {
      name: 'UnHerd',
      url: 'https://www.vice.com/',
      est: 2017,
      about:
        'Challenging the herd with new and bold thinking in philosophy, politics and culture.',
      description: [],
      emos: ['📰', '🇬🇧'],
      langs: ['en'],
    },
  ],
  [
    'UK_INEW',
    {
      name: 'iNews',
      url: 'https://inews.co.uk/',
      est: 2016,
      about:
        'iNews is a UK-based news website that provides a fresh perspective on current events, politics, culture, and more. With a focus on in-depth analysis and engaging storytelling, iNews aims to keep its readers informed and entertained.',
      description: [],
      emos: ['📰', '🇬🇧'],
      langs: ['en'],
    },
  ],
  [
    'UK_GBN',
    {
      name: 'GB News',
      url: 'https://www.gbnews.com/',
      est: 2021,
      about:
        'GB News is a British news channel that offers a fresh perspective on current events, politics, and culture. With a focus on providing a platform for diverse voices and opinions, GB News aims to engage viewers with insightful analysis and lively debates.',
      description: [],
      emos: ['📺', '🇬🇧'],
      langs: ['en'],
    },
  ],
  [
    'UK_PNP',
    {
      name: 'Positive News',
      url: 'https://www.positive.news/',
      est: 2012,
      about:
        'Positive News is a pioneering media organization that focuses on reporting uplifting and constructive news stories from around the world. With a mission to inspire and empower readers, Positive News aims to create a more balanced and solutions-focused media landscape.',
      description: [],
      emos: ['📰', '🇬🇧'],
      langs: ['en'],
    },
  ],
  [
    'UK_GLHN',
    {
      name: 'Goalhanger',
      url: 'https://www.goalhangerpodcasts.com',
      est: 2018,
      about:
        'Goalhanger Films is a production company that creates documentaries, podcasts, and other content related to history, politics, current affairs and sport. With a focus on storytelling and engaging narratives, Goalhanger Podcasts aims to entertain and inform audiences through its diverse range of projects.',
      description: [],
      emos: ['🎙️', '🇬🇧'],
      langs: ['en'],
    },
  ],
  [
    'UK_REUT',
    {
      name: 'Reuters',
      url: 'https://www.reuters.com/',
      est: 1851,
      about:
        'Reuters is an international news organization that provides breaking news, analysis, and market data to a global audience. With a reputation for accuracy and impartiality, Reuters delivers trusted news coverage on a wide range of topics, including politics, business, finance, and more.',
      description: [],
      emos: ['📰', '🇬🇧'],
      langs: ['en'],
    },
  ],
  [
    'UK_BUGL',
    {
      name: 'The Bugle',
      url: 'https://thebuglepodcast.com/',
      est: 2007,
      about:
        'The Bugle is a satirical news podcast that offers a humorous take on current events, politics, and culture. With a blend of comedy and commentary, The Bugle aims to entertain and inform listeners through its unique and irreverent approach to news.',
      description: [],
      emos: ['🎙️', '🇬🇧'],
      langs: ['en'],
    },
  ],
  [
    'UK_MNCL',
    {
      name: 'Monocle',
      url: 'https://monocle.com/',
      est: 2007,
      about:
        'Monocle is a global affairs and lifestyle magazine that covers a wide range of topics, including politics, business, culture, design, and more. With a focus on quality journalism and engaging storytelling, Monocle aims to provide readers with a unique perspective on the world around them.',
      description: [],
      emos: ['📰', '🇬🇧'],
      langs: ['en'],
    },
  ],
]);
export const UKNewsSourcesLength = UKNewsSources.size;

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
        "Otago Daily Times is New Zealand's oldest daily newspaper, delivering a combination of strong local Otago news coverage along with national and international news. With a rich history dating back to 1861, Otago Daily Times has been a trusted source of news for generations, providing comprehensive and reliable information to its readers. It serves as a vital resource for the Otago region, offering in-depth reporting on local events, community issues, business, sports, entertainment, and more. In addition, it keeps its readers informed about national and international news, ensuring a well-rounded news experience.",
      emos: ['📰', '🇳🇿'],
      langs: ['en'],
      tags: [
        'OtagoDailyTimes',
        'NewZealandNews',
        'LocalNews',
        'NationalNews',
        'InternationalNews',
      ],
      socials: {
        video: 'https://www.odt.co.nz/video-home',
        facebook: 'https://facebook.com/OtagoDailyTimes',
        twitter: 'https://twitter.com/odtnews',
        instagram: 'https://www.instagram.com/otagodailytimes/',
      },
      headerBG: '#fff',
      primaryColor: '#1B65AE',
    },
  ],
  [
    'NZ_HBT',
    {
      name: "Hawke's Bay Today",
      url: 'https://www.nzherald.co.nz/hawkes-bay-today',
      est: 1999,
      about:
        "Hawke's Bay Today is a leading source of news and information for the Napier, Hastings, and Hawke's Bay region in New Zealand. It provides comprehensive coverage of local news, business, sports, lifestyle, entertainment, and more. With its team of dedicated journalists, Hawke's Bay Today keeps residents updated on the latest happenings, events, and developments in their community, delivering timely and relevant news that matters to the people of Hawke's Bay.",
      emos: ['📰', '🇳🇿'],
      langs: ['en'],
      tags: ['HawkesBayToday', 'HawkesBayNews', 'LocalNews', 'NewZealand'],
      socials: {
        video: 'https://www.nzherald.co.nz/hawkes-bay-today/video/',
        email: '',
        facebook: 'https://www.facebook.com/HawkesBayToday',
        twitter: 'https://twitter.com/HawkesBayToday',
        instagram: 'https://www.instagram.com/hawkesbaytoday/',
      },
      headerBG: '#0e76bc',
      primaryColor: '#ecac0d;',
    },
  ],
  [
    'NZ_AGO',
    {
      name: 'Ashburton Guardian',
      url: 'https://www.guardianonline.co.nz/',
      est: 1879,
      about:
        'The Ashburton Guardian is a trusted source of news and information in Ashburton and its surrounding areas. It has been serving the community for over a century, providing timely and reliable news coverage. The newspaper embraces digital platforms to deliver news online, ensuring readers have access to the latest updates and stories whenever they need them.',
      emos: ['📰', '🇳🇿'],
      langs: ['en'],
      tags: [
        'AshburtonGuardian',
        'AshburtonNews',
        'LocalNews',
        'Community',
        'OnlineNews',
      ],
      socials: {
        email: 'reception@theguardian.co.nz',
        facebook: 'https://www.facebook.com/ashguardian',
        twitter: 'https://twitter.com/AshGuardian',
        instagram: 'https://www.instagram.com/ashburtonguardian/',
        youtube: 'https://www.youtube.com/@AshburtonGuardian',
        linkedin: 'https://www.linkedin.com/company/ashburton-guardian',
      },
      headerBG: '#006DB8',
      primaryColor: '#006DB8',
    },
  ],
  [
    'NZ_BOPT',
    {
      name: 'Bay of Plenty Times',
      url: 'https://www.nzherald.co.nz/bay-of-plenty-times',
      est: 1872,
      about:
        'The Bay of Plenty Times is a trusted source of news covering Tauranga and the wider Bay of Plenty region in New Zealand. With a focus on local news, business, sports, lifestyle, and entertainment, the newspaper provides comprehensive coverage that keeps residents informed and engaged with the happenings in their community. From breaking news to in-depth features, the Bay of Plenty Times delivers timely and relevant information that reflects the diverse interests and concerns of the region.',
      emos: ['📰', '🇳🇿'],
      langs: ['en'],
      tags: [
        'BayOfPlentyTimes',
        'TaurangaNews',
        'BayOfPlentyNews',
        'LocalNews',
        'Business',
        'Sports',
        'Lifestyle',
        'Entertainment',
        'NewZealand',
      ],
      socials: {
        email:
          'mailto:newsdesk@nzherald.co.nz?subject=Online enquiry - Contact the Newsroom',
        facebook: 'https://www.facebook.com/bayofplentytimes',
        twitter: 'https://twitter.com/Bay_Times',
        instagram: 'https://www.instagram.com/baytimes/',
      },
      headerBG: '#0063a4',
      primaryColor: '#ecac0d',
    },
  ],
  [
    'NZ_TGH',
    {
      name: 'The Gisborne Herald',
      url: 'https://www.gisborneherald.co.nz/',
      est: 1874,
      about:
        'The Gisborne Herald is a daily evening newspaper serving Gisborne and its environs. It has been a trusted source of news and information for the local community for over a century. The newspaper covers a wide range of topics, including local news, politics, business, sports, arts, and more.',
      emos: ['📰', '🇳🇿'],
      langs: ['en'],
      tags: [
        'GisborneHerald',
        'GisborneNews',
        'LocalNews',
        'Community',
        'Politics',
        'Business',
        'Sports',
        'Arts',
      ],
      socials: {
        email: 'info@gisborneherald.co.nz',
        video: 'https://www.gisborneherald.co.nz/video',
        youtube: 'https://www.youtube.com/gisborneherald',
        facebook: 'https://www.facebook.com/gisborneherald',
        instagram: 'https://www.youtube.com/gisborneherald',
        linkedin: 'https://www.linkedin.com/company/gisborne-herald/',
        twitter: 'https://twitter.com/gisbornenews',
      },
      headerBG: '#fff',
      primaryColor: '#0056B8',
    },
  ],
  [
    'NZ_TNA',
    {
      name: 'The Northern Advocate',
      url: 'https://www.nzherald.co.nz/northern-advocate',
      est: 1902,
      about:
        'The Northern Advocate is a trusted source of local and regional news from the Northland region in New Zealand. With a focus on areas such as Whangarei, far north, and Kaipara, it provides comprehensive coverage of news, events, and developments that are of significance to the communities in Northland. From breaking news to in-depth features, The Northern Advocate keeps its readers informed and engaged with the latest happenings in the region.',
      emos: ['📰', '🇳🇿'],
      langs: ['en'],
      tags: ['TheNorthernAdvocate', 'NorthlandNews', 'LocalNews', 'NewZealand'],
      socials: {
        facebook: 'https://www.facebook.com/NorthernAdvocate',
        twitter: 'https://twitter.com/northernadvocat',
        instagram: 'https://www.instagram.com/northernadvocate/',
      },
      headerBG: '#808285',
      primaryColor: '#ecac0d',
    },
  ],
  [
    'NZ_OM',
    {
      name: 'Oamaru Mail',
      url: 'https://www.oamarumail.co.nz/',
      est: 1876,
      about:
        'The Oamaru Mail has been the voice of the North Otago community for more than 130 years. It has remained a vibrant newspaper that reflects the interests and concerns of its population. From covering the arts and sports to local issues, tourism, and farming, the Oamaru Mail provides comprehensive coverage that resonates with the diverse community it serves.',
      emos: ['📰', '🇳🇿'],
      langs: ['en'],
      tags: [
        'OamaruMail',
        'NorthOtagoNews',
        'LocalNews',
        'Community',
        'Arts',
        'Sports',
        'Tourism',
        'Farming',
      ],
      socials: {
        email: 'mailto:office@oamarumail.co.nz',
        facebook: 'https://www.facebook.com/OamaruMail/',
        twitter: 'https://twitter.com/oamarumail',
        instagram: 'https://www.instagram.com/oamarumail/',
        linkedin: 'https://www.linkedin.com/company/the-oamaru-mail',
      },
      headerBG: '#fff',
      primaryColor: '#0174BC',
    },
  ],
  [
    'NZ_WTA',
    {
      name: 'Wairarapa Times-Age',
      url: 'https://times-age.co.nz/',
      est: 1878,
      about:
        'The Wairarapa Times-Age is the leading source of local news for the Wairarapa region in New Zealand. It provides comprehensive coverage of the latest news, events, and developments in the community, keeping residents informed about the issues that matter to them. From local news stories to features on arts, culture, sports, and more, the Wairarapa Times-Age covers a wide range of topics that are of interest and importance to the residents of the Wairarapa region.',
      emos: ['📰', '🇳🇿'],
      langs: ['en'],
      tags: ['WairarapaTimesAge', 'WairarapaNews', 'LocalNews', 'NewZealand'],
      socials: {
        email: 'mailto:news@age.co.nz',
        facebook: 'https://www.facebook.com/WairarapaTimesAge/',
        twitter: 'https://twitter.com/WairarapaTA',
        instagram: 'https://www.instagram.com/wairarapatimesage/',
      },
      headerBG: '#fff',
      primaryColor: '#232D35',
    },
  ],
  [
    'NZ_WC',
    {
      name: 'Whanganui Chronicle',
      url: 'https://www.nzherald.co.nz/whanganui-chronicle/',
      est: 1856,
      about:
        'The Whanganui Chronicle is a trusted source of local and regional news from the Whanganui region in New Zealand. It covers a wide range of topics, including community events, local government, business, sports, entertainment, and more. With its dedicated team of journalists, the Whanganui Chronicle keeps residents informed about the latest happenings and developments in their region, highlighting the stories that matter most to the community.',
      emos: ['📰', '🇳🇿'],
      langs: ['en'],
      tags: ['WhanganuiChronicle', 'WhanganuiNews', 'LocalNews', 'NewZealand'],
      socials: {
        video: 'https://www.nzherald.co.nz/whanganui-chronicle/video/',
        email: 'mailto:news@whanganuichronicle.co.nz',
        facebook: 'https://www.facebook.com/WhanganuiChronicle/',
        twitter: 'https://twitter.com/WhangaChron',
        instagram: 'https://www.instagram.com/whanganuichronicle/',
      },
      headerBG: '#084A7A',
      primaryColor: '#ecac0d',
    },
  ],
  [
    'NZ_RDP',
    {
      name: 'Rotorua Daily Post',
      url: 'https://www.nzherald.co.nz/rotorua-daily-post',
      est: 1885,
      about:
        'The Rotorua Daily Post is a trusted source of local and regional news from the Rotorua region in New Zealand. With coverage spanning Rotorua, Whakatane, and Taupo, the newspaper keeps residents and visitors informed about the latest news, events, and developments in the area. From community updates to sports, business, and entertainment, the Rotorua Daily Post provides comprehensive coverage that reflects the diverse interests and concerns of the local community.',
      emos: ['📰', '🇳🇿'],
      langs: ['en'],
      tags: [
        'RotoruaDailyPost',
        'LocalNews',
        'RegionalNews',
        'Rotorua',
        'Whakatane',
        'Taupo',
        'NewZealand',
      ],
      socials: {
        video: 'https://www.nzherald.co.nz/rotorua-daily-post/video/',
        email: 'mailto:news@dailypost.co.nz',
        facebook: 'https://www.facebook.com/RotoruaDailyPost',
        twitter: 'https://twitter.com/TheDailyPost',
        instagram: 'https://www.instagram.com/rotoruadailypost/',
        rss: 'https://www.nzherald.co.nz/arc/outboundfeeds/rss/section/news/?outputType=xml&_website=rotorua-daily-post',
      },
      headerBG: '#8b080d',
      primaryColor: '#8b080d',
    },
  ],
  [
    'NZ_GMS',
    {
      name: 'Greymouth Star',
      url: 'https://www.greystar.co.nz/',
      est: 1866,
      about:
        'The Greymouth Star is a daily evening newspaper that circulates throughout the West Coast region of New Zealand. It has been a trusted source of news, information, and stories that are relevant to the communities in the West Coast area for generations. The Greymouth Star provides comprehensive coverage of local news, events, sports, and more, keeping its readers up-to-date with the latest happenings in the region.',
      emos: ['📰', '🇳🇿'],
      langs: ['en'],
      tags: ['GreymouthStar', 'WestCoastNews', 'LocalNews', 'NewZealand'],
      socials: {
        video: 'https://www.greystar.co.nz/category/video/',
        email: 'mailto:office@greystar.co.nz',
        facebook: 'https://www.facebook.com/Greymouth-Star-242269589146590/',
        instagram: 'https://www.instagram.com/greymouthstar/',
        twitter: 'https://twitter.com/greymouthstar',
      },
      headerBG: '#fff',
      primaryColor: '#0096ED',
    },
  ],
  [
    'NZ_1NEW',
    {
      name: '1News',
      url: 'https://www.1news.co.nz/',
      est: 1969,
      about:
        'Latest and breaking news, in-depth analysis, political and economic news, business, sports, and entertainment and award-winning journalism.',
      emos: ['📰', '🇳🇿'],
      langs: ['en'],
    },
  ],
]);
export const NZNewsSourcesLength = NZNewsSources.size;

export const OZNewsSources = new Map<string, NewsSource>([
  [
    'OZ_AFR',
    {
      name: 'Australian Financial Review',
      url: 'https://www.afr.com/',
      est: 1951,
      about:
        'The Australian Financial Review (AFR) is a leading source of news and analysis on business, finance, investment, and politics in Australia. It has built a strong reputation for providing independent, award-winning journalism that is essential reading for the business and investor community. With a focus on real-time reporting, the AFR delivers timely and insightful coverage of the latest news, trends, and developments shaping the Australian economy.',
      emos: ['📰', '🇦🇺'],
      langs: ['en'],
      tags: [
        'AustralianFinancialReview',
        'BusinessNews',
        'Finance',
        'Investment',
        'Politics',
        'Australia',
      ],
      socials: {
        twitter: 'https://twitter.com/FinancialReview',
        instagram: 'https://www.instagram.com/financialreview/',
        linkedin: 'http://www.linkedin.com/company/1628885',
        facebook: 'https://www.facebook.com/financialreview',
        youtube: 'https://www.youtube.com/@FinancialReview',
        apple:
          'https://apps.apple.com/au/app/the-australian-financial-review/id524599864',
        android:
          'https://play.google.com/store/apps/details?id=com.fairfaxmedia.ink.metro.afr',
      },
      headerBG: '#fff',
      primaryColor: '#0f6cc9',
    },
  ],
  [
    'OZ_DCN',
    {
      name: 'Daily Cargo News',
      url: 'https://www.thedcn.com.au/',
      est: 1891,
      about:
        'Daily Cargo News is a leading source of news covering the Australian shipping, trade, transport, and maritime logistics industries. With a long history dating back to 1891 when it was first published as Daily Commercial News (DCN), Daily Cargo News provides comprehensive coverage of the latest developments, trends, and insights in these sectors. It serves as a trusted resource for professionals, businesses, and individuals involved in the maritime and logistics industries, delivering timely and relevant news to keep them informed and engaged.',
      emos: ['📰', '🇦🇺'],
      langs: ['en'],
      tags: [
        'DailyCargoNews',
        'AustralianShipping',
        'Trade',
        'Transport',
        'MaritimeLogistics',
      ],
      socials: {
        email: 'mailto:james.hayman@thedcn.com.au',
        facebook: 'https://www.facebook.com/thedcn.com.au/',
        twitter: 'https://twitter.com/DCN_Editor',
        instagram: 'https://www.instagram.com/dailycargonews/?hl=en',
        rss: 'https://www.thedcn.com.au/feed/',
        youtube: 'https://www.youtube.com/@dcneditor50',
      },
      headerBG: '#fff',
      primaryColor: '#003d77',
    },
  ],
  [
    'OZ_TGL',
    {
      name: 'Green Left',
      url: 'https://www.greenleft.org.au/',
      est: 1991,
      about:
        'Green Left is a progressive news source dedicated to exposing the lies, hypocrisy, and bias of the billionaire class and their media. With a focus on social justice, environmental sustainability, and grassroots activism, Green Left aims to support the organizing efforts of individuals and groups actively resisting the increasingly authoritarian rule of the corporate rich. Through comprehensive coverage and critical analysis, Green Left strives to inform, inspire, and mobilize readers to create a more just and equitable society.',
      emos: ['📰', '🇦🇺'],
      langs: ['en'],
      tags: [
        'GreenLeft',
        'ProgressiveNews',
        'SocialJustice',
        'EnvironmentalSustainability',
        'Activism',
      ],
      socials: {
        youtube: 'https://youtube.com/greenlefttv',
        podcast: 'https://greenleftonline.podbean.com/',
        facebook: 'https://facebook.com/greenleftonline',
        twitter: 'https://twitter.com/greenleftonline',
        instagram: 'https://instagram.com/greenleftonline',
        rss: 'https://www.greenleft.org.au/rss.xml',
      },
      headerBG: '#fff',
      primaryColor: '#4c812e',
    },
  ],
  [
    'OZ_TSP',
    {
      name: 'The Saturday Paper',
      url: 'https://www.thesaturdaypaper.com.au/',
      est: 2014,
      about:
        'The Saturday Paper is an Australian newspaper that provides in-depth analysis, investigative journalism, and thought-provoking commentary on current affairs, politics, culture, and more. Established in 2014, it has quickly gained recognition for its quality reporting and incisive articles. With a focus on long-form journalism, The Saturday Paper aims to offer readers a comprehensive understanding of the complex issues shaping Australia and the world.',
      emos: ['📰', '🇦🇺'],
      langs: ['en'],
      logoWidth: 900,
      logoHeight: 109,
      tags: [
        'TheSaturdayPaper',
        'AustralianNews',
        'Politics',
        'Culture',
        'InvestigativeJournalism',
      ],
      socials: {
        youtube: 'https://www.youtube.com/@satpaper',
        podcast: 'https://www.thesaturdaypaper.com.au/podcasts',
        email: 'mailto:enquiries@thesaturdaypaper.com.au',
        facebook: 'https://www.facebook.com/TheSaturdayPaper/',
        instagram: 'https://www.instagram.com/satpaper',
        twitter: 'https://twitter.com/SatPaper',
      },
      headerBG: '#fff',
      primaryColor: '#ef0a0a',
    },
  ],
  [
    'OZ_CTVC',
    {
      name: 'Catholic Voice',
      url: 'https://www.catholicvoice.org.au/',
      est: 1989,
      about:
        'Catholic Voice is a news platform that offers the latest updates, insightful articles, and perspectives on topics related to the Catholic community in Australia. With a focus on religious affairs, social issues, and community events, Catholic Voice serves as a valuable source of information and inspiration for Catholics and others interested in Catholicism. Through its dedication to providing accurate and timely reporting, Catholic Voice fosters a sense of community and fosters informed discussions among its readers.',
      emos: ['📰', '🇦🇺'],
      langs: ['en'],
      logoWidth: 200,
      logoHeight: 88,
      tags: [
        'CatholicVoice',
        'CatholicCommunity',
        'ReligiousAffairs',
        'SocialIssues',
        'CommunityEvents',
      ],
      socials: {
        youtube: 'https://www.youtube.com/catholicvoice/',
        email: 'mailto:catholic.voice@cg.org.au',
        facebook: 'https://www.facebook.com/CatholicVoiceAustralia/',
        instagram: 'https://www.instagram.com/thecatholicvoice/',
        twitter: 'https://twitter.com/Catholic_Voice',
      },
      headerBG: '#d12e2e',
      primaryColor: '#d12e2e',
    },
  ],
  [
    'OZ_CTYN',
    {
      name: 'City News',
      url: 'https://citynews.com.au/',
      est: 1995,
      about:
        'City News is a reputable Australian newspaper that provides comprehensive coverage of news and events in the Canberra region. With a rich history dating back to 1995, City News has been serving as a reliable source of local news, including politics, community events, business, arts, entertainment, and more. The newspaper is dedicated to keeping the residents of Canberra informed about the latest happenings in their city and fostering a sense of community engagement.',
      emos: ['📰', '🇦🇺'],
      langs: ['en'],
      logoWidth: 391,
      logoHeight: 100,
      tags: [
        'CityNews',
        'Canberra',
        'LocalNews',
        'Politics',
        'Community',
        'Arts',
        'Entertainment',
        'Business',
      ],
      socials: {
        email: 'mailto:',
        facebook: 'https://www.facebook.com/canberracitynews/',
        twitter: 'https://twitter.com/city_news',
        instagram: 'https://www.instagram.com/canberracitynews/',
      },
      headerBG: '#25408F',
      primaryColor: '#25408F',
    },
  ],
  [
    'OZ_RIOT',
    {
      name: 'Riotact',
      url: 'https://the-riotact.com/',
      est: 2000,
      about:
        'Riotact is a leading Australian news website that covers a wide range of topics, including local news, politics, business, culture, and events. Established in 2010, Riotact has become a reputable source of information for the Canberra community and beyond. With a commitment to unbiased and reliable reporting, Riotact aims to keep its readers informed and engaged in the latest developments and stories that impact their lives.',
      emos: ['📰', '🇦🇺'],
      langs: ['en'],
      logoWidth: 200,
      logoHeight: 68,
      tags: [
        'Riotact',
        'Canberra',
        'LocalNews',
        'Politics',
        'Business',
        'Culture',
        'Events',
      ],
      socials: {
        podcast: 'https://the-riotact.com/category/news/podcast',
        email: 'mailto:editor@region.com.au',
        linkedin: 'https://www.linkedin.com/company/the-riotact-com',
        twitter: 'https://twitter.com/The_Riotact',
        youtube: 'https://www.youtube.com/c/riotactnews',
        facebook: 'https://www.facebook.com/riotactnews/',
        instagram: 'https://www.instagram.com/the_riotact/',
        apple:
          'https://apps.apple.com/app/apple-store/id1558465484?pt=122802719&ct=ra-footer&mt=8',
        android:
          'https://play.google.com/store/apps/details?id=au.com.riotact&referrer=utm_source%3Dra-footer',
      },
      headerBG: '#fff',
      primaryColor: '#09255A',
    },
  ],
  [
    'OZ_ASNW',
    {
      name: 'Alice Springs News',
      url: 'https://alicespringsnews.com.au/',
      est: 1994,
      about:
        'Alice Springs News is a trusted source of news and information that focuses on events, stories, and developments in and around Alice Springs, Australia. Alice Springs News is committed to providing accurate and up-to-date reporting that matters to the local community. Covering a diverse range of topics, including local news, culture, politics, and more, the publication strives to keep its readers well-informed and engaged.',
      emos: ['📰', '🇦🇺'],
      langs: ['en'],
      logoWidth: 236,
      logoHeight: 100,
      tags: [
        'AliceSpringsnews',
        'AliceSprings',
        'LocalNews',
        'Culture',
        'Politics',
      ],
      socials: {
        email: 'mailto:erwin@alicespringsnews.com.au',
      },
      headerBG: '#fff',
      primaryColor: '#EE3C2D',
    },
  ],
  [
    'OZ_ESS',
    {
      name: 'The Eastern Shore Sun',
      url: 'https://www.easternshoresun.com.au/',
      est: 2019,
      about:
        'The Eastern Shore Sun is a community newspaper that serves the vibrant Eastern Shore region of Tasmanian. Committed to delivering local news, events, and stories that matter to the residents, The Eastern Shore Sun strives to keep its readers informed and engaged in the happenings of their community. Since its establishment, the publication has become a reliable source for the latest updates, features, and highlights that showcase the rich culture and spirit of the Eastern Shore area.',
      emos: ['📰', '🇦🇺'],
      langs: ['en'],
      logoWidth: 100,
      logoHeight: 100,
      tags: [
        'EasternShoreSun',
        'EasternShore',
        'LocalNews',
        'Community',
        'Events',
      ],
      socials: {
        email: 'mailto:editorial@easternshoresun.com.au',
        facebook: 'https://www.facebook.com/easternshoresun/',
        instagram: 'https://www.instagram.com/eastern_shore_sun/',
      },
      headerBG: '#fff',
      primaryColor: '#EA9635',
    },
  ],
  [
    'OZ_GYGZ',
    {
      name: 'The Glenorchy Gazette',
      url: 'https://www.glenorchygazette.com.au/',
      est: 2019,
      about: '',
      emos: ['📰', '🇦🇺'],
      langs: ['en'],
      logoWidth: 300,
      logoHeight: 76,
      tags: [''],
      socials: {
        email: 'mailto:editorial@glenorchygazette.com.au',
        facebook: 'http://www.facebook.com/glenorchygazette',
        instagram: 'https://www.instagram.com/glenorchy_gazette/',
      },
      headerBG: '#fff',
      primaryColor: '#1E73BE',
    },
  ],
  [
    'OZ_CHC',
    {
      name: 'Circular Head Chronicle',
      url: 'https://www.chchronicle.com.au/',
      est: 1906,
      about:
        'Circular Head Chronicle is a trusted community newspaper based in Tasmania, Australia. It is committed to providing reliable news and information to the residents of the Circular Head region. With a focus on local stories, events, and issues that matter most to the community, the Circular Head Chronicle strives to keep its readers well-informed and engaged in the happenings of their area. As a long-standing publication, it has become an integral part of the community, reflecting the unique culture and spirit of Circular Head.',
      emos: ['📰', '🇦🇺'],
      langs: ['en'],
      logoWidth: 342,
      logoHeight: 90,
      tags: [
        'CircularHeadChronicle',
        'CircularHead',
        'LocalNews',
        'Community',
        'Tasmania',
      ],
      socials: {
        facebook: 'https://www.facebook.com/CH.Chronicle',
        instagram: 'https://www.instagram.com/chchronicle/',
      },
      headerBG: '#fff',
      primaryColor: '#004a88',
    },
  ],
  [
    'OZ_KILC',
    {
      name: 'King Is Land Courier',
      url: 'https://kingislandcourier.com/',
      est: 1983,
      about:
        "King Island Courier is a trusted source of news and information serving the community. With a focus on providing local news, events, and stories that matter most to the people of King Island, it aims to keep its readers well-informed and connected. As a dedicated community newspaper, King Island Courier reflects the unique identity and spirit of King Island, Tasmania. Whether it's covering local events, issues, or achievements, the newspaper plays a vital role in fostering a sense of community and unity among its readers.",
      emos: ['📰', '🇦🇺'],
      langs: ['en'],
      logoWidth: 398,
      logoHeight: 100,
      tags: [
        'KingIslandCourier',
        'KingIsland',
        'LocalNews',
        'Community',
        'Tasmania',
      ],
      socials: {
        facebook: 'https://www.facebook.com/KingIslandCourier/',
        instagram: 'https://www.instagram.com/kingislandcourier/',
      },
      headerBG: '#fff',
      primaryColor: '#FFCA05',
    },
  ],
  [
    'OZ_HOBO',
    {
      name: 'The Hobart Observerr',
      url: 'https://hobartobserver.com.au/',
      est: 2019,
      about:
        'The Hobart Observer is a leading newspaper dedicated to providing comprehensive news and insights to the community of Hobart, Tasmania. With a commitment to delivering reliable, up-to-date, and in-depth reporting, The Hobart Observer covers a wide range of topics, including local news, events, politics, business, sports, and more. As a trusted source of information, it aims to keep the residents of Hobart well-informed and engaged with the issues that matter most to them. Through its coverage, The Hobart Observer plays an integral role in fostering a sense of community and connection among its readers.',
      emos: ['📰', '🇦🇺'],
      langs: ['en'],
      logoWidth: 300,
      logoHeight: 77,
      tags: [
        'TheHobartObserver',
        'Hobart',
        'Tasmania',
        'LocalNews',
        'Community',
        'Tasmania',
      ],
      socials: {
        facebook: 'https://www.facebook.com/hobartobserver/',
        instagram: 'https://www.instagram.com/hobart_observer/',
      },
      headerBG: '#fff',
      primaryColor: '#8224E3',
    },
  ],
  [
    'OZ_ABC',
    {
      name: 'ABC News',
      url: 'https://www.abc.net.au/news/',
      est: 1932,
      about:
        'ABC News is a trusted source of news and information in Australia, providing comprehensive coverage of local and international events. With a focus on delivering accurate and impartial reporting, ABC News serves as a reliable resource for millions of Australians. From breaking news to in-depth analysis, ABC News covers a wide range of topics, including politics, business, health, science, technology, and more. Through its commitment to journalistic excellence, ABC News continues to inform, educate, and engage audiences across the country.',
      emos: ['📰', '🇦🇺'],
      langs: ['en'],
    },
  ],
  [
    'OZ_7NEW',
    {
      name: '7NEWS',
      url: 'https://7news.com.au/',
      est: 1958,
      about:
        '7NEWS is a leading Australian news network that provides comprehensive coverage of local, national, and international events. With a focus on delivering breaking news, in-depth analysis, and insightful reporting, 7NEWS serves as a trusted source of information for millions of Australians. From politics to business, health, entertainment, and more, 7NEWS covers a wide range of topics that are of interest and importance to its audience. Through its commitment to quality journalism, 7NEWS continues to inform, educate, and engage viewers across the country.',
      emos: ['📰', '🇦🇺'],
      langs: ['en'],
    },
  ],
  [
    'OZ_CONV',
    {
      name: 'The Conversation',
      url: 'https://theconversation.com/',
      est: 2011,
      about:
        'The Conversation is an independent source of news and views, sourced from the academic and research community and delivered direct to the public. Our team of professional editors work with experts to unlock their knowledge for use by the wider public. Access to independent, high-quality, authenticated, explanatory journalism underpins a functioning democracy. Our aim is to allow for better understanding of current affairs and complex issues. And hopefully allow for a better quality of public discourse and conversations.',
      emos: ['📰', '🇦🇺'],
      langs: ['en'],
    },
  ],
  [
    'AU_NWS',
    {
      name: 'News Weakly',
      url: 'https://shows.acast.com/news-weakly',
      est: 2021,
      about:
        'News Weakly is a satirical news podcast that takes a humorous look at the week’s headlines. With a mix of parody, satire, and comedy, News Weakly offers a fresh and entertaining take on current events, politics, and pop culture. Hosted by a team of comedians and writers, the podcast provides a light-hearted and irreverent perspective on the news stories that are making headlines. Whether you’re looking for a laugh or a break from the seriousness of the news cycle, News Weakly is the perfect podcast for you.',
      emos: ['🎙️', '🇦🇺'],
      langs: ['en'],
    },
  ],
  [
    'OZ_SBS',
    {
      name: 'SBS News',
      url: 'https://www.sbs.com.au/news/',
      est: 1978,
      about:
        'SBS News is a trusted source of news and information in Australia, providing comprehensive coverage of local and international events. With a focus on delivering accurate and impartial reporting, SBS News serves as a reliable resource for millions of Australians. From breaking news to in-depth analysis, SBS News covers a wide range of topics, including politics, business, health, science, technology, and more. Through its commitment to journalistic excellence, SBS News continues to inform, educate, and engage audiences across the country.',
      emos: ['📰', '🇦🇺'],
      langs: ['en'],
    },
  ],
]);
export const OZNewsSourcesLength = OZNewsSources.size;

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
        "The Los Angeles Times is a trusted source for breaking news, entertainment, sports, politics, and more in Southern California and around the world. With a history dating back to 1881, the L.A. Times has been providing comprehensive coverage and insightful journalism that keeps readers informed and engaged. Whether you're interested in local news, Hollywood updates, sports scores, or political developments, the L.A. Times delivers in-depth reporting and analysis to meet your information needs.",
      emos: ['📰', '🇺🇸'],
      langs: ['en'],
      tags: [
        'LosAngelesTimes',
        'BreakingNews',
        'Entertainment',
        'Sports',
        'Politics',
        'SouthernCaliforniaNews',
      ],
      socials: {
        podcast: 'https://www.latimes.com/podcasts',
        video: 'https://www.latimes.com/video',
        twitter: 'https://twitter.com/latimes',
        instagram: 'https://www.instagram.com/latimes/',
        youtube: 'https://www.youtube.com/losangelestimes',
        facebook: 'https://www.facebook.com/latimes',
      },
      headerBG: '#fff',
      primaryColor: '#69D3FA',
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
        linkedin: 'https://www.linkedin.com/company/chicago-tribune-media/',
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
      about:
        'The Houston Chronicle is a leading source of news and information, delivering the latest updates on Houston, Texas, the United States, and the world. With a rich history spanning over a century, the Houston Chronicle has been a trusted source for local, national, and international news. It covers a wide range of topics, including politics, business, sports, entertainment, and more, keeping its readers well-informed about the events and developments that shape their community and the world.',
      emos: ['📰', '🇺🇸'],
      langs: ['en'],
      tags: [
        'HoustonChronicle',
        'News',
        'Houston',
        'Texas',
        'USNews',
        'WorldNews',
      ],
      socials: {
        email: 'mailto:feedback@hearst.com',
        facebook: 'https://houstonchronicle.com/facebook/',
        twitter: 'https://houstonchronicle.com/twitter/',
        instagram: 'https://houstonchronicle.com/instagram/',
        linkedin: 'https://houstonchronicle.com/linkedin/',
      },
      headerBG: '#111',
      primaryColor: '#ff7500',
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
        "Newsday is a trusted source for breaking news, data, and opinions covering a wide range of topics including business, sports, entertainment, travel, lifestyle, and much more. With a long-standing history and commitment to providing comprehensive coverage, Newsday keeps its readers informed and engaged with the latest developments locally, nationally, and internationally. Whether it's news that affects your community or stories that spark your interests, Newsday delivers timely and in-depth reporting to keep you informed and connected.",
      emos: ['📰', '🇺🇸'],
      langs: ['en'],
      tags: [
        'Newsday',
        'BreakingNews',
        'Business',
        'Sports',
        'Entertainment',
        'Travel',
        'Lifestyle',
      ],
      socials: {
        email: 'mailto:web@newsday.com',
        facebook: 'https://www.newsday.com/facebook',
        twitter: 'https://www.newsday.com/twitter',
        instagram: 'https://www.instagram.com/newsday',
      },
      headerBG: '#0077c8',
      primaryColor: '#0077C5',
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
      about:
        'CNN (International) is a renowned news organization providing comprehensive coverage of breaking news, both from the United States and around the world. With a global reach and a commitment to delivering accurate and timely information, CNN (International) has become a trusted source for news, analysis, and video content. It covers a wide range of topics, including politics, business, technology, health, entertainment, and more, keeping its audience informed about the latest developments that shape our world.',
      emos: ['📺', '🇺🇸'],
      langs: ['en'],
      tags: ['CNN', 'News', 'BreakingNews', 'USNews', 'WorldNews'],
      socials: {
        audio: 'https://edition.cnn.com/audio',
        video: 'https://edition.cnn.com/video',
        facebook: 'https://facebook.com/CNN',
        twitter: 'https://twitter.com/CNN',
        instagram: 'https://instagram.com/CNN',
      },
      headerBG: '#000',
      primaryColor: '#cc0000',
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
        'The Plain Dealer is the go-to source for the latest local news, sports updates, and breaking news in Cleveland, OH. With a rich history dating back to 1842, The Plain Dealer has been serving the Northeast Ohio community with reliable and comprehensive coverage. Stay informed about Northeast Ohio weather conditions, watch videos, browse through photos, and engage in discussions on various topics through the forums.',
      emos: ['📰', '🇺🇸'],
      langs: ['en'],
      tags: [
        'ThePlainDealer',
        'ClevelandNews',
        'SportsNews',
        'BreakingNews',
        'NortheastOhio',
      ],
      socials: {
        email: 'mailto:feedback@cleveland.com',
        twitter: 'https://twitter.com/clevelanddotcom',
        pinterest: 'https://www.pinterest.com/clevelanddotcom/',
        facebook: 'https://www.facebook.com/pages/clevelandcom/48573742500',
        instagram: 'https://instagram.com/clevelanddotcom',
        rss: 'https://www.cleveland.com/arc/outboundfeeds/rss/?outputType=xml',
      },
      headerBG: '#fff',
      primaryColor: '#326192',
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
        facebook: 'https://www.facebook.com/detroitfreepress/',
        twitter: 'https://twitter.com/freep',
        instagram: 'https://www.instagram.com/detroitfreepress/',
        rss: 'http://static.freep.com/rss/',
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
        "The San Francisco Chronicle is a trusted source for breaking news, sports, technology, food and wine coverage, and more in the Bay Area and San Francisco. With a rich history dating back to 1865, the Chronicle has been delivering comprehensive and timely reporting on local news and events, as well as providing enhanced coverage of the Giants, 49ers, and Warriors sports teams. Whether you're looking for the latest updates on Bay Area happenings or in-depth articles on technology and culture, the San Francisco Chronicle keeps you informed and engaged with the stories that matter.",
      emos: ['📰', '🇺🇸'],
      langs: ['en'],
      tags: [
        'SanFranciscoChronicle',
        'BreakingNews',
        'Sports',
        'Technology',
        'FoodAndWine',
        'BayAreaNews',
        'SanFranciscoNews',
      ],
      socials: {
        podcast: 'https://www.instagram.com/detroitfreepress/',
        email: 'mailto:feedback@sfchronicle.com',
        facebook: 'https://www.facebook.com/SFChronicle/',
        twitter: 'https://twitter.com/sfchronicle',
        instagram: 'https://www.instagram.com/sfchronicle/',
        linkedin: 'https://www.linkedin.com/company/sfchronicle',
        youtube: 'https://www.youtube.com/@SFChronicle',
      },
      headerBG: '#000',
      primaryColor: '#26A0A5',
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
      logoWidth: 400,
      logoHeight: 29,
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
  [
    'US_ABC',
    {
      name: 'ABC News',
      url: 'https://abcnews.go.com/',
      est: 1945,
      about:
        'ABC News is a prominent American news organization delivering comprehensive coverage of national and international news, politics, business, entertainment, sports, and more. With a commitment to journalistic integrity and accuracy, ABC News provides up-to-date and factual information to its audience, keeping them informed about the latest events and developments around the world. As a trusted source of news for millions of viewers and readers, ABC News plays a vital role in shaping public discourse and promoting transparency in the media landscape. Through its various platforms, including television, online, and social media, ABC News reaches a diverse audience and continues to be a leading voice in American journalism.',
      description: [],
      emos: ['📺', '🇺🇸'],
      langs: ['en'],
      logoWidth: 287,
      logoHeight: 100,
      tags: [
        'ABCNews',
        'AmericanNews',
        'Politics',
        'Business',
        'Entertainment',
        'Sports',
      ],
      socials: {
        video: 'https://abcnews.go.com/Video',
        facebook: 'https://www.facebook.com/abcnews',
        twitter: 'https://twitter.com/abc',
        youtube: 'https://www.youtube.com/user/ABCNews',
        instagram: 'https://www.instagram.com/abcnews/',
        tiktok: 'https://www.tiktok.com/@abcnews',
      },
      headerBG: '#fff',
      primaryColor: '#000',
    },
  ],
  [
    'US_CBS',
    {
      name: 'CBS News',
      url: 'https://www.cbsnews.com/',
      est: 1927,
      about:
        'CBS News is a pioneering American news organization with a strong commitment to journalism. CBS News delivers comprehensive coverage of breaking news, politics, world events, business, entertainment, and more. As one of the most recognized news networks in the United States, CBS News continues to be a trusted source of information for millions of viewers, providing them with timely and accurate updates on the latest happenings around the globe. Through its various platforms, including television, online, and social media, CBS News remains at the forefront of news reporting, offering its audience a diverse range of news stories, insightful analysis, and thought-provoking reporting.',
      description: [],
      emos: ['📺', '🇺🇸'],
      langs: ['en'],
      logoWidth: 200,
      logoHeight: 60,
      tags: [''],
      socials: {
        live: 'https://www.cbsnews.com/streaming/',
        facebook: 'https://www.facebook.com/CBSNews/',
        twitter: 'https://twitter.com/CBSNews',
        instagram: 'https://instagram.com/cbsnews/',
        youtube: 'https://www.youtube.com/CBSNews',
      },
      headerBG: '#fff',
      primaryColor: '#000',
    },
  ],
  [
    'US_INED',
    {
      name: 'Inside Edition',
      url: 'https://www.insideedition.com/',
      est: 1989,
      about:
        'Inside Edition is a long-running American news program that covers a wide range of topics, including breaking news, human interest stories, celebrity news, and investigative reports. With a focus on delivering engaging and informative content, Inside Edition provides viewers with a mix of news, entertainment, and lifestyle stories. Whether it’s the latest headlines or in-depth features, Inside Edition keeps its audience informed and entertained with its unique blend of news and entertainment.',
      description: [],
      emos: ['📺', '🇺🇸'],
      langs: ['en'],
    },
  ],
  [
    'US_NBC',
    {
      name: 'NBC News',
      url: 'https://www.nbcnews.com/',
      est: 1940,
      about:
        'NBC News is a renowned American news organization that has earned a reputation for its comprehensive and reliable coverage. With a rich history spanning several decades, NBC News has been at the forefront of delivering breaking news, in-depth analysis, and compelling stories from around the world. From politics and business to entertainment and global affairs, NBC News provides a diverse range of news content to keep its audience well-informed and engaged. As a leading source of information, NBC News continues to innovate and adapt to the ever-changing media landscape. Through its various platforms, including television, online, and social media, NBC News reaches millions of viewers, delivering the latest updates and insightful reporting on the most pressing issues of our time. Trusted for its journalistic integrity and commitment to factual reporting, NBC News remains a vital resource for people seeking accurate and up-to-date news coverage.',
      description: [],
      emos: ['📺', '🇺🇸'],
      langs: ['en'],
      logoWidth: 132,
      logoHeight: 100,
      tags: [''],
      socials: {
        live: 'https://www.nbcnews.com/now',
        video: 'https://www.nbcnews.com/video',
        facebook: 'https://facebook.com/NBCNews',
        twitter: 'https://twitter.com/nbcnews',
        instagram: 'https://instagram.com/nbcnews',
        youtube: 'https://youtube.com/channel/@NBCNews',
      },
      headerBG: '#fff',
      primaryColor: '#3061FF',
    },
  ],
  [
    'US_GPB',
    {
      name: 'Georgia Public Broadcasting',
      url: 'https://www.gpb.org/',
      est: 1960,
      about:
        'Georgia Public Broadcasting (GPB) is a prominent American media organization dedicated to providing high-quality news, educational content, and entertainment. As a reliable source of information, GPB delivers comprehensive coverage across various topics, including politics, culture, and community events. With a commitment to journalistic integrity and public service, GPB strives to keep its audience informed and engaged through television, radio, and digital platforms. With a strong online presence and engaging social media channels, GPB ensures that its content reaches a diverse and wide-ranging audience, making it a valuable resource for people across Georgia and beyond.',
      description: [],
      emos: ['📺', '🇺🇸'],
      langs: ['en'],
      logoWidth: 120,
      logoHeight: 74,
      tags: [
        'GeorgiaPublicBroadcasting',
        'GPBMedia',
        'GeorgiaNews',
        'PublicService',
        'EducationalContent',
        'Entertainment',
        'Television',
        'Radio',
        'DigitalMedia',
        'Journalism',
        'Broadcasting',
      ],
      socials: {
        live: 'https://www.gpb.org/television/live',
        video: 'https://www.nbcnews.com/video',
        radio: 'https://www.gpb.org/radio',
        email: 'mailto:ask@gpb.org',
        facebook: 'https://www.facebook.com/gpbmedia/',
        instagram: 'https://www.instagram.com/gpbmedia/',
        twitter: 'https://twitter.com/mygpb',
        youtube: 'https://www.youtube.com/@GPB',
      },
      headerBG: '#fff',
      primaryColor: '#0084ca',
    },
  ],
  [
    'US_MSN',
    {
      name: 'MSNBC',
      url: 'https://www.msnbc.com/',
      est: 1996,
      about:
        'MSNBC is a prominent news channel based in the United States. It provides comprehensive coverage of current events, politics, US news, world news, and more. With a focus on journalism and broadcasting, MSNBC delivers news to its viewers in an engaging and informative manner. Stay informed with the latest updates by visiting their website or tuning in to their live broadcasts.',
      description: [],
      emos: ['📺', '🇺🇸'],
      langs: ['en'],
      logoWidth: 271,
      logoHeight: 53,
      tags: [
        'MSNBC',
        'NewsChannel',
        'Television',
        'Media',
        'CurrentEvents',
        'Politics',
        'USNews',
        'WorldNews',
        'Journalism',
        'Broadcasting',
      ],
      socials: {
        live: 'https://www.msnbc.com/live',
        radio:
          'https://www.msnbc.com/msnbc/msnbc-live-audio-listen-msnbc-live-stream-audio-all-day-n1239787',
        email: 'mailto:MSNBCTVinfo@nbcuni.com',
        facebook: 'https://www.facebook.com/msnbc',
        instagram: 'https://www.instagram.com/msnbc',
        twitter: 'https://www.twitter.com/msnbc',
        newsletter: 'https://secure.msnbc.com/_tps/accounts/newsletters',
        youtube: 'https://www.youtube.com/@GPB',
      },
      headerBG: '#fff',
      primaryColor: '#3061ff',
    },
  ],
  [
    'US_NASA',
    {
      name: 'NASA',
      url: 'https://www.nasa.gov/',
      est: 1958,
      about: '',
      description: [],
      emos: ['🚀', '🇺🇸'],
      langs: ['en'],
      logoWidth: 110,
      logoHeight: 92,
      tags: ['NASA'],
      socials: {
        tv: 'https://www.nasa.gov/multimedia/nasatv/index.html',
        email: 'mailto:public-inquiries@hq.nasa.gov',
        facebook: 'https://www.facebook.com/NASA/',
        instagram: 'https://www.instagram.com/nasa/',
        twitter: 'https://twitter.com/nasa',
        youtube: 'https://www.youtube.com/nasa',
      },
      headerBG: '#fff',
      primaryColor: '#0B3D91',
    },
  ],
  [
    'US_CSPN',
    {
      name: 'C-SPAN',
      url: 'https://www.c-span.org/',
      est: 1979,
      about: '',
      description: [],
      emos: ['📺', '🇺🇸'],
      langs: ['en'],
      logoWidth: 110,
      logoHeight: 92,
      tags: ['NASA'],
      socials: {
        podcast: 'https://www.c-span.org/podcasts/',
        radio: 'https://www.c-span.org/radio/',
        facebook: 'https://www.facebook.com/CSPAN',
        instagram: 'https://www.instagram.com/cspan/',
        twitter: 'https://twitter.com/cspan',
        youtube: 'https://www.youtube.com/user/CSPAN',
      },
      headerBG: '#fff',
      primaryColor: '#0B3D91',
    },
  ],
  [
    'US_HILL',
    {
      name: 'The Hill',
      url: 'https://thehill.com/',
      est: 1994,
      about:
        "The Hill is a leading news outlet, providing comprehensive coverage of political news and analysis. It is a trusted source of information for policymakers, political enthusiasts, and the general public. The Hill's commitment to unbiased reporting and insightful commentary has made it a prominent player in the American media landscape.",
      description: [
        'Since its inception in 1994, The Hill has focused on delivering in-depth and accurate reporting on politics, Congress, policy debates, and other critical issues shaping the United States. Its team of experienced journalists and contributors work tirelessly to bring the latest updates and exclusive stories to its readers.',
        'With a reputation for fair and balanced reporting, The Hill aims to provide its audience with a comprehensive understanding of the complex political landscape. Its coverage spans a wide range of topics, including breaking news, analysis, op-eds, and commentary from leading experts and policymakers.',
        'As one of the most respected sources of political news, The Hill has garnered a large and diverse readership, including politicians, government officials, journalists, and engaged citizens. Its influence extends beyond traditional media, with an active presence on various social media platforms and a robust online community.',
        'In addition to its online presence, The Hill offers The Hill TV, a video platform that features interviews, debates, and analysis on pressing political issues. This multimedia approach allows The Hill to reach audiences across different platforms and engage with a broader demographic.',
        'With a commitment to journalistic integrity and excellence, The Hill continues to be a go-to source for political news and insights, playing a crucial role in informing public discourse and contributing to a well-informed citizenry.',
      ],
      emos: ['📰', '🇺🇸'],
      langs: ['en'],
      logoWidth: 431,
      logoHeight: 100,
      tags: [
        'TheHill',
        'PoliticalNews',
        'Analysis',
        'MediaOutlet',
        'Journalism',
      ],
      socials: {
        tv: 'https://thehill.com/hilltv/',
        facebook: 'http://www.facebook.com/TheHill',
        twitter: 'https://twitter.com/@thehill',
        linkedin: 'https://www.linkedin.com/company/the-hill',
        instagram: 'https://www.instagram.com/thehill',
        youtube: 'https://www.youtube.com/@thehill',
        haystack: 'https://www.haystack.tv/channel/thehill/',
        rss: 'https://thehill.com/resources/rss-feeds/',
        android:
          'https://play.google.com/store/apps/details?id=com.thehill.thehill',
        apple: 'https://apps.apple.com/us/app/the-hill/id360124019',
      },
      headerBG: '#2a53c1',
      primaryColor: '#2a53c1',
    },
  ],
  [
    'US_MAUI',
    {
      name: 'The Maui News',
      url: 'https://www.mauinews.com/',
      est: 1900,
      about:
        'The Maui News is a reputable source of news and information serving the Maui community and beyond. As a dedicated newspaper, it aims to provide comprehensive coverage of local events, issues, and developments that matter to the people of Maui. With a commitment to accuracy and quality journalism, The Maui News strives to be a reliable source for readers seeking to stay informed about the latest happenings.',
      description: [
        "The newspaper's dedication to delivering up-to-date and relevant content has established it as a go-to resource for readers in Maui, offering insights into a wide range of topics including local news, sports, culture, and more.",
        "In a rapidly evolving media landscape, The Maui News has embraced digital platforms to expand its reach and engage a diverse audience. Through its online presence and social media channels, it provides timely updates and stories that reflect the dynamic nature of Maui's community.",
        'With its focus on journalistic integrity and community engagement, The Maui News continues to uphold its legacy as a trusted and respected news outlet for the Maui region.',
      ],
      emos: ['📰', '🇺🇸'],
      langs: ['en'],
      logoWidth: 917,
      logoHeight: 96,
      tags: ['TheMauiNews', 'MauiNews', 'LocalNews', 'Journalism', 'Media'],
      socials: {
        twitter: 'https://twitter.com/TheMauiNewsHI',
        facebook: 'https://www.facebook.com/MauiNews/',
        instagram: 'https://www.instagram.com/themauinews/',
      },
      headerBG: '#FFFFFF',
      primaryColor: '#386E4B',
    },
  ],
  [
    'US_MINW',
    {
      name: 'Maui Now',
      url: 'https://mauinow.com/',
      est: 2002,
      about:
        'Bringing you the latest news, information, and updates about Maui and the surrounding islands. Maui Now covers a wide range of topics including local news, events, weather, sports, and more.',
      description: [
        'Maui Now is a comprehensive source for news and updates related to Maui and its neighboring islands. With a focus on delivering timely and relevant information, Maui Now covers various topics including local news, community events, weather updates, sports, and much more.',
        "The platform serves as a go-to resource for residents and visitors alike, providing valuable insights into the happenings on the beautiful island of Maui. Whether it's breaking news, in-depth articles, or engaging multimedia content, Maui Now aims to keep its audience well-informed and connected to the local community.",
        'With a user-friendly interface and a commitment to accurate reporting, Maui Now continues to be a trusted source for those seeking to stay up-to-date on all things Maui. Through its online presence, the platform brings people together, fostering a sense of community and shared knowledge.',
      ],
      emos: ['📰', '🇺🇸'],
      langs: ['en'],
      logoWidth: 917,
      logoHeight: 96,
      tags: [
        'MauiNow',
        'MauiNews',
        'Community',
        'LocalEvents',
        'WeatherUpdates',
        'Sports',
      ],
      socials: {
        video: 'https://mauinow.com/maui-videos/',
        youtube: 'https://www.youtube.com/@MauiNowNews',
        twitter: 'https://twitter.com/MauiNOW/',
        facebook: 'https://www.facebook.com/mauinow/',
        instagram: 'https://www.instagram.com/@mauinownews/',
      },
      headerBG: '#FFFFFF',
      primaryColor: '#184787',
    },
  ],
  [
    'US_CULL',
    {
      name: 'The Cullman Times',
      url: 'https://www.cullmantimes.com/',
      est: 1901,
      about:
        'Delivering local news, events, and updates to the Cullman community since 1901. The Cullman Times provides comprehensive coverage of important topics, ranging from breaking news and sports to community events and more.',
      description: [
        'The Cullman Times has been a steadfast source of news and information for the Cullman community for more than a century. Committed to delivering relevant and timely updates, the newspaper covers a wide range of topics that matter to its readers.',
        'From breaking news and local events to in-depth sports coverage and community features, The Cullman Times keeps its audience well-informed and engaged. With a focus on accurate reporting and a dedication to serving the local community, the newspaper has become a trusted voice that residents can rely on.',
        'Through its digital presence, The Cullman Times continues to adapt to changing media landscapes, ensuring that its content reaches a wide audience. Whether in print or online, the newspaper remains an essential source of information, connecting the Cullman community and fostering a sense of unity.',
      ],
      emos: ['📰', '🇺🇸'],
      langs: ['en'],
      logoWidth: 333,
      logoHeight: 42,
      tags: [
        'TheCullmanTimes',
        'LocalNews',
        'CommunityEvents',
        'SportsCoverage',
        'BreakingNews',
      ],
      socials: {
        youtube: 'https://www.youtube.com/@TheCullmanTimes',
        twitter: 'https://twitter.com/TheCullmanTimes/',
        facebook: 'https://www.facebook.com/TheCullmanTimes/',
        apple:
          'https://itunes.apple.com/us/app/cullman-times/id912940499?ls=1&mt=8',
        android:
          'https://play.google.com/store/apps/details?id=com.thecullmantimes.android.prod&hl=en',
      },
      headerBG: '#FFFFFF',
      primaryColor: '#28a745',
    },
  ],
  [
    'US_DEGL',
    {
      name: 'Dothan Eagle',
      url: 'https://dothaneagle.com/',
      est: 1908,
      about:
        'Delivering local news and updates to the Dothan community. The Dothan Eagle is dedicated to providing comprehensive coverage of important local events, breaking news, and more.',
      description: [
        "The Dothan Eagle is a trusted source of news and information for the Dothan community. With a commitment to accuracy and relevance, the newspaper covers a wide range of topics that impact its readers' lives.",
        'From local events and breaking news to in-depth coverage of community issues, The Dothan Eagle strives to keep its audience informed and engaged. Through its journalistic efforts, the newspaper aims to highlight the stories that matter most to the residents of Dothan.',
        "By offering both print and digital platforms, The Dothan Eagle ensures that its content reaches a diverse audience. The newspaper's dedication to providing reliable and up-to-date information makes it an essential resource for those seeking to stay informed about local matters.",
      ],
      emos: ['📰', '🇺🇸'],
      langs: ['en'],
      logoWidth: 600,
      logoHeight: 51,
      tags: ['DothanEagle', 'LocalNews', 'CommunityUpdates', 'BreakingNews'],
      socials: {
        youtube: 'https://www.youtube.com/@dothaneagle',
        twitter: 'https://twitter.com/dothaneagle',
        facebook: 'https://www.facebook.com/dothaneagle/',
        instagram: 'https://www.instagram.com/dothaneagle/',
      },
      headerBG: '#FFFFFF',
      primaryColor: '#00000',
    },
  ],
  [
    'US_AP',
    {
      name: 'Associated Press News',
      url: 'https://apnews.com/',
      est: 1846,
      about:
        'Latest headlines, breaking news, and videos. A definitive source for independent journalism from every corner of the globe.',
      description: [],
      emos: ['📰', '🇺🇸'],
      langs: ['en'],
      logoWidth: 600,
      logoHeight: 51,
      tags: [],
      headerBG: '#FFFFFF',
      primaryColor: '#00000',
    },
  ],
  [
    'US_NNN',
    {
      name: 'News Nation',
      url: 'https://www.newsnationnow.com',
      est: 1978,
      about:
        'NewsNation is your trusted source for breaking news, unbiased U.S. news & video delivered from the heartland of America delivered 24/7.',
      description: [],
      emos: ['📰', '🇺🇸'],
      langs: ['en'],
      logoWidth: 600,
      logoHeight: 51,
      tags: [],
      headerBG: '#FFFFFF',
      primaryColor: '#00000',
    },
  ],
  [
    'US_HUFF',
    {
      name: 'HuffPost',
      url: 'https://www.huffpost.com/',
      est: 2005,
      about:
        'Read the latest headlines, news stories, and opinion from Politics, Entertainment, Life, Perspectives, and more.',
      description: [],
      emos: ['📰', '🇺🇸'],
      langs: ['en'],
      logoWidth: 600,
      logoHeight: 51,
      tags: [],
      headerBG: '#FFFFFF',
      primaryColor: '#00000',
    },
  ],
  [
    'US_POL',
    {
      name: 'Politico',
      url: 'https://www.politico.com/',
      est: 2007,
      about: 'Nobody knows politics like POLITICO.',
      description: [],
      emos: ['📰', '🇺🇸'],
      langs: ['en'],
      logoWidth: 600,
      logoHeight: 51,
      tags: [],
      headerBG: '#FFFFFF',
      primaryColor: '#00000',
    },
  ],
  [
    'US_N4JX',
    {
      name: 'News4JAX',
      url: 'https://www.news4jax.com/',
      est: 1949,
      about:
        "Breaking news in Jacksonville, Florida from News4JAX and WJXT Channel 4. Jacksonville breaking news, headlines, weather, and sports. Local Jacksonville news and more from The Local Station in Jacksonville, Florida, WJXT - Jacksonville's Channel 4.",
      description: [],
      emos: ['📰', '🇺🇸'],
      langs: ['en'],
      logoWidth: 600,
      logoHeight: 51,
      tags: [],
      headerBG: '#FFFFFF',
      primaryColor: '#00000',
    },
  ],
  [
    'US_BRBT',
    {
      name: 'Breitbart',
      url: 'https://www.breitbart.com/',
      est: 2007,
      about:
        'Syndicated news and opinion website providing continuously updated headlines to top news and analysis sources.',
      description: [],
      emos: ['📰', '🇺🇸'],
      langs: ['en'],
      logoWidth: 600,
      logoHeight: 51,
      tags: [],
      headerBG: '#FFFFFF',
      primaryColor: '#00000',
    },
  ],
  [
    'US_NSWK',
    {
      name: 'Newsweek',
      url: 'https://www.newsweek.com/',
      est: 1933,
      about:
        'Newsweek provides in-depth analysis, news and opinion about international issues, technology, business, culture and politics.',
      description: [],
      emos: ['📰', '🇺🇸'],
      langs: ['en'],
      logoWidth: 600,
      logoHeight: 51,
      tags: [],
      headerBG: '#FFFFFF',
      primaryColor: '#00000',
    },
  ],
  [
    'US_SALN',
    {
      name: 'Salon',
      url: 'https://www.salon.com/',
      est: 1995,
      about:
        'Award-winning news and culture, features breaking news, in-depth reporting and criticism on politics, science, food and entertainment.',
      description: [],
      emos: ['📰', '🇺🇸'],
      langs: ['en'],
      logoWidth: 600,
      logoHeight: 51,
      tags: [],
      headerBG: '#FFFFFF',
      primaryColor: '#00000',
    },
  ],
  [
    'US_NBCC',
    {
      name: 'NBC Chicago',
      url: 'https://www.nbcchicago.com/',
      est: 1948,
      about:
        'Chicago News, Local News, Weather, Traffic, Entertainment, Video, and Breaking News.',
      description: [],
      emos: ['📰', '🇺🇸'],
      langs: ['en'],
      logoWidth: 600,
      logoHeight: 51,
      tags: [],
      headerBG: '#FFFFFF',
      primaryColor: '#00000',
    },
  ],
  [
    'US_KTLA',
    {
      name: 'KTLA',
      url: 'https://www.nbcchicago.com/',
      est: 1942,
      about:
        'KTLA is a local TV station that covers breaking news, weather, traffic and live streaming video for L.A., Orange County, Ventura County, and the Inland Empire. Find the latest stories, alerts, maps and videos on topics such as crime, sports, entertainment and more.',
      description: [],
      emos: ['📰', '🇺🇸'],
      langs: ['en'],
      logoWidth: 600,
      logoHeight: 51,
      tags: [],
      headerBG: '#FFFFFF',
      primaryColor: '#00000',
    },
  ],
  [
    'US_WSHT',
    {
      name: 'The Washington Times',
      url: 'https://www.washingtontimes.com/',
      est: 1982,
      about:
        'The Washington Times delivers breaking news and commentary on the issues that affect the future of our nation.',
      description: [],
      emos: ['📰', '🇺🇸'],
      langs: ['en'],
      logoWidth: 600,
      logoHeight: 51,
      tags: [],
      headerBG: '#FFFFFF',
      primaryColor: '#00000',
    },
  ],
  [
    'US_INTC',
    {
      name: 'The Intercept',
      url: 'https://theintercept.com/',
      est: 2014,
      about:
        'The Intercept is a media outlet that covers topics such as politics, national security, justice, and technology with a focus on exposing corruption and injustice.',
      description: [],
      emos: ['📰', '🇺🇸'],
      langs: ['en'],
      logoWidth: 600,
      logoHeight: 51,
      tags: [],
      headerBG: '#FFFFFF',
      primaryColor: '#00000',
    },
  ],
  [
    'US_WNBC',
    {
      name: 'NBC New York',
      url: 'https://www.nbcnewyork.com/',
      est: 1928,
      about:
        'New York News, Local News, Weather, Traffic, Entertainment, Breaking News.',
      description: [],
      emos: ['📰', '🇺🇸'],
      langs: ['en'],
      logoWidth: 600,
      logoHeight: 51,
      tags: [],
      headerBG: '#FFFFFF',
      primaryColor: '#00000',
    },
  ],
  [
    'US_AB13',
    {
      name: 'ABC 13',
      url: 'https://abc13.com/',
      est: 1954,
      about:
        'Houston news, weather and traffic - Latest Texas news and weather.',
      description: [],
      emos: ['📰', '🇺🇸'],
      langs: ['en'],
      logoWidth: 600,
      logoHeight: 51,
      tags: [],
      headerBG: '#FFFFFF',
      primaryColor: '#00000',
    },
  ],
  [
    'US_KXAN',
    {
      name: 'KXAN',
      url: 'https://www.kxan.com/',
      est: 1965,
      about:
        'Local TV station that covers Austin, TX news, weather, traffic and local stories.',
      description: [],
      emos: ['📰', '🇺🇸'],
      langs: ['en'],
      logoWidth: 600,
      logoHeight: 51,
      tags: [],
      headerBG: '#FFFFFF',
      primaryColor: '#00000',
    },
  ],
  [
    'US_KDVR',
    {
      name: 'KDVR',
      url: 'https://kdvr.com/',
      est: 1994,
      about:
        'Local TV stations in Denver, Colorado, that cover news, weather, sports and entertainment stories.',
      description: [],
      emos: ['📰', '🇺🇸'],
      langs: ['en'],
      logoWidth: 600,
      logoHeight: 51,
      tags: [],
      headerBG: '#FFFFFF',
      primaryColor: '#00000',
    },
  ],
  [
    'US_KNBC',
    {
      name: 'KNBC',
      url: 'https://www.nbclosangeles.com/',
      est: 1949,
      about:
        'Television station in Los Angeles, California, United States, serving as the West Coast flagship of the NBC network.',
      description: [],
      emos: ['📰', '🇺🇸'],
      langs: ['en'],
      logoWidth: 600,
      logoHeight: 51,
      tags: [],
      headerBG: '#FFFFFF',
      primaryColor: '#00000',
    },
  ],
  [
    'US_BOSH',
    {
      name: 'Boston Herald',
      url: 'https://www.bostonherald.com/',
      est: 1846,
      about:
        'The Boston Herald is the leading source of breaking news, local news, sports, politics, entertainment, opinion and weather in Boston, Massachusetts.',
      description: [],
      emos: ['📰', '🇺🇸'],
      langs: ['en'],
      logoWidth: 600,
      logoHeight: 51,
      tags: [],
      headerBG: '#FFFFFF',
      primaryColor: '#00000',
    },
  ],
  [
    'US_AUTO',
    {
      name: 'Automotive News',
      url: 'https://www.autonews.com/',
      est: 1925,
      about:
        'Automotive News is the leading source of news about the global automotive industry.',
      description: [],
      emos: ['📰', '🇺🇸'],
      langs: ['en'],
      logoWidth: 600,
      logoHeight: 51,
      tags: [],
      headerBG: '#FFFFFF',
      primaryColor: '#00000',
    },
  ],
  [
    'US_KDVR',
    {
      name: 'KDVR',
      url: 'https://kdvr.com/',
      est: 1983,
      about:
        'A television station in Denver, Colorado, United States, affiliated with the Fox network.',
      description: [],
      emos: ['📰', '🇺🇸'],
      langs: ['en'],
      logoWidth: 600,
      logoHeight: 51,
      tags: [],
      headerBG: '#FFFFFF',
      primaryColor: '#00000',
    },
  ],
  [
    'US_ABC7',
    {
      name: 'ABC 7 News',
      url: 'https://abc7news.com/',
      est: 1949,
      about:
        "The Bay Area's source for breaking news, weather and live video. Covering San Francisco, Oakland, San Jose and all of the greater Bay Area.",
      description: [],
      emos: ['📰', '🇺🇸'],
      langs: ['en'],
      logoWidth: 600,
      logoHeight: 51,
      tags: [],
      headerBG: '#FFFFFF',
      primaryColor: '#00000',
    },
  ],
  [
    'US_NDFW',
    {
      name: 'KXAS',
      url: 'https://www.nbcdfw.com/',
      est: 1948,
      about:
        'Dallas-Fort Worth News, Weather, Sports, Lifestyle, and Traffic. Covering North Texas from NBC 5. Feel connected to the entire Dallas-Fort Worth area with NBC 5. Local news, weather, traffic, and sports from NBC 5, serving Dallas-Fort Worth, Texas.',
      description: [],
      emos: ['📰', '🇺🇸'],
      langs: ['en'],
      logoWidth: 600,
      logoHeight: 51,
      tags: [],
      headerBG: '#FFFFFF',
      primaryColor: '#00000',
    },
  ],
  [
    'US_NBCW',
    {
      name: 'WRC',
      url: 'https://www.nbcwashington.com/',
      est: 1947,
      about:
        'Washington DC News, Maryland News, Virginia News, Local News, Weather, Traffic, Entertainment, Breaking News.',
      description: [],
      emos: ['📰', '🇺🇸'],
      langs: ['en'],
      logoWidth: 600,
      logoHeight: 51,
      tags: [],
      headerBG: '#FFFFFF',
      primaryColor: '#00000',
    },
  ],
  [
    'US_ADH',
    {
      name: 'The Austin Daily Herald',
      url: 'https://www.austindailyherald.com/',
      est: 1891,
      about:
        'Austin Minnesota breaking news, weather, obituaries, classifieds, sports, and Austin Packers news.',
      description: [],
      emos: ['📰', '🇺🇸'],
      langs: ['en'],
      logoWidth: 600,
      logoHeight: 51,
      tags: [],
      headerBG: '#FFFFFF',
      primaryColor: '#00000',
    },
  ],
  [
    'US_DLYH',
    {
      name: 'Daily Herald',
      url: 'https://www.dailyherald.com/',
      est: 1871,
      about: 'Suburban Chicago&#039;s Information Source.',
      description: [],
      emos: ['📰', '🇺🇸'],
      langs: ['en'],
      logoWidth: 600,
      logoHeight: 51,
      tags: [],
      headerBG: '#FFFFFF',
      primaryColor: '#00000',
    },
  ],
  [
    'US_TVV',
    {
      name: 'The Village Voice',
      url: 'https://www.villagevoice.com/',
      est: 1955,
      about:
        'Since 1955, the Village Voice has featured award-winning coverage of the culture, politics, and street life of New York City.',
      description: [],
      emos: ['📰', '🇺🇸'],
      langs: ['en'],
      logoWidth: 600,
      logoHeight: 51,
      tags: [],
      headerBG: '#FFFFFF',
      primaryColor: '#00000',
    },
  ],
  [
    'US_FOX5',
    {
      name: 'KSWB',
      url: 'https://fox5sandiego.com/',
      est: 1983,
      about:
        'Get the latest San Diego news, breaking news, weather, traffic, sports, entertainment and video from fox5sandiego.com. Watch newscasts from FOX 5/KSWB and KUSI.',
      description: [],
      emos: ['📰', '🇺🇸'],
      langs: ['en'],
      logoWidth: 600,
      logoHeight: 51,
      tags: [],
      headerBG: '#FFFFFF',
      primaryColor: '#00000',
    },
  ],
  [
    'US_FOX2',
    {
      name: 'KTVI',
      url: 'https://fox2now.com/',
      est: 1953,
      about:
        'Stories about St. Louis news, weather, and sports. Check the radar, school closings, and election results. Local reports for Missouri and Illinois.',
      description: [],
      emos: ['📰', '🇺🇸'],
      langs: ['en'],
      logoWidth: 600,
      logoHeight: 51,
      tags: [],
      headerBG: '#FFFFFF',
      primaryColor: '#00000',
    },
  ],
  [
    'US_NBCP',
    {
      name: 'WCAU',
      url: 'https://www.nbcphiladelphia.com/',
      est: 1946,
      about:
        'Philadelphia News, Local News, Weather, Traffic, Entertainment, and Breaking News.',
      description: [],
      emos: ['📰', '🇺🇸'],
      langs: ['en'],
      logoWidth: 600,
      logoHeight: 51,
      tags: [],
      headerBG: '#FFFFFF',
      primaryColor: '#00000',
    },
  ],
  [
    'US_CHRD',
    {
      name: 'Chicago Reader',
      url: 'https://chicagoreader.com/',
      est: 1971,
      about:
        "Chicago's alternative nonprofit newsroom. City Life, News & Investigations, Columns & Opinion, Music, Arts & Culture, Film, Food & Drink. Things to do. Nonprofit Guide. Online and print advertising opportunities.",
      description: [],
      emos: ['📰', '🇺🇸'],
      langs: ['en'],
      logoWidth: 600,
      logoHeight: 51,
      tags: [],
      headerBG: '#FFFFFF',
      primaryColor: '#00000',
    },
  ],
  [
    'US_WSVN',
    {
      name: 'WSVN',
      url: 'https://wsvn.com/',
      est: 1956,
      about:
        'WSVN 7News is a local news station that covers Miami-Dade and Broward counties in Florida.',
      description: [],
      emos: ['📰', '🇺🇸'],
      langs: ['en'],
      logoWidth: 600,
      logoHeight: 51,
      tags: [],
      headerBG: '#FFFFFF',
      primaryColor: '#00000',
    },
  ],
  [
    'US_MTRT',
    {
      name: 'Detroit Metro Times',
      url: 'https://www.metrotimes.com/',
      est: 1980,
      about:
        'Detroit Metro Times is your free source for Detroit and Michigan news, arts and culture coverage, restaurant reviews, music, things to do, photos, and more.',
      description: [],
      emos: ['📰', '🇺🇸'],
      langs: ['en'],
      logoWidth: 600,
      logoHeight: 51,
      tags: [],
      headerBG: '#FFFFFF',
      primaryColor: '#00000',
    },
  ],
  [
    'US_NBCM',
    {
      name: 'WTVJ',
      url: 'https://www.nbcmiami.com/',
      est: 1949,
      about:
        'NBC 6 South Florida | NBC 6 South Florida - Local News, Weather, Traffic, Entertainment, Events, Breaking News.',
      description: [],
      emos: ['📰', '🇺🇸'],
      langs: ['en'],
      logoWidth: 600,
      logoHeight: 51,
      tags: [],
      headerBG: '#FFFFFF',
      primaryColor: '#00000',
    },
  ],
  [
    'US_WIVB',
    {
      name: 'WIVB',
      url: 'https://www.wivb.com/',
      est: 1948,
      about:
        "WIVB News 4 Buffalo is your source for Western New York's local news, weather and sports. News 4 is here for you with breaking news and weather coverage.",
      description: [],
      emos: ['📰', '🇺🇸'],
      langs: ['en'],
      logoWidth: 600,
      logoHeight: 51,
      tags: [],
      headerBG: '#FFFFFF',
      primaryColor: '#00000',
    },
  ],
  [
    'US_WHDH',
    {
      name: 'WHDH',
      url: 'https://whdh.com/',
      est: 1982,
      about:
        'An independent television station in Boston, Massachusetts, United States.',
      description: [],
      emos: ['📰', '🇺🇸'],
      langs: ['en'],
      logoWidth: 600,
      logoHeight: 51,
      tags: [],
      headerBG: '#FFFFFF',
      primaryColor: '#00000',
    },
  ],
  [
    'US_NW10',
    {
      name: 'News 10',
      url: 'https://www.news10.com/',
      est: 1945,
      about:
        'An ABC television network affiliate serving Albany, Schenectady, Troy, Saratoga and surrounding communities.',
      description: [],
      emos: ['📰', '🇺🇸'],
      langs: ['en'],
      logoWidth: 600,
      logoHeight: 51,
      tags: [],
      headerBG: '#FFFFFF',
      primaryColor: '#00000',
    },
  ],
  [
    'US_RFT',
    {
      name: 'Riverfront Times',
      url: 'https://www.riverfronttimes.com/',
      est: 1977,
      about:
        'St. Louis Riverfront Times is your free source for St. Louis and Missouri news, arts and culture coverage, restaurant reviews, music, things to do, photos, and more.',
      description: [],
      emos: ['📰', '🇺🇸'],
      langs: ['en'],
      logoWidth: 600,
      logoHeight: 51,
      tags: [],
      headerBG: '#FFFFFF',
      primaryColor: '#00000',
    },
  ],
  [
    'US_MNPT',
    {
      name: 'MinnPost',
      url: 'https://www.minnpost.com/',
      est: 2007,
      about:
        'Latest headlines from around Minnesota. Nonprofit, independent journalism. Supported by readers.',
      description: [],
      emos: ['📰', '🇺🇸'],
      langs: ['en'],
      logoWidth: 600,
      logoHeight: 51,
      tags: [],
      headerBG: '#FFFFFF',
      primaryColor: '#00000',
    },
  ],
  [
    'US_TMSD',
    {
      name: 'Times of San Diego',
      url: 'https://timesofsandiego.com/',
      est: 2014,
      about:
        'An independent online news site covering the fifth most populous county in the United States. We strive to be timely, transparent, & complete.',
      description: [],
      emos: ['📰', '🇺🇸'],
      langs: ['en'],
      logoWidth: 600,
      logoHeight: 51,
      tags: [],
      headerBG: '#FFFFFF',
      primaryColor: '#00000',
    },
  ],
  [
    'US_NYSN',
    {
      name: 'The New York Sun',
      url: 'https://www.nysun.com/',
      est: 2002,
      about:
        'The New York Sun covers America and the world from a base in New York. Its report comprises straightforward news dispatches and a lively editorial page.',
      description: [],
      emos: ['📰', '🇺🇸'],
      langs: ['en'],
      logoWidth: 600,
      logoHeight: 51,
      tags: [],
      headerBG: '#FFFFFF',
      primaryColor: '#00000',
    },
  ],
  [
    'US_TXOB',
    {
      name: 'The Texas Observer',
      url: 'https://www.texasobserver.org/',
      est: 1954,
      about:
        'The Texas Observer is a nonprofit news organization known for its independent, investigative reporting, narrative storytelling, and cultural criticism.',
      description: [],
      emos: ['📰', '🇺🇸'],
      langs: ['en'],
      logoWidth: 600,
      logoHeight: 51,
      tags: [],
      headerBG: '#FFFFFF',
      primaryColor: '#00000',
    },
  ],
  [
    'US_PUBR',
    {
      name: 'The Published Reporter',
      url: 'https://www.publishedreporter.com/',
      est: 2019,
      about:
        'The Published Reporter is a news and media outlet which focuses on breaking news and top stories of the Globe and the United States covering topics like Politics, Technology, Business, Environment, Health and the Auto Industry.',
      description: [],
      emos: ['📰', '🇺🇸'],
      langs: ['en'],
      logoWidth: 600,
      logoHeight: 51,
      tags: [],
      headerBG: '#FFFFFF',
      primaryColor: '#00000',
    },
  ],
  [
    'US_MTN',
    {
      name: 'Miami Today',
      url: 'https://www.miamitodaynews.com/',
      est: 1983,
      about:
        'News of Miami, Florida. Focus on business, international trade, real estate and development, e-commerce.',
      description: [],
      emos: ['📰', '🇺🇸'],
      langs: ['en'],
      logoWidth: 600,
      logoHeight: 51,
      tags: [],
      headerBG: '#FFFFFF',
      primaryColor: '#00000',
    },
  ],
  [
    'US_WGNT',
    {
      name: 'WGN TV',
      url: 'https://wgntv.com/',
      est: 1948,
      about:
        "Chicago's Very Own source for breaking news, weather, sports and entertainment.",
      description: [],
      emos: ['📰', '🇺🇸'],
      langs: ['en'],
      logoWidth: 600,
      logoHeight: 51,
      tags: [],
      headerBG: '#FFFFFF',
      primaryColor: '#00000',
    },
  ],
  [
    'US_WTOP',
    {
      name: 'WTOP FM',
      url: 'https://wtop.com/',
      est: 1948,
      about:
        "WTOP delivers the latest news, traffic and weather information to the Washington, D.C. region. See today's top stories.",
      description: [],
      emos: ['📰', '🇺🇸'],
      langs: ['en'],
      logoWidth: 600,
      logoHeight: 51,
      tags: [],
      headerBG: '#FFFFFF',
      primaryColor: '#00000',
    },
  ],
  [
    'US_SPI',
    {
      name: 'Seattle Post-Intelligencer',
      url: 'https://seattlepi.com',
      est: 1863,
      about:
        'Seattle local news, traffic, weather, business news, sports, real estate, photos and events.',
      description: [],
      emos: ['📰', '🇺🇸'],
      langs: ['en'],
      logoWidth: 600,
      logoHeight: 51,
      tags: [],
      headerBG: '#FFFFFF',
      primaryColor: '#00000',
    },
  ],
  [
    'US_BLPN',
    {
      name: 'Billy Penn',
      url: 'https://billypenn.com/',
      est: 2014,
      about:
        'A member-supported news team bringing you everything from politics to neighborhoods, history, sports, food and fun.',
      description: [],
      emos: ['📰', '🇺🇸'],
      langs: ['en'],
      logoWidth: 600,
      logoHeight: 51,
      tags: [],
      headerBG: '#FFFFFF',
      primaryColor: '#00000',
    },
  ],
  [
    'US_PREN',
    {
      name: 'The Press-Enterprise',
      url: 'https://www.pressenterprise.com/',
      est: 1878,
      about:
        'Award-winning staff covering local news from Riverside County, CA, California and national news, sports, things to do, and business in the Inland Empire.',
      description: [],
      emos: ['📰', '🇺🇸'],
      langs: ['en'],
      logoWidth: 600,
      logoHeight: 51,
      tags: [],
      headerBG: '#FFFFFF',
      primaryColor: '#00000',
    },
  ],
  [
    'US_NWRP',
    {
      name: 'The New Republic',
      url: 'https://newrepublic.com',
      est: 1914,
      about:
        "The New Republic is a media organization dedicated to addressing today's most critical issues.",
      description: [],
      emos: ['📰', '🇺🇸'],
      langs: ['en'],
      logoWidth: 600,
      logoHeight: 51,
      tags: [],
      headerBG: '#FFFFFF',
      primaryColor: '#00000',
    },
  ],
  [
    'US_WP',
    {
      name: 'Washington Post',
      url: 'https://www.washingtonpost.com/',
      est: 1877,
      about:
        'Breaking news, live coverage, investigations, analysis, video, photos and opinions from The Washington Post. Subscribe for the latest on U.S. and international news, politics, business, technology, climate change, health and wellness, sports, science, weather, lifestyle and more.',
      description: [],
      emos: ['📰', '🇺🇸'],
      langs: ['en'],
    },
  ],
  [
    'US_VOX',
    {
      name: 'Vox',
      url: 'https://www.vox.com/',
      est: 2014,
      about:
        'Vox is a general interest news site for the 21st century. Its mission: to help everyone understand our complicated world, so that we can all help shape it. In text, video and audio, our reporters explain politics, policy, world affairs, technology, culture, science, the climate crisis, money, health and everything else that matters. Our goal is to ensure that everyone, regardless of income or status, can access accurate information that empowers them.',
      description: [],
      emos: ['📰', '🇺🇸'],
      langs: ['en'],
    },
  ],
  [
    'US_VOX',
    {
      name: 'Vox',
      url: 'https://www.vox.com/',
      est: 2014,
      about:
        'Vox is a general interest news site for the 21st century. Its mission: to help everyone understand our complicated world, so that we can all help shape it. In text, video and audio, our reporters explain politics, policy, world affairs, technology, culture, science, the climate crisis, money, health and everything else that matters. Our goal is to ensure that everyone, regardless of income or status, can access accurate information that empowers them.',
      description: [],
      emos: ['📰', '🇺🇸'],
      langs: ['en'],
    },
  ],
  [
    'US_VICE',
    {
      name: 'Vice News',
      url: 'https://www.vice.com/',
      est: 2013,
      about: 'The definitive guide to enlightening information.',
      description: [],
      emos: ['📰', '🇺🇸'],
      langs: ['en'],
    },
  ],
  [
    'US_TYTI',
    {
      name: 'TYT Investigates',
      url: 'https://tyt.com/reports/investigates',
      est: 2016,
      about:
        'TYT Investigates is a news organization that reports on stories that matter.',
      description: [],
      emos: ['📰', '🇺🇸'],
      langs: ['en'],
    },
  ],
  [
    'US_TYT',
    {
      name: 'The Young Turks',
      url: 'https://tyt.com',
      est: 2002,
      about: 'The largest online news show in the world.',
      description: [],
      emos: ['📰', '🇺🇸'],
      langs: ['en'],
    },
  ],
  [
    'US_DWIR',
    {
      name: 'The Daily Wire',
      url: 'https://www.dailywire.com/',
      est: 2015,
      about:
        'Daily coverage of the latest news and important stories in politics, culture, education, and sports.',
      description: [],
      emos: ['📰', '🇺🇸'],
      langs: ['en'],
    },
  ],
  [
    'US_COWN',
    {
      name: 'Candace Owens',
      url: 'https://candaceowens.com/',
      est: 2015,
      about:
        'Connect with Candace and other members of Candace Owens community.',
      description: [],
      emos: ['📰', '🇺🇸'],
      langs: ['en'],
    },
  ],
  [
    'US_PBSN',
    {
      name: 'PBS NewsHour',
      url: 'https://www.pbs.org/newshour/',
      est: 1975,
      about:
        "The PBS NewsHour is an American daily evening television news program that is broadcast on the Public Broadcasting Service (PBS), airing seven nights a week on more than 350 of the public broadcaster's member stations.",
      description: [],
      emos: ['📰', '🇺🇸'],
      langs: ['en'],
    },
  ],
  [
    'US_BLOM',
    {
      name: 'Bloomberg Quicktake',
      url: 'https://www.bloomberg.com/Quicktake',
      est: 2017,
      about: 'News explainers for a world in flux.',
      description: [],
      emos: ['📰', '🇺🇸'],
      langs: ['en'],
    },
  ],
  [
    'US_NPR',
    {
      name: 'NPR',
      url: 'https://www.npr.org/',
      est: 1970,
      about:
        'Top stories in the U.S. and world news, politics, health, science, business, music, arts and culture. Nonprofit journalism with a mission.',
      description: [],
      emos: ['📰', '🇺🇸'],
      langs: ['en'],
    },
  ],
  [
    'US_RL',
    {
      name: 'RealLifeLore',
      url: 'https://www.youtube.com/@RealLifeLore',
      est: 2015,
      about:
        'RealLifeLore is a YouTube channel that creates videos about geography, history, and science.',
      description: [],
      emos: ['📰', '🇺🇸'],
      langs: ['en'],
    },
  ],
  [
    'US_JRE',
    {
      name: 'Joe Rogan Experience',
      url: 'https://spoti.fi/JoeRoganExperience',
      est: 2009,
      about:
        'The Joe Rogan Experience podcast is a long form conversation hosted by comedian Joe Rogan with friends and guests that have included comedians, actors, musicians, MMA fighters, authors, artists, and beyond.',
      description: [],
      emos: ['📰', '🇺🇸'],
      langs: ['en'],
    },
  ],
  [
    'US_MHDP',
    {
      name: 'Mid Hudson Daily News',
      url: 'https://www.midhudsonnews.com/',
      est: 1999,
      about:
        "Mid Hudson News has been the Hudson Valley's news source since 1999. The news site and podcast feature breaking news, politics, crime, entertainment, and more.",
      description: [],
      emos: ['📰', '🇺🇸'],
      langs: ['en'],
    },
  ],
  [
    'US_TNA',
    {
      name: 'The New Abnormal',
      url: 'https://www.thedailybeast.com/',
      est: 2008,
      about:
        'The New Abnormal is a podcast hosted by Molly Jong-Fast and Rick Wilson that covers politics, media, and culture.',
      description: [],
      emos: ['📰', '🇺🇸'],
      langs: ['en'],
    },
  ],
  [
    'US_KFF',
    {
      name: "KFF Health News' 'What the Health?'",
      url: 'https://kffhealthnews.org/',
      est: 2017,
      about:
        "KFF Health News' 'What the Health?' is a podcast that covers health policy and politics.",
      description: [],
      emos: ['📰', '🇺🇸'],
      langs: ['en'],
    },
  ],
  [
    'US_DTN',
    {
      name: 'Daily Tech News Show',
      url: 'https://www.dailytechnewsshow.com/',
      est: 2014,
      about:
        'Daily Tech News Show is a podcast that covers technology news and analysis.',
      description: [],
      emos: ['📰', '🇺🇸'],
      langs: ['en'],
    },
  ],
  [
    'US_SWIN',
    {
      name: 'Swindled',
      url: 'https://swindledpodcast.com/',
      est: 2018,
      about:
        'Swindled is a podcast that tells stories of corporate greed, corruption, and scandal.',
      description: [],
      emos: ['🎙️', '🇺🇸'],
      langs: ['en'],
    },
  ],
  [
    'US_SLAT',
    {
      name: 'Slate',
      url: 'https://slate.com/',
      est: 1996,
      about:
        'Online magazine that covers current affairs, politics, and culture.',
      description: [],
      emos: ['📰', '🇺🇸'],
      langs: ['en'],
    },
  ],
  [
    'US_NWTY',
    {
      name: 'The Newsworthy',
      url: 'https://www.thenewsworthy.com/',
      est: 2017,
      about:
        'The Newsworthy is a daily news podcast that covers the day’s news in 10 minutes.',
      description: [],
      emos: ['🎙️', '🇺🇸'],
      langs: ['en'],
    },
  ],
  [
    'US_SKIM',
    {
      name: 'The Skimm',
      url: 'https://www.theskimm.com/',
      est: 2012,
      about:
        'The Skimm is a daily newsletter that simplifies the headlines for busy people.',
      description: [],
      emos: ['📰', '🇺🇸'],
      langs: ['en'],
    },
  ],
  [
    'US_WNYC',
    {
      name: 'WNYC',
      url: 'https://www.wnyc.org/',
      est: 1924,
      about:
        'WNYC is a public radio station that covers news, culture, and music.',
      description: [],
      emos: ['🎙️', '🇺🇸'],
      langs: ['en'],
    },
  ],
  [
    'US_NWYR',
    {
      name: 'The New Yorker',
      url: 'https://www.newyorker.com/',
      est: 1925,
      about:
        'The New Yorker is a weekly magazine that covers news, culture, and politics.',
      description: [],
      emos: ['📰', '🇺🇸'],
      langs: ['en'],
    },
  ],
  [
    'US_WGBH',
    {
      name: 'WGBH',
      url: 'https://www.wgbh.org/',
      est: 1951,
      about:
        'WGBH is a public radio station that covers news, culture, and music.',
      description: [],
      emos: ['🎙️', '🇺🇸'],
      langs: ['en'],
    },
  ],
  [
    'US_GLBD',
    {
      name: 'Global Dispatches',
      url: 'https://www.globaldispatches.org/',
      est: 2010,
      about:
        'Global Dispatches is a podcast that covers international affairs and foreign policy.',
      description: [],
      emos: ['🎙️', '🇺🇸'],
      langs: ['en'],
    },
  ],
  [
    'US_TRNN',
    {
      name: 'The Real News Network',
      url: 'https://therealnews.com/',
      est: 2007,
      about:
        'The Real News Network is a nonprofit news organization that covers news and analysis.',
      description: [],
      emos: ['📰', '🇺🇸'],
      langs: ['en'],
    },
  ],
  [
    'US_GLHN',
    {
      name: 'Goalhanger',
      url: 'https://www.goalhangerpodcasts.com',
      est: 2018,
      about:
        'Goalhanger is a podcast that covers sports, culture, and politics.',
      description: [],
      emos: ['🎙️', '🇺🇸'],
      langs: ['en'],
    },
  ],
]);
export const USNewsSourcesLength = USNewsSources.size;

export const TZNewsSources = new Map<string, NewsSource>([
  [
    'TZ_CTZN',
    {
      name: 'The Citizen',
      url: 'https://www.thecitizen.co.tz/',
      est: 1995,
      about:
        "The Citizen, one of Tanzania's most reputable newspapers, serves as a critical voice in East African journalism. With its comprehensive coverage of Tanzanian politics, business, society, and more, it offers readers an insightful look into the nation's events and broader regional implications.",
      description: [
        'Since its inception, The Citizen has established itself as a champion of balanced reporting in Tanzania. Its dedication to delivering factual, timely, and unbiased news has made it a cornerstone in Tanzanian journalism.',
        "In addition to its robust political and business sections, The Citizen brings to light cultural stories, societal commentaries, and features that reflect the diverse interests of its readership. From local happenings in Dar es Salaam to broader East African developments, it captures the essence of the region's dynamic socio-political landscape.",
        "The Citizen's commitment to digital journalism is evident in its online presence, which includes video segments that offer a more immersive news experience. Whether in print or online, The Citizen stands as a testament to the power of responsible journalism in shaping national conversations.",
        "Today, The Citizen remains unwavering in its mission to inform, educate, and inspire, staying true to its role as Tanzania's voice in the larger East African community.",
      ],
      emos: ['📰', '🇹🇿'],
      langs: ['en'],
      logoWidth: 496,
      logoHeight: 69,
      tags: [
        'TheCitizen',
        'Tanzania',
        'East African Journalism',
        'Politics',
        'Business',
        'Culture',
        'Society',
        'Local News',
        'Regional Developments',
        'Digital Journalism',
      ],
      socials: {
        video: 'https://www.thecitizen.co.tz/tanzania/video',
      },
      headerBG: '#fff',
      primaryColor: '#0071BD',
    },
  ],
  [
    'TZ_DYNW',
    {
      name: 'Daily News',
      url: 'https://www.dailynews.co.tz',
      est: 1972,
      about:
        "The Daily News is one of Tanzania's most trusted daily newspapers, offering insightful coverage on national politics, business, sports, and cultural affairs. As a prominent voice in Tanzanian media, it reflects the pulse of the nation and the East African region.",
      description: [
        "From its early days, the Daily News has been committed to delivering quality journalism, ensuring its readers stay well-informed about the evolving Tanzanian landscape. Through in-depth reports, analyses, and features, it provides a panoramic view of the nation's socio-economic and political dynamics.",
        'As the media industry has evolved, so has the Daily News. It proudly embraces digital journalism, offering its audience engaging multimedia content, from videos to podcasts, ensuring they have a well-rounded news experience. This commitment to innovation underlines its role as a leading news outlet in Tanzania.',
        "The Daily News is more than just a source of information; it's a platform for dialogue, education, and understanding. Through its comprehensive coverage, it fosters informed discussions on crucial national issues, promoting a more engaged and informed citizenry.",
        'Today, whether one is looking for the latest political developments in Dodoma, business trends in Dar es Salaam, or cultural narratives from across the country, the Daily News stands as the go-to source for all things Tanzanian.',
      ],
      emos: ['📰', '🇹🇿'],
      langs: ['en'],
      logoWidth: 243,
      logoHeight: 50,
      tags: [
        'DailyNews',
        'Tanzania',
        'Politics',
        'Business',
        'Sports',
        'Culture',
        'National Affairs',
        'Digital Journalism',
        'Podcasts',
        'Multimedia',
      ],
      socials: {
        video: 'https://dailynews.co.tz/daily-news-digital/',
        podcast: 'https://dailynews.co.tz/category/multimedia/podcast/',
        facebook: 'https://www.facebook.com/DailynewsTanzania',
        twitter: 'https://twitter.com/dailynewstz',
        youtube: 'https://www.youtube.com/c/DailyNewsDigital',
        instagram: 'https://instagram.com/dailynews_tz',
      },
      headerBG: '#fff',
      primaryColor: '#FF0000',
    },
  ],
  [
    'TZ_HLEO',
    {
      name: 'HabariLeo',
      url: 'https://habarileo.co.tz',
      est: 2007,
      about:
        "HabariLeo stands as one of Tanzania's prominent Swahili newspapers, delving deep into national news, sports, entertainment, and more. With a commitment to quality journalism, it captures the essence of Tanzanian life, ensuring its readers remain updated and informed.",
      description: [
        'Since its foundation, HabariLeo has made significant strides in Swahili journalism, setting standards with its rigorous reporting, comprehensive analyses, and engaging narratives.',
        'A part of the modern media landscape, HabariLeo has embraced the digital age wholeheartedly. From video news segments to enlightening podcasts, the newspaper ensures its audience enjoys a diverse multimedia experience, making news consumption both informative and enjoyable.',
        'Being a trusted source of information, HabariLeo plays a vital role in shaping public opinion, fostering constructive debates on issues of national importance, and celebrating Tanzanian culture and achievements.',
        'In a rapidly changing world, HabariLeo remains steadfast in its mission, serving as the bridge between Tanzanians and the news that matters most, cementing its place as a beloved national newspaper.',
      ],
      emos: ['📰', '🇹🇿'],
      langs: ['sw'],
      logoWidth: 243,
      logoHeight: 51,
      tags: [
        'HabariLeo',
        'Tanzania',
        'Swahili Journalism',
        'National News',
        'Entertainment',
        'Sports',
        'Culture',
        'Multimedia',
        'Digital News',
        'Podcasts',
      ],
      socials: {
        video: 'https://habarileo.co.tz/daily-news-digital/',
        podcast: 'https://habarileo.co.tz/category/podcast/',
        facebook: 'https://facebook.com/habarileo',
        twitter: 'https://twitter.com/HabariLeo',
        youtube: 'https://www.youtube.com/c/DailyNewsDigital',
        instagram: 'https://instagram.com/habarileo_tz',
      },
      headerBG: '#fff',
      primaryColor: '#007DC6',
    },
  ],
  [
    'TZ_MWST',
    {
      name: 'Mwana Spoti',
      url: 'https://www.mwanaspoti.co.tz/',
      est: 2001,
      about:
        'Mwana Spoti is a prominent Swahili-language newspaper in Tanzania, dedicated to providing up-to-date news, sports coverage, and relevant information to its readers. With a focus on quality journalism and insightful reporting, Mwana Spoti keeps its audience engaged and informed about the latest developments in sports, politics, culture, and more. Through its comprehensive coverage and thoughtful analysis, the newspaper contributes to shaping public opinion and fostering a deeper understanding of various issues within Tanzanian society. By offering a platform for diverse voices and perspectives, Mwana Spoti plays a vital role in the media landscape, connecting communities and providing a space for informed discourse.',
      description: [
        'As a leading source of news in Tanzania, Mwana Spoti aims to keep its readers well-informed and engaged with reliable and accurate reporting.',
        'Through its in-depth coverage of sports and other topics, the newspaper strives to capture the pulse of the nation and reflect the interests and concerns of its readership.',
        'With a commitment to journalistic integrity, Mwana Spoti serves as a reliable source of information, contributing to a more informed and connected society.',
      ],
      emos: ['📰', '🇹🇿'],
      langs: ['sw'],
      logoWidth: 120,
      logoHeight: 44,
      tags: ['MwanaSpoti', 'SwahiliNews', 'SportsCoverage', 'TanzanianMedia'],
      socials: {
        video: 'https://www.mwanaspoti.co.tz/ms/video',
        facebook: 'https://www.facebook.com/MwanaSpoti/',
        twitter: 'https://twitter.com/MwanaspotiTZ',
        instagram: 'https://www.instagram.com/mwanaspoti_tz/',
      },
      headerBG: '#fff',
      primaryColor: '#F5911E',
    },
  ],
  [
    'TZ_MWNC',
    {
      name: 'Mwananchi',
      url: 'https://www.mwananchi.co.tz/',
      est: 2000,
      about:
        'Mwananchi is a prominent Tanzanian newspaper that serves as a vital source of news, information, and insights for its readers. With a history dating back to the year 2000, the newspaper has played a pivotal role in keeping the Tanzanian public informed about local and international events, politics, business, culture, sports, and more.',
      description: [
        'Since its establishment, Mwananchi has been dedicated to delivering accurate, relevant, and reliable news coverage to its readership. Through its reporting, the newspaper aims to empower citizens with the knowledge they need to make informed decisions and actively participate in their society.',
        "Mwananchi's commitment to journalistic integrity and unbiased reporting has earned it a reputation as a trusted news source in Tanzania. Its coverage spans a wide range of topics, ensuring that readers are well-informed about key developments and trends that impact their lives.",
        'In addition to traditional print media, Mwananchi has embraced digital platforms to reach a broader audience. Its online presence includes video content, social media engagement, and multimedia reporting, reflecting its adaptability in the modern media landscape.',
      ],
      emos: ['📰', '🇹🇿'],
      langs: ['sw'],
      logoWidth: 120,
      logoHeight: 44,
      tags: ['Mwananchi', 'TanzanianNews', 'Media', 'Journalism'],
      socials: {
        video: 'https://www.mwananchi.co.tz/mw/video',
        facebook: 'https://www.facebook.com/MwananchiNews/',
        twitter: 'https://twitter.com/MwananchiNews/',
        youtube: 'https://www.youtube.com/@Mwananchidigital',
        instagram: 'https://www.instagram.com/mwananchi_official/',
      },
      headerBG: '#fff',
      primaryColor: '#E61E23',
    },
  ],
]);
export const TZNewsSourcesLength = TZNewsSources.size;

export const ZWNewsSources = new Map<string, NewsSource>([
  [
    'ZW_3MOB',
    {
      name: 'Three Men On a Boat',
      url: 'https://3-mob.com/',
      est: 2008,
      about:
        "Three Men On a Boat is an existential analysis where humanity thinks it is going. It is skulduggery and pin-point cutting edge summary of thoughts. The boat is not on water, or is it? Or maybe it is. We don't know. What is a boat. Well. It is a boat. Boat is a good word…",
      description: [],
      emos: ['📰', '🇿🇼'],
      langs: ['en'],
      tags: [
        'ThreeMenOnaBoat',
        'Zimbabwe',
        'News',
        'Entertainment',
        'Lifestyle',
        'Culture',
        'Technology',
        'SocialMedia',
        'Podcasts',
        'Videos',
      ],
      socials: {
        facebook: 'https://www.facebook.com/ThreeMenOnaBoat/',
        twitter: 'https://twitter.com/ThreeMenOnaBoat',
        instagram: 'https://www.instagram.com/3mobdotcom/',
        linkedin: 'https://www.linkedin.com/company/3-mob-com/',
        pinterest: 'https://www.pinterest.com/3mobcom/',
        reddit: 'https://www.reddit.com/user/3mobdotcom',
        youtube: 'https://www.youtube.com/c/3mobcom',
        telegram: 'https://t.me/threemob',
      },
      headerBG: '#fff',
      primaryColor: '#0071BD',
    },
  ],
  [
    'ZW_HRLD',
    {
      name: 'The Herald',
      url: 'https://www.herald.co.zw/',
      est: 1892,
      about: "Zimbabwe's largest daily newspaper.",
      description: [],
      emos: ['📰', '🇿🇼'],
      langs: ['en'],
      tags: [
        'TheHerald',
        'Zimbabwe',
        'News',
        'Politics',
        'Business',
        'Sports',
        'Entertainment',
        'Culture',
        'Lifestyle',
        'DigitalMedia',
      ],
      socials: {
        rss: 'https://www.herald.co.zw/feed/',
        facebook: 'https://www.facebook.com/TheHeraldZimbabwe',
        twitter: 'https://twitter.com/HeraldZimbabwe',
        instagram: 'https://www.instagram.com/heraldzimbabwe/',
      },
    },
  ],
  [
    'ZW_SUNM',
    {
      name: 'The Sunday Mail',
      url: 'https://www.sundaymail.co.zw/',
      est: 1892,
      about: 'The Leading Family Newspaper in Zimbabwe.',
      description: [],
      emos: ['📰', '🇿🇼'],
      langs: ['en'],
      tags: [
        'TheSundayMail',
        'Zimbabwe',
        'News',
        'Politics',
        'Business',
        'Sports',
        'Entertainment',
        'Culture',
        'Lifestyle',
        'DigitalMedia',
      ],
      socials: {
        facebook: 'https://www.facebook.com/TheSundayMailZimbabwe',
        twitter: 'https://twitter.com/SundayMailZim',
      },
    },
  ],
  [
    'ZW_ALL',
    {
      name: 'All In Zimbabwe',
      url: 'https://www.allinzimbabwe.com/',
      est: 2018,
      about:
        'Zimbabwe news headlines and breaking news of Zimbabwe.The best online Zimbabwean newspaper for the latest news and updates from Zimbabwe.',
      description: [],
      emos: ['📰', '🇿🇼'],
      langs: ['en'],
      socials: {
        facebook: 'https://www.facebook.com/allinzimbabwe/',
        twitter: 'https://twitter.com/AllinZimbabwe',
        instagram: 'https://www.instagram.com/allinzimbabwe/',
        youtube: 'https://www.youtube.com/@allinzimbabwe6891',
      },
    },
  ],
  [
    'ZW_B24',
    {
      name: 'Bulawayo24',
      url: 'https://bulawayo24.com/',
      est: 2010,
      about:
        "The Bulawayo and Zimbabwe's premier online news resource, with 24 hour coverage to bring you local and international news as it happens, when it happens.",
      description: [],
      emos: ['📰', '🇿🇼'],
      langs: ['en'],
      socials: {
        email: 'mailto:info@bulawayo24.com',
        twitter: 'https://twitter.com/Bulawayo24News',
        facebook: 'https://www.facebook.com/Bulawayo24News',
      },
    },
  ],
  [
    'ZW_BZDY',
    {
      name: 'Business Daily',
      url: 'http://www.businessdaily.co.zw/',
      est: 2013,
      about:
        "Zimbabwe's up to date business news website. Business Daily carries a selection of Business stories from Zimbabwean newspaper.",
      description: [],
      emos: ['📰', '🇿🇼'],
      langs: ['en'],
      socials: {
        email: 'mailto:ngonis@businessdaily.co.zw',
      },
    },
  ],
  [
    'ZW_BZWY',
    {
      name: 'Business Daily',
      url: 'https://www.businessweekly.co.zw/',
      est: 2008,
      about: 'Moving Business Ideas',
      description: [],
      emos: ['📰', '🇿🇼'],
      langs: ['en'],
      socials: {
        facebook: 'https://www.facebook.com/BusinessWeeklyZim/',
        twitter: 'https://twitter.com/BizWeeklyZim',
        youtube: 'https://www.youtube.com/user/Zimpapers',
      },
    },
  ],
  [
    'ZW_CHRN',
    {
      name: 'The Chronicle',
      url: 'https://www.chronicle.co.zw/',
      est: 1894,
      about: "Bulawayo's most popular daily newspaper",
      emos: ['📰', '🇿🇼'],
      langs: ['en'],
    },
  ],
  [
    'ZW_DLYN',
    {
      name: 'DailyNews',
      url: 'https://dailynews.co.zw/',
      est: 1999,
      about:
        "Zimbabwe's leading daily newspaper, a source of balanced and unbiased news on Zimbabwean issues. Politics, Business, Sport, Entertainment and Commentary; we have it all!",
      emos: ['📰', '🇿🇼'],
      langs: ['en'],
    },
  ],
  [
    'ZW_FNGZ',
    {
      name: 'The Financial Gazette',
      url: 'https://fingaz.co.zw/',
      est: 1969,
      about:
        "The Financial Gazette is Zimbabwe's leading business and financial daily newspaper.",
      emos: ['📰', '🇿🇼'],
      langs: ['en'],
    },
  ],
  [
    'ZW_HRPT',
    {
      name: 'Harare Post',
      url: 'https://www.hararepost.co.zw/en/',
      est: 2019,
      about:
        'The Harare Post is a Zimbabwean news website that provides the latest news and updates from Zimbabwe.',
      emos: ['📰', '🇿🇼'],
      langs: ['en'],
    },
  ],
  [
    'ZW_IHRR',
    {
      name: 'iHarare',
      url: 'https://iharare.com/',
      est: 2011,
      about: 'Zimbabwe News and Internet Marketing.',
      emos: ['📰', '🇿🇼'],
      langs: ['en'],
    },
  ],
  [
    'ZW_INZM',
    {
      name: 'The Insider',
      url: 'https://insiderzim.com/',
      est: 2003,
      about: 'News about Zimbabwe that you can use',
      emos: ['📰', '🇿🇼'],
      langs: ['en'],
    },
  ],
  [
    'ZW_MBRT',
    {
      name: 'Mbare Times',
      url: 'https://mbaretimes.com/',
      est: 2019,
      about:
        'Mbare Times is a Zimbabwean news website that provides the latest news and updates from Zimbabwe.',
      emos: ['📰', '🇿🇼'],
      langs: ['en'],
    },
  ],
  [
    'ZW_MYZW',
    {
      name: 'My Zimbabwe News',
      url: 'https://www.myzimbabwe.co.zw/',
      est: 2011,
      about:
        "My Zimbabwe News publishes Zimbabwe's latest news daily from Harare, Bulawayo and around Zimbabwe. We report latest political news, sports news, business and general news and updates.",
      emos: ['📰', '🇿🇼'],
      langs: ['en'],
    },
  ],
  [
    'ZW_NWZW',
    {
      name: 'New Zimbabwe',
      url: 'https://www.newzimbabwe.com/',
      est: 2009,
      about:
        "New Zimbabwe.com - The Zimbabwe News You Trust is Zimbabwe's leading online newspaper and published by New Zimbabwe Media Ltd.",
      emos: ['📰', '🇿🇼'],
      langs: ['en'],
    },
  ],
  [
    'ZW_NWZV',
    {
      name: 'New Zimbabwe Vision',
      url: 'http://newzimbabwevision.com/',
      est: 2014,
      about: 'Zimbabwe news, Africa news, World news.',
      emos: ['📰', '🇿🇼'],
      langs: ['en'],
    },
  ],
  [
    'ZW_NWDY',
    {
      name: 'NewsDay',
      url: 'https://www.newsday.co.zw/',
      est: 2010,
      about:
        "Zimbabwe's leading daily newspaper, a source of balanced and unbiased news on Zimbabwean issues.",
      emos: ['📰', '🇿🇼'],
      langs: ['en'],
    },
  ],
  [
    'ZW_NOTS',
    {
      name: 'News of the South',
      url: 'https://newsofthesouth.com/',
      est: 2013,
      about: 'Zimbabwean diaspora and Africa news website.',
      emos: ['📰', '🇿🇼'],
      langs: ['en'],
    },
  ],
  [
    'ZW_NWDZ',
    {
      name: 'NewsDzeZimbabwe',
      url: 'https://www.newsdzezimbabwe.co.uk/',
      est: 2013,
      about: 'Zimbabwe news, Africa news, World news.',
      emos: ['📰', '🇿🇼'],
      langs: ['en'],
    },
  ],
  [
    'ZW_TECZ',
    {
      name: 'Techzim',
      url: 'https://www.techzim.co.zw/',
      est: 2010,
      about: 'Zimbabwe and regional technology news and updates.',
      emos: ['📰', '🇿🇼'],
      langs: ['en'],
    },
  ],
  [
    'ZW_ZMWB',
    {
      name: 'The Zimbabwe Daily',
      url: 'https://www.thezimbabwedaily.com/',
      est: 2012,
      about: 'Zimbabwe news, Africa news, World news.',
      emos: ['📰', '🇿🇼'],
      langs: ['en'],
    },
  ],
  [
    'ZW_ZIMM',
    {
      name: 'ZiMetro News',
      url: 'https://zimetro.co.zw/',
      est: 2016,
      about: 'We believe in Truth | No favor, No Fear!',
      emos: ['📰', '🇿🇼'],
      langs: ['en'],
    },
  ],
  [
    'ZW_ZEYE',
    {
      name: 'ZimEye',
      url: 'https://www.zimeye.net/',
      est: 2010,
      about: 'Zimbabwe news, Africa news, World news.',
      emos: ['📰', '🇿🇼'],
      langs: ['en'],
    },
  ],
  [
    'ZW_ZWN',
    {
      name: 'Zw News Zimbabwe',
      url: 'https://zwnews.com/',
      est: 2001,
      about: 'Zimbabwe news, Africa news, World news.',
      emos: ['📰', '🇿🇼'],
      langs: ['en'],
    },
  ],
  [
    'ZW_BMTR',
    {
      name: 'B-Metro',
      url: 'https://bmetro.co.zw/',
      est: 2015,
      about: 'Catch this weeks hottest news with no delay.',
      emos: ['📰', '🇿🇼'],
      langs: ['en'],
    },
  ],
  [
    'ZW_TBC',
    {
      name: 'The Business Connect',
      url: 'http://www.thebusinessconnect.co.zw/',
      est: 2013,
      about: 'The Business Connect is a Zimbabwean business news website.',
      emos: ['📰', '🇿🇼'],
      langs: ['en'],
    },
  ],
  [
    'ZW_MNPT',
    {
      name: 'The Manica Post',
      url: 'https://www.manicapost.co.zw/',
      est: 1983,
      about: 'Hot News From The East.',
      emos: ['📰', '🇿🇼'],
      langs: ['en'],
    },
  ],
  [
    'ZW_MSVM',
    {
      name: 'Masvingo Mirror',
      url: 'https://masvingomirror.com/',
      est: 2013,
      about: 'Masvingo Mirror is a Zimbabwean news website.',
      emos: ['📰', '🇿🇼'],
      langs: ['en'],
    },
  ],
  [
    'ZW_MBWY',
    {
      name: 'My Bulawayo',
      url: 'http://www.mybulawayo.com/',
      est: 2013,
      about:
        'My Bulawayo is a dynamic online and offline project all about shining the spotlight on Bulawayo as a city and business community within Zimbabwe.',
      emos: ['📰', '🇿🇼'],
      langs: ['en'],
    },
  ],
  [
    'ZW_SEYE',
    {
      name: 'Southern Eye',
      url: 'https://www.southerneye.co.zw/',
      est: 2013,
      about:
        'Breaking news, news online, Zimbabwe news, world news, news video, weather, business, money, politics, law, technology, entertainment, education,health.',
      emos: ['📰', '🇿🇼'],
      langs: ['en'],
    },
  ],
  [
    'ZW_TZIM',
    {
      name: 'TellZim',
      url: 'https://tellzim.com/',
      est: 2010,
      about: 'The Voice of the People.',
      emos: ['📰', '🇿🇼'],
      langs: ['en'],
    },
  ],
  [
    'ZW_TIND',
    {
      name: 'The Zimbabwe Independent',
      url: 'https://www.theindependent.co.zw/',
      est: 2002,
      about: 'The Leading Business Weekly.',
      emos: ['📰', '🇿🇼'],
      langs: ['en'],
    },
  ],
  [
    'ZW_PTRT',
    {
      name: 'The Patriot',
      url: 'https://www.thepatriot.co.zw/',
      est: 2012,
      about: 'Celebrating Being Zimbabwean.',
      emos: ['📰', '🇿🇼'],
      langs: ['en'],
    },
  ],
  [
    'ZW_STND',
    {
      name: 'The Standard',
      url: 'https://www.thestandard.co.zw/',
      est: 1997,
      about: "Zimbabwe's Leading Sunday Newspaper.",
      emos: ['📰', '🇿🇼'],
      langs: ['en'],
    },
  ],
  [
    'ZW_SUNN',
    {
      name: 'The Sun',
      url: 'https://thesunnews.co.zw/',
      est: 2018,
      about:
        'A weekly private publication and the only paper in the country distributed in the following areas: Bulawayo- Matabeleland North and South Midlands.',
      emos: ['📰', '🇿🇼'],
      langs: ['en'],
    },
  ],
  [
    'ZW_TZWN',
    {
      name: 'The Zimbabwean',
      url: 'https://www.thezimbabwean.co/',
      est: 2013,
      about: 'The Zimbabwean - A Voice for the Voiceless.',
      emos: ['📰', '🇿🇼'],
      langs: ['en'],
    },
  ],
  [
    'ZW_ZMLV',
    {
      name: 'ZimLive',
      url: 'https://www.zimlive.com/',
      est: 2018,
      about: 'Zimbabwe news, Africa news, World news.',
      emos: ['📰', '🇿🇼'],
      langs: ['en'],
    },
  ],
  [
    'ZW_ZMMT',
    {
      name: 'Zim Metro',
      url: 'http://zimmetro.net/',
      est: 2016,
      about: 'Zimbabwe news, Africa news, World news.',
      emos: ['📰', '🇿🇼'],
      langs: ['en'],
    },
  ],
  [
    'ZW_TZM',
    {
      name: 'The Zimbabwe Mail',
      url: 'https://www.thezimbabwemail.com/',
      est: 2008,
      about: 'Leading Zimbabwe Daily News.',
      emos: ['📰', '🇿🇼'],
      langs: ['en'],
    },
  ],
  [
    'ZW_ZON',
    {
      name: 'Zimbabwe Online News',
      url: 'https://www.zimbabweonlinenews.com/',
      est: 2013,
      about: 'Breaking News General Industry National Sports National.',
      emos: ['📰', '🇿🇼'],
      langs: ['en'],
    },
  ],
  [
    'ZW_ZSIT',
    {
      name: 'Zimbabwe Situation',
      url: 'https://www.zimbabwesituation.com/',
      est: 2000,
      about: 'Zimbabwe news, Africa news, World news.',
      emos: ['📰', '🇿🇼'],
      langs: ['en'],
    },
  ],
  [
    'ZW_PZIM',
    {
      name: 'PaZimbabwe',
      url: 'https://www.pazimbabwe.com/',
      est: 2014,
      about:
        'News on Business, Entertainment, Sports, Technology, and Health & Fitness.',
      emos: ['📰', '🇿🇼'],
      langs: ['en'],
    },
  ],
]);
export const ZWNewsSourcesLength = ZWNewsSources.size;

export const FRNewsSources = new Map<string, NewsSource>([
  [
    'FR_FR24',
    {
      name: 'France 24',
      url: 'https://www.france24.com/',
      est: 2006,
      about:
        'Breaking news and world news from France 24 on Business, Sports, Culture. Video news. News from the US, Europe, Asia Pacific, Africa, Middle East, America.',
      description: [],
      emos: ['📰', '🇫🇷'],
      langs: ['en', 'fr', 'ar'],
    },
  ],
  [
    'FR_LMON',
    {
      name: 'Le Monde',
      url: 'https://www.lemonde.fr/',
      est: 1944,
      about:
        'Le Monde is a French daily afternoon newspaper founded by Hubert Beuve-Méry and continuously published in Paris since its first edition on 19 December 1944.',
      description: [],
      emos: ['📰', '🇫🇷'],
      langs: ['fr'],
    },
  ],
]);
export const FRNewsSourcesLength = FRNewsSources.size;

export const DENewsSources = new Map<string, NewsSource>([
  [
    'DE_DW',
    {
      name: 'Deutsche Welle',
      url: 'https://www.dw.com/',
      est: 1953,
      about:
        'DW (English) or Deutsche Welle Europe, is a news and information TV Station founded in 1953. This is the German version.',
      description: [],
      emos: ['📰', '🇩🇪'],
      langs: ['en', 'de'],
    },
  ],
]);
export const DENewsSourcesLength = DENewsSources.size;

export const QANewsSources = new Map<string, NewsSource>([
  [
    'QA_ALJ',
    {
      name: 'Al Jazeera',
      url: 'https://www.aljazeera.com/',
      est: 1996,
      about:
        'News, analysis from the Middle East and worldwide, multimedia and interactives, opinions, documentaries, podcasts, long reads and broadcast schedule.',
      description: [],
      emos: ['📰', '🇶🇦'],
      langs: ['en', 'ar'],
    },
  ],
]);
export const QANewsSourcesLength = QANewsSources.size;

export const MXNewsSources = new Map<string, NewsSource>([
  [
    'MX_UNI',
    {
      name: 'Univision',
      url: 'https://www.univision.com/',
      est: 1962,
      about:
        'Noticias de inmigración, política, resultados de la lotería de California, información de salud, entretenimiento y deportes, y el clima.',
      description: [],
      emos: ['📰', '🇲🇽'],
      langs: ['es'],
    },
  ],
  [
    'MX_EXLS',
    {
      name: 'Excélsior TV',
      url: 'https://www.excelsior.com.mx/',
      est: 1917,
      about:
        'Excélsior TV is a Mexican news television channel owned by Grupo Imagen. It provides news and information on national and international events.',
      description: [],
      emos: ['📰', '🇲🇽'],
      langs: ['es'],
    },
  ],
  [
    'MX_NMAS',
    {
      name: 'NMás',
      url: 'https://www.nmas.com.mx/',
      est: 2019,
      about:
        'NMás es un medio de comunicación digital que ofrece información veraz y oportuna sobre los hechos más relevantes de México y el mundo.',
      description: [],
      emos: ['📰', '🇲🇽'],
      langs: ['es'],
    },
  ],
]);
export const MXNewsSourcesLength = MXNewsSources.size;

export const IDNewsSources = new Map<string, NewsSource>([
  [
    'ID_CNN',
    {
      name: 'CNN Indonesia',
      url: 'https://www.cnnindonesia.com/',
      est: 2015,
      about:
        'CNNIndonesia.com menyajikan berita terkini Indonesia, dunia, bisnis, teknologi, hiburan, olahraga, profil dan travel.',
      description: [],
      emos: ['📰', '🇮🇩'],
      langs: ['id'],
    },
  ],
  [
    'ID_KOMP',
    {
      name: 'KompasTV',
      url: 'https://www.kompas.tv/',
      est: 2011,
      about:
        'Kompas TV adalah stasiun televisi swasta nasional di Indonesia yang berpusat di Jakarta. Kompas TV merupakan bagian dari grup Kompas Gramedia.',
      description: [],
      emos: ['📺', '🇮🇩'],
      langs: ['id'],
    },
  ],
  [
    'ID_TRIB',
    {
      name: 'Tribunnews',
      url: 'https://www.tribunnews.com/',
      est: 2008,
      about:
        'Tribunnews.com menyajikan berita terkini Indonesia, daerah, nasional, internasional, seleb, olahraga, teknologi, dan gaya hidup.',
      description: [],
      emos: ['📰', '🇮🇩'],
      langs: ['id'],
    },
  ],
]);
export const IDNewsSourcesLength = IDNewsSources.size;

export const AENewsSources = new Map<string, NewsSource>([
  [
    'AE_ARA',
    {
      name: 'Al Arabiya',
      url: 'https://www.alarabiya.net/',
      est: 2003,
      about:
        'Al Arabiya is a Saudi free-to-air television news channel broadcast in Modern Standard Arabic. The channel is based in Dubai and broadcasts to a pan-Arab audience.',
      description: [],
      emos: ['📰', '🇦🇪'],
      langs: ['ar'],
    },
  ],
]);
export const AENewsSourcesLength = AENewsSources.size;

export const ARNewsSources = new Map<string, NewsSource>([
  [
    'AR_TLN',
    {
      name: 'Telemundo',
      url: 'https://www.telemundo.com/',
      est: 1984,
      about:
        'Mira capítulos completos de tus programas favoritos de Telemundo y contenido exclusivo en Telemundo Now.',
      description: [],
      emos: ['📰', '🇦🇷'],
      langs: ['es'],
    },
  ],
  [
    'AR_CLAR',
    {
      name: 'Clarín',
      url: 'https://www.clarin.com/',
      est: 1945,
      about:
        'Clarín is the largest newspaper in Argentina and the second most circulated in the Spanish-speaking world. It is based in Buenos Aires.',
      description: [],
      emos: ['📰', '🇦🇷'],
      langs: ['es'],
    },
  ],
]);
export const ARNewsSourcesLength = ARNewsSources.size;

export const SGNewsSources = new Map<string, NewsSource>([
  [
    'SG_CNA',
    {
      name: 'Channel NewsAsia',
      url: 'https://www.channelnewsasia.com/',
      est: 1999,
      about:
        "Comprehensive news coverage of Asia-Pacific with special reports from Channel NewsAsia's foreign correspondents and regional news sources.",
      description: [],
      emos: ['📰', '🇸🇬'],
      langs: ['en'],
    },
  ],
  [
    'SG_ST',
    {
      name: 'The Straits Times',
      url: 'https://www.straitstimes.com/',
      est: 1845,
      about:
        'The Straits Times - Get latest breaking news, business, sports, lifestyle, tech & multimedia and more news in Singapore, Asia & rest of the world at straitstimes.com.',
      description: [],
      emos: ['📰', '🇸🇬'],
      langs: ['en'],
    },
  ],
]);
export const SGNewsSourcesLength = SGNewsSources.size;

export const NGNewsSources = new Map<string, NewsSource>([
  [
    'NG_CHAN',
    {
      name: 'Channels Television',
      url: 'https://www.channelstv.com/',
      est: 1992,
      about:
        'Channels Television is a leading 24-hour news channel broadcasting live from Lagos, Nigeria - West Africa. Our mission is to produce and broadcast television programs of quality and integrity that recognize and challenge the intelligence and curiosity of our viewers.',
      description: [],
      emos: ['📰', '🇳🇬'],
      langs: ['en'],
    },
  ],
  [
    'NG_ALMT',
    {
      name: 'Alimosho Today',
      url: 'https://www.alimoshotoday.com/',
      est: 2019,
      about:
        'Alimosho Today is a community news platform that provides news and information about Alimosho Local Government Area in Lagos State, Nigeria.',
      description: [],
      emos: ['📰', '🇳🇬'],
      langs: ['en'],
    },
  ],
  [
    'NG_OAPD',
    {
      name: 'The Open Africa Podcast',
      url: 'https://openafricapodcast.com/',
      est: 2020,
      about:
        'The Open Africa Podcast is a platform that showcases the best of Africa to the world. We tell the African story from the African perspective.',
      description: [],
      emos: ['📰', '🇳🇬'],
      langs: ['en'],
    },
  ],
  [
    'NG_TVC',
    {
      name: 'TVC News',
      url: 'https://www.tvcnews.tv/',
      est: 2012,
      about:
        'TVC News is a 24-hour pan-African News Channel offering a fresh perspective on African and world events.',
      description: [],
      emos: ['📰', '🇳🇬'],
      langs: ['en'],
    },
  ],
]);
export const NGNewsSourcesLength = NGNewsSources.size;

export const ZANewsSources = new Map<string, NewsSource>([
  [
    'ZA_ENCA',
    {
      name: 'eNCA',
      url: 'https://www.enca.com/',
      est: 2008,
      about:
        "eNCA is South Africa's most trusted independent TV and online news brand. It launched on June 1st, 2008 to become the country's first 24-hour television news service.",
      description: [],
      emos: ['📰', '🇿🇦'],
      langs: ['en'],
    },
  ],
  [
    'ZA_SABC',
    {
      name: 'SABC News',
      url: 'https://www.sabcnews.com/sabcnews/',
      est: 1936,
      about:
        'SABC News brings you the latest news from around South Africa and the world, together with multimedia from the SABC newsroom.',
      description: [],
      emos: ['📰', '🇿🇦'],
      langs: ['en'],
    },
  ],
]);
export const ZANewsSourcesLength = ZANewsSources.size;

export const JPNewsSources = new Map<string, NewsSource>([
  [
    'JP_NHKW',
    {
      name: 'NHK World',
      url: 'https://www3.nhk.or.jp/nhkworld/',
      est: 1998,
      about:
        "NHK World-Japan is the international service of Japan's public broadcaster, NHK. It provides news and information from Japan and Asia to a global audience.",
      description: [],
      emos: ['📰', '🇯🇵'],
      langs: ['en', 'ja'],
    },
  ],
  [
    'JP_ASSH',
    {
      name: 'The Asahi Shimbun',
      url: 'https://www.asahi.com/',
      est: 1879,
      about:
        'The Asahi Shimbun is widely regarded for its journalism as the most respected daily newspaper in Japan. The English version offers selected articles from the vernacular Asahi Shimbun.',
      description: [],
      emos: ['📰', '🇯🇵'],
      langs: ['ja'],
    },
  ],
]);
export const JPNewsSourcesLength = JPNewsSources.size;

export const KRNewsSources = new Map<string, NewsSource>([
  [
    'KR_YON',
    {
      name: 'Yonhap News Agency',
      url: 'https://en.yna.co.kr/',
      est: 1980,
      about:
        "Yonhap News Agency is South Korea's leading news agency, providing comprehensive coverage of both domestic and international news.",
      description: [],
      emos: ['📰', '🇰🇷'],
      langs: ['ko'],
    },
  ],
  [
    'KR_MBC',
    {
      name: 'MBC News',
      url: 'https://imnews.imbc.com/',
      est: 1961,
      about:
        'MBC News is a South Korean news website that provides the latest news and updates from South Korea.',
      description: [],
      emos: ['📰', '🇰🇷'],
      langs: ['ko'],
    },
  ],
]);
export const KRNewsSourcesLength = KRNewsSources.size;

export const CNNewsSources = new Map<string, NewsSource>([
  [
    'CN_CGTN',
    {
      name: 'CGTN',
      url: 'https://www.cgtn.com/',
      est: 2016,
      about:
        'CGTN (China Global Television Network) is an international media organization launched on December 31, 2016. It aims to provide objective and balanced news coverage.',
      description: [],
      emos: ['📰', '🇨🇳'],
      langs: ['en'],
    },
  ],
]);
export const CNNewsSourcesLength = CNNewsSources.size;

export const ESNewsSources = new Map<string, NewsSource>([
  [
    'ES_ELPA',
    {
      name: 'El País',
      url: 'https://elpais.com/',
      est: 1976,
      about:
        "El País is a Spanish-language daily newspaper published in Madrid. It is the most widely-circulated daily newspaper in Spain, and it is considered one of the country's newspapers of record.",
      description: [],
      emos: ['📰', '🇪🇸'],
      langs: ['es'],
    },
  ],
]);
export const ESNewsSourcesLength = ESNewsSources.size;

export const ITNewsSources = new Map<string, NewsSource>([
  [
    'IT_RAIN',
    {
      name: 'Rai News 24',
      url: 'https://www.rainews.it/',
      est: 1999,
      about:
        "Rai News 24 is Italy's 24-hour all-news state-owned television channel, broadcast on digital terrestrial television in Italy and via satellite worldwide.",
      description: [],
      emos: ['📰', '🇮🇹'],
      langs: ['it'],
    },
  ],
]);
export const ITNewsSourcesLength = ITNewsSources.size;

export const PLNewsSources = new Map<string, NewsSource>([
  [
    'PL_TVP',
    {
      name: 'TVP Info',
      url: 'https://www.tvp.info/',
      est: 2007,
      about:
        "TVP Info is a Polish free-to-air news channel, launched on 6 October 2007. It is part of Telewizja Polska (TVP), Poland's public broadcasting corporation.",
      description: [],
      emos: ['📰', '🇵🇱'],
      langs: ['pl'],
    },
  ],
]);
export const PLNewsSourcesLength = PLNewsSources.size;

export const KWNewsSources = new Map<string, NewsSource>([
  [
    'KW_ARAB',
    {
      name: 'Arab Times',
      url: 'https://www.arabtimesonline.com/',
      est: 1977,
      about:
        'Arab Times is a daily English-language newspaper published in Kuwait. The newspaper is one of the oldest English dailies in the Arab world.',
      description: [],
      emos: ['📰', '🇰🇼'],
      langs: ['en'],
    },
  ],
]);
export const KWNewsSourcesLength = KWNewsSources.size;

export const PFNewsSources = new Map<string, NewsSource>([
  [
    'PF_DPCH',
    {
      name: 'La Dépêche de Tahiti',
      url: 'https://www.ladepeche.pf/',
      est: 1964,
      about:
        'La Dépêche de Tahiti is a daily newspaper published in French Polynesia. It is the oldest newspaper in the territory and is published in French.',
      description: [],
      emos: ['📰', '🇵🇫'],
      langs: ['fr'],
    },
  ],
]);
export const PFNewsSourcesLength = PFNewsSources.size;

export const CKNewsSources = new Map<string, NewsSource>([
  [
    'CK_ISLN',
    {
      name: 'Cook Islands News',
      url: 'https://www.cookislandsnews.com/',
      est: 1963,
      about:
        'The Cook Islands News is a daily newspaper published in Rarotonga, the capital of the Cook Islands. It is the only daily newspaper in the country.',
      description: [],
      emos: ['📰', '🇨🇰'],
      langs: ['en'],
    },
  ],
]);
export const CKNewsSourcesLength = CKNewsSources.size;

export const TONewsSources = new Map<string, NewsSource>([
  [
    'TO_MTNG',
    {
      name: 'Matangi Tonga',
      url: 'https://matangitonga.to/',
      est: 2000,
      about:
        'Matangi Tonga is a Tongan news website that provides the latest news and updates from Tonga.',
      description: [],
      emos: ['📰', '🇹🇴'],
      langs: ['en'],
    },
  ],
]);
export const TONewsSourcesLength = TONewsSources.size;

export const ASNewsSources = new Map<string, NewsSource>([
  [
    'AS_SAMO',
    {
      name: 'Samoa News',
      url: 'https://www.samoanews.com/',
      est: 1984,
      about:
        "Samoa News is a Samoan newspaper published in Pago Pago, American Samoa. It is the territory's only newspaper and is published in English.",
      description: [],
      emos: ['📰', '🇦🇸'],
      langs: ['en'],
    },
  ],
]);
export const ASNewsSourcesLength = ASNewsSources.size;

export const BRNewsSources = new Map<string, NewsSource>([
  [
    'BR_G1',
    {
      name: 'g1',
      url: 'https://g1.globo.com/',
      est: 2006,
      about:
        'O G1 reúne notícias de todas as regiões do Brasil, com vídeos e fotos de qualidade e informações sobre tudo o que acontece no seu estado.',
      description: [],
      emos: ['📰', '🇧🇷'],
      langs: ['pt'],
    },
  ],
  [
    'BR_UOL',
    {
      name: 'UOL',
      url: 'https://www.uol.com.br/',
      est: 1996,
      about:
        'UOL, a maior empresa brasileira de conteúdo, serviços digitais e tecnologia com vários canais de jornalismo e diversas soluções para você ou seu negócio.',
      description: [],
      emos: ['📰', '🇧🇷'],
      langs: ['pt'],
    },
  ],
]);
export const BRNewsSourcesLength = BRNewsSources.size;

export const ILNewsSources = new Map<string, NewsSource>([
  [
    'IL_ILTV',
    {
      name: 'ILTV News',
      url: 'https://iltv.tv/',
      est: 2015,
      about:
        'ILTV is an English-language news and current affairs television channel based in Tel Aviv and broadcasting from Jaffa Port.',
      description: [],
      // tv emoji
      emos: ['📺', '🇮🇱'],
      langs: ['en'],
    },
  ],
  [
    'IL_INN',
    {
      name: 'Israel National News - Arutz Sheva',
      url: 'https://www.israelnationalnews.com',
      est: 1988,
      about:
        'The Israel National News Arutz Sheva website of the largest media group in the Jewish world, brings you news from Israel, the Diaspora, and the world - 24 hours a day. News, economy, culture, food, health, and more.',
      description: [],
      emos: ['📰', '🇮🇱'],
      langs: ['en'],
    },
  ],
  [
    'IL_KAN',
    {
      name: 'KAN News',
      url: 'https://www.kan.org.il/',
      est: 2017,
      about:
        'באתר כאן [תאגיד השידור הישראלי] מחכים לכם מגוון ענק של תכנים! חדשות בארץ ובעולם, תוכניות טלוויזיה מומלצות לצפייה ישירה, שידורים חיים, פודקאסטים, תחנות רדיו ועוד.',
      description: [],
      emos: ['📰', '🇮🇱'],
      langs: ['he'],
    },
  ],
  [
    'IL_YNET',
    {
      name: 'Ynet',
      url: 'https://www.ynet.co.il',
      est: 2000,
      about:
        'אתר החדשות המוביל בישראל מבית ידיעות אחרונות. סיקור מלא של חדשות מישראל והעולם, ספורט, כלכלה, תרבות, אוכל, מדע וטבע, כל מה שקורה וכל מה שמעניין ב ynet',
      description: [],
      emos: ['📰', '🇮🇱'],
      langs: ['he'],
    },
  ],
]);
export const ILNewsSourcesLength = ILNewsSources.size;

export const PSNewsSources = new Map<string, NewsSource>([
  [
    'PS_ALQD',
    {
      name: 'Al-Quds',
      url: 'https://www.alquds.com/',
      est: 1951,
      about:
        'جريدة القدس العربي "القدس العربي"، صحيفة عربية يومية مستقلة، تأسست في لندن في نيسان/أبريل 1989. تطبع في الوقت نفسه في لندن ونيويورك وفرانكفورت.',
      description: [],
      emos: ['📰', '🇵🇸'],
      langs: ['ar'],
    },
  ],
  [
    'PS_MAAN',
    {
      name: 'Maan News',
      url: 'https://www.maannews.net/',
      est: 2005,
      about: 'موقع اخباري فلسطيني يغطي الاحداث ساعة بساعة',
      description: [],
      emos: ['📰', '🇵🇸'],
      langs: ['ar'],
    },
  ],
]);
export const PSNewsSourcesLength = PSNewsSources.size;

export const BDNewsSources = new Map<string, NewsSource>([
  [
    'BD_SOMO',
    {
      name: 'Somoy TV',
      url: 'https://www.somoynews.tv/',
      est: 2011,
      about:
        'Somoy TV is a 24-hour Bengali news-based private satellite television channel. It started broadcasting in 2011.',
      description: [],
      emos: ['📰', '🇧🇩'],
      langs: ['bn'],
    },
  ],
  [
    'BD_JAMU',
    {
      name: 'Jamuna TV',
      url: 'https://jamuna.tv/',
      est: 2014,
      about:
        'Jamuna Television known as “Jamuna TV” is a 24-hour News Channel of Bangladesh. Jamuna Television was launched on April 5, 2014.',
      description: [],
      emos: ['📰', '🇧🇩'],
      langs: ['bn'],
    },
  ],
  [
    'BD_C24',
    {
      name: 'Channel 24',
      url: 'https://www.channel24bd.tv/',
      est: 2012,
      about:
        'Channel 24 is a News channel of Bangladesh. the station is created by ha-Mim group, one of the leading financial company in Bangladesh.',
      description: [],
      emos: ['📰', '🇧🇩'],
      langs: ['bn'],
    },
  ],
]);
export const BDNewsSourcesLength = BDNewsSources.size;

export const PHNewsSources = new Map<string, NewsSource>([
  [
    'PH_GMA',
    {
      name: 'GMA News',
      url: 'https://www.gmanetwork.com/news/',
      est: 1995,
      about:
        "GMA News Online is the official online news platform of GMA News, the Philippines' no. 1 TV network. It provides comprehensive coverage of the latest news and current events.",
      description: [],
      emos: ['📰', '🇵🇭'],
      langs: ['en', 'tl'],
    },
  ],
  [
    'PH_ABSC',
    {
      name: 'ABS-CBN News',
      url: 'https://news.abs-cbn.com/',
      est: 1986,
      about:
        'Get the latest news on the Philippines and the world: nation, business, entertainment, sports, global Filipino and lifestyle in text, video, and photos.',
      description: [],
      emos: ['📰', '🇵🇭'],
      langs: ['en', 'tl'],
    },
  ],
]);
export const PHNewsSourcesLength = PHNewsSources.size;

export const PKNewsSources = new Map<string, NewsSource>([
  [
    'PK_GEO',
    {
      name: 'Geo News',
      url: 'https://www.geo.tv/',
      est: 2002,
      about:
        'Geo News is a Pakistani news channel and part of the Jang Group of Newspapers. It was established in May 2002.',
      description: [],
      emos: ['📰', '🇵🇰'],
      langs: ['en', 'ur'],
    },
  ],
  [
    'PK_DAWN',
    {
      name: 'Dawn News TV',
      url: 'https://www.dawnnews.tv/',
      est: 2007,
      about:
        'Dawn News is one of Pakistan’s 24-hour Urdu news channel. Based in Karachi, the station is a subsidiary of Pakistan Herald Publications Limited (PHPL), Pakistan’s largest English-language media group.',
      description: [],
      emos: ['📰', '🇵🇰'],
      langs: ['en', 'ur'],
    },
  ],
]);
export const PKNewsSourcesLength = PKNewsSources.size;

export const KENewsSources = new Map<string, NewsSource>([
  [
    'KE_NTV',
    {
      name: 'NTV Kenya',
      url: 'https://ntvkenya.co.ke/news/',
      est: 2005,
      about:
        'NTV Kenya is the leading television broadcasting station covering a large part of Kenya and the region. NTV Kenya Turning On Your World.',
      description: [],
      emos: ['📰', '🇰🇪'],
      langs: ['en'],
    },
  ],
]);
export const KENewsSourcesLength = KENewsSources.size;

export const AllNewsSources = new Map<string, NewsSource>([
  ...CANewsSources.entries(),
  ...IENewsSources.entries(),
  ...INNewsSources.entries(),
  ...UKNewsSources.entries(),
  ...NZNewsSources.entries(),
  ...OZNewsSources.entries(),
  ...USNewsSources.entries(),
  ...TZNewsSources.entries(),
  ...ZWNewsSources.entries(),
  ...FRNewsSources.entries(),
  ...DENewsSources.entries(),
  ...QANewsSources.entries(),
  ...MXNewsSources.entries(),
  ...IDNewsSources.entries(),
  ...AENewsSources.entries(),
  ...ARNewsSources.entries(),
  ...SGNewsSources.entries(),
  ...NGNewsSources.entries(),
  ...ZANewsSources.entries(),
  ...JPNewsSources.entries(),
  ...KRNewsSources.entries(),
  ...CNNewsSources.entries(),
  ...ESNewsSources.entries(),
  ...ITNewsSources.entries(),
  ...PLNewsSources.entries(),
  ...KWNewsSources.entries(),
  ...PFNewsSources.entries(),
  ...CKNewsSources.entries(),
  ...TONewsSources.entries(),
  ...ASNewsSources.entries(),
  ...BRNewsSources.entries(),
  ...ILNewsSources.entries(),
  ...PSNewsSources.entries(),
  ...BDNewsSources.entries(),
  ...PHNewsSources.entries(),
  ...PKNewsSources.entries(),
  ...KENewsSources.entries(),
]);

// // Function to extract unique languages
// function getUniqueLangs(map: Map<string, NewsSource>) {
//   const allLangs: Array<string> = [''];

//   // Iterate through the map
//   map.forEach((value) => {
//     if (value.langs) {
//       allLangs.push(...value.langs);
//     }
//   });

//   // Create a Set to store unique values
//   const uniqueLangs = [...new Set(allLangs)];

//   return uniqueLangs;
// }

// function createLangToObjectKeysMap(map: Map<string, NewsSource>) {
//   const langToObjectKeysMap = new Map();

//   // Iterate through the map
//   map.forEach((value, key) => {
//     if (value.langs) {
//       value.langs.forEach((lang) => {
//         if (!langToObjectKeysMap.has(lang)) {
//           langToObjectKeysMap.set(lang, []);
//         }
//         langToObjectKeysMap.get(lang).push(key);
//       });
//     }
//   });

//   return langToObjectKeysMap;
// }

// const uniqueLangs = getUniqueLangs(AllNewsSources);
// console.log(JSON.stringify(uniqueLangs));

// const langToObjectKeysMap = createLangToObjectKeysMap(AllNewsSources);
// console.log(langToObjectKeysMap);
