import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { Input, Button, Loading } from '@nextui-org/react';
import { APP_TITLE, TAG_LINE } from '@constants/CONTENT';
import { Page } from '@layouts/Page';

const HomePage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { term } = router.query;

  const handleSearch = () => {
    setLoading(true);
    router.push(`/search/${searchTerm}`);
    setTimeout(() => setLoading(false), 3000);
  };

  return (
    <Page title={APP_TITLE} heading={TAG_LINE}>
      <h1
        style={{
          textAlign: 'center',
          fontFamily: '"Georgia", "Times New Roman", Times, serif',
        }}
      >
        <Input
          label="Search for something "
          placeholder={term as string}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <Button bordered onClick={() => handleSearch()}>
          {loading ? <Loading /> : 'Search'}
        </Button>
      </h1>
    </Page>
  );
};

export default HomePage;
