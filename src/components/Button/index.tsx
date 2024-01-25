const Button = ({ children, className, ...rest }: React.ButtonHTMLAttributes<HTMLButtonElement>) => (
  <button className={`bg-purple-400 rounded-full ${className}`} {...rest}>
    {children}
  </button>
);

export default Button;
