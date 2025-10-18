import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import diffDisplay from '@lib/time-format';
import Heart from '@components/SVG/Heart';
import Bookmark from '@components/SVG/Bookmark';
import Share from '@components/SVG/Share';
import X from '@components/SVG/X';
import { AllNewsSources } from '@constants/NEWS_SOURCES';
import { getFlag } from '@lib/geo';
import { Headline } from '../../types';
import { Countries as CountriesType } from '../../types/countries';
import { loadHeadlineCollection, saveHeadlineCollection } from '@lib/collection-storage';

type Props = { headline: Headline; country?: CountriesType; idx?: number };

const MediumCard = ({ headline }: Props): JSX.Element => {
  const COLLECTION_KEY = 'nooze';

  const [leadImgErr, setLeadImgErr] = useState(false);
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState<number | '?'>('?');
  const [likeLoading, setLikeLoading] = useState(false);
  const [saved, setSaved] = useState(false);
  const [canShare, setShareable] = useState(true);

  const DATE = new Date(headline.created_at);
  const utm = 'utm_source=nooze.news';
  const sourceURL = AllNewsSources.get(headline.source)?.url + '?' + utm;
  const articleLink = headline.link.includes('?') ? `${headline.link}&${utm}` : `${headline.link}?${utm}`;
  const sourceName = AllNewsSources.get(headline.source)?.name;
  const iso2 = (headline.country || '').slice(0, 2).toUpperCase();
  const countryFlag = getFlag(iso2);

  const mediaEmojiMap = { video: '🎬', audio: '🎧', article: '📰' } as const;
  const mediaEmoji = mediaEmojiMap[headline.media_type as keyof typeof mediaEmojiMap] ?? '📰';

  const toggleLike = async () => {
    setLikeLoading(true);
    try {
      const r = await fetch(`/api/fast/react?id=${headline.id}&action=like&reaction=${liked}`, { method: 'POST' });
      if (r.ok) {
        const data = await r.json();
        setLikeCount(data.result);
      } else {
        throw Error();
      }
    } catch { setLikeCount('?'); }
    toggleLocalLike();
    setLiked(!liked);
    setLikeLoading(false);
  };
  const toggleLocalLike = () => {
    const likedPosts = JSON.parse(localStorage.getItem('likedPosts') || '[]');
    if (likedPosts.includes(headline.id)) likedPosts.splice(likedPosts.indexOf(headline.id), 1);
    else likedPosts.push(headline.id);
    localStorage.setItem('likedPosts', JSON.stringify(likedPosts));
    setLiked(!liked);
  };
  useEffect(() => {
    const collection = retrieveCollection();
    setSaved(!!(collection && collection.get(headline.id)));
    const likedPosts = JSON.parse(localStorage.getItem('likedPosts') || '[]');
    setLiked(likedPosts.includes(headline.id));
  }, [headline.id]);
  const saveToOrRemoveFromCollection = async () => {
    const collection = loadHeadlineCollection<Headline>(COLLECTION_KEY) ?? new Map<number, Headline>();
    const wasSaved = collection.has(headline.id);

    if (wasSaved) {
      collection.delete(headline.id);
      setSaved(false);
    } else {
      collection.set(headline.id, headline);
      setSaved(true);
    }

    saveHeadlineCollection(COLLECTION_KEY, collection);

    try { fetch(`/api/fast/react?id=${headline.id}&action=saved&reaction=${wasSaved}`, { method: 'POST' }); } catch (_e) { void 0; }
  };
  function retrieveCollection() {
    return loadHeadlineCollection<Headline>(COLLECTION_KEY);
  }
  const share = async () => {
    try { fetch(`/api/fast/react?id=${headline.id}&action=shared&reaction=false`, { method: 'POST' }); } catch (_e) { void 0; }
    try { await navigator.share({ title: headline.headline, url: articleLink }); }
    catch { setShareable(false); }
  };
  const twShare = 'https://twitter.com/intent/tweet?text=' + headline.headline + '&url=' + articleLink;

  return (
    <div className="rounded-xl border border-base-300 bg-base-100 p-5" style={{ margin: '10px' }}>
      <Link href={articleLink} target="_blank" rel="noreferrer" className="no-underline">
        <h2 className="text-xl font-semibold text-base-content leading-tight hover:underline">{headline.headline} ↗</h2>
      </Link>
      <div className="mt-2 text-sm text-base-content/70 flex items-center gap-2">
        <span className="inline-flex h-5 w-5 items-center justify-center rounded bg-base-300 text-[11px]">
          {mediaEmoji}
        </span>
        <a className="hover:underline" href={sourceURL} target="_blank" rel="noreferrer" title={sourceName ?? ''}>{sourceName ?? ''}</a>
        <span>•</span>
        <time title={DATE.toLocaleString()}>{diffDisplay(DATE)}</time>
        <span>•</span>
        <span title={iso2}>{countryFlag}</span>
      </div>
      {headline.img_src && !leadImgErr && (
        <div className="mt-4 overflow-hidden rounded-lg border border-base-300" style={{ position: 'relative' }}>
          <Image src={headline.img_src} alt={headline.img_alt ?? ''} width={1000} height={520} className="w-full h-auto object-cover" onError={() => setLeadImgErr(true)} />
        </div>
      )}
      <div className="mt-4 flex items-center justify-between">
        <div className="indicator">
          <span className="indicator-item badge badge-sm">{likeLoading ? '...' : likeCount}</span>
          <button className={`btn btn-ghost btn-sm btn-circle ${liked ? 'text-error' : ''}`} onClick={toggleLike} aria-label="Like" title={liked ? 'Unlike' : 'Like'}>
            <Heart someBool={liked} />
          </button>
        </div>
        <div className="flex items-center gap-2">
          <button className={`btn btn-ghost btn-sm btn-circle ${saved ? 'text-warning' : ''}`} onClick={saveToOrRemoveFromCollection} aria-label="Bookmark" title={saved ? 'Remove bookmark' : 'Bookmark'}>
            <Bookmark someBool={saved} />
          </button>
          {canShare ? (
            <button className="btn btn-ghost btn-sm btn-circle" onClick={share} aria-label="Share" title="Share">
              <Share someBool={false} />
            </button>
          ) : (
            <Link href={twShare} target="_blank" rel="noreferrer" title="Browser share not supported. Defaulting to X." className="btn btn-ghost btn-sm btn-circle" aria-label="Share on X">
              <X />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default MediumCard;
