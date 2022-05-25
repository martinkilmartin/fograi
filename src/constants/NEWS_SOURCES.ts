import { NewsSource } from 'src/types/NewsSource'

export const CANewsSources = new Map<string, NewsSource>([
  [
    'CA_LDVR',
    {
      name: 'Le Devoir',
      url: 'https://www.ledevoir.com/',
      est: 1910,
      about:
        'Quotidien indépendant au Québec. Obtenir les toutes dernières actualités.',
      emos: ['📰', '🇨🇦'],
    },
  ],
  [
    'CA_QCTO',
    {
      name: 'The Quebec Chronicle Telegraph',
      url: 'https://www.qctonline.com/',
      est: 1764,
      about: 'The first and oldest newspaper in North America.',
      emos: ['📰', '🇨🇦'],
    },
  ],
  [
    'CA_TRTS',
    {
      name: 'Toronto Star',
      url: 'https://www.thestar.com/',
      est: 1892,
      about: 'Publishes ongoing news and information to a global audience.',
      emos: ['📰', '🇨🇦'],
    },
  ],
  [
    'CA_TGAM',
    {
      name: 'The Globe And Mail',
      url: 'https://www.theglobeandmail.com/',
      est: 1844,
      about:
        'Engaging Canadians through coverage of news, politics, business, investing and lifestyle topics.',
      emos: ['📰', '🇨🇦'],
    },
  ],
  [
    'CA_LPRS',
    {
      name: 'La Presse',
      url: 'https://www.lapresse.ca/',
      est: 1884,
      about:
        'Sa mission est de produire une information de qualité accessible gratuitement au plus grand nombre.',
      emos: ['📰', '🇨🇦'],
    },
  ],
  [
    'CA_JMTL',
    {
      name: 'Le Journal de Montréal',
      url: 'https://www.journaldemontreal.com/',
      est: 1964,
      about:
        'Des nouvelles accessibles et complètes : sports, politique, spectacles, argent et judiciaire. Soyez toujours bien informé avec le Journal de Montréal.',
      emos: ['📰', '🇨🇦'],
    },
  ],
  [
    'CA_MTGZ',
    {
      name: 'Montreal Gazette',
      url: 'https://montrealgazette.com/',
      est: 1778,
      about:
        'Read latest national and international breaking news, updates, headlines, events & more.',
      emos: ['📰', '🇨🇦'],
    },
  ],
  [
    'CA_VSUN',
    {
      name: 'Vancouver Sun',
      url: 'https://vancouversun.com/',
      est: 1912,
      about:
        'Read latest national and international breaking news, updates, headlines, events & more.',
      emos: ['📰', '🇨🇦'],
    },
  ],
  [
    'CA_TPRV',
    {
      name: 'The Province',
      url: 'https://theprovince.com/',
      est: 1898,
      about:
        'Latest breaking news, updates, and headlines on national and international events & more.',
      emos: ['📰', '🇨🇦'],
    },
  ],
  [
    'CA_NPST',
    {
      name: 'National Post',
      url: 'https://nationalpost.com/',
      est: 1998,
      about:
        'Latest breaking news, updates, and headlines offering information on national and international events & more.',
      emos: ['📰', '🇨🇦'],
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
    },
  ],
  [
    'CA_LCDS',
    {
      name: 'Le Courrier du Sud',
      url: 'https://www.lecourrierdusud.ca/',
      est: 1947,
      about:
        'Le Courrier du Sud, propriété de Gravité Media, est distribué gratuitement chaque semaine.',
      emos: ['📰', '🇨🇦'],
    },
  ],
  [
    'CA_NIND',
    {
      name: 'CanIndia News',
      url: 'https://www.canindia.com/',
      est: 1999,
      about: 'Representing the viewpoint of South Asians in Canada.',
      emos: ['📰', '🇨🇦'],
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
    },
  ],
  [
    'CA_BJST',
    {
      name: 'Bejsment',
      url: 'https://bejsment.com/',
      est: 2011,
      about:
        'News website of Polish newspaper Wiadomości published in Ontario.',
      emos: ['📰', '🇨🇦'],
    },
  ],
  [
    'CA_RXWN',
    {
      name: 'The Russian Express Weekly Newspaper',
      url: 'https://russianexpress.net',
      est: 2002,
      about:
        'Toronto community weekly newspaper.',
      emos: ['📰', '🇨🇦'],
    },
  ],
])

