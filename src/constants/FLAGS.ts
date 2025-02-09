import { flags as Flagtypes } from '../types/flags';

export const flags = new Map<string, Flagtypes>([
  ['oz', '🇦🇺'], // Australia
  ['ca', '🇨🇦'], // Canada
  ['in', '🇮🇳'], // India
  ['ie', '🇮🇪'], // Ireland
  ['nz', '🇳🇿'], // New Zealand
  ['tz', '🇹🇿'], // Tanzania
  ['uk', '🇬🇧'], // United Kingdom
  ['us', '🇺🇸'], // United States
  ['zw', '🇿🇼'], // Zimbabwe
  ['za', '🇿🇦'], // South Africa
  ['ng', '🇳🇬'], // Nigeria
  ['ke', '🇰🇪'], // Kenya
  ['gh', '🇬🇭'], // Ghana
  ['de', '🇩🇪'], // Germany
  ['fr', '🇫🇷'], // France
  ['es', '🇪🇸'], // Spain
  ['it', '🇮🇹'], // Italy
  ['nl', '🇳🇱'], // Netherlands
  ['no', '🇳🇴'], // Norway
  ['se', '🇸🇪'], // Sweden
  ['dk', '🇩🇰'], // Denmark
  ['fi', '🇫🇮'], // Finland
  ['pl', '🇵🇱'], // Poland
  ['ru', '🇷🇺'], // Russia
  ['cn', '🇨🇳'], // China
  ['jp', '🇯🇵'], // Japan
  ['kr', '🇰🇷'], // South Korea
  ['br', '🇧🇷'], // Brazil
  ['mx', '🇲🇽'], // Mexico
  ['ar', '🇦🇷'], // Argentina
  ['co', '🇨🇴'], // Colombia
  ['pe', '🇵🇪'], // Peru
  ['ve', '🇻🇪'], // Venezuela
  ['cl', '🇨🇱'], // Chile
  ['ec', '🇪🇨'], // Ecuador
  ['bo', '🇧🇴'], // Bolivia
  ['py', '🇵🇾'], // Paraguay
  ['uy', '🇺🇾'], // Uruguay
  ['cr', '🇨🇷'], // Costa Rica
  ['pa', '🇵🇦'], // Panama
  ['cu', '🇨🇺'], // Cuba
  ['do', '🇩🇴'], // Dominican Republic
  ['gt', '🇬🇹'], // Guatemala
  ['hn', '🇭🇳'], // Honduras
  ['ni', '🇳🇮'], // Nicaragua
  ['sv', '🇸🇻'], // El Salvador
  ['jm', '🇯🇲'], // Jamaica
  ['ht', '🇭🇹'], // Haiti
  ['ml', '🇲🇱'], // Mali
  ['dz', '🇩🇿'], // Algeria
  ['ly', '🇱🇾'], // Libya
  ['sd', '🇸🇩'], // Sudan
  ['ss', '🇸🇸'], // South Sudan
  ['ne', '🇳🇪'], // Niger
  ['bf', '🇧🇫'], // Burkina Faso
  ['sn', '🇸🇳'], // Senegal
  ['ci', '🇨🇮'], // Côte d'Ivoire
  ['bj', '🇧🇯'], // Benin
  ['gm', '🇬🇲'], // Gambia
  ['sl', '🇸🇱'], // Sierra Leone
  ['lr', '🇱🇷'], // Liberia
  ['bi', '🇧🇮'], // Burundi
  ['rw', '🇷🇼'], // Rwanda
  ['so', '🇸🇴'], // Somalia
  ['dj', '🇩🇯'], // Djibouti
  ['er', '🇪🇷'], // Eritrea
  ['st', '🇸🇹'], // São Tomé and Príncipe
  ['km', '🇰🇲'], // Comoros
  ['lb', '🇱🇧'], // Lebanon
  ['jo', '🇯🇴'], // Jordan
  ['iq', '🇮🇶'], // Iraq
  ['ir', '🇮🇷'], // Iran
  ['qa', '🇶🇦'], // Qatar
  ['kw', '🇰🇼'], // Kuwait
  ['bh', '🇧🇭'], // Bahrain
  ['om', '🇴🇲'], // Oman
  ['ye', '🇾🇪'], // Yemen
  ['sy', '🇸🇾'], // Syria
  ['af', '🇦🇫'], // Afghanistan
  ['kh', '🇰🇭'], // Cambodia
  ['la', '🇱🇦'], // Laos
  ['mv', '🇲🇻'], // Maldives
  ['bn', '🇧🇳'], // Brunei
  ['tl', '🇹🇱'], // Timor-Leste
  ['pg', '🇵🇬'], // Papua New Guinea
  ['fj', '🇫🇯'], // Fiji
  ['to', '🇹🇴'], // Tonga
  ['ws', '🇼🇸'], // Samoa
  ['vu', '🇻🇺'], // Vanuatu
  ['sb', '🇸🇧'], // Solomon Islands
  ['mh', '🇲🇭'], // Marshall Islands
  ['mk', '🇲🇰'], // North Macedonia
  ['ba', '🇧🇦'], // Bosnia and Herzegovina
  ['rs', '🇷🇸'], // Serbia
  ['me', '🇲🇪'], // Montenegro
  ['xk', '🇽🇰'], // Kosovo
  ['al', '🇦🇱'], // Albania
  ['bg', '🇧🇬'], // Bulgaria
  ['ro', '🇷🇴'], // Romania
  ['md', '🇲🇩'], // Moldova
  ['ua', '🇺🇦'], // Ukraine
  ['by', '🇧🇾'], // Belarus
  ['lt', '🇱🇹'], // Lithuania
  ['lv', '🇱🇻'], // Latvia
  ['ee', '🇪🇪'], // Estonia
  ['ge', '🇬🇪'], // Georgia
  ['am', '🇦🇲'], // Armenia
  ['az', '🇦🇿'], // Azerbaijan
  ['kg', '🇰🇬'], // Kyrgyzstan
  ['tj', '🇹🇯'], // Tajikistan
  ['uz', '🇺🇿'], // Uzbekistan
  ['tm', '🇹🇲'], // Turkmenistan
  ['mn', '🇲🇳'], // Mongolia
  ['bz', '🇧🇿'], // Belize
  ['gy', '🇬🇾'], // Guyana
  ['sr', '🇸🇷'], // Suriname
  ['bb', '🇧🇧'], // Barbados
  ['bs', '🇧🇸'], // Bahamas
  ['tt', '🇹🇹'], // Trinidad and Tobago
  ['dm', '🇩🇲'], // Dominica
  ['gd', '🇬🇩'], // Grenada
  ['kn', '🇰🇳'], // Saint Kitts and Nevis
  ['lc', '🇱🇨'], // Saint Lucia
  ['vc', '🇻🇨'], // Saint Vincent and the Grenadines
  ['pr', '🇵🇷'], // Puerto Rico
  ['bm', '🇧🇲'], // Bermuda
  ['ky', '🇰🇾'], // Cayman Islands
  ['tc', '🇹🇨'], // Turks and Caicos Islands
  ['aw', '🇦🇼'], // Aruba
  ['cw', '🇨🇼'], // Curaçao
  ['sx', '🇸🇽'], // Sint Maarten
  ['bq', '🇧🇶'], // Bonaire, Sint Eustatius and Saba
  ['mq', '🇲🇶'], // Martinique
  ['gp', '🇬🇵'], // Guadeloupe
  ['gf', '🇬🇫'], // French Guiana
  ['gl', '🇬🇱'], // Greenland
  ['fo', '🇫🇴'], // Faroe Islands
  ['gg', '🇬🇬'], // Guernsey
  ['je', '🇯🇪'], // Jersey
  ['mo', '🇲🇴'], // Macau
  ['hk', '🇭🇰'], // Hong Kong
  ['tw', '🇹🇼'], // Taiwan
  ['im', '🇮🇲'], // Isle of Man
  ['cx', '🇨🇽'], // Christmas Island
  ['cc', '🇨🇨'], // Cocos (Keeling) Islands
  ['nf', '🇳🇫'], // Norfolk Island
  ['pf', '🇵🇫'], // French Polynesia
  ['pn', '🇵🇳'], // Pitcairn Islands
  ['tk', '🇹🇰'], // Tokelau
  ['nu', '🇳🇺'], // Niue
  ['wf', '🇼🇫'], // Wallis and Futuna
  ['bl', '🇧🇱'], // Saint Barthélemy
  ['sh', '🇸🇭'], // Saint Helena, Ascension and Tristan da Cunha
  ['mr', '🇲🇷'], // Mauritania
  ['mg', '🇲🇬'], // Madagascar
  ['mu', '🇲🇺'], // Mauritius
  ['na', '🇳🇦'], // Namibia
  ['ao', '🇦🇴'], // Angola
  ['mz', '🇲🇿'], // Mozambique
  ['et', '🇪🇹'], // Ethiopia
  ['ug', '🇺🇬'], // Uganda
  ['zm', '🇿🇲'], // Zambia
  ['id', '🇮🇩'], // Indonesia
  ['ck', '🇨🇰'], // Cook Islands
  ['il', '🇮🇱'], // Israel
  ['ps', '🇵🇸'], // Palestinian Territories
  ['bt', '🇧🇹'], // Bhutan
  ['hr', '🇭🇷'], // Croatia
  ['cy', '🇨🇾'], // Cyprus
  ['mt', '🇲🇹'], // Malta
  ['si', '🇸🇮'], // Slovenia
  ['cm', '🇨🇲'], // Cameroon
  ['td', '🇹🇩'], // Chad
  ['cf', '🇨🇫'], // Central African Republic
  ['cg', '🇨🇬'], // Republic of the Congo
  ['ga', '🇬🇦'], // Gabon
  ['gq', '🇬🇶'], // Equatorial Guinea
  ['cv', '🇨🇻'], // Cape Verde
  ['st', '🇸🇹'], // São Tomé and Príncipe
  ['mw', '🇲🇼'], // Malawi
  ['ls', '🇱🇸'], // Lesotho
  ['bw', '🇧🇼'], // Botswana
  ['sz', '🇸🇿'], // Eswatini
  ['gn', '🇬🇳'], // Guinea
  ['sn', '🇸🇳'], // Senegal
  ['gm', '🇬🇲'], // Gambia
  ['gw', '🇬🇼'], // Guinea-Bissau
  ['tg', '🇹🇬'], // Togo
  ['bf', '🇧🇫'], // Burkina Faso
  ['ne', '🇳🇪'], // Niger
  ['ad', '🇦🇩'], // Andorra
  ['ag', '🇦🇬'], // Antigua and Barbuda
  ['bb', '🇧🇧'], // Barbados
  ['bs', '🇧🇸'], // Bahamas
  ['dm', '🇩🇲'], // Dominica
  ['fj', '🇫🇯'], // Fiji
  ['gd', '🇬🇩'], // Grenada
  ['gy', '🇬🇾'], // Guyana
  ['ki', '🇰🇮'], // Kiribati
  ['kn', '🇰🇳'], // Saint Kitts and Nevis
  ['lc', '🇱🇨'], // Saint Lucia
  ['nr', '🇳🇷'], // Nauru
  ['sb', '🇸🇧'], // Solomon Islands
  ['sc', '🇸🇨'], // Seychelles
  ['vc', '🇻🇨'], // Saint Vincent and the Grenadines
  ['ws', '🇼🇸'], // Samoa
  ['vu', '🇻🇺'], // Vanuatu
  ['tv', '🇹🇻'], // Tuvalu
  ['pw', '🇵🇼'], // Palau
  ['fm', '🇫🇲'], // Micronesia
  ['as', '🇦🇸'], // American Samoa
  ['aq', '🇦🇶'], // Antarctica
  ['ai', '🇦🇮'], // Anguilla
  ['mp', '🇲🇵'], // Northern Mariana Islands
  ['ms', '🇲🇸'], // Montserrat
  ['pm', '🇵🇲'], // Saint Pierre and Miquelon
  ['vg', '🇻🇬'], // British Virgin Islands
  ['vi', '🇻🇮'], // U.S. Virgin Islands
  ['sj', '🇸🇯'], // Svalbard and Jan Mayen
  ['eh', '🇪🇭'], // Western Sahara
  ['gu', '🇬🇺'], // Guam
]);
