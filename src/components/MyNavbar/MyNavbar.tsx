import { Link, Navbar, Switch, useTheme, Grid, Text } from '@nextui-org/react';
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
        </Navbar.Content>{' '}
        <Navbar.Collapse>
          <Navbar.CollapseItem>
            <Grid.Container justify="center" gap={2}>
              <Grid>
                <Link href="/oz">
                  <Text size={48}>Australia&nbsp;🇦🇺</Text>
                </Link>
              </Grid>
              <Grid>
                <Link href="/ca">
                  <Text size={48}>Canada&nbsp;🇨🇦</Text>
                </Link>
              </Grid>
              <Grid>
                <Link href="/in">
                  <Text size={48}>India&nbsp;🇮🇳</Text>
                </Link>
              </Grid>
              <Grid>
                <Link href="/ie">
                  <Text size={48}>Ireland&nbsp;🇮🇪</Text>
                </Link>
              </Grid>
              <Grid>
                <Link href="/nz">
                  <Text size={48}>New&nbsp;Zealand&nbsp;🇳🇿</Text>
                </Link>
              </Grid>
              <Grid>
                <Link
                  color="inherit"
                  css={{
                    minWidth: '100%',
                  }}
                  href="/uk"
                >
                  <Text size={48}>UK&nbsp;🇬🇧</Text>
                </Link>
              </Grid>
              <Grid>
                <Link
                  color="inherit"
                  css={{
                    minWidth: '100%',
                  }}
                  href="/us"
                >
                  <Text size={48}>USA&nbsp;🇺🇸</Text>
                </Link>
              </Grid>
            </Grid.Container>
          </Navbar.CollapseItem>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}
