import Image from 'next/image'

import { BRAND } from '@constants/CONTENT'
import { ThemeToggle } from '@components/ThemeToggle'

type Props = {
  logo?: StaticImageData
}

const Navbar = ({ logo }: Props): JSX.Element => (
  <div className="mb-2 shadow-lg navbar text-primary-content rounded-box">
    {logo && (
      <div className="justify-center flex-grow">
        {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
        <a href="/">
          <span className="sr-only">Home</span>
          <Image
            className="max-w-sm rounded-lg shadow-2xl"
            src={logo.src}
            alt={BRAND}
            height={69}
            width={200}
          />
        </a>
      </div>
    )}
    <div className="flex-none">
      <ThemeToggle />
    </div>
  </div>
)

export default Navbar
