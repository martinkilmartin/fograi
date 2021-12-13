import { NewsSources } from '@constants/NEWS_SOURCES'

type Props = {
  title: string
}

const Sources = ({ title }: Props): JSX.Element => (
  <div className="px-4 text-center">
    <h2 className="w-full mb-4 text-3xl font-extrabold leading-9">{title}</h2>
    <div className="flex flex-col mx-auto">
      {Array.from(NewsSources.keys())
        .map((key, index) => (
          <p key={index}>
            <a
              className="link link-primary"
              href={NewsSources.get(key)?.url}
              target={'_blank'}
              rel="noreferrer"
            >
              <b>{NewsSources.get(key)?.name}</b>
            </a>
          </p>
        ))}
    </div>
  </div>
)

export default Sources
