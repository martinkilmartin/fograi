import React from 'react';
import { Badge } from '@nextui-org/badge';
import { Button } from '@nextui-org/button';
import { Spinner } from '@nextui-org/spinner';
import { HeadlineCard } from '@components/Card';
import LoadingSpinner from '@components/Loading/LoadingSpinner';
import { Headline } from '../../types/Headline';
import { Countries } from '../../types/countries';

interface HeadlineListProps {
  headlines: Headline[] | undefined;
  loading: boolean;
  fetching: boolean;
  error: Error | null;
}

const HeadlineList: React.FC<HeadlineListProps> = ({
  headlines,
  loading,
  fetching,
  error,
}) => {
  const backToTop = () => {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  };
  if (loading) {
    return <LoadingSpinner />;
  } else if (error) {
    return <div>Error: {error.message} </div>;
  } else if (!loading && !error && !headlines?.length) {
    return <div>No headlines!</div>;
  } else {
    return (
      <>
        <div
          className="grid-container"
          style={{ padding: '0', justifyContent: 'center' }}
        >
          {headlines?.map((headline, idx) => (
            <div className="grid" key={headline.id}>
              <HeadlineCard
                headline={headline}
                country={
                  headline.source.substring(0, 2).toLowerCase() as Countries
                }
                idx={idx + 1}
              />
            </div>
          ))}
        </div>
        {fetching && <Spinner />}
        <Badge
          aria-label="The number of headlines loaded"
          style={{ position: 'fixed', bottom: '20px', left: '10px' }}
        >
          {fetching ? <Spinner /> : headlines?.length}
        </Badge>
        <Button
          aria-label="Back to top"
          onClick={() => backToTop()}
          style={{ position: 'fixed', bottom: '20px', right: '10px' }}
        >
          ⬆️
        </Button>
      </>
    );
  }
};

export default HeadlineList;
