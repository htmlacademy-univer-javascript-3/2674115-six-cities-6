import CitiesCard from '../cities-card';
import { Offer } from '../../types/offer';
import { MouseEvent } from 'react';

type OffersListProps = {
  offers: Offer[];
  onListItemHover?: (offerId: string) => void;
};

function OffersList({ offers, onListItemHover } : OffersListProps) : JSX.Element {
  const handleListItemHover = (event: MouseEvent<HTMLElement>) => {
    event.preventDefault();
    if (!onListItemHover) {
      return;
    }
    const offerId = event.currentTarget.id;
    if (offerId) {
      onListItemHover(offerId);
    }
  };

  return (
    <>
      {offers.map((offer) => (
        <CitiesCard
          key={offer.id}
          id={offer.id}
          city={offer.city}
          imageSrc={offer.imageSrc}
          title={offer.title}
          price={offer.price}
          rating={offer.rating}
          type={offer.type}
          isFavorite={offer.isFavorite}
          isPremium={offer.isPremium}
          onMouseEnter={handleListItemHover}
        />
      ))};
    </>
  );
}

export default OffersList;
