import { CountryKeys, Countries } from '../types/countries';

export const COUNTRIES_BI_MAP = new Map<CountryKeys, Countries>([
  ['canada', 'ca'],
  ['ireland', 'ie'],
  ['india', 'in'],
  ['new-zealand', 'nz'],
  ['australia', 'oz'],
  ['uk', 'uk'],
  ['usa', 'us'],
  ['tanzania', 'tz'],
  ['zimbabwe', 'zw'],
  ['south-africa', 'za'], // South Africa
  ['nigeria', 'ng'], // Nigeria
  ['kenya', 'ke'], // Kenya
  ['ghana', 'gh'], // Ghana
  ['germany', 'de'], // Germany
  ['france', 'fr'], // France
  ['spain', 'es'], // Spain
  ['italy', 'it'], // Italy
  ['netherlands', 'nl'], // Netherlands
  ['norway', 'no'], // Norway
  ['sweden', 'se'], // Sweden
  ['denmark', 'dk'], // Denmark
  ['finland', 'fi'], // Finland
  ['poland', 'pl'], // Poland
  ['russia', 'ru'], // Russia
  ['china', 'cn'], // China
  ['japan', 'jp'], // Japan
  ['south-korea', 'kr'], // South Korea
  ['brazil', 'br'], // Brazil
  ['mexico', 'mx'], // Mexico
  ['argentina', 'ar'], // Argentina
  ['colombia', 'co'], // Colombia
  ['peru', 'pe'], // Peru
  ['venezuela', 've'], // Venezuela
  ['chile', 'cl'], // Chile
  ['ecuador', 'ec'], // Ecuador
  ['bolivia', 'bo'], // Bolivia
  ['paraguay', 'py'], // Paraguay
  ['uruguay', 'uy'], // Uruguay
  ['costa-rica', 'cr'], // Costa Rica
  ['panama', 'pa'], // Panama
  ['cuba', 'cu'], // Cuba
  ['dominican-republic', 'do'], // Dominican Republic
  ['guatemala', 'gt'], // Guatemala
  ['honduras', 'hn'], // Honduras
  ['nicaragua', 'ni'], // Nicaragua
  ['el-salvador', 'sv'], // El Salvador
  ['belize', 'bz'], // Belize
  ['jamaica', 'jm'], // Jamaica
  ['haiti', 'ht'], // Haiti
  ['ethiopia', 'et'], // Ethiopia
  ['uganda', 'ug'], // Uganda
  ['mali', 'ml'], // Mali
  ['republic-of-the-congo', 'cg'], // Republic of the Congo
  ['algeria', 'dz'], // Algeria
  ['libya', 'ly'], // Libya
  ['sudan', 'sd'], // Sudan
  ['south-sudan', 'ss'], // South Sudan
  ['niger', 'ne'], // Niger
  ['zambia', 'zm'], // Zambia
  ['kazakhstan', 'kz'], // Kazakhstan
  ['pakistan', 'pk'], // Pakistan
  ['bangladesh', 'bd'], // Bangladesh
  ['nepal', 'np'], // Nepal
  ['sri-lanka', 'lk'], // Sri Lanka
  ['myanmar', 'mm'], // Myanmar
  ['morocco', 'ma'], // Morocco
  ['tunisia', 'tn'], // Tunisia
  ['egypt', 'eg'], // Egypt
  ['united-arab-emirates', 'ae'], // United Arab Emirates
  ['turkey', 'tr'], // Turkey
  ['saudi-arabia', 'sa'], // Saudi Arabia
  ['vietnam', 'vn'], // Vietnam
  ['malaysia', 'my'], // Malaysia
  ['indonesia', 'id'], // Indonesia
  ['philippines', 'ph'], // Philippines
  ['singapore', 'sg'], // Singapore
  ['thailand', 'th'], // Thailand
  ['south-africa', 'za'], // South Africa
  ['greece', 'gr'], // Greece
  ['switzerland', 'ch'], // Switzerland
  ['austria', 'at'], // Austria
  ['belgium', 'be'], // Belgium
  ['czech-republic', 'cz'], // Czech Republic
  ['hungary', 'hu'], // Hungary
  ['iceland', 'is'], // Iceland
  ['burkina-faso', 'bf'], // Burkina Faso
  ['senegal', 'sn'], // Senegal
  ['ivory-coast', 'ci'], // Côte d'Ivoire
  ['togo', 'tg'], // Togo
  ['benin', 'bj'], // Benin
  ['gambia', 'gm'], // Gambia
  ['sierra-leone', 'sl'], // Sierra Leone
  ['liberia', 'lr'], // Liberia
  ['central-african-republic', 'cf'], // Central African Republic
  ['democratic-republic-of-the-congo', 'cd'], // Democratic Republic of the Congo
  ['burundi', 'bi'], // Burundi
  ['rwanda', 'rw'], // Rwanda
  ['somalia', 'so'], // Somalia
  ['djibouti', 'dj'], // Djibouti
  ['eritrea', 'er'], // Eritrea
  ['sao-tome-and-principe', 'st'], // São Tomé and Príncipe
  ['comoros', 'km'], // Comoros
  ['malawi', 'mw'], // Malawi
  ['lebanon', 'lb'], // Lebanon
  ['jordan', 'jo'], // Jordan
  ['iraq', 'iq'], // Iraq
  ['iran', 'ir'], // Iran
  ['qatar', 'qa'], // Qatar
  ['kuwait', 'kw'], // Kuwait
  ['bahrain', 'bh'], // Bahrain
  ['oman', 'om'], // Oman
  ['yemen', 'ye'], // Yemen
  ['syria', 'sy'], // Syria
  ['afghanistan', 'af'], // Afghanistan
  ['cambodia', 'kh'], // Cambodia
  ['laos', 'la'], // Laos
  ['maldives', 'mv'], // Maldives
  ['brunei', 'bn'], // Brunei
  ['timor-leste', 'tl'], // Timor-Leste
  ['papua-new-guinea', 'pg'], // Papua New Guinea
  ['fiji', 'fj'], // Fiji
  ['tonga', 'to'], // Tonga
  ['samoa', 'ws'], // Samoa
  ['vanuatu', 'vu'], // Vanuatu
  ['solomon-islands', 'sb'], // Solomon Islands
  ['marshall-islands', 'mh'], // Marshall Islands
  ['north-macedonia', 'mk'], // North Macedonia
  ['bosnia-and-herzegovina', 'ba'], // Bosnia and Herzegovina
  ['serbia', 'rs'], // Serbia
  ['montenegro', 'me'], // Montenegro
  ['kosovo', 'xk'], // Kosovo
  ['albania', 'al'], // Albania
  ['bulgaria', 'bg'], // Bulgaria
  ['romania', 'ro'], // Romania
  ['moldova', 'md'], // Moldova
  ['ukraine', 'ua'], // Ukraine
  ['belarus', 'by'], // Belarus
  ['lithuania', 'lt'], // Lithuania
  ['latvia', 'lv'], // Latvia
  ['estonia', 'ee'], // Estonia
  ['georgia', 'ge'], // Georgia
  ['armenia', 'am'], // Armenia
  ['azerbaijan', 'az'], // Azerbaijan
  ['kyrgyzstan', 'kg'], // Kyrgyzstan
  ['tajikistan', 'tj'], // Tajikistan
  ['uzbekistan', 'uz'], // Uzbekistan
  ['turkmenistan', 'tm'], // Turkmenistan
  ['mongolia', 'mn'], // Mongolia
  ['guyana', 'gy'], // Guyana
  ['suriname', 'sr'], // Suriname
  ['barbados', 'bb'], // Barbados
  ['bahamas', 'bs'], // Bahamas
  ['trinidad-and-tobago', 'tt'], // Trinidad and Tobago
  ['dominica', 'dm'], // Dominica
  ['grenada', 'gd'], // Grenada
  ['saint-kitts-and-nevis', 'kn'], // Saint Kitts and Nevis
  ['saint-lucia', 'lc'], // Saint Lucia
  ['saint-vincent-and-the-grenadines', 'vc'], // Saint Vincent and the Grenadines
  ['puerto-rico', 'pr'], // Puerto Rico
  ['bermuda', 'bm'], // Bermuda
  ['cayman-islands', 'ky'], // Cayman Islands
  ['turks-and-caicos-islands', 'tc'], // Turks and Caicos Islands
  ['aruba', 'aw'], // Aruba
  ['curacao', 'cw'], // Curaçao
  ['sint-maarten', 'sx'], // Sint Maarten
  ['bonaire-sint-eustatius-and-saba', 'bq'], // Bonaire, Sint Eustatius and Saba
  ['martinique', 'mq'], // Martinique
  ['guadeloupe', 'gp'], // Guadeloupe
  ['french-guiana', 'gf'], // French Guiana
  ['greenland', 'gl'], // Greenland
  ['faroe-islands', 'fo'], // Faroe Islands
  ['guernsey', 'gg'], // Guernsey
  ['jersey', 'je'], // Jersey
  ['macau', 'mo'], // Macau
  ['hong-kong', 'hk'], // Hong Kong
  ['taiwan', 'tw'], // Taiwan
  ['isle-of-man', 'im'], // Isle of Man
  ['christmas-island', 'cx'], // Christmas Island
  ['cocos-islands', 'cc'], // Cocos (Keeling) Islands
  ['norfolk-island', 'nf'], // Norfolk Island
  ['french-polynesia', 'pf'], // French Polynesia
  ['pitcairn-islands', 'pn'], // Pitcairn Islands
  ['tokelau', 'tk'], // Tokelau
  ['niue', 'nu'], // Niue
  ['wallis-and-futuna', 'wf'], // Wallis and Futuna
  ['saint-barthelemy', 'bl'], // Saint Barthélemy
  ['saint-helena', 'sh'], // Saint Helena, Ascension and Tristan da Cunha
  ['seychelles', 'sc'], // Seychelles
  ['mauritania', 'mr'], // Mauritania
  ['madagascar', 'mg'], // Madagascar
  ['mauritius', 'mu'], // Mauritius
  ['lesotho', 'ls'], // Lesotho
  ['botswana', 'bw'], // Botswana
  ['eswatini', 'sz'], // Eswatini
  ['namibia', 'na'], // Namibia
  ['angola', 'ao'], // Angola
  ['mozambique', 'mz'], // Mozambique
]);
