import React from 'react';
import { Button } from '@nextui-org/button';
import { HeadlineCard } from '@components/Card';
import { Headline } from '../../types/Headline';
import { Countries } from '../../types/countries';

interface BookMarkedHeadlineListProps {
  headlines: Array<[number, Headline]> | undefined;
}

const BookMarkedHeadlineList: React.FC<BookMarkedHeadlineListProps> = ({
  headlines,
}) => {
  const backToTop = () => {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  };
  if (!headlines?.length) {
    return <div>No Bookmarks!</div>;
  } else {
    return (
      <>
        <div
          className="grid-container"
          style={{ padding: '0', justifyContent: 'center' }}
        >
          {headlines?.map((headline, idx) => (
            <div
              className="grid"
              style={{ padding: '0', justifyContent: 'center' }}
              key={headline[0]}
            >
              <HeadlineCard
                headline={headline[1]}
                country={
                  headline[1].source.substring(0, 2).toLowerCase() as Countries
                }
                idx={idx + 1}
              />
            </div>
          ))}
        </div>
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

export default BookMarkedHeadlineList;
