import './title.css';


export const TitleSize = {
  H1: "h1",
  H2: "h2",
  H3: "h3",
  H4: "h4",
  DEFAULT: ""
};


function Title({ children, size, tag = 'h2', ...props }) {
  // 1
  // const Tag = tag;
  // return <Tag className={`${props.className} title${size ? ` title__${size}` : ""}`}>{children}</Tag>;

  // 2
  const Tag = tag;
  const sizeClass = size ? `title--${size}` : '';
  // console.log(children); - Магазин фермерских продуктов с доставкой
  return <Tag className={`${props.className} title ${sizeClass}`}> {children} </Tag>;
}


export default Title;
