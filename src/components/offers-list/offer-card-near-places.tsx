import { MouseEvent } from 'react';
import {Offer} from '../../types/offer.ts';
import OfferCard from '../offer-card.tsx';

type OfferCardNearPlacesProps = {
  offer: Offer;
  onMouseEnter?: (event: MouseEvent<HTMLElement>) => void;
};

export default function OfferCardNearPlaces({offer, onMouseEnter} : OfferCardNearPlacesProps) {
  return (
    <OfferCard
      className={'near-places'}
      onMouseEnter={onMouseEnter}
      offer={offer}
    />
  );
}

