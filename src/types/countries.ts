export type Countries =
  | 'ca' // Canada
  | 'ie' // Ireland
  | 'in' // India
  | 'nz' // New Zealand
  | 'oz' // Australia
  | 'uk' // United Kingdom
  | 'us' // United States
  | 'tz' // Tanzania
  | 'zw' // Zimbabwe
  | 'za' // South Africa
  | 'ng' // Nigeria
  | 'ke' // Kenya
  | 'gh' // Ghana
  | 'de' // Germany
  | 'fr' // France
  | 'es' // Spain
  | 'it' // Italy
  | 'nl' // Netherlands
  | 'no' // Norway
  | 'se' // Sweden
  | 'dk' // Denmark
  | 'fi' // Finland
  | 'pl' // Poland
  | 'ru' // Russia
  | 'cn' // China
  | 'jp' // Japan
  | 'kr' // South Korea
  | 'br' // Brazil
  | 'mx' // Mexico
  | 'ar' // Argentina
  | 'co' // Colombia
  | 'pe' // Peru
  | 've' // Venezuela
  | 'cl' // Chile
  | 'ec' // Ecuador
  | 'bo' // Bolivia
  | 'py' // Paraguay
  | 'uy' // Uruguay
  | 'cr' // Costa Rica
  | 'pa' // Panama
  | 'cu' // Cuba
  | 'do' // Dominican Republic
  | 'gt' // Guatemala
  | 'hn' // Honduras
  | 'ni' // Nicaragua
  | 'sv' // El Salvador
  | 'bz' // Belize
  | 'jm' // Jamaica
  | 'ht' // Haiti
  | 'ml' // Mali
  | 'cg' // Republic of the Congo
  | 'dz' // Algeria
  | 'ly' // Libya
  | 'sd' // Sudan
  | 'ss' // South Sudan
  | 'ne' // Niger
  | 'bf' // Burkina Faso
  | 'sn' // Senegal
  | 'ci' // Côte d'Ivoire
  | 'tg' // Togo
  | 'bj' // Benin
  | 'gm' // Gambia
  | 'sl' // Sierra Leone
  | 'lr' // Liberia
  | 'cf' // Central African Republic
  | 'cd' // Democratic Republic of the Congo
  | 'bi' // Burundi
  | 'rw' // Rwanda
  | 'so' // Somalia
  | 'dj' // Djibouti
  | 'er' // Eritrea
  | 'st' // São Tomé and Príncipe
  | 'km' // Comoros
  | 'mw' // Malawi
  | 'lb' // Lebanon
  | 'jo' // Jordan
  | 'iq' // Iraq
  | 'ir' // Iran
  | 'qa' // Qatar
  | 'kw' // Kuwait
  | 'bh' // Bahrain
  | 'om' // Oman
  | 'ye' // Yemen
  | 'sy' // Syria
  | 'af' // Afghanistan
  | 'kh' // Cambodia
  | 'la' // Laos
  | 'mv' // Maldives
  | 'bn' // Brunei
  | 'tl' // Timor-Leste
  | 'pg' // Papua New Guinea
  | 'fj' // Fiji
  | 'to' // Tonga
  | 'ws' // Samoa
  | 'vu' // Vanuatu
  | 'sb' // Solomon Islands
  | 'mh' // Marshall Islands
  | 'mk' // North Macedonia
  | 'ba' // Bosnia and Herzegovina
  | 'rs' // Serbia
  | 'me' // Montenegro
  | 'xk' // Kosovo
  | 'al' // Albania
  | 'bg' // Bulgaria
  | 'ro' // Romania
  | 'md' // Moldova
  | 'ua' // Ukraine
  | 'by' // Belarus
  | 'lt' // Lithuania
  | 'lv' // Latvia
  | 'ee' // Estonia
  | 'ge' // Georgia
  | 'am' // Armenia
  | 'az' // Azerbaijan
  | 'kg' // Kyrgyzstan
  | 'tj' // Tajikistan
  | 'uz' // Uzbekistan
  | 'tm' // Turkmenistan
  | 'mn' // Mongolia
  | 'gy' // Guyana
  | 'sr' // Suriname
  | 'bb' // Barbados
  | 'bs' // Bahamas
  | 'tt' // Trinidad and Tobago
  | 'dm' // Dominica
  | 'gd' // Grenada
  | 'kn' // Saint Kitts and Nevis
  | 'lc' // Saint Lucia
  | 'vc' // Saint Vincent and the Grenadines
  | 'pr' // Puerto Rico
  | 'bm' // Bermuda
  | 'ky' // Cayman Islands
  | 'tc' // Turks and Caicos Islands
  | 'aw' // Aruba
  | 'cw' // Curaçao
  | 'sx' // Sint Maarten
  | 'bq' // Bonaire, Sint Eustatius and Saba
  | 'mq' // Martinique
  | 'gp' // Guadeloupe
  | 'gf' // French Guiana
  | 'gl' // Greenland
  | 'fo' // Faroe Islands
  | 'gg' // Guernsey
  | 'je' // Jersey
  | 'mo' // Macau
  | 'hk' // Hong Kong
  | 'tw' // Taiwan
  | 'im' // Isle of Man
  | 'cx' // Christmas Island
  | 'cc' // Cocos (Keeling) Islands
  | 'nf' // Norfolk Island
  | 'pf' // French Polynesia
  | 'pn' // Pitcairn Islands
  | 'tk' // Tokelau
  | 'nu' // Niue
  | 'wf' // Wallis and Futuna
  | 'bl' // Saint Barthélemy
  | 'sh' // Saint Helena, Ascension and Tristan da Cunha
  | 'sc' // Seychelles
  | 'mr' // Mauritania
  | 'mg' // Madagascar
  | 'mu' // Mauritius
  | 'ls' // Lesotho
  | 'bw' // Botswana
  | 'sz' // Eswatini
  | 'na' // Namibia
  | 'ao' // Angola
  | 'mz' // Mozambique
  | 'au' // Austria
  | 'et' // Ethiopia
  | 'ug' // Uganda
  | 'zm' // Zambia
  | 'kz' // Kazakhstan
  | 'pk' // Pakistan
  | 'bd' // Bangladesh
  | 'np' // Nepal
  | 'lk' // Sri Lanka
  | 'mm' // Myanmar
  | 'ma' // Morocco
  | 'tn' // Tunisia
  | 'eg' // Egypt
  | 'ae' // United Arab Emirates
  | 'tr' // Turkey
  | 'sa' // Saudi Arabia
  | 'vn' // Vietnam
  | 'my' // Malaysia
  | 'id' // Indonesia
  | 'ph' // Philippines
  | 'sg' // Singapore
  | 'th' // Thailand
  | 'gr' // Greece
  | 'ch' // Switzerland
  | 'at' // Austria
  | 'be' // Belgium
  | 'cz' // Czech Republic
  | 'hu' // Hungary
  | 'is' // Iceland
  | 'ci' // Côte d'Ivoire
  | 'il' // Israel
  | 'bt' // Bhutan
  | 'pt' // Portugal
  | 'sk' // Slovakia
  | 'lu' // Luxembourg
  | 'hr' // Croatia
  | 'cy' // Cyprus
  | 'mt' // Malta
  | 'si' // Slovenia
  | 'cm' // Cameroon
  | 'td' // Chad
  | 'gq' // Equatorial Guinea

