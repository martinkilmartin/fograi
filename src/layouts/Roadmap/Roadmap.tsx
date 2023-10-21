import { Card, Container, Grid, Col, Row, Text } from '@nextui-org/react';
import CloudSync from '@components/SVG/CloudSync';
import Search from '@components/SVG/Search';
import Filter from '@components/SVG/Filter';
import Topics from '@components/SVG/Topics';
import Sentiments from '@components/SVG/Sentiments';
import Trends from '@components/SVG/Trends';
import Sources from '@components/SVG/Sources';
import Multimedia from '@components/SVG/Multimedia';

type Props = {
  title?: boolean;
};

const Roadmap = ({ title = true }: Props): JSX.Element => {
  return (
    <Container css={{ padding: 10 }}>
      <Grid.Container justify="center">
        {title && (
          <Grid xs={12} justify="center">
            <Text
              h1
              css={{
                textGradient: '45deg, $blue600 0%, $red600 50%',
              }}
              weight="bold"
            >
              Roadmap
            </Text>
          </Grid>
        )}
        <Grid xs={12} justify="center">
          <Text
            h2
            css={{
              textGradient: '45deg, $blue600 0%, $red600 50%',
            }}
            weight="bold"
          >
            Future Features
          </Text>
        </Grid>
        <Grid xs={12} justify="center">
          <Card
            css={{
              mw: '800px',
              backgroundColor: '$background',
              textAlign: 'center',
              marginBottom: '40px',
            }}
          >
            <Text h3>CLOUD SYNC</Text>
            <Card.Body style={{ marginBottom: '-20px' }}>
              <Row>
                <Col span={9}>
                  <Text>
                    Save your personalisations in the cloud. No need for
                    passwords. Login links sent to your email address.
                  </Text>
                </Col>
                <Col span={3}>
                  <CloudSync />
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Grid>
        <Grid xs={12} justify="center">
          <Card
            css={{
              mw: '800px',
              backgroundColor: '$background',
              textAlign: 'center',
              marginBottom: '40px',
            }}
          >
            <Text h3>SEARCH</Text>
            <Card.Body style={{ marginBottom: '-20px' }}>
              <Row>
                <Col span={9}>
                  <Text>
                    Complex search capabilities over half a million (and
                    growing) news headlines.
                  </Text>
                </Col>
                <Col span={3}>
                  <Search />
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Grid>
        <Grid xs={12} justify="center">
          <Card
            css={{
              mw: '800px',
              backgroundColor: '$background',
              textAlign: 'center',
              marginBottom: '40px',
            }}
          >
            <Text h3>FILTERS</Text>
            <Card.Body style={{ marginBottom: '-20px' }}>
              <Row>
                <Col span={9}>
                  <Text>
                    Select or hide individual publications, countries, languages
                    or particular niches and categories.
                  </Text>
                </Col>
                <Col span={3}>
                  <Filter />
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Grid>
        <Grid xs={12} justify="center">
          <Card
            css={{
              mw: '800px',
              backgroundColor: '$background',
              textAlign: 'center',
              marginBottom: '40px',
            }}
          >
            <Text h3>TOPICS</Text>
            <Card.Body style={{ marginBottom: '-20px' }}>
              <Row>
                <Col span={9}>
                  <Text>
                    AI Natural Language Processing to allow collation of
                    headlines on related topics. Get multiple perspectives, or
                    stay up-to-date with alerts, on your favourite topics.
                  </Text>
                </Col>
                <Col span={3}>
                  <Topics />
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Grid>
        <Grid xs={12} justify="center">
          <Card
            css={{
              mw: '800px',
              backgroundColor: '$background',
              textAlign: 'center',
              marginBottom: '40px',
            }}
          >
            <Text h3>SENTIMENTS</Text>
            <Card.Body style={{ marginBottom: '-20px' }}>
              <Row>
                <Col span={9}>
                  <Text>
                    AI Sentiment Analysis to allow categorization of headlines
                    by sentiments. Let your <i>nooze</i> suit your mood.
                  </Text>
                </Col>
                <Col span={3}>
                  <Sentiments />
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Grid>
        <Grid xs={12} justify="center">
          <Card
            css={{
              mw: '800px',
              backgroundColor: '$background',
              textAlign: 'center',
              marginBottom: '40px',
            }}
          >
            <Text h3>TRENDS</Text>
            <Card.Body style={{ marginBottom: '-20px' }}>
              <Row>
                <Col span={9}>
                  <Text>
                    Latest or longer-term trends with real-time analysis and
                    collation of trending topics. Various visuals and graphs for
                    easy understanding.
                  </Text>
                </Col>
                <Col span={3}>
                  <Trends />
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Grid>
        <Grid xs={12} justify="center">
          <Card
            css={{
              mw: '800px',
              backgroundColor: '$background',
              textAlign: 'center',
              marginBottom: '40px',
            }}
          >
            <Text h3>MORE SOURCES</Text>
            <Card.Body style={{ marginBottom: '-20px' }}>
              <Row>
                <Col span={9}>
                  <Text>
                    We will continually add sources to continually broaden the
                    scope of news sources on offer with fresh perspectives.
                  </Text>
                </Col>
                <Col span={3}>
                  <Sources />
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Grid>
        <Grid xs={12} justify="center">
          <Card
            css={{
              mw: '800px',
              backgroundColor: '$background',
              textAlign: 'center',
              marginBottom: '40px',
            }}
          >
            <Text h3>MULTIMEDIA</Text>
            <Card.Body style={{ marginBottom: '-20px' }}>
              <Row>
                <Col span={9}>
                  <Text>
                    Incorporation of live streaming audio and / or video widget
                    with latest news (headlines) or discussion on trending
                    topics from suitable source.
                  </Text>
                </Col>
                <Col span={3}>
                  <Multimedia />
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Grid>
      </Grid.Container>
    </Container>
  );
};

export default Roadmap;
