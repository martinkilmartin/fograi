import { ThemeToggle } from '@components/ThemeToggle'
import type { StaticImageData } from 'next/image'

type Props = {
  logo?: StaticImageData
}

const Navbar = ({ logo }: Props): JSX.Element => (
  <div className="mb-2 shadow-lg navbar rounded-box">
    {logo && (
      <div className="justify-center flex-grow">
        {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
        <a href="/">
          <span className="sr-only">Home</span>
          <span className="text-5xl">
            <i>
              📢&nbsp;<b>fógr.aí</b>
            </i>
          </span>
        </a>
      </div>
    )}
    <div className="flex-none">
      <ThemeToggle />
    </div>
  </div>
)

export default Navbar
