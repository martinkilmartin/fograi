import React from 'react';
import { Badge, Loading } from '@nextui-org/react';
import { CleanAndSimpleHeadlineCard } from '@components/Card';
import LoadingSpinner from '@components/Loading/LoadingSpinner';
import { Headline } from '../../types/Headline';
import { Countries } from '../../types/countries';
import Masonry from 'react-masonry-css';
import classNames from 'classnames';

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
    return <div>Error: {error.message}</div>;
  } else if (!loading && !error && !headlines?.length) {
    return <div>No headlines!</div>;
  } else {
    const breakpointColumnsObj = {
      default: 10, // 8K monitors (7680px and up)
      7680: 10, // 8K resolution
      5120: 8, // 5K resolution
      3840: 6, // 4K resolution
      2560: 5, // WQHD resolution
      1920: 4, // Full HD resolution
      1440: 3, // HD resolution
      1100: 2, // Small desktops/tablets
      700: 2, // Tablets
      500: 1, // Mobile
    };

    return (
      <>
        <div style={{ position: 'relative', paddingLeft: '24px' }}>
          <Masonry
            breakpointCols={breakpointColumnsObj}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column"
          >
            {headlines?.map((headline, idx) => (
              <div key={headline.id} className="masonry-item">
                <CleanAndSimpleHeadlineCard
                  headline={headline}
                  country={headline.source.substring(0, 2).toLowerCase() as Countries}
                  idx={idx + 1}
                />
              </div>
            ))}
            {fetching && (
              <div className="loading-spinner-container">
                <Loading type="spinner" size="xl" />
              </div>
            )}
          </Masonry>
        </div>
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
      </>
    );
  }
};

export default HeadlineList;
