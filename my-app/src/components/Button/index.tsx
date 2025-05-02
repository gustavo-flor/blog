interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'key-button';
}

const Button = ({ variant = 'default', children, className, ...rest }: Props) => {
  if (variant == 'key-button') {
    return (
      <button className={`${className} bg-purple-400 rounded-full`} {...rest}>
        {children}
      </button>
    )
  }

  return (
    <button className={`${className} flex justify-center items-center bg-purple-500 text-white rounded-full px-4 py-2`} {...rest}>
      {children}
    </button>
  )
}

export default Button
