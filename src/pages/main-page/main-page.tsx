import CitiesCard from '../../components/cities-card.tsx';

type MainPageProps = {
  offersCount: number;
}

function MainPage({offersCount}: MainPageProps): JSX.Element {
  const cities = ['Paris', 'Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf'];
  const activeCity = 'Paris';

  return (
    <div className="page page--gray page--main">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <a className="header__logo-link header__logo-link--active">
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41"/>
              </a>
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <a className="header__nav-link header__nav-link--profile" href="#">
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                    <span className="header__favorite-count">3</span>
                  </a>
                </li>
                <li className="header__nav-item">
                  <a className="header__nav-link" href="#">
                    <span className="header__signout">Sign out</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <ul className="locations__list tabs__list">
              {cities.map((city) => (
                <li key={city} className="locations__item">
                  <a
                    className={`locations__item-link tabs__item ${city === activeCity ? 'tabs__item--active' : ''}`}
                    href="#"
                  >
                    <span>{city}</span>
                  </a>
                </li>
              ))}
            </ul>
          </section>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{offersCount} places to stay in {activeCity}</b>
              <form className="places__sorting" action="#" method="get">
                <span className="places__sorting-caption">Sort by</span>
                {' '}
                <span className="places__sorting-type" tabIndex={0}>
                  Popular
                  <svg className="places__sorting-arrow" width="7" height="4">
                    <use xlinkHref="#icon-arrow-select"></use>
                  </svg>
                </span>
                <ul className="places__options places__options--custom">
                  <li className="places__option places__option--active" tabIndex={0}>Popular</li>
                  <li className="places__option" tabIndex={0}>Price: low to high</li>
                  <li className="places__option" tabIndex={0}>Price: high to low</li>
                  <li className="places__option" tabIndex={0}>Top rated first</li>
                </ul>
              </form>
              <div className="cities__places-list places__list tabs__content">
                <CitiesCard
                  description="Stylish and modern apartment with great views"
                  imageSrc="img/apartment-01.jpg"
                  price={120}
                  rating={4}
                  housingType="Apartment"
                  isPremium
                />

                <CitiesCard
                  description="Comfortable room in a quiet neighborhood"
                  imageSrc="img/room.jpg"
                  price={80}
                  rating={4}
                  housingType="Room"
                  isFavorite
                />

                <CitiesCard
                  description="Spacious apartment with all amenities"
                  imageSrc="img/apartment-02.jpg"
                  price={132}
                  rating={4}
                  housingType="Apartment"
                />

                <CitiesCard
                  description="Luxurious loft with premium finishes"
                  imageSrc="img/apartment-03.jpg"
                  price={180}
                  rating={5}
                  housingType="Apartment"
                  isPremium
                />

                <CitiesCard
                  description="Affordable accommodation in great location"
                  imageSrc="img/room.jpg"
                  price={75}
                  rating={3}
                  housingType="Room"
                />
              </div>
            </section>
            <div className="cities__right-section">
              <section className="cities__map map"></section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default MainPage;
