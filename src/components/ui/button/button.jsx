import './button.css';


function Button({children, tag = 'a', ...props}) {
  const Tag = tag;

  return (
    <>
      <Tag
        className={`${props.className} button`}
        href={props.href}
        style={{ width: props.width, height: props.height }}
      >
        {children}
      </Tag>
    </>
  );
}

export default Button;
