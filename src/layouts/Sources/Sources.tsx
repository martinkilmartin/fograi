import { CANewsSources, IENewsSources, INNewsSources } from '@constants/NEWS_SOURCES'

type Props = {
  title: string
}

const Sources = ({ title }: Props): JSX.Element => (
  <div className="px-4 text-center">
    <h1 className="w-full mb-4 text-4xl font-extrabold leading-9">{title}</h1>
    <div className="flex flex-wrap">
    {Array.from(CANewsSources.keys()).map((key, index) => (
        <div
          className="w-full mb-4 text-center shadow-2xl lg:w-1/2 xl:w-1/3 card"
          key={index}
        >
          <div className="card-body">
            <h2 className="text-3xl card-title">
              <a
                className="link link-primary"
                href={CANewsSources.get(key)?.url}
                target={'_blank'}
                rel="noreferrer"
              >
                <i>
                  <b>{CANewsSources.get(key)?.name}</b>
                </i>
              </a>
            </h2>
            <p>
              <i>
                Estb.&nbsp;<b>{CANewsSources.get(key)?.est}</b>
              </i>
            </p>
            {CANewsSources.get(key)?.about && (
              <p>{CANewsSources.get(key)?.about}</p>
            )}
            {CANewsSources.get(key)?.emos?.length && (
              <div className="self-center btn-group">
                {CANewsSources.get(key)?.emos?.map((emo, index) => (
                  <h3 className="mx-1 text-2xl" key={index}>
                    {emo}
                  </h3>
                ))}
              </div>
            )}
          </div>
        </div>
      ))}
      {Array.from(IENewsSources.keys()).map((key, index) => (
        <div
          className="w-full mb-4 text-center shadow-2xl lg:w-1/2 xl:w-1/3 card"
          key={index}
        >
          <div className="card-body">
            <h2 className="text-3xl card-title">
              <a
                className="link link-primary"
                href={IENewsSources.get(key)?.url}
                target={'_blank'}
                rel="noreferrer"
              >
                <i>
                  <b>{IENewsSources.get(key)?.name}</b>
                </i>
              </a>
            </h2>
            <p>
              <i>
                Estb.&nbsp;<b>{IENewsSources.get(key)?.est}</b>
              </i>
            </p>
            {IENewsSources.get(key)?.about && (
              <p>{IENewsSources.get(key)?.about}</p>
            )}
            {IENewsSources.get(key)?.emos?.length && (
              <div className="self-center btn-group">
                {IENewsSources.get(key)?.emos?.map((emo, index) => (
                  <h3 className="mx-1 text-2xl" key={index}>
                    {emo}
                  </h3>
                ))}
              </div>
            )}
          </div>
        </div>
      ))}
      {Array.from(INNewsSources.keys()).map((key, index) => (
        <div
          className="w-full mb-4 text-center shadow-2xl lg:w-1/2 xl:w-1/3 card"
          key={index}
        >
          <div className="card-body">
            <h2 className="text-3xl card-title">
              <a
                className="link link-primary"
                href={INNewsSources.get(key)?.url}
                target={'_blank'}
                rel="noreferrer"
              >
                <i>
                  <b>{INNewsSources.get(key)?.name}</b>
                </i>
              </a>
            </h2>
            <p>
              <i>
                Estb.&nbsp;<b>{INNewsSources.get(key)?.est}</b>
              </i>
            </p>
            {INNewsSources.get(key)?.about && (
              <p>{INNewsSources.get(key)?.about}</p>
            )}
            {INNewsSources.get(key)?.emos?.length && (
              <div className="self-center btn-group">
                {INNewsSources.get(key)?.emos?.map((emo, index) => (
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
