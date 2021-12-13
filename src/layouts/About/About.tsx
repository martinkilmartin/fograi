type Props = {
  title: string
}

const About = ({ title }: Props): JSX.Element => (
  <div className="px-4">
    <h2 className="w-full mb-4 text-3xl font-extrabold leading-9 text-center">
      {title}
    </h2>
    <div className="flex flex-col mx-auto"></div>
  </div>
)

export default About
