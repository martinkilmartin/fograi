import { Container, Table, Text } from '@nextui-org/react';
import { AllNewsSources } from '@constants/NEWS_SOURCES';
import { flags } from '@constants/FLAGS';
import { Countries } from 'src/types/countries';

type Props = {
  title: string;
};

const Sources = ({ title }: Props): JSX.Element => {
  return (
    <Container>
      <h1 style={{ textAlign: 'center' }}>
        {title}&nbsp;({AllNewsSources.size})
      </h1>

      <Table
        aria-label="List of news sources"
        css={{
          height: 'auto',
          fontFamily: '"Georgia", "Times New Roman", Times, serif',
        }}
        lined
      >
        <Table.Header>
          <Table.Column>
            <Text h2 size={12} weight="bold">
              Name
            </Text>
          </Table.Column>
          <Table.Column>
            <Text h2 size={12} weight="bold">
              Established
            </Text>
          </Table.Column>
        </Table.Header>
        <Table.Body>
          {Array.from(AllNewsSources)
            .sort((a, b) => a[1].est - b[1].est)
            .map((ns, i) => {
              const country = ns[0].substring(0, 2).toLowerCase();
              const cFlag = flags.get(country as Countries);
              const sourceURL = AllNewsSources.get(ns[0])?.url;
              const sourceName = AllNewsSources.get(ns[0])?.name;
              return (
                <Table.Row key={i}>
                  <Table.Cell>
                    <a href={sourceURL} target="_blank" rel="noreferrer">
                      <Text h2 size={12} weight="bold">
                        {cFlag}&nbsp;{sourceName ?? ''}
                      </Text>
                    </a>
                  </Table.Cell>
                  <Table.Cell>
                    <Text
                      h2
                      size={12}
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
    </Container>
  );
};

export default Sources;
