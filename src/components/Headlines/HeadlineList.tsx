import React, { useState, useEffect } from 'react';
import LoadingSpinner from '@components/Loading/LoadingSpinner';
import { Badge, Loading } from '@nextui-org/react';
import { ComicCard as HeadlineCard } from '@components/Card';
import { ActionBar } from '@components/ActionBar';
import { Headline } from '../../types/Headline';
import { Countries } from '../../types/countries';
import Masonry from 'react-masonry-css';

interface HeadlineListProps {
  headlines: Headline[] | undefined;
  fetching: boolean;
  userCountry?: Countries;
  numberOfColumns?: number;
}

const useBreakpointColumns = (numberOfColumns?: number) => {
  const [columns, setColumns] = useState(() => {
    return numberOfColumns ?? 1;
  });
  useEffect(() => {
    const calculateColumns = () => {
      const width = window.innerWidth;
      if (width >= 7680) return 12;
      if (width >= 5120) return 10;
      if (width >= 3840) return 8;
      if (width >= 2560) return 6;
      if (width >= 1920) return 5;
      if (width >= 1440) return 4;
      if (width >= 1100) return 3;
      if (width >= 700) return 2;
      return 1;
    };

    const updateColumns = () => setColumns(calculateColumns());

    updateColumns(); // Initial calculation on client-side
    window.addEventListener('resize', updateColumns);

    return () => window.removeEventListener('resize', updateColumns);
  }, []);

  return columns;
};

const HeadlineList: React.FC<HeadlineListProps> = ({
  headlines,
  fetching,
  userCountry,
  numberOfColumns,
}) => {
  const [bottomNav, showBottomNav] = useState(false);
  const columns = useBreakpointColumns(numberOfColumns);

  const breakpointColumnsObj = {
    default: columns,
  };

  const backToTop = () => {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  };

  if (!headlines?.length) {
    return <LoadingSpinner />;
  } else {
    return (
      <>
        <div style={{ position: 'relative' }}>
          <Masonry
            breakpointCols={breakpointColumnsObj}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column"
          >
            {headlines?.map((headline, idx) => (
              <div key={headline.id} className="masonry-item">
                <HeadlineCard
                  headline={headline}
                  country={
                    headline.source.substring(0, 2).toLowerCase() as Countries
                  }
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
          onClick={() => showBottomNav(!bottomNav)}
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
        {bottomNav && <ActionBar userCountry={userCountry} />}
      </>
    );
  }
};

export default HeadlineList;
