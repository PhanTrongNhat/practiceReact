import { FreeShipIcon, HeadphoneIcon, LockIcon, TagIcon } from 'components';

export const PromotionData = [
  'NEW: Discover our collaboration with George Sowden',
  'A question? Visit our contact page to send us a message',
  'Free standard shipping on all orders',
];

export const CarouselData = [
  {
    src: 'https://impact-theme-home.myshopify.com/cdn/shop/files/PC_Portable_olive_Palissade_Lounge_chair_olive_Palissade_Table_olive_Coffee_M_mint_Rainbow_mug.jpg?v=1656504940&width=2000',

    title: 'Pierre Charpin’s refined',
    secondTitle: 'Lamp',
    smallTitle: 'Hay PC Portable',
    buttonText: 'Discover',
  },
  {
    smallTitle: 'Decoration',
    title: 'Refresh your living ',
    secondTitle: 'room',
    buttonText: 'Shop Decoration',
    src: 'https://impact-theme-home.myshopify.com/cdn/shop/files/Mags_Corner_comb_2_Right_Lint_grey_Rebar_Square_Coffee_Table_marble_tabletop_soft_black_frame_Moire_Kelim_green_DLM_sun_yellow_cb7f484e-59a1-46ee-8c0b-8aa9b9971738.jpg?v=1657547898&width=2000',
  },
];

interface ProductCartProps {
  title: string;
  branch: string;
  colors: string[];
  price: number;
  isNew?: boolean;
  soldOut?: boolean;
  ratting: number;
  image: string;
  imageHover: string;
  save?: string;
}

export const ProductsData: ProductCartProps[] = [
  {
    title: 'PC Portable Lamp (Olive Green)',
    branch: 'HAY',
    colors: ['#F6D0C3', '#5D89A2', '#F3DF66'],
    price: 78.0,
    isNew: true,
    soldOut: true,
    ratting: 4.3,
    image:
      'https://impact-theme-home.myshopify.com/cdn/shop/products/4104312009000_PC_Portable_olive.jpg?v=1653057933&width=400',
    imageHover:
      'https://impact-theme-home.myshopify.com/cdn/shop/products/La_Pausa_2020_PC_Portable.jpg?v=1653735810&width=400',
  },
  {
    title: 'Shade Bin (Pink)',
    branch: 'HAY',
    colors: ['#F6D0C3'],
    price: 34.0,

    ratting: 4.7,
    image:
      'https://impact-theme-home.myshopify.com/cdn/shop/products/507822_Shade_Bin_Blush.jpg?v=1653299287&width=500',
    imageHover:
      'https://impact-theme-home.myshopify.com/cdn/shop/products/Shade_Bin_blush_01.jpg?v=1653299287&width=500',
  },
  {
    title: 'Time Hourglass',
    branch: 'HAY',
    colors: ['#F6D0C3', '#5D89A2', '#F3DF66'],
    price: 14.0,
    isNew: true,
    soldOut: true,
    ratting: 4.3,
    image:
      'https://impact-theme-home.myshopify.com/cdn/shop/products/541247_Time_S_lavender.jpg?v=1656688944&width=500',
    imageHover:
      'https://impact-theme-home.myshopify.com/cdn/shop/products/541251_Time_M_lavender.jpg?v=1662371525&width=500',
  },
  {
    title: 'Sowden Toaster (Yellow)',
    branch: 'HAY',
    colors: ['#F6D0C3', '#5D89A2', '#F3DF66'],
    price: 75.0,
    save: 'On sale',
    ratting: 4.7,
    image:
      'https://impact-theme-home.myshopify.com/cdn/shop/products/540782_Sowden_Toaster_EU_yellow.jpg?v=1653058357&width=500',
    imageHover:
      'https://impact-theme-home.myshopify.com/cdn/shop/products/Sowden_Toaster_EU_yellow.jpg?v=1653058358&width=500',
  },
  {
    title: 'Color Crate',
    branch: 'HAY',
    colors: ['#F6D0C3', '#5D89A2', '#F3DF66'],
    price: 6.0,
    isNew: true,
    soldOut: true,
    ratting: 4.7,
    image:
      'https://impact-theme-home.myshopify.com/cdn/shop/products/507535.jpg?v=1659961435&width=500',
    imageHover:
      'https://impact-theme-home.myshopify.com/cdn/shop/products/507535.jpg?v=1659961435&width=500',
  },
  {
    title: 'Sowden Bottle (Vivid Blue)',
    branch: 'HAY',
    colors: ['#F6D0C3', '#5D89A2', '#F3DF66'],
    price: 29.0,
    isNew: true,
    soldOut: true,
    ratting: 4.3,
    image:
      'https://impact-theme-home.myshopify.com/cdn/shop/products/507381_Sowden_Bottle_0_35_litre_blue.jpg?v=1653057899&width=1400',
    imageHover:
      'https://impact-theme-home.myshopify.com/cdn/shop/products/Waffle_Bathrobe_soft_yellow_Sowden_Bottle_blue.jpg?v=1653057899&width=1400',
  },
  {
    title: 'Slant Lamp (White)',
    branch: 'HAY',
    colors: ['#F6D0C3', '#5D89A2'],
    price: 29.0,
    isNew: true,
    soldOut: true,
    ratting: 4.3,
    image:
      'https://impact-theme-home.myshopify.com/cdn/shop/products/9367212009000_Slant_233_white.jpg?v=1653058730&width=400',
    imageHover:
      'https://impact-theme-home.myshopify.com/cdn/shop/products/Slant_233_white.jpg?v=1653058732&width=400',
  },
  {
    title: 'Bottoms Up Vase (Navy Blue)',
    branch: 'HAY',
    colors: ['#f1f1f1', '#5D89A2', '#F3DF66'],
    price: 68.0,
    isNew: true,
    soldOut: true,
    ratting: 4.8,
    image:
      'https://impact-theme-home.myshopify.com/cdn/shop/products/508044_Bottoms_Up_Vase_L_navy_blue.jpg?v=1653058200&width=1400',
    imageHover:
      'https://impact-theme-home.myshopify.com/cdn/shop/products/Bottoms_Up_Vase_electric_blue_S_amber_L_navy_blue_L.jpg?v=1653735756&width=1400',
  },
];

