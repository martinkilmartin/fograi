import { Badge } from '@nextui-org/badge';
import { Card, CardBody, CardFooter } from '@nextui-org/card';
import { Link } from '@nextui-org/link';
import { AllNewsSources } from '@constants/NEWS_SOURCES';
import { flags } from '@constants/FLAGS';
import { Countries } from '../../types/countries';

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
    <div className="container">
      <h1 style={{ textAlign: 'center' }}>
        {title}&nbsp;({AllNewsSources.size})
      </h1>
      <div
        className="grid-container"
        style={{ padding: '0', alignContent: 'space-evenly' }}
      >
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
              <div className="grid" key={i}>
                <Card>
                  <CardBody>
                    <div className="grid-container">
                      <div
                        className="row"
                        style={{
                          alignContent: 'center',
                          justifyContent: 'space-around',
                        }}
                      >
                        <Link href={sourceURL} target="_blank" rel="noreferrer">
                          <h2
                            style={{
                              borderRadius: '0',
                              fontFamily:
                                '"Georgia", "Times New Roman", Times, serif',
                              fontSize: calculateFontSize(sourceName ?? '', 28),
                              fontWeight: 'bold',
                            }}
                          >
                            {cFlag}&nbsp;{sourceName ?? ''}
                          </h2>
                        </Link>
                      </div>
                      {sourceAbout && (
                        <div className="grid-container">
                          <div className="grid">
                            <span
                              style={{
                                marginTop: '1px',
                                fontSize: 14,
                                color: '#888888',
                              }}
                            >
                              {sourceAbout}
                            </span>
                          </div>
                        </div>
                      )}
                    </div>
                  </CardBody>
                  <CardFooter>
                    <div
                      className="grid-container"
                      style={{
                        alignContent: 'center',
                        justifyContent: 'space-around',
                      }}
                    >
                      <div className="grid">
                        <span
                          style={{
                            marginTop: '1px',
                            fontSize: 18,
                            color: '#888888',
                          }}
                        >
                          Since&nbsp;
                          <span
                            style={{
                              marginTop: '1px',
                              fontSize: 18,
                              color: '#888888',
                            }}
                          >
                            <b>{sourceEst}</b>
                          </span>
                        </span>
                      </div>
                      <div className="grid">
                        <Link
                          href={`/source/${sourceName
                            ?.toLowerCase()
                            .replaceAll(' ', '-')}`}
                        >
                          <Badge color="primary" size="lg">
                            View All
                          </Badge>
                        </Link>
                      </div>
                    </div>
                  </CardFooter>
                </Card>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Sources;
