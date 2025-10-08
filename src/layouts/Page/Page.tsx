import { ReactNode } from 'react'
import { HTMLHead } from '@components/HTMLHead'
import { MyNavbar } from '@components/MyNavbar'
import { Footer } from '@layouts/Footer'

type Props = {
  title: string
  heading: string
  children: ReactNode
}

const Page = ({ title, heading, children }: Props): JSX.Element => (
  <div style={{ padding: '0', display: 'flex', flexDirection: 'column', minHeight: '100dvh', maxWidth: '1200px', margin: '0 auto' }}>
    <HTMLHead title={title} description={heading} />
    <MyNavbar />
    <div style={{ flex: '1 0 auto', display: 'flex', justifyContent: 'center' }}>{children}</div>
    <Footer />
  </div>
)

export default Page
