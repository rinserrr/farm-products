import Title, { TitleSize } from '../../ui/title/title';
import FeatureCard from '../../ui/feature-card/feature-card';
import Button from '../../ui/button/button';

import './features.css';


function Features({products}) {
  return (
    <>
      <section className="features">
        <div className="container">
          <div className="features__wrapper">
            <Title className="features__title noselect" size={TitleSize.H2} tag="h2">Почему фермерские продукты лучше?</Title>

            <div className="features__product products">
              <div className="products__wrapper">
                <ul className="products__list">
                  {products.map((product) => (
                    <li className="products__item products__item--good" key={product.id}>
                      <FeatureCard {...product} />
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <Button
              width={260}
              height={60}
              className="features__button"
              href="#"
              tag="button"
            >Купить</Button>

          </div>
        </div>
      </section>
    </>
  );
}

export default Features;
