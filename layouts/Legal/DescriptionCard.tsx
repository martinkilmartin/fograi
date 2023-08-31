import { Card } from '@nextui-org/card';
type Props = {
  title: string;
  subtitle: string;
  content: string;
};

const DescriptionCard = ({ title, subtitle, content }: Props): JSX.Element => (
  <Card>
    <div className="card-body">
      <h2 className="card-title">{title}</h2>
      <h3 className="card-title">❱ {subtitle}</h3>
      <p>❓{content}</p>
    </div>
  </Card>
);

export default DescriptionCard;
