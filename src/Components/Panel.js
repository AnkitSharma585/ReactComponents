import classNames from 'classnames';

function Panel({ children, className, ...rest }) {
  const classes = classNames(
    'border shadow p-2 m-1 cursor-pointer rounded',
    className
  );
  return (
    <div {...rest} className={classes}>
      {children}
    </div>
  );
}
export default Panel;
