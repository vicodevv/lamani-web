export const CATEGORIES = {
    WOMEN: 'WOMEN',
    MEN: 'MEN',
    UNISEX: 'UNISEX'
  };
  
  export const SUBCATEGORIES = {
    WOMEN: {
      ACTIVEWEAR: 'ACTIVEWEAR',
      SETS: '2-PIECE SETS'
    },
    MEN: {
      ACTIVEWEAR: 'ACTIVEWEAR',
      SETS: '2-PIECE SETS'
    },
    UNISEX: {
      TSHIRTS: 'TSHIRTS',
      SETS: 'SETS',
      HOODIES: 'HOODIES'
    }
  };
  
  export const ROUTES = {
    HOME: '/',
    SHOP: '/shop',
    WOMEN: '/women',
    MEN: '/men',
    UNISEX: '/unisex',
    LOOKBOOK: '/lookbook',
    CART: '/cart',
    PROFILE: '/profile',
    PRODUCT: (id: string) => `/product/${id}`
  };
  
  export const SUBCATEGORY_ROUTES = {
    WOMEN: {
      ACTIVEWEAR: '/women/activewear',
      SETS: '/women/2-piece-sets'
    },
    MEN: {
      ACTIVEWEAR: '/men/activewear',
      SETS: '/men/2-piece-sets'
    },
    UNISEX: {
      TSHIRTS: '/unisex/tshirts',
      SETS: '/unisex/sets',
      HOODIES: '/unisex/hoodies'
    }
  };
  
  export const SORT_OPTIONS = [
    { label: 'Price: Low to High', value: 'price_asc' },
    { label: 'Price: High to Low', value: 'price_desc' },
    { label: 'Newest', value: 'newest' },
    { label: 'Featured', value: 'featured' }
  ];
  
  export const FILTER_OPTIONS = {
    SIZE: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    COLOR: ['Black', 'White', 'Grey', 'Blue', 'Green', 'Red', 'Brown'],
    PRICE: [
      { label: 'Under £100', value: 'under_100' },
      { label: '£100 - £200', value: '100_200' },
      { label: '£200 - £300', value: '200_300' },
      { label: 'Over £300', value: 'over_300' }
    ]
  };