import React from 'react';
import { Badge, Button, Grid, Loading } from '@nextui-org/react';
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
        <Grid.Container gap={2} justify="center" style={{ padding: '0' }}>
          {headlines?.map((headline, idx) => (
            <Grid xs={12} md={6} lg={4} xl={3} key={headline.id}>
              <HeadlineCard
                headline={headline}
                country={
                  headline.source.substring(0, 2).toLowerCase() as Countries
                }
                idx={idx + 1}
              />
            </Grid>
          ))}
        </Grid.Container>
        {fetching && <Loading type="spinner" size="xl" />}
        <Badge
          aria-label="The number of headlines loaded"
          variant="bordered"
          css={{ position: 'fixed', bottom: '20px', left: '10px' }}
        >
          {fetching ? <Loading type="gradient" size="xs" /> : headlines?.length}
        </Badge>
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

export default HeadlineList;
