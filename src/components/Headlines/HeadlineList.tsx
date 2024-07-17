import React from 'react';
import { Badge, Loading } from '@nextui-org/react';
import { HeadlineCard } from '@components/Card';
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
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className={classNames('my-masonry-grid')}
          columnClassName="my-masonry-grid_column"
        >
          {headlines?.map((headline, idx) => (
            <div
              key={headline.id}
              className="masonry-item"
            >
              <HeadlineCard
                headline={headline}
                country={headline.source.substring(0, 2).toLowerCase() as Countries}
                idx={idx + 1}
              />
            </div>
          ))}
        </Masonry>
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
      </>
    );
  }
};

export default HeadlineList;
