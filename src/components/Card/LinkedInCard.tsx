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

type Props = { headline: Headline; country?: CountriesType; idx?: number };

const LinkedInCard = ({ headline }: Props): JSX.Element => {
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
    const c = retrieveCollection();
    if (c) {
      if (saved && c.get(headline.id)) { c.delete(headline.id); }
      else { c.set(headline.id, headline); }
      localStorage.setItem(COLLECTION_KEY, JSON.stringify(Array.from(c.entries())));
      setSaved(!saved);
    } else {
      const n = new Map<number, Headline>();
      n.set(headline.id, headline);
      localStorage.setItem(COLLECTION_KEY, JSON.stringify(Array.from(n.entries())));
      setSaved(true);
    }
    try { fetch(`/api/fast/react?id=${headline.id}&action=saved&reaction=${saved}`, { method: 'POST' }); } catch {}
  };
  function retrieveCollection() {
    if (typeof window !== 'undefined') {
      const s = localStorage.getItem(COLLECTION_KEY);
      if (s) return new Map<number, Headline>(JSON.parse(s));
    }
    return null;
  }
  const share = async () => {
    try { fetch(`/api/fast/react?id=${headline.id}&action=shared&reaction=false`, { method: 'POST' }); } catch {}
    try { await navigator.share({ title: headline.headline, url: articleLink }); }
    catch { setShareable(false); }
  };
  const twShare = 'https://twitter.com/intent/tweet?text=' + headline.headline + '&url=' + articleLink;

  return (
    <div className="border border-base-300 rounded-lg bg-base-100 p-3" style={{ margin: '10px' }}>
      {/* Header */}
      <div className="flex items-center gap-3 text-sm text-base-content/80">
        <div className="h-8 w-8 rounded bg-base-300 flex items-center justify-center">{mediaEmoji}</div>
        <a className="font-semibold hover:underline" href={sourceURL} target="_blank" rel="noreferrer" title={sourceName ?? ''}>
          {sourceName ?? ''}
        </a>
        <span>•</span>
        <time title={DATE.toLocaleString()}>{diffDisplay(DATE)}</time>
        <span>•</span>
        <span title={iso2}>{countryFlag}</span>
      </div>

      {/* Body: headline + right thumbnail */}
      <div className="mt-2 flex gap-3 items-start">
        <div className="flex-1 min-w-0">
          <Link href={articleLink} target="_blank" rel="noreferrer" className="no-underline">
            <h3 className="text-base-content font-semibold leading-snug hover:underline">{headline.headline} ↗</h3>
          </Link>
        </div>
        {headline.img_src && !leadImgErr && (
          <div className="shrink-0" style={{ width: 112, height: 84, position: 'relative' }}>
            <Image src={headline.img_src} alt={headline.img_alt ?? ''} width={112} height={84} className="object-cover rounded" onError={() => setLeadImgErr(true)} />
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="mt-3 flex items-center justify-between">
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

export default LinkedInCard;
