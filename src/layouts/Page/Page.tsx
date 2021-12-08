import { ReactNode } from 'react'

import { Container } from '@layouts/Container'
import { HTMLHead } from '@components/HTMLHead'
import { Navbar } from '@layouts/Navbar'
import logo from '@img/fograi-transparent.webp'
import { Footer } from '@layouts/Footer'

type Props = {
  title: string
  heading: string
  children: ReactNode
}

const Page = ({ title, heading, children }: Props): JSX.Element => (
  <Container>
    <HTMLHead title={title} description={heading} />
    <Navbar logo={logo} />
    {children}
    <Footer />
  </Container>
)

export default Page
