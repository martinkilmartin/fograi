import CloudSync from '@components/SVG/CloudSync';
import Search from '@components/SVG/Search';
import Filter from '@components/SVG/Filter';
import Topics from '@components/SVG/Topics';
import Sentiments from '@components/SVG/Sentiments';
import Trends from '@components/SVG/Trends';
import Sources from '@components/SVG/Sources';
import Multimedia from '@components/SVG/Multimedia';

type Props = {
  title?: boolean;
};

const Roadmap = ({ title = true }: Props): JSX.Element => {
  return (
    <div className="container mx-auto px-4 py-8">
      {title && (
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-red-600 bg-clip-text text-transparent">
            Roadmap
          </h1>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Done */}
        <div className="card bg-base-100 border-2 border-base-content">
          <div className="card-body">
            <h2 className="card-title flex items-center gap-2">
              <span className="badge badge-success">Done</span>
            </h2>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <Search width={32} height={32} />
                <div>
                  <div className="font-semibold">Search</div>
                  <div className="text-sm text-base-content/70">Query across many sources.</div>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Filter width={32} height={32} />
                <div>
                  <div className="font-semibold">Filters</div>
                  <div className="text-sm text-base-content/70">Filter by country, language, and more.</div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* In Progress */}
        <div className="card bg-base-100 border-2 border-base-content">
          <div className="card-body">
            <h2 className="card-title flex items-center gap-2">
              <span className="badge badge-warning">In Progress</span>
            </h2>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <Sources width={32} height={32} />
                <div>
                  <div className="font-semibold">Sources</div>
                  <div className="text-sm text-base-content/70">Lots of sources available; continually adding more.</div>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Multimedia width={32} height={32} />
                <div>
                  <div className="font-semibold">Multimedia</div>
                  <div className="text-sm text-base-content/70">Collecting podcasts and YouTube links.</div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Planned */}
        <div className="card bg-base-100 border-2 border-base-content">
          <div className="card-body">
            <h2 className="card-title flex items-center gap-2">
              <span className="badge badge-outline">Planned</span>
            </h2>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <Topics width={32} height={32} />
                <div>
                  <div className="font-semibold">Topics</div>
                  <div className="text-sm text-base-content/70">Curated topic hubs and curation tools.</div>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Sentiments width={32} height={32} />
                <div>
                  <div className="font-semibold">Sentiments</div>
                  <div className="text-sm text-base-content/70">Sentiment and stance analysis.</div>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Trends width={32} height={32} />
                <div>
                  <div className="font-semibold">Trends</div>
                  <div className="text-sm text-base-content/70">Trend lines and timelines across topics.</div>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <CloudSync width={32} height={32} />
                <div>
                  <div className="font-semibold">Sync</div>
                  <div className="text-sm text-base-content/70">Account sync and personalization.</div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
