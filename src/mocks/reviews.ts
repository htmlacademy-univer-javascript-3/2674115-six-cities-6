import {ReviewType} from '../types/review.ts';

export const reviews: ReviewType[] = [
  {
    id: 1,
    offerId: 1,
    author: 'Max',
    avatar: 'img/avatar-max.jpg',
    rating: 4,
    date: '2023-03-03',
    text: 'Great apartment with a nice view! Close to everything and very clean.',
  },
  {
    id: 2,
    offerId: 2,
    author: 'Angelina',
    avatar: 'img/avatar-angelina.jpg',
    rating: 5,
    date: '2024-04-04',
    text: 'Very cozy and quiet. The host was friendly and helpful.',
  },
  {
    id: 3,
    offerId: 4,
    author: 'John',
    avatar: 'img/avatar-max.jpg',
    rating: 5,
    date: '2025-05-05',
    text: 'Amazing loft! Luxurious interior and very comfortable stay.',
  },
];
