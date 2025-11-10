import { MouseEvent } from 'react';
import OfferCard from '../offer-card.tsx';
import {Offer} from '../../types/offer.ts';

type OfferCardCitiesProps = {
  offer: Offer;
  onMouseEnter?: (event: MouseEvent<HTMLElement>) => void;
};

export default function OfferCardCities({offer, onMouseEnter} : OfferCardCitiesProps) {
  return (
    <OfferCard
      className={'cities'}
      onMouseEnter={onMouseEnter}
      offer={offer}
    />
  );
}
