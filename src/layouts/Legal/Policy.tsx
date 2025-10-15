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
  <div className="container mx-auto px-4 py-8">
    <div className="text-center mb-8">
      <h1 className="text-4xl font-bold">{title}</h1>
    </div>
    <div className="flex flex-col items-center gap-6">
      {paragraphs.map((paragraph, i) => (
        <div key={i} className="card bg-base-100 shadow-xl max-w-4xl w-full">
          <div className="card-body">
            {paragraph.title && (
              <div className="mb-4">
                <h3 className="text-xl font-semibold text-center">
                  {paragraph.title}
                </h3>
              </div>
            )}
            {paragraph.subTitle && (
              <div className="mb-3">
                <h4 className="text-lg font-semibold text-center">
                  {paragraph.subTitle}
                </h4>
              </div>
            )}
            {paragraph.content &&
              paragraph.content.map((line, j) => (
                <div key={j} className="mb-16">
                  <p>{line}</p>
                </div>
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
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default Policy;
