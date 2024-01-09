import Title, { TitleSize } from '../../ui/title/title';

import './about.css';


function About() {
  return (
  <>
          <section className="about">
          <div className="container">
            <div className="about__wrapper">

              <Title className="about__title noselect" size={TitleSize.H1} tag="h1">Магазин фермерских &nbsp; продуктов с&nbsp;доставкой</Title>

              <p className="about__text">Все продукты изготавливаются под заказ. Фермеры <br />начинают готовить продукты за&nbsp;день до&nbsp;отправки заказа клиентам. Именно поэтому мы&nbsp;принимаем заказы заранее и&nbsp;доставляем продукты максимально свежими.</p>
            </div>
          </div>
        </section>
  </>
  );
}


export default About;
