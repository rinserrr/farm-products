import {useEffect, useState} from 'react';
import Title, {TitleSize} from '../../ui/title/title';


function dangerousHTML(html) {
  return {__html: html};
}


function FeatureCard({title, subtitle, image, text}) {
  const [imageData, setImageData] = useState('');

  useEffect(() => {
    fetch(image)
      .then(response => response.blob())
      .then(blob => {
        const reader = new FileReader();
        reader.onload = () => {
          setImageData(reader.result);
        };
        reader.readAsDataURL(blob);
      });
  }, [image]);

  return (
    <>
      {imageData && (
        <img
          src={imageData}
          width={44}
          height={44}
          alt={title}
        />
      )}

      <div className="products__title-wrapper">
        <p className="products__subtitle products__subtitle--good">{subtitle}</p>

        <Title className="products__title noselect" size={TitleSize.H4} tag="h4">{title}</Title>
      </div>

      <p className="products__text" dangerouslySetInnerHTML={dangerousHTML(text)}></p>
    </>
  );
}

export default FeatureCard;

