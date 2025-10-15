import Image from "next/image"
import type { StaticImageData } from "next/image"
import Link from 'next/link'

type Props = {
  bgImageData?: StaticImageData
  bgImageAlt?: string
  heading?: string
  description?: string
  links?: string[][]
}

const Hero = ({
  bgImageData,
  bgImageAlt,
  heading,
  description,
  links,
}: Props): JSX.Element => (
  <div className="hero">
    <div className="flex-col hero-content lg:flex-row-reverse">
      {bgImageData && (
        <Image
          className="max-w-sm rounded-lg shadow-2xl"
          src={bgImageData.src}
          alt={bgImageAlt ?? 'Background image'}
          height={bgImageData.height}
          width={bgImageData.width}
          style={{
            maxWidth: "100%",
            height: "auto"
          }} />
      )}
      <div>
        {heading && (
          <h1 className="mb-5 text-5xl font-bold text-center">{heading}</h1>
        )}
        {description && <p className="mb-5">{description}</p>}
        {links && (
          <h1 className="mb-5 text-5xl font-bold text-center">
            {links.map((link, index) => (
              <Link className="mx-4" href={`/${link[0]}`} key={index}>
                {link[1]}
              </Link>
            ))}
          </h1>
        )}
      </div>
    </div>
  </div>
)

export default Hero
