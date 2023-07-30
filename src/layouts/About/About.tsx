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
} from '@constants/NEWS_SOURCES';
import { flags } from '@constants/FLAGS';

type Props = {
  title: string;
};

const CA_SOURCES_SIZE = CANewsSources.size;
const IE_SOURCES_SIZE = IENewsSources.size;
const IN_SOURCES_SIZE = INNewsSources.size;
const NZ_SOURCES_SIZE = NZNewsSources.size;
const OZ_SOURCES_SIZE = OZNewsSources.size;
const UK_SOURCES_SIZE = UKNewsSources.size;
const US_SOURCES_SIZE = USNewsSources.size;
const TZ_SOURCES_SIZE = TZNewsSources.size;

const ALL_SIZES =
  CA_SOURCES_SIZE +
  IE_SOURCES_SIZE +
  IN_SOURCES_SIZE +
  NZ_SOURCES_SIZE +
  OZ_SOURCES_SIZE +
  UK_SOURCES_SIZE +
  US_SOURCES_SIZE +
  TZ_SOURCES_SIZE;

const CSM = new Map([
  ['ca', CA_SOURCES_SIZE],
  ['ie', IE_SOURCES_SIZE],
  ['in', IN_SOURCES_SIZE],
  ['nz', NZ_SOURCES_SIZE],
  ['oz', OZ_SOURCES_SIZE],
  ['uk', UK_SOURCES_SIZE],
  ['us', US_SOURCES_SIZE],
  ['tz', TZ_SOURCES_SIZE],
]);

const About = ({ title }: Props): JSX.Element => (
  <Container css={{ padding: 10 }}>
    <Grid.Container justify="center">
      <Text h1>{title}</Text>
    </Grid.Container>
    <Text
      h2
      size={60}
      css={{
        textGradient: '45deg, $blue600 -20%, $pink600 50%',
      }}
      weight="bold"
    >
      Journalism Matters:
    </Text>
    <Text
      h2
      size={60}
      css={{
        textGradient: '45deg, $purple600 -20%, $pink600 100%',
      }}
      weight="bold"
    >
      Stay Updated with
    </Text>
    <Text
      h3
      size={60}
      css={{
        textGradient: '45deg, $yellow600 -20%, $red600 100%',
      }}
      weight="bold"
    >
      Global Headlines Instantly!
    </Text>
    <Grid.Container justify="center" gap={1}>
      {Array.from(flags.entries()).map((f) => (
        <Grid key={f[0]}>
          <Tooltip content={CSM.get(f[0])}>
            <Text h2>{f[1]}</Text>
          </Tooltip>
        </Grid>
      ))}
    </Grid.Container>
    <Text size={24} style={{ marginTop: '10px' }}>
      Dive into what matters most.
    </Text>
    <Text size={24} style={{ marginTop: '10px' }}>
      <b>Continuous</b> headlines from <b>{ALL_SIZES}</b> global news sources.
    </Text>
    <Text size={24} style={{ marginTop: '10px' }}>
      Showcasing each publication&apos;s <b>lead</b> story.
    </Text>
    <Text size={24} style={{ marginTop: '10px' }}>
      Stay informed.
    </Text>
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
  </Container>
);

export default About;
