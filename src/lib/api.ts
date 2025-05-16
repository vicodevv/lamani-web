
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
    category: 'WOMEN',
    subcategory: 'ACTIVEWEAR',
    inStock: true,
    featured: true,
    newArrival: true
  },
  {
    id: 'prod_002',
    name: 'White Zip Hoodie',
    price: 215,
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
    price: 215,
    currency: '£',
    imageUrl: '/images/products/model-3.svg',
    collection: 'Lamani summer edition',
    description: 'Premium grey polo shirt from our summer collection.',
    details: ['100% Cotton', 'Relaxed fit', 'Half-zip collar'],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['Grey'],
    category: 'WOMEN',
    subcategory: 'ACTIVEWEAR',
    inStock: true,
    featured: true,
    newArrival: false
  },
  {
    id: 'prod_004',
    name: 'Black Knit Vest',
    price: 215,
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
    price: 215,
    currency: '£',
    imageUrl: '/images/products/model-5.svg',
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
    id: 'prod_006',
    name: 'Navy Polo Shirt',
    price: 215,
    currency: '£',
    imageUrl: '/images/products/model-1.svg',
    collection: 'Lamani summer edition',
    description: 'Premium navy polo shirt from our summer collection.',
    details: ['100% Cotton', 'Relaxed fit', 'Half-zip collar'],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['Navy'],
    category: 'WOMEN',
    subcategory: 'ACTIVEWEAR',
    inStock: true,
    featured: true,
    newArrival: true
  },
  {
    id: 'prod_007',
    name: 'White Zip Hoodie',
    price: 215,
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
    id: 'prod_008',
    name: 'Grey Polo Shirt',
    price: 215,
    currency: '£',
    imageUrl: '/images/products/model-3.svg',
    collection: 'Lamani summer edition',
    description: 'Premium grey polo shirt from our summer collection.',
    details: ['100% Cotton', 'Relaxed fit', 'Half-zip collar'],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['Grey'],
    category: 'WOMEN',
    subcategory: 'ACTIVEWEAR',
    inStock: true,
    featured: true,
    newArrival: false
  },
  {
    id: 'prod_009',
    name: 'Black Knit Vest',
    price: 215,
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
    id: 'prod_010',
    name: 'Grey Zip Hoodie',
    price: 215,
    currency: '£',
    imageUrl: '/images/products/model-5.svg',
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