import React from 'react';
import { APP_TITLE, TAG_LINE } from '@constants/CONTENT';
import { Page } from '@layouts/Page';

const HomePage: React.FC = () => {
  return (
    <Page title={APP_TITLE} heading={TAG_LINE}>
      <h1
        style={{
          textAlign: 'center',
          fontFamily: '"Georgia", "Times New Roman", Times, serif',
        }}
      >
        Search thousands of headlines from hundreds of global sources.
      </h1>
    </Page>
  );
};

export default HomePage;
