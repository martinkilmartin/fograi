import { ReactNode } from 'react'

import { Container, Grid } from '@nextui-org/react'
import { HTMLHead } from '@components/HTMLHead'
import { MyNavbar } from '@components/MyNavbar'
import { Footer } from '@layouts/Footer'

type Props = {
  title: string
  heading: string
  children: ReactNode
}

const Page = ({ title, heading, children }: Props): JSX.Element => (
  <Container>
    <HTMLHead title={title} description={heading} />
    <MyNavbar />
    <Grid.Container justify="center">{children}</Grid.Container>
    <Footer />
  </Container>
)

export default Page
