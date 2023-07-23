import { useState } from 'react'

type Props = {
  a?: string
  b?: string
}

const ThemeToggle = ({ a = 'cupcake', b = 'cyberpunk' }: Props): JSX.Element => {
  const [theme, setTheme] = useState(true)
  const toggleTheme = () => setTheme((theme) => !theme)
  return (
    <button
      data-toggle-theme={`${a},${b}`}
      data-act-class="ACTIVECLASS"
      onClick={toggleTheme}
    >
      <span className="sr-only">{theme ? a : b}</span>
      {theme ? (
        <span className="text-5xl">🌞</span>
      ) : (
        <span className="text-5xl">🌛</span>
      )}
    </button>
  )
}

export default ThemeToggle
