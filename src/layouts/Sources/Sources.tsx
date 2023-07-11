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
      <Grid.Container gap={1} justify="center">
        {Array.from(
          new Map(
            [...AllNewsSources.entries()].sort(() => Math.random() - 0.5)
          ).keys()
        ).map((key, index) => {
          return (
            <SourceCard
              key={key}
              k={key}
              index={index}
              source={AllNewsSources.get(key)}
            />
          );
        })}
      </Grid.Container>
    </div>
  );
};

export default Sources;
