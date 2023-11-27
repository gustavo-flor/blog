const Anchor = ({ children, ...rest }: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
  <a {...rest} target='_blank' rel='noreferrer'>
    {children}
  </a>
);

export default Anchor;
