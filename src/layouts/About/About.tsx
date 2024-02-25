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

const ALL_SIZES =
  CA_SOURCES_SIZE +
  IE_SOURCES_SIZE +
  IN_SOURCES_SIZE +
  NZ_SOURCES_SIZE +
  OZ_SOURCES_SIZE +
  UK_SOURCES_SIZE +
  US_SOURCES_SIZE +
  TZ_SOURCES_SIZE +
  ZW_SOURCES_SIZE;

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
