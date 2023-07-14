import { Grid } from '@nextui-org/react';
import { AllNewsSources } from '@constants/NEWS_SOURCES';
import { SourceCard } from '@components/Card';

type Props = {
  title: string;
};

const Sources = ({ title }: Props): JSX.Element => {
  return (
    <div className="px-4">
      <h1 style={{ textAlign: 'center' }}>
        {title}&nbsp;({AllNewsSources.size})
      </h1>
      <Grid.Container gap={2} justify="center" style={{ padding: '0' }}>
        {Array.from(
          new Map(
            [...AllNewsSources.entries()].sort(() => Math.random() - 0.5)
          ).keys()
        ).map((key) => {
          return (
            <Grid xs={12} md={6} lg={4} xl={3} key={key}>
              <SourceCard key={key} k={key} source={AllNewsSources.get(key)} />
            </Grid>
          );
        })}
      </Grid.Container>
    </div>
  );
};

export default Sources;
