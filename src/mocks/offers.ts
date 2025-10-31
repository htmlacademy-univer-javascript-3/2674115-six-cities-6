import {Offer} from '../types/offer';

export const offers: Offer[] = [
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
  },
  {
    id: 2,
    imageSrc: [
      'img/room.jpg',
      'img/studio-01.jpg'
    ],
    city: 'Paris',
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
  },
  {
    id: 4,
    imageSrc: [
      'img/apartment-03.jpg',
      'img/apartment-01.jpg'
    ],
    city: 'Paris',
    title: 'Luxurious loft with premium finishes',
    description: 'Luxurious loft with modern design, high ceilings, and premium materials. Ideal for a comfortable stay.',
    rating: 5.0,
    type: 'Apartment',
    bedroomCount: 3,
    adultsCount: 4,
    price: 180,
    benefits: ['Wi-Fi', 'Kitchen', 'Washer', 'Heating', 'Dishwasher'],
    host: {
      name: 'Angelina',
      photo: 'img/avatar-angelina.jpg',
      isPremium: true
    },
    isPremium: true,
    isFavorite: true,
  },
  {
    id: 5,
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
    isFavorite: false,
  },
];
