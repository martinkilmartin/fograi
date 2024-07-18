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
      default: 4,
      1100: 3,
      700: 2,
      500: 1,
    };

    return (
      <>
        <div style={{ position: 'relative', paddingLeft: '24px' }}>
          <Masonry
            breakpointCols={breakpointColumnsObj}
            className={classNames('my-masonry-grid')}
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
        <style jsx>{`
          .my-masonry-grid {
            display: flex;
            width: 100%;
            margin-left: -16px; /* gutter size offset */
          }
          .my-masonry-grid_column {
            padding-left: 16px; /* gutter size */
            background-clip: padding-box;
          }
          .my-masonry-grid_column > div {
            margin-bottom: 16px;
          }
          .loading-spinner-container {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100%;
          }
        `}</style>
      </>
    );
  }
};

export default HeadlineList;
