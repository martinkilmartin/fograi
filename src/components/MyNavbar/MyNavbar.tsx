import { Link, Navbar, Switch, useTheme } from '@nextui-org/react'
import { useTheme as useNextTheme } from 'next-themes'
import Image from 'next/image'


export default function MyNavbar(): JSX.Element {
  const { setTheme } = useNextTheme()
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { isDark } = useTheme()
  return (
    <>
      <Navbar isBordered={isDark} shouldHideOnScroll variant="sticky">
        <Navbar.Brand>
          <Navbar.Toggle aria-label="toggle navigation" />
        </Navbar.Brand>
        <Navbar.Content>
          <Link href="/"><Image
            src="/img/OnlyHeadlines.svg"
            alt='Only Headlines logo'
            width={400}
            height={100} /></Link>
        </Navbar.Content>
        <Navbar.Content>
          <Navbar.Item>
            <Switch
              shadow
              color="primary"
              checked={isDark}
              onChange={(e) => setTheme(e.target.checked ? 'dark' : 'light')}
              size="xl"
              iconOn={`🌛`}
              iconOff={`🌞`}
            ></Switch>
          </Navbar.Item>
        </Navbar.Content>{' '}
        <Navbar.Collapse>
          <Navbar.CollapseItem>
            <Link
              color="inherit"
              css={{
                minWidth: '100%',
              }}
              href="/"
            >
              Homepage
            </Link>
          </Navbar.CollapseItem>
          <Navbar.CollapseItem>
            <Link
              color="inherit"
              css={{
                minWidth: '100%',
              }}
              href="/oz"
            >
              Australia
            </Link>
          </Navbar.CollapseItem>
          <Navbar.CollapseItem>
            <Link
              color="inherit"
              css={{
                minWidth: '100%',
              }}
              href="/ca"
            >
              Canada
            </Link>
          </Navbar.CollapseItem>
          <Navbar.CollapseItem>
            <Link
              color="inherit"
              css={{
                minWidth: '100%',
              }}
              href="/in"
            >
              India
            </Link>
          </Navbar.CollapseItem>
          <Navbar.CollapseItem>
            <Link
              color="inherit"
              css={{
                minWidth: '100%',
              }}
              href="/ie"
            >
              Ireland
            </Link>
          </Navbar.CollapseItem>
          <Navbar.CollapseItem>
            <Link
              color="inherit"
              css={{
                minWidth: '100%',
              }}
              href="/nz"
            >
              New Zealand
            </Link>
          </Navbar.CollapseItem>
          <Navbar.CollapseItem>
            <Link
              color="inherit"
              css={{
                minWidth: '100%',
              }}
              href="/uk"
            >
              UK
            </Link>
          </Navbar.CollapseItem>
          <Navbar.CollapseItem>
            <Link
              color="inherit"
              css={{
                minWidth: '100%',
              }}
              href="/us"
            >
              USA
            </Link>
          </Navbar.CollapseItem>
        </Navbar.Collapse>
      </Navbar>
    </>
  )
}
