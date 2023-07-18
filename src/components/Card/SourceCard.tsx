import { useState } from 'react';
import {
  Badge,
  Grid,
  Card,
  Text,
  Link,
  Row,
  useTheme,
} from '@nextui-org/react';
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
        style={{
          backgroundColor: source?.headerBG ?? theme?.colors.background.value,
        }}
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
      <Card.Divider />
      <Card.Body css={{ py: '$10' }}>
        <Row justify="space-between" align="center">
          <Badge isSquared color="primary" variant="bordered">
            Established in&nbsp;{source?.est}
          </Badge>
          <Text size="$3xl" weight="bold" transform="uppercase">
            &nbsp;{flag}&nbsp;
          </Text>
        </Row>
        <Text>{source?.about}</Text>
        <Card.Divider />
        <Grid.Container justify="center">
          {source?.tags &&
            source?.tags.map((tag) => (
              <Grid key={tag}>
                <Badge css={{ backgroundColor: source.primaryColor }}>
                  #{tag}
                </Badge>
              </Grid>
            ))}
        </Grid.Container>
        {source?.audio && (
          <Grid.Container gap={2} justify="center" css={{ py: '$10' }}>
            <iframe
              width="100%"
              height="166"
              scrolling="no"
              frameBorder="no"
              allow="autoplay"
              src={source?.audio}
            ></iframe>
          </Grid.Container>
        )}
      </Card.Body>
      <Card.Divider />
      <Card.Footer>
        <Grid.Container gap={2} justify="center">
          {source?.socials &&
            Object.keys(source?.socials).map((key) => (
              <Grid key={key}>
                <Link href={source.socials?.[key]} target="_blank">
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
