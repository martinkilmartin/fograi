import React, { useState } from 'react';
import { useQueryClient } from 'react-query';
import { useRouter } from 'next/router';
import { APP_TITLE, TAG_LINE } from '@constants/CONTENT';
import { Page } from '@layouts/Page';
// Replaced custom UI imports with native elements styled via DaisyUI

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
      <div className="flex justify-center">
        <h1 className="text-6xl font-bold bg-gradient-to-r from-blue-600 to-red-600 bg-clip-text text-transparent">
          Search
        </h1>
      </div>
      <div className="flex justify-center mt-4">
        <h1 className="text-6xl font-bold bg-gradient-to-r from-red-600 to-green-600 bg-clip-text text-transparent">
          thousands of headlines
        </h1>
      </div>
      <div className="flex justify-center mt-4">
        <h2 className="text-6xl font-bold bg-gradient-to-r from-green-600 to-yellow-600 bg-clip-text text-transparent">
          from
        </h2>
      </div>
      <div className="flex justify-center mt-4">
        <h2 className="text-6xl font-bold bg-gradient-to-r from-yellow-600 to-blue-600 bg-clip-text text-transparent">
          hundreds of global sources.
        </h2>
      </div>
      <div className="flex justify-center mt-8">
        <form onSubmit={(e) => { e.preventDefault(); handleSearch(); }} className="flex gap-4">
          <input
            placeholder={searchTerm.length ? searchTerm : 'Search..'}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="input input-bordered min-w-[300px]"
            value={searchTerm}
          />
          <button
            type="submit"
            aria-label="search"
            disabled={loading}
            className="btn btn-primary"
          >
            {loading ? '⏳' : '🔎'}
          </button>
        </form>
      </div>
    </Page>
  );
};

export default HomePage;
