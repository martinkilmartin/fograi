import { Link, Navbar, Text, Switch, useTheme } from '@nextui-org/react'
import { useTheme as useNextTheme } from 'next-themes'

export default function MyNavbar(): JSX.Element {
  const { setTheme } = useNextTheme()
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { isDark, type } = useTheme()
  return (
    <>
      <Navbar isBordered={isDark} shouldHideOnScroll variant="sticky">
        <Navbar.Brand>
          <Navbar.Toggle aria-label="toggle navigation" showIn="sm" />
          <Text b color="inherit" hideIn="xs">
            📢&nbsp;fógr.aí
          </Text>
        </Navbar.Brand>
        <Navbar.Content enableCursorHighlight hideIn="sm" variant="underline">
          <Link href="/ie">
            <Navbar.Link>Ireland</Navbar.Link>
          </Link>
          <Link href="/in">
            <Navbar.Link>India</Navbar.Link>
          </Link>
          <Link href="/ca">
            <Navbar.Link>Canada</Navbar.Link>
          </Link>
          <Link href="/uk">
            <Navbar.Link>UK</Navbar.Link>
          </Link>
          <Link href="/us">
            <Navbar.Link>USA</Navbar.Link>
          </Link>
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
