﻿type CitiesCardProps = {
  description: string;
  imageSrc: string;
  price: number;
  rating: 1 | 2 | 3 | 4 | 5;
  housingType: string;
  isFavorite?: boolean;
  isPremium?: boolean;
}

function CitiesCard({isPremium, imageSrc, price, isFavorite, rating, description, housingType}: CitiesCardProps): JSX.Element {
  return (
    <article className='cities__card place-card'>
      {isPremium && (
        <div className='place-card__mark'>
          <span>Premium</span>
        </div>
      )}
      <div className='cities__image-wrapper place-card__image-wrapper'>
        <a href='#'>
          <img className='place-card__image' src={imageSrc} width='260' height='200' alt='Place image'/>
        </a>
      </div>
      <div className='place-card__info'>
        <div className='place-card__price-wrapper'>
          <div className='place-card__price'>
            <b className='place-card__price-value'>&euro;{price}</b>
            {' '}
            <span className='place-card__price-text'>&#47;&nbsp;night</span>
          </div>
          <button className={`place-card__bookmark-button ${isFavorite ? 'place-card__bookmark-button--active ' : ''}button`} type='button'>
            <svg className='place-card__bookmark-icon' width='18' height='19'>
              <use xlinkHref='#icon-bookmark'></use>
            </svg>
            <span className='visually-hidden'>{isFavorite ? 'In bookmarks' : 'To bookmarks'}</span>
          </button>
        </div>
        <div className='place-card__rating rating'>
          <div className='place-card__stars rating__stars'>
            <span style={{width: `${rating * 20}%`}}></span>
            <span className='visually-hidden'>Rating</span>
          </div>
        </div>
        <h2 className='place-card__name'>
          <a href='#'>{description}</a>
        </h2>
        <p className='place-card__type'>{housingType}</p>
      </div>
    </article>
  );
}

export default CitiesCard;