export type CountryKeys =
  | 'canada'
  | 'ireland'
  | 'india'
  | 'new-zealand'
  | 'australia'
  | 'uk'
  | 'usa'
  | 'tanzania'
  | 'zimbabwe'
  | 'south-africa' // South Africa
  | 'nigeria' // Nigeria
  | 'kenya' // Kenya
  | 'ghana' // Ghana
  | 'germany' // Germany
  | 'france' // France
  | 'spain' // Spain
  | 'italy' // Italy
  | 'netherlands' // Netherlands
  | 'norway' // Norway
  | 'sweden' // Sweden
  | 'denmark' // Denmark
  | 'finland' // Finland
  | 'poland' // Poland
  | 'russia' // Russia
  | 'china' // China
  | 'japan' // Japan
  | 'south-korea' // South Korea
  | 'brazil' // Brazil
  | 'mexico' // Mexico
  | 'argentina' // Argentina
  | 'colombia' // Colombia
  | 'peru' // Peru
  | 'venezuela' // Venezuela
  | 'chile' // Chile
  | 'ecuador' // Ecuador
  | 'bolivia' // Bolivia
  | 'paraguay' // Paraguay
  | 'uruguay' // Uruguay
  | 'costa-rica' // Costa Rica
  | 'panama' // Panama
  | 'cuba' // Cuba
  | 'dominican-republic' // Dominican Republic
  | 'guatemala' // Guatemala
  | 'honduras' // Honduras
  | 'nicaragua' // Nicaragua
  | 'el-salvador' // El Salvador
  | 'belize' // Belize
  | 'jamaica' // Jamaica
  | 'haiti' // Haiti
  | 'mali' // Mali
  | 'republic-of-the-congo' // Republic of the Congo
  | 'algeria' // Algeria
  | 'libya' // Libya
  | 'sudan' // Sudan
  | 'south-sudan' // South Sudan
  | 'niger' // Niger
  | 'burkina-faso' // Burkina Faso
  | 'senegal' // Senegal
  | 'cote-divoire' // Côte d'Ivoire
  | 'togo' // Togo
  | 'benin' // Benin
  | 'gambia' // Gambia
  | 'sierra-leone' // Sierra Leone
  | 'liberia' // Liberia
  | 'central-african-republic' // Central African Republic
  | 'democratic-republic-of-the-congo' // Democratic Republic of the Congo
  | 'burundi' // Burundi
  | 'rwanda' // Rwanda
  | 'somalia' // Somalia
  | 'djibouti' // Djibouti
  | 'eritrea' // Eritrea
  | 'sao-tome-and-principe' // São Tomé and Príncipe
  | 'comoros' // Comoros
  | 'malawi' // Malawi
  | 'lebanon' // Lebanon
  | 'jordan' // Jordan
  | 'iraq' // Iraq
  | 'iran' // Iran
  | 'qatar' // Qatar
  | 'kuwait' // Kuwait
  | 'bahrain' // Bahrain
  | 'oman' // Oman
  | 'yemen' // Yemen
  | 'syria' // Syria
  | 'afghanistan' // Afghanistan
  | 'cambodia' // Cambodia
  | 'laos' // Laos
  | 'maldives' // Maldives
  | 'brunei' // Brunei
  | 'timor-leste' // Timor-Leste
  | 'papua-new-guinea' // Papua New Guinea
  | 'fiji' // Fiji
  | 'tonga' // Tonga
  | 'samoa' // Samoa
  | 'vanuatu' // Vanuatu
  | 'solomon-islands' // Solomon Islands
  | 'marshall-islands' // Marshall Islands
  | 'north-macedonia' // North Macedonia
  | 'bosnia-and-herzegovina' // Bosnia and Herzegovina
  | 'serbia' // Serbia
  | 'montenegro' // Montenegro
  | 'kosovo' // Kosovo
  | 'albania' // Albania
  | 'bulgaria' // Bulgaria
  | 'romania' // Romania
  | 'moldova' // Moldova
  | 'ukraine' // Ukraine
  | 'belarus' // Belarus
  | 'lithuania' // Lithuania
  | 'latvia' // Latvia
  | 'estonia' // Estonia
  | 'georgia' // Georgia
  | 'armenia' // Armenia
  | 'azerbaijan' // Azerbaijan
  | 'kyrgyzstan' // Kyrgyzstan
  | 'tajikistan' // Tajikistan
  | 'uzbekistan' // Uzbekistan
  | 'turkmenistan' // Turkmenistan
  | 'mongolia' // Mongolia
  | 'guyana' // Guyana
  | 'suriname' // Suriname
  | 'barbados' // Barbados
  | 'bahamas' // Bahamas
  | 'trinidad-and-tobago' // Trinidad and Tobago
  | 'dominica' // Dominica
  | 'grenada' // Grenada
  | 'saint-kitts-and-nevis' // Saint Kitts and Nevis
  | 'saint-lucia' // Saint Lucia
  | 'saint-vincent-and-the-grenadines' // Saint Vincent and the Grenadines
  | 'puerto-rico' // Puerto Rico
  | 'bermuda' // Bermuda
  | 'cayman-islands' // Cayman Islands
  | 'turks-and-caicos-islands' // Turks and Caicos Islands
  | 'aruba' // Aruba
  | 'curacao' // Curaçao
  | 'sint-maarten' // Sint Maarten
  | 'bonaire-sint-eustatius-and-saba' // Bonaire, Sint Eustatius and Saba
  | 'martinique' // Martinique
  | 'guadeloupe' // Guadeloupe
  | 'french-guiana' // French Guiana
  | 'greenland' // Greenland
  | 'faroe-islands' // Faroe Islands
  | 'guernsey' // Guernsey
  | 'jersey' // Jersey
  | 'macau' // Macau
  | 'hong-kong' // Hong Kong
  | 'taiwan' // Taiwan
  | 'isle-of-man' // Isle of Man
  | 'christmas-island' // Christmas Island
  | 'cocos-islands' // Cocos (Keeling) Islands
  | 'norfolk-island' // Norfolk Island
  | 'french-polynesia' // French Polynesia
  | 'pitcairn-islands' // Pitcairn Islands
  | 'tokelau' // Tokelau
  | 'niue' // Niue
  | 'wallis-and-futuna' // Wallis and Futuna
  | 'saint-barthelemy' // Saint Barthélemy
  | 'saint-helena' // Saint Helena, Ascension and Tristan da Cunha
  | 'seychelles' // Seychelles
  | 'mauritania' // Mauritania
  | 'madagascar' // Madagascar
  | 'mauritius' // Mauritius
  | 'lesotho' // Lesotho
  | 'botswana' // Botswana
  | 'eswatini' // Eswatini
  | 'namibia' // Namibia
  | 'angola' // Angola
  | 'mozambique' // Mozambique
  | 'austria' // Austria
  | 'ethiopia' // Ethiopia
  | 'uganda' // Uganda
  | 'zambia' // Zambia
  | 'kazakhstan' // Kazakhstan
  | 'pakistan' // Pakistan
  | 'bangladesh' // Bangladesh
  | 'nepal' // Nepal
  | 'sri-lanka' // Sri Lanka
  | 'myanmar' // Myanmar
  | 'morocco' // Morocco
  | 'tunisia' // Tunisia
  | 'egypt' // Egypt
  | 'united-arab-emirates' // United Arab Emirates
  | 'turkey' // Turkey
  | 'saudi-arabia' // Saudi Arabia
  | 'vietnam' // Vietnam
  | 'malaysia' // Malaysia
  | 'indonesia' // Indonesia
  | 'philippines' // Philippines
  | 'singapore' // Singapore
  | 'thailand' // Thailand
  | 'greece' // Greece
  | 'switzerland' // Switzerland
  | 'belgium' // Belgium
  | 'czech-republic' // Czech Republic
  | 'hungary' // Hungary
  | 'iceland' // Iceland
  | 'ivory-coast' // Côte d'Ivoire
  | 'cook-islands' // Cook Islands
  | 'israel' // Israel
  | 'bhutan' // Bhutan
  | 'portugal' // Portugal
  | 'slovakia' // Slovakia
  | 'luxembourg' // Luxembourg
  | 'croatia' // Croatia
  | 'cyprus' // Cyprus
  | 'malta' // Malta
  | 'slovenia' // Slovenia
  | 'cameroon' // Cameroon
  | 'chad' // Chad
  | 'equatorial-guinea' // Equatorial Guinea