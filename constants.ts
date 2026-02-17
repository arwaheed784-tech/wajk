import { Dish, Testimonial, NavItem } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'Menu', href: '#menu' },
  { label: 'La Famiglia', href: '#about' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Reviews', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
];

export const FEATURED_DISHES: Dish[] = [
  {
    id: 1,
    name: 'Pizza Margherita Verace',
    description: 'San Marzano tomato sauce, fresh buffalo mozzarella, basil, and extra virgin olive oil on wood-fired dough.',
    price: '$22',
    image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?q=80&w=800&auto=format&fit=crop',
    category: 'Pizza'
  },
  {
    id: 2,
    name: 'Pappardelle al Cinghiale',
    description: 'Hand-cut broad pasta ribbons served with a slow-cooked wild boar ragù and pecorino cheese.',
    price: '$28',
    image: 'https://images.unsplash.com/photo-1626844131082-256783844137?q=80&w=800&auto=format&fit=crop',
    category: 'Pasta'
  },
  {
    id: 3,
    name: 'Risotto ai Funghi Porcini',
    description: 'Creamy carnaroli rice with porcini mushrooms, truffle oil, parmesan crisp, and fresh parsley.',
    price: '$26',
    image: 'https://images.unsplash.com/photo-1476124369491-e7addf5db371?q=80&w=800&auto=format&fit=crop',
    category: 'Primi'
  },
  {
    id: 4,
    name: 'Osso Buco alla Milanese',
    description: 'Braised veal shanks cooked with vegetables, white wine and broth, served with saffron risotto.',
    price: '$42',
    image: 'https://images.unsplash.com/photo-1544510802-5e48548c2137?q=80&w=800&auto=format&fit=crop',
    category: 'Secondi'
  },
  {
    id: 5,
    name: 'Classic Tiramisu',
    description: 'Layers of espresso-soaked ladyfingers and mascarpone cream, dusted with cocoa powder.',
    price: '$14',
    image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?q=80&w=800&auto=format&fit=crop',
    category: 'Dolci'
  },
  {
    id: 6,
    name: 'Antipasto Platter',
    description: 'Selection of cured meats, artisan cheeses, marinated olives, grilled artichokes, and rustic bread.',
    price: '$34',
    image: 'https://images.unsplash.com/photo-1519623286303-41881249cd50?q=80&w=800&auto=format&fit=crop',
    category: 'Antipasti'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "Isabella Rossi",
    role: "Travel Blogger",
    comment: "Just like Nonna used to make. The atmosphere is warm and inviting, and the pasta is handmade to perfection. A true slice of Italy.",
    rating: 5
  },
  {
    id: 2,
    name: "Marco De Luca",
    role: "Local Guide",
    comment: "The best wood-fired pizza in the city. The crust is perfectly charred and chewy. Service makes you feel like family.",
    rating: 5
  },
  {
    id: 3,
    name: "Sophie Bennett",
    role: "Food Photographer",
    comment: "Rustic charm in every corner. The lighting is beautiful for photos, and the plating is rustic yet elegant. Highly updated.",
    rating: 5
  }
];