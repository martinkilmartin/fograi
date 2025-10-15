import { useState, useEffect } from 'react';
import { AllNewsSources } from '@constants/NEWS_SOURCES';

type Props = {
  title: string;
  subTitle: string;
};

const SourcesComponent = ({ title, subTitle }: Props): JSX.Element => {
  const [likedSources] = useState<Set<keyof typeof AllNewsSources>>(
    () => {
      if (typeof window !== 'undefined') {
        const locallyLikedSources = localStorage.getItem('likedSources');
        if (locallyLikedSources && locallyLikedSources !== '[]') {
          return new Set(JSON.parse(locallyLikedSources)) as Set<
            keyof typeof AllNewsSources
          >;
        }
      }
      return new Set<keyof typeof AllNewsSources>();
    },
  );

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const saveLocally = () => {
        localStorage.setItem('likedSources', JSON.stringify([...likedSources]));
      };
      saveLocally();
    }
  }, [likedSources]);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-4">
        {title}&nbsp;({AllNewsSources.size})
      </h1>
      <p className="text-lg text-center mb-8">
        {subTitle}
      </p>
      <div className="text-center">
        <p className="text-lg mb-4">Sources management coming soon...</p>
        <p className="text-sm text-base-content/70">
        </p>
      </div>
    </div>
  );
};

export default SourcesComponent;
