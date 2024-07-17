import React from 'react';
import { Badge, Loading } from '@nextui-org/react';
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
          style={{
        columnGap: '16px',
        padding: '0 10px',
      }}
      className="masonry-container"
        >
          {headlines?.map((headline, idx) => (
            <div
              key={headline.id}
              style={{
                breakInside: 'avoid',
                margin: '20px',
              }}
            >
              <HeadlineCard
                headline={headline}
                country={headline.source.substring(0, 2).toLowerCase() as Countries}
                idx={idx + 1}
              />
            </div>
          ))}
        </div>
        {fetching && <Loading type="spinner" size="xl" />}
        <Badge
          aria-label="The number of headlines loaded"
          variant="bordered"
          style={{ position: 'fixed', bottom: '20px', left: '10px' }}
        >
          {fetching ? <Loading type="gradient" size="xs" /> : headlines?.length}
        </Badge>
        <Badge
          role="button"
          aria-label="Back to top"
          onClick={() => backToTop()}
          style={{
            position: 'fixed',
            bottom: '20px',
            right: '10px',
            maxWidth: '50px',
          }}
          size="lg"
          color="primary"
          variant="bordered"
        >
          ⬆️
        </Badge>
            <style jsx>{`
      .masonry-container {
        column-count: 1; /* Default to one column */
      }
      @media (min-width: 600px) {
        .masonry-container {
          column-count: 2; /* Two columns for tablet */
        }
      }
      @media (min-width: 900px) {
        .masonry-container {
          column-count: 3; /* Three columns for smaller desktops */
        }
      }
      @media (min-width: 1200px) {
        .masonry-container {
          column-count: 4; /* Four columns for larger desktops */
        }
      }
    `}</style>
      </>
    );

  }
};

export default HeadlineList;
