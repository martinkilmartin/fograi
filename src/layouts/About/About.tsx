import { Container, Grid, Link, Text, Tooltip } from '@nextui-org/react';
import {
  CANewsSources,
  IENewsSources,
  INNewsSources,
  NZNewsSources,
  OZNewsSources,
  UKNewsSources,
  USNewsSources,
  TZNewsSources,
  ZWNewsSources,
  AENewsSources,
  ARNewsSources,
  DENewsSources,
  FRNewsSources,
  ITNewsSources,
  JPNewsSources,
  MXNewsSources,
  QANewsSources,
  IDNewsSources,
  SGNewsSources,
  NGNewsSources,
  ZANewsSources,
  KRNewsSources,
  CNNewsSources,
  ESNewsSources,
  PLNewsSources,
  KWNewsSources,
  PFNewsSources,
  CKNewsSources,
  TONewsSources,
  ASNewsSources,
  BRNewsSources,
  ILNewsSources,
  PSNewsSources,
  BDNewsSources,
  PHNewsSources,
  PKNewsSources,
  KENewsSources,
} from '@constants/NEWS_SOURCES';
import { flags } from '@constants/FLAGS';
import { COUNTRIES } from '@constants/COUNTRIES';
import { Countries } from 'src/types/countries';

const CA_SOURCES_SIZE = CANewsSources.size;
const IE_SOURCES_SIZE = IENewsSources.size;
const IN_SOURCES_SIZE = INNewsSources.size;
const NZ_SOURCES_SIZE = NZNewsSources.size;
const OZ_SOURCES_SIZE = OZNewsSources.size;
const UK_SOURCES_SIZE = UKNewsSources.size;
const US_SOURCES_SIZE = USNewsSources.size;
const TZ_SOURCES_SIZE = TZNewsSources.size;
const ZW_SOURCES_SIZE = ZWNewsSources.size;
const AE_SOURCES_SIZE = AENewsSources.size;
const AR_SOURCES_SIZE = ARNewsSources.size;
const DE_SOURCES_SIZE = DENewsSources.size;
const FR_SOURCES_SIZE = FRNewsSources.size;
const IT_SOURCES_SIZE = ITNewsSources.size;
const JP_SOURCES_SIZE = JPNewsSources.size;
const MX_SOURCES_SIZE = MXNewsSources.size;
const QA_SOURCES_SIZE = QANewsSources.size;
const ID_SOURCES_SIZE = IDNewsSources.size;
const SG_SOURCES_SIZE = SGNewsSources.size;
const NG_SOURCES_SIZE = NGNewsSources.size;
const ZA_SOURCES_SIZE = ZANewsSources.size;
const KR_SOURCES_SIZE = KRNewsSources.size;
const CN_SOURCES_SIZE = CNNewsSources.size;
const ES_SOURCES_SIZE = ESNewsSources.size;
const PL_SOURCES_SIZE = PLNewsSources.size;
const KW_SOURCES_SIZE = KWNewsSources.size;
const PF_SOURCES_SIZE = PFNewsSources.size;
const CK_SOURCES_SIZE = CKNewsSources.size;
const TO_SOURCES_SIZE = TONewsSources.size;
const AS_SOURCES_SIZE = ASNewsSources.size;
const BR_SOURCES_SIZE = BRNewsSources.size;
const IL_SOURCES_SIZE = ILNewsSources.size;
const PS_SOURCES_SIZE = PSNewsSources.size;
const BD_SOURCES_SIZE = BDNewsSources.size;
const PH_SOURCES_SIZE = PHNewsSources.size;
const PK_SOURCES_SIZE = PKNewsSources.size;
const KE_SOURCES_SIZE = KENewsSources.size;

const ALL_SIZES =
  CA_SOURCES_SIZE +
  IE_SOURCES_SIZE +
  IN_SOURCES_SIZE +
  NZ_SOURCES_SIZE +
  OZ_SOURCES_SIZE +
  UK_SOURCES_SIZE +
  US_SOURCES_SIZE +
  TZ_SOURCES_SIZE +
  ZW_SOURCES_SIZE +
  AE_SOURCES_SIZE +
  AR_SOURCES_SIZE +
  DE_SOURCES_SIZE +
  FR_SOURCES_SIZE +
  IT_SOURCES_SIZE +
  JP_SOURCES_SIZE +
  MX_SOURCES_SIZE +
  QA_SOURCES_SIZE +
  ID_SOURCES_SIZE +
  SG_SOURCES_SIZE +
  NG_SOURCES_SIZE +
  ZA_SOURCES_SIZE +
  KR_SOURCES_SIZE +
  CN_SOURCES_SIZE +
  ES_SOURCES_SIZE +
  PL_SOURCES_SIZE +
  KW_SOURCES_SIZE +
  PF_SOURCES_SIZE +
  CK_SOURCES_SIZE +
  TO_SOURCES_SIZE +
  AS_SOURCES_SIZE +
  BR_SOURCES_SIZE +
  IL_SOURCES_SIZE +
  PS_SOURCES_SIZE +
  BD_SOURCES_SIZE +
  PH_SOURCES_SIZE +
  PK_SOURCES_SIZE +
  KE_SOURCES_SIZE;

