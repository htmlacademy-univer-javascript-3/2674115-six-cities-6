﻿function OfferPage(): JSX.Element {
  const images = [
    'img/room.jpg',
    'img/apartment-01.jpg',
    'img/apartment-02.jpg',
    'img/apartment-03.jpg',
    'img/studio-01.jpg',
    'img/studio-02.jpg'
  ];

  const amenities = [
    'Wi-Fi',
    'Washing machine',
    'Towels',
    'Heating',
    'Coffee machine',
    'Baby seat',
    'Kitchen',
    'Dishwasher',
    'Cable TV',
    'Fridge'
  ];

  const nearbyOffers = [
    {
      id: 1,
      title: 'Modern Studio Apartment',
      image: 'img/room.jpg',
      price: 80,
      rating: 4.2,
      type: 'Room',
      isFavorite: true
    },
    {
      id: 2,
      title: 'City Center Apartment',
      image: 'img/apartment-02.jpg',
      price: 132,
      rating: 4.7,
      type: 'Apartment',
      isFavorite: false
    },
    {
      id: 3,
      title: 'Luxury Penthouse Suite',
      image: 'img/apartment-03.jpg',
      price: 180,
      rating: 4.9,
      type: 'Apartment',
      isPremium: true,
      isFavorite: false
    }
  ];

  const reviews = [
    {
      id: 1,
      user: 'Max',
      avatar: 'img/avatar-max.jpg',
      rating: 4.0,
      text: 'The apartment was very comfortable and had everything we needed for our stay. Great location with easy access to public transportation.',
      date: '2024-03-15'
    },
    {
      id: 2,
      user: 'Sarah',
      avatar: 'img/avatar-sarah.jpg',
      rating: 5.0,
      text: 'Absolutely loved our stay! The host was very responsive and the apartment was spotless. Would definitely book again.',
      date: '2024-02-28'
    }
  ];

  const calculateStarWidth = (rating: number) => `${(rating / 5) * 100}%`;

  return (
    <div className='page'>
      <header className='header'>
        <div className='container'>
          <div className='header__wrapper'>
            <div className='header__left'>
              <a className='header__logo-link' href='main.html'>
                <img className='header__logo' src='img/logo.svg' alt='6 cities logo' width='81' height='41' />
              </a>
            </div>
            <nav className='header__nav'>
              <ul className='header__nav-list'>
                <li className='header__nav-item user'>
                  <a className='header__nav-link header__nav-link--profile' href='#'>
                    <div className='header__avatar-wrapper user__avatar-wrapper'>
                    </div>
                    <span className='header__user-name user__name'>Oliver.conner@gmail.com</span>
                    <span className='header__favorite-count'>3</span>
                  </a>
                </li>
                <li className='header__nav-item'>
                  <a className='header__nav-link' href='#'>
                    <span className='header__signout'>Sign out</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main className='page__main page__main--offer'>
        <section className='offer'>
          <div className='offer__gallery-container container'>
            <div className='offer__gallery'>
              {images.slice(0, 6).map((image, index) => (
                <div key={image} className='offer__image-wrapper'>
                  <img
                    className='offer__image'
                    src={image}
                    alt={`Interior view ${index + 1}`}
                  />
                </div>
              ))}
            </div>
          </div>
          <div className='offer__container container'>
            <div className='offer__wrapper'>
              <div className='offer__mark'>
                <span>Premium</span>
              </div>
              <div className='offer__name-wrapper'>
                <h1 className='offer__name'>
                  Luxury Apartment in Historic Center
                </h1>
                <button className='offer__bookmark-button button' type='button'>
                  <svg className='offer__bookmark-icon' width='31' height='33'>
                    <use xlinkHref='#icon-bookmark'></use>
                  </svg>
                  <span className='visually-hidden'>To bookmarks</span>
                </button>
              </div>
              <div className='offer__rating rating'>
                <div className='offer__stars rating__stars'>
                  <span style={{width: calculateStarWidth(4.8)}}></span>
                  <span className='visually-hidden'>Rating</span>
                </div>
                <span className='offer__rating-value rating__value'>4.8</span>
              </div>
              <ul className='offer__features'>
                <li className='offer__feature offer__feature--entire'>
                  Apartment
                </li>
                <li className='offer__feature offer__feature--bedrooms'>
                  2 Bedrooms
                </li>
                <li className='offer__feature offer__feature--adults'>
                  Max 4 adults
                </li>
              </ul>
              <div className='offer__price'>
                <b className='offer__price-value'>&euro;120</b>
                <span className='offer__price-text'>&nbsp;per night</span>
              </div>
              <div className='offer__inside'>
                <h2 className='offer__inside-title'>What&apos;s inside</h2>
                <ul className='offer__inside-list'>
                  {amenities.map((amenity) => (
                    <li key={amenity} className='offer__inside-item'>
                      {amenity}
                    </li>
                  ))}
                </ul>
              </div>
              <div className='offer__host'>
                <h2 className='offer__host-title'>Meet the host</h2>
                <div className='offer__host-user user'>
                  <div className='offer__avatar-wrapper offer__avatar-wrapper--pro user__avatar-wrapper'>
                    <img className='offer__avatar user__avatar' src='img/avatar-angelina.jpg' width='74' height='74' alt='Host avatar' />
                  </div>
                  <span className='offer__user-name'>
                    Angelina
                  </span>
                  <span className='offer__user-status'>
                    Pro
                  </span>
                </div>
                <div className='offer__description'>
                  <p className='offer__text'>
                    This beautiful apartment is located in the heart of the historic district, offering stunning views of the city. Recently renovated with modern amenities while preserving original architectural details.
                  </p>
                  <p className='offer__text'>
                    Perfect for both short stays and longer visits. The space features high ceilings, large windows, and a fully equipped kitchen. Within walking distance to major attractions, restaurants, and shopping areas.
                  </p>
                </div>
              </div>
              <section className='offer__reviews reviews'>
                <h2 className='reviews__title'>Reviews &middot; <span className='reviews__amount'>{reviews.length}</span></h2>
                <ul className='reviews__list'>
                  {reviews.map((review) => (
                    <li key={review.id} className='reviews__item'>
                      <div className='reviews__user user'>
                        <div className='reviews__avatar-wrapper user__avatar-wrapper'>
                          <img className='reviews__avatar user__avatar' src={review.avatar} width='54' height='54' alt='Reviews avatar' />
                        </div>
                        <span className='reviews__user-name'>
                          {review.user}
                        </span>
                      </div>
                      <div className='reviews__info'>
                        <div className='reviews__rating rating'>
                          <div className='reviews__stars rating__stars'>
                            <span style={{width: calculateStarWidth(review.rating)}}></span>
                            <span className='visually-hidden'>Rating</span>
                          </div>
                        </div>
                        <p className='reviews__text'>
                          {review.text}
                        </p>
                        <time className='reviews__time' dateTime={review.date}>
                          {new Date(review.date).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
                        </time>
                      </div>
                    </li>
                  ))}
                </ul>
                <form className='reviews__form form' action='#' method='post'>
                  <label className='reviews__label form__label' htmlFor='review'>Your review</label>
                  <div className='reviews__rating-form form__rating'>
                    {[5, 4, 3, 2, 1].map((rating) => (
                      <div key={rating}>
                        <input
                          className='form__rating-input visually-hidden'
                          name='rating'
                          value={rating}
                          id={`${rating}-stars`}
                          type='radio'
                        />
                        <label htmlFor={`${rating}-stars`} className='reviews__rating-label form__rating-label' title={['perfect', 'good', 'not bad', 'badly', 'terribly'][5 - rating]}>
                          <svg className='form__star-image' width='37' height='33'>
                            <use xlinkHref='#icon-star'></use>
                          </svg>
                        </label>
                      </div>
                    ))}
                  </div>
                  <textarea
                    className='reviews__textarea form__textarea'
                    id='review'
                    name='review'
                    placeholder='Tell how was your stay, what you like and what can be improved'
                  >
                  </textarea>
                  <div className='reviews__button-wrapper'>
                    <p className='reviews__help'>
                      To submit review please make sure to set <span className='reviews__star'>rating</span> and describe your stay with at least <b className='reviews__text-amount'>50 characters</b>.
                    </p>
                    <button className='reviews__submit form__submit button' type='submit' disabled>Submit</button>
                  </div>
                </form>
              </section>
            </div>
          </div>
          <section className='offer__map map'></section>
        </section>
        <div className='container'>
          <section className='near-places places'>
            <h2 className='near-places__title'>Other places in the neighbourhood</h2>
            <div className='near-places__list places__list'>
              {nearbyOffers.map((offer) => (
                <article key={offer.id} className='near-places__card place-card'>
                  {offer.isPremium && (
                    <div className='place-card__mark'>
                      <span>Premium</span>
                    </div>
                  )}
                  <div className='near-places__image-wrapper place-card__image-wrapper'>
                    <a href='#'>
                      <img className='place-card__image' src={offer.image} width='260' height='200' alt='Place image' />
                    </a>
                  </div>
                  <div className='place-card__info'>
                    <div className='place-card__price-wrapper'>
                      <div className='place-card__price'>
                        <b className='place-card__price-value'>&euro;{offer.price}</b>
                        <span className='place-card__price-text'>&#47;&nbsp;night</span>
                      </div>
                      <button className={`place-card__bookmark-button ${offer.isFavorite ? 'place-card__bookmark-button--active' : ''} button`} type='button'>
                        <svg className='place-card__bookmark-icon' width='18' height='19'>
                          <use xlinkHref='#icon-bookmark'></use>
                        </svg>
                        <span className='visually-hidden'>In bookmarks</span>
                      </button>
                    </div>
                    <div className='place-card__rating rating'>
                      <div className='place-card__stars rating__stars'>
                        <span style={{width: calculateStarWidth(offer.rating)}}></span>
                        <span className='visually-hidden'>Rating</span>
                      </div>
                    </div>
                    <h2 className='place-card__name'>
                      <a href='#'>{offer.title}</a>
                    </h2>
                    <p className='place-card__type'>{offer.type}</p>
                  </div>
                </article>
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default OfferPage;
