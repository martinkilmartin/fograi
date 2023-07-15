import { useState } from 'react';
import { Grid, Card, Text, Link, Row, useTheme } from '@nextui-org/react';
import { NewsSource } from 'src/types';
import Image from 'next/image';
import { flags } from '@constants/FLAGS';

type Props = {
  k: string;
  source?: NewsSource;
};

const SourceCard = ({ k, source }: Props): JSX.Element => {
  const [suffix, setSuffix] = useState<string>('svg');
  const { theme } = useTheme();
  const country = k.substring(0, 2).toLowerCase();
  const flag = flags.get(country);
  return (
    <Card isHoverable variant="bordered" style={{ borderRadius: '0' }}>
      <Card.Header
        style={{ backgroundColor: theme?.colors.neutralLightHover.value }}
      >
        <Row justify="center" align="center">
          <Link href={source?.url} target="_blank">
            <Image
              src={`/img/ns/${k}.${suffix}`}
              onError={() => setSuffix('png')}
              alt={source?.name ?? ''}
              width={300}
              height={80}
            />
          </Link>
        </Row>
      </Card.Header>
      <Card.Body css={{ py: '$10', backgroundColor: '#f6f6f6' }}>
        <Row justify="space-between" align="center">
          <Text>
            <b>Established:</b> {source?.est}
          </Text>
          <Text size="$3xl" weight="bold" transform="uppercase">
            &nbsp;{flag}&nbsp;
          </Text>
        </Row>
        <Text>{source?.about}</Text>
      </Card.Body>
      <Card.Footer>
        <Grid.Container gap={2} justify="center">
          {source?.socials &&
            Object.keys(source?.socials).map((key) => (
              <Grid key={key}>
                <Link
                  href={
                    key === 'email'
                      ? `mailto:${source.socials?.[key]}`
                      : source.socials?.[key]
                  }
                  target="_blank"
                >
                  <Image
                    src={`/img/ic/${key}.svg`}
                    alt={`${key} Logo`}
                    width={48}
                    height={48}
                  />
                </Link>
              </Grid>
            ))}
        </Grid.Container>
      </Card.Footer>
    </Card>
  );
};

export default SourceCard;
