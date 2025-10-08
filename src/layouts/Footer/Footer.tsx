import { Copyright } from '@components/Copyright';
import { FOOTER_LINKS } from '@constants/FOOTER_LINKS';
import Link from 'next/link';
import { RedditLogo } from '@components/SVG';
import X from '@components/SVG/X';

const Footer = (): JSX.Element => (
  <footer
    style={{
      marginBottom: '50px',
    }}
  >
    <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
      {FOOTER_LINKS.map((linkSection, idx) => (
        <div key={idx}>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <h3>{linkSection.title}</h3>
            {linkSection.urls.map((url, idx) => (
              <span key={idx} style={{ fontWeight: 'bold', fontSize: '18px' }}>
                <Link href={url.path}>{url.text}</Link>
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
    <div style={{ display: 'flex', justifyContent: 'center', gap: '16px' }}>
      <div>
        <Link href="https://www.reddit.com/u/noozenews" target="_blank">
          <RedditLogo />
        </Link>
      </div>
      <div>
        <Link href="https://twitter.com/NoozeNews" target="_blank">
          <X />
        </Link>
      </div>
    </div>
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
