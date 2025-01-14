import { ReactComponent as Logo } from '../../assets/images/LOGO.svg';

import { LINKS } from './config';

export const Header = () => {
  return (
    <header className="header">
      <div className="container header__content">
        <Logo className="header__logo" />
        <div className="header__links">
          {LINKS.map((link, index) => (
            <a href={link.link} key={link.link} className="header__link">
              {typeof link.render === 'string' ? link.render : link.render('header__link-icon')}
            </a>
          ))}
        </div>
        <input type="checkbox" id="burger-toggle" class="header__toggle" />
        <label for="burger-toggle" class="header__burger">
          <span></span>
          <span></span>
          <span></span>
        </label>
        <nav class="header__menu">
          <ul>
            {LINKS.map((link, index) => (
              <li>
                <a href={link.link} key={link.link} className="header__link">
                  {typeof link.render === 'string' ? link.render : link.render('header__link-icon')}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};
