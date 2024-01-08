import logo from '../../../img/logo/logo.svg';


function Logo() {
  return (
    <>
      <a className="header__logo-link logo" href="index.html">
        <picture className="header__logo">
          <img src={logo} width="44" height="44" alt="Логотип Фермерских продуктов." />
        </picture>
      </a>
    </>
  );
}

export default Logo;
