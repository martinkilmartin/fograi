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
  <Container xl style={{ padding: '0', display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
    <HTMLHead title={title} description={heading} />
    <MyNavbar />
    <Grid.Container justify="center" style={{ flex: '1 0 auto' }}>{children}</Grid.Container>
    <Footer />
  </Container>
)

export default Page
