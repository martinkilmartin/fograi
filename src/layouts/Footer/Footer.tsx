import { Grid, Text } from '@nextui-org/react';
import { Copyright } from '@components/Copyright';
import { FOOTER_LINKS } from '@constants/FOOTER_LINKS';
import Link from 'next/link';

const Footer = (): JSX.Element => (
  <footer>
    <Grid.Container justify="center" gap={2}>
      {FOOTER_LINKS.map((linkSection, idx) => (
        <Grid key={idx}>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <h3>{linkSection.title}</h3>
            {linkSection.urls.map((url, idx) => (
              <Text key={idx} weight="bold" size={18}>
                <Link href={url.path}>{url.text}</Link>
              </Text>
            ))}
          </div>
        </Grid>
      ))}
    </Grid.Container>
    <div>
      <Copyright />
    </div>
    <style jsx>{`
      footer {
        width: 100%;
        bottom: 0;
        padding-bottom: 10px;
        text-align: center;
      }
    `}</style>
  </footer>
);

export default Footer;
