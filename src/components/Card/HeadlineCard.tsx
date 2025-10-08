import { Headline } from '../../types';

type Props = {
  header?: boolean;
  bgImage?: boolean;
  country?: any;
  headline: Headline;
  idx?: number;
};

const HeadlineCard = ({ headline }: Props): JSX.Element => {
  // Temporarily disabled during nextui migration
  return <div>HeadlineCard - Temporarily disabled</div>;
};

export default HeadlineCard;
