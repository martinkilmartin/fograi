import dynamic from 'next/dynamic';
import { APP_TITLE, TAG_LINE } from '@constants/CONTENT';
import { Page } from '@layouts/Page';
import React from 'react';
import { Headline } from '../types';
const BookMarkedHeadlineList = dynamic(
  () => import('../components/Headlines/BookMarkedHeadlineList'),
  { ssr: false },
);

const COLLECTION_KEY = 'nooze';
function retrieveCollection() {
  if (typeof window !== 'undefined') {
    const mapAsArrayString = localStorage.getItem(COLLECTION_KEY);
    if (mapAsArrayString) {
      const mapAsArray = JSON.parse(mapAsArrayString);
      return new Map<number, Headline>(mapAsArray);
    }
  }
  return null;
}

const BookMarks: React.FC = () => {
  let collectionAsArray: Array<[number, Headline]> = [];
  const currentCollection = retrieveCollection();
  if (currentCollection) {
    collectionAsArray = Array.from(currentCollection.entries());
  }

  return (
    <Page title={APP_TITLE} heading={TAG_LINE}>
      <BookMarkedHeadlineList headlines={collectionAsArray} />
    </Page>
  );
};

export default BookMarks;
