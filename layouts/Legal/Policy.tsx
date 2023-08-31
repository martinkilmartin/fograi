import { Card } from '@nextui-org/card';
import { DescriptionCard } from '.';

type Props = {
  title: string;
  paragraphs: {
    title?: string;
    subTitle?: string;
    content?: string[];
    table?: {
      title: string;
      name: string;
      purpose: string;
    }[];
  }[];
};

const Policy = ({ title, paragraphs }: Props): JSX.Element => (
  <div className="container">
    <div className="grid-container" style={{ justifyContent: 'center' }}>
      <h1>{title}</h1>
    </div>
    <div className="grid-container" style={{ justifyContent: 'center' }}>
      {paragraphs.map((paragraph, i) => (
        <Card key={i} style={{ maxWidth: 1200, margin: 20, padding: 20 }}>
          {paragraph.title && (
            <dt className="mb-4">
              <h3 className="text-xl font-semibold text-center">
                {paragraph.title}
              </h3>
            </dt>
          )}
          {paragraph.subTitle && (
            <dt className="mb-3">
              <h4 className="text-lg font-semibold text-center">
                {paragraph.subTitle}
              </h4>
            </dt>
          )}
          {paragraph.content &&
            paragraph.content.map((line, j) => (
              <dd key={j} className="mb-16">
                <p>{line}</p>
              </dd>
            ))}
          {paragraph.table &&
            paragraph.table.map((description, j) => (
              <DescriptionCard
                key={j}
                title={description.title}
                subtitle={description.name}
                content={description.purpose}
              />
            ))}
        </Card>
      ))}
    </div>
  </div>
);

export default Policy;