export const CollectionData = [
  {
    image:
      'https://impact-theme-home.myshopify.com/cdn/shop/files/links-kitchen.jpg?v=1653309043&width=300',
    title: 'Kitchen',
  },
  {
    image:
      'https://impact-theme-home.myshopify.com/cdn/shop/files/links-decoration.jpg?v=1653309079&width=300',
    title: 'Decoration',
  },
  {
    image:
      'https://impact-theme-home.myshopify.com/cdn/shop/files/links-office.jpg?v=1653309091&width=300',
    title: 'Office',
  },
  {
    image:
      'https://impact-theme-home.myshopify.com/cdn/shop/files/links-lighting.jpg?v=1653309101&width=300',
    title: 'Lighting',
  },
  {
    image:
      'https://impact-theme-home.myshopify.com/cdn/shop/files/links-books.jpg?v=1653309107&width=300',
    title: 'Books',
  },
];

export const CustomerData = [
  {
    name: 'Rolf Hay',
    image:
      'https://impact-theme-home.myshopify.com/cdn/shop/files/Rolf.png?v=1656591294&width=70',
    content:
      'What I admire about art is the unexpected, the originality; architecture is of course the context and the home of what we make.',
  },
  {
    name: 'Mette Hay',
    image:
      'https://impact-theme-home.myshopify.com/cdn/shop/files/Mette.png?v=1656419248&width=70',
    content:
      'We do furniture and design for many different environments. At home, public spaces, professional spaces, and all the spaces in between.',
  },
];

