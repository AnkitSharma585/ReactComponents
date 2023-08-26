import classNames from 'classnames';

function Button({
  children,
  primary,
  secondary,
  success,
  warning,
  danger,
  rounded,
  outline,
  ...rest
}) {
  const classes = classNames('px-3 py-1.5 m-2 border', {
    'bg-blue-600 text-white': primary,
    'bg-gray-600 text-white': secondary,
    'bg-green-600 text-white': success,
    'bg-yellow-600 text-white': warning,
    'bg-red-600 text-white': danger,
    'bg-white': outline,
    'rounded-full': rounded,
  });
  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
}
export default Button;
