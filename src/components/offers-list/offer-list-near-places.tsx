import OfferList from './offer-list-base';
import {Offer} from '../../types/offer.ts';

type OfferListNearPlacesProps = {
  offers: Offer[];
  onListItemHover?: (offerId: string) => void;
};

function OfferListNearPlaces({ offers, onListItemHover } : OfferListNearPlacesProps) : JSX.Element {
  return (
    <OfferList
      offers={offers}
      className={'near-places'}
      tabsContent={false}
      onListItemHover={onListItemHover}
    />
  );
}

export default OfferListNearPlaces;
