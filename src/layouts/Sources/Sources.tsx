import {
  Container,
  Card,
  Text,
  Badge,
  Collapse,
  Grid,
  Link,
  Row,
} from '@nextui-org/react';
import { AllNewsSources } from '@constants/NEWS_SOURCES';
import { flags } from '@constants/FLAGS';
import { Countries } from 'src/types/countries';

type Props = {
  title: string;
};

const Sources = ({ title }: Props): JSX.Element => {
  function calculateFontSize(text: string, baseSize = 38): number {
    const reductionFactor = 0.5;

    let newSize = baseSize - text.length * reductionFactor;

    const minimumSize = 12;
    if (newSize < minimumSize) {
      newSize = minimumSize;
    }
    return newSize;
  }
  return (
    <Container>
      <h1 style={{ textAlign: 'center' }}>
        {title}&nbsp;({AllNewsSources.size})
      </h1>
      <Grid.Container gap={2} justify="space-evenly" style={{ padding: '0' }}>
        {Array.from(AllNewsSources)
          .sort((a, b) => a[1].est - b[1].est)
          .map((ns, i) => {
            const country = ns[0].substring(0, 2).toLowerCase();
            const cFlag = flags.get(country as Countries);
            const sourceURL = AllNewsSources.get(ns[0])?.url;
            const sourceName = AllNewsSources.get(ns[0])?.name;
            const sourceAbout = AllNewsSources.get(ns[0])?.about;
            const sourceEst = AllNewsSources.get(ns[0])?.est;
            return (
              <Grid xs={12} sm={6} md={6} lg={4} xl={3} key={i}>
                <Card>
                  <Card.Body>
                    <Grid.Container>
                      <Row justify="space-around" align="center">
                        <Link href={sourceURL} target="_blank" rel="noreferrer">
                          <Text
                            h2
                            size={calculateFontSize(sourceName ?? '')}
                            weight="bold"
                            style={{
                              borderRadius: '0',
                              fontFamily:
                                '"Georgia", "Times New Roman", Times, serif',
                            }}
                          >
                            {cFlag}&nbsp;{sourceName ?? ''}
                          </Text>
                        </Link>
                      </Row>
                      <Grid.Container>
                        <Grid xs={12}>
                          <Collapse title="About" bordered>
                            <Text size={14} css={{ mt: '$1' }} color="#888888">
                              {sourceAbout}
                            </Text>
                          </Collapse>
                        </Grid>
                      </Grid.Container>
                    </Grid.Container>
                  </Card.Body>
                  <Card.Footer>
                    <Grid.Container justify="space-evenly" alignItems="center">
                      <Grid>
                        <Text size={18} color="#888888">
                          Since&nbsp;
                          <Text b color="foreground" size={18}>
                            {sourceEst}
                          </Text>
                        </Text>
                      </Grid>
                      <Grid>
                        <Link
                          href={`/source/${sourceName
                            ?.toLowerCase()
                            .replaceAll(' ', '-')}`}
                        >
                          <Badge color="primary" size="lg">
                            View All
                          </Badge>
                        </Link>
                      </Grid>
                    </Grid.Container>
                  </Card.Footer>
                </Card>
              </Grid>
            );
          })}
      </Grid.Container>
    </Container>
  );
};

export default Sources;
