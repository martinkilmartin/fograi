import {
  Dropdown,
  Link,
  Navbar,
  Switch,
  useTheme,
  Text,
} from '@nextui-org/react';
import { useTheme as useNextTheme } from 'next-themes';
import Image from 'next/image';

export default function MyNavbar(): JSX.Element {
  const { setTheme } = useNextTheme();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { isDark } = useTheme();
  return (
    <>
      <Navbar isBordered={isDark} shouldHideOnScroll variant="sticky">
        <Navbar.Brand>
          <Navbar.Toggle aria-label="toggle navigation" />
        </Navbar.Brand>
        <Navbar.Brand>
          <Link href="/">
            <Image
              src="/img/nooze.svg"
              alt="Nooze logo"
              width={200}
              height={80}
            />
          </Link>
        </Navbar.Brand>
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
        </Navbar.Content>
        <Navbar.Collapse>
          <Navbar.CollapseItem>
            <Link href={`/about`}>
              <Text size={24}>🤷&nbsp;About</Text>
            </Link>
          </Navbar.CollapseItem>
          <Navbar.CollapseItem>
            <Link href="/bookmarks">
              <Text size={24}>🔖&nbsp;Bookmarks</Text>
            </Link>
          </Navbar.CollapseItem>
          <Navbar.CollapseItem>
            <Link href={`/contact`}>
              <Text size={24}>💌&nbsp;Contact</Text>
            </Link>
          </Navbar.CollapseItem>
          <Navbar.CollapseItem>
            <Link href="/countries">
              <Text size={24}>🗺️&nbsp;Countries</Text>
            </Link>
          </Navbar.CollapseItem>
          <Navbar.CollapseItem>
            <Link href={`/sources`}>
              <Text size={24}>📰&nbsp;Sources</Text>
            </Link>
          </Navbar.CollapseItem>
          <Navbar.CollapseItem>
            <Link href={`/roadmap`}>
              <Text size={24}>📍&nbsp;Roadmap</Text>
            </Link>
          </Navbar.CollapseItem>
          <Navbar.CollapseItem>
            <Dropdown>
              <Dropdown.Trigger>
                <Dropdown.Button flat>
                  <Text size={24}>⚖️&nbsp;Legal</Text>
                </Dropdown.Button>
              </Dropdown.Trigger>
              <Dropdown.Menu>
                <Dropdown.Item>
                  <Link href={`/cookie`}>
                    <Text size={24}>🥠&nbsp;Cookie Policy</Text>
                  </Link>
                </Dropdown.Item>
                <Dropdown.Item>
                  <Link href={`/privacy`}>
                    <Text size={24}>🔏&nbsp;Privacy Policy</Text>
                  </Link>
                </Dropdown.Item>
                <Dropdown.Item>
                  <Link href={`/terms`}>
                    <Text size={24}>🧸&nbsp;Terms Of Use</Text>
                  </Link>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Navbar.CollapseItem>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}