export const ServiceData = [
  {
    icon: <FreeShipIcon width={24} height={24} color={'#000'} />,
    title: 'Free shipping',
    description: 'Get free shipping on orders of $100 or more',
  },
  {
    icon: <HeadphoneIcon width={24} height={24} color={'#000'} />,
    title: 'Customer service',
    description: 'A question? Please contact us at 123-456-7890',
  },
  {
    icon: <TagIcon width={24} height={24} color={'#000'} />,
    title: 'Refer a friend',
    description: 'Refer a friend and get 15% off each other',
  },

  {
    icon: <LockIcon width={24} height={24} color={'#000'} />,
    title: 'Secure payment',
    description: 'Your payment information is processed securely',
  },
];

export const FooterListData = [
  {
    title: 'Shop',
    data: ['Shop', 'Office', 'Lighting', 'Kitchen', 'Decoration', 'Books'],
  },
  {
    title: 'Designers',
    data: [
      'George Sowden',
      'Clara von Zweigbergk',
      'Pierre Charpin',
      'Thomas Bentzen',
      'View all',
    ],
  },
  {
    title: 'Impact',
    data: ['About', 'FAQ', 'Contact', 'Theme Features'],
  },
];

export const FeatureData = [
  {
    smallTitle: 'Responsability',
    title: 'Built to last',
    image:
      'https://impact-theme-home.myshopify.com/cdn/shop/files/New_Order_Combination_701_light_grey_Plica_Sprinkle_Juice_Vase_yellow_1.jpg?v=1657542014&width=600',
    description:
      'High-quality means thoughtfully designed, well crafted, and built to last. At HAY, we strive to minimize our footstep on the planet while making durable products that we hope will live with you for a long time. We always hold ourselves to high standards, so each of our product categories has its own team of designers, technicians, and engineers.',
  },
  {
    smallTitle: 'Passion',
    title: 'Love of design',
    image:
      'https://impact-theme-home.myshopify.com/cdn/shop/files/Matin_Table_Lamp_S_lavender_Matin_Table_Lamp_L_white_Bottoms_Up_Vase_L_navy_blue_1_a874d15c-b8d4-4479-ae59-93e1c86f528d.jpg?v=1657541833&width=600',
    description:
      "At HAY, we are motivated by a love of design and a commitment to constant innovation. We are always challenging ourselves to create products that elevate the modest moments in peoples' lives. This means thinking about everyday items in new, original ways, using the most cutting-edge materials, methods, tools, and technologies available.",
  },
  {
    smallTitle: 'Function',
    title: 'The best solution',
    image:
      'https://impact-theme-home.myshopify.com/cdn/shop/files/Shade_Bin_01_1.jpg?v=1657541988&width=600',
    description:
      'At HAY, form will always follow function. Our products are beautiful, sleek, fresh, and stylish - but we believe that use and comfort should come first. Our designs always prioritize what is essential: we believe the simplest solution is usually the best solution.',
  },
];

export const RoomData: any[] = [
  {
    title: 'Plica Sprinkle Cushion',
    branch: 'HAY',
    colors: ['#F6D0C3', '#5D89A2', '#F3DF66'],
    price: 79.0,
    isNew: true,
    soldOut: true,
    ratting: 4.7,
    image:
      'https://impact-theme-home.myshopify.com/cdn/shop/products/507906.jpg?v=1653058051&width=1000',
    imageHover:
      'https://impact-theme-home.myshopify.com/cdn/shop/products/507905.jpg?v=1662373900&width=1000',
    isVase: false,
  },
  {
    isVase: true,
    title: 'Bottoms Up Vase (Navy Blue)',
    branch: 'HAY',
    colors: ['#f1f1f1'],
    price: 63.0,
    isNew: true,
    soldOut: true,
    ratting: 4.3,
    image:
      'https://impact-theme-home.myshopify.com/cdn/shop/products/508044_Bottoms_Up_Vase_L_navy_blue.jpg?v=1653058200&width=1400',
    imageHover:
      'https://impact-theme-home.myshopify.com/cdn/shop/products/Bottoms_Up_Vase_electric_blue_S_amber_L_navy_blue_L.jpg?v=1653735756&width=1400',
  },
];
