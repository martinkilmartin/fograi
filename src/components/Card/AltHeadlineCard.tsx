import { useState } from 'react';
import Image from "next/legacy/image";
// import {
//   Badge,
//   Card,
//   Col,
//   Grid,
//   Loading,
//   Popover,
//   Row,
//   Text,
//   Tooltip,
//   useTheme,
// } from '@nextui-org/react';
// import Link from 'next/link';
// import diffDisplay from '@lib/time-format';
// import Bookmark from '@components/SVG/Bookmark';
// import Heart from '@components/SVG/Heart';
// import X from '@components/SVG/X';
import { AllNewsSources } from '@constants/NEWS_SOURCES';
import { Headline } from '../../types';
import { Countries } from '../../types/countries';
//import shareImg from '../../../public/img/ic/share.svg';

type Props = {
  header?: boolean;
  bgImage?: boolean;
  country?: Countries;
  headline: Headline;
  idx?: number;
};

const HeadlineCard = ({ headline }: Props): JSX.Element => {
  //
  const [leadImgErr, setLeadImgErr] = useState<boolean>(false);
  // const [liked, setLiked] = useState<boolean>(false);
  // const [likeCount, setLikeCount] = useState<number | '?'>('?');
  // const [likeLoading, setLikeLoading] = useState<boolean>(false);
  // const [saved, setSaved] = useState<boolean>(false);
  // const [isOpen, setIsOpen] = useState(false);
  // const [canShare, setShareable] = useState(true);
  // const DATE = new Date(headline.created_at);

  const sourceURL =
    AllNewsSources.get(headline.source)?.url + '?utm_source=nooze.news';
  const sourceName = AllNewsSources.get(headline.source)?.name;

  // const toggleLike = async () => {
  //   setLikeLoading(true);
  //   try {
  //     const response = await fetch(
  //       `/api/fast/react?id=${headline.id}&action=like&reaction=${liked}`,
  //       {
  //         method: 'POST',
  //       },
  //     );
  //     if (response.ok) {
  //       const data = await response.json();
  //       setLikeCount(data.result);
  //     } else {
  //       throw Error();
  //     }
  //   } catch (_error) {
  //     setLikeCount('?');
  //   }
  //   toggleLocalLike();
  //   setLiked(!liked);
  //   setLikeLoading(false);
  // };

  // const toggleLocalLike = () => {
  //   const likedPosts = JSON.parse(localStorage.getItem('likedPosts') || '[]');
  //   if (likedPosts.includes(headline.id)) {
  //     const index = likedPosts.indexOf(headline.id);
  //     likedPosts.splice(index, 1);
  //   } else {
  //     likedPosts.push(headline.id);
  //   }
  //   localStorage.setItem('likedPosts', JSON.stringify(likedPosts));
  //   setLiked(!liked);
  // };

  // useEffect(() => {
  //   const isSaved = () => {
  //     const currentCollection = retrieveCollection();
  //     return !!(currentCollection && currentCollection.get(headline.id));
  //   };
  //   setSaved(isSaved());
  //   const likedPosts = JSON.parse(localStorage.getItem('likedPosts') || '[]');
  //   setLiked(likedPosts.includes(headline.id));
  // }, [headline.id]);

  // const saveToOrRemoveFromCollection = async () => {
  //   const currentCollection = retrieveCollection();
  //   if (currentCollection) {
  //     if (saved && currentCollection.get(headline.id)) {
  //       currentCollection.delete(headline.id);
  //       const mapAsArray = Array.from(currentCollection.entries());
  //       localStorage.setItem(COLLECTION_KEY, JSON.stringify(mapAsArray));
  //       setSaved(false);
  //     } else {
  //       currentCollection.set(headline.id, headline);
  //       const mapAsArray = Array.from(currentCollection.entries());
  //       localStorage.setItem(COLLECTION_KEY, JSON.stringify(mapAsArray));
  //       setSaved(true);
  //     }
  //   } else {
  //     const newCollection = new Map<number, Headline>();
  //     newCollection.set(headline.id, headline);
  //     const mapAsArray = Array.from(newCollection.entries());
  //     localStorage.setItem(COLLECTION_KEY, JSON.stringify(mapAsArray));
  //     setSaved(true);
  //   }
  //   try {
  //     fetch(
  //       `/api/fast/react?id=${headline.id}&action=saved&reaction=${saved}`,
  //       {
  //         method: 'POST',
  //       },
  //     );
  //   } catch (_error) {
  //     // do nothing
  //   }
  // };

  // function retrieveCollection() {
  //   if (typeof window !== 'undefined') {
  //     const mapAsArrayString = localStorage.getItem(COLLECTION_KEY);
  //     if (mapAsArrayString) {
  //       const mapAsArray = JSON.parse(mapAsArrayString);
  //       return new Map<number, Headline>(mapAsArray);
  //     }
  //   }
  //   return null;
  // }

  // const share = async () => {
  //   try {
  //     fetch(`/api/fast/react?id=${headline.id}&action=shared&reaction=false`, {
  //       method: 'POST',
  //     });
  //   } catch (_error) {
  //     // do nothing
  //   }
  //   try {
  //     await navigator.share({
  //       title: headline.headline,
  //       url: headline.link + '?utm_source=nooze.news',
  //     });
  //   } catch (_e) {
  //     setShareable(false);
  //   }
  // };

  // function calculateFontSize(text: string, baseSize = 38): number {
  //   const reductionFactor = 0.5;

  //   let newSize = baseSize - text.length * reductionFactor;

  //   const minimumSize = 12;
  //   if (newSize < minimumSize) {
  //     newSize = minimumSize;
  //   }
  //   return newSize;
  // }

  // const infoHandler = (open: boolean) => {
  //   setIsOpen(open);
  //   if (open) {
  //     trackClicks('info');
  //   }
  // };

  // const trackClicks = (
  //   action:
  //     | 'like'
  //     | 'saved'
  //     | 'shared'
  //     | 'link'
  //     | 'info'
  //     | 'source'
  //     | 'country',
  // ) => {
  //   try {
  //     fetch(
  //       `/api/fast/react?id=${headline.id}&action=${action}&reaction=false`,
  //       {
  //         method: 'POST',
  //       },
  //     );
  //   } catch (_error) {
  //     // do nothing
  //   }
  // };

  // const twShare =
  //   'https://twitter.com/intent/tweet?text=' +
  //   headline.headline +
  //   '&url=' +
  //   headline.link +
  //   '?utm_source=nooze.news';

  return (
    <div
      style={{
        fontFamily: '"Times New Roman", "Georgia", Times, serif',
        backgroundColor: 'white',
        padding: '20px',
        width: '400px',
        border: '2px solid #000',
        boxShadow: '5px 5px 15px rgba(0, 0, 0, 0.2)',
      }}
    >
      <div
        style={{
          fontSize: '30px',
          fontWeight: 'bold',
          textAlign: 'center',
          marginBottom: '20px',
        }}
      >
        <a href={sourceURL} target="_blank" rel="noreferrer">
          {sourceName}
        </a>
      </div>
      <hr
        style={{
          border: 'none',
          borderTop: '2px solid #000',
          textAlign: 'center',
          overflow: 'visible',
        }}
      />
      <div
        style={{
          fontSize: '24px',
          fontWeight: 'bold',
          textAlign: 'center',
          borderBottom: '2px solid #000',
          marginBottom: '15px',
        }}
      >
        {headline.headline}&nbsp;↗
      </div>
      {headline.img_src && (
        <Image
          src={leadImgErr ? '/img/broken.svg' : headline.img_src}
          style={{ objectFit: 'cover' }}
          width={400}
          height={200}
          alt={headline.img_alt ?? ''}
          onError={() => setLeadImgErr(true)}
        />
      )}
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '15px',
          marginTop: '15px',
        }}
      >
        <button
          style={{
            backgroundColor: 'transparent',
            border: 'none',
            cursor: 'pointer',
            fontSize: '24px',
            color: '#000',
            padding: '10px',
            transition: 'color 0.3s ease',
          }}
          title="Like"
        >
          LIKE
        </button>
        <button
          style={{
            backgroundColor: 'transparent',
            border: 'none',
            cursor: 'pointer',
            fontSize: '24px',
            color: '#000',
            padding: '10px',
            transition: 'color 0.3s ease',
          }}
          title="Bookmark"
        >
          BOOK
        </button>
        <button
          style={{
            backgroundColor: 'transparent',
            border: 'none',
            cursor: 'pointer',
            fontSize: '24px',
            color: '#000',
            padding: '10px',
            transition: 'color 0.3s ease',
          }}
          title="Share"
        >
          SHARE
        </button>
      </div>
    </div>
  );
};

export default HeadlineCard;
