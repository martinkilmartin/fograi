import { COUNTRIES } from '@constants/COUNTRIES';
import { flags } from '@constants/FLAGS';
import { Countries as CountriesType } from 'src/types/countries';

export const normalizeCountryCodeFromKey = (key: string): string => {
  const raw = (key || '').slice(0, 2).toUpperCase();
  return raw === 'OZ' ? 'AU' : raw;
};

export const toFlagEmoji = (iso2: string): string => {
  try {
    const cc = (iso2 || '').toUpperCase();
    if (!/^[A-Z]{2}$/.test(cc)) return '🏳️';
    const A = 0x1F1E6;
    return String.fromCodePoint(A + cc.charCodeAt(0) - 65, A + cc.charCodeAt(1) - 65);
  } catch {
    return '🏳️';
  }
};

export const countryFlagKeyForMap = (iso2: string): CountriesType =>
  (iso2 === 'AU' ? 'oz' : iso2.toLowerCase()) as CountriesType;

export const getFlag = (iso2: string): string => {
  const key = countryFlagKeyForMap(iso2);
  return flags.get(key) ?? toFlagEmoji(iso2);
};

export const countryLabel = (() => {
  let displayNames: Intl.DisplayNames | null = null;
  try {
    displayNames = new Intl.DisplayNames(['en'], { type: 'region' });
  } catch {
    displayNames = null;
  }
  return (iso2: string): string => {
    const key = countryFlagKeyForMap(iso2);
    const fromMap = COUNTRIES.get(key);
    if (fromMap) return fromMap;
    try {
      return displayNames ? (displayNames as any).of(iso2) ?? iso2 : iso2;
    } catch {
      return iso2;
    }
  };
})();

export const countryToContinent = (iso2: string): string => {
  const cc = (iso2 || '').toUpperCase();
  const AUSET = new Set(['AU', 'NZ', 'FJ', 'PG', 'AS', 'CK', 'PF']);
  const NASET = new Set(['US', 'CA', 'MX']);
  const SASET = new Set(['BR', 'AR', 'CL', 'CO', 'PE', 'UY', 'PY', 'BO', 'VE', 'EC']);
  const EUSET = new Set(['GB','UK','IE','FR','DE','ES','IT','PT','NL','BE','SE','NO','DK','FI','CH','AT','PL','CZ','HU','RO','UA','RU','GR','BG','HR','RS','SK','SI','EE','LV','LT','IS']);
  const AFSET = new Set(['ZA','NG','KE','EG','MA','DZ','TN','GH','ET','CI','TZ','ZW']);
  const ASSET = new Set(['CN','JP','KR','IN','PK','BD','ID','TH','VN','PH','SG','MY','HK','TW','SA','AE','TR','IL','IR','LK']);
  const ANSET = new Set(['AQ']);
  if (AUSET.has(cc)) return 'Oceania';
  if (NASET.has(cc)) return 'North America';
  if (SASET.has(cc)) return 'South America';
  if (EUSET.has(cc)) return 'Europe';
  if (AFSET.has(cc)) return 'Africa';
  if (ASSET.has(cc)) return 'Asia';
  if (ANSET.has(cc)) return 'Antarctica';
  return 'Other';
};
