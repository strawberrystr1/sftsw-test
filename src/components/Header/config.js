import { ReactComponent as Cart } from '../../assets/images/cart.svg';

export const LINKS = [
  {
    render: 'Home',
    link: '/',
  },
  {
    render: 'Products',
    link: '/products',
  },
  {
    render: (className) => <Cart className={className} />,
    link: '/cart',
  },
];
