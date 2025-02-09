import React, { useState } from 'react';
import { useQueryClient } from 'react-query';
import { useRouter } from 'next/router';
import {
  Button,
  Collapse,
  Grid,
  Input,
  Link,
  Loading,
  Modal,
  Navbar,
  Spacer,
  Switch,
  Text,
  useTheme,
} from '@nextui-org/react';
import { useTheme as useNextTheme } from 'next-themes';
import Image from 'next/image';
import Countries from '@components/Filters/Countries';
import Sources from '@components/Filters/Sources';
import MediaTypes from '@components/Filters/MediaTypes';
import Langs from '@components/Filters/Langs';

export default function MyNavbar(): JSX.Element {
  const { setTheme } = useNextTheme();
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const modalHandler = () => setModalVisible(true);
  const router = useRouter();
  const queryClient = useQueryClient();
  const { isDark } = useTheme();

  const handleSearch = () => {
    setLoading(true);
    queryClient.removeQueries('headlines');
    router.push(`/search/${searchTerm}`);
    setTimeout(() => {
      setLoading(false);
      setModalVisible(false);
    }, 3000);
  };

  const closeModalHandler = () => {
    setModalVisible(false);
  };

  function clearAllFilters() {
    localStorage.removeItem('likedCountries');
    localStorage.removeItem('likedSources');
    localStorage.removeItem('likedMediaTypes');
    localStorage.removeItem('likedLanguages');
    queryClient.invalidateQueries('headlines');
  }

  return (
    <>
      <Navbar
        isBordered={isDark}
        shouldHideOnScroll
        variant="sticky"
        style={{
          backgroundColor: '#ededf0',
        }}
      >
        <Grid.Container gap={2}>
          <Grid xs={2}>
            <Navbar.Toggle aria-label="toggle navigation" />
          </Grid>
          <Grid xs={8} justify="center">
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
          <Grid xs={2}>
            <Button
              auto
              color={isDark ? 'warning' : 'primary'}
              bordered
              rounded
              size="xs"
              style={{
                alignSelf: 'center',
              }}
              onPress={modalHandler}
            >
              ⚙️
            </Button>
            <Modal
              fullScreen
              closeButton
              aria-labelledby="modal-title"
              open={modalVisible}
              onClose={closeModalHandler}
            >
              <Modal.Header>
                <Switch
                  shadow
                  color="primary"
                  checked={isDark}
                  onChange={(e) =>
                    setTheme(e.target.checked ? 'dark' : 'light')
                  }
                  size="xl"
                  iconOn={`🌛`}
                  iconOff={`🌞`}
                ></Switch>
              </Modal.Header>
              <Modal.Header>
                <form onSubmit={() => handleSearch()}>
                  <Grid.Container>
                    <Grid xs={12}>
                      <Input
                        clearable
                        bordered
                        color="primary"
                        placeholder={
                          searchTerm.length ? searchTerm : 'Search..'
                        }
                        onChange={(e) => setSearchTerm(e.target.value)}
                      />
                      <Spacer y={1} />
                      <Button auto bordered onClick={() => handleSearch()}>
                        {loading ? <Loading /> : '🔎'}
                      </Button>
                    </Grid>
                  </Grid.Container>
                </form>
              </Modal.Header>
              <Modal.Header>
                <Text id="modal-title" size={18}>
                  Filters{' '}
                  <span
                    style={{ color: 'red' }}
                    onClick={() => clearAllFilters()}
                  >
                    🗑️
                  </span>
                </Text>
              </Modal.Header>
              <Modal.Body>
                <Collapse.Group>
                  <Collapse title="Media Types">
                    <MediaTypes />
                  </Collapse>
                  <Collapse title="Languages">
                    <Langs />
                  </Collapse>
                  <Collapse title="Countries">
                    <Countries />
                  </Collapse>
                  <Collapse title="Sources">
                    <Sources />
                  </Collapse>
                </Collapse.Group>
              </Modal.Body>
              <Modal.Footer>
                <Button auto flat color="error" onPress={closeModalHandler}>
                  Close
                </Button>
              </Modal.Footer>
            </Modal>
          </Grid>
        </Grid.Container>
        <Navbar.Collapse>
          <Navbar.CollapseItem
            css={{
              justifyContent: 'center',
            }}
          >
            <Link href={`/about`}>
              <Text size={24}>🤷&nbsp;&nbsp;About</Text>
            </Link>
          </Navbar.CollapseItem>
          <Navbar.CollapseItem
            css={{
              justifyContent: 'center',
            }}
          >
            <Link href="/bookmarks">
              <Text size={24}>🔖&nbsp;&nbsp;Bookmarks</Text>
            </Link>
          </Navbar.CollapseItem>
          <Navbar.CollapseItem
            css={{
              justifyContent: 'center',
            }}
          >
            <Link href={`/contact`}>
              <Text size={24}>💌&nbsp;&nbsp;Contact</Text>
            </Link>
          </Navbar.CollapseItem>
          <Navbar.CollapseItem
            css={{
              justifyContent: 'center',
            }}
          >
            <Link href="/countries">
              <Text size={24}>🗺️&nbsp;&nbsp;Countries</Text>
            </Link>
          </Navbar.CollapseItem>
          <Navbar.CollapseItem
            css={{
              justifyContent: 'center',
            }}
          >
            <Link href={`/sources`}>
              <Text size={24}>📰&nbsp;&nbsp;Sources</Text>
            </Link>
          </Navbar.CollapseItem>
          <Navbar.CollapseItem
            css={{
              justifyContent: 'center',
            }}
          >
            <Link href={`/roadmap`}>
              <Text size={24}>📍&nbsp;&nbsp;Roadmap</Text>
            </Link>
          </Navbar.CollapseItem>
          <Navbar.CollapseItem
            css={{
              justifyContent: 'center',
            }}
          >
            <Link href={`/cookie`}>
              <Text size={24}>🥠&nbsp;&nbsp;Cookie Policy</Text>
            </Link>
          </Navbar.CollapseItem>
          <Navbar.CollapseItem
            css={{
              justifyContent: 'center',
            }}
          >
            <Link href={`/privacy`}>
              <Text size={24}>🔏&nbsp;&nbsp;Privacy Policy</Text>
            </Link>
          </Navbar.CollapseItem>
          <Navbar.CollapseItem
            css={{
              justifyContent: 'center',
            }}
          >
            <Link href={`/terms`}>
              <Text size={24}>🧸&nbsp;&nbsp;Terms Of Use</Text>
            </Link>
          </Navbar.CollapseItem>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}
