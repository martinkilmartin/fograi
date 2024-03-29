import React, { useState } from 'react';
import { useQueryClient } from 'react-query';
import { useRouter } from 'next/router';
import { APP_TITLE, TAG_LINE } from '@constants/CONTENT';
import { Page } from '@layouts/Page';
import {
  Button,
  Grid,
  Input,
  Loading,
  Row,
  Spacer,
  Text,
} from '@nextui-org/react';

const HomePage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const queryClient = useQueryClient();

  const handleSearch = () => {
    setLoading(true);
    queryClient.removeQueries('headlines');
    router.push(`/search/${searchTerm}`);
    setTimeout(() => setLoading(false), 3000);
  };

  return (
    <Page title={APP_TITLE} heading={TAG_LINE}>
      <Grid.Container justify="center">
        <Text
          h1
          size={60}
          css={{
            textGradient: '45deg, $blue600 0%, $red600 50%',
          }}
          weight="bold"
        >
          Search
        </Text>
      </Grid.Container>
      <Grid.Container justify="center">
        <Text
          h1
          size={60}
          css={{
            textGradient: '45deg, $red600 0%, $green600 50%',
          }}
          weight="bold"
        >
          thousands of headlines
        </Text>
      </Grid.Container>
      <Grid.Container justify="center">
        <Text
          h2
          size={60}
          css={{
            textGradient: '45deg, $green600 0%, $yellow600 100%',
          }}
          weight="bold"
        >
          from
        </Text>
      </Grid.Container>
      <Grid.Container justify="center">
        <Text
          h2
          size={60}
          css={{
            textGradient: '45deg, $yellow600 0%, $blue600 100%',
          }}
          weight="bold"
        >
          hundreds of global sources.
        </Text>
      </Grid.Container>
      <Row justify="center">
        <form onSubmit={() => handleSearch()}>
          <Row>
            <Input
              clearable
              bordered
              color="primary"
              placeholder={searchTerm.length ? searchTerm : 'Search..'}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Spacer y={1} />
            <Button
              auto
              bordered
              onClick={() => handleSearch()}
              aria-label="search"
            >
              {loading ? <Loading /> : '🔎'}
            </Button>
          </Row>
        </form>
      </Row>
    </Page>
  );
};

export default HomePage;
