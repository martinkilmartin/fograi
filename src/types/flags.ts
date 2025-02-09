export type flags =
  | '🇨🇦' // Canada
  | '🇮🇪' // Ireland
  | '🇮🇳' // India
  | '🇳🇿' // New Zealand
  | '🇦🇺' // Australia
  | '🇬🇧' // United Kingdom
  | '🇺🇸' // United States
  | '🇹🇿' // Tanzania
  | '🇿🇼' // Zimbabwe
  | '🇿🇦' // South Africa
  | '🇳🇬' // Nigeria
  | '🇰🇪' // Kenya
  | '🇬🇭' // Ghana
  | '🇩🇪' // Germany
  | '🇫🇷' // France
  | '🇪🇸' // Spain
  | '🇮🇹' // Italy
  | '🇳🇱' // Netherlands
  | '🇳🇴' // Norway
  | '🇸🇪' // Sweden
  | '🇩🇰' // Denmark
  | '🇫🇮' // Finland
  | '🇵🇱' // Poland
  | '🇷🇺' // Russia
  | '🇨🇳' // China
  | '🇯🇵' // Japan
  | '🇧🇷' // Brazil
  | '🇦🇷' // Argentina
  | '🇨🇱' // Chile
  | '🇲🇽' // Mexico
  | '🇨🇴' // Colombia
  | '🇵🇪' // Peru
  | '🇻🇪' // Venezuela
  | '🇵🇹' // Portugal
  | '🇬🇷' // Greece
  | '🇨🇭' // Switzerland
  | '🇦🇹' // Austria
  | '🇧🇪' // Belgium
  | '🇨🇿' // Czech Republic
  | '🇭🇺' // Hungary
  | '🇮🇸' // Iceland
  | '🇮🇱' // Israel
  | '🇰🇷' // South Korea
  | '🇸🇬' // Singapore
  | '🇹🇭' // Thailand
  | '🇵🇭' // Philippines
  | '🇮🇩' // Indonesia
  | '🇲🇾' // Malaysia
  | '🇻🇳' // Vietnam
  | '🇹🇷' // Turkey
  | '🇸🇦' // Saudi Arabia
  | '🇦🇪' // United Arab Emirates
  | '🇪🇬' // Egypt
  | '🇿🇲' // Zambia
  | '🇰🇿' // Kazakhstan
  | '🇵🇰' // Pakistan
  | '🇧🇩' // Bangladesh
  | '🇳🇵' // Nepal
  | '🇱🇰' // Sri Lanka
  | '🇲🇲' // Myanmar
  | '🇲🇦' // Morocco
  | '🇹🇳' // Tunisia
  | '🇪🇹' // Ethiopia
  | '🇺🇬' // Uganda
  | '🇲🇬' // Madagascar
  | '🇱🇧' // Lebanon
  | '🇯🇴' // Jordan
  | '🇮🇶' // Iraq
  | '🇮🇷' // Iran
  | '🇶🇦' // Qatar
  | '🇰🇼' // Kuwait
  | '🇧🇭' // Bahrain
  | '🇴🇲' // Oman
  | '🇾🇪' // Yemen
  | '🇸🇾' // Syria
  | '🇦🇫' // Afghanistan
  | '🇰🇭' // Cambodia
  | '🇱🇦' // Laos
  | '🇲🇻' // Maldives
  | '🇧🇳' // Brunei
  | '🇹🇱' // Timor-Leste
  | '🇵🇬' // Papua New Guinea
  | '🇫🇯' // Fiji
  | '🇹🇴' // Tonga
  | '🇼🇸' // Samoa
  | '🇻🇺' // Vanuatu
  | '🇸🇧' // Solomon Islands
  | '🇲🇭' // Marshall Islands
  | '🇲🇰' // North Macedonia
  | '🇧🇦' // Bosnia and Herzegovina
  | '🇷🇸' // Serbia
  | '🇲🇪' // Montenegro
  | '🇽🇰' // Kosovo
  | '🇦🇱' // Albania
  | '🇧🇬' // Bulgaria
  | '🇷🇴' // Romania
  | '🇲🇩' // Moldova
  | '🇺🇦' // Ukraine
  | '🇧🇾' // Belarus
  | '🇱🇹' // Lithuania
  | '🇱🇻' // Latvia
  | '🇪🇪' // Estonia
  | '🇬🇪' // Georgia
  | '🇦🇲' // Armenia
  | '🇦🇿' // Azerbaijan
  | '🇰🇬' // Kyrgyzstan
  | '🇹🇯' // Tajikistan
  | '🇺🇿' // Uzbekistan
  | '🇹🇲' // Turkmenistan
  | '🇲🇳' // Mongolia
  | '🇵🇦' // Panama
  | '🇨🇷' // Costa Rica
  | '🇳🇮' // Nicaragua
  | '🇭🇳' // Honduras
  | '🇸🇻' // El Salvador
  | '🇬🇹' // Guatemala
  | '🇧🇿' // Belize
  | '🇧🇴' // Bolivia
  | '🇵🇾' // Paraguay
  | '🇺🇾' // Uruguay
  | '🇪🇨' // Ecuador
  | '🇬🇾' // Guyana
  | '🇸🇷' // Suriname
  | '🇧🇧' // Barbados
  | '🇯🇲' // Jamaica
  | '🇧🇸' // Bahamas
  | '🇹🇹' // Trinidad and Tobago
  | '🇩🇲' // Dominica
  | '🇬🇩' // Grenada
  | '🇰🇳' // Saint Kitts and Nevis
  | '🇱🇨' // Saint Lucia
  | '🇻🇨' // Saint Vincent and the Grenadines
  | '🇩🇴' // Dominican Republic
  | '🇭🇹' // Haiti
  | '🇨🇺' // Cuba
  | '🇵🇷' // Puerto Rico
  | '🇧🇲' // Bermuda
  | '🇰🇾' // Cayman Islands
  | '🇹🇨' // Turks and Caicos Islands
  | '🇦🇼' // Aruba
  | '🇨🇼' // Curaçao
  | '🇸🇽' // Sint Maarten
  | '🇧🇶' // Bonaire, Sint Eustatius and Saba
  | '🇲🇶' // Martinique
  | '🇬🇵' // Guadeloupe
  | '🇬🇫' // French Guiana
  | '🇬🇱' // Greenland
  | '🇫🇴' // Faroe Islands
  | '🇬🇬' // Guernsey
  | '🇯🇪' // Jersey
  | '🇲🇴' // Macau
  | '🇭🇰' // Hong Kong
  | '🇹🇼' // Taiwan
  | '🇮🇲' // Isle of Man
  | '🇨🇽' // Christmas Island
  | '🇨🇨' // Cocos (Keeling) Islands
  | '🇳🇫' // Norfolk Island
  | '🇵🇫' // French Polynesia
  | '🇵🇳' // Pitcairn Islands
  | '🇹🇰' // Tokelau
  | '🇳🇺' // Niue
  | '🇼🇫' // Wallis and Futuna
  | '🇧🇱' // Saint Barthélemy
  | '🇸🇭' // Saint Helena, Ascension and Tristan da Cunha
  | '🇸🇨' // Seychelles
  | '🇲🇷' // Mauritania
  | '🇲🇺' // Mauritius
  | '🇱🇸' // Lesotho
  | '🇧🇼' // Botswana
  | '🇸🇿' // Eswatini
  | '🇳🇦' // Namibia
  | '🇦🇴' // Angola
  | '🇲🇿' // Mozambique
  | '🇲🇱' // Mali
  | '🇨🇬' // Republic of the Congo
  | '🇩🇿' // Algeria
  | '🇱🇾' // Libya
  | '🇸🇩' // Sudan
  | '🇸🇸' // South Sudan
  | '🇳🇪' // Niger
  | '🇧🇫' // Burkina Faso
  | '🇸🇳' // Senegal
  | '🇨🇮' // Côte d'Ivoire
  | '🇹🇬' // Togo
  | '🇧🇯' // Benin
  | '🇬🇲' // Gambia
  | '🇸🇱' // Sierra Leone
  | '🇱🇷' // Liberia
  | '🇨🇫' // Central African Republic
  | '🇨🇩' // Democratic Republic of the Congo
  | '🇧🇮' // Burundi
  | '🇷🇼' // Rwanda
  | '🇸🇴' // Somalia
  | '🇩🇯' // Djibouti
  | '🇪🇷' // Eritrea
  | '🇸🇹' // São Tomé and Príncipe
  | '🇰🇲' // Comoros
  | '🇲🇼' // Malawi
  | '🇨🇰' // Cook Islands
  | '🇧🇹' // Bhutan
  | '🇭🇷' // Croatia
  | '🇨🇾' // Cyprus
  | '🇲🇹' // Malta
  | '🇸🇮' // Slovenia
  | '🇨🇲' // Cameroon
  | '🇹🇩' // Chad
  | '🇬🇦' // Gabon
  | '🇬🇶' // Equitorial Guinea
  | '🇨🇻' // Cape Verde
  | '🇬🇳' // Guines
  | '🇬🇼' // Guinea-Bissau
  | '🇦🇩' // Andorra
  | '🇦🇬' // Antigua and Barbuda
  | '🇰🇮' // Kiribati
  | '🇳🇷' // Nauru
  | '🇵🇼' // Palau
  | '🇹🇻' // Tuvalu
  | '🇦🇶' // Antarctica
  | '🇦🇮' // Anguilla
  | '🇦🇸' // American Samoa
  | '🇫🇲' // Micronesia
  | '🇬🇺' // Guam
  | '🇲🇵' // Northern Mariana Islands
  | '🇲🇸' // Montserrat
  | '🇵🇲' // Saint Pierre and Miquelon
  | '🇻🇬' // British Virgin Islands
  | '🇻🇮' // U.S. Virgin Islands
  | '🇸🇯' // Svalbard and Jan Mayen
  | '🇪🇭' // Western Sahara
  | "🇵🇸" // Palestinian Territories

