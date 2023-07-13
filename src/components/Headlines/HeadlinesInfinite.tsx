import React from 'react';
import { Headline } from '../../types/Headline';

import { HeadlineCard } from '@components/Card';
import { Countries } from 'src/types/countries';

interface HeadlineListProps {
  headlines: Headline[];
}

export const HeadlineList: React.FC<HeadlineListProps> = ({ headlines }) => {
  return (
    <ul>
      {headlines.map((headline) => (
        <li key={headline.id}>
          <HeadlineCard
            headline={headline}
            key={headline.id}
            country={headline.source.substring(0, 2).toLowerCase() as Countries}
          />
        </li>
      ))}
    </ul>
  );
};
