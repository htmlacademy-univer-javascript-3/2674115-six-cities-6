import {Offer} from '../types/offer';

const offers: Offer[] = [
  {
    id: 1,
    imageSrc: [
      'img/apartment-01.jpg',
      'img/apartment-02.jpg',
      'img/apartment-03.jpg'
    ],
    city: 'Amsterdam',
    title: 'Stylish and modern apartment with great views',
    description: 'Modern apartment with large windows, beautiful city views, and comfortable interior. Ideal for couples or solo travelers.',
    rating: 4.0,
    type: 'Apartment',
    bedroomCount: 2,
    adultsCount: 3,
    price: 120,
    benefits: ['Wi-Fi', 'Kitchen', 'Heating', 'Washer'],
    host: {
      name: 'Max',
      photo: 'img/avatar-max.jpg',
      isPremium: true
    },
    isPremium: true,
    isFavorite: false,
    points: {
      id: 1,
      lat: 52.3609553943508,
      lng: 4.85309666406198
    }
  },
  {
    id: 2,
    imageSrc: [
      'img/room.jpg',
      'img/studio-01.jpg'
    ],
    city: 'Amsterdam',
    title: 'Comfortable room in a quiet neighborhood',
    description: 'Cozy private room in a quiet neighborhood, perfect for short stays and budget travelers.',
    rating: 4.7,
    type: 'Room',
    bedroomCount: 3,
    adultsCount: 5,
    price: 120,
    benefits: ['Wi-Fi', 'Washing machine', 'Towels', 'Heating', 'Coffee machine', 'Baby seat', 'Kitchen', 'Dishwasher', 'Cabel TV', 'Fridge',],
    host: {
      name: 'Angelina',
      photo: 'img/avatar-angelina.jpg',
      isPremium: true
    },
    isPremium: true,
    isFavorite: true,
    points: {
      id: 2,
      lat: 52.3909553943508,
      lng: 4.929309666406198
    }
  },
  {
    id: 3,
    imageSrc: [
      'img/apartment-02.jpg',
      'img/apartment-03.jpg'
    ],
    city: 'Brussels',
    title: 'Spacious apartment with all amenities',
    description: 'Large apartment with modern furniture, two bedrooms, and everything you need for a comfortable stay.',
    rating: 4.0,
    type: 'Apartment',
    bedroomCount: 2,
    adultsCount: 4,
    price: 132,
    benefits: ['Wi-Fi', 'Kitchen', 'Dishwasher', 'Heating'],
    host: {
      name: 'Max',
      photo: 'img/avatar-max.jpg',
      isPremium: false
    },
    isPremium: false,
    isFavorite: false,
    points: {
      id: 3,
      lat: 52.3909553943508,
      lng: 4.85309666406198
    }
  },
  {
    id: 4,
    imageSrc: [
      'img/room.jpg',
      'img/apartment-02.jpg'
    ],
    city: 'Amsterdam',
    title: 'Affordable accommodation in great location',
    description: 'Simple and affordable room located close to the city center. Great option for travelers on a budget.',
    rating: 3.0,
    type: 'Room',
    bedroomCount: 1,
    adultsCount: 1,
    price: 75,
    benefits: ['Wi-Fi', 'Heating'],
    host: {
      name: 'Max',
      photo: 'img/avatar-max.jpg',
      isPremium: false
    },
    isPremium: false,
    isFavorite: true,
    points: {
      id: 4,
      lat: 52.3809553943508,
      lng: 4.939309666406198
    }
  },
];
export default offers;
