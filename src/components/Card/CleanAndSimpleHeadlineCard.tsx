import { Headline } from '../../types';

type Props = {
  header?: boolean;
  bgImage?: boolean;
  country?: any;
  headline: Headline;
  idx?: number;
};

const CleanAndSimpleHeadlineCard = ({ headline }: Props): JSX.Element => {
  // Temporarily disabled during nextui migration
  return <div>CleanAndSimpleHeadlineCard - Temporarily disabled</div>;
};

export default CleanAndSimpleHeadlineCard;
