interface Props {
  className?: string;
}

const Brand = ({ className }: Props) => (
  <span className={`font-bold text-gray-200 ${className}`}>
    gustavoflor<small className='text-purple-500'>.dev</small>
  </span>
);

export default Brand;