import { Product } from './types';

// Mock products data
const mockProducts: Product[] = [
  {
    id: 'prod_001',
    name: 'Navy Polo Shirt',
    price: 215,
    currency: '£',
    imageUrl: '/images/products/model-1.svg',
    collection: 'Lamani summer edition',
    description: 'Premium navy polo shirt from our summer collection.',
    details: ['100% Cotton', 'Relaxed fit', 'Half-zip collar'],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['Navy'],
    category: 'MEN',
    subcategory: 'ACTIVEWEAR',
    inStock: true,
    featured: true,
    newArrival: true
  },
  {
    id: 'prod_002',
    name: 'White Zip Hoodie',
    price: 105,
    currency: '£',
    imageUrl: '/images/products/model-2.svg',
    collection: 'Lamani summer edition',
    description: 'Premium white zip-up hoodie from our summer collection.',
    details: ['Cotton blend', 'Regular fit', 'Full zip'],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['White'],
    category: 'WOMEN',
    subcategory: 'ACTIVEWEAR',
    inStock: true,
    featured: false,
    newArrival: true
  },
  {
    id: 'prod_003',
    name: 'Grey Polo Shirt',
    price: 250,
    currency: '£',
    imageUrl: '/images/products/model-3.svg',
    collection: 'Lamani summer edition',
    description: 'Premium grey polo shirt from our summer collection.',
    details: ['100% Cotton', 'Relaxed fit', 'Half-zip collar'],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['Grey'],
    category: 'MEN',
    subcategory: 'ACTIVEWEAR',
    inStock: true,
    featured: true,
    newArrival: false
  },
  {
    id: 'prod_004',
    name: 'Black Knit Vest',
    price: 170,
    currency: '£',
    imageUrl: '/images/products/model-4.svg',
    collection: 'Lamani summer edition',
    description: 'Premium black knit vest from our summer collection.',
    details: ['Wool blend', 'Regular fit', 'Zip front'],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['Black'],
    category: 'WOMEN',
    subcategory: 'ACTIVEWEAR',
    inStock: true,
    featured: false,
    newArrival: true
  },
  {
    id: 'prod_005',
    name: 'Grey Zip Hoodie',
    price: 285,
    currency: '£',
    imageUrl: '/images/products/model-5.svg',
    collection: 'Lamani summer edition',
    description: 'Premium grey zip-up hoodie from our summer collection.',
    details: ['Cotton blend', 'Regular fit', 'Full zip'],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['Grey'],
    category: 'MEN',
    subcategory: 'ACTIVEWEAR',
    inStock: true,
    featured: true,
    newArrival: true
  },
  {
    id: 'prod_006',
    name: 'Navy Polo Shirt',
    price: 125,
    currency: '£',
    imageUrl: '/images/products/model-6.svg',
    collection: 'Lamani summer edition',
    description: 'Premium navy polo shirt from our summer collection.',
    details: ['100% Cotton', 'Relaxed fit', 'Half-zip collar'],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['Navy'],
    category: 'MEN',
    subcategory: 'ACTIVEWEAR',
    inStock: true,
    featured: true,
    newArrival: true
  },
  {
    id: 'prod_007',
    name: 'White Zip Hoodie',
    price: 200,
    currency: '£',
    imageUrl: '/images/products/model-7.svg',
    collection: 'Lamani summer edition',
    description: 'Premium white zip-up hoodie from our summer collection.',
    details: ['Cotton blend', 'Regular fit', 'Full zip'],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['White'],
    category: 'MEN',
    subcategory: 'ACTIVEWEAR',
    inStock: true,
    featured: false,
    newArrival: true
  },
  {
    id: 'prod_008',
    name: 'Grey Polo Shirt',
    price: 400,
    currency: '£',
    imageUrl: '/images/products/model-8.svg',
    collection: 'Lamani summer edition',
    description: 'Premium grey polo shirt from our summer collection.',
    details: ['100% Cotton', 'Relaxed fit', 'Half-zip collar'],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['Grey'],
    category: 'MEN',
    subcategory: 'ACTIVEWEAR',
    inStock: true,
    featured: true,
    newArrival: false
  },
  {
    id: 'prod_009',
    name: 'Black Knit Vest',
    price: 170,
    currency: '£',
    imageUrl: '/images/products/model-9.svg',
    collection: 'Lamani summer edition',
    description: 'Premium black knit vest from our summer collection.',
    details: ['Wool blend', 'Regular fit', 'Zip front'],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['Black'],
    category: 'MEN',
    subcategory: 'ACTIVEWEAR',
    inStock: true,
    featured: false,
    newArrival: true
  },
  {
    id: 'prod_010',
    name: 'Grey Zip Hoodie',
    price: 250,
    currency: '£',
    imageUrl: '/images/products/model-10.svg',
    collection: 'Lamani summer edition',
    description: 'Premium grey zip-up hoodie from our summer collection.',
    details: ['Cotton blend', 'Regular fit', 'Full zip'],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['Grey'],
    category: 'WOMEN',
    subcategory: 'ACTIVEWEAR',
    inStock: true,
    featured: true,
    newArrival: true
  },
  {
    id: 'prod_011',
    name: 'Grey Zip Hoodie',
    price: 195,
    currency: '£',
    imageUrl: '/images/products/model-11.svg',
    collection: 'Lamani summer edition',
    description: 'Premium grey zip-up hoodie from our summer collection.',
    details: ['Cotton blend', 'Regular fit', 'Full zip'],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['Grey'],
    category: 'MEN',
    subcategory: 'ACTIVEWEAR',
    inStock: true,
    featured: true,
    newArrival: true
  },
  {
    id: 'prod_012',
    name: 'Black Knit Vest',
    price: 170,
    currency: '£',
    imageUrl: '/images/products/model-9.svg',
    collection: 'Lamani summer edition',
    description: 'Premium black knit vest from our summer collection.',
    details: ['Wool blend', 'Regular fit', 'Zip front'],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['Black'],
    category: 'UNISEX',
    subcategory: 'HOODIES',
    inStock: true,
    featured: false,
    newArrival: true
  },
  {
    id: 'prod_013',
    name: 'Grey Zip Hoodie',
    price: 250,
    currency: '£',
    imageUrl: '/images/products/model-10.svg',
    collection: 'Lamani summer edition',
    description: 'Premium grey zip-up hoodie from our summer collection.',
    details: ['Cotton blend', 'Regular fit', 'Full zip'],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['Grey'],
    category: 'UNISEX',
    subcategory: 'SETS',
    inStock: true,
    featured: true,
    newArrival: true
  },
  {
    id: 'prod_014',
    name: 'Grey Zip Hoodie',
    price: 195,
    currency: '£',
    imageUrl: '/images/products/model-11.svg',
    collection: 'Lamani summer edition',
    description: 'Premium grey zip-up hoodie from our summer collection.',
    details: ['Cotton blend', 'Regular fit', 'Full zip'],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['Grey'],
    category: 'UNISEX',
    subcategory: 'TSHIRTS',
    inStock: true,
    featured: true,
    newArrival: true
  },
  {
    id: 'prod_015',
    name: 'Black Knit Vest',
    price: 170,
    currency: '£',
    imageUrl: '/images/products/model-9.svg',
    collection: 'Lamani summer edition',
    description: 'Premium black knit vest from our summer collection.',
    details: ['Wool blend', 'Regular fit', 'Zip front'],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['Black'],
    category: 'MEN',
    subcategory: 'ACTIVEWEAR',
    inStock: true,
    featured: false,
    newArrival: true
  },
  {
    id: 'prod_016',
    name: 'Grey Zip Hoodie',
    price: 250,
    currency: '£',
    imageUrl: '/images/products/model-10.svg',
    collection: 'Lamani summer edition',
    description: 'Premium grey zip-up hoodie from our summer collection.',
    details: ['Cotton blend', 'Regular fit', 'Full zip'],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['Grey'],
    category: 'WOMEN',
    subcategory: 'ACTIVEWEAR',
    inStock: true,
    featured: true,
    newArrival: true
  },
  {
    id: 'prod_017',
    name: 'Grey Zip Hoodie',
    price: 195,
    currency: '£',
    imageUrl: '/images/products/model-11.svg',
    collection: 'Lamani summer edition',
    description: 'Premium grey zip-up hoodie from our summer collection.',
    details: ['Cotton blend', 'Regular fit', 'Full zip'],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['Grey'],
    category: 'MEN',
    subcategory: 'ACTIVEWEAR',
    inStock: true,
    featured: true,
    newArrival: true
  },
  // MEN'S 2-PIECE SETS
  {
    id: 'prod_018',
    name: 'Navy Training Set',
    price: 320,
    currency: '£',
    imageUrl: '/images/products/model-1.svg',
    collection: 'Lamani summer edition',
    description: 'Premium navy two-piece training set from our summer collection.',
    details: ['100% Cotton', 'Relaxed fit', 'Matching top and bottom'],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['Navy'],
    category: 'MEN',
    subcategory: '2-PIECE SETS',
    inStock: true,
    featured: true,
    newArrival: true
  },
  {
    id: 'prod_019',
    name: 'Grey Lounge Set',
    price: 275,
    currency: '£',
    imageUrl: '/images/products/model-3.svg',
    collection: 'Lamani summer edition',
    description: 'Premium grey two-piece lounge set from our summer collection.',
    details: ['Cotton blend', 'Comfortable fit', 'Hoodie and joggers'],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['Grey'],
    category: 'MEN',
    subcategory: '2-PIECE SETS',
    inStock: true,
    featured: false,
    newArrival: true
  },
  {
    id: 'prod_020',
    name: 'Black Workout Set',
    price: 300,
    currency: '£',
    imageUrl: '/images/products/model-5.svg',
    collection: 'Lamani summer edition',
    description: 'Premium black two-piece workout set from our summer collection.',
    details: ['Technical fabric', 'Athletic fit', 'Moisture-wicking'],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['Black'],
    category: 'MEN',
    subcategory: '2-PIECE SETS',
    inStock: true,
    featured: true,
    newArrival: false
  },

  // WOMEN'S 2-PIECE SETS
  {
    id: 'prod_021',
    name: 'White Athleisure Set',
    price: 295,
    currency: '£',
    imageUrl: '/images/products/model-2.svg',
    collection: 'Lamani summer edition',
    description: 'Premium white two-piece athleisure set from our summer collection.',
    details: ['Cotton blend', 'Fitted cut', 'Crop top and leggings'],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['White'],
    category: 'WOMEN',
    subcategory: '2-PIECE SETS',
    inStock: true,
    featured: true,
    newArrival: true
  },
  {
    id: 'prod_022',
    name: 'Black Yoga Set',
    price: 265,
    currency: '£',
    imageUrl: '/images/products/model-4.svg',
    collection: 'Lamani summer edition',
    description: 'Premium black two-piece yoga set from our summer collection.',
    details: ['Stretchy fabric', 'High-waisted', 'Sports bra and leggings'],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['Black'],
    category: 'WOMEN',
    subcategory: '2-PIECE SETS',
    inStock: true,
    featured: false,
    newArrival: true
  },
  {
    id: 'prod_023',
    name: 'Grey Comfort Set',
    price: 285,
    currency: '£',
    imageUrl: '/images/products/model-10.svg',
    collection: 'Lamani summer edition',
    description: 'Premium grey two-piece comfort set from our summer collection.',
    details: ['Soft cotton', 'Relaxed fit', 'Hoodie and shorts'],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['Grey'],
    category: 'WOMEN',
    subcategory: '2-PIECE SETS',
    inStock: true,
    featured: true,
    newArrival: false
  },

  // UNISEX HOODIES
  {
    id: 'prod_024',
    name: 'White Oversized Hoodie',
    price: 145,
    currency: '£',
    imageUrl: '/images/products/model-2.svg',
    collection: 'Lamani summer edition',
    description: 'Premium white oversized hoodie from our summer collection.',
    details: ['100% Cotton', 'Oversized fit', 'Kangaroo pocket'],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['White'],
    category: 'UNISEX',
    subcategory: 'HOODIES',
    inStock: true,
    featured: true,
    newArrival: true
  },
  {
    id: 'prod_025',
    name: 'Navy Essential Hoodie',
    price: 135,
    currency: '£',
    imageUrl: '/images/products/model-6.svg',
    collection: 'Lamani summer edition',
    description: 'Premium navy essential hoodie from our summer collection.',
    details: ['Cotton blend', 'Regular fit', 'Drawstring hood'],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['Navy'],
    category: 'UNISEX',
    subcategory: 'HOODIES',
    inStock: true,
    featured: false,
    newArrival: true
  },
  {
    id: 'prod_026',
    name: 'Grey Pullover Hoodie',
    price: 155,
    currency: '£',
    imageUrl: '/images/products/model-8.svg',
    collection: 'Lamani summer edition',
    description: 'Premium grey pullover hoodie from our summer collection.',
    details: ['Heavy cotton', 'Relaxed fit', 'Ribbed cuffs'],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['Grey'],
    category: 'UNISEX',
    subcategory: 'HOODIES',
    inStock: true,
    featured: true,
    newArrival: false
  },

  //UNISEX TSHIRTS
  {
    id: 'prod_027',
    name: 'Classic White Tee',
    price: 65,
    currency: '£',
    imageUrl: '/images/products/model-7.svg',
    collection: 'Lamani summer edition',
    description: 'Premium classic white t-shirt from our summer collection.',
    details: ['100% Organic Cotton', 'Classic fit', 'Crew neck'],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['White'],
    category: 'UNISEX',
    subcategory: 'TSHIRTS',
    inStock: true,
    featured: true,
    newArrival: true
  },
  {
    id: 'prod_028',
    name: 'Navy Basic Tee',
    price: 58,
    currency: '£',
    imageUrl: '/images/products/model-1.svg',
    collection: 'Lamani summer edition',
    description: 'Premium navy basic t-shirt from our summer collection.',
    details: ['Cotton blend', 'Regular fit', 'Short sleeves'],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['Navy'],
    category: 'UNISEX',
    subcategory: 'TSHIRTS',
    inStock: true,
    featured: false,
    newArrival: true
  },
  {
    id: 'prod_029',
    name: 'Black Essential Tee',
    price: 62,
    currency: '£',
    imageUrl: '/images/products/model-9.svg',
    collection: 'Lamani summer edition',
    description: 'Premium black essential t-shirt from our summer collection.',
    details: ['Soft cotton', 'Slim fit', 'Reinforced seams'],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['Black'],
    category: 'UNISEX',
    subcategory: 'TSHIRTS',
    inStock: true,
    featured: true,
    newArrival: false
  },

  // UNISEX SETS
  {
    id: 'prod_030',
    name: 'Essential Coordinate Set',
    price: 225,
    currency: '£',
    imageUrl: '/images/products/model-11.svg',
    collection: 'Lamani summer edition',
    description: 'Premium essential coordinate set from our summer collection.',
    details: ['Cotton blend', 'Matching pieces', 'Versatile styling'],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['Grey'],
    category: 'UNISEX',
    subcategory: 'SETS',
    inStock: true,
    featured: true,
    newArrival: true
  },
  {
    id: 'prod_031',
    name: 'Minimal Capsule Set',
    price: 195,
    currency: '£',
    imageUrl: '/images/products/model-12.svg',
    collection: 'Lamani summer edition',
    description: 'Premium minimal capsule set from our summer collection.',
    details: ['Sustainable fabric', 'Timeless design', 'Mix and match'],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['White'],
    category: 'UNISEX',
    subcategory: 'SETS',
    inStock: true,
    featured: false,
    newArrival: true
  },
  {
    id: 'prod_032',
    name: 'Urban Street Set',
    price: 245,
    currency: '£',
    imageUrl: '/images/products/model-13.svg',
    collection: 'Lamani summer edition',
    description: 'Premium urban street set from our summer collection.',
    details: ['Streetwear inspired', 'Oversized fit', 'Statement pieces'],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['Black'],
    category: 'UNISEX',
    subcategory: 'SETS',
    inStock: true,
    featured: true,
    newArrival: false
  }
];

/**
 * Fetch all products
 */
export async function getAllProducts(): Promise<Product[]> {
  return mockProducts;
}

/**
 * Fetch products by category and subcategory
 */
export async function getProductsByCategoryAndSubcategory(
  category: string,
  subcategory?: string
): Promise<Product[]> {
  const categoryUpper = category.toUpperCase();
  
  if (subcategory) {
    const subcategoryUpper = subcategory.toUpperCase();
    return mockProducts.filter(
      (product) => 
        product.category === categoryUpper && 
        product.subcategory === subcategoryUpper
    );
  }
  
  return mockProducts.filter(
    (product) => product.category === categoryUpper
  );
}

/**
 * Fetch a single product by ID
 */
export async function getProductById(id: string): Promise<Product | null> {
  const product = mockProducts.find((p) => p.id === id);
  return product || null;
}

/**
 * Fetch featured products
 */
export async function getFeaturedProducts(): Promise<Product[]> {
  return mockProducts.filter((product) => product.featured);
}

/**
 * Fetch new arrivals
 */
export async function getNewArrivals(): Promise<Product[]> {
  return mockProducts.filter((product) => product.newArrival);
}