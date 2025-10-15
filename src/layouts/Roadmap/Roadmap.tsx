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

      <div className="text-center">
        <p className="text-lg mb-8">
          Our development roadmap is coming soon. Stay tuned for updates on new features!
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          <div className="card bg-base-100 shadow-lg">
            <div className="card-body items-center text-center">
              <Search width={40} height={40} />
              <h3 className="card-title text-sm">Search</h3>
            </div>
          </div>

          <div className="card bg-base-100 shadow-lg">
            <div className="card-body items-center text-center">
              <Filter width={40} height={40} />
              <h3 className="card-title text-sm">Filters</h3>
            </div>
          </div>

          <div className="card bg-base-100 shadow-lg">
            <div className="card-body items-center text-center">
              <Topics width={40} height={40} />
              <h3 className="card-title text-sm">Topics</h3>
            </div>
          </div>

          <div className="card bg-base-100 shadow-lg">
            <div className="card-body items-center text-center">
              <CloudSync width={40} height={40} />
              <h3 className="card-title text-sm">Sync</h3>
            </div>
          </div>

          <div className="card bg-base-100 shadow-lg">
            <div className="card-body items-center text-center">
              <Sentiments width={40} height={40} />
              <h3 className="card-title text-sm">Sentiments</h3>
            </div>
          </div>

          <div className="card bg-base-100 shadow-lg">
            <div className="card-body items-center text-center">
              <Trends width={40} height={40} />
              <h3 className="card-title text-sm">Trends</h3>
            </div>
          </div>

          <div className="card bg-base-100 shadow-lg">
            <div className="card-body items-center text-center">
              <Sources width={40} height={40} />
              <h3 className="card-title text-sm">Sources</h3>
            </div>
          </div>

          <div className="card bg-base-100 shadow-lg">
            <div className="card-body items-center text-center">
              <Multimedia width={40} height={40} />
              <h3 className="card-title text-sm">Multimedia</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
