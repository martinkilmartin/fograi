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
          <h1 className="text-4xl font-bold">
            Roadmap
          </h1>
        </div>
      )}

      <ul className="timeline timeline-vertical">
        {/* Done: Search (right side box) */}
        <li>
          <div className="timeline-start text-success">Done</div>
          <div className="timeline-middle text-success">
            <Search width={24} height={24} />
          </div>
          <div className="timeline-end timeline-box">
            <h3 className="font-semibold">Search</h3>
            <p className="text-sm text-base-content/70">Query across many sources.</p>
          </div>
          <hr className="bg-success" />
        </li>

        {/* Done: Filters (left side box) */}
        <li>
          <hr className="bg-success" />
          <div className="timeline-start timeline-box">
            <h3 className="font-semibold">Filters</h3>
            <p className="text-sm text-base-content/70">Filter by country, language, and more.</p>
          </div>
          <div className="timeline-middle text-success">
            <Filter width={24} height={24} />
          </div>
          <div className="timeline-end text-success">Done</div>
          <hr className="bg-warning" />
        </li>

        {/* In Progress: Sources (right side box) */}
        <li>
          <div className="timeline-start text-warning">In Progress</div>
          <div className="timeline-middle text-warning">
            <Sources width={24} height={24} />
          </div>
          <div className="timeline-end timeline-box">
            <h3 className="font-semibold">Sources</h3>
            <p className="text-sm text-base-content/70">Lots of sources available; continually adding more.</p>
          </div>
          <hr className="bg-warning" />
        </li>

        {/* In Progress: Multimedia (left side box) */}
        <li>
          <hr className="bg-warning" />
          <div className="timeline-start timeline-box">
            <h3 className="font-semibold">Multimedia</h3>
            <p className="text-sm text-base-content/70">Collecting podcasts and YouTube links.</p>
          </div>
          <div className="timeline-middle text-warning">
            <Multimedia width={24} height={24} />
          </div>
          <div className="timeline-end text-warning">In Progress</div>
          <hr className="bg-info" />
        </li>

        {/* Planned: Topics (right side box) */}
        <li>
          <div className="timeline-start text-info">Planned</div>
          <div className="timeline-middle text-info">
            <Topics width={24} height={24} />
          </div>
          <div className="timeline-end timeline-box">
            <h3 className="font-semibold">Topics</h3>
            <p className="text-sm text-base-content/70">Curated topic hubs and curation tools.</p>
          </div>
          <hr className="bg-info" />
        </li>

        {/* Planned: Sentiments (left side box) */}
        <li>
          <hr className="bg-info" />
          <div className="timeline-start timeline-box">
            <h3 className="font-semibold">Sentiments</h3>
            <p className="text-sm text-base-content/70">Sentiment and stance analysis.</p>
          </div>
          <div className="timeline-middle text-info">
            <Sentiments width={24} height={24} />
          </div>
          <div className="timeline-end text-info">Planned</div>
          <hr className="bg-info" />
        </li>

        {/* Planned: Trends (right side box) */}
        <li>
          <div className="timeline-start text-info">Planned</div>
          <div className="timeline-middle text-info">
            <Trends width={24} height={24} />
          </div>
          <div className="timeline-end timeline-box">
            <h3 className="font-semibold">Trends</h3>
            <p className="text-sm text-base-content/70">Trend lines and timelines across topics.</p>
          </div>
          <hr className="bg-info" />
        </li>

        {/* Planned: Sync (left side box) */}
        <li>
          <div className="timeline-start timeline-box">
            <h3 className="font-semibold">Sync</h3>
            <p className="text-sm text-base-content/70">Account sync and personalization.</p>
          </div>
          <div className="timeline-middle text-info">
            <CloudSync width={24} height={24} />
          </div>
          <div className="timeline-end text-info">Planned</div>
        </li>
      </ul>
    </div>
  );
};

export default Roadmap;
