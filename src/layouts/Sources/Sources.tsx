import { Grid, Table, Text } from '@nextui-org/react';
import { AllNewsSources } from '@constants/NEWS_SOURCES';

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
        <Table
          aria-label="List of news sources"
          css={{
            height: 'auto',
            minWidth: '100%',
            fontFamily: '"Georgia", "Times New Roman", Times, serif',
          }}
        >
          <Table.Header>
            <Table.Column>
              <Text h2 size={48} weight="bold">
                Name
              </Text>
            </Table.Column>
            <Table.Column>
              <Text h2 size={48} weight="bold">
                Established
              </Text>
            </Table.Column>
          </Table.Header>
          <Table.Body>
            {Array.from(AllNewsSources)
              .sort((a, b) => a[1].est - b[1].est)
              .map((ns, i) => {
                const sourceURL = AllNewsSources.get(ns[0])?.url;
                const sourceName = AllNewsSources.get(ns[0])?.name;
                return (
                  <Table.Row key={i}>
                    <Table.Cell>
                      <a href={sourceURL} target="_blank" rel="noreferrer">
                        <Text h2 size={48} weight="bold">
                          {sourceName ?? ''}
                        </Text>
                      </a>
                    </Table.Cell>
                    <Table.Cell>
                      <Text
                        h2
                        size={48}
                        weight="bold"
                        css={{
                          textAlign: 'right',
                        }}
                      >
                        {ns[1].est}
                      </Text>
                    </Table.Cell>
                  </Table.Row>
                );
              })}
          </Table.Body>
        </Table>
      </Grid.Container>
    </div>
  );
};

export default Sources;
