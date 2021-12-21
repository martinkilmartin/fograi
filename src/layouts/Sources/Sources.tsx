import { NewsSources } from '@constants/NEWS_SOURCES'

type Props = {
  title: string
}

const Sources = ({ title }: Props): JSX.Element => (
  <div className="px-4 text-center">
    <h2 className="w-full mb-4 text-3xl font-extrabold leading-9">{title}</h2>
    <div className="flex flex-wrap">
      {Array.from(NewsSources.keys()).map((key, index) => (
        <div
          className="w-full lg:w-1/2 xl:w-1/3 mb-4 card text-center shadow-2xl"
          key={index}
        >
          <div className="card-body">
            <h2 className="card-title">
              <a
                className="link link-primary"
                href={NewsSources.get(key)?.url}
                target={'_blank'}
                rel="noreferrer"
              >
                <b>{NewsSources.get(key)?.name}</b>
              </a>
            </h2>
            <p>
              <i>Estb.&nbsp;{NewsSources.get(key)?.est}</i>
            </p>
          </div>
        </div>
      ))}
    </div>
  </div>
)

export default Sources
