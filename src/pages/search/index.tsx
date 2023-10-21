import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { Input, Button } from '@nextui-org/react';
import { APP_TITLE, TAG_LINE } from '@constants/CONTENT';
import { Page } from '@layouts/Page';

const HomePage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const router = useRouter();
  const { term } = router.query;

  const handleSearch = () => {
    // Navigate to the desired route using the input text
    router.push(`/search/${searchTerm}`);
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
        <Button onClick={() => handleSearch()}>Search</Button>
      </h1>
    </Page>
  );
};

export default HomePage;
