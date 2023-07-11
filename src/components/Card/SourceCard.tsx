import { useState } from 'react';
import { Card, Grid, Text, Link, Row, useTheme } from '@nextui-org/react';
import { NewsSource } from 'src/types';
import Image from 'next/image';
import { flags } from '@constants/FLAGS';

type Props = {
  k: string;
  index: number;
  source?: NewsSource;
};

const SourceCard = ({ k, index, source }: Props): JSX.Element => {
  const [suffix, setSuffix] = useState<string>('svg');
  const { theme } = useTheme();
  const country = k.substring(0, 2).toLowerCase();
  const flag = flags.get(country);
  return (
    <Grid sm={12} md={6} lg={4} key={index}>
      <Card
        isHoverable
        variant="bordered"
        css={{ mw: '450px', borderRadius: '15px', overflow: 'hidden' }}
      >
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
      </Card>
    </Grid>
  );
};

export default SourceCard;
