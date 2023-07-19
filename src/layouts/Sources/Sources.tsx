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
        {Array.from(AllNewsSources)
          .sort((a, b) => a[1].est - b[1].est)
          .map((ns, i) => {
            return (
              <Grid xs={12} md={6} lg={4} xl={3} key={ns[0]}>
                <SourceCard idx={i + 1} k={ns[0]} source={ns[1]} />
              </Grid>
            );
          })}
      </Grid.Container>
    </div>
  );
};

export default Sources;
