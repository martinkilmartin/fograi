import React, { useState } from 'react';
import { useQueryClient } from 'react-query';
import { useRouter } from 'next/router';
import { APP_TITLE, TAG_LINE } from '@constants/CONTENT';
import { Page } from '@layouts/Page';
import { Button, Input, Loading, Row, Spacer } from '@nextui-org/react';

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
      <h1
        style={{
          textAlign: 'center',
          fontFamily: '"Georgia", "Times New Roman", Times, serif',
          display: 'block',
        }}
      >
        Search thousands of headlines from hundreds of global sources.
      </h1>
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
