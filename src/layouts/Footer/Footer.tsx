import { FooterLinks } from '@layouts/Footer'
import { Copyright } from '@components/Copyright'

import { FOOTER_LINKS } from '@constants/FOOTER_LINKS'

const Footer = (): JSX.Element => (
  <footer>
    <FooterLinks links={FOOTER_LINKS} />
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
)

export default Footer
