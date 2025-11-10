import OfferList from './offer-list-base';
import {Offer} from '../../types/offer.ts';

type OfferListCitiesProps = {
  offers: Offer[];
  onListItemHover?: (offerId: string) => void;
};

function OfferListCities({ offers, onListItemHover } : OfferListCitiesProps) : JSX.Element {
  return (
    <OfferList
      offers={offers}
      className={'cities'}
      tabsContent
      onListItemHover={onListItemHover}
    />
  );
}

export default OfferListCities;