const CSM = new Map([
  ['ca', CA_SOURCES_SIZE],
  ['ie', IE_SOURCES_SIZE],
  ['in', IN_SOURCES_SIZE],
  ['nz', NZ_SOURCES_SIZE],
  ['oz', OZ_SOURCES_SIZE],
  ['uk', UK_SOURCES_SIZE],
  ['us', US_SOURCES_SIZE],
  ['tz', TZ_SOURCES_SIZE],
  ['zw', ZW_SOURCES_SIZE],
  ['ae', AE_SOURCES_SIZE],
  ['ar', AR_SOURCES_SIZE],
  ['de', DE_SOURCES_SIZE],
  ['fr', FR_SOURCES_SIZE],
  ['it', IT_SOURCES_SIZE],
  ['jp', JP_SOURCES_SIZE],
  ['mx', MX_SOURCES_SIZE],
  ['qa', QA_SOURCES_SIZE],
  ['id', ID_SOURCES_SIZE],
  ['sg', SG_SOURCES_SIZE],
  ['ng', NG_SOURCES_SIZE],
  ['za', ZA_SOURCES_SIZE],
  ['kr', KR_SOURCES_SIZE],
  ['cn', CN_SOURCES_SIZE],
  ['es', ES_SOURCES_SIZE],
  ['pl', PL_SOURCES_SIZE],
  ['kw', KW_SOURCES_SIZE],
  ['pf', PF_SOURCES_SIZE],
  ['ck', CK_SOURCES_SIZE],
  ['to', TO_SOURCES_SIZE],
  ['as', AS_SOURCES_SIZE],
  ['br', BR_SOURCES_SIZE],
  ['il', IL_SOURCES_SIZE],
  ['ps', PS_SOURCES_SIZE],
  ['bd', BD_SOURCES_SIZE],
  ['ph', PH_SOURCES_SIZE],
  ['pk', PK_SOURCES_SIZE],
  ['ke', KE_SOURCES_SIZE],
]);

const About = (): JSX.Element => {
  return (
    <Container css={{ padding: 10 }}>
      <Grid.Container justify="center">
        <Text
          h1
          size={60}
          css={{
            textGradient: '45deg, $blue600 0%, $red600 50%',
          }}
          weight="bold"
        >
          Know Everything.
        </Text>
      </Grid.Container>
      <Grid.Container justify="center">
        <Text
          h2
          size={60}
          css={{
            textGradient: '45deg, $red600 0%, $blue600 100%',
          }}
          weight="bold"
        >
          Now.
        </Text>
      </Grid.Container>
      <Grid.Container justify="center" gap={1}>
        {Array.from(flags.entries()).map((f) => (
          <Grid key={f[0]}>
            <Tooltip content={CSM.get(f[0])}>
              <Link
                href={`/country/${COUNTRIES.get(f[0] as Countries)
                  ?.toLowerCase()
                  .replaceAll(' ', '-')}`}
              >
                <Text h2>{f[1]}</Text>
              </Link>
            </Tooltip>
          </Grid>
        ))}
      </Grid.Container>
      <Grid.Container justify="center">
        <Text
          size={24}
          style={{ marginTop: '10px' }}
          css={{
            fontFamily: 'serif',
            textShadow: '2px 2px 2px rgba(0,0,0,0.2)',
          }}
        >
          Only Headlines.
        </Text>
      </Grid.Container>
      <Grid.Container justify="center">
        <Text>See the latest main headline from each news source.</Text>
      </Grid.Container>
      <Grid.Container justify="center">
        <Text
          size={24}
          style={{ marginTop: '10px' }}
          css={{
            fontFamily: 'serif',
            textShadow: '2px 2px 2px rgba(0,0,0,0.2)',
          }}
        >
          <Tooltip content={ALL_SIZES}>Hundreds of global sources.</Tooltip>
        </Text>
      </Grid.Container>
      <Grid.Container justify="center">
        <Text>
          Find the latest and breaking news with 24/7 worldwide coverage.
        </Text>
      </Grid.Container>
      <Grid.Container justify="center">
        <Text
          size={24}
          style={{
            marginTop: '10px',
            fontFamily: 'serif',
            textShadow: '2px 2px 2px rgba(0,0,0,0.2)',
          }}
        >
          Stay informed.
        </Text>
        <Grid.Container justify="center">
          <Text>Know everything that is going on, now.</Text>
        </Grid.Container>
      </Grid.Container>
      <Grid.Container justify="center">
        <Text size={24} style={{ marginTop: '10px' }}>
          <Link
            href="https://newsbrandsireland.ie/journalismmatters/"
            target="_blank"
            rel="noreferrer"
            style={{
              textDecoration: 'none',
              transition: 'color 0.3s',
              fontWeight: 'bold',
            }}
            onMouseOver={(e) => (e.currentTarget.style.color = '#D71E1F')}
            onMouseOut={(e) => (e.currentTarget.style.color = '')}
          >
            #journalismmatters&nbsp;↗
          </Link>
          .
        </Text>
      </Grid.Container>
      <Grid.Container justify="center">
        <Text>
          The future of journalism is at stake. Support real news from real
          people.
        </Text>
        <Grid.Container justify="center" style={{ marginTop: '20px' }}>
          <Link
            href="/contact"
            style={{
              padding: '10px 20px',
              background: '#0072F5',
              color: 'white',
              borderRadius: '5px',
              textDecoration: 'none',
              transition: 'background 0.3s',
            }}
            onMouseOver={(e) => (e.currentTarget.style.background = '#D71E1F')}
            onMouseOut={(e) => (e.currentTarget.style.background = '#0072F5')}
          >
            <b>Contact Us</b>
          </Link>
        </Grid.Container>
      </Grid.Container>
    </Container>
  );
};

export default About;
