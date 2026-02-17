export interface Dish {
  id: number;
  name: string;
  description: string;
  price: string;
  image: string;
  category: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  comment: string;
  rating: number;
}

export interface NavItem {
  label: string;
  href: string;
}