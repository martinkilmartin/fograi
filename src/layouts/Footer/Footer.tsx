import { Copyright } from '@components/Copyright';

import { FOOTER_LINKS } from '@constants/FOOTER_LINKS';
import Link from 'next/link';

const Footer = (): JSX.Element => (
  <footer>
    {FOOTER_LINKS.map((linkSection, idx) => (
      <div
        key={idx}
        style={{
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <h3>{linkSection.title}</h3>
        {linkSection.urls.map((url, idx) => (
          <Link key={idx} href={url.path}>
            {url.text}
          </Link>
        ))}
      </div>
    ))}
    <div>
      <Copyright />
    </div>
    <style jsx>{`
      footer {
        width: 100%;
        bottom: 0;
        background: #f8f9fa;
        padding: 10px 0;
        text-align: center;
      }
    `}</style>
  </footer>
);

export default Footer;
