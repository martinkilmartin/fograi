import React, { useState } from 'react';
import { useQueryClient } from 'react-query';
import { useRouter } from 'next/router';
import {
  Grid,
  Button,
  Dropdown,
  Input,
  Loading,
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
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const queryClient = useQueryClient();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { isDark } = useTheme();

  const handleSearch = () => {
    setLoading(true);
    queryClient.removeQueries('headlines');
    router.push(`/search/${searchTerm}`);
    setTimeout(() => setLoading(false), 3000);
  };

  return (
    <>
      <Navbar isBordered={isDark} shouldHideOnScroll variant="sticky">
        <Grid.Container gap={2}>
          <Grid xs={2}>
            <Navbar.Toggle aria-label="toggle navigation" />
          </Grid>
          <Grid xs={10} justify="center">
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
          </Grid>
        </Grid.Container>
        <Navbar.Collapse>
          <Navbar.CollapseItem>
            <form onSubmit={() => handleSearch()}>
              <Grid.Container gap={4}>
                <Grid xs={12}>
                  <Input
                    clearable
                    bordered
                    color="primary"
                    placeholder={searchTerm.length ? searchTerm : 'Search...'}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                  <Button auto bordered onClick={() => handleSearch()}>
                    {loading ? <Loading /> : '🔎'}
                  </Button>
                </Grid>
              </Grid.Container>
            </form>
          </Navbar.CollapseItem>
          <Navbar.CollapseItem>
            <Switch
              shadow
              color="primary"
              checked={isDark}
              onChange={(e) => setTheme(e.target.checked ? 'dark' : 'light')}
              size="xl"
              iconOn={`🌛`}
              iconOff={`🌞`}
            ></Switch>
          </Navbar.CollapseItem>
          <Navbar.CollapseItem>
            <Link href="/countries">
              <Text size={24}>🗺️&nbsp;Countries</Text>
            </Link>
          </Navbar.CollapseItem>
          <Navbar.CollapseItem>
            <Link href="/bookmarks">
              <Text size={24}>🔖&nbsp;Bookmarks</Text>
            </Link>
          </Navbar.CollapseItem>
          <Navbar.CollapseItem>
            <Link href={`/sources`}>
              <Text size={24}>📰&nbsp;Sources</Text>
            </Link>
          </Navbar.CollapseItem>
          <Navbar.CollapseItem>
            <Dropdown>
              <Dropdown.Trigger>
                <Dropdown.Button flat>
                  <Text size={24}>💼&nbsp;Company</Text>
                </Dropdown.Button>
              </Dropdown.Trigger>
              <Dropdown.Menu>
                <Dropdown.Item>
                  <Link href={`/about`}>
                    <Text size={24}>🤷&nbsp;About</Text>
                  </Link>
                </Dropdown.Item>
                <Dropdown.Item>
                  <Link href={`/contact`}>
                    <Text size={24}>💌&nbsp;Contact</Text>
                  </Link>
                </Dropdown.Item>
                <Dropdown.Item>
                  <Link href={`/roadmap`}>
                    <Text size={24}>📍&nbsp;Roadmap</Text>
                  </Link>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
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
