import { Container, Grid, Link, Text, Tooltip } from '@nextui-org/react';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
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

const About = (): JSX.Element => {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null);
  const ref5 = useRef(null);
  const ref6 = useRef(null);

  const refs = [ref1, ref2, ref3, ref4, ref5, ref6];

  useEffect(() => {
    refs.forEach((ref, idx) => {
      const startPosition = idx % 2 === 0 ? '-100%' : '100%';

      gsap.fromTo(
        ref.current,
        {
          x: startPosition,
          opacity: 0,
        },
        {
          x: '0%', // Settle to its original position
          opacity: 1,
          duration: 1.6,
          ease: 'power2.out',
          delay: idx * 1.6, // Each element starts 0.6 seconds after the previous one
        },
      );
    });
  }, []);

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
              <Text h2>{f[1]}</Text>
            </Tooltip>
          </Grid>
        ))}
      </Grid.Container>
      <Grid.Container justify="center" ref={ref1}>
        <Text
          size={24}
          style={{ marginTop: '10px' }}
          css={{
            fontFamily: 'serif',
            textShadow: '2px 2px 2px rgba(0,0,0,0.2)',
          }}
        >
          Dive into what matters most.
        </Text>
      </Grid.Container>
      <Grid.Container justify="center" ref={ref2}>
        <Text
          size={24}
          style={{ marginTop: '10px' }}
          css={{
            fontFamily: 'serif',
            textShadow: '2px 2px 2px rgba(0,0,0,0.2)',
          }}
        >
          <b>Continuous</b> headlines from <b>{ALL_SIZES}</b> global news
          sources.
        </Text>
      </Grid.Container>
      <Grid.Container justify="center" ref={ref3}>
        <Text
          size={24}
          style={{ marginTop: '10px' }}
          css={{
            fontFamily: 'serif',
            textShadow: '2px 2px 2px rgba(0,0,0,0.2)',
          }}
        >
          Showcasing each publication&apos;s <b>lead</b> story.
        </Text>
      </Grid.Container>
      <Grid.Container
        justify="center"
        css={{
          fontFamily: 'serif',
          textShadow: '2px 2px 2px rgba(0,0,0,0.2)',
        }}
        ref={ref4}
      >
        <Text size={24} style={{ marginTop: '10px' }}>
          Stay informed.
        </Text>
      </Grid.Container>
      <Grid.Container justify="center" ref={ref5}>
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
      <Grid.Container justify="center" style={{ marginTop: '20px' }} ref={ref6}>
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
};

export default About;
