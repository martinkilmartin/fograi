import { Link, Navbar, Text, Switch, useTheme, Avatar } from '@nextui-org/react'
import { useTheme as useNextTheme } from 'next-themes'
import HeadlineLogoFilled from "../SVG/HeadineLogoFilled"

export default function MyNavbar(): JSX.Element {
  const { setTheme } = useNextTheme()
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { isDark, type } = useTheme()
  return (
    <>
      <Navbar isBordered={isDark} shouldHideOnScroll variant="sticky">
        <Navbar.Brand>
          <Navbar.Toggle aria-label="toggle navigation" showIn="sm" />
          <HeadlineLogoFilled />
          <Text b color="inherit" hideIn="xs">
            <Link href="/">fógr.aí</Link>
          </Text>
        </Navbar.Brand>
        <Navbar.Content enableCursorHighlight hideIn="sm" variant="underline">
          <Link href="/oz">
            <Navbar.Link>
              <Avatar size="sm"
                bordered
                rounded
                text="🇦🇺" />
            </Navbar.Link>
          </Link>
          <Link href="/ca">
            <Navbar.Link>
              <Avatar size="sm"
                bordered
                rounded
                text="🇨🇦" />
            </Navbar.Link>
          </Link>
          <Link href="/in">
            <Navbar.Link>
              <Avatar size="sm"
                bordered
                rounded
                text="🇮🇳" />
            </Navbar.Link>
          </Link>
          <Link href="/ie">
            <Navbar.Link>
              <Avatar size="sm"
                bordered
                rounded
                text="🇮🇪" />
            </Navbar.Link>
          </Link>
          <Link href="/nz">
            <Navbar.Link>
              <Avatar size="sm"
                bordered
                rounded
                text="🇳🇿" />
            </Navbar.Link>
          </Link>
          <Link href="/uk">
            <Navbar.Link>
              <Avatar size="sm"
                bordered
                rounded
                text="🇬🇧" />
            </Navbar.Link>
          </Link>
          <Link href="/us">
            <Navbar.Link>
              <Avatar size="sm"
                bordered
                rounded
                text="🇺🇸" />
            </Navbar.Link>
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
