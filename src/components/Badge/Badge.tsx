import clsx from 'clsx'

const OUTLINE = {
  no: '',
  outline: ' badge-outline',
}

const COLORS = {
  no: '',
  primary: 'badge-primary',
  secondary: 'badge-secondary',
  accent: 'badge-accent',
  ghost: 'badge-ghost',
  info: ' badge-info',
  success: ' badge-success',
  warning: ' badge-warning',
  error: ' badge-error',
}

const SIZES = {
  no: '',
  lg: 'badge-lg',
  md: 'badge-md',
  sm: 'badge-sm',
  xs: 'badge-xs',
}

type Props = {
  text: string
  color?: keyof typeof COLORS
  outline?: keyof typeof OUTLINE
  size?: keyof typeof SIZES
}

const Badge = ({
  text,
  color = 'no',
  outline = 'no',
  size = 'no',
}: Props): JSX.Element => {
  return (
    <div
      className={clsx(
        'self-center badge',
        OUTLINE[outline],
        COLORS[color],
        SIZES[size]
      )}
    >
      {text}
    </div>
  )
}

export default Badge
