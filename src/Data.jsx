import certified from './assets/certified.svg';
import coffeeBeans from './assets/coffee-beans.svg';
import coffee from './assets/coffee.svg';
import freeDelivery from './assets/free-delivery.svg';

import menu1 from './assets/01.jpg';
import menu2 from './assets/02.jpg';
import menu3 from './assets/03.jpg';
import menu4 from './assets/04.jpg';
import menu5 from './assets/05.jpg';
import menu6 from './assets/06.jpg';
import menu7 from './assets/07.jpg';
import menu8 from './assets/08.jpg';

import gallery1 from './assets/gallery-1.jpg';
import gallery2 from './assets/gallery-2.jpg';
import gallery3 from './assets/gallery-3.jpg';
import gallery4 from './assets/gallery-4.jpg';
import gallery5 from './assets/gallery-5.jpg';

import offer1 from './assets/offer-1.jpg';
import offer2 from './assets/offer-2.jpg';

import testimonial1 from './assets/testimonial-1.jpg';
import testimonial2 from './assets/testimonial-2.jpg';
import testimonial3 from './assets/testimonial-3.jpg';
import testimonial4 from './assets/testimonial-4.jpg';

export const links = [
  {
    name: 'Home',
    path: 'home',
  },
  {
    name: 'About',
    path: 'about',
  },
  {
    name: 'Features',
    path: 'features',
  },
  {
    name: 'Menu',
    path: 'menu',
  },
  {
    name: 'Gallery',
    path: 'gallery',
  },
  {
    name: 'Testimonials',
    path: 'testimonials',
  },
];

export const features = [
  {
    id: 1,
    img: freeDelivery,
    title: 'Free Shipping',
    description:
      'Fresh coffee delivered to your doorstep at no extra cost.',
      
  },
  {
    id: 2,
    img: certified,
    title: 'Organic Certified',
    description:
      'Enjoy the rich taste of 100% organic, sustainably sourced coffee beans.',
      
  },
  {
    id: 3,
    img: coffee,
    title: 'High Quality',
    description:
      'Indulge in the finest coffee, crafted for rich flavor and exceptional taste.',
      
  },
  {
    id: 4,
    img: coffeeBeans,
    title: 'Proper Roasting',
    description:
      'Enjoy perfectly roasted beans for a rich, balanced flavor in every cup.',
  },
];

export const menu = [
  {
    id: 1,
    img: menu1,
    title: 'Americano Coffee',
    description: 'Bold, smooth, and slightly bitter',
    price: 50.25,
  },
  {
    id: 2,
    img: menu2,
    title: 'Cappuccino Arabica',
    description: 'Rich, creamy, and subtly fruity',
    price: 70.25,
  },
  {
    id: 3,
    img: menu3,
    title: 'Milk Cream Coffee',
    description: 'Smooth, creamy, and lightly sweet',
    price: 30.25,
  },
  {
    id: 4,
    img: menu4,
    title: 'Special Raw Coffee',
    description: 'Earthy, bold, and rich with a natural, robust flavor',
    price: 80.25,
  },
  {
    id: 5,
    img: menu5,
    title: 'Fresh Black Coffee',
    description: 'Bold, smooth, and slightly bitter',
    price: 90.25,
  },
  {
    id: 6,
    img: menu6,
    title: 'Turkish Coffee',
    description: 'Strong, rich, and smooth with a hint of sweetness',
    price: 70.25,
  },
  {
    id: 7,
    img: menu7,
    title: 'Maple Latte Coffee',
    description: 'Creamy, sweet, with a warm maple flavor',
    price: 120.25,
  },
  {
    id: 8,
    img: menu8,
    title: 'Iced Coffee',
    description: 'Chilled, smooth, and bold with a refreshing coffee taste',
    price: 40.25,
  },
];

export const gallery = [
  {
    id: 1,
    img: gallery1,
    title: 'Cappuccino Arabica',
  },
  {
    id: 2,
    img: gallery2,
    title: 'Black Coffee',
  },
  {
    id: 3,
    img: gallery3,
    title: 'Special Raw Coffe',
  },
  {
    id: 4,
    img: gallery4,
    title: 'Turkish Coffee',
  },
  {
    id: 5,
    img: gallery5,
    title: 'Maple Latte',
  },
];

export const offer = [
  {
    id: 1,
    img: offer1,
    title: 'Cappuccino Arabica',
    discount: 'Get 40% Offer',
    description:
      "Savor the rich and creamy taste of Cappuccino Arabica at a special discounted price. Don't miss out—treat yourself to premium quality today!",
  },
  {
    id: 2,
    img: offer2,
    title: 'Special Raw Coffee',
    discount: 'Get 40% Offer',
    description:
      'Experience the bold, earthy flavors of our premium Special Raw Coffee. Handpicked and carefully sourced for a unique and authentic coffee experience.',
  },
];

export const testimonials = [
  {
    id: 1,
    img: testimonial1,
    title: 'Reid E Butt',
    service: 'Customer',
    description:
      'Fast delivery and great customer support. Highly recommend!',
  },
  {
    id: 2,
    img: testimonial2,
    title: 'Parker Jimenez',
    service: 'Customer',
    description:
      'The aroma is irresistible, and the taste is absolutely divine.',
  },
  {
    id: 3,
    img: testimonial3,
    title: 'Sylvia H Green',
    service: 'Customer',
    description:
      'The coffee is rich, flavorful, and always fresh. My mornings are incomplete without it!',
  },
  {
    id: 4,
    img: testimonial4,
    title: 'Gordon D Novak',
    service: 'Customer',
    description:
      "Every cup feels like a treat. I've become a loyal customer!",
  },
];
