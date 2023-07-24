import React from 'react';
import { Button, Grid } from '@nextui-org/react';
import { HeadlineCard } from '@components/Card';
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
    return <div>No headlines!</div>;
  } else {
    return (
      <>
        <Grid.Container gap={2} justify="center" style={{ padding: '0' }}>
          {headlines?.map((headline, idx) => (
            <Grid xs={12} md={6} lg={4} xl={3} key={headline[0]}>
              <HeadlineCard
                headline={headline[1]}
                country={
                  headline[1].source.substring(0, 2).toLowerCase() as Countries
                }
                idx={idx + 1}
              />
            </Grid>
          ))}
        </Grid.Container>
        <Button
          aria-label="Back to top"
          auto
          ghost
          onClick={() => backToTop()}
          css={{ position: 'fixed', bottom: '20px', right: '10px' }}
          icon={'⬆️'}
        ></Button>
      </>
    );
  }
};

export default BookMarkedHeadlineList;
