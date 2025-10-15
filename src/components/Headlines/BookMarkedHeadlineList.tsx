import React from 'react';
import { ComicCard } from '@components/Card';
import { Headline } from '../../types/Headline';
import { Countries } from 'src/types/countries';

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
        <div style={{ display: 'grid', gap: '8px', justifyContent: 'center', padding: '0', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
          {headlines?.map((headline, idx) => (
            <div key={headline[0]}>
              <ComicCard
                headline={headline[1]}
                country={
                  headline[1].source.substring(0, 2).toLowerCase() as Countries
                }
                idx={idx + 1}
              />
            </div>
          ))}
        </div>
        <button
          aria-label="Back to top"
          onClick={() => backToTop()}
          style={{ position: 'fixed', bottom: '20px', right: '10px', border: '1px solid', padding: '8px', borderRadius: '4px' }}
        >
          ⬆️
        </button>
      </>
    );
  }
};

export default BookMarkedHeadlineList;
