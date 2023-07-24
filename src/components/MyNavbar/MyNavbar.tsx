import { Link, Navbar, Switch, useTheme, Grid, Text } from '@nextui-org/react';
import { useTheme as useNextTheme } from 'next-themes';
import Image from 'next/image';
import { flags } from '@constants/FLAGS';
import { countries } from '@constants/COUNTRIES';

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
        <Navbar.Content>
          <Link href="/">
            <Image
              src="/img/nooze.svg"
              alt="Nooze logo"
              width={200}
              height={80}
            />
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
        </Navbar.Content>
        <Navbar.Collapse>
          <Navbar.CollapseItem>
            <Grid.Container justify="center" gap={2}>
              <Grid>
                <Link href="/bookmarks">
                  <Text size={48}>Bookmarks&nbsp;🔖</Text>
                </Link>
              </Grid>
            </Grid.Container>
          </Navbar.CollapseItem>
          <Navbar.CollapseItem>
            <Grid.Container justify="center" gap={2}>
              {Array.from(countries.entries()).map(([code, name]) => (
                <Grid key={code}>
                  <Link href={`/c/${code}`}>
                    <Text size={48}>
                      {name}&nbsp;{flags.get(code)}
                    </Text>
                  </Link>
                </Grid>
              ))}
            </Grid.Container>
          </Navbar.CollapseItem>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}