export const IENewsSources = new Map<string, NewsSource>([
  [
    'IE_AGRI',
    {
      name: 'Agriland',
      url: 'https://www.agriland.ie/',
      est: 2012,
      about:
        'Online resource covering all the information, news and services required by people involved in the agricultural and farming sectors in Ireland.',
      emos: ['💻', '🌱'],
    },
  ],
  [
    'IE_AADV',
    {
      name: 'Athlone Adevertiser',
      url: 'https://www.advertiser.ie/athlone',
      est: 1970,
      about:
        'A free newspaper distributed throughout Athlone & Westmeath each Thursday.',
      emos: ['📰', '🇮🇪'],
    },
  ],
  [
    'IE_BLLS',
    {
      name: 'BALLS.ie',
      url: 'https://www.balls.ie/',
      est: 2010,
      about:
        'Covering every sport from Hurling to American Football, from Curling to Downhill Skiing, bringing what is happening right now, in video, gif, image or tweet form.',
      emos: ['💻', '⚽'],
    },
  ],
  [
    'IE_BEAT',
    {
      name: 'Beat 102 103',
      url: 'https://www.beat102103.com/',
      est: 2003,
      about:
        'Multi-platform radio station for entertaining & informing young adults in the South East.',
      emos: ['📻', '🇮🇪'],
    },
  ],
  [
    'IE_BLFT',
    {
      name: 'Belfast Telegraph',
      url: 'https://www.belfasttelegraph.co.uk/',
      est: 1870,
      about:
        'Latest news, sport and business from Belfast and throughout Northern Ireland plus, opinion, entertainment and lifestyle coverage.',
      emos: ['📰', '🇮🇪'],
    },
  ],
  [
    'IE_BZPL',
    {
      name: 'Biz Plus',
      url: 'https://bizplus.ie/',
      est: 1998,
      about:
        'Monthly business magazine focused  on the activities of Irish companies or companies based in Ireland.',
      emos: ['💻', '🧑‍💼'],
    },
  ],
  [
    'IE_BRKN',
    {
      name: 'breakingnews.ie',
      url: 'https://www.breakingnews.ie/',
      est: 2001,
      about:
        'Breaking news website providing up to the minute news and sports reports, with e-mail news releases following breaking stories throughout the day.',
      emos: ['💻', '🇮🇪'],
    },
  ],
  [
    'IE_BUZZ',
    {
      name: 'Buzz',
      url: 'https://www.buzz.ie/',
      est: 2016,
      about:
        'Breaking the latest trending stories that are happening in the world right now covering all things movies, TV, music, games, tech and sport.',
      emos: ['💻', '🇮🇪'],
    },
  ],
  [
    'IE_CLWL',
    {
      name: 'Carlow Live',
      url: 'https://www.carlowlive.ie/',
      est: 2018,
      about:
        'The latest news, events, business, death notices and more from Carlow 24/7.',
      emos: ['💻', '🇮🇪'],
    },
  ],
  [
    'IE_CLFM',
    {
      name: 'Clare FM',
      url: 'https://www.clare.fm/',
      est: 1989,
      about:
        'Providing the people of Co Clare with a comprehensive Radio Service that reflects their individual communities as a whole.',
      emos: ['📻', '🇮🇪'],
    },
  ],
  [
    'IE_CLRL',
    {
      name: 'Clare Live',
      url: 'https://www.clarelive.ie/',
      est: 2001,
      emos: ['💻', '🇮🇪'],
    },
  ],
  [
    'IE_CLHT',
    {
      name: 'Classic Hits',
      url: 'https://www.classichits.ie/',
      est: 2009,
      about: "Ireland's Classic Hits - The Home of 80's & 90's.",
      emos: ['📻', '🎭'],
    },
  ],
  [
    'IE_COLC',
    {
      name: 'Coleraine Chronicle',
      url: 'https://www.colerainechronicle.co.uk/',
      est: 1844,
      about:
        'Extensive coverage of Causeway Coast, serving Ballycastle, Ballymoney, Bushmills, Coleraine, Limavady, Moyle, Portrush and Portstewart.',
      emos: ['📰', '🇮🇪'],
    },
  ],
  [
    'IE_CTRB',
    {
      name: 'Connacht Tribune',
      url: 'https://connachttribune.ie/',
      est: 1925,
      about: 'Galway news, sport, entertainment, property & arts.',
      emos: ['📰', '🇮🇪'],
    },
  ],
  [
    'IE_CRKB',
    {
      name: 'Cork Beo',
      url: 'https://www.corkbeo.ie/',
      est: 2019,
      about:
        'Cork Beo is a voice for the Cork region; telling stories, amplifying concerns &  championing causes.',
      emos: ['💻', '🇮🇪'],
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
        'Website for Irish females with the latest news, showbiz, fashion, beauty, entertainment, and celebrity gossip.',
      emos: ['💻', '👭'],
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
    'IE_INDO',
    {
      name: 'Irish Independent',
      url: 'https://www.independent.ie/',
      est: 1905,
      emos: ['📰', '🇮🇪'],
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
      emos: ['💻', '🇮🇪'],
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
      emos: ['📰', '🇮🇪'],
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
      url: 'https://www.live95fm.ie/"',
      est: 1997,
      emos: ['📻', '🇮🇪'],
    },
  ],
  [
    'IE_LMFM',
    {
      name: 'LMFM',
      url: 'https://www.lmfm.ie/"',
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
    'IE_CRKM',
    {
      name: 'The Corkman',
      url: 'https://www.independent.ie/regionals/corkman/',
      est: 2000,
      emos: ['💻', '🇮🇪'],
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
])

export const INNewsSources = new Map<string, NewsSource>([
  [
    'IN_BYSC',
    {
      name: 'Bombay Samachar',
      url: 'https://bombaysamachar.com/',
      est: 1822,
      about: 'The oldest continuously published newspaper in India.',
      emos: ['📰', '🇮🇳'],
      langs: ['en', 'gu'],
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
        'Comprehensive news portal covers all the latest developments on a real-time basis in the fields of politics, sports, business, lifestyle, entertainment and even local city issues, offering a complete perspective of the world.',
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
        'Latest News Headlines from India & around the World. Sports, Business, Fitness, Entertainment, Opinions.',
      emos: ['📰', '🇮🇳'],
      langs: ['en'],
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
        'Latest business news and finance news, share market updates, live stock market news, IPO update, banking and insurance sector updates.',
      emos: ['📰', '🇮🇳'],
      langs: ['en'],
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
        'Latest Business News headlines, LIVE share market news and updates, financial, economic and banking news from India & across the World.',
      emos: ['📰', '🇮🇳'],
      langs: ['en'],
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
])
