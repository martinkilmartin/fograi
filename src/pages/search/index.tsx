import React, { useEffect, useState } from 'react';
import { useQueryClient } from 'react-query';
import { useRouter } from 'next/router';
import { APP_TITLE, TAG_LINE } from '@constants/CONTENT';
import { Page } from '@layouts/Page';
// Replaced custom UI imports with native elements styled via DaisyUI

const HomePage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [recent, setRecent] = useState<string[]>([]);
  const router = useRouter();
  const queryClient = useQueryClient();

  useEffect(() => {
    try {
      const raw = localStorage.getItem('recent_searches');
      if (raw) setRecent(JSON.parse(raw));
    } catch (_e) { /* noop */ }
  }, []);

  const persistRecent = (q: string) => {
    try {
      const next = [q, ...recent.filter((r) => r !== q)].slice(0, 8);
      setRecent(next);
      localStorage.setItem('recent_searches', JSON.stringify(next));
    } catch (_e) { /* noop */ }
  };

  const handleSearch = () => {
    const q = searchTerm.trim();
    if (!q) {
      setError('Please enter a search term.');
      return;
    }
    setError(null);
    setLoading(true);
    queryClient.removeQueries('headlines');
    persistRecent(q);
    router.push(`/search/${q}`);
    setTimeout(() => setLoading(false), 3000);
  };

  return (
    <Page title={APP_TITLE} heading={TAG_LINE}>
      <div className="max-w-3xl mx-auto">
        <div className="mb-6">
          <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight">
            Search trusted journalism across the globe
          </h1>
          <p className="mt-2 text-base-content/70">
            Find headlines, podcasts, and videos from hundreds of curated sources.
          </p>
        </div>

        <form
          onSubmit={(e) => { e.preventDefault(); handleSearch(); }}
          className="flex flex-col sm:flex-row gap-3 items-stretch"
        >
          <input
            placeholder={searchTerm.length ? undefined : 'Search news, topics, outlets…'}
            onChange={(e) => setSearchTerm(e.target.value)}
            className={`input input-lg input-bordered w-full ${error ? 'input-error' : ''}`}
            value={searchTerm}
            aria-invalid={!!error}
            aria-label="Search"
          />
          <div className="flex gap-2">
            <button
              type="submit"
              aria-label="Search"
              disabled={loading}
              className="btn btn-lg btn-primary w-full sm:w-auto"
            >
              {loading ? 'Searching…' : 'Search'}
            </button>
            <button
              type="button"
              className="btn btn-lg btn-ghost"
              onClick={() => { setSearchTerm(''); setError(null); }}
              disabled={loading || !searchTerm}
              aria-label="Clear"
            >
              Clear
            </button>
          </div>
        </form>
        {error ? <p className="mt-2 text-error">{error}</p> : null}

        {/* Popular searches */}
        <div className="mt-6">
          <div className="mb-2 text-sm uppercase tracking-wide text-base-content/60">Popular searches</div>
          <div className="flex flex-wrap gap-2">
            {['election', 'immigration', 'interest rates', 'tech layoffs', 'climate change'].map((q) => (
              <button
                key={q}
                type="button"
                className="badge badge-outline hover:badge-primary cursor-pointer"
                onClick={() => { setSearchTerm(q); setError(null); }}
                aria-label={`Use '${q}'`}
              >
                {q}
              </button>
            ))}
          </div>
        </div>

        {/* Recent searches */}
        {recent.length ? (
          <div className="mt-6">
            <div className="mb-2 text-sm uppercase tracking-wide text-base-content/60">Recent</div>
            <div className="flex flex-wrap gap-2">
              {recent.map((q) => (
                <button
                  key={q}
                  type="button"
                  className="badge badge-neutral hover:badge-primary cursor-pointer"
                  onClick={() => { setSearchTerm(q); setError(null); }}
                  aria-label={`Use recent '${q}'`}
                >
                  {q}
                </button>
              ))}
              <button
                type="button"
                className="badge badge-outline cursor-pointer"
                onClick={() => { setRecent([]); localStorage.removeItem('recent_searches'); }}
                aria-label="Clear recent"
              >
                Clear recent
              </button>
            </div>
          </div>
        ) : null}
      </div>
    </Page>
  );
};

export default HomePage;
