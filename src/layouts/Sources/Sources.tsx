import { NewsSources } from '@constants/NEWS_SOURCES'

type Props = {
  title: string
}

const Sources = ({ title }: Props): JSX.Element => (
  <div className="px-4 text-center">
    <h1 className="w-full mb-4 text-4xl font-extrabold leading-9">{title}</h1>
    <div className="flex flex-wrap">
      {Array.from(NewsSources.keys()).map((key, index) => (
        <div
          className="w-full mb-4 text-center shadow-2xl lg:w-1/2 xl:w-1/3 card"
          key={index}
        >
          <div className="card-body">
            <h2 className="text-3xl card-title">
              <a
                className="link link-primary"
                href={NewsSources.get(key)?.url}
                target={'_blank'}
                rel="noreferrer"
              >
                <i>
                  <b>{NewsSources.get(key)?.name}</b>
                </i>
              </a>
            </h2>
            <p>
              <i>
                Estb.&nbsp;<b>{NewsSources.get(key)?.est}</b>
              </i>
            </p>
            {NewsSources.get(key)?.about && (
              <p>{NewsSources.get(key)?.about}</p>
            )}
            {NewsSources.get(key)?.emos?.length && (
              <div className="self-center btn-group">
                {NewsSources.get(key)?.emos?.map((emo, index) => (
                  <h3 className="mx-1 text-2xl" key={index}>
                    {emo}
                  </h3>
                ))}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  </div>
)

export default Sources
