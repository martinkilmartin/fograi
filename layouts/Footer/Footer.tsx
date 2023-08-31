import { Copyright } from '@components/Copyright';
import { FOOTER_LINKS } from '@constants/FOOTER_LINKS';
import Link from 'next/link';

const Footer = (): JSX.Element => (
  <footer>
    <div
      className="grid-container"
      style={{ alignContent: 'center', padding: '2px' }}
    >
      {FOOTER_LINKS.map((linkSection, idx) => (
        <div className="grid" key={idx}>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <h3>{linkSection.title}</h3>
            {linkSection.urls.map((url, idx) => (
              <span style={{ fontSize: 18, fontWeight: 'bold' }} key={idx}>
                <Link href={url.path}>{url.text}</Link>
              </span>
            ))}
          </div>
        </div>
      ))}
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
